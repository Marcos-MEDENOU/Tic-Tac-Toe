
import logo from '././../../src/logo.svg'
import App from  '././../../src/App.css';
import React from 'react';
import Game from './Game';

class NavBar extends React.Component {
    render() {
        return (
            <div className="bg-zinc-900">
                <header className="w-[95%] m-auto xl:w-[75%]">
                    <div className="text-center text-[#61dafb]"><span>Se divertir sur une grille de jeu, </span ><span className="">C'est juste amusant!🙂</span></div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div>
                                    <img src={logo} className="" alt="logo" width="120px" />
                                </div>
                                <div className="text-[#61dafb] font-bold">TIC TAC TOE</div>
                            </div>
                            <div className="">
                                <div className="flex">
                                    <nav>
                                        <ul className="flex gap-[1rem] text-white hidden sm:flex">
                                            <li>Détails sur le jeu</li>
                                            <li>Jouer</li>
                                            <li>Inscription</li>
                                            <li>Connexion</li>
                                        </ul>
                                    </nav>
                                   
                                </div>
                                <div className="text-white border-2 border-[#61dafb]-500 p-[.5rem] xl:hidden md:hidden sm:hidden">
                                    Menu
                                </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar;