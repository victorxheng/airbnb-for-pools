import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/admin/users');
      setUsers(response.data.data);
    };
    fetchUsers();
  }, []);

  const handleUserUpdate = async (userId: string, data: any) => {
    try {
      await axios.put(`/admin/users/${userId}`, data);
      setUsers(users.map((user) => (user._id === userId ? { ...user, ...data } : user)));
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  const handleUserDelete = async (userId: string) => {
    try {
      await axios.delete(`/admin/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <div key={index} className="border p-4">
            <h3 className="text-xl font-bold mb-2">{user.name}</h3>
            <p className="mb-2">Email: {user.email}</p>
            <p className="mb-4">Role: {user.role}</p>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white p-2 rounded" onClick={() => handleUserUpdate(user._id, { role: user.role === 'admin' ? 'user' : 'admin' })}>Toggle Role</button>
              <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleUserDelete(user._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserManagement;
