import './App.css';
import { ExtButton } from '@sencha/ext-react-modern';
import { getUsers } from './Components/Requests';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = getUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <ExtButton text="click me"></ExtButton>
      <ul>

      </ul>
    </>
  );
}

export default App;