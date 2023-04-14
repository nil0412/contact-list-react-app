import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { editContact } from "../actions";
import { API_URL } from "../constants";

export function ContactEditFunctional(props) {
	const [formState, setFormState] = useState({
		id: "",
		name: "",
		username: "",
		email: "",
		address: {
			street: "",
			suite: "",
			city: "",
			zipcode: "",
			geo: {
				lat: "",
				lng: "",
			},
		},
		phone: "",
		website: "",
		company: {
			name: "",
			catchPhrase: "",
			bs: "",
		},
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleChangeNested = (event) => {
		const { name, value } = event.target;

		var obj_Name = name;
		const index = obj_Name.indexOf(".");
		var propName = obj_Name.slice(index + 1);
		obj_Name = obj_Name.slice(0, index);
		setFormState((prevState) => ({
			...prevState,
			[obj_Name]: {
				...formState[obj_Name],
				[propName]: value,
			},
		}));
	};

	const handleChangeNestedNested = (event) => {
		const { name, value } = event.target;

		var objName = name;
		const index_1 = objName.indexOf(".");
		var objName_afterFirstDot = objName.slice(index_1 + 1);
		var name_1 = objName.slice(0, index_1);
		const index_2 = objName_afterFirstDot.indexOf(".");
		var name_2 = objName_afterFirstDot.slice(0, index_2);
		var name_3 = objName_afterFirstDot.slice(index_2 + 1);
		setFormState((prevState) => ({
			...prevState,
			[name_1]: {
				...formState[name_1],
				[name_2]: {
					...formState.address.geo,
					[name_3]: value,
				},
			},
		}));
	};

	const { contactId } = useParams();

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = formState;

		// Loop through the top-level keys of the object
		for (const key in formData) {
			// Check if the current key is an object
			if (typeof formData[key] === "object") {
				// If it is an object, loop through its keys
				for (const nestedKey in formData[key]) {
					if (typeof formData[key][nestedKey] === "object") {
						for (const nestedNestedKey in formData[key][nestedKey]) {
							if (formData[key][nestedKey][nestedNestedKey] === "") {
								formData[key][nestedKey][nestedNestedKey] =
									contact[key][nestedKey][nestedNestedKey];
							}
						}
					} else {
						if (formData[key][nestedKey] === "") {
							formData[key][nestedKey] = contact[key][nestedKey];
						}
					}
				}
			} else {
				// If it is not an object or an array, simply print its value
				if (formData[key] === "") {
					formData[key] = contact[key];
				}
			}
		}

		// send to server
		fetch(`${API_URL}/${contactId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(
				// data to be sent in the request body
				formData
			),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Contact edited successfully!!!");
				props.dispatch(editContact(data));
			})
			.catch((error) => console.error(error));
	};

	const contactList = props.contactList;
	const contact = contactList.filter(
		(contact) => String(contact.id) === contactId
	)[0];

	return (
		<div className="app-container">
			<div className="contact-list-heading">
				<NavLink to="/">
					<i className="fa-solid fa-address-card app-logo"></i>
				</NavLink>
				&nbsp; Edit Contact
			</div>
			<div className="contact-form">
				<form onSubmit={handleSubmit}>
					{/* <label>
							ID:
							<br />
							<input
								type="text"
								name="id"
								value={formState.id}
								onChange={handleChange}
							/>
						</label>
						<br /> */}
					<h4>Personal Details</h4>
					<label>
						Name: &nbsp; {contact.name}
						<br />
						<input
							type="text"
							name="name"
							value={formState.name}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Username: &nbsp; {contact.username}
						<br />
						<input
							type="text"
							name="username"
							value={formState.username}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Email: &nbsp; {contact.email}
						<br />
						<input
							type="email"
							name="email"
							value={formState.email}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Phone: &nbsp; {contact.phone}
						<br />
						<input
							type="text"
							name="phone"
							value={formState.phone}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Website: &nbsp; {contact.website}
						<br />
						<input
							type="text"
							name="website"
							value={formState.website}
							onChange={handleChange}
						/>
					</label>
					<br />
					<h4>Address</h4>
						<label>
							Street: &nbsp; {contact.address.street}
							<br />
							<input
								type="text"
								name="address.street"
								value={formState.address.street}
								onChange={handleChangeNested}
							/>
						</label>
						<br />
						<label>
							Suite: &nbsp; {contact.address.suite}
							<br />
							<input
								type="text"
								name="address.suite"
								value={formState.address.suite}
								onChange={handleChangeNested}
							/>
						</label>
						<br />
						<label>
							City: &nbsp; {contact.address.city}
							<br />
							<input
								type="text"
								name="address.city"
								value={formState.address.city}
								onChange={handleChangeNested}
							/>
						</label>
						<br />
						<label>
							Zipcode: &nbsp; {contact.address.zipcode}
							<br />
							<input
								type="text"
								name="address.zipcode"
								value={formState.address.zipcode}
								onChange={handleChangeNested}
							/>
						</label>
						<br />
						<h5>Geographical Details</h5>
						<label>
							Latitude: &nbsp; {contact.address.geo.lat}
							<br />
							<input
								type="text"
								name="address.geo.lat"
								value={formState.address.geo.lat}
								onChange={handleChangeNestedNested}
							/>
						</label>
						<br />
						<label>
							Longitude: &nbsp; {contact.address.geo.lng}
							<br />
							<input
								type="text"
								name="address.geo.lng"
								value={formState.address.geo.lng}
								onChange={handleChangeNestedNested}
							/>
						</label>
						<br />
						<h4>Company Details</h4>
						<label>
							Company Name:  &nbsp; {contact.company.name}
							<br />
							<input
								type="text"
								name="company.name"
								value={formState.company.name}
								onChange={handleChangeNested}
							/>
						</label>
						<br />
						<label htmlFor="catchPhrase">
							Catch Phrase:  &nbsp; {contact.company.catchPhrase}
							<br />
							<input
								type="text"
								name="company.catchPhrase"
								value={formState.company.catchPhrase}
								onChange={handleChangeNested}
							/>
						</label>
						<br />
						<label htmlFor="bs">
							BS:  &nbsp; {contact.company.bs}
							<br />
							<input
								type="text"
								name="company.bs"
								value={formState.company.bs}
								onChange={handleChangeNested}
							/>
						</label>
					<br />
					<div className="form-submit-btn-container">
					<button type="submit">Save Changes</button>
					</div>
				</form>
			</div>
		</div>
	);
}
