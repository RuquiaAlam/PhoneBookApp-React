import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PhoneBookForm from './components/PhoneBookForm';
import InformationTable from './components/InformationTable';

function App() {
const userObj=[];
  const[users,setUsers]=useState(userObj)
  const addUser=(user)=>
  {
user.id=users.length+1;
setUsers([...users,user])
  }
  console.log(users);
  return (
    <div className="App">
     <PhoneBookForm addUser={addUser}/>
     <InformationTable users={users}/>

    </div>
  );
}

export default App;
