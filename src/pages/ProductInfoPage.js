import {ProductInfo} from "../components/ProductInfo/ProductInfo";
import {useEffect} from "react";
import {productService} from "../services/product.service";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productActions} from "../redux/slices/products.slice";

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