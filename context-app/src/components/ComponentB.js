import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext'

function ComponentB() {
    const {name, setName }= useContext(UserContext);

    const onClick = () => {
        setName("ComponentB");
    }
  return (
    <div>
        <div>ComponentB</div>
        <div>
            <input type="button" onClick={onClick} value="Change Name"/>
        </div>
        {name}
    </div>
  )
}

export default ComponentB