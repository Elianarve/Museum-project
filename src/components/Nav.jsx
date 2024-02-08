import React from 'react'
import styled from 'styled-components'


const NavContainer = styled.nav`
.header {
  background: linear-gradient(90deg, rgba(100, 150, 249, 1) 17%, rgba(230, 230, 230, 1) 100%);
  height: 80px;
  opacity: 70%;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  width: 86vw;
  position: fixed;
  margin: 0.5% 0 0 6%;
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
  color: white;
  text-decoration: none;
  border-radius: 30px;
  padding: 5px 20px 5px 14px;
  background-color: #6496f9;
}

.a-list-first {
  color: white;
  text-decoration: none;
  border-radius: 30px;
  padding: 5px 20px 5px 20px;
  background-color: #6496f9;
  margin-left: 15px;
}

.a-list-Profile {
  color: white;
  text-decoration: none;
  border-radius: 30px;
  padding: 5px 20px 5px 20px;
  background-color: #6496f9;
}


.a-list-contact {
  color: white;
  text-decoration: none;
  border-radius: 30px;
  padding: 5px 20px 5px 15px;
  background-color: #6496f9;
  margin-left: 10px;
}

.a-list:hover {
  color: black;
  background-color: white;
}

.a-list-first:hover {
  color: black;
  background-color: white;
}

.a-list-Profile:hover {
  color: black;
  background-color: white;
}

.a-list-contact:hover {
  color: black;
  background-color: white;
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
  background-color: #6496f9;
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
  background-color: #6496f9;
  border-radius: 10px;
  transition: 0.3s;
}

.hamburguer:before {
  top: -10px;
  width: 20px;
}

.hamburguer:after {
  top: 10px;
  width: 25px;
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

@media only screen and (min-width: 320px) and (max-width: 1000px){
  .header {
    border-radius: 10px;
    height: 12vw;
}

.img-nav {
    width: 45%;
    height: 70%;
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
    top: 0px;
    right: -300px;
    width: 200px;
    height: auto;
    margin-top: 100px;
    margin-right: 36px;
    padding-top: 20px;
    background-color: #6496f9;
    border-radius: 30px;
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
    background-color: #6496f9;
}

.a-list:hover {
    color: black;
    padding: 0;
    background-color: #6496f9;
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
    background-color: #6496f9;
}

.a-list-contact {
    color: white;
    text-decoration: none;
}

.a-list-contact:hover {
    color: black;
    padding: 0;
    background-color: #6496f9;
}
}
`

const Nav = () => {
  return (
    <NavContainer>
      <div id="inicio">
        <header class="header">
            <img class="img-nav" src="../img/Logo Empresarial.png"/>
            <div class="navigation">
                <input type="checkbox" class="toggle-menu"/>
                <div class="hamburguer"></div>
                <ul class="menu">
                    <li class="list"><a href="#inicio" class="a-list-first">Inicio</a></li>
                    <li class="list"><a href="#services" class="a-list">Servicios</a></li>
                    <li class="list"><a href="#profiles" class="a-list-Profile">Equipo</a></li>
                    <li class="list"><a href="#proyects" class="a-list">Proyectos</a></li>
                    <li class="list"><a href="#contact" class="a-list-contact">Contacto</a></li>
                </ul>
            </div>
        </header>
    </div>
    </NavContainer>
  )
}

export default Nav;