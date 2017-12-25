import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Member from './member';

const styles = StyleSheet.create({
	members: {
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
			"width": "40px",
			"height": "2px",
			"background": "#87c20a"
		}
	}
})

const Members = () => (
	<div>
		<h2 className={css(styles.title) }>参加者一覧</h2>
		<ul className={ css(styles.members) }>
			<Member { ...this.props }/>
			<Member { ...this.props }/>
			<Member { ...this.props }/>
			<Member { ...this.props }/>
			<Member { ...this.props }/>
			<Member { ...this.props }/>
		</ul>
	</div>
)

export default Members