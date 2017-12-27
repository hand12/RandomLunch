import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Restaurant from "./restaurant";

const styles = StyleSheet.create({
  restaurants: {
    "padding": "10px",
    "list-style": "none",
    "text-align": "center"
  },
})

const Restaurants = (props) => (
  <ul className={ css(styles.restaurants) }>
    { props.result.restaurants.map((result) => {
      return <Restaurant restaurant = { result.restaurant } key = { result.restaurant.id } members = { result.members } />
    })}
  </ul>
)

export default Restaurants;