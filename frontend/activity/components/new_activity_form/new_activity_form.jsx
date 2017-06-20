import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createActivity } from '../../actions/activity_actions'

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

  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}


  render() {
    return (
      <div id="form-main">
        <div id="form-form">
          <form onSubmit={this.handleSubmit} >
            <p>
              <input type="text"
                value={this.state.name}
    						onChange={this.update('name')}
    						className="validate form-input"
                placeholder="Name" />
            </p>

            <p>
              <input type="text"
                value={this.state.description}
    						onChange={this.update('description')}
    						className="validate form-input"
                placeholder="Description" />
            </p>

            <p>
              <input type="text"
                value={this.state.value}
                onChange={this.update('value')}
                className="validate form-input"
                placeholder="Value" />
            </p>
            <input type="submit" value="Submit" className="ease" id="button-blue" />

          </form>


        </div>
      </div>


    )
  }


}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewActivityForm);
