import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { DesignSkillsFirst, AdminSkillsFirst, LangSkills, MarSkills, DevSkills, AISkills } from "../assets/data/SkillsList"
import Avatar from "./../assets/media/Avatar.jpg";
import InsaneLuvLogo from "./../assets/media/InsaneLuv Logo.png";
import MisisLogo from "./../assets/media/Misis Logo.svg";
import TeleTribeLogo from "./../assets/media/Teletribe Logo.png";
import InsaneLuvDevBanner from "./../assets/media/portfolio/InsaneLuvDev_Banner.png";
import InsaneLuvBanner from "./../assets/media/portfolio/InsaneLuv_Banner.png";


const Home = () => {
	return ( 
		<HomeWrapper>
			<MainContainer>
				<AvatarContainer>
					<img className="avatar" src={Avatar} alt="Avatar" />
					<img className="logo" src={InsaneLuvLogo} alt="InsaneLuv Logo" />
				</AvatarContainer>
				<InfoContainer>
					<NameContainer>
						<span className="name-font">Лемешев Артем</span>
						<span className="prof-font">Россия, Москва</span>
					</NameContainer>
					<ContactsContainer>
						<span className="section-title">Контакты</span>
						<span className="default-font">Telegram: <a href="https://t.me/insaneluvvv" target="_blank">@insaneluvvv</a> </span>
						<span className="default-font">Email: <a href="mailto:lemeshev.artem@insaneluv.ru" target="_blank">lemeshev.artem@insaneluv.ru</a> </span>
						<span className="default-font">Site: <a href="https://insaneluv.ru/" target="_blank">insaneluv.ru</a> </span>
					</ContactsContainer>
					<SplitLine></SplitLine>
					<EducationContainer>
						<span className="section-title">// Образование</span>
						<ContainerElement>
								<img src={MisisLogo} alt="Misis Logo" onClick={() => {window.open('https://misis.ru/');}}/>
								<ContainerElementInfo>
									<ElementInfoMain>
										<p className="element-title">Университет науки и технологий МИСИС</p>
										<p className="default-title">Период обучения: 2020 - 2024 гг.</p>
									</ElementInfoMain>
									<span>Специальность: Информационные системы и технологии<br/>
									Степень: Бакалавр<br/>
									Кафедра: ИКТ<br/></span>
								</ContainerElementInfo>	
						</ContainerElement>
					</EducationContainer>
					<SplitLine></SplitLine>
					<ExperienceContainer>
						<span className="section-title">// Опыт работы</span>
						<ContainerElement>
								<img src={InsaneLuvLogo} alt="InsaneLuv Logo" onClick={() => {window.open('https://insaneluv.ru/');}}/>
								<ContainerElementInfo>
									<ElementInfoMain>
										<p className="element-title">Графический/Веб дизайнер — Insane Luv</p>
										<p className="default-title">Период деятельности: 2022 Март — 2023 Сентябрь</p>
									</ElementInfoMain>
									<DesignSkillsContainer>
										{DesignSkillsFirst.map(el => 
											<SkillTagGreen>
												<span>{el}</span>
											</SkillTagGreen>
										)}
									</DesignSkillsContainer>
									<p>- Выполнял широкий спектр дизайн задач на фрилансе в сферах соц. сетей, турниров, брендинга и др.<br/>
										- Со старта вел соц. сети, посвященные моей деятельности, для формирования аудитории и привлечения новых клиентов, благодаря чему параллельно знакомился с процессами маркетинга.<br/>
										Основная клиентская база была из области киберспортивных турниров, на которую было нацелено продвижение.<br/>
										Был проведен анализ рынка, на основе которого подбирались места и способы распространения услуг. Подобрана соц. сеть Discord (основная площадка организации турниров), как самая близкая к ЦА. Основными способами распространения с упором на сокращение затрат были: взаимный обмен ссылками с тематическими серверами, спонсирование турниров услугами дизайна взамен на спонсорские ссылки, приносящие стабильный прирост потенциально заинтересованной аудитории и другие бартерные партнерства.<br/><br/>
										
										Достижения:<br/>
										· Более 150 выполненных работ.<br/>
										· Более 50 клиентов.<br/>
										· Пик Discord: 1500+ участников.<br/>
										· Пик Telegram: 700+ подписчиков.<br/>
										· Занял призовое место в конкурсе дизайна мерча у популярного российского стримера Dmitry_Lixxx (1.7 млн подписчиков на Twitch).<br/>
										· Создавал UI/UX дизайн сервиса для обучения нейронной сети Kandinsky от Сбер в ходе университетской практики.</p>
								</ContainerElementInfo>		
						</ContainerElement>
						<ContainerElement>
							<img src={TeleTribeLogo} alt="TeleTribe Logo" onClick={() => {window.open('https://www.teletribe.ru/');}}/>
							<ContainerElementInfo>
								<ElementInfoMain>
									<span className="element-title">Системный администратор - TeleTribe</span>
									<span className="default-title">Период деятельности: 2024 Февраль - Настоящее время</span>
								</ElementInfoMain>		
								<AdminSkillsContainer>
								{AdminSkillsFirst.map(el => 
									<SkillTagPurple>
										<span>{el}</span>
									</SkillTagPurple>
								)}
								</AdminSkillsContainer>
								<p>- Обслуживал и поддерживал работоспособность компьютерного оборудования в главном офисе контакт-центра.<br/>
									- Единовременно обеспечивал полное техническое сопровождение 40+ сотрудников и организовывал рабочие места для новых.<br/>
									- Управлял полным циклом закупок технического оборудования: от формирования ТЗ и выбора поставщиков до заключения договоров, логистики, приемки и контроля качества, действуя с акцентом на оптимизацию затрат и вел соответствующий документооборот.<br/>
									- Работал с серверами и осуществлял выгрузку аудиозаписей для передачи заказчика.</p>
							</ContainerElementInfo>				
						</ContainerElement>
					</ExperienceContainer>
					<SplitLine></SplitLine>
					<EducationContainer>
					<span className="section-title">// Дополнительные навыки</span>
						<ContainerElement>
						<ContainerElementInfo>
							<span className="prof-font">Языки<br/><br/></span>
							<DesignSkillsContainer>
								{LangSkills.map(el => 
									<SkillTagGrey>
										<span>{el}</span>
									</SkillTagGrey>
								)}
							</DesignSkillsContainer><span><br/></span>
							<span className="prof-font">Маркетинг<br/><br/></span>
							<DesignSkillsContainer>
								{MarSkills.map(el => 
									<SkillTagGrey>
										<span>{el}</span>
									</SkillTagGrey>
								)}
							</DesignSkillsContainer><span><br/></span>
							<span className="prof-font">FrontEnd<br/><br/></span>
							<DesignSkillsContainer>
								{DevSkills.map(el => 
									<SkillTagGrey>
										<span>{el}</span>
									</SkillTagGrey>
								)}
							</DesignSkillsContainer><span><br/></span>
							<span className="prof-font">AI<br/><br/></span>
							<DesignSkillsContainer>
								{AISkills.map(el => 
									<SkillTagGrey>
										<span>{el}</span>
									</SkillTagGrey>
								)}
							</DesignSkillsContainer>
						</ContainerElementInfo>		
					</ContainerElement>
					</EducationContainer>
					<SplitLine></SplitLine>
					<AboutContainer>
						<span className="section-title">// О себе</span>

						<span className="default-font">
						Я люблю <span className="accent-font">креативную деятельность</span>. Меня вдохновляет идея придумать что-то новое и нужное.<br/><br/>

						Начинал свою деятельность с дизайна, где довелось впервые столкнуться с задачей <span className="accent-font">продвижения своих услуг и привлечения аудитории</span>, благодаря чему получил первичный опыт маркетинга.<br/><br/>

						Долгое время был связан с IT сферой и двигался в этом направлении: получил <span className="accent-font">IT специальность</span>, устроился <span className="accent-font">Системным администратором</span> и изучал <span className="accent-font">FrontEnd разработку</span> на React. Запустил <span className="accent-font">свой личный сайт</span> с персональным доменом (<span className="accent-font"><a href="https://insaneluv.ru/" target="_blank">insaneluv.ru</a></span>) и интегрировал <span className="accent-font">Яндекс метрику</span>.<br/><br/>

						На данный момент, изучаю работу <span className="accent-font">бизнеса</span> с упором на <span className="accent-font">маркетинг</span> и хочу развить свои навыки в этой области. Читаю учебную литературу и маркетинговые кейсы компаний, смотрю тематические видео материалы.<br/><br/>
						</span>
					</AboutContainer>
				</InfoContainer>
			</MainContainer>
			<ProjectSplit>
				<span className="big-title">Проекты</span>
				<span className="big-title">///</span>
			</ProjectSplit>
			<PortfolioContainer>
				<NavLink className="nav-link" to="/design-portfolio">
				<ProjectBlock>
					<ProjectName>Design</ProjectName>
					<img src={InsaneLuvBanner} alt={InsaneLuvBanner} />
					<ProjectTags>
						<div>Графический дизайн</div>
						<div>UI/UX</div>
					</ProjectTags>
					<ProjectDesc>Портфолио дизайнерской деятельности.</ProjectDesc>
				</ProjectBlock>
				</NavLink>
				<NavLink className="nav-link" to="/dev-portfolio">
				<ProjectBlock>
					<ProjectName>Development</ProjectName>
					<img src={InsaneLuvDevBanner} alt={InsaneLuvDevBanner} />
					<ProjectTags>
						<div>FrontEnd</div>
						<div>React</div>
					</ProjectTags>
					<ProjectDesc>Результаты изучения FrontEnd разработки.</ProjectDesc>
				</ProjectBlock>
				</NavLink>
			</PortfolioContainer>

		</HomeWrapper>
	 );
}

