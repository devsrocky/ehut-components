import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Alert } from 'react-bootstrap';
import { Search, Sun, Person, Heart, Cart, Send } from 'react-bootstrap-icons';
import Logo from '/ehut-logo-40x100.png';
import { BsFillCaretDownFill } from 'react-icons/bs';
import Menu from '../elements/Menu';
import { BiMinus, BiPlus } from 'react-icons/bi';
import ThemeMenu from './ThemeMenu'


const Navigation = () => {


  let sendRef, searchRef, buttonRef, inputRef, refBiPlus, refBiMinus = useRef()
  const SearchMenuRef = useRef(null)


  const  [isMenuVisible, setMenuVisible] = useState( false)


  const [isThemeMenuVisible, setThemeMenuVisible] = useState(false);
  const themeMenuRef = useRef(null)


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

  const MenuHandler = () => {
    const plus =  refBiPlus;
    const minus =  refBiMinus;
    const button = buttonRef;

    setMenuVisible(!isMenuVisible)

    if(minus.classList.contains('d-none')){
      minus.classList.remove('d-none')
      plus.classList.add('d-none')
      button.style.opacity = '0.5'
    }else{
      plus.classList.remove('d-none')
      minus.classList.add('d-none')
      button.style.opacity = '1'

    }

  }

  const ThemeMenuHandler = (event) => {
    // const sun = sunIcon.current;
    const icon = event.target;
    event.stopPropagation();
    setThemeMenuVisible(!isThemeMenuVisible)

    if(isThemeMenuVisible === false){
      icon.style.opacity = 0.5;
    }else{
      icon.style.opacity = 1;
    }

  }

  // Close ThemeMenu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!inputRef.contains(event.target)) {
        const sendIcon = sendRef;
        const searchIcon = searchRef;
        const button = buttonRef;
        const input = inputRef;

        sendIcon.classList.add('disabled')
        searchIcon.classList.remove('disabled')
        button.classList.remove('disabled')
        input.style.paddingLeft = '95px'
      }

    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const   iconStyle = {
    position: 'relative',
    left: '6px'
  }

  return (

      <header>
          <nav className='ehut-navigation inMiddle ' >

              <div className="container w95">
                <div className="row" style={{padding: '0 !important'}}>

                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 P0 inMiddle">
                    <Navbar.Brand href="/" >
                      <img src={Logo} alt="Logo" className='ehut-logo'/>
                    </Navbar.Brand>
                  </div>

                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 P0 inMiddle">
                    
                    <div className='ehut-navigation-menu-search'>
                      <button onClick={MenuHandler} ref={(button) => buttonRef=button} size="sm" className="mr-3 tr_delay">
                        Menu
                        <BiPlus ref={(BiPlus) => refBiPlus=BiPlus} className="mx-2 svg  M0 tr_delay" style={iconStyle} />
                        <BiMinus ref={(BiMinus) => refBiMinus=BiMinus} className="mx-2 svg M0 tr_delay d-none" style={iconStyle} />
                      </button>

                      {isMenuVisible && <div ref={SearchMenuRef}><Menu/></div> }


                      <Form inline className="mx-auto d-flex align-items-center" style={{ flex: 1 }}>
                        <div>

                          <FormControl ref={(input)=> inputRef=input} onChange={ChangeInput} onClick={manageMenu} type="text" className='tr_delay '/>

                          <div className="icon-bg">
                            <Search ref={(Search) => searchRef=Search} onClick={OnSearchIcon} className='search_icon tr_delay' />
                            <Send ref={(Send) => sendRef=Send} onClick={OnSearchIcon} className='search_icon send none tr_delay disabled ' />
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-1 P0 inMiddle ">
                      <div className="ehut-tools d-flex  justify-content-end">
                        <div style={{position: 'relative'}} className='switch-icon'>
                          <Sun onClick={ThemeMenuHandler}  className="mx-2 svg switch-icon"/>
                          {/* EN */}
                        </div>
                        <Person onClick={OnUser} className="mx-2 svg switch-icon" />
                        <div style={{position: 'relative'}} className='switch-icon'>
                          <Heart onClick={OnWishLists} className="mx-2 svg " />
                          <span className='counter position-absolute '>1</span>
                        </div>
                        <div  style={{position: 'relative'}} className='switch-icon'>
                          <Cart onClick={OnCartList} className="mx-2 svg" />
                          <span className='counter position-absolute '>10</span>

                        </div>
                        <div onClick={ThemeMenuHandler} className='mobile-dropdown'><BsFillCaretDownFill className="mx-2 svg dBlock" /></div>
                      </div>



                  </div>


                </div>
              </div>
          </nav >

          {isThemeMenuVisible && (
        <div ref={themeMenuRef}>
          <ThemeMenu />
        </div>
      )}

      </header>

  );
};

export default Navigation;
