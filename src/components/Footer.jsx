import styled from 'styled-components';
import insta from '../assets/instagram.png';
import fcb from '../assets/facebook.png';
import twiter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import lg from '../assets/logo-claro.png';


const FooterContainer = styled.footer `
.container-footer {
    background-color: #13281B;
    color: white;
    }

.logo-m{
  width: 6%;
}   

.box{
  display: flex;
  justify-content: space-around;
  padding-top: 1%;
}

.box-one{
  margin-top: 2%;
}

.title-r {
  font-size: 19px;
}

.icons{
  display: flex;
  justify-content: center;
  gap: 6%;
}

.copy{
  text-align: center;
  margin-bottom: 0;
  padding: 2%
}

@media only screen and (min-width: 320px) and (max-width: 1000px){

.container-footer {
padding: 10px;
text-align: center; 
}

.logo-m{
    margin: 10px;
    width: 30%;
}


.title-r{
  font-size: 12px;
}
`;

const Footer = () => {
  return (
    <FooterContainer>
        <div className='container-footer'>
          <div className='box'>
          <div className='box-one'>
         <img src={lg} alt="logo" className='logo-m' /> 
         <p className='title-r'>REACT MUSEUM</p>
         </div>
         <div className='box2'>
         <p>Contacto</p>
         <p>676548934 - 904337658</p> 
         <p>contacto@reactmuseum.com</p>   
         <p>C/ de Amaniel, 2, Centro, 28015 Madrid</p> 
         </div> 
         </div> 
         <hr /> 
         <div className='icons'>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={insta} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={fcb} alt="facebook" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={twiter} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={youtube} alt="youtube" />
          </a>
        </div> 
        <p className='copy'>Copyrigth &copy; 2024 REACT Museum</p>
         </div>
    </FooterContainer>
  )
}



export default Footer;