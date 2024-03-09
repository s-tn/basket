declare const window: Global & typeof globalThis;
declare const c3_runtimeInterface: C3_runtimeInterface;
declare const C3Audio_DOMInterface: any;

export default function audio(menu: ModMenu) {
    class AudioManager extends EventTarget {
        constructor(public menu: ModMenu) {
            super();
        };

        play(url: string) {
            this.dispatchEvent(new CustomEvent(url));
        }
    }

    const audioManager = new AudioManager(menu);

    window.addEventListener('basket-ready', () => {
        window.AudioDOMHandler.prototype._Play = new Proxy(window.AudioDOMHandler.prototype._Play, {
            apply: (target, thisArg, argumentsList) => {
                let ball = window.ball;
                audioManager.play(argumentsList[0].originalUrl);
                console.log(argumentsList[0])
                if (argumentsList[0].originalUrl === "file") {
                    if (ball.x > 225 && ball.y > 75 && ball.y < 80 && ball.instVars.hold === 0) {
                        menu.scores[0] ++;
    
                        c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[2]._sdkInst._SetText(String(menu.scores[0]));
                        c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[3]._sdkInst._SetText(String(menu.scores[1]));
                
                        if (menu.scores[0] >= menu.scoreTarget) {
                            menu.scores = [0, 0];
                            return window.globalVars.p1Score = menu.scoreTarget;
                        }
                    
                        if (menu.scores[1] >= menu.scoreTarget) {
                            menu.scores = [0, 0];
                            return window.globalVars.p2Score = menu.scoreTarget;
                        }
                
                        window.globalVars.p1Score = 0;
                        window.globalVars.p2Score = 0;
                    }
                
                    if (ball.x < 80 && ball.y > 75 && ball.y < 80 && ball.instVars.hold === 0) {
                        menu.scores[1] ++;
    
                        c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[2]._sdkInst._SetText(String(menu.scores[0]));
                        c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[3]._sdkInst._SetText(String(menu.scores[1]));
                
                        if (menu.scores[0] >= menu.scoreTarget) {
                            menu.scores = [0, 0];
                            return window.globalVars.p1Score = menu.scoreTarget;
                        }
                    
                        if (menu.scores[1] >= menu.scoreTarget) {
                            menu.scores = [0, 0];
                            return window.globalVars.p2Score = menu.scoreTarget;
                        }
                
                        window.globalVars.p1Score = 0;
                        window.globalVars.p2Score = 0;
                    }
    
                    setTimeout(() => {
                        c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[2]._sdkInst._SetText(String(menu.scores[0]));
                        c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[3]._sdkInst._SetText(String(menu.scores[1]));
                    }, 2450);
                }
                if (argumentsList[0].originalUrl === "start") {
                    Promise.allSettled([
                        C3Audio_DOMInterface._Play({vol: 1, url: 'media/remix0.webm', originalUrl: 'remix0', tags: ['music'], loop: true}).then(() => {
                            return C3Audio_DOMInterface._Stop({url: 'media/remix0.webm', originalUrl: 'remix0', tags: ['music']})
                        }),
                        C3Audio_DOMInterface._Play({vol: 1, url: 'media/remix1.webm', originalUrl: 'remix1', tags: ['music'], loop: true}).then(() => {
                            return C3Audio_DOMInterface._Stop({url: 'media/remix1.webm', originalUrl: 'remix1', tags: ['music']})
                        }),         
                        C3Audio_DOMInterface._Play({vol: 1, url: 'media/remix2.webm', originalUrl: 'remix2', tags: ['music'], loop: true}).then(() => {
                            return C3Audio_DOMInterface._Stop({url: 'media/remix2.webm', originalUrl: 'remix2', tags: ['music']})
                        })           
                    ]).then(menu.resolveLoading);
                }
                if (argumentsList[0].originalUrl === "music") {
                    menu.newGame();
    
                    /*if (!C3Audio_DOMInterface._audioInstances.find(inst => inst._buffer._originalUrl === "remix0")) {
                        return (
                            C3Audio_DOMInterface._Play({vol: 1, url: `media/remix0.webm`, originalUrl: 'remix0', tags: ['music'], loop: true}).then(() => {
                                return C3Audio_DOMInterface._Stop({url: `media/remix0.webm`, originalUrl: 'remix0', tags: ['music']})
                            }).then(() => {
                                C3Audio_DOMInterface._audioInstances.find(inst => inst._buffer._originalUrl === "remix0").Play(true, 0.15, 0, 0);
                            }),
                            null
                        )
                    }
    
                    return;*/
                }
                if (argumentsList[0].originalUrl === "refsoc") {
                    console.timeEnd();
                    menu.newRound();
                }
                return target.apply(thisArg, argumentsList);
            }
        });
    });

    return audioManager;
}