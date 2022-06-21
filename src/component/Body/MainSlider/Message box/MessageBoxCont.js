import React from 'react'
import MessagePost from './MessagePost'
import { globalContext } from '../../../../context/ContextProvider'
import { database } from '../../../../firebase'



function MessageBoxCont() {
  const { postData, setPostdata } = React.useContext(globalContext)
  console.log(postData)
  React.useEffect(() => {
    let unsub;
    async function fn() {
      unsub =  database.Message_data.onSnapshot(async snapshot => {
        let messages = snapshot.docs.map(doc => doc.data());
        console.log(messages);
        setPostdata(messages);
      })
    }
    fn()
    return unsub
  },[])
  return (
    postData.map((pData) => {
      return <MessagePost data={pData}></MessagePost>
    })
  )
}

export default MessageBoxCont