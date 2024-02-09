import styled from 'styled-components';
import logo from '../assets/LOGO2.png';

const NavContainer = styled.nav`
.header {
  display: flex;
  justify-content: space-between;
}

.img-nav {
  width: auto;
  height: 93%;
  padding-top: 3px;
}

.list {
  text-align: center;
  width: 130px;
  height: 45px;
  list-style: none;
  font-size: 20px;
  padding-bottom: 55px;
}

.a-list {
  color: black;
  text-decoration: none;
  padding: 5px 20px 5px 14px;
}

.a-list-first {
  color: black;
  text-decoration: none;
  padding: 5px 20px 5px 20px;
  margin-left: 15px;
}

.a-list-Profile {
  color: black;
  text-decoration: none;
  padding: 5px 20px 5px 20px;
}


.a-list-contact {
  color: black;
  text-decoration: none;
  padding: 5px 20px 5px 15px;
  margin-left: 10px;
}

.a-list:hover {
  color: black;
}

.a-list-first:hover {
  color: black;
}

.a-list-Profile:hover {
  color: black;
}

.a-list-contact:hover {
  color: black;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  margin-top: 3%;
}

.menu li a {
  display: block;
  margin: 6% 10%;
}

.hamburguer {
  position: relative;
  width: 30px;
  height: 4px;
  background-color: black;
  border-radius: 10px;
  z-index: 2;
  transition: 0.3s;
}

.hamburguer:before,
.hamburguer:after {
  content: '';
  position: absolute;
  height: 4px;
  right: 0;
  background-color: black;
  border-radius: 10px;
  transition: 0.3s;
}

.hamburguer:before {
  top: -10px;
  width: 29px;
}

.hamburguer:after {
  top: 10px;
  width: 29px;
}

.toggle-menu {
  position: absolute;
  width: 30px;
  height: auto;
  z-index: 3;
  opacity: 0;
  cursor: pointer;
}

.hamburguer,
.toggle-menu {
  display: none;
}

.navigation input:checked~.hamburguer {
  background-color: transparent;
}

.navigation input:checked~.hamburguer:before {
  top: 0px;
  transform: rotate(-45deg);
  width: 30px;
}

.navigation input:checked~.hamburguer:after {
  top: 0px;
  transform: rotate(45deg);
  width: 30px;
}

.navigation input:checked~.menu {
  right: 0;
}

.title{
  text-align: left;
}

@media only screen and (min-width: 320px) and (max-width: 1000px){

.header{
  padding: 3%;
}

.img-nav {
    margin-top: 2%;
}

.hamburguer,
.toggle-menu {
    display: block;
}

.menu {
    justify-content: start;
    flex-direction: column;
    align-items: baseline;
    position: fixed;
    top: -13px;
    right: -300px;
    width: 200px;
    height: auto;
    padding-top: 20px;
    background-color: #13281B;
    cursor: pointer;
}

.a-list {
    color: white;
    text-decoration: none;
}

.a-list-first {
    color: white;
    text-decoration: none;
}

.a-list-first:hover {
    color: black;
    padding: 0;
}

.a-list:hover {
    color: black;
    padding: 0;
}

.menu li a {
    font-size: 24px;
}

.a-list-Profile {
    color: white;
    text-decoration: none;
}

.a-list-Profile:hover {
    color: black;
    padding: 0;
}

.a-list-contact {
    color: white;
    text-decoration: none;
}

.a-list-contact:hover {
    color: black;
    padding: 0;
}

.logo-title{
  display: flex;
  flex-direction: row;
}

.title{
  margin: 20% 0 0% 0;
  padding-left: 5%;
}

.line{
  background: black;
}
}
`

const Nav = () => {
  return (
    <NavContainer>
      <div id="inicio">
        <header className="header">
          <div className='logo-title'>
            <img className="img-nav" src={logo}/>
            <p className='title'><strong>REACT MUSEUM</strong></p>
            </div>
            <div className="navigation">
                <input type="checkbox" className="toggle-menu"/>
                <div className="hamburguer"></div>
                <ul className="menu">
                    <li className="list"><a href="/" className="a-list-first">Inicio</a></li>
                    <li className="list"><a href="/gallery" className="a-list">Animales</a></li>
                    <li className="list"><a href="/museum" className="a-list-Profile">Museo</a></li>
                    <li className="list"><a href="/contact" className="a-list-contact">Contacto</a></li>
                </ul>
            </div>
        </header>
        <hr className='line' />
    </div>
    </NavContainer>
  )
}

export default Nav;