import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	add_group: {
		"width": "50%",
		"max-width": "480px",
		"min-width": "300px",
		"box-sizing": "border-box",
		"margin": "10px auto",
		"background": "linear-gradient(135deg, #34AA33, #76B90E)",
		"color": "white",
		"font-weight": "bold",
		"text-align": "center",
		"padding": "15px",
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
	}
})

const AddGroup = (props) => (
	<div className={ css(styles.add_group) } onClick={ props.addGroupModalToggle }>グループを新規追加</div>
)

export default AddGroup