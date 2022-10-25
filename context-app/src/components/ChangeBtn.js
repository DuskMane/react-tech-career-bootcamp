import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext'

function ChangeBtn() {
    const User = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

    const onClick = () => {
        User.setName("aykan");
    }

    const changeTheme = () => {
        const data = theme === "dark" ? "light" : "dark";
        setTheme(data);
        localStorage.setItem("theme",data);
    }
  return (
    <div>
        <input type="button" onClick={onClick} value="Change Name"/>
        <input 
            type="button"
            onClick={changeTheme}
            value={`${theme === "dark" ? "Light Theme" : "Dark Theme"}`}
        />
    </div>
  )
}

export default ChangeBtn