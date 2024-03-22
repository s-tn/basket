import { createRoot } from 'react-dom/client';
import React, { Dispatch, Fragment, useState } from 'react';

import events from './events';

declare const window: Global & typeof globalThis;

let _setGravity: Dispatch<number>, _setScore: Dispatch<number>;

function App() {
    const [ gravity, setGravity ] = useState(4);
    const [ score, setScore ] = useState(5);

    _setGravity = setGravity;
    _setScore = setScore;

    return (
        <Fragment>
            <div className="title-bar"></div>
            <h1 className="menu-title">Random Mods</h1>
            <div className="content">
                <div className="left">
                    <h2>Miscellanious</h2>
                    <label htmlFor="gravity-changer">Gravity (4 default)</label><br />
                    <span id="gravity-value"> { gravity } </span>
                    <input type="range" id="gravity-changer" min="0" max="30" value={ gravity } /><br />
                    <label htmlFor="activate-oneone">Activate 1v1 Game</label>
                    <button id="activate-oneone">Activate</button>
                    <br />
                    <label htmlFor="activate-push">Activate Pushing Game</label>
                    <button id="activate-push">Activate</button>
                    <br />
                    <label htmlFor="activate-practice">Activate Practice</label>
                    <button id="activate-practice">Activate</button>
                    <form className="practice-form">
                        <input type="radio" id="player1-practice" name="practice" value="1" />
                        <label htmlFor="player1-practice">Player 1</label><br />

                        <input type="radio" id="player2-practice" name="practice" value="2" />
                        <label htmlFor="player2-practice">Player 2</label><br />

                        <input type="radio" id="player3-practice" name="practice" value="3" />
                        <label htmlFor="player3-practice">Player 3</label><br />

                        <input type="radio" id="player4-practice" name="practice" value="4" />
                        <label htmlFor="player4-practice">Player 4</label><br />
                    </form>
                </div>
                <div className="right">
                    <h2>Multiplayer</h2>
                    <label htmlFor="enable-multi">Enable</label>
                    <input type="checkbox" id="enable-multi" name="enable multiplayer" value="Enable" />
                    <br />
                    <h3 className="available-players">Available Players:</h3>
                    <h5 className="multi-id-over">Your ID: <span id="multi-id"></span></h5>
                    <form id="available-players"></form>
                    <button id="connect-button" disabled={ true } >Connect</button>
                    <hr />
                    <h2>Clipping</h2>
                    <label htmlFor="enable-clip">Enable</label>
                    <input type="checkbox" id="enable-clip" name="enable clipping" value="Enable" />
                    <span id="clip-time">00:00</span>
                    <br />
                    <button id="capture-30s" disabled={ true }>Record Last 30 seconds</button>
                    <hr />
                    <h2>Custom Score</h2>
                    <h5 className="score-val-over">Current: <span id="score-value">5</span></h5>
                    <label htmlFor="score">Score</label>
                    <span id="score-current"> { score } </span>
                    <input type="range" id="score" min="0" max="20" value={ score } />
                    <button id="score-submit">Save</button>
                    <br />
                    <button id="set-score" onClick={() => {
                        const input = prompt(`Set the score to:\nCurrent: ${ score }\nFormat: 0-20,0-20`);

                        if (!input) return;

                        const scores = input.split(',');

                        if (scores.length !== 2) return;

                        window.dispatchEvent(new CustomEvent('set-score', {
                            detail: scores.map(score => parseInt(score))
                        }));
                    }}>Set Score</button>
                </div>
            </div>
        </Fragment>
    );
}

const rootElement = document.createElement('div');
rootElement.id = 'modMenu';
rootElement.classList.add('mod-menu');
document.body.appendChild(rootElement);

const root = createRoot(rootElement as HTMLDivElement);
root.render(<App />);

addEventListener('load', () => {
    
    events();

    dragElement(rootElement);

    function dragElement(elmnt: HTMLDivElement) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var titleBar = elmnt.querySelector('.title-bar') as HTMLDivElement;
        if (titleBar) {
            titleBar.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e: MouseEvent) {
            e = e || window.event;
            e.preventDefault();

            pos3 = e.clientX;
            pos4 = e.clientY;
            titleBar.onmouseup = closeDragElement;

            document.onmousemove = elementDrag;
        }

        function elementDrag(e: MouseEvent) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            titleBar.onmouseup = null;
            document.onmousemove = null;
        }
    }

    window._nativeEventListener('keydown', (event: Event) => {
        if ((event as KeyboardEvent).key === 'm') {
            rootElement.classList.toggle('minimized');
        }
    });

    window.dispatchEvent(new CustomEvent('react-load', {
        detail: [ _setGravity, _setScore ]
    }));

});