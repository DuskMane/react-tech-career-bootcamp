import React, { useEffect ,useState } from 'react'

function Users() {
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
                    <li key={key}>{user.name}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Users