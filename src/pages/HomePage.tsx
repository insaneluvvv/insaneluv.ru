import styled from "styled-components";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

import BackToTop from "../components/BackToTopBtn";

import { DesignSkillsFirst, AdminSkillsFirst, LangSkills, MarSkills, DevSkills, AISkills } from "../assets/data/SkillsList"
import Avatar from "./../assets/media/Avatar.jpg";
import InsaneLuvLogo from "./../assets/media/InsaneLuv Logo.png";
import MisisLogo from "./../assets/media/Misis Logo.svg";
import TeleTribeLogo from "./../assets/media/Teletribe Logo.png";
import ProjectDevBanner from "./../assets/media/portfolio/ProjectDevBanner.png";
import ProjectDesBanner from "./../assets/media/portfolio/ProjectDesBanner.png";

const Home = () => {

	// Кнопка якорь к проектам
	const projectsRef = useRef<HTMLDivElement>(null);

	const scrollToProjects = () => {
			projectsRef.current?.scrollIntoView({ behavior: "smooth" });
	}

	//Подсчет опыта
	// утилита для правильных окончаний
	const pluralize = (num: number, one: string, few: string, many: string) => {
		const mod10 = num % 10;
		const mod100 = num % 100;

		if (mod10 === 1 && mod100 !== 11) return `${num} ${one}`;
		if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${num} ${few}`;
		return `${num} ${many}`;
	};

	const getExperience = (startDate: Date, endDate?: Date): string => {
		const now = endDate ?? new Date();
		let years = now.getFullYear() - startDate.getFullYear();
		let months = now.getMonth() - startDate.getMonth();

		if (months < 0) {
			years -= 1;
			months += 12;
		}

		const yearsStr = years > 0 ? pluralize(years, "год", "года", "лет") : "";
		const monthsStr = months > 0 ? pluralize(months, "месяц", "месяца", "месяцев") : "";

		return [yearsStr, monthsStr].filter(Boolean).join(" ");
	};

	// (месяцы с 0 в JS)
	// const startDate = new Date(2022, 2); // март 2022 (пример начальной даты)
	// const endDate = new Date(2023, 7);   // август 2023 (пример конечной даты)
	// const expCurrent = getExperience(startDate); // Пример вывода до настоящего времени
	// const expEnded = getExperience(startDate, endDate); // Пример вывода до указанной даты

	const startDate1 = new Date(2022, 2); // Дизайн
	const expCurrent1 = getExperience(startDate1); // Вывод Дизайн
	const startDate2 = new Date(2024, 1);  // TeleTribe
	const expCurrent2 = getExperience(startDate2); // Вывод TeleTribe

	return ( 
		<HomeWrapper>
			<MainContainer>
				<AvatarContainer>
					<img className="avatar" src={Avatar} alt="Avatar" />
					<img className="logo" src={InsaneLuvLogo} alt="InsaneLuv Logo" />
					<ToProjectBtn onClick={scrollToProjects}>
						<MdOutlineKeyboardDoubleArrowDown size={24} color="#202020"/> <p>К ПРОЕКТАМ</p> <MdOutlineKeyboardDoubleArrowDown size={24} color="#202020"/>
					</ToProjectBtn>
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
										<p className="default-font">Период обучения: 2020 - 2024 гг.</p>
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
										<p className="element-title">Графический/Веб дизайнер — Insane Luv (Фриланс)</p>
										<p className="default-font">Период деятельности: 2022 Март — Настоящее время</p> <p>{expCurrent1 && ` (${expCurrent1})`}</p>
									</ElementInfoMain>
									<DesignSkillsContainer>
										{DesignSkillsFirst.map(el => 
											<SkillTagGreen>
												<span>{el}</span>
											</SkillTagGreen>
										)}
									</DesignSkillsContainer>
									<p className="default-font">Ключевые задачи:<br/>
										- Разрабатывал дизайн для клиентов на фрилансе в сферах соц. сетей, турниров, брендинга и др.<br/>
										- Со старта вел соц. сети, посвященные моей деятельности, для формирования аудитории и привлечения новых клиентов, благодаря чему параллельно знакомился с процессами маркетинга и развития личного бренда.<br/>
										- Основная клиентская база была из области киберспортивных турниров, на которую было нацелено продвижение.<br/>
										Был проведен анализ рынка, на основе которого подбирались места и способы распространения услуг. Подобрана соц. сеть Discord (основная площадка организации турниров), как самая близкая к ЦА. Основными способами распространения с упором на сокращение затрат были: взаимный обмен ссылками с тематическими серверами, спонсирование турниров услугами дизайна взамен на спонсорские ссылки, приносящие стабильный прирост потенциально заинтересованной аудитории и другие бартерные партнерства.<br/><br/>
										
										Ключевые достижения:<br/>
										· Более 150 выполненных работ.<br/>
										· Более 50 клиентов.<br/>
										· Пик Discord: 1500+ участников.<br/>
										· Пик Telegram: 700+ подписчиков.<br/>
										· Занял призовое место в конкурсе дизайна мерча у популярного российского стримера Dmitry_Lixxx (1.7 млн подписчиков на Twitch).<br/>
										· Разработал UI/UX сервиса для обучения нейронной сети Kandinsky (Сбер).</p>
								</ContainerElementInfo>		
						</ContainerElement>
						<ContainerElement>
							<img src={TeleTribeLogo} alt="TeleTribe Logo" onClick={() => {window.open('https://www.teletribe.ru/');}}/>
							<ContainerElementInfo>
								<ElementInfoMain>
									<p className="element-title">Системный администратор - TeleTribe</p>
									<p className="default-font">Период деятельности: 2024 Февраль - Настоящее время </p><p>{expCurrent2 && ` (${expCurrent2})`}</p>
								</ElementInfoMain>		
								<AdminSkillsContainer>
								{AdminSkillsFirst.map(el => 
									<SkillTagPurple>
										<span>{el}</span>
									</SkillTagPurple>
								)}
								</AdminSkillsContainer>
								<p className="default-font">Ключевые задачи:<br/>
									- Обслуживал и поддерживал работоспособность компьютерного оборудования в главном офисе контакт-центра.<br/>
									- Единовременно обеспечивал полное техническое сопровождение 40+ сотрудников и организовывал рабочие места для новых.<br/>
									- Управлял полным циклом закупок технического оборудования: от формирования ТЗ и выбора поставщиков до заключения договоров, логистики, приемки и контроля качества, действуя с акцентом на оптимизацию затрат и вел соответствующий документооборот.<br/>
									- Работал с серверами и осуществлял выгрузку аудиозаписей для передачи заказчика.<br/><br/>

									Ключевые достижения:<br/>
									- Этот опыт позволил глубоко понять внутренние бизнес-процессы.<br/>
									- Развил навыки работы с клиентами и решения проблем.</p>
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

						Занимаюсь <span className="accent-font">графическим и UI/UX дизайном более 3-х лет</span>, совмещая фриланс-проекты с основной деятельностью. Имею подтвержденный опыт создания дизайна для киберспортивных команд, турниров и IT-компаний: от брендинга до интерфейсов.<br/>
						На фрилансе довелось впервые столкнуться с задачей <span className="accent-font">продвижения своих услуг и привлечения аудитории</span>, благодаря чему получил первичный опыт маркетинга и <span className="accent-font">развивал личный бренд</span>.<br/><br/>

						Долгое время был связан с IT сферой и двигался в этом направлении: получил <span className="accent-font">IT специальность</span>, устроился <span className="accent-font">Системным администратором</span> и изучал <span className="accent-font">FrontEnd разработку</span> на React. Создал <span className="accent-font">свой личный сайт</span> с персональным доменом (<span className="accent-font"><a href="https://insaneluv.ru/" target="_blank">insaneluv.ru</a></span>), запустил его в поисковых системах Яндекс и Google, интегрировал Яндекс метрику.<br/><br/>
						</span>
					</AboutContainer>
				</InfoContainer>
			</MainContainer>
			<ProjectSplit ref={projectsRef}>
				<span className="big-title">Проекты</span>
				<span className="big-title">///</span>
			</ProjectSplit>
			<ProjectContainer>
				<NavLink className="nav-link" to="/design-portfolio" onClick={() => {window.scrollTo({ top: 0, behavior: "instant" });}}>
				<ProjectBlock>
					<ProjectName>Design</ProjectName>
					<img src={ProjectDesBanner} alt={ProjectDesBanner} />
					<ProjectTags>
						<div>Графический дизайн</div>
						<div>UI/UX</div>
					</ProjectTags>
					<ProjectDesc>Портфолио дизайнерской деятельности.</ProjectDesc>
				</ProjectBlock>
				</NavLink>
				<NavLink className="nav-link" to="/dev-portfolio" onClick={() => {window.scrollTo({ top: 0, behavior: "instant" });}}>
				<ProjectBlock>
					<ProjectName>Development</ProjectName>
					<img src={ProjectDevBanner} alt={ProjectDevBanner} />
					<ProjectTags>
						<div>FrontEnd</div>
						<div>React</div>
					</ProjectTags>
					<ProjectDesc>FrontEnd разработка.</ProjectDesc>
				</ProjectBlock>
				</NavLink>
				
			</ProjectContainer>

			<BackToTop />

		</HomeWrapper>
	 );
};


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
		width: 250px;
		
	}
	@media (max-width: 600px) {
		width: 200px;
	}
	.avatar {
		min-width: 200px;
		width: 100%;
		border-radius: 15px;
		box-shadow: 0px 0px 5px 4px black;
	}
	.logo {
		min-width: 125px;
		width: 60%;
		position:relative;
		top: -50px;
		left: 30px;
	}
`;

const ToProjectBtn = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #21A049;
	color: #151515;
	width: 100%;
	padding: 8px 0;
	border-radius: 6px;
	gap: 4px;
	margin-bottom: 10px;
	position:relative;
	top: -30px;
	transition: 200ms ease;
	p{
		font-weight: 450;
	}
	&:hover {
		background-color: #1b7e39;
		box-shadow: 0px 0px 5px 4px black;
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
	color: #151515;
	border-radius: 16px;
	padding: 5px 15px;
	display:inline-block;
	margin-right: 10px;
	margin-bottom: 10px;

`;

const SkillTagPurple = styled.div`
	background-color: #A93C91;
	color: #151515;
	border-radius: 16px;
	padding: 5px 15px;
	display:inline-block;
	margin-right: 10px;
	margin-bottom: 10px;
`;

const SkillTagGrey = styled.div`
	background-color: #adacac;
	color: #151515;
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
		color: #202020;
	}
`;

const ProjectContainer = styled.div`
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
		height: 200px;
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