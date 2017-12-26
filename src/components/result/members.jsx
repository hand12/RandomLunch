import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Member from './member';

const styles = StyleSheet.create({
  members: {
    "padding": "0",
    "list-style": "none"
  },
})

const Members = () => (
  <ul className={ css(styles.members) }>
    <Member />
    <Member />
    <Member />
    <Member />
    <Member />
  </ul>
)

export default Members;