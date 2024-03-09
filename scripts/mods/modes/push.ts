import enumerate from "../enumerate";

declare const window: Global & typeof globalThis;
declare const c3_runtimeInterface: C3_runtimeInterface;

let pushingInt: number = 100000;

export default function mode(menu: ModMenu) {
    async function enablePushing() {
        await window.basketLoading;

        if (menu.pushing === true) {
            window.ball.x = 1000;
            clearInterval(pushingInt);
            return menu.pushing = false;
        }

        menu.pushing = true;

        window.ball.y = 0;

        pushingInt = setInterval(() => {
            window.ball.y = 0;

            for (var [i1, i2, i3, i4] of [
                [...c3_runtimeInterface._localRuntime._iRuntime.objects.body.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body2.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body3.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body4.getAllInstances()], 
            ]) {
                for (var [index, body] of enumerate([i1, i2, i3, i4])) {
                    switch(index) {
                        case 2:
                        case 3:
                            if (body.x > 240) {
                                clearInterval(pushingInt);
                                window.ball.x = 230;
                                window.ball.y = 60;
                            }
                            break;
                    }
                }
            }
        }, 30);

        menu.setGravity(8);
    };

    const pushButton = menu.content.querySelector('#activate-push') as HTMLButtonElement & CustomEventTarget;

    pushButton._nativeEventListener('click', () => {
        enablePushing();
    });

    return enablePushing;
}