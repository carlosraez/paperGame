import { css } from 'lit';

export default css`
  .inputText {
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
  }
  .inputText:focus {
    outline: none;
    border: 2px solid blue;
  }
`;
