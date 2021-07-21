import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCatsList = createAsyncThunk(
  "cat/getCat",
  async ({ limit, page, category }) => {
    if (!category) {
      category = "";
    }

    let res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category}`
    );
    let data = await res.json();
    return data;
  }
);

export const reloadCatsList = createAsyncThunk(
  "cat/reloadCat",
  async ({ limit, page, category }) => {
    if (!category) {
      category = "";
    }

    let res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category}`
    );
    let data = await res.json();
    return data;
  }
);

export const getCategory = createAsyncThunk("cat/getCategory", async () => {
  let res = await fetch(`https://api.thecatapi.com/v1/categories`);
  let data = await res.json();
  return data;
});

export const catReducer = createSlice({
  name: "cat",
  initialState: {
    catsList: [],
    isisLoading: false,
    categories: [],
    isReload: null,
  },

  extraReducers: {
    [getCategory.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getCatsList.fulfilled]: (state, action) => {
      if (!state.catsList.length) {
        state.catsList = action.payload;
      } else {
        state.catsList = [...state.catsList, ...action.payload];
      }
    },
    [reloadCatsList.fulfilled]: (state, action) => {
        state.catsList = action.payload;
    },
  },
});

export const { setWhatIsChange } = catReducer.actions;


export default catReducer.reducer;
