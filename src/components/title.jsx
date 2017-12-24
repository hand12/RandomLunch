import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	title: {
		"text-align": "center",
		"font-size": "3rem",
		":after": {
			"display": "block",
			"margin": "0 auto",
			"content": "''",
			"width": "200px",
			"height": "4px", 
			"background": "linear-gradient(135deg, #34AA33, #76B90E)"
		}
	}
})

const Title = () => (
	<h1 id="title" className={ css(styles.title) }>ランダムランチ</h1>
)

export default Title;