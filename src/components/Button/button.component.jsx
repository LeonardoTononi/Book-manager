import React from 'react';

import './button.styles.scss';

const Button = ({props}) => (
  <div>
    <button type="submit" className="button">{props}</button>
  </div>
)

export default Button;