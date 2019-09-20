import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import authenticationReducer from './authentication/authentication.reducer';
// import cartReducer from './cart/cart.reducer';
// import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
  // authentication: authenticationReducer,
  // cart: cartReducer,
  // shop: shopReducer
});

const persistConfig = {
  key: 'root',
  storage
  // whitelist: ['cart']
};

export default persistReducer(persistConfig, rootReducer);
