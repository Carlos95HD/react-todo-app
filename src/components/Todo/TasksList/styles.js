import styled from "styled-components";

export const TaskUl = styled.ul`
  background: ${({ theme }) => theme.bg_secondary};
  margin: 0px auto;
  position: relative;
  bottom: 3rem;
  width: 38%;
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: 0px 12px 15px -2px rgba(0, 0, 0, 0.13);
  transition: all 0.5s linear;

  ${({ snapshot, theme }) =>
    snapshot.isDraggingOver &&
    `
    background: ${theme.text_secondary};
  `}

  li:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 45%;
  }
`;

export const ListOptions = styled.div`
  font-size: 16px;
  position: relative;
  bottom: 3rem;
  width: 38%;
  display: flex;
  margin: 0px auto;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0px 12px 15px -2px rgba(0, 0, 0, 0.13);
  transition: all 0.5s linear;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    flex-wrap: wrap;
    width: 90%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 45%;
  }
`;

export const Remaining = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.bg_secondary};
  border-bottom-left-radius: 0.5rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  transition: all 0.5s linear;

  p {
    color: ${({ theme }) => theme.text_gray};
    margin-left: 1.3rem;
    cursor: default;
  }

  @media screen and (max-width: 768px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const OtherOptions = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg_secondary};
  justify-content: end;
  border-bottom-right-radius: 0.5rem;
  transition: all 0.5s linear;
  width: 50%;

  input {
    font-size: 16px;
    color: ${({ theme }) => theme.text_gray};
    background: ${({ theme }) => theme.bg_secondary};
    margin-right: 1.5rem;
    cursor: pointer;
  }

  @media (pointer: fine) {
    input:hover {
      color: ${({ theme }) => theme.text_gray_hover};
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const BtnList = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.bg_secondary};
  transition: all 0.5s linear;
  justify-content: center;

  @media screen and (max-width: 768px) {
    order: 3;
    border-radius: 0.5rem;
    margin-top: 1rem;
    justify-content: center;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    top: 4rem;
    position: absolute;
    box-shadow: 0px 12px 34px -2px rgba(0, 0, 0, 0.13);
  }
`;

export const BtnFilter = styled.input`
  font-size: 16px;
  color: ${({ theme }) => theme.text_gray};
  font-weight: bold;
  background: ${({ theme }) => theme.bg_secondary};
  ${({ value, filter }) => value === filter && `color: hsl(220, 98%, 61%)`};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      color: ${({ theme }) => theme.text_gray_hover};
    }
  }
`;

export const Alert = styled.p`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.text_secondary}`};
`;

export const HelpText = styled.p`
  color: ${({ theme }) => theme.text_gray};
  text-align: center;
  cursor: default;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`;
