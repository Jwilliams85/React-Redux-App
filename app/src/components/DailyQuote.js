import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchQuote } from '../store/actions/quoteActions';

const DailyQuote = (props) => {
	useEffect(() => {
		// call an action creator
		props.fetchQuote();
	}, []);

	// this will handle our fetching state
	// there are two ways to fetch state... outside your main return
	// or inside your main return
	// this would hide everything in the return and only display the <Loader />
	// if (props.isFetching) {
	// 	return <Loader />;
	// }

	return (
		<div>
			<h1>Daily Quote: </h1>

			{/* the isFetching below will display the header  */}
			{props.isFetching && (
				<Loader type="Puff" color="#00BFFF" height={100} width={100} />
			)}

			{/* below is shorthand for {props.quote ? <h3>"{props.quote}"</h3> : null}  */}
			{props.quote && <h3>"{props.quote}"</h3>}

			{props.error && <p className="error">{props.error}</p>}

			<button onClick={props.fetchQuote} style= {{backgroundColor: 'black', color: 'red'}}>Get A New Quote</button>
		</div>
	);
};

// this component needs to know about our initialState
// we will connect the component with our connect() and mapStateToProps
// we are returning the initialState

const mapStateToProps = (state) => {
	console.log(state);
	return {
		quote: state.quotes.quote,
		isFetching: state.quotes.isFetching,
		error: state.quotes.error,
	};
};

export default connect(
	mapStateToProps,
	{ fetchQuote },
)(DailyQuote);


