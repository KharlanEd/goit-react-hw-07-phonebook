// import { configureStore } from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit";

// import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactSlisce";
import { filterReducer } from "./filterSlisce";

export const store = configureStore({
  reducer: {
   contacts: contactsReducer ,
   filter: filterReducer,
    
  },
});


// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persisteContactReducer } from 'redux/contactSlisce';

// export const store = configureStore({
//   reducer: {
//     contacts: persisteContactReducer,
    
//   },
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store)