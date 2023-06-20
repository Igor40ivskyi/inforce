import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {productActions} from "../../redux";
import {Product} from "../Product/Product";

const Products = () => {

    const {products} = useSelector(state => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.getProducts());
    },[dispatch]);


    return (
        <div>
            {products.map(value => <Product key={value.id} product={value}/>)}
        </div>
    );
};

export {Products};