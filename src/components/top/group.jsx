import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const HOST = "https://damp-crag-50946.herokuapp.com/"

const styles = StyleSheet.create({
	group: {
		"margin": "10px",
		"background": "#EAEAEA",
		"padding": "10px",
		"border-radius": "5px",
		"position": "relative",
		"box-shadow": "rgba(0, 0, 0, 0.2) 2px 2px 5px 0px",
		"transition": "0.2s",
		":after": {
			"position": "absolute",
			"content": "''",
			"top": "0",
			"left": "0",
			"width": "100%",
			"height": "100%",
			"border-radius": "inherit",
			"transition": "0.5s",
			"background": "rgba(0, 0, 0, 0.1)"
		},
		":hover": {
			"box-shadow": "rgba(0, 0, 0, 0.2) 2px 2px 10px 0px",
			"transform": "scale(1.05)",
			"cursor": "pointer"
		},
		":hover:after": {
			"width": "0",
			"right": "0",
			"background": "#EAEAEA",
			"opacity": "0"
		}
	},
	name: {
		"font-weight": "bold"
	},
	member_count: {
		"position": "absolute",
		"right": "0",
		"bottom": "0",
		"top": "0",
		"background": "linear-gradient(135deg, #34AA33, #76B90E)",
		"border-radius": "0 5px 5px 0",
		"padding": "10px 15px",
		"font-weight": "bold",
		"color": "white"
	}
})

class Group extends React.Component {
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

	handleClick = () => {
		this.props.addMemberModalToggle()
		this.props.selectGroup(this.props.group)
	}

	fetchMembers = () => {
		const params = new URLSearchParams()
		params.set('group_id', this.props.group.id)
		fetch(HOST + "members?" + params.toString())
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				members: responseData
			})
		})
	}
	render() {
		return(
			<li className={ css(styles.group) } onClick = { this.handleClick }>
				<span className={ css(styles.name) }>{ this.props.group.name }</span>
				<span className={ css(styles.member_count) }>{ this.state.members.length }人</span>
			</li>
		)
	}
}

export default Group