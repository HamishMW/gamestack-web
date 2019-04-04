import React from 'react';

const Logo = ({ className, color }) => (
  <svg className={className} fill={color} height="50" width="79" viewBox="0 0 82 51">
    <title>Gamestack</title>
    <path d="M46 40c2.76 0 5 2.24 5 5s-2.24 5-5 5H25C11.193 50 0 38.807 0 25S11.193 0 25 0h42c2.76 0 5 2.24 5 5s-2.24 5-5 5H25c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h21zM26 30c-2.76 0-5-2.24-5-5s2.24-5 5-5h18.645c7.956 0 15.587 3.16 21.213 8.787l10.69 10.69c1.954 1.954 1.954 5.12 0 7.072-1.95 1.95-5.117 1.95-7.07 0l-10.69-10.694C55.035 32.106 49.948 30 44.644 30H26z" />
  </svg>
);

export default Logo;
