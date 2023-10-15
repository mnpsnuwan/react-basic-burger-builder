import React from "react";

import classes from './Modal.css'
import Auc from "../../../hoc/Auc";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Auc>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div
          className={classes.Modal}
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100)',
            opacity: props.show ? '1' : '0'
          }}>
          {props.children}
      </div>
    </Auc>
);

export default modal;