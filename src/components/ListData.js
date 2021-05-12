import { useEffect, useState } from "react";
import axios from "axios";

const ListData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        setUsers((prevState) => [...prevState, ...persons]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListData;
