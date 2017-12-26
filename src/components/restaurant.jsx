import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	restaurant: {
		"display": "inline-block",
		"margin": "5px",
		"padding": "5px 5px 5px 15px",
		"background": "gray",
		"border-radius": "50px",
		"color": "white",
		"font-size": "0.8rem",
		"transition": "0.3s"
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

class Restaurant extends React.Component {
	handleClick = () => {
		this.props.deleteRestaurant(this.props.restaurant)
		var restaurantId = `restaurant-id-${ this.props.restaurant.id }`
		document.getElementById(restaurantId).style.opacity = "0"
	}

	render() {
		return(
			<li className={ css(styles.restaurant) } id={ `restaurant-id-${ this.props.restaurant.id }` }>
				<span className={ css(styles.name) }>{ this.props.restaurant.name }</span>
				<span className={ css(styles.delete_button) } onClick={ this.handleClick }>x</span>
			</li>
		)
	}
}

export default Restaurant