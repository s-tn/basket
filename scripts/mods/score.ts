let overtime = true;

declare const window: Global & typeof globalThis;
declare const c3_runtimeInterface: C3_runtimeInterface;

export default function score(menu: ModMenu) {
    (menu.content.querySelector('#score-submit') as HTMLButtonElement & CustomEventTarget)._nativeEventListener('click', () => {
        const score = parseInt((menu.content.querySelector('#score') as HTMLInputElement).value);
        menu.content.querySelector('#score-value')!.textContent = String(score);

        console.log(score);

        menu.scoreTarget = score;
    });

    (menu.content.querySelector('#score') as HTMLInputElement & CustomEventTarget)._nativeEventListener('input', (event: Event) => {
        menu.setScoreTarget(((event as KeyboardEvent).target as HTMLInputElement)!.value);
    });

    setInterval(() => {
        try {
            c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[2]._sdkInst._SetText(String(menu.scores[0]));
            c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[3]._sdkInst._SetText(String(menu.scores[1]));
        } catch {
            return;
        }
    }, 500);

    window._nativeEventListener('set-score', (event: Event & { detail: number[] } | any) => {
        const [p1, p2] = event.detail;

        menu.scores = [p1, p2];

        c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[2]._sdkInst._SetText(String(p1));
        c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[3]._sdkInst._SetText(String(p2));
    });
    
    return function() {
        let ball = window.ball;
        if (ball.x > 225 && ball.y > 75 && ball.y < 80 && ball.instVars.hold === 0) {
            menu.scores[0] ++;

            c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[2]._sdkInst._SetText(String(menu.scores[0]));
            c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[3]._sdkInst._SetText(String(menu.scores[1]));
    
            if (menu.scores[0] >= menu.scoreTarget) {
                if (overtime) {
                    if (
                        menu.scores[0] - menu.scores[1] === 1
                        || menu.scores[0] - menu.scores[1] === 0
                        || menu.scores[0] - menu.scores[1] === -1
                    ) {
                        window.globalVars.p1Score = 0;
                        window.globalVars.p2Score = 0;
                        return;
                    }
                }
                
                return window.globalVars.p2Score = menu.scoreTarget;
            }
        
            if (menu.scores[1] >= menu.scoreTarget) {
                if (overtime) {
                    if (
                        menu.scores[1] - menu.scores[0] === 1
                        || menu.scores[1] - menu.scores[0] === 0
                        || menu.scores[1] - menu.scores[0] === -1
                    ) {
                        window.globalVars.p1Score = 0;
                        window.globalVars.p2Score = 0;
                        return;
                    }
                }

                return window.globalVars.p1Score = menu.scoreTarget;
            }
    
            window.globalVars.p1Score = 0;
            window.globalVars.p2Score = 0;
        }
    
        if (ball.x < 80 && ball.y > 75 && ball.y < 80 && ball.instVars.hold === 0) {
            menu.scores[1] ++;

            c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[2]._sdkInst._SetText(String(menu.scores[0]));
            c3_runtimeInterface._localRuntime._layoutManager._layoutsByName.get('game')._layersByName.get('ui')._instances[3]._sdkInst._SetText(String(menu.scores[1]));
    
            if (menu.scores[0] >= menu.scoreTarget) {
                if (overtime) {
                    if (
                        menu.scores[0] - menu.scores[1] === 1
                        || menu.scores[0] - menu.scores[1] === 0
                        || menu.scores[0] - menu.scores[1] === -1
                    ) {
                        window.globalVars.p1Score = 0;
                        window.globalVars.p2Score = 0;
                        return;
                    }
                }
                
                return window.globalVars.p2Score = menu.scoreTarget;
            }
        
            if (menu.scores[1] >= menu.scoreTarget) {
                if (overtime) {
                    if (
                        menu.scores[1] - menu.scores[0] === 1
                        || menu.scores[1] - menu.scores[0] === 0
                        || menu.scores[1] - menu.scores[0] === -1
                    ) {
                        window.globalVars.p1Score = 0;
                        window.globalVars.p2Score = 0;
                        return;
                    }
                }

                return window.globalVars.p1Score = menu.scoreTarget;
            }
    
            window.globalVars.p1Score = 0;
            window.globalVars.p2Score = 0;
        }
    }
}