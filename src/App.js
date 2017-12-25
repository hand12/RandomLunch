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
			isLoading: false
		}
		this.addMemberModalToggle = this.addMemberModalToggle.bind(this)
		this.addGroupModalToggle = this.addGroupModalToggle.bind(this)
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

  render() {
    return (
			<div id="main_container" className={ css(styles.main_conatainer) }>
      	<Title />
				<Groups
					{ ...this.state }
					addMemberModalToggle = { this.addMemberModalToggle }
					addGroupModalToggle = { this.addGroupModalToggle }
				/>
				<AddMemberModal { ...this.state } modalToggle = { this.addMemberModalToggle } />
				<AddGroupModal { ...this.state } modalToggle = { this.addGroupModalToggle } />
				<LoadingModal { ...this.state } />
			</div>
    );
  }
}

export default App;
