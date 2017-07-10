import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createActivity } from '../../actions/activity_actions'
import '../../../app/scss/form.scss'

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createActivity: activity => dispatch(createActivity(activity))
});

class NewActivityForm extends React.Component {
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

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}


  render() {
    return (
      <div className="form-main">
        <div className="form-form">
          <form onSubmit={this.handleSubmit} >

            <p className='form-item'>
              <label className='form-item-label' htmlFor="username">Name</label>
              <input className='form-item-input' type="text" name="Name" onChange={this.update('name')} />
              <span className='form-item-description'>Name</span>
            </p>

            <p className='form-item'>
              <label className='form-item-label' htmlFor="username">Description</label>
              <input className='form-item-input' type="text" name="Name" onChange={this.update('description')} />
              <span className='form-item-description'>Description</span>
            </p>

            <p className='form-item'>
              <label className='form-item-label' htmlFor="username">Value</label>
              <input className='form-item-input' type="text" name="value" onChange={this.update('value')} />
              <span className='form-item-description'>Value</span>
            </p>
            <input type="submit" value="Submit" className="submit-button" />

          </form>
        </div>
      </div>
    )
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewActivityForm));
