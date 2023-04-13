import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteContact } from "../actions";
import { API_URL } from "../constants";

export function ContactDetailsFunctional(props) {
	const { contactId } = useParams();
	const navigate = useNavigate();
	const contact = props.contactList.filter(
		(contact) => String(contact.id) === contactId
	)[0];
	const handleDelete = async (e) => {
		e.preventDefault();
		const url = `${API_URL}/${contactId}`;
		await fetch(url, {
			method: "DELETE",
		})
			.then((response) => {
				if (response.ok) {
					console.log("Data deleted successfully");
					props.dispatch(deleteContact(contactId));
					navigate("/");
				} else {
					console.log("Error deleting data");
				}
			})
			.catch((error) => {
				console.error("Error deleting data:", error);
			});
	};
	return (
		<div className="app-container">
			<div className="contact-list-heading">
				<NavLink to="/">
					<i className="fa-solid fa-address-card app-logo"></i>
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

			<button className="floating-add-contact b-100">
				<NavLink to={`/contact-edit/${contact.id}`} style={{ color: "white" }}>
					<i className="fa-solid fa-pencil"></i>
					&nbsp; Edit Contact
				</NavLink>
			</button>
			<button
				className="floating-add-contact b-200"
				style={{ backgroundColor: "red" }}
				onClick={handleDelete}>
				<NavLink to={`/contact-edit/${contact.id}`} style={{ color: "white" }}>
					<i className="fa-solid fa-trash"></i>
					&nbsp; Delete Contact
				</NavLink>
			</button>
		</div>
	);
}
