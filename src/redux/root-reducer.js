import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

import authenticationReducer from './authentication/authentication.reducer';
// import cartReducer from './cart/cart.reducer';
// import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  authentication: authenticationReducer
  // cart: cartReducer,
  // shop: shopReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
  // whitelist: ['cart']
};

export default persistReducer(persistConfig, rootReducer);
