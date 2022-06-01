import styled from "styled-components";

export const Header = styled.div`
  background-image: ${({ theme }) => theme.background};
  background-size: cover;
  height: 100%;
  text-align: center;
  width: 100%;
  transition: background-image 0.5s linear;
`;