import styled from 'styled-components';

export const List = styled.ul`
  font-family: sans-serif;
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
  width: 100%;

`;

export const ListItem = styled.li`
  vertical-align: middle;
  font-family: sans-serif;

  .grid2fr {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;;
    margin-bottom: 20px;
  }

  .priority {
    p {
      text-transform: uppercase;
      font-weight: bolder;
    }
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  button {
    margin-top: 20px;
    width: 100%;
    text-transform: uppercase;
    font-weight: bolder;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }


  .edit {
    background-color: #008CBA;
  }

  .delete {
    background-color: #f44336;
  }

  .edit:hover, .delete:hover {
    box-shadow: 10px 5px 5px #ccc;
  }
`;
