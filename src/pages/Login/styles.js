import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  box-shadow: 0 0 5px #ddd;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  input,
  button {
    color: #333;
  }
`;
