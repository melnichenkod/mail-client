import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Loading from './components/Loading/Loading'
import Header from './containers/Header/Header'
import AppRoutes from './routes/AppRoutes'
const App = () => {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    /* const signIn = (user) => {
      setUser(user)
    }; */
    useEffect(()=> {
      axios('/emails.json')
      .then(result => {
        setTimeout(()=> {
          setEmails(result.data);
          setLoading(false)
        }, 3000)
      })
    }, [])
    if (loading){
      return <Loading />
    }
    console.log('user', user);

    return (
      <div className="App">
        <Header user={user} />
        <AppRoutes emails={emails} signIn={setUser} user={user}/>
      </div>
    )
}

export default App;