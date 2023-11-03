import React, { useState, useEffect } from 'react';
import './users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getUsersList() {
      try {
        const response = await fetch('https://boookyuz.pythonanywhere.com/users/', {
          method: 'GET',
          // You can add headers or other options here if needed
        });

        if (!response.ok) {
          throw new Error(`Error fetching user data: ${response.status}`);
        }

        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error('An error occurred while fetching user data:', error);
      }
    }

    getUsersList();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="table">
      <section className="table__header">
        <h1>Customer's Orders</h1>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Data..."
            value={search}
            onChange={handleSearchChange}
          />
          <img src="images/search.png" alt="" />
        </div>
        {/* Add your export file options here */}
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>Id <span className="icon-arrow">&UpArrow;</span></th>
              <th>Image</th>
              <th>Nickname</th>
              <th>Familiyasi</th>
              <th>Ismi </th>
              <th>Role</th>
              <th>Email</th>
              <th>Coin</th>
            </tr>
          </thead>
          <tbody>
            {users
              .map((user) => (
                  <tr key={user.id}>
                    <a href={`http://localhost:5173/users/${user.id}`}>
                  <td>{user.id}</td>
                  <td>
                    <img src={user.img} alt="" />
                  </td>
                  <td>{user.username}</td>
                  <td>{user.last_name}</td>
                  <td>{user.first_name}</td>
                  <td>{user.staff}</td>
                  <td>{user.email}</td>
                  <td>{user.coin}</td>
                </a>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Users;
