
// using modul
import React from "react";

// using css modules : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from "./Button.module.css";

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

// basic style
/*
import React from "react";


import "./Button.css";

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
*/

// using styled-components: https://styled-components.com/
/*
import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    @media (min-width: 768px) {
        width: auto;
    }

    &:focus {
        outline: none;
    }

    &:hover,
    &:active {
        background: #ac0e77;
        border-color: #ac0e77;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
`;

export default Button;
*/