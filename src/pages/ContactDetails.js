import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ContactDetailsFunctional } from "./ContactDetailsFunctional";

class ContactDetails extends React.Component {
	render() {
		const contactList = this.props.contactList;
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
