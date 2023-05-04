import { css } from 'lit';

export default css`
  :host([iconOptionGameClass]) .iconContainer {
    margin-left: 20px;
    cursor: pointer;
    border: 2px solid black;
    padding: 20px;
  }
  :host([iconOptionGameClass]) .iconContainer:disabled {
    background-color: rgb(2, 132, 133);
  }
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`;
