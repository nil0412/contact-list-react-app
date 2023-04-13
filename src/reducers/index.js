import { DELETE_CONTACT_FROM_CONTACT_LIST, LOAD_CONTACTS_FROM_API } from "../actions";

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

		default:
			return state;
	}
}
