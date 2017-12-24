import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const fadeInKeyframe = {
	"0%": {
		"opacity": "0" 
	},
	"100%": {
		"opacity": "1"
	}
}

const popUpkeyframe = {
	"0%": {
		"transform": "translateY(800px)" 
	},
	"100%": {
		"transform": "translateY(0)"
	}
}

const styles = StyleSheet.create({
	shadow: {
		"position": "fixed",
		"top": "0",
		"right": "0",
		"left": "0",
		"bottom": "0",
		"background": "rgba(0, 0, 0, 0.6)",
		"animationName": fadeInKeyframe,
		"animationDuration": "0.5s",
	},
	panel: {
		"position": "fixed",
		"top": "100px",
		"left": "30%",
		"right": "30%",
		"display": "inline-block",
		"min-width": "200px",
		"margin": "0 auto",
		"padding": "50px",
		"border-radius": "2.5px",
		"box-shadow": "rgba(0, 0, 0, 0.2) 2px 2px 5px 0px",
		"background": "white",
		"text-align": "center",
		"animationName": popUpkeyframe,
		"animationDuration": "0.5s",
	},
	title: {
		"display": "inline-block",
		"padding": "0 10px",
		"border-left": "5px solid #34AA33",
		"margin-bottom": "50px"
	},
	name_field: {
		"padding": "10px",
		"font-size": "1.2rem",
		"border-radius": "4px",
		"border": "1px solid #34AA33"
	},
	button: {
		"padding": "14px",
		"font-size": "1.2rem",
		"border-radius": "4px",
		"background": "#34AA33",
		"margin-left": "10px",
		"margin-top": "10px",
		"color": "white",
		"transition": "0.2s",
		":hover": {
			"background": "#2BA229",
			"box-shadow": "rgba(0, 0, 0, 0.2) 2px 2px 5px 0px",
		}
	}
})

class Modal extends React.Component {
	render() {
		if(true) {
			return(
				<div>
					<div className={ css(styles.shadow) }></div>
					<div className={ css(styles.panel) }>
						<h2 className={ css(styles.title) }>
							表示する名前は何にしますか？
						</h2>
						<div>
							<input name="user_name" placeholder="やまぴー" className={ css(styles.name_field) }/>
							<button type="submit" className={ css(styles.button) }>参加する</button>
						</div>
					</div>
				</div>
			)
		} else {
			return false
		}
	}
}

export default Modal;