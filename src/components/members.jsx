import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Member from './member';

const styles = StyleSheet.create({
	members: {
		"padding": "10px",
		"margin-top": "10px",
		"margin-bottom": "70px",
		"list-style": "none",
		"background": "#EAEAEA",
		"display": "block",
		"border-radius": "4px",
		"text-align": "left",
		"position": "relative",
		":after": {
			"position": "absolute",
			"left": "0",
			"right": "0",
			"bottom": "-20px",
			"content": "''",
			"border-bottom": "1px dashed gray"
		}
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

class Members extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			members: []
		}
	}

	componentWillMount = () => {
		this.fetchMembers()
	}

	componentWillReceiveProps = () => {
		this.fetchMembers()
	}

	fetchMembers = () => {
		const params = new URLSearchParams()
		params.set('group_id', this.props.selectedGroup.id)
		fetch("http://localhost:5000/members?" + params.toString())
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				members: responseData
			})
		})
	}

	render() {
		return(
			<div>
				<h2 className={css(styles.title) }>参加者一覧</h2>
				<ul className={ css(styles.members) }>
					{ this.state.members.map((member) => {
						return <Member { ...this.props } member = { member } key = { member.id} />
					})}
				</ul>
			</div>
		)
	}
}

export default Members