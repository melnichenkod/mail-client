import React, { Component } from 'react'
import axios from 'axios'
import Loading from './components/Loading/Loading'
import Header from './containers/Header/Header'
import AppRoutes from './routes/AppRoutes'
class App extends Component {
  state = {
    emails: [],
    loading: true,
    error: null,
    user: null
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
  };
  signIn = (user) => {
    this.setState({
      user: user
    });
  };

  render(){
    const {emails, loading, user} = this.state;
    if (loading){
      return <Loading />
    }
    console.log('user', user);

    return (
      <div className="App">
        <Header user={user} />
        <AppRoutes emails={emails} signIn={this.signIn} user={user}/>
      </div>
    )
  }
}

export default App;