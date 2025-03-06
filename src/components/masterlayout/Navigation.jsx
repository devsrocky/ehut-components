import React, { useRef, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Alert } from 'react-bootstrap';
import { Search, Sun, Person, Heart, Cart, Send } from 'react-bootstrap-icons';
import Logo from '../../../public/ehut-logo-40x100.png';
import { BsFillCaretDownFill } from 'react-icons/bs';

const Navigation = () => {



  let sendRef, searchRef, buttonRef, inputRef = useRef()

  const OnSearchIcon = () => {
    const sendIcon = sendRef;
    const searchIcon = searchRef;
    const button = buttonRef;
    const input = inputRef;
    button.classList.add('disabled')

    if(sendIcon.classList.contains('disabled')){
      searchIcon.classList.add('disabled')
      sendIcon.classList.remove('disabled')
      sendIcon.classList.add('enabled')
      input.style.paddingLeft = '15px'
    }else{
      sendIcon.classList.add('disabled')
      searchIcon.classList.remove('disabled')
      searchIcon.classList.add('enabled')
      input.style.paddingLeft = '100px'
      button.classList.remove('disabled')
    }
  }

  const ChangeInput = () => {
    const sendIcon = sendRef;
    if(sendIcon.classList.contains('none')){
      sendIcon.classList.toggle('none')
    }
  }

  const manageMenu = () => {
    const sendIcon = sendRef;
    const searchIcon = searchRef;
    const button = buttonRef;
    const input = inputRef;

    searchIcon.classList.add('disabled')
    sendIcon.classList.remove('disabled')
    sendIcon.classList.add('enabled')
    button.classList.add('disabled')
    input.style.paddingLeft = '15px'
  }

  const OnCartList = () => {
    alert("Carts")
  }

  const OnWishLists = () => {
    alert("Wish")
  }

  const OnUser = () => {
    alert("User")
  }

  return (

      <header>
          <nav className='ehut-navigation inMiddle' >

              <div className="container">
                <div className="row" style={{padding: '0 !important'}}>

                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 inMiddle">
                    <Navbar.Brand href="/" >
                      <img src={Logo} alt="Logo" className='ehut-logo'/>
                    </Navbar.Brand>
                  </div>

                  <div className="col-xl-8 col-lg-8 col-md-9 col-sm-7 col-7 inMiddle">
                    
                    <div className='ehut-navigation-menu-search'>
                      <button ref={(button) => buttonRef=button} size="sm" className="mr-3 tr_delay">
                          Menu
                      </button>

                      <Form inline className="mx-auto d-flex align-items-center" style={{ flex: 1 }}>
                        <div>

                          <FormControl ref={(input)=> inputRef=input} onChange={ChangeInput} onClick={manageMenu} type="text" className='tr_delay'/>

                          <div className="icon-bg">
                            <Search ref={(Search) => searchRef=Search} onClick={OnSearchIcon} className='search_icon tr_delay' />
                            <Send ref={(Send) => sendRef=Send} onClick={OnSearchIcon} className='search_icon send none tr_delay disabled ' />
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-md-1 col-sm-2 col-2 inMiddle">
                      <div className="ehut-tools d-flex">
                        <Sun className="mx-2 svg switch-icon"/>
                        <Person onClick={OnUser} className="mx-2 svg switch-icon" />
                        <Heart onClick={OnWishLists} className="mx-2 svg switch-icon" />
                        <Cart onClick={OnCartList} className="mx-2 svg switch-icon" />
                        <div className='d-none'><BsFillCaretDownFill className="mx-2 svg dBlock" /></div>
                      </div>
                  </div>

                </div>
              </div>
          </nav >
      </header>

  );
};

export default Navigation;
