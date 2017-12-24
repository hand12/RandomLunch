import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import './App.css';

import Title from "./components/title";
import GroupList from "./components/groups";
import Modal from './components/modal';

const styles = StyleSheet.create({
	main_conatainer: {
		margin: "100px"
	}
})

class App extends Component {
	getInitialState() {
		return {
			isModalActive: false
		}
	}
  render() {
    return (
			<div id="main_container" className={ css(styles.main_conatainer) }>
      	<Title />
				<GroupList />
				<Modal { ...this.state }/>
			</div>
    );
  }
}

export default App;
