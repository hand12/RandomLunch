import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Members from './members';
import MemberField from './member_field';
import GroupField from './group_field';
import RestaurantField from './restaurant_field';
import Restaurants from './restaurants';
import StartButton from './start_button';

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
		"max-height": "80vh",
		"overflow-y": "scroll",
		"position": "fixed",
		"top": "40px",
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
})

export class AddMemberModal extends React.Component {
	render() {
		if(this.props.isAddMemberModalActive) {
			return(
				<div>
					<div className={ css(styles.shadow) }></div>
					<div className={ css(styles.panel) }>
						<div className={ css(styles.close_button) } onClick={ this.props.modalToggle }>X</div>
						<MemberField { ...this.props } />
						<Members { ...this.props } />
						<RestaurantField { ...this.props } />
						<Restaurants { ...this.props } />
						<StartButton { ...this.props } />
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
						<GroupField { ...this.props } />
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

