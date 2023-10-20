import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
