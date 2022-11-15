import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createTheme, makeStyles } from "@material-ui/core/styles";
import FirstSimpleHud from "../FirstSimpleHud/FirstSimpleHud"
import styled from 'styled-components';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import styles from "../../theme";
import Nui from '../../util/Nui';

const H1 = styled('h1')`
  font-family: Pricedown;
  visibility: ${props => props.hidden};
`;


const temaProjeto = createTheme(styles);

function App({ hidden, dadosHud }) {
  useStyles();
  return (!hidden && <StylesProvider injectFirst>
    <ThemeProvider theme={temaProjeto}>
      <CssBaseline />
      <FirstSimpleHud data={dadosHud}>

      </FirstSimpleHud>
    </ThemeProvider>
  </StylesProvider>);
}


const useStyles = makeStyles(() => ({
  "@global": styles.global,
}));

App.propTypes = {
  hidden: PropTypes.bool.isRequired,
  dadosHud: PropTypes.object,
};

const mapStateToProps = state => ({ hidden: state.app.hidden, dadosHud: state.app.dadosHud });

export default connect(mapStateToProps)(App);


setTimeout(() => {
  Nui.emulate('UPDATE_HUD', {
    dadosHud: {
      fome: 50,
      vida: 50,
      estamina: 50,
      colete: 50,
    }
  });
}, 5000);