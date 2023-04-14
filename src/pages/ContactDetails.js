import React from "react";
import { connect } from "react-redux";
import { ContactDetailsFunctional } from "./ContactDetailsFunctional";

class ContactDetails extends React.Component {
	render() {
		return (
			<ContactDetailsFunctional
				contactList={this.props.contactList}
				dispatch={this.props.dispatch}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contactList: state.contacts.contactList,
	};
};

const connectedContactDetailsComponent =
	connect(mapStateToProps)(ContactDetails);

export default connectedContactDetailsComponent;
