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
 
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #21A049;
  span {
    color: #202020;
    font-family: "Unbounded", serif;
    font-size: 30px;
    font-weight: 600;
  }
`;

export default Header;