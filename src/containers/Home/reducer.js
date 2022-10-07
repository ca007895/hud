export const initialState = {
    money: 0,
    transactionHistory: [],
    itensList: [],
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_CASHMENU':
            return Object.assign({}, state, {
                money: action.payload.money,
                transactionHistory: action.payload.transactionHistory,
                itensList: action.payload.itensList,
                pesoMaximo: action.payload.pesoMaximo
            });
        default:
            return state;
    }
};

export default homeReducer;