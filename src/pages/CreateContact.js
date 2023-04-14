import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createContact } from "../actions";
import { API_URL } from "../constants";

class CreateContact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	handleChangeNested = (event) => {
		const { name, value } = event.target;

		var obj_Name = name;
		const index = obj_Name.indexOf(".");
		var propName = obj_Name.slice(index + 1);
		obj_Name = obj_Name.slice(0, index);
		this.setState((prevState) => ({
			...prevState,
			[obj_Name]: {
				...this.state[obj_Name],
				[propName]: value,
			},
		}));
	};

	handleChangeNestedNested = (event) => {
		const { name, value } = event.target;

		var objName = name;
		const index_1 = objName.indexOf(".");
		var objName_afterFirstDot = objName.slice(index_1 + 1);
		var name_1 = objName.slice(0, index_1);
		const index_2 = objName_afterFirstDot.indexOf(".");
		var name_2 = objName_afterFirstDot.slice(0, index_2);
		var name_3 = objName_afterFirstDot.slice(index_2 + 1);
		this.setState((prevState) => ({
			...prevState,
			[name_1]: {
				...this.state[name_1],
				[name_2]: {
					...this.state.address.geo,
					[name_3]: value,
				},
			},
		}));
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const formData = this.state;
		console.log(formData); // or send to server
		fetch(API_URL, {
			method: "POST",
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
				console.log("CreatdContact Data: ", data);

				this.props.dispatch(createContact(data));
			})
			.catch((error) => console.error(error));
	};

	render() {
		return (
			<div className="app-container">
				<div className="contact-list-heading">
					<NavLink to="/">
						<i className="fa-solid fa-address-card app-logo"></i>
					</NavLink>
					&nbsp; Contact Details
				</div>
				<div className="contact-form">
					<form onSubmit={this.handleSubmit}>
						{/* <label>
							ID:
							<br />
							<input
								type="text"
								name="id"
								value={this.state.id}
								onChange={this.handleChange}
							/>
						</label>
						<br /> */}
						<h4>Personal Details</h4>
						<label>
							Name: {this.state.name}
							<br />
							<input
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
								required
							/>
						</label>
						<br />
						<label>
							Username:{this.state.username}
							<br />
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
								required
							/>
						</label>
						<br />
						<label>
							Email:{this.state.email}
							<br />
							<input
								type="email"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
						</label>
						<br />
						<label>
							Phone:
							<br />
							<input
								type="text"
								name="phone"
								value={this.state.phone}
								onChange={this.handleChange}
								required
							/>
						</label>
						<br />
						<label>
							Website:
							<br />
							<input
								type="text"
								name="website"
								value={this.state.website}
								onChange={this.handleChange}
							/>
						</label>
						<br />
						<h4>Address</h4>
						<label>
							Street: {this.state.address.street}
							<br />
							<input
								type="text"
								name="address.street"
								value={this.state.address.street}
								onChange={this.handleChangeNested}
							/>
						</label>
						<br />
						<label>
							Suite:
							<br />
							<input
								type="text"
								name="address.suite"
								value={this.state.address.suite}
								onChange={this.handleChangeNested}
							/>
						</label>
						<br />
						<label>
							City:
							<br />
							<input
								type="text"
								name="address.city"
								value={this.state.address.city}
								onChange={this.handleChangeNested}
							/>
						</label>
						<br />
						<label>
							Zipcode:
							<br />
							<input
								type="text"
								name="address.zipcode"
								value={this.state.address.zipcode}
								onChange={this.handleChangeNested}
							/>
						</label>
						<br />
						<h5>Geographical Details</h5>
						<label>
							Latitude: {this.state.address.geo.lat}
							<br />
							<input
								type="text"
								name="address.geo.lat"
								value={this.state.address.geo.lat}
								onChange={this.handleChangeNestedNested}
							/>
						</label>
						<br />
						<label>
							Longitude: {this.state.address.geo.lng}
							<br />
							<input
								type="text"
								name="address.geo.lng"
								value={this.state.address.geo.lng}
								onChange={this.handleChangeNestedNested}
							/>
						</label>
						<br />
						<h4>Company Details</h4>
						<label>
							Company Name:
							<br />
							<input
								type="text"
								name="company.name"
								value={this.state.company.name}
								onChange={this.handleChangeNested}
							/>
						</label>
						<br />
						<label htmlFor="catchPhrase">
							Catch Phrase:
							<br />
							<input
								type="text"
								name="company.catchPhrase"
								value={this.state.company.catchPhrase}
								onChange={this.handleChangeNested}
							/>
						</label>
						<br />
						<label htmlFor="bs">
							BS:
							<br />
							<input
								type="text"
								name="company.bs"
								value={this.state.company.bs}
								onChange={this.handleChangeNested}
							/>
						</label>
						<br />
						<div className="form-submit-btn-container">
					<button type="submit">Add Contact</button>
					</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contactList: state.contacts.contactList,
	};
};

const connectedCreateContactComponent = connect(mapStateToProps)(CreateContact);

export default connectedCreateContactComponent;
