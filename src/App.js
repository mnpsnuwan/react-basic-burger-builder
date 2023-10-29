import React from "react";
import {Route, Routes} from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <div className="App">
        <Layout>
            <Routes>
                <Route path="/" element={<BurgerBuilder />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Layout>
    </div>
  );
}

export default App;
