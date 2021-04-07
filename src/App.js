import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import BaseForm from './components/BaseForm';
import BaseTable from './components/BaseTable';
import NavbarComp from './components/NavbarComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      name: '',
      description: '',
      price: '',
      id: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(state => ({
      foods: state.foods.concat({
        id: state.foods.length + 1,
        name: state.name,
        description: state.description,
        price: state.description,
      }),
    }));

    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      id: '',
      name: '',
      description: '',
      price: '',
    });
  };

  render() {
    console.log(this.state.foods);
    return (
      <Fragment>
        <NavbarComp />
        <Container className="mt-4">
          <h2 className="mb-3">Data Makanan</h2>
          <BaseTable foods={this.state.foods} />
          <BaseForm
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Container>
      </Fragment>
    );
  }
}

export default App;

// <BaseForm {...this.state.name} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
// mengoper semua state ke component BaseForm
