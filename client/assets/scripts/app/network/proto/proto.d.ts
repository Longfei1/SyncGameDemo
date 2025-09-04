import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace gameconfig. */
export namespace gameconfig {

    /** SyncMode enum. */
    enum SyncMode {
        SM_FRAME = 0,
        SM_STATE = 1
    }

    /** Properties of a PositionInfo. */
    interface IPositionInfo {

        /** PositionInfo x */
        x?: (number|null);

        /** PositionInfo y */
        y?: (number|null);
    }

    /** Represents a PositionInfo. */
    class PositionInfo implements IPositionInfo {

        /**
         * Constructs a new PositionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameconfig.IPositionInfo);

        /** PositionInfo x. */
        public x: number;

        /** PositionInfo y. */
        public y: number;

        /**
         * Creates a new PositionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PositionInfo instance
         */
        public static create(properties?: gameconfig.IPositionInfo): gameconfig.PositionInfo;

        /**
         * Encodes the specified PositionInfo message. Does not implicitly {@link gameconfig.PositionInfo.verify|verify} messages.
         * @param message PositionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameconfig.IPositionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PositionInfo message, length delimited. Does not implicitly {@link gameconfig.PositionInfo.verify|verify} messages.
         * @param message PositionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameconfig.IPositionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PositionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PositionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameconfig.PositionInfo;

        /**
         * Decodes a PositionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PositionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameconfig.PositionInfo;

        /**
         * Verifies a PositionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PositionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PositionInfo
         */
        public static fromObject(object: { [k: string]: any }): gameconfig.PositionInfo;

        /**
         * Creates a plain object from a PositionInfo message. Also converts values to other types if specified.
         * @param message PositionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameconfig.PositionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PositionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PositionInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ColorInfo. */
    interface IColorInfo {

        /** ColorInfo r */
        r?: (number|null);

        /** ColorInfo g */
        g?: (number|null);

        /** ColorInfo b */
        b?: (number|null);
    }

    /** Represents a ColorInfo. */
    class ColorInfo implements IColorInfo {

        /**
         * Constructs a new ColorInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameconfig.IColorInfo);

        /** ColorInfo r. */
        public r: number;

        /** ColorInfo g. */
        public g: number;

        /** ColorInfo b. */
        public b: number;

        /**
         * Creates a new ColorInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ColorInfo instance
         */
        public static create(properties?: gameconfig.IColorInfo): gameconfig.ColorInfo;

        /**
         * Encodes the specified ColorInfo message. Does not implicitly {@link gameconfig.ColorInfo.verify|verify} messages.
         * @param message ColorInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameconfig.IColorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ColorInfo message, length delimited. Does not implicitly {@link gameconfig.ColorInfo.verify|verify} messages.
         * @param message ColorInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameconfig.IColorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ColorInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ColorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameconfig.ColorInfo;

        /**
         * Decodes a ColorInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ColorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameconfig.ColorInfo;

        /**
         * Verifies a ColorInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ColorInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ColorInfo
         */
        public static fromObject(object: { [k: string]: any }): gameconfig.ColorInfo;

        /**
         * Creates a plain object from a ColorInfo message. Also converts values to other types if specified.
         * @param message ColorInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameconfig.ColorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ColorInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ColorInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameConfig. */
    interface IGameConfig {

        /** GameConfig maxPlayerCount */
        maxPlayerCount?: (number|null);

        /** GameConfig mode */
        mode?: (gameconfig.SyncMode|null);

        /** GameConfig frameCount */
        frameCount?: (number|null);

        /** GameConfig mapWidth */
        mapWidth?: (number|null);

        /** GameConfig mapHeight */
        mapHeight?: (number|null);

        /** GameConfig playerWidth */
        playerWidth?: (number|null);

        /** GameConfig playerHeight */
        playerHeight?: (number|null);

        /** GameConfig playerSpeed */
        playerSpeed?: (number|null);

        /** GameConfig playerPos */
        playerPos?: (gameconfig.IPositionInfo[]|null);

        /** GameConfig playerColor */
        playerColor?: (gameconfig.IColorInfo[]|null);

        /** GameConfig prediction */
        prediction?: (boolean|null);
    }

