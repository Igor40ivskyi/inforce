import './BasketItem.css';

const BasketItem = ({item}) => {

    const {title, image, price, comment} = item;

    return (
        <div className={'basketItemCard'}>
            <div>{title}</div>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div>price: {price}</div>

            <div className={'commentBlock'}>
                 COMMENT: {comment}
            </div>
        </div>
    );
};

export {BasketItem};