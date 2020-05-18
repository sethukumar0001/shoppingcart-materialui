import {ADDITEMTOCART,REMOVEITEMTOCART,DECREASEITEMINCART,INCREASEITEMINCART} from '../_constants/Constants';

const AddItemToCart = (payload) => ({
    type:ADDITEMTOCART,
    payload
})

const DecreaseItemInCart = (payload) => ({
    type:DECREASEITEMINCART,
    payload
})

const IncreaseItemInCart = (payload) => ({
    type:INCREASEITEMINCART,
    payload
})

const RemoveItemToCart = (payload) => ({
    type:REMOVEITEMTOCART,
    payload
})

export {
    AddItemToCart,
    RemoveItemToCart,
    DecreaseItemInCart,
    IncreaseItemInCart
}