import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {ProductInfo} from "../components";
import {productActions} from "../redux";

const ProductInfoPage = () => {

    const {chosenProduct} = useSelector(state => state.products);

    const dispatch = useDispatch();

    const params = useParams();

    useEffect(() => {
        dispatch(productActions.getProduct({id: params.productId}))
    }, [dispatch]);

    return (
        <div>
            {chosenProduct && <ProductInfo chosenProduct={chosenProduct}/>}
        </div>
    );
};

export {ProductInfoPage};