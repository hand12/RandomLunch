import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import AddGroup from './add_group';
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

const Groups = (props) => (
	<div>
		<h2 className={ css(styles.title) }>参加したいグループを選択してください</h2>
		<AddGroup { ...props } />
		<ul className={ css(styles.group_list) }>
			{ props.groups.map((group) => {
				return <Group { ...props } group={ group } key={ group.id } />
			})}
		</ul>
	</div>
)

export default Groups;