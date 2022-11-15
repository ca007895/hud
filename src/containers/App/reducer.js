export const initialState = {
  hidden: false,
  dadosHud: {
    fome: 0,
    sede: 0,
    estamina: 0,
    vida: 0,
    colete: 0,
    dinheiro: 0,
    banco: 0,
    velocidade: 0,
    marcha: 0,
    gasolina: 0,
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_SHOW':
      return Object.assign({}, state, { hidden: false });
    case 'APP_HIDE':
      return Object.assign({}, state, { hidden: true });
    case 'UPDATE_HUD':
      return Object.assign({}, state, {
        dadosHud: action.payload.dadosHud
      });
    default:
      return state;
  }
};

export default appReducer;
