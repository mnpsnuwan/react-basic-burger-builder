import React from "react";
import {Route, Switch} from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <div className="App">
        <Layout>
            <Switch>
                <Route path="/" exact component={BurgerBuilder} />
                <Route path="/orders" component={Orders} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
