export function setValues(values) {
	return {
		type : "CHANGE_NAME",
		payload : values
	}
}

export function form_value(values) {
	return {
		type : "FORM_VALUE",
		payload : new Promise((resolve, rejact)=> {
			setTimeout(()=>resolve(values),5000);
		})
	}
}