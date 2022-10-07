import React from 'react'
import PropTypes from 'prop-types'
import { StyledList, StyledDialog } from "./styles"
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'

function BuyDialog(props) {
  const { onClose, selectedValue, open, machinesToBuy } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <StyledDialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Buy Machine</DialogTitle>
      <StyledList>
        {machinesToBuy.map((machine, k) => (
          <ListItem button onClick={() => handleListItemClick(machine)} key={k}>
            <div>
              <span>{machine.name} </span>
              <span>{machine.price}</span>

              {machine.levels.map((level, k) => <div key={k}>
                <span>{level.name} </span>
                <span>{level.minuteslimit} </span>
                <span>{level.farmPerMinute} </span>
                <span>{level.price} </span>
              </div>
              )}
            </div>
          </ListItem>
        ))}
      </StyledList>
    </StyledDialog>
  );
}

BuyDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default BuyDialog;