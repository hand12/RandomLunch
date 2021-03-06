import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  start_button: {
		"font-size": "1rem",
		"padding": "14px",
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
  },
  "container": {
    "font-weight": "bold",
    "margin": "10px 0"
  },
  "number_field": {
    "margin-top": "10px",
    "width": "50px",
    "padding": "10px",
		"font-size": "1.2rem",
		"border-radius": "4px",
		"border": "1px solid #34AA33"
  }
})

class StartButton extends React.Component {
  handleClick = () => {
    var members_num_per_group = document.getElementById('members-num-per-group').value
    if (members_num_per_group <= 0) {
      alert("0より大きい数字を入力してください")
    } else {
      this.props.fetchResult(members_num_per_group)
    }
  }

  render() {
    return(
      <div className={ css(styles.container) }>
        1グループあたり
        <input type="number" id="members-num-per-group" defaultValue="4" max="6" min="1" required className={ css(styles.number_field) }/>人で
        <button type="submit" className={ css(styles.start_button) } onClick={ this.handleClick }>ランダムランチを開始</button>
      </div>
    )
  }
}

export default StartButton