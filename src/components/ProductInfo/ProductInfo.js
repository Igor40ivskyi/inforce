import './ProductInfo.css';

const ProductInfo = ({chosenProduct}) => {

    const {id, title, description, category, price, image, rating: {rate, count}} = chosenProduct;

    return (
        <div className={'chosenProductCard'}>

            <div className={'textCard'}>{title}</div>
            <div className={'textCard'}>description: {description}</div>
            <div className={'textCard'}>category - {category}</div>
            <div className={'textCard'}>rate - {rate}</div>
            <div className={'textCard'}>count - {count}</div>
            <div className={'imgCard'}>
                <img src={image} alt={title}/>
            </div>
            <div>price - {price}</div>

        </div>
    );
};

export {ProductInfo};