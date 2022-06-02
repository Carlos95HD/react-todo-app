import styled from "styled-components";

export const Header = styled.div`
  background-image: ${({ theme }) => theme.background};
  background-size: cover;
  height: 100%;
  text-align: center;
  width: 100%;
  padding-bottom: 4rem;
  transition: background-image 0.5s linear;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding-top: 4rem;
  padding-bottom: 3rem;
  width: 38%;

  & h1 {
    letter-spacing: 1rem;
  }
`;
