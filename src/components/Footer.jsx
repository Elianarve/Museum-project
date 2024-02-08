import styled from 'styled-components';

const FooterContainer = styled.footer `
.container {
    background-color: #13281B;
    color: white;
    width: 100%;
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
`;

const Footer = () => {
  return (
    <FooterContainer>
        <div className='container'>
         <img src="../../public/logo.png" alt="logo" /> 
         <p>Contacto</p>
         <p>676548934 - 904337658</p> 
         <p>contacto@reactmuseum.com</p>   
         <p>C/ de Amaniel, 2, Centro, 28015 Madrid</p>    
         <div className='icons'>
            <img className='logo' src="../../public/instagram.png" alt="instagram" />
            <img className='logo' src="../../public/facebook.png" alt="facebook" />
            <img className='logo' src="../../public/twitter.png" alt="twitter" />
            <img className='logo' src="../../public/youtube.png" alt="youtube" />
        </div> 
        <p>Copyrigth &copy; 2024 REACT Museum</p>
         </div>
    </FooterContainer>
  )
}



export default Footer;