import React from 'react';
import {css} from './CustomEmotion';

const listStyle = css`
  list-style: none;
  background: rebeccapurple;
`;

const listItemStyle = css`
  color: white;
  font-size: 2em;
`;

export default (props) => (
  <ul className={listStyle}>
    <li className={listItemStyle}>First</li>
    <li className={listItemStyle}>Second</li>
    <li className={listItemStyle}>Third</li>
    <li className={listItemStyle}>Fourth</li>
  </ul>
)
