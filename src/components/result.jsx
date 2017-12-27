import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom'
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
  button: {
    "display": "block",
    "width": "100px",
    "margin": "10px auto",
		"padding": "10px",
		"font-size": "0.8rem",
		"border-radius": "4px",
		"background": "linear-gradient(135deg, #34AA33, #76B90E)",
		"color": "white",
		"transition": "0.2s",
		":hover": {
			"background": "linear-gradient(135deg, #34AA33, #76B90E)",
			"box-shadow": "rgba(0, 0, 0, 0.2) 2px 2px 5px 0px",
		}
	}
})

const Result = (props) => (
  <div id="main_container" className={ css(styles.main_conatainer) }>
    <Title />
    <h2 className={ css(styles.title) }>今回のランダムランチの組合せです</h2>
    <div className={ css(styles.result) }>
      <Restaurants { ...props } />
    </div>
    <Link className={ css(styles.button) } to="/">Topに戻る</Link>
  </div>
)

export default Result;
