import React, { Component } from 'react';

import api from '../../services/api';
import history from '../../services/history';

import { Container } from './styles';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassChange = e => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    const response = await api.get('customers');

    const user = response.data.find(
      client => client.email === email
    );

    if (!user) {
      alert('User not found');
      return;
    }
    if (user.password !== +password) {
      alert('Email or password do not match');
      return;
    }

    alert('Login successful');
    history.push('/');
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <form onSubmit={this.handleLogin}>
          <input
            placeholder="Email"
            value={email}
            onChange={this.handleEmailChange}
          />
          <input
            placeholder="Senha"
            value={password}
            onChange={this.handlePassChange}
          />
          <button type="submit">Login</button>
        </form>
      </Container>
    );
  }
}
