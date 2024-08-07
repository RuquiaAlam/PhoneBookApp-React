import React, { useState } from 'react'

const PhoneBookForm = (props) => {

    const initContact={

        id:1,
        userFirstName:"Coder",
        userLastName:"Byte",
        userPhone:"6873678128"
    }
    const [userState, setUserState] = useState(initContact);

const handleUserChange=(e)=>
{
setUserState({...userState,[e.target.name]:e.target.value})
}


const handleSubmit=(e)=>
{

    e.preventDefault();
    if(!userState.userFirstName||!userState.userLastName||!userState.userPhone) return;
    props.addUser(userState);
    setUserState(initContact);

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <br />
        <input
          type="text"
          name="userFirstName"
        value={userState.userFirstName}
          onChange={handleUserChange}
        />
        <br />
        <label>Last Name:</label>
        <br />
        <input
          type="text"
          name="userLastName"
       value={userState.userLastName}
          onChange={handleUserChange}
        />
        <br />
        <label>Phone Number:</label>
        <br />
        <input
          type="text"
          name="userPhone"
     value={userState.userPhone}
          onChange={handleUserChange}
        />
        <br />
      <input type="submit"  value="Add User"/>
      </form>
    </div>
  );
}

export default PhoneBookForm