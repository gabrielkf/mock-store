import styled from 'styled-components';
import { darken } from 'polished';

export const SellersList = styled.ul`
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

    div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 15px;
        path {
          color: #333;
        }
      }

      strong {
        font-size: 20px;
      }
    }

    p,
    strong,
    span {
      color: #333;
    }

    /* '>' only applies to strong inside li */
    > span {
      font-size: 18px;
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #aaa;

      ul {
        list-style: square;

        > li {
          color: #000;
          margin: 5px;
          padding: 5px;
        }
      }
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

        svg path {
          color: #fff;
        }
        svg + svg path {
          color: #0c5;
        }
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
