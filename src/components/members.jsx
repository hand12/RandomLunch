import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	members: {
		"padding": "10px",
		"position": "absolute",
		"top": "50px",
		"left": "0",
		"right": "0",
		"list-style": "none",
		"background": "#EAEAEA",
		"display": "block",
		"border-radius": "4px"
	},
	member: {
		"display": "inline-block",
		"margin": "5px",
		"padding": "5px 5px 5px 15px",
		"background": "gray",
		"border-radius": "50px",
		"color": "white",
		"font-size": "0.8rem"
	},
	name: {
		"vertical-align": "middle"
	},
	delete_button: {
		"margin-left": "10px",
		"vertical-align": "middle",
		"text-align": "center",
		"background": "darkgray",
		"display": "inline-block",
		"width": "20px",
		"height": "20px",
		"border-radius": "10px",
		"transition": "0.3s",
		":hover": {
			"color": "gray"
		}
	}
})

class Members extends React.Component {
	render() {
		if(this.props.isMembersOpen) {
			return (
				<ul className={ css(styles.members) }>
					<li className={ css(styles.member) }>
						<span className={ css(styles.name) }>やまぴー</span>
						<span className={ css(styles.delete_button) } onClick={ this.props.membersToggle } >x</span>
					</li>
					<li className={ css(styles.member) }>
						<span className={ css(styles.name) }>やまぴー</span>
						<span className={ css(styles.delete_button) }>x</span>
					</li>
					<li className={ css(styles.member) }>
						<span className={ css(styles.name) }>やまぴー</span>
						<span className={ css(styles.delete_button) }>x</span>
					</li>
				</ul>
			)
		} else {
			return false
		}
	}
}

export default Members