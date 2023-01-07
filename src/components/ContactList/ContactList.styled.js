import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  margin-bottom: 12px;
`;

export const Info = styled.p`
  /* display: inline-block; */
  margin-right: 8px;
  font-size: 24px;
  font-weight: 400;
`;

export const Button = styled.button`
  font-family: inherit;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  border-radius: 8px;
  transition: background-color 250ms linear, box-shadow 250ms linear,
    color 250ms linear;
  :hover,
  :focus {
    color: #fff;
    background-color: #2463ef;
    box-shadow: 0 0 0 0.2rem rgba(36, 99, 239, 0.25);
  }
`;
