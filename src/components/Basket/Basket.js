import {useSelector} from "react-redux";
import {BasketItem} from "../BasketItem/BasketItem";

import './Basket.css';

const Basket = () => {

    const {basket} = useSelector(state => state.products);

    return (
        <div className={'basket'}>
            {basket && basket.map(value => <BasketItem key={value.id} item={value}/>)}
        </div>
    );
};

export {Basket};