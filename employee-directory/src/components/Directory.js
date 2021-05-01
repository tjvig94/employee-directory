import React, { useState, useEffect } from 'react';
import getUsers from '../utils/API';
import TableRow from './TableRow';

function Directory() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
      loadUsers();
  }, []);

  function loadUsers() {
    getUsers().then(res => setEmployees(res));
  }

  return(
    <div>
      <table className="table">
          <thead>
              <tr>
                  <th scope="col">Image</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
              </tr>
          </thead>
          <tbody>
            {employees.map(employee => {
              return(
                <TableRow 
                  key={Math.random()}
                  image={employee.image}
                  first={employee.first}
                  last={employee.last}
                  email={employee.email}
                  phone={employee.phone}
                />  
              ) 
            })}
          </tbody>
      </table>
    </div>
  )
}

export default Directory;
