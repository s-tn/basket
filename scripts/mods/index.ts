import './events';

import ws from './ws';
import { guess } from 'web-audio-beat-detector';
import { TabClipper } from './clip';

declare const window: Global & typeof globalThis;
declare const c3_runtimeInterface: C3_runtimeInterface;

const menu: ModMenu = {
    multiplayer: false,
    practicing: false,
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
    }
}

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

ws(menu);