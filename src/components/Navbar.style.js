import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #003580;
  padding: 0 20px;
  box-sizing: border-box;
  color: #fff;
`;

export const Image = styled.img`
  color: white;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  border-radius: ${(props) => props.borderRadius || "0%"};
`;

export const NavLogo = styled.div`
  display: flex;
  width: 10%;
  height: 10%;
  color: white;
`;

export const List = styled.ul`
  display: flex;

  color: white;
  justify-content: space-around;
  width: ${(props) => props.width || ""};
  height: 40px;
  align-items: baseline;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  color: white;
`;

export const Button = styled.button`
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.backgroundColor || "#003580"};
  border-radius: 5px;
  font-weight: bold;
  padding: 10px 30px;
  :hover {
    cursor: pointer;
    background-color: blueviolet;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: white;
`;
