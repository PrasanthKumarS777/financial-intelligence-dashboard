import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Home, ShoppingBag, BarChart3, CreditCard, Target, 
  Settings, Search, Bell, Calendar, DollarSign, ArrowUpRight, 
  ArrowDownRight, Users, PieChart, Send, Download, RefreshCw,
  AlertCircle, CheckCircle, Coffee, Wifi, Zap, Database,
  Code, Layers, Box, Package, Shield, Wallet, Plus, LogOut
} from 'lucide-react';
import { 
  LineChart, Line, PieChart as RePieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, onSnapshot, orderBy, limit } from 'firebase/firestore';
import { auth, db } from './firebase';
import './App.css';
import CustomCursor from './components/CustomCursor';
import RotatingCube from './components/RotatingCube';
import Auth from './components/Auth';
import DataEntryModal from './components/DataEntryModal';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  
  // Real data from Firebase
  const [transactions, setTransactions] = useState([]);
  const [cards, setCards] = useState([]);
  const [goals, setGoals] = useState([]);
  const [bills, setBills] = useState([]);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch user data from Firebase
  useEffect(() => {
    if (!user) return;

    const userId = user.uid;

    // Fetch Transactions
    const transactionsQuery = query(
      collection(db, 'users', userId, 'transactions'),
      orderBy('createdAt', 'desc'),
      limit(10)
    );
    const unsubTransactions = onSnapshot(transactionsQuery, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(data);
    });

    // Fetch Cards
    const cardsQuery = query(collection(db, 'users', userId, 'cards'));
    const unsubCards = onSnapshot(cardsQuery, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCards(data);
    });

    // Fetch Goals
    const goalsQuery = query(collection(db, 'users', userId, 'goals'));
    const unsubGoals = onSnapshot(goalsQuery, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGoals(data);
    });

    // Fetch Bills
    const billsQuery = query(collection(db, 'users', userId, 'bills'));
    const unsubBills = onSnapshot(billsQuery, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBills(data);
    });

    return () => {
      unsubTransactions();
      unsubCards();
      unsubGoals();
      unsubBills();
    };
  }, [user]);

  // Calculate totals from real data
  const calculateTotals = () => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + Number(t.amount), 0);
    
    const totalExpense = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + Number(t.amount), 0);
    
    const totalBalance = totalIncome - totalExpense;
    
    const emergencyFunds = goals
      .find(g => g.name?.toLowerCase().includes('emergency'))?.current || 0;
    
    const reserveFunds = totalBalance * 0.3; // 30% of balance as reserve

    return {
      totalBalance,
      totalIncome,
      totalExpense,
      emergencyFunds,
      reserveFunds
    };
  };

  const totals = calculateTotals();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
  };

  const handleDataAdded = () => {
    // Data will auto-refresh via onSnapshot listeners
  };

  // Show loading
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p style={{ color: '#dc2626', marginTop: '1rem', fontSize: '1.2rem' }}>Loading FinanceHub...</p>
      </div>
    );
  }

  // Show auth if not logged in (WITHOUT CustomCursor)
  if (!user) {
    return <Auth onAuthSuccess={() => setUser(auth.currentUser)} />;
  }

  // Prepare chart data from real transactions
  const getChartData = () => {
    const monthlyData = {};
    transactions.forEach(t => {
      if (t.date) {
        const month = new Date(t.date).toLocaleDateString('en-US', { month: 'short' });
        if (!monthlyData[month]) {
          monthlyData[month] = { month, income: 0, expense: 0 };
        }
        if (t.type === 'income') {
          monthlyData[month].income += Number(t.amount);
        } else {
          monthlyData[month].expense += Number(t.amount);
        }
      }
    });
    return Object.values(monthlyData).slice(-6);
  };

  const chartData = getChartData();

  // Prepare expense breakdown
  const getExpenseData = () => {
    const categories = {};
    transactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        const cat = t.category || 'Other';
        categories[cat] = (categories[cat] || 0) + Number(t.amount);
      });
    
    const colors = ['#dc2626', '#ef4444', '#f87171', '#fca5a5', '#fee2e2'];
    return Object.entries(categories).map(([name, value], index) => ({
      name,
      value,
      color: colors[index % colors.length]
    }));
  };

  const expenseData = getExpenseData();

  const getIcon = (category) => {
    const icons = {
      food: <Coffee size={20} />,
      shopping: <ShoppingBag size={20} />,
      bills: <Zap size={20} />,
      salary: <DollarSign size={20} />,
      transport: <Target size={20} />
    };
    return icons[category?.toLowerCase()] || <DollarSign size={20} />;
  };

  return (
    <div className="app">
      {/* CustomCursor only shows after login */}
      <CustomCursor />
      
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo with Rotating Cube */}
        <div className="logo">
          <TrendingUp className="logo-icon" size={32} />
          <h1>FINANCEHUB</h1>
          <div className="logo-cube">
            <RotatingCube />
          </div>
        </div>

        <ul className="nav-menu">
          <li 
            className={`nav-item ${activeNav === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveNav('overview')}
          >
            <Home size={20} />
            <span>Overview</span>
          </li>
          <li 
            className={`nav-item ${activeNav === 'transactions' ? 'active' : ''}`}
            onClick={() => setActiveNav('transactions')}
          >
            <ShoppingBag size={20} />
            <span>Transactions</span>
          </li>
          <li 
            className={`nav-item ${activeNav === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveNav('analytics')}
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </li>
          <li 
            className={`nav-item ${activeNav === 'cards' ? 'active' : ''}`}
            onClick={() => setActiveNav('cards')}
          >
            <CreditCard size={20} />
            <span>Cards</span>
          </li>
          <li 
            className={`nav-item ${activeNav === 'goals' ? 'active' : ''}`}
            onClick={() => setActiveNav('goals')}
          >
            <Target size={20} />
            <span>Goals</span>
          </li>
          <li 
            className={`nav-item ${activeNav === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveNav('settings')}
          >
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="welcome">
            <h2>Welcome Back, {user.email?.split('@')[0]}! 👋</h2>
            <p>Here's what's happening with your money today</p>
          </div>

          <div className="header-actions">
            <div className="search-bar">
              <Search size={20} />
              <input type="text" placeholder="Search transactions..." />
            </div>
            
            <button className="icon-button">
              <Calendar size={20} />
            </button>
            
            <button className="icon-button">
              <Bell size={20} />
              <span className="notification-badge">{bills.filter(b => b.status === 'pending').length}</span>
            </button>

            <div className="user-profile">
              <div className="user-avatar">
                {user.email?.[0].toUpperCase()}
              </div>
              <div className="user-info">
                <div className="user-name">{user.email?.split('@')[0]}</div>
                <div className="user-role">Premium User</div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Total Balance</span>
              <div className="kpi-icon">
                <DollarSign size={24} />
              </div>
            </div>
            <div className="kpi-value">₹{totals.totalBalance.toLocaleString()}</div>
            <div className="kpi-change positive">
              <ArrowUpRight size={16} />
              <span>Income - Expenses</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Total Income</span>
              <div className="kpi-icon">
                <TrendingUp size={24} />
              </div>
            </div>
            <div className="kpi-value">₹{totals.totalIncome.toLocaleString()}</div>
            <div className="kpi-change positive">
              <ArrowUpRight size={16} />
              <span>{transactions.filter(t => t.type === 'income').length} transactions</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Emergency Funds</span>
              <div className="kpi-icon">
                <Shield size={24} />
              </div>
            </div>
            <div className="kpi-value">₹{totals.emergencyFunds.toLocaleString()}</div>
            <div className="kpi-change positive">
              <ArrowUpRight size={16} />
              <span>Safety net secured</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Reserve Funds</span>
              <div className="kpi-icon">
                <Wallet size={24} />
              </div>
            </div>
            <div className="kpi-value">₹{totals.reserveFunds.toLocaleString()}</div>
            <div className="kpi-change positive">
              <ArrowUpRight size={16} />
              <span>Available for investment</span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="charts-grid-enhanced">
          <div className="chart-card chart-full-width">
            <div className="chart-header">
              <h3>Income vs Expenses Trend</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                {chartData.length > 0 ? 'Your financial journey' : 'Add transactions to see trends'}
              </p>
            </div>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(220, 38, 38, 0.1)" />
                  <XAxis dataKey="month" stroke="rgba(255, 255, 255, 0.5)" />
                  <YAxis stroke="rgba(255, 255, 255, 0.5)" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(10, 10, 10, 0.95)', 
                      border: '1px solid rgba(220, 38, 38, 0.3)',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={3} />
                  <Line type="monotone" dataKey="expense" stroke="#dc2626" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="empty-state">
                <BarChart3 size={48} />
                <p>No transaction data yet. Start adding transactions!</p>
              </div>
            )}
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <h3>Expense Breakdown</h3>
            </div>
            {expenseData.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <RePieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(10, 10, 10, 0.95)', 
                      border: '1px solid rgba(220, 38, 38, 0.3)',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                </RePieChart>
              </ResponsiveContainer>
            ) : (
              <div className="empty-state">
                <PieChart size={48} />
                <p>No expense data available</p>
              </div>
            )}
          </div>

          {/* AIR KPI Card */}
          <div className="air-kpi-card">
            <div className="air-kpi-header">
              <div className="air-icon-container">
                <ShoppingBag size={40} />
              </div>
              <div className="air-badge">AIR</div>
            </div>
            
            <div className="air-kpi-content">
              <h3>Total Money Spent</h3>
              <div className="air-amount">₹{totals.totalExpense.toLocaleString()}</div>
              <div className="air-subtitle">All Inclusive Ratio</div>
              
              <div className="air-breakdown">
                <div className="air-item">
                  <span className="air-label">Total Spent</span>
                  <span className="air-value">₹{totals.totalExpense.toLocaleString()}</span>
                </div>
                <div className="air-item">
                  <span className="air-label">Transactions</span>
                  <span className="air-value">{transactions.filter(t => t.type === 'expense').length}</span>
                </div>
                <div className="air-item">
                  <span className="air-label">Income Ratio</span>
                  <span className="air-value">
                    {totals.totalIncome > 0 ? `${((totals.totalExpense / totals.totalIncome) * 100).toFixed(1)}%` : '0%'}
                  </span>
                </div>
              </div>

              <div className="air-progress">
                <div className="air-progress-bar">
                  <div 
                    className="air-progress-fill" 
                    style={{ width: `${Math.min((totals.totalExpense / totals.totalIncome) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="air-progress-text">
                  {totals.totalIncome > 0 
                    ? `${((totals.totalExpense / totals.totalIncome) * 100).toFixed(1)}% of income spent`
                    : 'No income data'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Cards */}
        <div className="credit-cards">
          <div className="section-header">
            <h3>My Credit Cards</h3>
            <div className="section-header-actions">
              <button className="add-new-btn" onClick={() => openModal('cards')}>
                <Plus size={18} /> Add Card
              </button>
            </div>
          </div>
          <div className="cards-container">
            {cards.length > 0 ? (
              cards.map((card) => (
                <div key={card.id} className="credit-card">
                  <div className="card-chip"></div>
                  <div className="card-number">**** **** **** {card.lastFour}</div>
                  <div className="card-footer">
                    <div className="card-holder">
                      <p>Card Holder</p>
                      <p>{card.holder}</p>
                    </div>
                    <div className="card-expiry">
                      <p>Expires</p>
                      <p>{card.expiry}</p>
                    </div>
                    <div className="card-logo">VISA</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                <CreditCard size={48} />
                <h4>No cards added yet</h4>
                <p>Click "Add Card" to add your first credit card</p>
              </div>
            )}
          </div>
        </div>

        {/* Transactions & Goals */}
        <div className="grid-2col">
          <div className="section-card">
            <div className="section-header">
              <h3>Recent Transactions</h3>
              <button className="add-new-btn" onClick={() => openModal('transactions')}>
                <Plus size={16} /> Add
              </button>
            </div>
            <div className="transaction-list">
              {transactions.length > 0 ? (
                transactions.slice(0, 8).map(transaction => (
                  <div key={transaction.id} className="transaction-item">
                    <div className="transaction-left">
                      <div className="transaction-icon">{getIcon(transaction.category)}</div>
                      <div className="transaction-info">
                        <div className="transaction-name">{transaction.name}</div>
                        <div className="transaction-date">
                          {new Date(transaction.date).toLocaleDateString('en-IN', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                    </div>
                    <div className={`transaction-amount ${transaction.type}`}>
                      {transaction.type === 'income' ? '+' : '-'}₹{Number(transaction.amount).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <ShoppingBag size={48} />
                  <h4>No transactions yet</h4>
                  <p>Start tracking your finances by adding transactions</p>
                </div>
              )}
            </div>
          </div>

          <div className="section-card">
            <div className="section-header">
              <h3>Savings Goals</h3>
              <button className="add-new-btn" onClick={() => openModal('goals')}>
                <Plus size={16} /> Add
              </button>
            </div>
            <div className="goals-list">
              {goals.length > 0 ? (
                goals.map(goal => (
                  <div key={goal.id} className="goal-item">
                    <div className="goal-left">
                      <div className="goal-icon"><Target size={20} /></div>
                      <div className="goal-info">
                        <div className="goal-name">{goal.name}</div>
                        <div className="goal-progress">
                          ₹{Number(goal.current).toLocaleString()} of ₹{Number(goal.target).toLocaleString()}
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${(goal.current / goal.target) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="goal-amount">
                      {Math.round((goal.current / goal.target) * 100)}%
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <Target size={48} />
                  <h4>No goals set yet</h4>
                  <p>Set your first savings goal to start tracking progress</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bills */}
        <div className="section-card" style={{ marginBottom: '2rem' }}>
          <div className="section-header">
            <h3>Upcoming Bills</h3>
            <button className="add-new-btn" onClick={() => openModal('bills')}>
              <Plus size={16} /> Add Bill
            </button>
          </div>
          <div className="bills-list">
            {bills.length > 0 ? (
              bills.map(bill => (
                <div key={bill.id} className="bill-item">
                  <div className="bill-left">
                    <div className="bill-icon"><Zap size={20} /></div>
                    <div className="bill-info">
                      <div className="bill-name">{bill.name}</div>
                      <div className="bill-date">
                        Due: {new Date(bill.dueDate).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="bill-amount">₹{Number(bill.amount).toLocaleString()}</div>
                    <span className={`bill-status ${bill.status}`}>
                      {bill.status === 'paid' ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <Zap size={48} />
                <h4>No bills added</h4>
                <p>Add your upcoming bills to track payments</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <div className="section-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="actions-grid">
            <div className="action-button" onClick={() => openModal('transactions')}>
              <div className="action-icon"><Plus size={24} /></div>
              <div className="action-text">
                <h4>Add Transaction</h4>
                <p>Record income or expense</p>
              </div>
            </div>
            <div className="action-button" onClick={() => openModal('goals')}>
              <div className="action-icon"><Target size={24} /></div>
              <div className="action-text">
                <h4>Set Goal</h4>
                <p>Create savings target</p>
              </div>
            </div>
            <div className="action-button" onClick={() => openModal('cards')}>
              <div className="action-icon"><CreditCard size={24} /></div>
              <div className="action-text">
                <h4>Add Card</h4>
                <p>Track credit cards</p>
              </div>
            </div>
            <div className="action-button" onClick={() => openModal('bills')}>
              <div className="action-icon"><Zap size={24} /></div>
              <div className="action-text">
                <h4>Add Bill</h4>
                <p>Never miss a payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Entry Modal */}
      {showModal && (
        <DataEntryModal 
          type={modalType}
          onClose={closeModal}
          onDataAdded={handleDataAdded}
        />
      )}
    </div>
  );
}

export default App;
