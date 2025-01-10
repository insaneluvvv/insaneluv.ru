import styled from "styled-components";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const Footer = () => {
  return ( 
    <FooterWrapper>
      <DownloadCVButton href="./src/assets/media/Avatar.png" download="LemeshevArtem_CV.png">
        Скачать CV
      </DownloadCVButton>
      <span>Лемешев Артем // FrontEnd разработка</span>
      <Socials>
        <FaTelegram size={30}/>
        <FaGithub size={30}/>
        <ImMail4 size={30}/>
      </Socials>
    </FooterWrapper>
   );
}
 
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 100px;
  background-color: #303030;
  color: #909090;
  padding: 0 5%;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px 5%;
  }
`;

const DownloadCVButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 200px;
  background-color: #909090;
  border: 0;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #303030;
  transition: 300ms ease;
  &:hover{
    background-color: #707070;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110px;
`;



export default Footer;