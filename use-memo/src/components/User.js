import React,{useEffect} from 'react'

function User({name}) {
    useEffect(() => {
        console.log("User component");
    })
  return (
    <div>
        <br />
        User Component Here:
        <h2>{name}</h2>
    </div>
  )
}

export default React.memo(User);