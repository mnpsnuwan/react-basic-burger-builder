import React, {Component} from "react";

import classes from './Modal.css'
import Auc from "../../../hoc/Auc/Auc";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Modal] Will Update')
    }

    render() {
        return (
            <Auc>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auc>
        );
    }
}


export default Modal;