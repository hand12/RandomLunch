import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Restaurant from './restaurant';

const styles = StyleSheet.create({
	restaurants: {
		"padding": "10px",
		"margin-top": "30px",
		"margin-bottom": "0",
		"list-style": "none",
		"background": "#EAEAEA",
		"display": "block",
    "border-radius": "4px",
    "text-align": "left"
	},
})

const Restaurants = () => (
	<ul className={ css(styles.restaurants) }>
		<Restaurant { ...this.props }/>
		<Restaurant { ...this.props }/>
		<Restaurant { ...this.props }/>
		<Restaurant { ...this.props }/>
		<Restaurant { ...this.props }/>
		<Restaurant { ...this.props }/>
	</ul>
)

export default Restaurants