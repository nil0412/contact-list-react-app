import { LOAD_CONTACTS_FROM_API } from "../actions";

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
		default:
			return state;
	}
}
