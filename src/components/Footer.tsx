import styled from "styled-components";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import CV_LemeshevAA from "./../assets/media/CV_LemeshevAA.pdf"


const Footer = () => {
  return ( 
    <FooterWrapper>
      <DownloadCVButton href={CV_LemeshevAA} download="CV_LemeshevAA.png">  {/*Зименить файл скачивания*/}
        Скачать CV
      </DownloadCVButton>
      <span>// Лемешев Артем //</span>
      <Socials>
        <a href="https://t.me/insaneluvvv" target="_blank"><FaTelegram size={30} color="#909090" /></a>  
        <a href="https://github.com/insaneluvvv" target="_blank"><FaGithub size={30} color="#909090" /></a>
        <a href="mailto:lemeshev.artem@insaneluv.ru" target="_blank"><ImMail4 size={30} color="#909090" /></a>
      </Socials>
    </FooterWrapper>
   );
}
 
const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 100px;
  background-color: #303030;
  color: #909090;
  padding: 0 5%;
  margin-top: 50px;
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
  transition: 200ms ease;
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