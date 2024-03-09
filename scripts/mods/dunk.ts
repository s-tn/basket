declare const window: Global & typeof globalThis;
declare const c3_runtimeInterface: C3_runtimeInterface;

import enumerate from "./enumerate";

export default function dunk(menu: ModMenu) {
    let isDunking = false;

    menu.basketLoading?.then(() => setInterval(() => {
        if (isDunking) {
            return;
        }

        let ball = window.ball;
        let dunkingX = 0;
        let dunkingY = 0;
        let headX = 0;
        let headY = 0;
    
        function dunk(index: number) {
            console.log("body" + (index === 0 ? "" : index));
            var ball = window.ball;
            var player = c3_runtimeInterface._localRuntime._iRuntime.objects["body" + (index === 0 ? "" : index + 1)].getAllInstances()[0];
            var head = c3_runtimeInterface._localRuntime._iRuntime.objects["head" + (index === 0 ? "" : index + 1)].getAllInstances()[0];
            // var arm = c3_runtimeInterface._localRuntime._iRuntime.objects["arm" + (index === 0 ? "" : index)].getAllInstances()[0];
            dunkingX = player.x;
            dunkingY = player.y + 10;
            headX = head.x;
            headY = head.y + 10;
    
            let intervals = 0;

            menu.dropBallForce().then(() => {
                ball.x = 57;
                ball.y -= 5;

                ball.behaviors.Physics.setVelocity(0, -50)

                let int = setInterval(() => {
                    intervals ++;
        
                    //player.x = dunkingX;
                    //player.y = dunkingY;
                    //head.x = headX;
                    //head.y = headY;
        
                    if (intervals >= 500) {
                        clearInterval(int);

                        //ball.x = 57;
                        //ball.y = 70;

                        setTimeout(() => {
                            isDunking = false;
                        }, 750);
                    }
                });
            });
        }
    
        for (var [i, head] of enumerate(window.heads)) {
            if (i === 0 || i === 1) {
                if (ball.instVars.who === (i === 0 ? 0 : i + 1)) {
                    if (head.x < 75 && head.y > 65 && head.y < 90 && head.x > 50) {
                        isDunking = true;

                        dunk(i);
                    }
                }
            }
    
            if (i === 2 || i === 3) {
                if (ball.instVars.who === (i === 0 ? 0 : i + 1)) {
                    if (head.x > 225 && head.y > 75 && head.y < 80 && head.x < 245) {
                        isDunking = true;

                        dunk(i);
                    }
                }
            }
        }
    }, 0));
    
}