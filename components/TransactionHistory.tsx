import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';
import useAuth from '../lib/auth';

const TransactionHistory: React.FC = () => {
  const { user, loading } = useAuth();
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (user) {
        const response = await axios.get('/user/transactions');
        setTransactions(response.data.data);
      }
    };
    fetchTransactions();
  }, [user]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="transaction-history">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <ul>
        {transactions.map((txn, index) => (
          <li key={index} className="mb-2">
            <span>{new Date(txn.date).toLocaleDateString()}</span> - <span>${txn.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
