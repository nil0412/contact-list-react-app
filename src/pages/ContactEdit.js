import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class ContactEdit extends React.Component {
	render() {
		const contactList = this.props.contactList;
		return (
			<div className="app-container">
				<div className="contact-list-heading">
					<NavLink to="/">
						<i className="fa-solid fa-address-card app-logo"></i>
					</NavLink>
					&nbsp; Contact List
				</div>
				<div className="contact-list-ul"></div>
				<button className="floating-add-contact">
					<NavLink to="/create-contact" style={{ color: "white" }}>
						<i className="fa-sharp fa-solid fa-circle-plus"></i>
						&nbsp; Add Contact
					</NavLink>
				</button>
			</div>
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
