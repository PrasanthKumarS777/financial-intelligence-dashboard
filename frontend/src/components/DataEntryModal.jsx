import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { X, Plus, DollarSign, CreditCard, Target, Receipt } from 'lucide-react';

const DataEntryModal = ({ onClose, type, onDataAdded }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userId = auth.currentUser.uid;
      
      await addDoc(collection(db, 'users', userId, type), {
        ...formData,
        createdAt: serverTimestamp(),
        userId: userId
      });

      alert(`${type.slice(0, -1)} added successfully!`);
      onDataAdded();
      onClose();
    } catch (error) {
      console.error('Error adding document:', error);
      alert('Failed to add data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderForm = () => {
    switch(type) {
      case 'transactions':
        return (
          <>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Transaction Name (e.g., Grocery Shopping)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="amount"
                placeholder="Amount (₹)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <select name="type" onChange={handleChange} required>
                <option value="">Select Type</option>
                <option value="income">Income (+)</option>
                <option value="expense">Expense (-)</option>
              </select>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="category"
                placeholder="Category (e.g., Food, Salary, Bills)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="date"
                name="date"
                onChange={handleChange}
                required
              />
            </div>
          </>
        );

      case 'cards':
        return (
          <>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Card Name (e.g., HDFC Platinum)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="lastFour"
                placeholder="Last 4 Digits"
                maxLength="4"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="holder"
                placeholder="Cardholder Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="expiry"
                placeholder="Expiry (MM/YY)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="balance"
                placeholder="Available Balance (₹)"
                onChange={handleChange}
                required
              />
            </div>
          </>
        );

      case 'goals':
        return (
          <>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Goal Name (e.g., New Laptop)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="target"
                placeholder="Target Amount (₹)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="current"
                placeholder="Current Saved Amount (₹)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="date"
                name="deadline"
                placeholder="Target Date"
                onChange={handleChange}
              />
            </div>
          </>
        );

      case 'bills':
        return (
          <>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Bill Name (e.g., Electricity)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="number"
                name="amount"
                placeholder="Amount (₹)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="date"
                name="dueDate"
                placeholder="Due Date"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <select name="status" onChange={handleChange} required>
                <option value="">Payment Status</option>
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  const getIcon = () => {
    switch(type) {
      case 'transactions': return <DollarSign size={28} />;
      case 'cards': return <CreditCard size={28} />;
      case 'goals': return <Target size={28} />;
      case 'bills': return <Receipt size={28} />;
      default: return <Plus size={28} />;
    }
  };

  const getTitle = () => {
    const titles = {
      transactions: 'Add New Transaction',
      cards: 'Add New Card',
      goals: 'Add New Goal',
      bills: 'Add New Bill'
    };
    return titles[type];
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <div className="modal-icon">{getIcon()}</div>
            <h2>{getTitle()}</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="data-entry-form">
          {renderForm()}
          
          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Adding...' : 'Add ' + type.slice(0, -1)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataEntryModal;
