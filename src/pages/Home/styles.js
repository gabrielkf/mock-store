import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: baseline;
      width: 100%;
      min-width: 120px;
      max-width: 250px;
    }

    strong,
    span {
      color: #333;
    }

    /* '>' only applies to strong inside li */
    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background-color 0.3s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }

      svg {
        margin-right: 3px;
      }

      span {
        color: #fff;
        flex: 1;
        font-weight: bold;
      }
    }
  }
`;
