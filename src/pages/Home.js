import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
	render() {
		const contactList = this.props.contactList;
		return (
			<div className="app-container">
				<div className="contact-list-heading">
					<NavLink to="/">
						<i class="fa-solid fa-address-card app-logo"></i>
					</NavLink>
					&nbsp; Contact List
				</div>
				<div className="contact-list-ul">
					<ul>
						{contactList.map((contact) => {
							return (
								<li key={`contact-${contact.id}`}>
									<div className="contact-card">
										<div className="card-name" style={{ fontWeight: "bold" }}>
											<NavLink to={`/contact-details/${contact.id}`}>
												{contact.name}
											</NavLink>
										</div>
										<div className="card-phone">{contact.phone}</div>
										<div className="card-email">{contact.email}</div>
										<div className="card-tools">
											<NavLink to={`/contact-edit/${contact.id}`}>
												<i className="fa-solid fa-pencil"></i>
											</NavLink>
											<NavLink to={`/contact-delete/${contact.id}`}>
												<i className="fa-solid fa-trash"></i>
											</NavLink>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<button className="floating-add-contact">
					<NavLink to="/create-contact"  style={{color:"white"}}>
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

const connectedHomeComponent = connect(mapStateToProps)(Home);

export default connectedHomeComponent;
