import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	title: {
		"text-align": "center",
		"font-size": "3rem",
		"line-height": "3.5rem",
		":after": {
			"display": "block",
			"margin": "0 auto",
			"content": "''",
			"width": "200px",
			"height": "4px",
			"background": "linear-gradient(135deg, #34AA33, #76B90E)"
		}
	},
	lunch: {
		"font-weight": "bold",
		"vertical-align": "top",
		"margin-right": "2px"
	},
	meeting: {
		"font-weight": "lighter",
		"vertical-align": "top"
	}
})

const Title = () => (
	<h1 id="title" className={ css(styles.title) }>
		<span className={ css(styles.lunch) }>昼食</span>
		<span className={ css(styles.meeting) }>会議</span>
	</h1>
)

export default Title;