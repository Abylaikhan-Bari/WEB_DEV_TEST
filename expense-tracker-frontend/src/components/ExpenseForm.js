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
      author: "User123",
      sum: parseFloat(amount),
      category,
      comment,
    };

    try {
      await axios.post('http://localhost:3000/transactions', transaction);
      alert('Transaction submitted successfully!');
      // Reset form
      setDate(new Date());
      setAmount('');
      setCategory('');
      setComment('');
    } catch (error) {
      console.error('Error submitting transaction', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Expense Tracker</h2>

      <label>Date:</label>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />

      <label>Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
      </select>

      <label>Comment:</label>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