    /** Represents a GameConfig. */
    class GameConfig implements IGameConfig {

        /**
         * Constructs a new GameConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameconfig.IGameConfig);

        /** GameConfig maxPlayerCount. */
        public maxPlayerCount: number;

        /** GameConfig mode. */
        public mode: gameconfig.SyncMode;

        /** GameConfig frameCount. */
        public frameCount: number;

        /** GameConfig mapWidth. */
        public mapWidth: number;

        /** GameConfig mapHeight. */
        public mapHeight: number;

        /** GameConfig playerWidth. */
        public playerWidth: number;

        /** GameConfig playerHeight. */
        public playerHeight: number;

        /** GameConfig playerSpeed. */
        public playerSpeed: number;

        /** GameConfig playerPos. */
        public playerPos: gameconfig.IPositionInfo[];

        /** GameConfig playerColor. */
        public playerColor: gameconfig.IColorInfo[];

        /** GameConfig prediction. */
        public prediction: boolean;

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameConfig instance
         */
        public static create(properties?: gameconfig.IGameConfig): gameconfig.GameConfig;

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link gameconfig.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameconfig.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link gameconfig.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameconfig.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameconfig.GameConfig;

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameconfig.GameConfig;

        /**
         * Verifies a GameConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameConfig
         */
        public static fromObject(object: { [k: string]: any }): gameconfig.GameConfig;

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @param message GameConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameconfig.GameConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace msg. */
export namespace msg {

    /** MsgId enum. */
    enum MsgId {
        MID_NULL = 0,
        MID_REQ_CONNECT_PLUSE = 10001,
        MID_RSP_CONNECT_PLUSE = 20001,
        MID_REQ_JOIN = 11001,
        MID_RSP_JOIN = 21001,
        MID_REQ_QUIT = 11002,
        MID_RSP_QUIT = 21002,
        MID_REQ_OPERATE = 11003,
        MID_RSP_OPERATE = 21003,
        MID_NTF_JOIN = 50001,
        MID_NTF_QUIT = 50002,
        MID_NTF_GAME_START = 50003,
        MID_NTF_GAME_END = 50004,
        MID_NTF_OPERATE = 51005
    }

    /** StatusCode enum. */
    enum StatusCode {
        SC_SUCCESS = 0,
        SC_FAILED = 1,
        SC_PARAM_ERROR = 2,
        SC_CONFIG_ERROR = 3,
        SC_ALEADY_IN_ROOM = 1000,
        SC_ROOM_FULL = 1001
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo playerId */
        playerId?: (number|Long|null);

        /** PlayerInfo playerNo */
        playerNo?: (number|null);

        /** PlayerInfo pos */
        pos?: (gameconfig.IPositionInfo|null);

        /** PlayerInfo color */
        color?: (gameconfig.IColorInfo|null);

        /** PlayerInfo moveDir */
        moveDir?: (msg.OperateDir|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPlayerInfo);

        /** PlayerInfo playerId. */
        public playerId: (number|Long);

        /** PlayerInfo playerNo. */
        public playerNo: number;

        /** PlayerInfo pos. */
        public pos?: (gameconfig.IPositionInfo|null);

        /** PlayerInfo color. */
        public color?: (gameconfig.IColorInfo|null);

        /** PlayerInfo moveDir. */
        public moveDir: msg.OperateDir;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: msg.IPlayerInfo): msg.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link msg.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link msg.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommonReq. */
    interface ICommonReq {
    }

    /** Represents a CommonReq. */
    class CommonReq implements ICommonReq {

        /**
         * Constructs a new CommonReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICommonReq);

        /**
         * Creates a new CommonReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonReq instance
         */
        public static create(properties?: msg.ICommonReq): msg.CommonReq;

        /**
         * Encodes the specified CommonReq message. Does not implicitly {@link msg.CommonReq.verify|verify} messages.
         * @param message CommonReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICommonReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonReq message, length delimited. Does not implicitly {@link msg.CommonReq.verify|verify} messages.
         * @param message CommonReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICommonReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CommonReq;

        /**
         * Decodes a CommonReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CommonReq;

        /**
         * Verifies a CommonReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonReq
         */
        public static fromObject(object: { [k: string]: any }): msg.CommonReq;

