import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import '../scss/form.css'


class Form extends React.Component {

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    let stateErrors = this.state.errors || []
    let propErrors = this.props.errors || []
    return(
      <ul>
        {propErrors.concat(stateErrors).map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // [{name, description, type, state}]
  // implement in any subclass
  generateFields() {
    alert('generateFields not implemented')
    return [];
  }

  handleSubmit(e) {
    alert('handleSubmit not implemented')
  }

  renderForm() {
    let items = this.generateFields()
    let form = [];
    for(let key in items) {
      let name = items[key]['name']
      let description = items[key]['description']
      let type = items[key]['description']
      let state = items[key]['state']
      form.push(
        <p className='form-item' key={key}>
          <label className='label' htmlFor={name}>{name}</label>
          <input className='input' type={type} name={name} onChange={this.update(state)} />
          <span className='description'>{description}</span>
        </p>
      )
    }
    return (
      <div className="form">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} >
          {form}
          <input type="submit" value="Submit" className="submit-button" />
        </form>
      </div>
      )
  }

}

export default Form
