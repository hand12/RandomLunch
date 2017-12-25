import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Member from './member';

const styles = StyleSheet.create({
	members: {
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

const Members = () => (
	<ul className={ css(styles.members) }>
		<Member { ...this.props }/>
		<Member { ...this.props }/>
		<Member { ...this.props }/>
		<Member { ...this.props }/>
		<Member { ...this.props }/>
		<Member { ...this.props }/>
	</ul>
)

export default Members