        /**
         * Creates a plain object from a CommonReq message. Also converts values to other types if specified.
         * @param message CommonReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CommonReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommonReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CommonRsp. */
    interface ICommonRsp {
    }

    /** Represents a CommonRsp. */
    class CommonRsp implements ICommonRsp {

        /**
         * Constructs a new CommonRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICommonRsp);

        /**
         * Creates a new CommonRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonRsp instance
         */
        public static create(properties?: msg.ICommonRsp): msg.CommonRsp;

        /**
         * Encodes the specified CommonRsp message. Does not implicitly {@link msg.CommonRsp.verify|verify} messages.
         * @param message CommonRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICommonRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonRsp message, length delimited. Does not implicitly {@link msg.CommonRsp.verify|verify} messages.
         * @param message CommonRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICommonRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CommonRsp;

        /**
         * Decodes a CommonRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CommonRsp;

        /**
         * Verifies a CommonRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonRsp
         */
        public static fromObject(object: { [k: string]: any }): msg.CommonRsp;

        /**
         * Creates a plain object from a CommonRsp message. Also converts values to other types if specified.
         * @param message CommonRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CommonRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommonRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinReq. */
    interface IJoinReq {
    }

    /** Represents a JoinReq. */
    class JoinReq implements IJoinReq {

        /**
         * Constructs a new JoinReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinReq);

        /**
         * Creates a new JoinReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinReq instance
         */
        public static create(properties?: msg.IJoinReq): msg.JoinReq;

        /**
         * Encodes the specified JoinReq message. Does not implicitly {@link msg.JoinReq.verify|verify} messages.
         * @param message JoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link msg.JoinReq.verify|verify} messages.
         * @param message JoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinReq;

        /**
         * Decodes a JoinReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinReq;

        /**
         * Verifies a JoinReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinReq
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinReq;

        /**
         * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
         * @param message JoinReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinRsp. */
    interface IJoinRsp {

        /** JoinRsp gameCfg */
        gameCfg?: (gameconfig.IGameConfig|null);

        /** JoinRsp roomId */
        roomId?: (number|Long|null);

        /** JoinRsp myPlayerId */
        myPlayerId?: (number|Long|null);

        /** JoinRsp players */
        players?: (msg.IPlayerInfo[]|null);
    }

    /** Represents a JoinRsp. */
    class JoinRsp implements IJoinRsp {

        /**
         * Constructs a new JoinRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinRsp);

        /** JoinRsp gameCfg. */
        public gameCfg?: (gameconfig.IGameConfig|null);

        /** JoinRsp roomId. */
        public roomId: (number|Long);

        /** JoinRsp myPlayerId. */
        public myPlayerId: (number|Long);

        /** JoinRsp players. */
        public players: msg.IPlayerInfo[];

        /**
         * Creates a new JoinRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRsp instance
         */
        public static create(properties?: msg.IJoinRsp): msg.JoinRsp;

        /**
         * Encodes the specified JoinRsp message. Does not implicitly {@link msg.JoinRsp.verify|verify} messages.
         * @param message JoinRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRsp message, length delimited. Does not implicitly {@link msg.JoinRsp.verify|verify} messages.
         * @param message JoinRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinRsp;

        /**
         * Decodes a JoinRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinRsp;

        /**
         * Verifies a JoinRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRsp
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinRsp;

        /**
         * Creates a plain object from a JoinRsp message. Also converts values to other types if specified.
         * @param message JoinRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JoinNtf. */
    interface IJoinNtf {

        /** JoinNtf player */
        player?: (msg.IPlayerInfo|null);
    }

    /** Represents a JoinNtf. */
    class JoinNtf implements IJoinNtf {

        /**
         * Constructs a new JoinNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IJoinNtf);

        /** JoinNtf player. */
        public player?: (msg.IPlayerInfo|null);

        /**
         * Creates a new JoinNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinNtf instance
         */
        public static create(properties?: msg.IJoinNtf): msg.JoinNtf;

