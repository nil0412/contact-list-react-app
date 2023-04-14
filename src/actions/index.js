import { toast } from "react-toastify";
import { toastStyle } from "../constants";

//action types
export const LOAD_CONTACTS_FROM_API = "LOAD_CONTACTS_FROM_API";
export const DELETE_CONTACT_FROM_CONTACT_LIST =
	"DELETE_CONTACT_FROM_CONTACT_LIST";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

//actions
export const load_contacts_from_api = (contacts) => {
	return function (dispatch) {
		dispatch({
			type: LOAD_CONTACTS_FROM_API,
			contacts,
		});
	};
};

export const deleteContact = (id) => {
	return function (dispatch) {
		dispatch({
			type: DELETE_CONTACT_FROM_CONTACT_LIST,
			id,
		});
		toast("Contact deleted successfully!", toastStyle);
	};
};

export const createContact = (contact) => {
	return function (dispatch) {
		dispatch({
			type: CREATE_CONTACT,
			contact,
		});
		toast("Contact created successfully!", toastStyle);
	};
};

export const editContact = (contact) => {
	return function (dispatch) {
		dispatch({
			type: EDIT_CONTACT,
			contact,
		});
		toast("Contact edited successfully!", toastStyle);
	};
};
