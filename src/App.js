import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Booking    from './components/views/Booking/Booking';
import Dashboard  from './components/views/Dashboard/Dashboard';
import Event      from './components/views/Event/Event';
import Kitchen    from './components/views/Kitchen/Kitchen';
import Login      from './components/views/Login/Login';
//import NewBooking from './components/views/NewBooking/NewBooking';
//import NewEvent   from './components/views/NewEvent/NewEvent';
//import NewOrder   from './components/views/NewOrder/NewOrder';
import Order      from './components/views/Order/Order';
import Tables     from './components/views/Tables/Tables';
import Waiter     from './components/views/Waiter/Waiter';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b4c6f',
    },
    // secondary: {
    //   main: ,
    // },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              {/*<Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBooking} />*/}
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
              {/*<Route exact path={`${process.env.PUBLIC_URL}/tables/event/new`} component={NewEvent} />*/}
              <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={Event} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              {/*<Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />*/}
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
