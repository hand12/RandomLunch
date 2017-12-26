import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Restaurant from "./restaurant";

const styles = StyleSheet.create({
  restaurants: {
    "padding": "10px",
    "list-style": "none",
    "text-align": "center"
  },
})

const Restaurants = () => (
  <ul className={ css(styles.restaurants) }>
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
    <Restaurant />
  </ul>
)

export default Restaurants;