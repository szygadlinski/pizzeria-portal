import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider }  from '@material-ui/styles';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Booking    from './components/views/Booking/Booking';
import Dashboard  from './components/views/Dashboard/Dashboard';
import Event      from './components/views/Event/Event';
import Kitchen    from './components/views/Kitchen/Kitchen';
import Login      from './components/views/Login/Login';
import Order      from './components/views/Order/Order';
import Tables     from './components/views/Tables/Tables';
import Waiter     from './components/views/Waiter/WaiterContainer';
import store      from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b4c6f',
    },
  },
});

export const baseUrl = process.env.PUBLIC_URL;

export const routes = {
  dashboard: `${baseUrl}/`,
  login: `${baseUrl}/login`,
  tables: `${baseUrl}/tables`,
  booking: `${baseUrl}/tables/booking/:id`,
  event: `${baseUrl}/tables/event/:id`,
  waiter: `${baseUrl}/waiter`,
  order: `${baseUrl}/waiter/order/:id`,
  kitchen: `${baseUrl}/kitchen`,
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={routes.dashboard} component={Dashboard} />
                <Route exact path={routes.login} component={Login} />
                <Route exact path={routes.tables} component={Tables} />
                <Route exact path={routes.booking} component={Booking} />
                <Route exact path={routes.event} component={Event} />
                <Route exact path={routes.waiter} component={Waiter} />
                <Route exact path={routes.order} component={Order} />
                <Route exact path={routes.kitchen} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
