import './Product.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productActions} from "../../redux";
import {useForm} from "react-hook-form";

const Product = ({product}) => {

    const {id, title, image, price,} = product;

    const {confirmToBasket} = useSelector(state => state.products);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register,handleSubmit} = useForm();


    const addComment = (comment) => {
        if (comment.message) {
        dispatch(productActions.addToBasket({product, comment:comment.message}));
        }
    };

    return (
        <div className={'productsListCard'}>

            <div>
                {confirmToBasket === id && <div className={'confirmToBasket'}>
                    <form onSubmit={handleSubmit(addComment)}>
                        <input type="text" placeholder={'comment'} {...register('message')}/>
                        <button>comment and confirm</button>
                    </form>

                    <button className={'buttonConfirm'}
                            onClick={() => dispatch(productActions.addToConfirm(100))}>reject
                    </button>
                </div>}
            </div>


            <div style={{margin:10}}>{title}</div>
            <div>
                <img src={image} alt=""/>
            </div>
            <div>price {price}</div>
            <div>
                <button style={{margin:10}} onClick={() => navigate(`/product/${id}`)}>get info</button>
                <button style={{margin:10}} onClick={() => dispatch(productActions.addToConfirm(product))}>add to basket</button>
            </div>
        </div>
    );
};

export {Product};