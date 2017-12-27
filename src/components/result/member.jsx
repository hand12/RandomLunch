import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  member: {
    "padding": "10px",
    "font-weight": "bold",
    "background": "white",
    "margin": "10px",
    "text-align": "left",
    "box-shadow": "rgba(0, 0, 0, 0.2) 1px 1px 5px 0px",
  }
})

const Member = (props) => (
  <li className={ css(styles.member) }>{ props.member.name }</li>
)

export default Member;