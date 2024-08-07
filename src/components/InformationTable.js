import React from "react";

const InformationTable = (props) => {
  const sortedUsers = props.users.sort((a, b) =>
    a.userLastName.localeCompare(b.userLastName)
  );

//   const display = 
//     sortedUsers.length > 0 ? (
//       sortedUsers.map((user, index) => (
//         <tr key={index}>
//           <td>{user.userFirstName}</td>
//           <td>{user.userLastName}</td>
//           <td>{user.userPhone}</td>
//         </tr>
//       ))
//     ) : (
//       <tr>
//         <td colSpan={3}>&nbsp;</td>
//       </tr>
//     );
   

  return (
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{sortedUsers.length>0?(
        sortedUsers.map((user,index)=>

             <tr key={index}>
            <td>{user.userFirstName}</td>
            <td>{user.userLastName}</td>
            <td>{user.userPhone}</td>
        </tr>
        )) :<tr colSpan={3}><td>&nbsp;</td>
        </tr>}
       
      </tbody>
    </table>
  );
};

export default InformationTable;
