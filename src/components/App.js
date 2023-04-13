import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { load_contacts_from_api } from "../actions";
import { API_URL } from "../constants";
import LoadingPage from "../pages/LoadingPage";
import Home from "../pages/Home";
import ContactDetails from "../pages/ContactDetails";
import CreateContact from "../pages/CreateContact";
import ContactEdit from "../pages/ContactEdit";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPageLoading: true,
		};
	}

	async componentDidMount() {
		const url = API_URL;
		await fetch(url)
			.then((response) => response.json())
			.then((contacts) => {
				this.props.dispatch(load_contacts_from_api(contacts));

				this.setState({ isPageLoading: false });
			});
	}
	render() {
		if (this.state.isPageLoading) {
			return <LoadingPage />;
		}
		return (
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route
							path="/contact-details/:contactId"
							element={<ContactDetails />}></Route>
						<Route
							path="/contact-edit/:contactId"
							element={<ContactEdit />}></Route>
						<Route path="/create-contact" element={<CreateContact />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contactList: state.contacts.contactList,
	};
};

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
