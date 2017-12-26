import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  title: {
		"display": "inline-block",
		"padding": "0 10px",
		"border-left": "5px solid #34AA33",
		"margin-bottom": "50px"
  },
  group_field: {
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
	},
})

class GroupField extends React.Component {
  postGroup = () => {
		var name = document.getElementById('group_name').value
		var formData = new FormData()
		formData.append("group[name]", name)
		this.props.addGroup(formData)
  }

  render() {
    return(
      <div>
        <h2 className={ css(styles.title) }>
          グループの新規作成
        </h2>
        <div>
          <input id="group_name" placeholder="TKメディアユニット" className={ css(styles.group_field) }/>
          <button type="submit" className={ css(styles.button) } onClick={ this.postGroup }>作成</button>
        </div>
      </div>
    )
  }
}

export default GroupField