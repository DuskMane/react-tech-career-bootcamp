import axios from 'axios';
import React , {useState , useEffect} from 'react'
import UserCount from './UserCount';

function UsersAxios() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        try {
            const {data} = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const saveUser = () => {
        if(name === "") {
            return false;
        }
        setUsers([...users, {name}]);
    }

    const filtered = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
        <input 
        name="name"
        placeholder='New User'
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
        <input type="button" value="Save" onClick={saveUser}/>

        <hr />
        <input 
        name="filter"
        placeholder='Search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />
        
        {loading ? (<h3>Loading...</h3>) : (
            <div>
                <ul>
                    {filtered.map((user,key) => (
                        <li key={key}>
                            {user.name}
                        </li>
                    ))}
                </ul>
                <UserCount count={filtered.length}/>
            </div>
        )}
    </div>
  )
}

export default UsersAxios