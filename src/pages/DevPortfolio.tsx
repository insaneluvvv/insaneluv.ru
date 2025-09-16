import React from 'react'
import styled from "styled-components";

import initProject from "../assets/data/DevProjects";
import { NavLink } from 'react-router-dom';

const DevPortfolio = () => {
  return (
      <HomeWrapper>
				<PortfolioTitle className="section-title">DESIGN PORTFOLIO</PortfolioTitle>
        <PortfolioContainer>
          {initProject.map(el => 
            <NavLink className="nav-link" to={el.link}>
              <ProjectBlock>
                <ProjectName>{el.name}</ProjectName>
                <img src={el.img} alt={el.name} />
                <ProjectTags>
                  {el.tag.map(ob => <div>{ob}</div>)}
                </ProjectTags>
                <ProjectDesc>{el.desc}</ProjectDesc>
              </ProjectBlock>
            </NavLink>
          )}
        </PortfolioContainer>
      </HomeWrapper>

  )
}

const HomeWrapper = styled.div`
	margin: 0 10%;
	width: 80%;
`;

const PortfolioTitle = styled.div`
	display: flex;
	justify-content: center;
	color: #21A049;
`;

const PortfolioContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 50px;
	margin-top: 30px;
`;

const ProjectBlock = styled.div`
	display: flex;
	flex-direction: column;
  padding: 20px 20px;


	/* background-color: #404040; */
	img {
		object-fit: cover;
		width: 100%;
		max-height: 200px;
		border-radius: 10px;
		margin-bottom: 20px;
	}
`;

const ProjectName = styled.div`
	display: flex;
	margin-bottom: 20px;
  color: #21A049;
  font-family: "Rubik", serif;
  font-weight: 700;
  font-size: 24px;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const ProjectTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 5px;
	div {
		font-size: 16px;
		background-color: 0;
		color: #6d9189;
		border: 2px solid #6d9189;
		padding: 2px 8px;
		margin-right: 5px;
		border-radius: 15px;
		margin-bottom: 5px;
	}
`;

const ProjectDesc = styled.span`
	color: #9e9e9e;
`;

export default DevPortfolio