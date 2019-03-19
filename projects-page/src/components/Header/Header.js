import React, { Component } from 'react'; 
import './Header.css';
import logo from '../../assets/images/logo.png';
import snapchat from '../../assets/images/snapchat.png'; 
import Modal from 'react-modal'; 

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };  


class Header extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    render () {
        return (
            <header className = "header">
                <div className="header-right">
                    <div className="header-logo-wrapper"><img className="header-logo" src={logo}/></div>
                    <div className="header-projects">PROJECTS</div>
                </div>
                <div className="header-left">
                    <div className="header-link"><a href="#">Home</a></div>
                    <div className="header-link" onClick = {this.openModal}><a>Snapchat</a></div>
                    <div className="header-link"><a href="https://cornellsun.com/contact-us/">Contact</a></div>
                    <div className="header-icon"><a href="https://www.facebook.com/cornellsun/"><i class="fab fa-facebook"></i></a></div>
                    <div className="header-icon"><a href="https://www.instagram.com/cornellsun/"><i class="fab fa-instagram "></i></a></div>
                    <div className="header-icon"><a href="https://twitter.com/cornellsun/"><i class="fab fa-twitter "></i></a></div>
                </div>

                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}>
                        <div className="modal-wrapper">
                        <img src={snapchat}/>
                        <button className="modal-button" onClick={this.closeModal}>close</button> 
                        </div> 
                </Modal>
            </header>
        ); 
    }
}

export default Header;