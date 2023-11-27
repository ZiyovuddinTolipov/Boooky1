import React, { useState, useEffect } from 'react';
import './users.css';
import { Link } from 'react-router-dom';
import premumUser from "../../assets/premum-user.svg";
// import adminAvatar from "../../assets/admin-avatar.png";
import defaultUser from "../../assets/user.png"
import adminStaff from "../../assets/admin-staff.png";

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
        <h1>Foydalanuvchilar reytingi</h1>
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
            {users
              .map((user) => (
                  <tr key={user.id} className='hover:bg-slate-200 transition'>
                  <td>{user.id}</td>
                  <td>
                    <img src={user.img?user.img:defaultUser} alt="user" />
                  </td>
                  <td >
                    <Link to={`/users/${user.id}`} className='flex items-center gap-1'>
                      {user.username}<img src={user.staff=="admin"?adminStaff:premumUser} alt="premum" className='w-[20px] h-[20px]' />
                    </Link></td>
                  <td>{user.last_name? user.last_name: <p className='text-red-500 bg-red-200 text-center py-1 rounded-md will-change-contents'>Kiritilmagan!</p>}</td>
                  <td>{user.first_name? user.first_name: "Kiritilmagan!"}</td>
                  <td className={user.staff=="admin"?"text-blue-800 uppercase font-semibold":""}>{user.staff}</td>
                  <td><Link to={"mailto:"+user.email?user.email:user.username+"@boooky.uz"}>{user.email?user.email:user.username+"@boooky.uz"}</Link></td>
                  <td>{user.coin?user.coin: "Mavjud emas"}</td>
                </tr>
              ))}
        </table>
      </section>
    </div>
  );
};

export default Users;
