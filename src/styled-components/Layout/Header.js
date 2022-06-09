import styled from "styled-components";

export const Header = styled.div`
  background-image: ${({ theme }) => theme.background_desktop};
  background-size: cover;
  text-align: center;
  width: 100%;
  padding-bottom: 4rem;
  transition: background-image 0.5s linear;

  @media screen and (max-width: 768px) {
    background-image: ${({ theme }) => theme.background_mobile};
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding-top: 4rem;
  padding-bottom: 3rem;
  width: 38%;
  
  h1 {
    letter-spacing: 1rem;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    h1{
      font-size: 2rem;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 45%;
  }

`;
