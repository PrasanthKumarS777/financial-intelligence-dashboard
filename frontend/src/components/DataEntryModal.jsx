import React, { useState } from 'react';
import { X, DollarSign, CreditCard, Target, Zap } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

const DataEntryModal = ({ type, onClose, onDataAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    type: type === 'transactions' ? 'expense' : '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    holder: '',
    lastFour: '',
    expiry: '',
    bank: '',
    target: '',
    current: '',
    dueDate: '',
    status: 'pending'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const user = auth.currentUser;
      
      if (!user) {
        throw new Error('You must be logged in to add data');
      }

      let dataToSave = {};
      let collectionName = '';

      // Prepare data based on type
      switch (type) {
        case 'transactions':
          if (!formData.name || !formData.amount || !formData.type || !formData.category || !formData.date) {
            throw new Error('Please fill in all required fields');
          }
          dataToSave = {
            name: formData.name,
            amount: parseFloat(formData.amount),
            type: formData.type,
            category: formData.category,
            date: formData.date,
            createdAt: serverTimestamp()
          };
          collectionName = 'transactions';
          break;

        case 'cards':
          if (!formData.holder || !formData.lastFour || !formData.expiry) {
            throw new Error('Please fill in all required fields');
          }
          dataToSave = {
            holder: formData.holder,
            lastFour: formData.lastFour,
            expiry: formData.expiry,
            bank: formData.bank || 'Bank',
            createdAt: serverTimestamp()
          };
          collectionName = 'cards';
          break;

        case 'goals':
          if (!formData.name || !formData.target || !formData.current) {
            throw new Error('Please fill in all required fields');
          }
          dataToSave = {
            name: formData.name,
            target: parseFloat(formData.target),
            current: parseFloat(formData.current),
            createdAt: serverTimestamp()
          };
          collectionName = 'goals';
          break;

        case 'bills':
          if (!formData.name || !formData.amount || !formData.dueDate) {
            throw new Error('Please fill in all required fields');
          }
          dataToSave = {
            name: formData.name,
            amount: parseFloat(formData.amount),
            dueDate: formData.dueDate,
            status: formData.status,
            createdAt: serverTimestamp()
          };
          collectionName = 'bills';
          break;

        default:
          throw new Error('Invalid data type');
      }

      // Add to Firestore
      const userDocRef = collection(db, 'users', user.uid, collectionName);
      await addDoc(userDocRef, dataToSave);

      // Success!
      onDataAdded();
      onClose();
    } catch (err) {
      console.error('Error adding data:', err);
      setError(err.message || 'Failed to add data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getModalTitle = () => {
    const titles = {
      transactions: 'Add Transaction',
      cards: 'Add Credit Card',
      goals: 'Set Savings Goal',
      bills: 'Add Bill'
    };
    return titles[type] || 'Add Data';
  };

  const getModalIcon = () => {
    const icons = {
      transactions: <DollarSign size={24} />,
      cards: <CreditCard size={24} />,
      goals: <Target size={24} />,
      bills: <Zap size={24} />
    };
    return icons[type] || <DollarSign size={24} />;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <div className="modal-icon">{getModalIcon()}</div>
            <h2>{getModalTitle()}</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {error && (
          <div className="error-message" style={{ marginBottom: '1rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="data-entry-form">
          {/* Transaction Fields */}
          {type === 'transactions' && (
            <>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Transaction name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount *"
                  value={formData.amount}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="form-row">
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type *</option>
                  <option value="income">Income (+)</option>
                  <option value="expense">Expense (-)</option>
                </select>
              </div>
              <div className="form-row">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category *</option>
                  <option value="salary">Salary</option>
                  <option value="freelance">Freelance</option>
                  <option value="investment">Investment</option>
                  <option value="food">Food</option>
                  <option value="shopping">Shopping</option>
                  <option value="bills">Bills</option>
                  <option value="transport">Transport</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-row">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Card Fields */}
          {type === 'cards' && (
            <>
              <div className="form-row">
                <input
                  type="text"
                  name="holder"
                  placeholder="Card holder name *"
                  value={formData.holder}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="lastFour"
                  placeholder="Last 4 digits *"
                  value={formData.lastFour}
                  onChange={handleChange}
                  maxLength="4"
                  pattern="[0-9]{4}"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiry (MM/YY) *"
                  value={formData.expiry}
                  onChange={handleChange}
                  maxLength="5"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="bank"
                  placeholder="Bank name"
                  value={formData.bank}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* Goal Fields */}
          {type === 'goals' && (
            <>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Goal name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="number"
                  name="target"
                  placeholder="Target amount *"
                  value={formData.target}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="number"
                  name="current"
                  placeholder="Current amount *"
                  value={formData.current}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </>
          )}

          {/* Bill Fields */}
          {type === 'bills' && (
            <>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Bill name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount *"
                  value={formData.amount}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="pending">Pending</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </>
          )}

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Adding...' : `Add ${type === 'transactions' ? 'transaction' : type === 'cards' ? 'card' : type === 'goals' ? 'goal' : 'bill'}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataEntryModal;
