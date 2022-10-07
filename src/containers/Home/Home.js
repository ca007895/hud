import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nui from '../../util/Nui';
import CardList  from "./components/CardList/CardList";
import GoldImage from '../../util/assets/gold-ingot.svg'
import RockImage from '../../util/assets/stone.svg'
import DiamondImage from '../../util/assets/diamond.svg'

class Home extends React.Component {
  render() {
    const { money, transactionHistory, itensList, pesoMaximo } = this.props;
    
    return (
      <div className='home'>
        <div>
          <h1>{money}</h1>
        </div>
        <div>
          <CardList itens={itensList} pesoMaximo={pesoMaximo}/>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  money: PropTypes.number,
  pesoMaximo: PropTypes.number,
  transactionHistory: PropTypes.arrayOf(PropTypes.object),
  itensList: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  money: state.dataOwner.money,
  pesoMaximo: state.dataOwner.pesoMaximo,
  transactionHistory: state.dataOwner.transactionHistory,
  itensList: state.dataOwner.itensList,
});

export default connect(mapStateToProps)(Home);

setTimeout(() => {
  Nui.emulate('RECEIVE_CASHMENU', {
    money: 500,
    transactionHistory: [],
    pesoMaximo: 500,
    itensList: [
      {
        item: "Rocha",
        valor: 10,
        peso: 10,
        quantidade: 10,
        img: RockImage
      },
      {
        item: "Ouro",
        valor: 500,
        peso: 5,
        quantidade: 5,
        img: GoldImage
      },
      {
        item: "Diamante",
        valor: 500,
        peso: 5,
        quantidade: 5,
        img: DiamondImage
      },
    ],
  });
}, 100);