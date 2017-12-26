import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import './App.css';

import Title from "./components/title";
import Groups from "./components/groups";
import { AddMemberModal, AddGroupModal, LoadingModal } from './components/modal';

const styles = StyleSheet.create({
	main_conatainer: {
		margin: "100px"
	}
})

class App extends Component {
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
				/>
				<AddGroupModal { ...this.state } modalToggle = { this.addGroupModalToggle } addGroup = { this.addGroup }　/>
				<LoadingModal { ...this.state } />
			</div>
    );
  }
}

export default App;
