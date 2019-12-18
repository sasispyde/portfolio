const initialState1 = {
	result : 1,
	last_values : []
}

const firstreducer = (state = initialState1,action) => {
	switch(action.type) {
		case "ADD" :
			state = {
				...state,
				result : state.result + action.payload,
				last_values : [...state.last_values , action.payload]
			}
			break;
		case "SUB" :
			state = {
				...state,
				result : state.result - action.payload,
				last_values : [...state.last_values , action.payload]
			}
			break;
		default :
			break;
	}
	return state;
}

export default firstreducer