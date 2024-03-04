interface Global {
    _mod_WS: WebSocket;
    opponent: string;
    basketLoading: Promise<void>;
    multiplayer: boolean;
    players: any[];
    heads: any[];
    ball: any;
    multiplayerId: string;
    sendRequest: (message: string) => void;
    connecting: boolean;
    document: Document;
    setInterval: (callback: () => void, ms: number) => number;
    clearInterval: (id: number) => void;
    confirm: (message: string) => boolean;
    JSON: {
        stringify: (obj: any) => string;
    };
}

interface ModMenu {
    multiplayer: boolean;
    ws: WebSocket;
    opponent: string;
    basketLoading: Promise<void>;
    players: any[];
    heads: any[];
    ball: any;
    multiplayerId: string;
    sendRequest: (message: string) => void;
    connecting: boolean;
    document: Document;
}