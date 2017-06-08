import React from 'react';

class Field extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
        <input type={this.props.type}
        value={this.props.value}
        onChange={this.props.update(this.props.field)}
        className="validate" />
    );
  }
}


export default Field;
