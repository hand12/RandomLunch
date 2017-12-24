import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const fadeInKeyframe = {
	"0%": {
		"opacity": "0" 
	},
	"100%": {
		"opacity": "1"
	}
}

const popUpKeyframe = {
	"0%": {
		"transform": "translateY(800px)" 
	},
	"100%": {
		"transform": "translateY(0)"
	}
}

const loadingKeyframe = {
	"0%": {
		"transform": "rotate(0)"
	},
	"100%": {
		"transform": "rotate(180deg)"
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
		"animationName": popUpKeyframe,
		"animationDuration": "0.5s",
	},
	close_button: {
		"position": "absolute",
		"top": "0",
		"right": "0",
		"margin": "10px",
		"font-size": "0.8rem",
		"transition": "0.3s",
		":hover": {
			"color": "#34AA33",
			"cursor": "pointer"
		}
	},
	title: {
		"display": "inline-block",
		"padding": "0 10px",
		"border-left": "5px solid #34AA33",
		"margin-bottom": "50px"
	},
	loading: {
		":after": {
			"content": "''",
			"display": "block",
			"margin": "20px auto",
			"width": "20px",
			"height": "2px",
			"background": "gray",
			"animationName": loadingKeyframe,
			"animationDuration": "0.5s",
			"animationIterationCount": "infinite"
		}
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
		"background": "linear-gradient(135deg, #34AA33, #76B90E)",
		"margin-left": "10px",
		"margin-top": "10px",
		"color": "white",
		"transition": "0.2s",
		":hover": {
			"background": "linear-gradient(135deg, #34AA33, #76B90E)",
			"box-shadow": "rgba(0, 0, 0, 0.2) 2px 2px 5px 0px",
		}
	}
})

export class AddMemberModal extends React.Component {
	render() {
		if(this.props.isAddMemberModalActive) {
			return(
				<div>
					<div className={ css(styles.shadow) }></div>
					<div className={ css(styles.panel) }>
						<div className={ css(styles.close_button) } onClick={ this.props.modalToggle }>X</div>
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

export class AddGroupModal extends React.Component {
	render() {
		if(this.props.isAddGroupModalActive) {
			return(
				<div>
					<div className={ css(styles.shadow) }></div>
					<div className={ css(styles.panel) }>
						<div className={ css(styles.close_button) } onClick={ this.props.modalToggle }>X</div>
						<h2 className={ css(styles.title) }>
							グループの新規作成
						</h2>
						<div>
							<input name="group_name" placeholder="TKメディアユニット" className={ css(styles.name_field) }/>
							<button type="submit" className={ css(styles.button) }>作成</button>
						</div>
					</div>
				</div>
			)
		} else {
			return false
		}
	}
}

export class LoadingModal extends React.Component {
	render() {
		if(this.props.isLoading) {
			return(
				<div>
					<div className={ css(styles.shadow) }></div>
					<div className={ css(styles.panel) }>
						<h2 className={ css(styles.loading) }>
							読み込み中
						</h2>
					</div>
				</div>
			)
		} else {
			return false
		}
	}
}

