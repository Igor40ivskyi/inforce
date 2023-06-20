import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'products'}>Products</NavLink>
            <NavLink to={'basket'}>Basket</NavLink>
        </div>
    );
};

export {Header};