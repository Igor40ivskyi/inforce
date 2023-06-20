import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services/product.service";

const initialState = {
    products: [],
    chosenProduct:null,
    basket: [],
    confirmToBasket: null,
}

const getProducts = createAsyncThunk(
    'productSlice/getProducts',
    async (_, {rejectWithValue}) => {
        try {
            return await productService.getProducts();
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getProduct = createAsyncThunk(
    'productSlice/getProduct',
    async ({id}, {rejectWithValue}) => {
        try {
            return await productService.getProductById(id);
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const slice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        addToConfirm: (state, action) => {
            console.log(state.basket);
                state.confirmToBasket = action.payload.id;
        },
        addToBasket: (state, action) => {
            state.basket = [...state.basket, {...action.payload.product, comment: action.payload.comment}];
            state.confirmToBasket = null;
            console.log(state.basket);
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload.data;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                console.log(action.payload.data);
                state.chosenProduct = action.payload.data;
            }),
});

const {reducer: productReducer, actions} = slice;

const productActions = {
    ...actions,
    getProducts,
    getProduct,
};

export {
    productReducer,
    productActions,
};