import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Restaurant from './restaurant';

const styles = StyleSheet.create({
	restaurants: {
		"padding": "10px",
		"margin-top": "10px",
		"margin-bottom": "50px",
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
			"width": "60px",
			"height": "2px",
			"background": "#87c20a"
		}
	}
})

class Restaurants extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			restaurants: []
		}
	}

	componentWillMount = () => {
		this.fetchRestaurants()
	}

	componentWillReceiveProps = () => {
		this.fetchRestaurants()
	}

	fetchRestaurants = () => {
		const params = new URLSearchParams()
		const HOST = "https://damp-crag-50946.herokuapp.com/"
		params.set('group_id', this.props.selectedGroup.id)
		fetch(HOST + "restaurants?" + params.toString())
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				restaurants: responseData
			})
		})
	}

	render() {
		return(
			<div>
				<h2 className={css(styles.title) }>ランチ候補一覧</h2>
				<ul className={ css(styles.restaurants) }>
					{ this.state.restaurants.map((restaurant) => {
						return <Restaurant { ...this.props } restaurant = { restaurant } key = { restaurant.id} />
					})}
				</ul>
			</div>
		)
	}
}

export default Restaurants