        /**
         * Encodes the specified JoinNtf message. Does not implicitly {@link msg.JoinNtf.verify|verify} messages.
         * @param message JoinNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IJoinNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinNtf message, length delimited. Does not implicitly {@link msg.JoinNtf.verify|verify} messages.
         * @param message JoinNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IJoinNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.JoinNtf;

        /**
         * Decodes a JoinNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.JoinNtf;

        /**
         * Verifies a JoinNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinNtf
         */
        public static fromObject(object: { [k: string]: any }): msg.JoinNtf;

        /**
         * Creates a plain object from a JoinNtf message. Also converts values to other types if specified.
         * @param message JoinNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.JoinNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QuitReq. */
    interface IQuitReq {
    }

    /** Represents a QuitReq. */
    class QuitReq implements IQuitReq {

        /**
         * Constructs a new QuitReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitReq);

        /**
         * Creates a new QuitReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitReq instance
         */
        public static create(properties?: msg.IQuitReq): msg.QuitReq;

        /**
         * Encodes the specified QuitReq message. Does not implicitly {@link msg.QuitReq.verify|verify} messages.
         * @param message QuitReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitReq message, length delimited. Does not implicitly {@link msg.QuitReq.verify|verify} messages.
         * @param message QuitReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitReq;

        /**
         * Decodes a QuitReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitReq;

        /**
         * Verifies a QuitReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitReq
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitReq;

        /**
         * Creates a plain object from a QuitReq message. Also converts values to other types if specified.
         * @param message QuitReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QuitReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QuitRsp. */
    interface IQuitRsp {
    }

    /** Represents a QuitRsp. */
    class QuitRsp implements IQuitRsp {

        /**
         * Constructs a new QuitRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitRsp);

        /**
         * Creates a new QuitRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitRsp instance
         */
        public static create(properties?: msg.IQuitRsp): msg.QuitRsp;

        /**
         * Encodes the specified QuitRsp message. Does not implicitly {@link msg.QuitRsp.verify|verify} messages.
         * @param message QuitRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitRsp message, length delimited. Does not implicitly {@link msg.QuitRsp.verify|verify} messages.
         * @param message QuitRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitRsp;

        /**
         * Decodes a QuitRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitRsp;

        /**
         * Verifies a QuitRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitRsp
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitRsp;

        /**
         * Creates a plain object from a QuitRsp message. Also converts values to other types if specified.
         * @param message QuitRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QuitRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QuitNtf. */
    interface IQuitNtf {

        /** QuitNtf playerId */
        playerId?: (number|Long|null);
    }

    /** Represents a QuitNtf. */
    class QuitNtf implements IQuitNtf {

        /**
         * Constructs a new QuitNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IQuitNtf);

        /** QuitNtf playerId. */
        public playerId: (number|Long);

        /**
         * Creates a new QuitNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitNtf instance
         */
        public static create(properties?: msg.IQuitNtf): msg.QuitNtf;

        /**
         * Encodes the specified QuitNtf message. Does not implicitly {@link msg.QuitNtf.verify|verify} messages.
         * @param message QuitNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IQuitNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitNtf message, length delimited. Does not implicitly {@link msg.QuitNtf.verify|verify} messages.
         * @param message QuitNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IQuitNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.QuitNtf;

        /**
         * Decodes a QuitNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.QuitNtf;

        /**
         * Verifies a QuitNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitNtf
         */
        public static fromObject(object: { [k: string]: any }): msg.QuitNtf;

        /**
         * Creates a plain object from a QuitNtf message. Also converts values to other types if specified.
         * @param message QuitNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.QuitNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QuitNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameStartNtf. */
    interface IGameStartNtf {
    }

    /** Represents a GameStartNtf. */
    class GameStartNtf implements IGameStartNtf {

        /**
         * Constructs a new GameStartNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGameStartNtf);

        /**
         * Creates a new GameStartNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStartNtf instance
         */
        public static create(properties?: msg.IGameStartNtf): msg.GameStartNtf;

        /**
         * Encodes the specified GameStartNtf message. Does not implicitly {@link msg.GameStartNtf.verify|verify} messages.
         * @param message GameStartNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGameStartNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStartNtf message, length delimited. Does not implicitly {@link msg.GameStartNtf.verify|verify} messages.
         * @param message GameStartNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGameStartNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStartNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GameStartNtf;

        /**
         * Decodes a GameStartNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GameStartNtf;

        /**
         * Verifies a GameStartNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStartNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStartNtf
         */
        public static fromObject(object: { [k: string]: any }): msg.GameStartNtf;

