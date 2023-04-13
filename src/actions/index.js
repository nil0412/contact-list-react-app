//action types
export const LOAD_CONTACTS_FROM_API = "LOAD_CONTACTS_FROM_API";
export const DELETE_CONTACT_FROM_CONTACT_LIST = "DELETE_CONTACT_FROM_CONTACT_LIST";


//actions
export const load_contacts_from_api = (contacts) => {
	return function (dispatch) {
		dispatch({
			type: LOAD_CONTACTS_FROM_API,
			contacts,
		});
		// toast.success("Contacts loaded successfully!!!", {
		// 	autoClose: 1000,
		// });
	};
};

export const deleteContact = (id) => {
	return function (dispatch) {
		dispatch({
			type: DELETE_CONTACT_FROM_CONTACT_LIST,
			id,
		});
		// toast.success("Contacts loaded successfully!!!", {
		// 	autoClose: 1000,
		// });
	};
};
