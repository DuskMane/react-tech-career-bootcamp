import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext'

function ComponentA({children}) {
    const {name, setName }= useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    const onClick = () => {
        setName("ComponentA");
    }
  return (
    <div>
        <div>ComponentA</div>
        <h4>Theme: {theme}</h4>
        <div>
            <input type="button" onClick={onClick} value="Change Name"/>
        </div>
        {name}
    </div>
  )
}

export default ComponentA