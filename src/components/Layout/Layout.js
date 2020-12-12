import React from "react";
import Aux from "../../hoc/Auxiliary";
// import classes from './Layout.css';
import './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="content">
      {props.children}
    </main>
  </Aux>
);

export default layout;