        /**
         * Creates a plain object from a GameStartNtf message. Also converts values to other types if specified.
         * @param message GameStartNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GameStartNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStartNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameStartNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameEndNtf. */
    interface IGameEndNtf {
    }

    /** Represents a GameEndNtf. */
    class GameEndNtf implements IGameEndNtf {

        /**
         * Constructs a new GameEndNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IGameEndNtf);

        /**
         * Creates a new GameEndNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameEndNtf instance
         */
        public static create(properties?: msg.IGameEndNtf): msg.GameEndNtf;

        /**
         * Encodes the specified GameEndNtf message. Does not implicitly {@link msg.GameEndNtf.verify|verify} messages.
         * @param message GameEndNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IGameEndNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameEndNtf message, length delimited. Does not implicitly {@link msg.GameEndNtf.verify|verify} messages.
         * @param message GameEndNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IGameEndNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameEndNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameEndNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.GameEndNtf;

        /**
         * Decodes a GameEndNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameEndNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.GameEndNtf;

        /**
         * Verifies a GameEndNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameEndNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameEndNtf
         */
        public static fromObject(object: { [k: string]: any }): msg.GameEndNtf;

        /**
         * Creates a plain object from a GameEndNtf message. Also converts values to other types if specified.
         * @param message GameEndNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.GameEndNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameEndNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameEndNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** OperateDir enum. */
    enum OperateDir {
        OD_NULL = 0,
        OD_UP = 1,
        OD_DOWN = 2,
        OD_LEFT = 3,
        OD_RIGHT = 4
    }

    /** Properties of an OperateInfo. */
    interface IOperateInfo {

        /** OperateInfo playerId */
        playerId?: (number|Long|null);

        /** OperateInfo dir */
        dir?: (msg.OperateDir|null);
    }

    /** Represents an OperateInfo. */
    class OperateInfo implements IOperateInfo {

        /**
         * Constructs a new OperateInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IOperateInfo);

        /** OperateInfo playerId. */
        public playerId: (number|Long);

        /** OperateInfo dir. */
        public dir: msg.OperateDir;

        /**
         * Creates a new OperateInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperateInfo instance
         */
        public static create(properties?: msg.IOperateInfo): msg.OperateInfo;

        /**
         * Encodes the specified OperateInfo message. Does not implicitly {@link msg.OperateInfo.verify|verify} messages.
         * @param message OperateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IOperateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperateInfo message, length delimited. Does not implicitly {@link msg.OperateInfo.verify|verify} messages.
         * @param message OperateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IOperateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperateInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.OperateInfo;

        /**
         * Decodes an OperateInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.OperateInfo;

        /**
         * Verifies an OperateInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperateInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperateInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.OperateInfo;

        /**
         * Creates a plain object from an OperateInfo message. Also converts values to other types if specified.
         * @param message OperateInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.OperateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperateInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OperateInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OperateReq. */
    interface IOperateReq {

        /** OperateReq op */
        op?: (msg.IOperateInfo|null);
    }

    /** Represents an OperateReq. */
    class OperateReq implements IOperateReq {

        /**
         * Constructs a new OperateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IOperateReq);

        /** OperateReq op. */
        public op?: (msg.IOperateInfo|null);

        /**
         * Creates a new OperateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperateReq instance
         */
        public static create(properties?: msg.IOperateReq): msg.OperateReq;

        /**
         * Encodes the specified OperateReq message. Does not implicitly {@link msg.OperateReq.verify|verify} messages.
         * @param message OperateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IOperateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperateReq message, length delimited. Does not implicitly {@link msg.OperateReq.verify|verify} messages.
         * @param message OperateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IOperateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.OperateReq;

        /**
         * Decodes an OperateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.OperateReq;

        /**
         * Verifies an OperateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperateReq
         */
        public static fromObject(object: { [k: string]: any }): msg.OperateReq;

        /**
         * Creates a plain object from an OperateReq message. Also converts values to other types if specified.
         * @param message OperateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.OperateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OperateReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OperateRsp. */
    interface IOperateRsp {
    }

