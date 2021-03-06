import { createStore } from 'redux'
import RootReducer from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, RootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export {store, persistor};