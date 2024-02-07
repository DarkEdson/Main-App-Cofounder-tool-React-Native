import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IsArticleSelected {
    tag?: string;
    title?: string;
    author?: string;
    days?: string;
    imageUri?: string;
    description?:string
}

const initialState: IsArticleSelected = {
    tag :'tags',
    title :'Titles',
    author : 'Authors',
    imageUri: 'https://placekitten.com/200/300',
    days : '0',
    description : 'Description'
};

const articleSlice = createSlice({
  name: "articleSelected",
  initialState,
  reducers: {
    setArticle: (state, action: PayloadAction<IsArticleSelected | null>) => {
      state.tag = action.payload?.tag;
      state.title = action.payload?.title;
      state.author = action.payload?.author;
      state.days = action.payload?.days;
      state.imageUri = action.payload?.imageUri;
      state.description = action.payload?.description;
    },
    resetArticle: (state) => {
        state.tag = 'tags';
        state.title = 'Titles';
        state.author = 'Authors';
        state.days = 'https://placekitten.com/200/300';
        state.imageUri = '0';
        state.description ='Description'
    },
  },
});

export const { setArticle, resetArticle } = articleSlice.actions;
export default articleSlice.reducer;
