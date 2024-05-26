import styled from 'styled-components';

export const Form = styled.form`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 5% 20px 5%;
`;

export const Grid2fr = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const P = styled.p`
  text-transform: uppercase;
  font-weight: bolder;
  font-family: sans-serif;
`;

export const HR = styled.hr`
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 10px 5px 5px #ccc;

`;

export const Checkbox = styled.input`
  margin-bottom: 20px;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-bottom: 20px;
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  font-weight: bolder;
  text-transform: uppercase;
  border-radius: 5px;

  &:hover {
    box-shadow: 10px 5px 5px #ccc;
  }
`;

export const Radio = styled.input`
  margin-bottom: 20px;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
`