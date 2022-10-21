import React from 'react'
import {useLocation, useHistory} from "react-router-dom"

function About() {
    const query = new URLSearchParams(useLocation().search);
    const history = useHistory();

    const goToUsersPage = () => {
        history.push("/users");
    }
  return (
    <div>
        About | Language: {query.get("lang")} {query.get("x")}
        <hr />
        <div onClick={goToUsersPage} style={{cursor: "pointer", color: "blue"}}>Go To Users</div>
    </div>
  )
}

export default About