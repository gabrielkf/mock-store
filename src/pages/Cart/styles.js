import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  * {
    color: #333;
  }

  footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 25px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.3s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
    padding-top: 0;
  }

  tbody td {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;

    & + td {
      padding: 12px;
    }

    img {
      height: 100px;
      display: block;
    }

    span {
      margin-top: 5px;
      font-size: 16px;
      font-weight: bold;
    }
    p {
      font-size: 11px;
      line-height: 16px;
      text-align: left;
    }
    span,
    p {
      padding: 0 20px;
      display: block;
      padding-left: 20px;
    }

    strong {
      width: 100%;
      text-align: right;
      padding: 0;
    }
  }

  div {
    display: flex;
    justify-content: center;

    button {
      margin-top: 4px;
    }

    input {
      width: 50px;
      margin: auto 0;
      padding: 2px 6px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      text-align: right;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg path {
      color: #7159c1;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 15px;
  }
`;
