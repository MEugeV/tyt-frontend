import { SET_LOADING } from '../actions/types';

const initialState = {
	loading: false,
};

const redLoading = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return { ...state, loading: payload };
		default:
			return state;
	}
};

export default redLoading;
