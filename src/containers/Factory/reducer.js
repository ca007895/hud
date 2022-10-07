
const machines = [
    {
        name: "First Machine",
        costs: [{ type: "money", value: 500 }],
        levels: [
            { nivel: 0, minuteslimit: 1, farmPerMinute: 3, price: 0 },
            { nivel: 1, minuteslimit: 2, farmPerMinute: 6, price: 50 },
            { nivel: 2, minuteslimit: 3, farmPerMinute: 12, price: 100 },
            { nivel: 3, minuteslimit: 4, farmPerMinute: 24, price: 150 },
            { nivel: 4, minuteslimit: 5, farmPerMinute: 48, price: 200 },
        ]
    },
    {
        name: "Second Machine",
        costs: [
            {
                type: "money", value: 1000
            }
        ],
        levels: [

            { nivel: 0, minuteslimit: 1, farmPerMinute: 3, price: 0 },
            { nivel: 1, minuteslimit: 2, farmPerMinute: 6, price: 50 },
            { nivel: 2, minuteslimit: 3, farmPerMinute: 12, price: 100 },
            { nivel: 3, minuteslimit: 4, farmPerMinute: 24, price: 150 },
            { nivel: 4, minuteslimit: 5, farmPerMinute: 48, price: 200 },
        ]
    },
    {
        name: "Third Machine",
        costs: [
            {
                type: "money", value: 2000
            }
        ],
        levels: [
            { nivel: 0, minuteslimit: 1, farmPerMinute: 3, price: 0 },
            { nivel: 1, minuteslimit: 2, farmPerMinute: 6, price: 50 },
            { nivel: 2, minuteslimit: 3, farmPerMinute: 12, price: 100 },
            { nivel: 3, minuteslimit: 4, farmPerMinute: 24, price: 150 },
            { nivel: 4, minuteslimit: 5, farmPerMinute: 48, price: 200 },

        ]

    }
]


export const initialState = {
    machinesToBuy: [],
    machines: [],
    limitNumberMachineLevel: null,
    nextLimitMachineLevel: null
};

const factoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FACOTORY_DATES':
            return Object.assign({}, state, {
                limitNumberMachineLevel: action.payload.limitNumberMachineLevel,
                nextLimitMachineLevel: action.payload.limitNumberMachineLevel,
                machines: action.payload.machines,
                machinesToBuy: action.payload.machinesToBuy
            })
        case 'UPGRADE_LIMIT_MACHINES':
            return Object.assign({}, state, {
                limitNumberMachineLevel: action.payload.limitNumberMachineLevel,
                nextLimitMachineLevel: action.payload.limitNumberMachineLevel
            })

        case 'SET_MACHINES':
            console.log("Acttion", action)
            return Object.assign({}, state, {
                machines: action.payload.machines,
            })
        case 'SET_MACHINES_TO_BUY':
            return Object.assign({}, state, {
                machinesToBuy: action.payload.machinesToBuy,
            })
        default:
            return state;
    }
};

export default factoryReducer;


