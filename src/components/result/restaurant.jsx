import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Members from "./members";

const styles = StyleSheet.create({
  restaurant: {
    "display": "inline-block",
    "min-width": "200px",
    "background": "#f5f5f5",
    "margin": "0 10px 10px",
    "border-radius": "2.5px",
    "vertical-align": "top",
    "box-shadow": "rgba(0, 0, 0, 0.2) 2px 2px 5px 0px",
  },
  name: {
    "margin": "0",
    "padding": "0 10px",
    "line-height": "2.75rem",
    "text-align": "left",
    "background": "white",
    "border-bottom": "3px solid #00C136",
    "border-radius": "2.5px 2.5px 0 0",
    "box-shadow": "rgba(0, 0, 0, 0.2) 0 1px 5px 0px",
  },
})

const Restaurant = (props) => (
  <li className={ css(styles.restaurant) }>
    <h2 className={ css(styles.name) }>
      { props.restaurant.name }
    </h2>
    <Members { ...props } />
  </li>
)

export default Restaurant;