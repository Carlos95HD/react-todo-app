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
  
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 45%;
  }

  & h1 {
    letter-spacing: 1rem;
  }
`;
