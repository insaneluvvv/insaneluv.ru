import styled from "styled-components";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const Footer = () => {
  return ( 
    <FooterWrapper>
      <span>Сайт резюме-портфолио Лемешева Артема: Front-End разработка</span>
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
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110px;
`;

export default Footer;