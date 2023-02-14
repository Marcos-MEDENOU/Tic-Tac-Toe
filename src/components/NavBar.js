
import logo from '././../../src/logo.svg'
import App from  '././../../src/App.css';
import React from 'react';
import Game from './Game';

class NavBar extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="header-top0"><span >Se divertir sur une grille de jeu, </span ><span className="header-top0-part2">C'est juste amusant!🙂</span></div>
                        <div className="header">
                            <div className="header-block1">
                                <div>
                                    <img src={logo} className="App-logo" alt="logo" width="120px" />
                                </div>
                                <div className="name">TIC TAC TOE</div>
                            </div>
                            <div className="header-block2">
                            <div>
                                <nav>
                                    <ul>
                                        <li>Détails sur le jeu</li>
                                        <li>Jouer</li>
                                        <li>Inscription</li>
                                        <li>Connexion</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar;