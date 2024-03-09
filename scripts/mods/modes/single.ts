declare const window: Global & typeof globalThis;
declare const c3_runtimeInterface: C3_runtimeInterface;

export default function single(menu: ModMenu) {
    async function singlePlayer(isClick: boolean = true) {
        await window.basketLoading;
    
        menu.dropBall();
        menu.singleplayer = true;

        if (menu.singleplayer === true && isClick === true) {
            for (var [i1, _i2, i3, _i4] of [
                [...c3_runtimeInterface._localRuntime._iRuntime.objects.body.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body2.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body3.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body4.getAllInstances()], 
                [...c3_runtimeInterface._localRuntime._iRuntime.objects.head.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.head2.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.head3.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.head4.getAllInstances()
            ]]) {
                i1.x = i1.instVars._x;
                i1.y = i1.instVars._y;
                i1.angle = i1.instVars._angle;
                i1.instVars.angular = i1.instVars._angular;
    
                i3.x = i3.instVars._x;
                i3.y = i3.instVars._y;  
                i3.angle = i3.instVars._angle;
                i3.instVars.angular = i3.instVars._angular;
            }
    
            return menu.singleplayer = false;
        }
    
        for (var [i1, _i2, i3, _i4] of [
            [...c3_runtimeInterface._localRuntime._iRuntime.objects.body.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body2.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body3.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.body4.getAllInstances()], 
            [...c3_runtimeInterface._localRuntime._iRuntime.objects.head.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.head2.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.head3.getAllInstances(), ...c3_runtimeInterface._localRuntime._iRuntime.objects.head4.getAllInstances()
        ]]) {
            i1.instVars._x = i1.x;
            i1.instVars._y = i1.y;
            i1.instVars._angle = i1.angle;
            i1.instVars._angular = i1.instVars.angular;
    
            i3.instVars._x = i3.x;
            i3.instVars._y = i3.y;
            i3.instVars._angle = i3.angle;
            i3.instVars._angular = i3.instVars.angular;
    
            i1.x = 1000;
            i3.x = 1000;
        }
    }

    return singlePlayer;
}