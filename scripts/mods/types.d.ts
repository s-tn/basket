interface Global {
    _mod_WS: WebSocket;
    opponent: string;
    basketLoading: Promise<void>;
    AudioDOMHandler: any;
    multiplayer: boolean;
    players: any[];
    heads: any[];
    ball: any;
    multiplayerId: string;
    globalVars: any;
    sendRequest: (message: string) => void;
    connecting: boolean;
    document: Document;
    setInterval: (callback: () => void, ms: number) => number;
    clearInterval: (id: number) => void;
    confirm: (message: string) => boolean;
    JSON: {
        stringify: (obj: any) => string;
    };
    _nativeEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => void;
}

interface TabClipper {
    recorders: TabRecorder[];
    startCapturing: () => void;
    addRecorder: () => void;
    stopCapturing: () => void;
    saveClip: () => void;
}

interface ModMenu {
    multiplayer: boolean;
    practicing: boolean;
    pushing: boolean;
    singleplayer: boolean;
    ws?: WebSocket;
    opponent: string;
    basketLoading?: Promise<void>;
    resolveLoading: () => void;
    setGravity: Dispatch<number>;
    setScoreTarget: Dispatch<number>;
    players: any[];
    heads: any[];
    ball: any;
    globalVars: any;
    multiplayerId?: string;
    sendRequest?: (message: string) => void;
    getBeat?: (buffer: AudioBuffer) => Promise<object>;
    connecting?: boolean;
    clipper: TabClipper;
    practicePlayer: number;
    giveBall: (body: number) => void;
    dropBall: () => void;
    dropBallForce: () => Promise<void>;
    singlePlayer?: (click?: boolean) => void;
    practiceMode?: (click?: boolean) => void;
    pushMode?: (click?: boolean) => void;
    newGame: () => void;
    newRound: () => void;
    content: HTMLDivElement & CustomEventTarget;
    scoreTarget: number;
    scores: number[];
}

interface CustomEventTarget extends EventTarget {
    _nativeEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => void;
}

declare global {
    interface WindowEventMap {
        keydown: KeyboardEvent<HTMLInputElement>
    }
}

interface C3_runtimeInterface {
    _localRuntime: {
        _pluginManager: {
            _allBehaviors: any[];
        }
        _layoutManager: {
            _layouts: any[];
            _layoutsByName: Map<string, any>;
        }
        _iRuntime: {
            objects: {
                [key: string]: {
                    getAllInstances: () => any[];
                },
                balls: {
                    getAllInstances: () => any[];
                },
                body: {
                    getAllInstances: () => any[];
                },
                body2: {
                    getAllInstances: () => any[];
                },
                body3: {
                    getAllInstances: () => any[];
                },
                body4: {
                    getAllInstances: () => any[];
                },
                head: {
                    getAllInstances: () => any[];
                },
                head2: {
                    getAllInstances: () => any[];
                },
                head3: {
                    getAllInstances: () => any[];
                },
                head4: {
                    getAllInstances: () => any[];
                },
            },
            globalVars: any;
        }
    }
}