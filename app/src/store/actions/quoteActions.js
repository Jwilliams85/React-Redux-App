import axios from 'axios';

// thunk - an inner function returned by an outer function

// Redux is sychronous
// we need to perform an async operation

export const fetchQuote = () => {
	return (dispatch) => {
		dispatch({ type: 'FETCH_QUOTE_START' });
		axios
			.get('https://api.taylor.rest')
			.then((res) => {
				// res.data.quote
				dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.quote });
			})
			.catch((err) => {
				// message: err.response.data
				// status: err.response.status
				dispatch({
					type: 'FETCH_QUOTE_FAILURE',
					payload: `Error ${err.response.status}: ${err.response.data}`,
				});
			});
	};
};