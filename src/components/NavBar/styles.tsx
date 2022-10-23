import styled from "styled-components";

export const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;

  width: 100vw;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${(props) => props.theme.colors.text};

  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 166px;
    height: 23px;
  }

  ul {
    text-decoration: none;
    list-style-type: none;

    li {
      display: inline;

      padding: 1rem;
    }
  }
`;

export const DemoButton = styled.button`
  padding: 5px;
  margin: 10px;

  color: white;
  font-weight: bold;

  width: 158px;
  height: 36px;

  background-color: ${(props) => props.theme.colors.green};
  border: none;
  border-radius: 5px;

  cursor: pointer;
`;
