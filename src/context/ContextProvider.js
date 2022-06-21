import React from 'react'

export const globalContext = React.createContext();
function ContextProvider({children}) {
    const[postData, setPostdata] = React.useState([]); // this handle Post we have to append in message cont
    const [user, setUser] = React.useState(null);
    const [formdisplay , setFormdisplay] = React.useState(false);
    const [form2display , setForm2display] = React.useState(false);

  let value = { postData, setPostdata, user, setUser, formdisplay, setFormdisplay, form2display, setForm2display }
  return (
      <globalContext.Provider value={value}>
         {children}
      </globalContext.Provider>
  )
}

export default ContextProvider