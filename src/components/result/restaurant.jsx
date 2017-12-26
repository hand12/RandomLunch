import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Members from "./members";

const styles = StyleSheet.create({
  restaurant: {
    "display": "inline-block",
    "min-width": "200px",
    "background": "#f5f5f5",
    "margin": "0 10px 10px",
    "border-radius": "2.5px",
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

const Restaurant = () => (
  <li className={ css(styles.restaurant) }>
    <h2 className={ css(styles.name) }>
      龍門
    </h2>
    <Members />
  </li>
)

export default Restaurant;