import styled from 'styled-components';

export const Label = styled.label`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 24px;
`;

export const StyledFilter = styled.input`
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
  margin-bottom: 12px;
  transition: box-shadow 250ms linear, border-color 250ms linear;

  :focus {
    border-color: #2463ef;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(36, 99, 239, 0.25);
  }
`;
