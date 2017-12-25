import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Restaurant from './restaurant';

const styles = StyleSheet.create({
	restaurants: {
		"padding": "10px",
		"margin-top": "10px",
		"margin-bottom": "0",
		"list-style": "none",
		"background": "#EAEAEA",
		"display": "block",
    "border-radius": "4px",
    "text-align": "left"
	},
	title: {
		"text-align": "left",
		"margin-top": "30px",
		"font-size": "0.8rem",
		":after": {
			"content": "''",
			"display": "block",
			"width": "60px",
			"height": "2px",
			"background": "#87c20a"
		}
	}
})

const Restaurants = () => (
	<div>
		<h2 className={css(styles.title) }>ランチ候補一覧</h2>
		<ul className={ css(styles.restaurants) }>
			<Restaurant { ...this.props }/>
			<Restaurant { ...this.props }/>
			<Restaurant { ...this.props }/>
			<Restaurant { ...this.props }/>
			<Restaurant { ...this.props }/>
			<Restaurant { ...this.props }/>
		</ul>
	</div>
)

export default Restaurants