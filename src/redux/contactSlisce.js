import { createSlice } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
import {  fetchContacts } from "./operations";
import { addContact,deleteContact} from "./operations";


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


  const contactSlice = createSlice({
    name: 'contacts',
    initialState:{
      contacts: [],
      isLoading: false,
      error: null,
    
    },
    extraReducers:{
      [fetchContacts.pending]: handlePending,
      [fetchContacts.fulfilled](state,action) {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
        
      },
      [fetchContacts.rejected]: handleRejected,
      [addContact.pending]:handlePending,
      [addContact.fulfilled](state,action){
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload)
      },
      [addContact.rejected]: handleRejected,
      [deleteContact.pending]: handlePending,
      [deleteContact.fulfilled](state,action){
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(contact=>contact.id === action.payload.id);
        state.contacts.splice(index, 1);
      },

        // addContact:{
        //     reducer(state,{payload}){
        //         state.contacts.push(payload)
        //     },
        //     prepare({values}){
                
        //         return{
        //             payload: { 
        //                 name:values.name,
        //                 number:values.number,
        //                 id: nanoid(),
        //             },
                  
        //          };
        //     }
        // },

        // deleteContact:{
        //     reducer(state,action){
        //         const index = state.contacts.findIndex(contact=>contact.id === action.payload);
        //         state.contacts.splice(index,1);
        //     }
        // },
        // setFilterValue(state, action) {
        //     state.filter = action.payload;
        //   },
  }})

  // const contactsPersistConfig = {
  //   key: 'contacts',
  //   version: 1,
  //   storage,
  //   blacklist: ['filter'],
  // };
  
  // export const persisteContactReducer = persistReducer(
  //   contactsPersistConfig,
  //   contactSlice.reducer
  // );

// export const {setFilterValue} = contactSlice.actions
// export const {addContact,deleteContact,setFilterValue} = contactSlice.actions;
export  const contactsReducer = contactSlice.reducer;