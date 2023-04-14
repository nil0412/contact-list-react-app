import React from "react";
import { connect } from "react-redux";
import { ContactEditFunctional } from "./ContactEditFunctional";

class ContactEdit extends React.Component {
	render() {
		return (
			<ContactEditFunctional
				dispatch={this.props.dispatch}
				contactList={this.props.contactList}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contactList: state.contacts.contactList,
	};
};

const connectedContactEditComponent = connect(mapStateToProps)(ContactEdit);

export default connectedContactEditComponent;
