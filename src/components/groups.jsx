import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Group from './group';

const styles = StyleSheet.create({
	title: {
		"text-align": "center",
		":before": {
			"content": "'・'",
			"display": "inline-block",
			"color": "#34AA33"

		}
	},
	group_list: {
		"width": "50%",
		"padding": "0",
		"max-width": "500px",
		"min-width": "300px",
		"margin": "0 auto",
		"list-style": "none"
	},
})

const GroupList = () => (
	<div>
		<h2 className={ css(styles.title) }>参加したいグループを選択してください</h2>
		<ul className={ css(styles.group_list) }>
			<Group />
			<Group />
			<Group />
			<Group />
		</ul>
	</div>
)

export default GroupList;