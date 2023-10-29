import React from "react";
import {Route, Switch} from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <div className="App">
        <Layout>
            <Switch>
                <Route path="/" exact component={BurgerBuilder} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Checkout} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
