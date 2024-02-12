import styled from 'styled-components';
import insta from '../assets/instagram.png';
import fcb from '../assets/facebook.png';
import twiter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import lg from '../assets/logo-claro.png';


const FooterContainer = styled.footer `
.container {
    background-color: #13281B;
    color: white;
    width: 100%;
    }

.logo-m{
  width: 8%;
}    

@media only screen and (min-width: 320px) and (max-width: 1000px){

.container {
padding: 10px;
text-align: center; 
}

.logo{
    margin: 10px;
}
}

.title{
  font-size: 12px;
}
`;

const Footer = () => {
  return (
    <FooterContainer>
        <div className='container'>
         <img src={lg} alt="logo" className='logo-m' /> 
         <p className='title'>REACT<br /> MUSEUM</p>
         <p>Contacto</p>
         <p>676548934 - 904337658</p> 
         <p>contacto@reactmuseum.com</p>   
         <p>C/ de Amaniel, 2, Centro, 28015 Madrid</p>    
         <div className='icons'>
            <img className='logo' src={insta} alt="instagram" />
            <img className='logo' src={fcb} alt="facebook" />
            <img className='logo' src={twiter} alt="twitter" />
            <img className='logo' src={youtube} alt="youtube" />
        </div> 
        <p>Copyrigth &copy; 2024 REACT Museum</p>
         </div>
    </FooterContainer>
  )
}



export default Footer;