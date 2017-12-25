import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
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
    "vertical-align": "middle",
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
      "color": "gray",
      "cursor": "pointer"
    },
	}
})

const Member = (props) => (
  <li className={ css(styles.member) }>
    <span className={ css(styles.name) }>やまぴー</span>
    <span className={ css(styles.delete_button) } onClick={ props.membersToggle } >x</span>
  </li>
)

export default Member