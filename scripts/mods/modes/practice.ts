declare const window: Global & typeof globalThis;
declare const c3_runtimeInterface: C3_runtimeInterface;

export default function mode(menu: ModMenu) {
    function resetPractice() {
        var player = c3_runtimeInterface._localRuntime._iRuntime.objects["body" + (menu.practicePlayer === 1 ? "" : menu.practicePlayer)].getAllInstances()[0];
        var head = c3_runtimeInterface._localRuntime._iRuntime.objects["head" + (menu.practicePlayer === 1 ? "" : menu.practicePlayer)].getAllInstances()[0];

        player.x = resetX();
        player.y = 136;
        player.instVars.angular = 0;
        player.instVars.angle = 0;
        player.instVars.degreeAngle = 0;

        head.x = resetX();
        head.y = 136;
        head.instVars.angular = 0;
        head.instVars.angle = 0;
        head.instVars.degreeAngle = 0;

        menu.giveBall(menu.practicePlayer);
    }

    async function practiceMode() {
        await window.basketLoading;

        menu.dropBall();
        if (menu.practicing === false) {
            //c3_runtimeInterface._localRuntime._iRuntime.objects.balls.getAllInstances()[0]?.destroy();
        }
        menu.practicing = true;

        var bodies = [
            c3_runtimeInterface._localRuntime._iRuntime.objects.body.getAllInstances()[0],
            c3_runtimeInterface._localRuntime._iRuntime.objects.body2.getAllInstances()[0],
            c3_runtimeInterface._localRuntime._iRuntime.objects.body3.getAllInstances()[0],
            c3_runtimeInterface._localRuntime._iRuntime.objects.body4.getAllInstances()[0],
        ].filter(body => body !== c3_runtimeInterface._localRuntime._iRuntime.objects["body" + (menu.practicePlayer === 1 ? "" : menu.practicePlayer)].getAllInstances()[0]);

        var heads = [
            c3_runtimeInterface._localRuntime._iRuntime.objects.head.getAllInstances()[0],
            c3_runtimeInterface._localRuntime._iRuntime.objects.head2.getAllInstances()[0],
            c3_runtimeInterface._localRuntime._iRuntime.objects.head3.getAllInstances()[0],
            c3_runtimeInterface._localRuntime._iRuntime.objects.head4.getAllInstances()[0],
        ].filter(head => head !== c3_runtimeInterface._localRuntime._iRuntime.objects["head" + (menu.practicePlayer === 1 ? "" : menu.practicePlayer)].getAllInstances()[0]);

        for (var [i1, i2, i3, i4] of [bodies, heads]) {
            i1.instVars._x = i1.x;
            i1.instVars._y = i1.y;
            i1.instVars._angle = i1.angle;
            i1.instVars._angular = i1.instVars.angular;
        
            i2.instVars._x = i2.x;
            i2.instVars._y = i2.y;
            i2.instVars._angle = i2.angle;
            i2.instVars._angular = i2.instVars.angular;

            i3.instVars._x = i3.x;
            i3.instVars._y = i3.y;
            i3.instVars._angle = i3.angle;
            i3.instVars._angular = i3.instVars.angular;

            i1.x = 1000;
            i2.x = 1000;
            i3.x = 1000;
        }

        var player = c3_runtimeInterface._localRuntime._iRuntime.objects["body" + (menu.practicePlayer === 1 ? "" : menu.practicePlayer)].getAllInstances()[0];
        // var head = c3_runtimeInterface._localRuntime._iRuntime.objects["head" + (practicePlayer === 1 ? "" : practicePlayer)].getAllInstances()[0];

        player.instVars._x = player.x;
        player.instVars._y = player.y;
        player.instVars._angle = player.angle;
        player.instVars._angular = player.instVars.angular;

        menu.giveBall(menu.practicePlayer);
    }

    var resetX = () => {
        switch(menu.practicePlayer) {
            case 1:
                return 125;
            case 2:
                return 210;
            case 3:
                return 175;
            case 4:
                return 100;
        }
    }

    window._nativeEventListener('keypress', (event) => {
        if (!menu.practicing) {
            return;
        }

        if ((event as KeyboardEvent).key === "b") {
            menu.giveBall(menu.practicePlayer);
        }

        if ((event as KeyboardEvent).key === "r") {
            menu.giveBall(menu.practicePlayer);
            var player = c3_runtimeInterface._localRuntime._iRuntime.objects["body" + (menu.practicePlayer === 1 ? "" : menu.practicePlayer)].getAllInstances()[0];
            var head = c3_runtimeInterface._localRuntime._iRuntime.objects["head" + (menu.practicePlayer === 1 ? "" : menu.practicePlayer)].getAllInstances()[0];

            player.x = resetX();
            player.y = 136;
            player.instVars.angular = 0;
            player.instVars.angle = 0;
            player.instVars.degreeAngle = 0;

            head.x = resetX();
            head.y = 136;
            head.instVars.angular = 0;
            head.instVars.angle = 0;
            head.instVars.degreeAngle = 0;
        }
    });
}