export class WSConnect {
    private _tagName: string = "";
    private _bSsl: boolean = false;
    private _hostUrl: string = null;
    private _socket: WebSocket = null;

    private _connecting: boolean = false;
    private _connected: boolean = false;

    private _connectHandler: Function = null;
    private _connectErrorHandler: Function = null;
    private _msgHandler: Function = null;

    public constructor(tagName: string, bSsl: boolean) {
        this._tagName = tagName;
        this._bSsl = bSsl;
    }

    private initSocket() {
        if (!this._hostUrl) {
            return;
        }

        this._socket = new WebSocket(this._hostUrl);

        this._socket.binaryType = 'arraybuffer';
        this._connecting = true;

        this._socket.onopen = (event: Event) => { 
            this._connecting = false;
            this._connected = true;

            console.log(`${this.tagPrefix()} connect to server ok!`);

            this.onConnectSuccess();
        };

        this._socket.onmessage = (event: MessageEvent) => { 
            //console.log(`${this.tagPrefix()} onmessage ${event}`);
            let recvData = event.data
            this.onMessage(recvData);
        };

        this._socket.onerror = (event: Event) => { 
            console.error(`${this.tagPrefix()} onError from[${this._hostUrl}]`);

            if (this._connecting) {
                this.onConnectFailed();
            }
            else {
                this.onConnectError();
            }

            this.clearSocket();
        };

        this._socket.onclose = (event: CloseEvent) => {
            console.info(`${this.tagPrefix()} onClose from[${this._hostUrl}]`);
            
            if (this._connecting) {
                this.onConnectFailed();
            }
            else {
                this.onConnectError();
            }

            this.clearSocket();
        };
    }

    public clearSocket() {
        if (this._socket) {
            this._socket.onmessage = () => { };
            this._socket.onerror = () => { };
            this._socket.onclose = () => { };

            if (this._connecting) {
                let temp = this._socket;
                temp.onopen = () => {
                    temp.close();
                }
            }
            else {
                this._socket.onopen = () => { };
                this._socket.close();
            }
        }

        this._hostUrl = null;
        this._socket = null;

        this._connecting = false;
        this._connected = false;

        this._connectHandler = null;
        //this._connectErrorHandler = null;
    }

    public setSocketErrorHandler(handler: Function) {
        this._connectErrorHandler = handler;
    }

    public connect(ip: string, port: number, conHandler: Function) {
        if (ip && port != null) {
            let head = this._bSsl ? "wss" : "ws";
            this._hostUrl = `${head}://${ip}:${port}`;
        }

        this._connectHandler = conHandler;

        if (!this._socket) {
            this.initSocket();
        }
        else {
            console.error(this.tagPrefix() + "connect error, _socket aleady exist!");
            this.onConnectError();
        }
    }

    public disconnect() {
        this.clearSocket();
    }

    public sendData(data: ArrayBuffer) {
        if (this._socket) {
            this._socket.send(data);
        }
    }

    private onConnectSuccess() {
        if (this._connectHandler) {
            this._connectHandler(true);
        }
    }

    private onConnectFailed() {
        if (this._connectHandler) {
            this._connectHandler(false);
        }
    }

    private onConnectError() {
        if (this._connectErrorHandler) {
            this._connectErrorHandler();
        }
    }

    public tagPrefix(): string {
        let date = new Date()
        return `[Net${this._tagName}][${date.toLocaleTimeString()}]`;
    }

    private onMessage(data) {
        if (this._msgHandler) {
            this._msgHandler(data);
        }
    }

    public setMessageHandler(handler: Function) {
        this._msgHandler = handler;
    }

    public isConnected(): boolean {
        return this._connected;
    }

    public isConnecting(): boolean {
        return this._connecting;
    }
};