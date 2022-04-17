import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import CartContext from "../../store/cart-contex";

const Backdrop = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.backdrop} onClick={cartCtx.cartCloseHandler}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Element = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, Element)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        Element
      )}
    </Fragment>
  );
};

export default Modal;
