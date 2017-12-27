import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  title: {
		"display": "inline-block",
		"padding": "0 10px",
		"border-left": "5px solid #34AA33",
		"margin-bottom": "10px"
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
	},
})


class MemberField extends React.Component {
  postMember = () => {
		var name = document.getElementById('member_name').value
		var formData = new FormData()
		formData.append("member[name]", name)
		formData.append("member[group_id]", this.props.selectedGroup.id)
		this.props.addMember(formData)
		document.getElementById('member_name').value = ""
  }

  render() {
    return(
      <div>
        <h2 className={ css(styles.title) }>
          表示する名前は何にしますか？
        </h2>
        <div>
          <input id="member_name" placeholder="やまぴー" className={ css(styles.name_field) }/>
          <button type="submit" className={ css(styles.button) } onClick={ this.postMember }>参加する</button>
        </div>
      </div>
    )
  }
}

export default MemberField