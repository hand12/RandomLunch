import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { withRouter } from 'react-router-dom'
import '../App.css';

import Title from "./title";
import Groups from "./top/groups";
import { AddMemberModal, AddGroupModal, LoadingModal } from './top/modal';

const styles = StyleSheet.create({
	main_conatainer: {
		margin: "100px"
	}
})

class Top extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isAddMemberModalActive: false,
			isAddGroupModalActive: false,
			isLoading: false,
			selectedGroup: null,
			groups: [],
		}
	}

	componentWillMount = () => {
		this.fetchGroups()
	}

	addMemberModalToggle = () => {
		if(this.state.isAddMemberModalActive) {
			this.setState({
				isAddMemberModalActive: false
			})
		} else {
			this.setState({
				isAddMemberModalActive: true
			})
		}
	}

	addGroupModalToggle = () => {
		if(this.state.isAddGroupModalActive) {
			this.setState({
				isAddGroupModalActive: false
			})
		} else {
			this.setState({
				isAddGroupModalActive: true
			})
		}
	}

	loadingModalToggle = () => {
		if(this.state.isLoading) {
			this.setState({
				isLoading: false
			})
		} else {
			this.setState({
				isLoading: true
			})
		}
	}

	selectGroup = (group) => {
		this.setState({
			selectedGroup: group
		})
	}

	fetchGroups = () => {
		fetch("http://localhost:5000/groups")
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				groups: responseData
			})
		})
	}

	addGroup = (formData) => {
		fetch("http://localhost:5000/groups", {
			method: "POST",
			body: formData
		})
		.then((response) => {
			this.addGroupModalToggle()
			this.loadingModalToggle()
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.then(() => {
			this.loadingModalToggle()
			this.fetchGroups()
		})
		.catch((err) => {
			alert(err)
		})
	}

	addMember = (formData) => {
		fetch("http://localhost:5000/members", {
			method: "POST",
			body: formData
		})
		.then((response) => {
			this.loadingModalToggle()
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.then(() => {
			this.loadingModalToggle()
		})
		.catch((err) => {
			alert(err)
		})
	}

	addRestaurant = (formData) => {
		fetch("http://localhost:5000/restaurants", {
			method: "POST",
			body: formData
		})
		.then((response) => {
			this.loadingModalToggle()
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.then(() => {
			this.loadingModalToggle()
		})
		.catch((err) => {
			alert(err)
		})
	}

	deleteMember = (member) => {
		fetch("http://localhost:5000/members/" + member.id.toString(), {
			method: "DELETE",
		})
		.then((response) => {
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.catch((err) => {
			alert(err)
		})
	}

	deleteRestaurant = (restaurant) => {
		fetch("http://localhost:5000/restaurants/" + restaurant.id.toString(), {
			method: "DELETE",
		})
		.then((response) => {
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.catch((err) => {
			alert(err)
		})
  }

  fetchResult = (members_num_per_group) => {
    const params = new URLSearchParams()
    params.set('members_num_per_group', members_num_per_group)
		fetch(`http://localhost:5000/groups/${this.state.selectedGroup.id.toString()}?${ params.toString() }`)
		.then((response) => {
			this.addMemberModalToggle()
			this.loadingModalToggle()
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
    })
    .then((response) => response.json())
		.then((responseData) => {
      this.loadingModalToggle()
      this.props.setResult(responseData)
      this.props.history.push("/result")
		})
		.catch((err) => {
			alert(err)
		})
	}

  render() {
    return (
			<div id="main_container" className={ css(styles.main_conatainer) }>
      	<Title />
				<Groups
					{ ...this.state }
					selectGroup = { this.selectGroup }
					addMemberModalToggle = { this.addMemberModalToggle }
					addGroupModalToggle = { this.addGroupModalToggle }
				/>
				<AddMemberModal
					{ ...this.state }
					modalToggle = { this.addMemberModalToggle }
					fetchMembers = { this.fetchMembers }
					addMember = { this.addMember }
					deleteMember = { this.deleteMember }
					addRestaurant = { this.addRestaurant }
					deleteRestaurant = { this.deleteRestaurant }
          fetchResult = { this.fetchResult }
				/>
				<AddGroupModal
					{ ...this.state }
					modalToggle = { this.addGroupModalToggle }
					addGroup = { this.addGroup }
				/>
				<LoadingModal { ...this.state } />
			</div>
    );
  }
}

export default withRouter(Top);
