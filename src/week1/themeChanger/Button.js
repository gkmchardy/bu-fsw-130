import React from 'react';
import { ThemeContextConsumer } from './ThemeContext.js';

const Button = () => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <button onClick={context.switchTheme} className={`${context.theme}-theme`}>Switch Theme</button>
      )}
    </ThemeContextConsumer>
  );
};

export default Button;
