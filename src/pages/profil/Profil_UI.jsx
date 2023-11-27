import  { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Aside from './components/Aside';
import SolvedProblems from './components/SolvedProblems';
import Badges from './components/Badges';

export default function ProfilePage() {


  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  async function fetchData() {
    try {
      // Replace 'userId' with the actual user ID you want to retrieve
      const currentURL = window.location.href;
      // Split the URL by '/' and get the last part
      const parts = currentURL.split('/');
      let userId = parts[parts.length - 1];
      // Construct the API URL with the user ID
      const apiUrl = `https://boookyuz.pythonanywhere.com/users/${userId}`;

      // Make an HTTP GET request to the API
      const response = await fetch(apiUrl);

      // Check if the response status is OK (status code 200)
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();
        console.log(data);
        setUserData(data); // Set the retrieved data in state
      } else {
        console.error(`API request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  fetchData();
  // }, []);

  console.log(userData);
  return (
    <main className='bg-[#1A1A1A] w-full min-h-[100vh]'>
      <div className='w-full max-w-[1400px] mx-auto flex gap-3 pt-10'>
        <aside className='w-[30%] bg-[#282828] rounded-lg p-4 min-h-[90vh]'>
          <Aside />
        </aside>
        <section className='w-[70%]'>
          <div className='flex flex-col gap-3'>
            <SolvedProblems />
            <Badges />
          </div>
          <div className='bg-[#282828]'>
          </div>
          <div className='bg-[#282828]'>

          </div>
        </section>
      </div>
    </main>
  );
}