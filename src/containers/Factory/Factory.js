import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MachineList from './MachineList/MachineList';
import BuyDialog from "./BuyDialog/BuyDialog"
import Nui from '../../util/Nui';

class Factory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const handleClickOpen = () => {
      this.setState({ open: true })
    };

    const handleClose = (value) => {
      this.setState({ open: false })
      if (value) {
        Nui.send("buyMachine", value)
      }
    };
    const { machinesToBuy, machines, limitNumberMachineLevel, nextLimitMachineLevel } = this.props;
    return (
      <div className='home'>
        <div>
          <AddCircleOutlineIcon />
        </div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <BuyDialog selectedValue={null} open={this.state.open} machinesToBuy={machinesToBuy} onClose={handleClose} />
        {machines.lenght < limitNumberMachineLevel && <button> Buy machine</button>}
        <div>
          <MachineList machines={machines} />
        </div>
      </div>
    );
  }
}

Factory.propTypes = {
  machinesToBuy: PropTypes.arrayOf(PropTypes.object),
  machines: PropTypes.arrayOf(PropTypes.object),
  limitNumberMachineLevel: PropTypes.object,
  nextLimitMachineLevel: PropTypes.object
};

const mapStateToProps = state => ({
  machinesToBuy: state.factory.machinesToBuy,
  machines: state.factory.machines,
  limitNumberMachineLevel: state.factory.limitNumberMachineLevel,
  nextLimitMachineLevel: state.factory.nextLimitMachineLevel,
});

export default connect(mapStateToProps)(Factory);


// setTimeout(() => {
//   Nui.emulate('RECEIVE_CASHMENU', {
//     money: 500,
//     transactionHistory: [],
//     pesoMaximo: 500,
//     itensList: [
//       {
//         item: "Rocha",
//         valor: 10,
//         peso: 10,
//         quantidade: 10,
//         img: RockImage
//       },
//       {
//         item: "Ouro",
//         valor: 500,
//         peso: 5,
//         quantidade: 5,
//         img: GoldImage
//       },
//       {
//         item: "Diamante",
//         valor: 500,
//         peso: 5,
//         quantidade: 5,
//         img: DiamondImage
//       },
//     ],
//   });
// }, 100);