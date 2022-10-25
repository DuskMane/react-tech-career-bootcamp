import React, { Children, createContext, useState } from 'react'

const UserContext = createContext(null);
export function UserProvider({children}) {
    const [name, setName] = useState("emirhan");

    const values = {
        name,
        setName,
    }
  return (<UserContext.Provider value={values}>{children}</UserContext.Provider>)
}

export default UserContext;