import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PersonalSite = () => {
  const navigate = useNavigate();
  return (
    <PortfolioTitle className="section-title"><span className="section-title" onClick={() => navigate(-1)}>DESIGN PORTFOLIO</span>/ Логофолио</PortfolioTitle>
  )
}

const PortfolioTitle = styled.div`
	display: flex;
	justify-content: center;
	color: #21A049;
  span {
    color: #17602e;
    cursor: pointer;
  }
`;

export default PersonalSite