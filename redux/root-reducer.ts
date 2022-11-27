import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
// import cartReducer from './cart/cart.reducer'
// import styleReducer from './style/style.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});


// const rootReducer = (state: RootState, action) => {
//   return allReducers(state, action);
// }

export default persistReducer(persistConfig, rootReducer);
