import styled from "styled-components";

import { DevSkillsFirst, DevSkillsSecond, AdditionalSkills } from "../assets/data/SkillsList"
import initProject from "../assets/data/ProjectList";


const Home = () => {
	return ( 
		<HomeWrapper>
			<MainContainer>
				<AvatarContainer>
					<img className="avatar" src="./src/assets/media/Avatar.png" alt="Avatar" />
					<img className="logo" src="./src/assets/media/InsaneLuv Logo.png" alt="InsaneLuv Logo" />
				</AvatarContainer>
				<InfoContainer>
					<NameContainer>
						<span className="name-font">Лемешев Артем</span>
						<span className="prof-font">FrontEnd Developer</span>
					</NameContainer>
					<SkillsContainer>
						<span className="section-title">Навыки в разработке</span>
						<DevSkillsContainer>
							{DevSkillsFirst.map(el => 
								<SkillTagGreen>
									<span>{el}</span>
								</SkillTagGreen>
							)}
							{DevSkillsSecond.map(el => 
								<SkillTagBlack>
									<span>{el}</span>
								</SkillTagBlack>
							)}
						</DevSkillsContainer>
						<span className="section-title">Дополнительные навыки</span>
						<AdditionalSkillsContainer>
							{AdditionalSkills.map(el => 
								<SkillTagBlack>
									<span>{el}</span>
								</SkillTagBlack>
							)}
						</AdditionalSkillsContainer>
					</SkillsContainer>
					<ContactsContainer>
						<span className="section-title">Контакты</span>
						<span className="default-font">Telegram: <a href="https://t.me/insaneluvvv" target="_blank">@insaneluvvv</a> </span>
						<span className="default-font">GitHub: <a href="https://github.com/insaneluvvv" target="_blank">https://github.com/insaneluvvv</a> </span>
						<span className="default-font">Email: <a href="mailto:lemeshev.artem@insaneluv.ru" target="_blank">lemeshev.artem@insaneluv.ru</a> </span>
					</ContactsContainer>
					<SplitLine></SplitLine>
					<EducationContainer>
						<span className="section-title">Образование</span>
						<div>
							<img src="./src/assets/media/Misis Logo.svg" alt="Misis Logo" onClick={() => {window.open('https://misis.ru/');}}/>
							<span className="default-font">Университет науки и технологий МИСИС<br/>
											Специальность: Информационные системы и технологии<br/>
											Степень: Бакалавр<br/>
											Кафедра: ИКТ<br/>
											Период обучения: 2020 - 2024 гг.
							</span>
						</div>
					</EducationContainer>
					<SplitLine></SplitLine>
					<ExperienceContainer>
						<span className="section-title">Опыт работы</span>
						<div>
							<img src="./src/assets/media/Teletribe Logo.png" alt="Misis Logo" onClick={() => {window.open('https://www.teletribe.ru/');}}/>
							<span className="default-font">Контакт-центр TeleTribe<br/>
											Должность: Системный администратор<br/>
											Период: 2024 Февраль - Настоящее время
							</span>
						</div>
					</ExperienceContainer>
					<SplitLine></SplitLine>
					<AboutContainer>
						<span className="section-title">О себе</span>
						<span className="default-font">&ensp;&ensp;Я творческий человек и люблю создавать что-то свое. Мой путь к FrontEnd разработке начинался с дизайна, которым я занимался несколько лет: изучал растровую и векторную графику. Позже пришел к изучению UI/UX дизайна, учился проектировать и создавать интерфейсы. Финальным этапом было изучение веб-разработки, чтобы самостоятельно верстать и реализовывать проекты.</span>
						<ol>
							<li>Знаю <span className="accent-font">HTML</span> и <span className="accent-font">CSS</span>, делаю адаптивную верстку, предпочитаю использовать <span className="accent-font">flex</span></li>
							<li>Работаю с библиотекой <span className="accent-font">React</span></li>
							<li>Всегда использую <span className="accent-font">TypeScript</span>, вместо <span className="accent-font">JavaScript</span>, как более хорошую практику</li>
							<li>Для стилизации компонентов использую <span className="accent-font">Styled Components</span></li>
							<li>Для роутинга использую <span className="accent-font">React Router Dom</span></li>
							<li>Пользуюсь <span className="accent-font">Git</span></li>
							<li>Для работы с проектом использую <span className="accent-font">Vite</span></li>
						</ol>
					</AboutContainer>
				</InfoContainer>
			</MainContainer>
			<ProjectSplit>
				<span className="big-title">Проекты</span>
				<span className="big-title">///</span>
			</ProjectSplit>
			<PortfolioContainer>
				{initProject.map(el => 
					<ProjectBlock>
						<ProjectName>
							<span className="section-title">{el.name}</span>
							<ProjectType><p>{el.type}</p></ProjectType>
						</ProjectName>
						<img src={el.img} alt={el.name} />
						<ProjectDesc>{el.desc}</ProjectDesc>
						<ProjectTags>
							{el.tag.map(ob => <div>{ob}</div>)}
						</ProjectTags>
						<ProjectBtns>
							<ProjectGitBtn onClick={() => {window.open(el.git)}}>GitHub</ProjectGitBtn>
							<PrototypeBtn onClick={() => {window.open(el.link)}}>Рабочий прототип</PrototypeBtn>
						</ProjectBtns>

					</ProjectBlock>
				)}
			</PortfolioContainer>

		</HomeWrapper>
	 );
}

