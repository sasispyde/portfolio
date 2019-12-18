const initialState2 = {
	name:"",
	email:""
}

const secondreducer = (state = initialState2,action) => {
	switch(action.type) {
		case "CHANGE_NAME" :
			state = {	
				...state,
				name : action.payload.name,
				email : action.payload.email
			}
			break;
		default :
			break;
	}
	return state;
}

export default secondreducer;