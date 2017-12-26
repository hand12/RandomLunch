import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import '../App.css';

import Title from "./title";
import Restaurants from "./result/restaurants";

const styles = StyleSheet.create({
	main_conatainer: {
    margin: "100px",
    "text-align": "center"
  },
  title: {
		"text-align": "center",
		":before": {
			"content": "'・'",
			"display": "inline-block",
			"color": "#34AA33"
		}
  },
  result: {
    "display": "inline-block",
    "border-radius": "4px",
    "background": "lightgray"
  },
})

const Result = () => (
  <div id="main_container" className={ css(styles.main_conatainer) }>
    <Title />
    <h2 className={ css(styles.title) }>今回のランダムランチの組合せです</h2>
    <div className={ css(styles.result) }>
      <Restaurants />
    </div>
  </div>
)

export default Result;
