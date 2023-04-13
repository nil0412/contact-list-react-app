import { NavLink, useParams } from "react-router-dom";

export function ContactDetailsFunctional(props) {
	const { contactId } = useParams();
	console.log("contactId: ", contactId);
	const contact = props.contactList.filter(
		(contact) => String(contact.id) === contactId
	)[0];
	console.log("contact: ", contact);
	return (
		<div className="app-container">
			<div className="contact-list-heading">
				<NavLink to="/">
					<i class="fa-solid fa-address-card app-logo"></i>
				</NavLink>
				&nbsp; Contact Details
			</div>
			<div className="contact-list-ul">
				<ul>
					<li>
						<span className="key">Name: </span>
						<span className="value"> {contact.name}</span>
					</li>
					<li>
						<span className="key">Username: </span>
						<span className="value"> {contact.username}</span>
					</li>
					<li>
						<span className="key">Email: </span>
						<span className="value"> {contact.email}</span>
					</li>
					<li>
						<span className="key">Address: </span>
						<div style={{ marginLeft: "50px" }}>
							<span className="sub-key">Street: </span>
							<span className="value"> {contact.address.street}</span>
							<br />
							<span className="sub-key">Suite: </span>
							<span className="value"> {contact.address.suite}</span>
							<br />
							<span className="sub-key">City: </span>
							<span className="value"> {contact.address.city}</span>
							<br />
							<span className="sub-key">Zipcode: </span>
							<span className="value"> {contact.address.zipcode}</span>
							<br />
							<span className="sub-key">Geo: </span>
							<span className="value">
								{" "}
								lat: ({contact.address.geo.lat}); lng:{contact.address.geo.lat}
							</span>
						</div>
					</li>
					<li>
						<span className="key">Phone: </span>
						<span className="value"> {contact.phone}</span>
					</li>
					<li>
						<span className="key">Website: </span>
						<span className="value"> {contact.website}</span>
					</li>
					<li>
						<span className="key">Company: </span>
						{/* <span className="value"> {contact.company}</span> */}
						<div style={{ marginLeft: "50px" }}>
							<span className="sub-key">Name: </span>
							<span className="value"> {contact.company.name}</span>
							<br />
							<span className="sub-key">CatchPhrase: </span>
							<span className="value"> {contact.company.catchPhrase}</span>
							<br />
							<span className="sub-key">bs: </span>
							<span className="value"> {contact.company.bs}</span>
						</div>
					</li>
				</ul>
			</div>

			<button className="floating-add-contact">
				<NavLink to={`/contact-edit/${contact.id}`} style={{ color: "white" }}>
					<i className="fa-solid fa-pencil"></i>
					&nbsp; Edit Contact
				</NavLink>
			</button>
		</div>
	);
}
