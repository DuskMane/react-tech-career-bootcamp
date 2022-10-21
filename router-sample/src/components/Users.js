import React, { useEffect ,useState } from 'react';
import {Link , useRouteMatch} from 'react-router-dom';

function Users() {
    let match = useRouteMatch();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => (res.json()))
        .then((data) => (setUsers(data)))
        .catch((e) => (console.log(e)))
        .finally(() => setLoading(false))
    })
  return (
    <div>
        {loading ? 
        (<div>
            <b>Loading...</b>
        </div>):(
            <ul>
                {users.map((user,key) => (
                    <li key={key}>
                        <Link to={`${match.url}/${user.id}`} >{user.name}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Users