import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProjectDesBanner1 from "./../../assets/media/portfolio/design/logofolio/1.png"
import ProjectDesBanner2 from "./../../assets/media/portfolio/design/logofolio/2.png"
import ProjectDesBanner3 from "./../../assets/media/portfolio/design/logofolio/3.jpg"
import ProjectDesBanner4 from "./../../assets/media/portfolio/design/logofolio/4.jpg"
import ProjectDesBanner5 from "./../../assets/media/portfolio/design/logofolio/5.png"
import ProjectDesBanner6 from "./../../assets/media/portfolio/design/logofolio/6.jpg"
import ProjectDesBanner7 from "./../../assets/media/portfolio/design/logofolio/7.png"
import ProjectDesBanner8 from "./../../assets/media/portfolio/design/logofolio/8.jpg"
import ProjectDesBanner9 from "./../../assets/media/portfolio/design/logofolio/9.jpg"
import ProjectDesBanner10 from "./../../assets/media/portfolio/design/logofolio/10.png"
import ProjectDesBanner11 from "./../../assets/media/portfolio/design/logofolio/11.png"
import ProjectDesBanner12 from "./../../assets/media/portfolio/design/logofolio/12.jpg"
import ProjectDesBanner13 from "./../../assets/media/portfolio/design/logofolio/13.jpg"
import ProjectDesBanner14 from "./../../assets/media/portfolio/design/logofolio/14.png"



const Logofolio = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <PortfolioTitle>
        <span className="section-title" onClick={() => navigate(-1)}>DESIGN PORTFOLIO </span>
        <p className="section-title">/ Логофолио </p>
      </PortfolioTitle>      
      <PortfolioDesc className="default-font">Здесь собраны логотипы, которые мне довелось создать в ходе своей деятельности.</PortfolioDesc>
      <ItemsList>
        <img src={ProjectDesBanner1} alt="a" />
        <img src={ProjectDesBanner2} alt="a" />
        <img src={ProjectDesBanner3} alt="a" />
        <img src={ProjectDesBanner4} alt="a" />
        <img src={ProjectDesBanner5} alt="a" />
        <img src={ProjectDesBanner6} alt="a" />
        <img src={ProjectDesBanner7} alt="a" />
        <img src={ProjectDesBanner8} alt="a" />
        <img src={ProjectDesBanner9} alt="a" />
        <img src={ProjectDesBanner10} alt="a" />
        <img src={ProjectDesBanner11} alt="a" />
        <img src={ProjectDesBanner12} alt="a" />
        <img src={ProjectDesBanner13} alt="a" />
        <img src={ProjectDesBanner14} alt="a" />
      </ItemsList>
    </HomeWrapper>

  )
}

const HomeWrapper = styled.div`
	margin: 0 10%;
	width: 80%;
  display: flex;
  flex-direction: column;
	align-items: center;
`;

const PortfolioTitle = styled.div`
	display: flex;
	justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  span {
    text-align: center;
    margin-bottom: 5px;
    margin-right: 5px;
    color: #17602e;
    cursor: pointer;
  }
  p {
    text-align: center;
    margin-bottom: 5px;
    color: #21A049;
  }
`;

const PortfolioDesc = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ItemsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: 70%;
    border-radius: 10px;
    @media (max-width: 600px) {
		width: 100%;
	}
  }

`;

export default Logofolio