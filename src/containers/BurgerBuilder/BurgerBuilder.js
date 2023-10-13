import React, {Component} from "react";
import Auc from "../../hoc/Aox";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{
    render() {
        return (
            <Auc>
                <Burger />
                <div>Build Controls</div>
            </Auc>
        )
    }
}

export default BurgerBuilder;