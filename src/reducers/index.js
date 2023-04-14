import {
	CREATE_CONTACT,
	DELETE_CONTACT_FROM_CONTACT_LIST,
	EDIT_CONTACT,
	LOAD_CONTACTS_FROM_API,
} from "../actions";
import { API_URL } from "../constants";

const initialContactState = {
	contactList: [],
};

export function contacts(state = initialContactState, action) {
	switch (action.type) {
		case LOAD_CONTACTS_FROM_API:
			return {
				...state,
				contactList: [...action.contacts],
			};
		case DELETE_CONTACT_FROM_CONTACT_LIST:
			const contactList_afterDelete = state.contactList.filter(
				(contact) => String(contact.id) !== action.id
			);
			console.log("deletelength: ", contactList_afterDelete.length);
			return {
				...state,
				contactList: [...contactList_afterDelete],
			};
		case CREATE_CONTACT:
			return {
				...state,
				contactList: [action.contact, ...state.contactList],
			};
		case EDIT_CONTACT:
			const updatedContacts_afterEdit = state.contactList.map((contact) => {
				if (contact.id === action.contact.id) {
					return action.contact;
				}
				return contact;
			});
			return {
				...state,
				contactList: [...updatedContacts_afterEdit],
			};
		default:
			return state;
	}
}
