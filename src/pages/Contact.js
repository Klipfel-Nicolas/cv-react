import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from "react-copy-to-clipboard"; //pour copier le txt au click

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Strasbourg</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0632238379">
                                <span 
                                    className="clickInput" 
                                    onClick={()=>{
                                        alert('Téléphone copié !');
                                    }}>
                                        06 32 23 83 79
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="klipfelnicolas86@gmail.com">
                                <span 
                                    className="clickInput" 
                                    onClick={()=>{
                                        alert('e-mail copié !');
                                    }}>
                                        klipfelnicolas86@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/feed/" target="blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Klipfel-Nicolas?tab=repositories" target="blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;