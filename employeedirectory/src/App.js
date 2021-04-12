import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import React, { useEffect, useState } from "react";
import FilterInput from './components/FilterInput';
import { getUsers } from './utils/API'

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
        <Main users={usersToRender}/>
      </Wrapper>
    </div>
  );
}

export default App;