const SplitLine = styled.div`
	height: 4px;
	width: 100%;
	border-radius: 2px;
	background-color: #303030;
	margin: 0 0 40px 0;
`;

const HomeWrapper = styled.div`
	margin: 0 10%;
	width: 80%;
`;

const MainContainer = styled.div`
	 display: flex;
	 flex-direction: row;
	 @media (max-width: 1200px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	 }
`;

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	margin-right: 80px;
	@media (max-width: 1200px) {
		margin-right: 0px;
	}
	@media (max-width: 600px) {
		width: 150px;
	}
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

const SkillTagGreen = styled.div`
	background-color: #21A049;
	color: #202020;
	border-radius: 16px;
	padding: 5px 15px;
	display:inline-block;
	margin-right: 10px;
	margin-bottom: 10px;

`;

const SkillTagPurple = styled.div`
	background-color: #A93C91;
	color: #202020;
	border-radius: 16px;
	padding: 5px 15px;
	display:inline-block;
	margin-right: 10px;
	margin-bottom: 10px;
`;

const SkillTagGrey = styled.div`
	background-color: #adacac;
	color: #202020;
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
	margin-bottom: 50px;
`;

const EducationContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 600px) {
		div {
			flex-direction: column;
			img {
				margin-right: 0px;
				margin-bottom: 20px;
			}
		}
	}
`;

const ContainerElement = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 40px;
		img {
		align-self: flex-start;
		margin-right: 30px;
		width: 168px;
		cursor: pointer;
	}
`;
const ContainerElementInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
const ElementInfoMain = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

const ExperienceContainer = styled.div`
	display: flex;
	flex-direction: column;
	div {

		img {
			align-self: flex-start;
			margin-right: 30px;
			width: 168px;
			cursor: pointer;
		}
	}
	@media (max-width: 600px) {
		div {
			flex-direction: column;
			img {
				margin-right: 0px;
				margin-bottom: 20px;
			}
		}
	}
`;

const DesignSkillsContainer = styled.div`
	margin-bottom: 10px;
`;
const AdminSkillsContainer = styled.div`
	margin-bottom: 10px;
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




export default Home;