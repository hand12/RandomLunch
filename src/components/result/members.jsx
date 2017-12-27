import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Member from './member';

const styles = StyleSheet.create({
  members: {
    "padding": "0",
    "list-style": "none"
  },
})

const Members = (props) => (
  <ul className={ css(styles.members) }>
    { props.members.map((member) => {
      return <Member member = { member } key = { member.id } />
    })}
  </ul>
)

export default Members;