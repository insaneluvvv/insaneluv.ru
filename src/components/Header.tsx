import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <NavLink to="/">
      <HeaderWrapper>
        <span>// INSANE LUV //</span>
      </HeaderWrapper>
    </NavLink>
  );
}
 
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #21A049;
  transition: 300ms ease;
  span {
    color: #202020;
    font-family: "Unbounded", serif;
    font-size: 25px;
    font-weight: 600;
    transition: 500ms ease;
  }
  
  &:hover {
    background-color: #1b7e39;
    span {
      font-size: 28px;
    }
  }
`;

export default Header;