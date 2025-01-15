import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { PiSmileySadBold } from "react-icons/pi";

const PageNotFound = () => {
  return ( 
    <PNFWrapper>
      <p>404 Page Not Found</p>
      <span>Страница не найдена</span>
      <PiSmileySadBold size={300}/>
      <NavLink to="/">Вернуться на главную</NavLink>
    </PNFWrapper>
   );
}
 
const PNFWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  p {
    font-size: 40px;
  }
  span {
    font-size: 40px;
  }
  a {
    background-color: #21A049;
    color: #202020;
    padding: 20px 40px;
    font-size: 30px;
    border-radius: 20px;
    transition: 200ms ease;
    &:hover {
      background-color: #1b7e39;
    }
  }
`;

export default PageNotFound;