    /** Represents an OperateRsp. */
    class OperateRsp implements IOperateRsp {

        /**
         * Constructs a new OperateRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IOperateRsp);

        /**
         * Creates a new OperateRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperateRsp instance
         */
        public static create(properties?: msg.IOperateRsp): msg.OperateRsp;

        /**
         * Encodes the specified OperateRsp message. Does not implicitly {@link msg.OperateRsp.verify|verify} messages.
         * @param message OperateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IOperateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperateRsp message, length delimited. Does not implicitly {@link msg.OperateRsp.verify|verify} messages.
         * @param message OperateRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IOperateRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperateRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.OperateRsp;

        /**
         * Decodes an OperateRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.OperateRsp;

        /**
         * Verifies an OperateRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperateRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperateRsp
         */
        public static fromObject(object: { [k: string]: any }): msg.OperateRsp;

        /**
         * Creates a plain object from an OperateRsp message. Also converts values to other types if specified.
         * @param message OperateRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.OperateRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperateRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OperateRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OperateNtf. */
    interface IOperateNtf {

        /** OperateNtf frameNo */
        frameNo?: (number|Long|null);

        /** OperateNtf op */
        op?: (msg.IOperateInfo[]|null);
    }

    /** Represents an OperateNtf. */
    class OperateNtf implements IOperateNtf {

        /**
         * Constructs a new OperateNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IOperateNtf);

        /** OperateNtf frameNo. */
        public frameNo: (number|Long);

        /** OperateNtf op. */
        public op: msg.IOperateInfo[];

        /**
         * Creates a new OperateNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperateNtf instance
         */
        public static create(properties?: msg.IOperateNtf): msg.OperateNtf;

        /**
         * Encodes the specified OperateNtf message. Does not implicitly {@link msg.OperateNtf.verify|verify} messages.
         * @param message OperateNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IOperateNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperateNtf message, length delimited. Does not implicitly {@link msg.OperateNtf.verify|verify} messages.
         * @param message OperateNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IOperateNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperateNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperateNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.OperateNtf;

        /**
         * Decodes an OperateNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperateNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.OperateNtf;

        /**
         * Verifies an OperateNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperateNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperateNtf
         */
        public static fromObject(object: { [k: string]: any }): msg.OperateNtf;

        /**
         * Creates a plain object from an OperateNtf message. Also converts values to other types if specified.
         * @param message OperateNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.OperateNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperateNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OperateNtf
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BodyReq. */
    interface IBodyReq {

        /** BodyReq msgId */
        msgId?: (msg.MsgId|null);

        /** BodyReq seq */
        seq?: (number|Long|null);

        /** BodyReq needEcho */
        needEcho?: (boolean|null);

        /** BodyReq commonReq */
        commonReq?: (msg.ICommonReq|null);

        /** BodyReq joinReq */
        joinReq?: (msg.IJoinReq|null);

        /** BodyReq quitReq */
        quitReq?: (msg.IQuitReq|null);

        /** BodyReq operateReq */
        operateReq?: (msg.IOperateReq|null);
    }

    /** Represents a BodyReq. */
    class BodyReq implements IBodyReq {

        /**
         * Constructs a new BodyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IBodyReq);

        /** BodyReq msgId. */
        public msgId: msg.MsgId;

        /** BodyReq seq. */
        public seq: (number|Long);

        /** BodyReq needEcho. */
        public needEcho: boolean;

        /** BodyReq commonReq. */
        public commonReq?: (msg.ICommonReq|null);

        /** BodyReq joinReq. */
        public joinReq?: (msg.IJoinReq|null);

        /** BodyReq quitReq. */
        public quitReq?: (msg.IQuitReq|null);

        /** BodyReq operateReq. */
        public operateReq?: (msg.IOperateReq|null);

        /** BodyReq Body. */
        public Body?: ("commonReq"|"joinReq"|"quitReq"|"operateReq");

        /**
         * Creates a new BodyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BodyReq instance
         */
        public static create(properties?: msg.IBodyReq): msg.BodyReq;

