import React, { useState } from 'react';


function User() {
    const [userLogin, setUserLogin] = useState('');
    const [pwLogin , setPwLogin] = useState('');
    const [showingUsers, setShowingUsers ] = useState(false);
    const [users, setUsers] = useState([
        {
            userId: "",
            pw: "",
        }
    ]);
    const addNewUser = (username, pw) => {
        if(userLogin === '' || pwLogin === ''){
            alert("You didn't enter username or password!");
            return 0;
        }
        
        setUsers([
            ...users,
            {
                userId: username,
                pw: pw
            },
        ]);

        alert("Register succesful!")
        setUserLogin('');
        setPwLogin('');
        setShowingUsers(false);
    }

  return (
    <>
        <label>Username</label>
        <input name="username" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} />
        <label>Password</label>
        <input name="password" value={pwLogin} onChange={(e) => setPwLogin(e.target.value)} />
        <input type="button" value="Register" onClick={() => addNewUser(userLogin, pwLogin)} />
        <input type="button" value="Show Users" onClick={() => (setShowingUsers(!showingUsers))} />
        {showingUsers ? 
            (users.map((user, index) => (
                <div key={index}> User {index}: Username: {users[index].userId}, Password: {users[index].pw} </div>
            )))
            : (<div>Please register!</div>) 
        }
    </>
  )
}

export default User;