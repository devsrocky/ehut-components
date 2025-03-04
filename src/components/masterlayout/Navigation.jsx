import React, { useRef, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Alert } from 'react-bootstrap';
import { Search, Sun, Person, Heart, Cart, Send } from 'react-bootstrap-icons';



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

  return (

      <header>


          <Navbar className='ehut-navigation' expand='lg'>
          
          <Navbar.Brand href="#" style={{ fontWeight: 'bold', color: '#000' }}>
            Logo
          </Navbar.Brand>

          <div className='ehut-navigation-menu-search'>
            <Button ref={(Button) => buttonRef=Button} variant="dark" size="sm" className="mr-3 tr_delay">
                Menu
            </Button>

            <Form inline className="mx-auto d-flex align-items-center" style={{ flex: 1 }}>
              <div>

                <FormControl ref={(input)=> inputRef=input} onChange={ChangeInput} onClick={manageMenu} type="text" className='tr_delay'/>

                <Search ref={(Search) => searchRef=Search} onClick={OnSearchIcon} className='search_icon tr_delay' />
                <Send ref={(Send) => sendRef=Send} onClick={OnSearchIcon} className='search_icon send none tr_delay disabled ' />
              </div>
            </Form>
          </div>
          

          <Nav className="ml-auto d-flex  tools">
            <Sun className="mx-2 svg" />
            <Person className="mx-2 svg" />
            <Heart className="mx-2 svg" />
            <Cart className="mx-2 svg" /> 
          </Nav>

          </Navbar>
      </header>

  );
};

export default Navigation;
