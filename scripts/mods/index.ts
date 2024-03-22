import ws from './ws';
import { guess } from 'web-audio-beat-detector';
import { TabClipper } from './clip';
import practice from './modes/practice';
import single from './modes/single';
import push from './modes/push';
import score from './score';
import audio from './sound';
import gravity from './gravity';
import dunk from './dunk';
import './content.tsx';

declare const window: Global & typeof globalThis;
declare const c3_runtimeInterface: C3_runtimeInterface;

window.addEventListener('react-load', ({
    detail
}: any) => {
    let script = document.createElement('script');
    script.src = "scripts/main.js";
    script.setAttribute('module', 'true');
    document.body.appendChild(script);

    const menu: ModMenu = {
        multiplayer: false,
        singleplayer: false,
        pushing: false,
        practicing: false,
        scoreTarget: 5,
        scores: [0, 0],
        setGravity: detail[0],
        setScoreTarget: detail[1],
        basketLoading: new Promise(() => {}),
        resolveLoading: () => {},
        opponent: "",
        get players() {
            return window.players;
        },
        get heads() {
            return window.heads;
        },
        get ball() {
            return window.ball;
        },
        get globalVars() {
            return window.globalVars;
        },
        getBeat: guess,
        clipper: new TabClipper(),
        practicePlayer: 4,
        giveBall(body) {
            var ball = c3_runtimeInterface._localRuntime._iRuntime.objects.balls.getAllInstances()[0];
        
            ball.instVars.hold = 1;
            ball.instVars.who = body;
        },
        dropBall() {
            var ball = c3_runtimeInterface._localRuntime._iRuntime.objects.balls.getAllInstances()[0];
        
            ball.instVars.hold = 0;
            ball.instVars.who = -1;
        },
        dropBallForce(): Promise<void> {
            return new Promise(res => {
                document.dispatchEvent(new KeyboardEvent('keydown', {
                    bubbles: true,
                    code: 'KeyW',
                    key: 'w',
                    keyCode: 87,
                    which: 87
                }));

                document.dispatchEvent(new KeyboardEvent('keydown', {
                    bubbles: true,
                    code: 'ArrowUp',
                    key: 'ArrowUp',
                    keyCode: 38,
                    which: 38
                }));
                
                setTimeout(() => {
                    document.dispatchEvent(new KeyboardEvent('keyup', {
                        bubbles: true,
                        code: 'ArrowUp',
                        key: 'ArrowUp',
                        keyCode: 38,
                        which: 38
                    }));

                    res();
                }, 100);
            });
        },
        newGame() {
            console.log('starting');
            menu.scores = [0, 0];
            menu.newRound();
        },
        newRound() {
            c3_runtimeInterface._localRuntime._pluginManager._allBehaviors[0].SetGravity(parseInt((menu.content.querySelector('#gravity-changer') as HTMLInputElement).value));
        
            if (menu.singleplayer === true) {
                menu.singlePlayer?.(false);
            }
        
            if (menu.practicing === true) {
                menu.practiceMode?.(false);
            }
        },
        content: (document.querySelector('.content') || document.createElement('div')) as HTMLDivElement & CustomEventTarget,
    }

    menu.basketLoading = new Promise((resolve) => {
        menu.resolveLoading = resolve;
    });

    Object.defineProperties(window, {
        "ball": {
            get: () => c3_runtimeInterface._localRuntime._iRuntime.objects.balls.getAllInstances()[0],
        },
        "players": {
            get: () => [
                c3_runtimeInterface._localRuntime._iRuntime.objects.body.getAllInstances()[0],
                c3_runtimeInterface._localRuntime._iRuntime.objects.body2.getAllInstances()[0],
                c3_runtimeInterface._localRuntime._iRuntime.objects.body3.getAllInstances()[0],
                c3_runtimeInterface._localRuntime._iRuntime.objects.body4.getAllInstances()[0],
            ],
        },
        "heads": {
            get: () => [
                c3_runtimeInterface._localRuntime._iRuntime.objects.head.getAllInstances()[0],
                c3_runtimeInterface._localRuntime._iRuntime.objects.head2.getAllInstances()[0],
                c3_runtimeInterface._localRuntime._iRuntime.objects.head3.getAllInstances()[0],
                c3_runtimeInterface._localRuntime._iRuntime.objects.head4.getAllInstances()[0],
            ],
        },
        "globalVars": {
            get: () => c3_runtimeInterface._localRuntime._iRuntime.globalVars,
        }
    });

    const audioManager = audio(menu);

    ws(menu);
    gravity(menu);
    dunk(menu);
    menu.scoreChange = score(menu);
    menu.practiceMode = practice(menu);
    menu.singlePlayer = single(menu);
    menu.pushMode = push(menu);

    audioManager.addEventListener('start', () => {
        console.log('start');
    });
});