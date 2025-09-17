import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import BackToTop from "../../components/BackToTopBtn";

const CourseResearchWork = () => {
  const navigate = useNavigate();

  //ИМПОРТ ВСЕХ ИЗОБРАЖЕНИЙ
  const images: Record<string, string> = import.meta.glob(
    "./../../assets/media/portfolio/design/CourseResearchWork/*.{jpg,png,webp}",
    {
      eager: true,
      import: "default",
      query: "?url",
    }
  );

  //СОРТИРОВКА ВСЕХ ИЗОБРАЖЕНИЙ ПО НАЗВАНИЮ
  const sortedImages = Object.entries(images)
  .sort(([pathA], [pathB]) => {
    const nameA = pathA.split("/").pop() || "";
    const nameB = pathB.split("/").pop() || "";
    return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: "base" });
  })
  .map(([path, url]) => ({ path, url }));

  return (
    <HomeWrapper>
      <PortfolioTitle>
        <span className="section-title" onClick={() => navigate(-1)}>DESIGN PORTFOLIO </span>
        <p className="section-title">/ Курсовая научно исследовательская работа</p>
      </PortfolioTitle>      
      <PortfolioDesc className="default-font">
      Презентация для выступления с курсовой научно исследовательской работой на тему:<br/><br/>
      "Разработка UI/UX дизайна сервиса для разметки изображений: Проектирование архитектуры сервиса".
      </PortfolioDesc>
      <ItemsList>
        {sortedImages.map(({ path, url }) => {
          const name = path.split("/").pop();
          return <img key={name} src={url} alt={name} loading="lazy" />;
        })}
      </ItemsList>
      <BackToTop />
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
    width: 60%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 4px black;
    @media (max-width: 1080px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }

`;

export default CourseResearchWork