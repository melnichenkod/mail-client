import React, { Component } from 'react'
import axios from 'axios'
import Loading from './components/Loading/Loading'
import Header from './containers/Header/Header'
import Emails from './containers/Emails/Emails'
import AppRoutes from './routes/AppRoutes'
class App extends Component {
  state = {
    emails: [],
    loading: true,
    error: null
  }
  componentDidMount(){
    axios('/emails.json')
      .then(result => {
        setTimeout(()=> {
          this.setState({
            loading: false,
            emails: result.data
          })
        }, 3000)
      })
  }

  render(){
    const {emails, loading} = this.state;
    if (loading){
      return <Loading />
    }
    

    return (
      <div className="App">
        <Header />
        <AppRoutes emails={emails}/>
        
      </div>
    )
  }
}

export default App;