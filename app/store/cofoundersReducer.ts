import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IsCofounderSelected {
    tag: string;
    title: string;
    author: string;
    days: string;
    imageUri: string;
    description:string
}

const initialState: IsCofounderSelected = {
    tag :'tags',
    title :'Titles',
    author : 'Authors',
    imageUri: 'https://placekitten.com/200/300',
    days : '0',
    description : 'Description'
};

const cofoundersSlice = createSlice({
  name: "articleSelected",
  initialState,
  reducers: {
    setCofounders: (state, action: PayloadAction<IsCofounderSelected>) => {
      state.tag = action.payload.tag;
      state.title = action.payload.title;
      state.author = action.payload.author;
      state.days = action.payload.days;
      state.imageUri = action.payload.imageUri;
      state.description = action.payload.description;
    },
    resetCofounders: (state) => {
        state.tag = 'tags';
        state.title = 'Titles';
        state.author = 'Authors';
        state.days = 'https://placekitten.com/200/300';
        state.imageUri = '0';
        state.description ='Description'
    },
  },
});

export const { setCofounders, resetCofounders } = cofoundersSlice.actions;
export default cofoundersSlice.reducer;
