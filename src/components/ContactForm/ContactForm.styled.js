import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 12px;
  border: 1px solid black;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  width: 240px;
  height: 40px;
  padding: 8px;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  font-size: 20px;
  font-family: inherit;
  margin-top: 12px;
  transition: box-shadow 250ms linear, border-color 250ms linear;

  :focus {
    border-color: #2463ef;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(36, 99, 239, 0.25);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  width: 160px;
  font-family: inherit;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #bdbdbd;
  padding: 8px;
  font-size: 20px;
  border-radius: 4px;
  transition: background-color 250ms linear, box-shadow 250ms linear,
    color 250ms linear;
  :hover,
  :focus {
    color: #fff;
    background-color: #2463ef;
    box-shadow: 0 0 0 0.2rem rgba(36, 99, 239, 0.25);
  }
`;
