import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function ExpenseForm() {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      dateTime: date,
      author: "User123", // You might replace this with a real user
      sum: parseFloat(amount),
      category,
      comment,
    };

    try {
      await axios.post('http://localhost:3000/transactions', transaction);
      alert('Transaction submitted successfully!');
      // Clear form
      setDate(new Date());
      setAmount('');
      setCategory('');
      setComment('');
    } catch (error) {
      console.error('Error submitting transaction', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Expense Tracker</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Date</label>
          <DatePicker selected={date} onChange={(date) => setDate(date)} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
