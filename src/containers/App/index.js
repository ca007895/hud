import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Home from "../Home/Home"
import Factory from "../Factory/Factory"
import styled from 'styled-components';
import Nui from '../../util/Nui';
import Sidebar from "../SlideBar/Slidebar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import styles from "../../theme";
import { Routes } from '../../util/Routes';

const H1 = styled('h1')`
  font-family: Pricedown;
  visibility: ${props => props.hidden};
`;

const AppContainer = styled('div')`
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 100%;
  min-width: 900px;
  width: 100%;
  background: transparent;
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 12px;
`;
const MenuItemContainer = styled('div')`
  background-color: white;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const temaProjeto = createMuiTheme(styles);

function App({ hidden }) {
  useStyles();
  return (!hidden && <StylesProvider injectFirst>
    <ThemeProvider theme={temaProjeto}>
      <CssBaseline />
      <AppContainer>
        <Router>
          <Sidebar />
          <Switch>
            <MenuItemContainer>
              <Route path={Routes.Home} exact component={Home} />
              <Route path={Routes.Factory} exact component={Factory} />
            </MenuItemContainer>
          </Switch>
        </Router>
      </AppContainer>
    </ThemeProvider>
  </StylesProvider>);
}


const useStyles = makeStyles(() => ({
  "@global": styles.global,
}));

App.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ hidden: state.app.hidden });

export default connect(mapStateToProps)(App);


// setTimeout(() => {
//   Nui.emulate('APP_SHOW', {
//     hidden: true
//   });
// }, 500);