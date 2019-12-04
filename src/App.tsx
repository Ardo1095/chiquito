import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutPage from './pages/about/aboutPage';
import OrderPage from './pages/order/orderPage';
import PaymentPage from './pages/payment/paymentPage';
import SummaryPage from './pages/summary/summaryPage';
import Header from './components/header/header';
import ContactPage from './pages/contact/contactPage';

const App: FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/order" component={OrderPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/summary" component={SummaryPage} />
    </Switch>
  </Router>
);

export default App;
