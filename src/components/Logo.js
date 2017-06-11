import React from 'react';

const Logo = (props) => (
  <svg className={props.className} fill={props.color} height="51" width="82" viewBox="0 0 82 51">
    <title>Gamestack</title>
    <path d="M73 0H24.983C11.183 0 0 11.194 0 25s11.184 25 24.983 25h30.74c2.76 0 5-2.238 5-5 0-2.76-2.24-5-5-5h-30.74C16.71 40 10 33.285 10 25s6.71-15 14.983-15H73c2.76 0 5-2.24 5-5s-2.24-5-5-5zm9 45.504C82 31.42 70.59 20 56.513 20H25c-2.76 0-5 2.24-5 5s2.24 5 5 5h31.513C65.065 30 72 36.94 72 45.504c0 2.762 2.24 5 5 5s5-2.238 5-5z"/>
  </svg>
)

export default Logo;
