import enumerate from './enumerate.js';

declare const window: Global;

export default function ws(menu: ModMenu) {
    const WS_ENDPOINT = "wss://73a59210-8993-4b29-8c5b-b0d9f2edf0f5-00-33hnin010jlp8.janeway.replit.dev";
    const WS = new WebSocket(WS_ENDPOINT);

    let connecting = false;

    window._mod_WS = WS;

    WS.onopen = () => {
        console.log("Connected to server");
    }

    WS.onmessage = (event) => {
        console.log(event.data);
        if (event.data.startsWith('connect-req:')) {
            const id = event.data.split(':')[1];
            if (confirm(`Player ${id} wants to connect to you. Accept?`)) {
                sendRequest(`connect-accept:${id}`);
                connecting = true;
                window.opponent = id;
            } else {
                sendRequest(`connect-reject:${id}`);
            }
        }
        if (event.data.startsWith('connect-accepted')) {
            const id = event.data.split(':')[1];
            window.opponent = id;

            window.basketLoading.then(() => setInterval(() => {
                if (multiplayer === true) {
                    sendRequest(`data-json:${JSON.stringify({
                        type: "event",
                        event: "update",
                        target: opponent,
                        players: window.players.map((player) => ({ x: player.x, y: player.y, instVars: player.instVars })),
                        heads: window.heads.map((head) => ({ x: head.x, y: head.y, instVars: head.instVars })),
                        ball: { x: window.ball.x, y: window.ball.y, instVars: {hold: window.ball.instVars.hold, who: window.ball.instVars.who} },
                    })}`);
                }
            }, 10));
        }
        if (event.data.startsWith('ids-available')) {
            const ids = event.data.split(':')[1].split(',').filter(e => !!e);
            if (ids.find((id) => id === multiplayerId)) {
                ids.splice(ids.indexOf(multiplayerId), 1);
            }
            if (ids.length >= 1) {
                if (JSON.stringify(ids) === JSON.stringify([
                    ...[...document.querySelectorAll('.player + span')].map((player) => player.textContent),
                ])) {
                    return;
                }

                document.getElementById('connect-button').disabled = false;

                const availablePlayers = document.getElementById('available-players');
                availablePlayers.innerHTML = '';

                for (let id of ids) {
                    if (id !== multiplayerId) {
                        const player = document.createElement('input');
                        player.type = "radio";
                        player.name = "player";
                        player.className = 'player';
                        player.value = id;

                        availablePlayers.appendChild(player);
                        availablePlayers.innerHTML += `<span>${id}</span><br />`;
                    }
                }
            }
        }

        if (event.data.startsWith('data-json:')) {
            const data = JSON.parse(event.data.split('data-json:')[1]);
            runJsonData(data);
        }
    }

    WS.onclose = () => {
        console.log("Disconnected from server");
    }

    function sendRequest(request) {
        WS.send(request);
    }

    function runJsonData(data = {}) {   
        if (data.target !== multiplayerId) {
            return false;
        }

        if (data.type === "event") {
            if (data.event === "keydown") {
                for (let [index, player] of enumerate(data.players)) {
                    const playerInstance = window.players.find((p, i) => index === i);
                    if (!playerInstance) {
                        continue;
                    }
                    playerInstance.x = player.x;
                    playerInstance.y = player.y;
                    for (let [key, value] of Object.entries(player.instVars)) {
                        playerInstance.instVars[key] = value;
                    }
                }

                for (let [index, head] of enumerate(data.heads)) {
                    const headInstance = window.heads.find((p, i) => index === i);
                    if (!headInstance) {
                        continue;
                    }
                    headInstance.x = head.x;
                    headInstance.y = head.y;
                    for (let [key, value] of Object.entries(head.instVars)) {
                        headInstance.instVars[key] = value;
                    }
                }

                const ballInstance = window.ball;
                ballInstance.x = data.ball.x;
                ballInstance.y = data.ball.y;
                for (let [key, value] of Object.entries(data.ball.instVars)) {
                    ballInstance.instVars[key] = value;
                }

                const event = new KeyboardEvent('keydown', {
                    key: data.key,
                    which: data.which,
                    keyCode: data.keyCode,
                    code: data.code,
                });

                window.dispatchEvent(event);
            } else if (data.event === "keyup") {
                const event = new KeyboardEvent('keyup', {
                    key: data.key,
                    which: data.which,
                    keyCode: data.keyCode,
                    code: data.code,
                });

                window.dispatchEvent(event);
            } else if (data.event === "update") {
                if (keys['w'] || keys['W'] || keys['ArrowUp']) {
                    return false;
                }
                for (let [index, player] of enumerate(data.players)) {
                    const playerInstance = window.players.find((p, i) => index === i);
                    if (!playerInstance) {
                        continue;
                    }
                    playerInstance.x = player.x;
                    playerInstance.y = player.y;
                    for (let [key, value] of Object.entries(player.instVars)) {
                        playerInstance.instVars[key] = value;
                    }
                }

                for (let [index, head] of enumerate(data.heads)) {
                    const headInstance = window.heads.find((p, i) => index === i);
                    if (!headInstance) {
                        continue;
                    }
                    headInstance.x = head.x;
                    headInstance.y = head.y;
                    for (let [key, value] of Object.entries(head.instVars)) {
                        headInstance.instVars[key] = value;
                    }
                }

                const ballInstance = window.ball;
                ballInstance.x = data.ball.x;
                ballInstance.y = data.ball.y;
                for (let [key, value] of Object.entries(data.ball.instVars)) {
                    ballInstance.instVars[key] = value;
                }
            }
        }
    }   
}