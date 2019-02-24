import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'showcontact',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let login = (
    	<form action="#" onSubmit={this.authorize}>
      	<input type="password" placeholder="Password" /><br/>
      	<input type="submit" style={{marginTop: '20px'}}/>
      </form>
    );
    
    const contactInfo = (
    	<ul>
          <li>
            contactinfo@example.com
          </li>
          <li>
            555.666.7777
          </li>
        </ul>
    ); 

    let styles = {
        maxWidth: '600px', 
        width: '70%', 
        margin: '100px auto', 
        border: '2px solid #3c3c3c',
        textAlign : 'center',
        padding : '20px'
    }
    
    return (
      <div style = {styles}>
        <h2>{ this.state.authorized ? 'Contact' : 'Enter the Password' }</h2>
      	{this.state.authorized ? contactInfo : login}  
      </div>
    );
  }
}

export default Contact;