const SplitLine = styled.div`
	height: 4px;
	width: 100%;
	border-radius: 2px;
	background-color: #303030;
	margin: 50px 0;
`;

const HomeWrapper = styled.div`
	margin: 0 10%;
	width: 80%;
`;

const MainContainer = styled.div`
	 display: flex;
	 
`;

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	height: 600px;
	margin-right: 80px;
	.avatar {
		min-width: 200px;
		width: 100%;
		border-radius: 15px;
		box-shadow: 2px 3px 5px black;
	}
	.logo {
		min-width: 125px;
		width: 60%;
		position:relative;
		top: -50px;
		left: 30px;
	}
	/* position: sticky;
	top: 90px; */
`;

const InfoContainer = styled.div`
	width: 100%;
`;

const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-left: 10px solid #21A049;
	border-radius: 10px 0 0 10px;
	padding: 10px 0px 10px 20px;
	margin-bottom: 30px;
`;

const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-left: 10px solid #21A049;
	border-radius: 10px 0 0 10px;
	padding: 10px 0px 10px 20px;
	font-size: 20px;
	margin-bottom: 30px;
`;

const DevSkillsContainer = styled.div`
	margin-bottom: 20px;
`;

const AdditionalSkillsContainer = styled.div`
	
`;

const SkillTagGreen = styled.div`
	background-color: #21A049;
	color: #202020;
	border-radius: 16px;
	padding: 5px 15px;
	display:inline-block;
	margin-right: 10px;
	margin-bottom: 10px;

`;

const SkillTagBlack = styled.div`
	background-color: #202020;
	border: 1px solid #21A049;
	color: #21A049;
	border-radius: 16px;
	padding: 5px 15px;
	display:inline-block;
	margin-right: 10px;
	margin-bottom: 10px;
`;

const ContactsContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-left: 10px solid #21A049;
	border-radius: 10px 0 0 10px;
	padding: 10px 0px 10px 20px;
`;

const EducationContainer = styled.div`
	display: flex;
	flex-direction: column;
	div {
		display: flex;
		img {
			align-self: flex-start;
			margin-right: 30px;
			width: 168px;
			cursor: pointer;
		}
	}
`;

const ExperienceContainer = styled.div`
	display: flex;
	flex-direction: column;
	div {
		display: flex;
		img {
			align-self: flex-start;
			margin-right: 30px;
			width: 168px;
			cursor: pointer;
		}
	}
`;

const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	ol {
		margin-top: 30px;
		list-style-type: "— ";
		list-style-position: inside;
		li {
			margin-bottom: 8px;
		}
	}
`;

const ProjectSplit = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #21A049;
	border-radius: 10px;
	padding: 5px 20px;
	margin: 50px 0;
	span {
		font-family: "Unbounded", serif;
		font-weight: 700;
		font-size: 30px;
		margin-bottom: 5px;
		color: #202020;
	}
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
	width: 400px;
	max-width: 100%;

	padding: 30px;
	/* background-color: #404040; */
	img {
		width: 100%;
		border-radius: 10px;
		margin-bottom: 20px;
	}
`;

const ProjectName = styled.div`
	display: inline-block;
	display: flex;
	align-items: center;
	height: 30px;
		span {
		color: #21A049;
		margin-bottom: 5px;
		margin-right: 20px;
	}
	margin-bottom: 20px;
`;

const ProjectType = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #6d9189;
  color: #202020;
  border-radius: 16px;
	height: 28px;
	padding-left: 20px;
	padding-right: 20px;
`;

const ProjectDesc = styled.span`
	margin-bottom: 20px;
	min-height: 66px;
`;

const ProjectTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20px;
	div {
	font-size: 16px;
		background-color: #202020;
		color: #6d9189;
		border: 2px solid #6d9189;
		padding: 2px 8px;
		margin-right: 5px;
		margin-bottom: 10px;
		border-radius: 15px;
	}
`;

const ProjectBtns = styled.div`
	display: flex;
`;

const ProjectGitBtn = styled.button`
	border: 0;
	padding: 8px 20px;
	border-radius: 10px;
	background-color: #21A049;
	margin-right: 10px;
	cursor: pointer;
	transition: 200ms ease;
	&:hover {
		background-color: #1b7e39;
	}
`;

const PrototypeBtn = styled.button`
	border: 0;
	padding: 8px 20px;
	border-radius: 10px;
	background-color: #21A049;
	cursor: pointer;
	transition: 200ms ease;
	&:hover {
		background-color: #1b7e39;
	}
`;

export default Home;