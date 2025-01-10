import styled from "styled-components";


const Home = () => {
  return ( 
    <MainWrapper>
      <MainContainer>
        <AvatarContainer>
          <img className="avatar" src="./src/assets/media/Avatar.png" alt="Avatar" />
          <img className="logo" src="./src/assets/media/InsaneLuv Logo.png" alt="InsaneLuv Logo" />
        </AvatarContainer>
        <InfoContainer>
          <NameContainer>
            <h1>Лемешев Артем</h1>
            <h2>FrontEnd Developer</h2>
          </NameContainer>
          <SkillsContainer>

          </SkillsContainer>
          <ContactsContainer>

          </ContactsContainer>
          <EducationContainer>

          </EducationContainer>
          <AboutContainer>
            
          </AboutContainer>
        </InfoContainer>
      </MainContainer>
      <PortfolioContainer>

      </PortfolioContainer>
    </MainWrapper>
   );
}
 
const MainWrapper = styled.div`
  margin: 50px 10%;
  width: 80%;
  background-color: #8080801f;
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
  margin-right: 20px;
  background-color: #8080801f;
  .avatar {
    width: 100%;
    border-radius: 15px;
    box-shadow: 2px 3px 5px black;
  }
  .logo {
    width: 60%;
    position:relative;
    top: -50px;
    left: 30px;
  }
  position: sticky;
  top: 90px;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: #8080801f;
`;

const NameContainer = styled.div`
  border-left: 10px solid #21A049;
  border-radius: 10px 0 0 10px;
`;
const SkillsContainer = styled.div`
  
`;
const ContactsContainer = styled.div`
  
`;
const EducationContainer = styled.div`
  
`;
const AboutContainer = styled.div`
  
`;

const PortfolioContainer = styled.div`
  
`;

export default Home;