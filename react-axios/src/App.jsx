import React, { useState, useEffect } from 'react';
import ApiService from './api/ApiService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUserData, setNewUserData] = useState({
    username: ''
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const apiService = new ApiService();

  useEffect(() => {
    // Sayfa yüklendiğinde tüm kullanıcıları getir
    apiService.getAllUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    // Yeni kullanıcıyı oluştur
    apiService.addUser(newUserData)
      .then(response => {
        setUsers(prevUsers => [...prevUsers, response.data]);
        setNewUserData({
          username: ''
        });
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  const handleDeleteUser = (userId) => {
    // Kullanıcıyı sil
    apiService.deleteUser(userId)
      .then(() => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setNewUserData({
      username: user.username
    });
  };

  const handleUpdateUser = () => {
    // Kullanıcıyı güncelle
    apiService.updateUser(selectedUser.id, newUserData)
      .then(response => {
        setUsers(prevUsers =>
          prevUsers.map(user => (user.id === selectedUser.id ? response.data : user))
        );
        setSelectedUser(null);
        setNewUserData({
          username: ''
        });
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (selectedUser) {
        handleUpdateUser();
      } else {
        handleAddUser();
      }
    }
  };

  

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>{user.username}</h2>
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <>
          <h2>Edit User</h2>
          <input type="text" name="username" placeholder="Username" value={newUserData.username} onChange={handleInputChange} onKeyDown={handleKeyDown} />
          <button onClick={handleUpdateUser}>Update User</button>
        </>
      )}
      {!selectedUser && (
        <>
          <h2>Add New User</h2>
          <input type="text" name="username" placeholder="Username" value={newUserData.username} onChange={handleInputChange} onKeyDown={handleKeyDown} />
          <button onClick={handleAddUser}>Add User</button>
        </>
      )}
    </div>
  );
};

export default App;
