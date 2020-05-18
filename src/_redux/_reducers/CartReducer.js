import { ADDITEMTOCART, REMOVEITEMTOCART, DECREASEITEMINCART, INCREASEITEMINCART } from "../_constants/Constants";


export const CartReducer = (state = [], action) => {

    switch (action.type) {
        case ADDITEMTOCART:
            return [...state, action.payload];

        case DECREASEITEMINCART:
            state = [...state]
            const index = state.map(item => item.id).indexOf(action.payload.id);
            state[index].quantity -= 1
            return [...state]


        case INCREASEITEMINCART:
            state = [...state]
            const index1 = state.map(item => item.id).indexOf(action.payload.id);
            state[index1].quantity += 1
            return [...state]

        case REMOVEITEMTOCART:
            let newArray = [...state]
            var index3 = action.payload
                newArray.splice(index3, 1);
            return newArray;

        default:
            return state;
    }
}