        /**
         * Encodes the specified BodyReq message. Does not implicitly {@link msg.BodyReq.verify|verify} messages.
         * @param message BodyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IBodyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BodyReq message, length delimited. Does not implicitly {@link msg.BodyReq.verify|verify} messages.
         * @param message BodyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IBodyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BodyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BodyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.BodyReq;

        /**
         * Decodes a BodyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BodyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.BodyReq;

        /**
         * Verifies a BodyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BodyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BodyReq
         */
        public static fromObject(object: { [k: string]: any }): msg.BodyReq;

        /**
         * Creates a plain object from a BodyReq message. Also converts values to other types if specified.
         * @param message BodyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.BodyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BodyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BodyReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BodyRsp. */
    interface IBodyRsp {

        /** BodyRsp msgId */
        msgId?: (msg.MsgId|null);

        /** BodyRsp seq */
        seq?: (number|Long|null);

        /** BodyRsp status */
        status?: (msg.StatusCode|null);

        /** BodyRsp errorMsg */
        errorMsg?: (string|null);

        /** BodyRsp commonRsp */
        commonRsp?: (msg.ICommonRsp|null);

        /** BodyRsp joinRsp */
        joinRsp?: (msg.IJoinRsp|null);

        /** BodyRsp joinNtf */
        joinNtf?: (msg.IJoinNtf|null);

        /** BodyRsp quitRsp */
        quitRsp?: (msg.IQuitRsp|null);

        /** BodyRsp quitNtf */
        quitNtf?: (msg.IQuitNtf|null);

        /** BodyRsp gameStartNtf */
        gameStartNtf?: (msg.IGameStartNtf|null);

        /** BodyRsp gameEndNtf */
        gameEndNtf?: (msg.IGameEndNtf|null);

        /** BodyRsp operateRsp */
        operateRsp?: (msg.IOperateRsp|null);

        /** BodyRsp operateNtf */
        operateNtf?: (msg.IOperateNtf|null);
    }

    /** Represents a BodyRsp. */
    class BodyRsp implements IBodyRsp {

        /**
         * Constructs a new BodyRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IBodyRsp);

        /** BodyRsp msgId. */
        public msgId: msg.MsgId;

        /** BodyRsp seq. */
        public seq: (number|Long);

        /** BodyRsp status. */
        public status: msg.StatusCode;

        /** BodyRsp errorMsg. */
        public errorMsg: string;

        /** BodyRsp commonRsp. */
        public commonRsp?: (msg.ICommonRsp|null);

        /** BodyRsp joinRsp. */
        public joinRsp?: (msg.IJoinRsp|null);

        /** BodyRsp joinNtf. */
        public joinNtf?: (msg.IJoinNtf|null);

        /** BodyRsp quitRsp. */
        public quitRsp?: (msg.IQuitRsp|null);

        /** BodyRsp quitNtf. */
        public quitNtf?: (msg.IQuitNtf|null);

        /** BodyRsp gameStartNtf. */
        public gameStartNtf?: (msg.IGameStartNtf|null);

        /** BodyRsp gameEndNtf. */
        public gameEndNtf?: (msg.IGameEndNtf|null);

        /** BodyRsp operateRsp. */
        public operateRsp?: (msg.IOperateRsp|null);

        /** BodyRsp operateNtf. */
        public operateNtf?: (msg.IOperateNtf|null);

        /** BodyRsp Body. */
        public Body?: ("commonRsp"|"joinRsp"|"joinNtf"|"quitRsp"|"quitNtf"|"gameStartNtf"|"gameEndNtf"|"operateRsp"|"operateNtf");

        /**
         * Creates a new BodyRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BodyRsp instance
         */
        public static create(properties?: msg.IBodyRsp): msg.BodyRsp;

        /**
         * Encodes the specified BodyRsp message. Does not implicitly {@link msg.BodyRsp.verify|verify} messages.
         * @param message BodyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IBodyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BodyRsp message, length delimited. Does not implicitly {@link msg.BodyRsp.verify|verify} messages.
         * @param message BodyRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IBodyRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BodyRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BodyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.BodyRsp;

        /**
         * Decodes a BodyRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BodyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.BodyRsp;

        /**
         * Verifies a BodyRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BodyRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BodyRsp
         */
        public static fromObject(object: { [k: string]: any }): msg.BodyRsp;

        /**
         * Creates a plain object from a BodyRsp message. Also converts values to other types if specified.
         * @param message BodyRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.BodyRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BodyRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BodyRsp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
