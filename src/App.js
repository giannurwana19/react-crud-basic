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

  componentDidMount() {
    const foods = this.getData();

    this.setState({
      foods,
    });
  }

  getData = () => JSON.parse(localStorage.getItem('foods')) || [];

  saveData = value => {
    const data = JSON.stringify(value);

    localStorage.setItem('foods', data);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.id) {
      this.update(this.state.id);
    } else {
      this.store();
    }

    this.clearForm();
  };

  store = () => {
    this.setState(
      state => ({
        foods: state.foods.concat({
          id: state.foods.length + 1,
          name: state.name,
          description: state.description,
          price: state.price,
        }),
      }),
      () => {
        this.saveData(this.state.foods);
      }
    );
  };

  update = id => {
    const notSelectedFood = this.state.foods.filter(food => food.id !== id);

    this.setState(
      state => ({
        foods: notSelectedFood.concat({
          id: id,
          name: state.name,
          description: state.description,
          price: state.price,
        }),
      }),
      () => {
        this.saveData(this.state.foods);
      }
    );
  };

  editData = id => {
    const selectedFood = this.state.foods.find(food => food.id === id);

    this.setState({
      id: selectedFood.id,
      name: selectedFood.name,
      description: selectedFood.description,
      price: selectedFood.price,
    });
  };

  delete = id => {
    const foods = this.state.foods.filter(food => food.id !== id);

    this.setState(
      {
        foods,
      },
      () => {
        this.saveData(this.state.foods);
      }
    );
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
    return (
      <Fragment>
        <NavbarComp />
        <Container className="mt-4">
          <h2 className="mb-3">Data Makanan</h2>
          <BaseTable
            foods={this.state.foods}
            editData={this.editData}
            delete={this.delete}
          />
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
