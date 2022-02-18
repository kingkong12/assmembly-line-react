import storage from 'redux-persist/lib/storage'

const persistConfig = Object.freeze({
  key: 'MITHIL-REDUX-PERSIST-SETUP',
  storage,
  // ADD WHITE AND BLACK LIST HERE
})
export { persistConfig }
