import styled from 'styled-components';

export const List = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding: 0;
  background-color: #ddd;
  box-shadow: 10px 5px 5px #ccc;
  border-radius: 5px;
  width: 90%;
  margin: 0 5%;
  padding: 20px; 
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 10px 5px 5px #ccc;
  width: 60%;

`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  vertical-align: middle;

  padding: 20px 0;
  margin: 20px 0;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  button {
    width: 200px;
    margin-left: 8px;
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d32f2f;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
