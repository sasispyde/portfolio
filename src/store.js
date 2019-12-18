import logger from 'redux-logger';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import firstreducer from './reducers/firstreducer';
import secondreducer from './reducers/secondreducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


export default createStore(combineReducers({firstreducer,secondreducer}),{},applyMiddleware(logger,thunk,promise));


// export default createStore(
// 	combineReducers(
// 		{
// 			firstreducer,
// 			secondreducer
// 		})
// 	);
