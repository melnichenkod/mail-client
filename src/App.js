import React, { Component } from 'react'
import axios from 'axios'
import Loading from './components/Loading/Loading'
import Header from './containers/Header/Header'
import Emails from './containers/Emails/Emails'

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
    const noEmails = (<p>No emails found</p>)

    return (
      <div className="App">
        <Header />
        {emails.length === 0 ? noEmails : <Emails emails={emails}/>}
      </div>
    )
  }
}

export default App;