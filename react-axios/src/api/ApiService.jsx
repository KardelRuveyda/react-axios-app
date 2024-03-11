import axios from 'axios';

const baseURL = 'http://localhost:3000';

function Apiservice () {
  // Tüm gönderileri getiren GET isteği
  const getAllUsers = () => {
    return axios.get(`${baseURL}/users`);
  };

  // Yeni gönderi ekleyen POST isteği
  const addUser = (postData) => {
    return axios.post(`${baseURL}/users`, postData);
  };

  // Belirli bir gönderiyi güncelleyen PUT isteği
  const updateUser = (postId, putData) => {
    return axios.put(`${baseURL}/users/${postId}`, putData);
  };

  // Belirli bir gönderiyi silen DELETE isteği
  const deleteUser = (postId) => {
    return axios.delete(`${baseURL}/users/${postId}`);
  };

  return {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
  };
};

export default Apiservice;
