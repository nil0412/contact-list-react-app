export const LOAD_CONTACTS_FROM_API = "LOAD_CONTACTS_FROM_API";

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
}