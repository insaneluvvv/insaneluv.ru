import styled from "styled-components";

import { DevSkillsFirst } from "../assets/data/SkillsList"
import { DevSkillsSecond } from "../assets/data/SkillsList"
import { AdditionalSkills } from "../assets/data/SkillsList";


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
            <div>
              {DevSkillsFirst.map(el => 
                <SkillBlockFirst>
                  <span>{el}</span>
                </SkillBlockFirst>
              )}
              {DevSkillsSecond.map(el => 
                <SkillBlockSecond>
                  <span>{el}</span>
                </SkillBlockSecond>
              )}
            </div>
            <span className="section-title">Дополнительные навыки</span>
            <div>
              {AdditionalSkills.map(el => 
                <SkillBlockSecond>
                  <span>{el}</span>
                </SkillBlockSecond>
              )}
            </div>
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
            <span className="default-font">&ensp;&ensp;Я творческий человек и люблю создавать что-то свое. Путь к FrontEnd разработке был через дизайн, которым я занимался несколько лет: изучал растровую и векторную графику. Позже пришел к изучению UI/UX дизайна, учился проектировать и создавать интерфейсы. Финальным этапом было изучение веб-разработки, чтобы самостоятельно верстать и реализовывать проекты.</span>
            <ol>
              <li>Знаю <span className="accent-font">HTML</span> и <span className="accent-font">CSS</span>, делаю адаптивную верстку, предпочитаю использовать <span className="accent-font">flex</span></li>
              <li>Работаю с библиотекой <span className="accent-font">React</span></li>
              <li>Всегда использую <span className="accent-font">TypeScript</span>, вместо <span className="accent-font">JavaScript</span>, как более хорошую практику</li>
              <li>Для стилизации компонентов использую <span className="accent-font">Styled Components</span></li>
              <li>Для роутинга использую <span className="accent-font">React Router Dom</span></li>
              
            </ol>
          </AboutContainer>
        </InfoContainer>
      </MainContainer>
      <SplitLine></SplitLine>
      <PortfolioContainer>

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
  margin: 50px 10%;
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
  margin-bottom: 50px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 10px solid #21A049;
  border-radius: 10px 0 0 10px;
  padding: 10px 0px 10px 20px;
  font-size: 20px;
  margin-bottom: 50px;
`;

const SkillBlockFirst = styled.div`
  background-color: #21A049;
  color: #202020;
  border-radius: 16px;
  padding: 5px 15px;
  display:inline-block;
  margin-right: 10px;
  margin-bottom: 15px;
`;

const SkillBlockSecond = styled.div`
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

const PortfolioContainer = styled.div`
  
`;

export default Home;