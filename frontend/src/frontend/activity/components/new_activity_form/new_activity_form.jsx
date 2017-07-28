import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createActivity } from '../../actions/activity_actions'
import Form from '../../../app/components/form'

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createActivity: activity => dispatch(createActivity(activity))
});

class NewActivityForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      value: ""
    }
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const activity = this.state;
    this.props.createActivity({ activity })
    this.props.router.push("/activity/");

  }


  generateFields() {
    return [
      {name: 'Name', description: 'Name', type: 'text', state: 'name'},
      {name: 'Description', description: 'Description', type: 'text', state: 'description'},
      {name: 'Value', description: 'Value', type: 'text', state: 'value'},
    ]
  }


  render() {
    return (
      <div className="form-container">
        {this.renderForm()}
      </div>
    )
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewActivityForm));
