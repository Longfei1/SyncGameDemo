/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gameconfig = (function() {

    /**
     * Namespace gameconfig.
     * @exports gameconfig
     * @namespace
     */
    var gameconfig = {};

    /**
     * SyncMode enum.
     * @name gameconfig.SyncMode
     * @enum {number}
     * @property {number} SM_FRAME=0 SM_FRAME value
     * @property {number} SM_STATE=1 SM_STATE value
     */
    gameconfig.SyncMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SM_FRAME"] = 0;
        values[valuesById[1] = "SM_STATE"] = 1;
        return values;
    })();

    gameconfig.PositionInfo = (function() {

        /**
         * Properties of a PositionInfo.
         * @memberof gameconfig
         * @interface IPositionInfo
         * @property {number|null} [x] PositionInfo x
         * @property {number|null} [y] PositionInfo y
         */

        /**
         * Constructs a new PositionInfo.
         * @memberof gameconfig
         * @classdesc Represents a PositionInfo.
         * @implements IPositionInfo
         * @constructor
         * @param {gameconfig.IPositionInfo=} [properties] Properties to set
         */
        function PositionInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PositionInfo x.
         * @member {number} x
         * @memberof gameconfig.PositionInfo
         * @instance
         */
        PositionInfo.prototype.x = 0;

        /**
         * PositionInfo y.
         * @member {number} y
         * @memberof gameconfig.PositionInfo
         * @instance
         */
        PositionInfo.prototype.y = 0;

        /**
         * Creates a new PositionInfo instance using the specified properties.
         * @function create
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {gameconfig.IPositionInfo=} [properties] Properties to set
         * @returns {gameconfig.PositionInfo} PositionInfo instance
         */
        PositionInfo.create = function create(properties) {
            return new PositionInfo(properties);
        };

        /**
         * Encodes the specified PositionInfo message. Does not implicitly {@link gameconfig.PositionInfo.verify|verify} messages.
         * @function encode
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {gameconfig.IPositionInfo} message PositionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PositionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.y);
            return writer;
        };

        /**
         * Encodes the specified PositionInfo message, length delimited. Does not implicitly {@link gameconfig.PositionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {gameconfig.IPositionInfo} message PositionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PositionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PositionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameconfig.PositionInfo} PositionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PositionInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameconfig.PositionInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.uint32();
                        break;
                    }
                case 2: {
                        message.y = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PositionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameconfig.PositionInfo} PositionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PositionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PositionInfo message.
         * @function verify
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PositionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a PositionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameconfig.PositionInfo} PositionInfo
         */
        PositionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gameconfig.PositionInfo)
                return object;
            var message = new $root.gameconfig.PositionInfo();
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PositionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {gameconfig.PositionInfo} message PositionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PositionInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this PositionInfo to JSON.
         * @function toJSON
         * @memberof gameconfig.PositionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PositionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PositionInfo
         * @function getTypeUrl
         * @memberof gameconfig.PositionInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PositionInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gameconfig.PositionInfo";
        };

        return PositionInfo;
    })();

    gameconfig.ColorInfo = (function() {

        /**
         * Properties of a ColorInfo.
         * @memberof gameconfig
         * @interface IColorInfo
         * @property {number|null} [r] ColorInfo r
         * @property {number|null} [g] ColorInfo g
         * @property {number|null} [b] ColorInfo b
         */

        /**
         * Constructs a new ColorInfo.
         * @memberof gameconfig
         * @classdesc Represents a ColorInfo.
         * @implements IColorInfo
         * @constructor
         * @param {gameconfig.IColorInfo=} [properties] Properties to set
         */
        function ColorInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ColorInfo r.
         * @member {number} r
         * @memberof gameconfig.ColorInfo
         * @instance
         */
        ColorInfo.prototype.r = 0;

        /**
         * ColorInfo g.
         * @member {number} g
         * @memberof gameconfig.ColorInfo
         * @instance
         */
        ColorInfo.prototype.g = 0;

        /**
         * ColorInfo b.
         * @member {number} b
         * @memberof gameconfig.ColorInfo
         * @instance
         */
        ColorInfo.prototype.b = 0;

        /**
         * Creates a new ColorInfo instance using the specified properties.
         * @function create
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {gameconfig.IColorInfo=} [properties] Properties to set
         * @returns {gameconfig.ColorInfo} ColorInfo instance
         */
        ColorInfo.create = function create(properties) {
            return new ColorInfo(properties);
        };

        /**
         * Encodes the specified ColorInfo message. Does not implicitly {@link gameconfig.ColorInfo.verify|verify} messages.
         * @function encode
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {gameconfig.IColorInfo} message ColorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ColorInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.r != null && Object.hasOwnProperty.call(message, "r"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.r);
            if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.g);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.b);
            return writer;
        };

        /**
         * Encodes the specified ColorInfo message, length delimited. Does not implicitly {@link gameconfig.ColorInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {gameconfig.IColorInfo} message ColorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ColorInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ColorInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameconfig.ColorInfo} ColorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ColorInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameconfig.ColorInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.r = reader.uint32();
                        break;
                    }
                case 2: {
                        message.g = reader.uint32();
                        break;
                    }
                case 3: {
                        message.b = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ColorInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameconfig.ColorInfo} ColorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ColorInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ColorInfo message.
         * @function verify
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ColorInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.r != null && message.hasOwnProperty("r"))
                if (!$util.isInteger(message.r))
                    return "r: integer expected";
            if (message.g != null && message.hasOwnProperty("g"))
                if (!$util.isInteger(message.g))
                    return "g: integer expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b))
                    return "b: integer expected";
            return null;
        };

        /**
         * Creates a ColorInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameconfig.ColorInfo} ColorInfo
         */
        ColorInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gameconfig.ColorInfo)
                return object;
            var message = new $root.gameconfig.ColorInfo();
            if (object.r != null)
                message.r = object.r >>> 0;
            if (object.g != null)
                message.g = object.g >>> 0;
            if (object.b != null)
                message.b = object.b >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ColorInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {gameconfig.ColorInfo} message ColorInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ColorInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.r = 0;
                object.g = 0;
                object.b = 0;
            }
            if (message.r != null && message.hasOwnProperty("r"))
                object.r = message.r;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = message.g;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            return object;
        };

        /**
         * Converts this ColorInfo to JSON.
         * @function toJSON
         * @memberof gameconfig.ColorInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ColorInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ColorInfo
         * @function getTypeUrl
         * @memberof gameconfig.ColorInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ColorInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gameconfig.ColorInfo";
        };

        return ColorInfo;
    })();

    gameconfig.GameConfig = (function() {

        /**
         * Properties of a GameConfig.
         * @memberof gameconfig
         * @interface IGameConfig
         * @property {number|null} [maxPlayerCount] GameConfig maxPlayerCount
         * @property {gameconfig.SyncMode|null} [mode] GameConfig mode
         * @property {number|null} [frameCount] GameConfig frameCount
         * @property {number|null} [mapWidth] GameConfig mapWidth
         * @property {number|null} [mapHeight] GameConfig mapHeight
         * @property {number|null} [playerWidth] GameConfig playerWidth
         * @property {number|null} [playerHeight] GameConfig playerHeight
         * @property {number|null} [playerSpeed] GameConfig playerSpeed
         * @property {Array.<gameconfig.IPositionInfo>|null} [playerPos] GameConfig playerPos
         * @property {Array.<gameconfig.IColorInfo>|null} [playerColor] GameConfig playerColor
         * @property {boolean|null} [prediction] GameConfig prediction
         */

        /**
         * Constructs a new GameConfig.
         * @memberof gameconfig
         * @classdesc Represents a GameConfig.
         * @implements IGameConfig
         * @constructor
         * @param {gameconfig.IGameConfig=} [properties] Properties to set
         */
        function GameConfig(properties) {
            this.playerPos = [];
            this.playerColor = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameConfig maxPlayerCount.
         * @member {number} maxPlayerCount
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.maxPlayerCount = 0;

        /**
         * GameConfig mode.
         * @member {gameconfig.SyncMode} mode
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.mode = 0;

        /**
         * GameConfig frameCount.
         * @member {number} frameCount
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.frameCount = 0;

        /**
         * GameConfig mapWidth.
         * @member {number} mapWidth
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.mapWidth = 0;

        /**
         * GameConfig mapHeight.
         * @member {number} mapHeight
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.mapHeight = 0;

        /**
         * GameConfig playerWidth.
         * @member {number} playerWidth
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.playerWidth = 0;

        /**
         * GameConfig playerHeight.
         * @member {number} playerHeight
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.playerHeight = 0;

        /**
         * GameConfig playerSpeed.
         * @member {number} playerSpeed
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.playerSpeed = 0;

        /**
         * GameConfig playerPos.
         * @member {Array.<gameconfig.IPositionInfo>} playerPos
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.playerPos = $util.emptyArray;

        /**
         * GameConfig playerColor.
         * @member {Array.<gameconfig.IColorInfo>} playerColor
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.playerColor = $util.emptyArray;

        /**
         * GameConfig prediction.
         * @member {boolean} prediction
         * @memberof gameconfig.GameConfig
         * @instance
         */
        GameConfig.prototype.prediction = false;

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @function create
         * @memberof gameconfig.GameConfig
         * @static
         * @param {gameconfig.IGameConfig=} [properties] Properties to set
         * @returns {gameconfig.GameConfig} GameConfig instance
         */
        GameConfig.create = function create(properties) {
            return new GameConfig(properties);
        };

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link gameconfig.GameConfig.verify|verify} messages.
         * @function encode
         * @memberof gameconfig.GameConfig
         * @static
         * @param {gameconfig.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.maxPlayerCount != null && Object.hasOwnProperty.call(message, "maxPlayerCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.maxPlayerCount);
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mode);
            if (message.frameCount != null && Object.hasOwnProperty.call(message, "frameCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.frameCount);
            if (message.mapWidth != null && Object.hasOwnProperty.call(message, "mapWidth"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.mapWidth);
            if (message.mapHeight != null && Object.hasOwnProperty.call(message, "mapHeight"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.mapHeight);
            if (message.playerWidth != null && Object.hasOwnProperty.call(message, "playerWidth"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.playerWidth);
            if (message.playerHeight != null && Object.hasOwnProperty.call(message, "playerHeight"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.playerHeight);
            if (message.playerSpeed != null && Object.hasOwnProperty.call(message, "playerSpeed"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.playerSpeed);
            if (message.playerPos != null && message.playerPos.length)
                for (var i = 0; i < message.playerPos.length; ++i)
                    $root.gameconfig.PositionInfo.encode(message.playerPos[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.playerColor != null && message.playerColor.length)
                for (var i = 0; i < message.playerColor.length; ++i)
                    $root.gameconfig.ColorInfo.encode(message.playerColor[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.prediction != null && Object.hasOwnProperty.call(message, "prediction"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.prediction);
            return writer;
        };

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link gameconfig.GameConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameconfig.GameConfig
         * @static
         * @param {gameconfig.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @function decode
         * @memberof gameconfig.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameconfig.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameconfig.GameConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.maxPlayerCount = reader.uint32();
                        break;
                    }
                case 2: {
                        message.mode = reader.int32();
                        break;
                    }
                case 3: {
                        message.frameCount = reader.uint32();
                        break;
                    }
                case 4: {
                        message.mapWidth = reader.uint32();
                        break;
                    }
                case 5: {
                        message.mapHeight = reader.uint32();
                        break;
                    }
                case 6: {
                        message.playerWidth = reader.uint32();
                        break;
                    }
                case 7: {
                        message.playerHeight = reader.uint32();
                        break;
                    }
                case 8: {
                        message.playerSpeed = reader.double();
                        break;
                    }
                case 9: {
                        if (!(message.playerPos && message.playerPos.length))
                            message.playerPos = [];
                        message.playerPos.push($root.gameconfig.PositionInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 10: {
                        if (!(message.playerColor && message.playerColor.length))
                            message.playerColor = [];
                        message.playerColor.push($root.gameconfig.ColorInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 11: {
                        message.prediction = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameconfig.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameconfig.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameConfig message.
         * @function verify
         * @memberof gameconfig.GameConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.maxPlayerCount != null && message.hasOwnProperty("maxPlayerCount"))
                if (!$util.isInteger(message.maxPlayerCount))
                    return "maxPlayerCount: integer expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                switch (message.mode) {
                default:
                    return "mode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.frameCount != null && message.hasOwnProperty("frameCount"))
                if (!$util.isInteger(message.frameCount))
                    return "frameCount: integer expected";
            if (message.mapWidth != null && message.hasOwnProperty("mapWidth"))
                if (!$util.isInteger(message.mapWidth))
                    return "mapWidth: integer expected";
            if (message.mapHeight != null && message.hasOwnProperty("mapHeight"))
                if (!$util.isInteger(message.mapHeight))
                    return "mapHeight: integer expected";
            if (message.playerWidth != null && message.hasOwnProperty("playerWidth"))
                if (!$util.isInteger(message.playerWidth))
                    return "playerWidth: integer expected";
            if (message.playerHeight != null && message.hasOwnProperty("playerHeight"))
                if (!$util.isInteger(message.playerHeight))
                    return "playerHeight: integer expected";
            if (message.playerSpeed != null && message.hasOwnProperty("playerSpeed"))
                if (typeof message.playerSpeed !== "number")
                    return "playerSpeed: number expected";
            if (message.playerPos != null && message.hasOwnProperty("playerPos")) {
                if (!Array.isArray(message.playerPos))
                    return "playerPos: array expected";
                for (var i = 0; i < message.playerPos.length; ++i) {
                    var error = $root.gameconfig.PositionInfo.verify(message.playerPos[i]);
                    if (error)
                        return "playerPos." + error;
                }
            }
            if (message.playerColor != null && message.hasOwnProperty("playerColor")) {
                if (!Array.isArray(message.playerColor))
                    return "playerColor: array expected";
                for (var i = 0; i < message.playerColor.length; ++i) {
                    var error = $root.gameconfig.ColorInfo.verify(message.playerColor[i]);
                    if (error)
                        return "playerColor." + error;
                }
            }
            if (message.prediction != null && message.hasOwnProperty("prediction"))
                if (typeof message.prediction !== "boolean")
                    return "prediction: boolean expected";
            return null;
        };

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameconfig.GameConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameconfig.GameConfig} GameConfig
         */
        GameConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.gameconfig.GameConfig)
                return object;
            var message = new $root.gameconfig.GameConfig();
            if (object.maxPlayerCount != null)
                message.maxPlayerCount = object.maxPlayerCount >>> 0;
            switch (object.mode) {
            default:
                if (typeof object.mode === "number") {
                    message.mode = object.mode;
                    break;
                }
                break;
            case "SM_FRAME":
            case 0:
                message.mode = 0;
                break;
            case "SM_STATE":
            case 1:
                message.mode = 1;
                break;
            }
            if (object.frameCount != null)
                message.frameCount = object.frameCount >>> 0;
            if (object.mapWidth != null)
                message.mapWidth = object.mapWidth >>> 0;
            if (object.mapHeight != null)
                message.mapHeight = object.mapHeight >>> 0;
            if (object.playerWidth != null)
                message.playerWidth = object.playerWidth >>> 0;
            if (object.playerHeight != null)
                message.playerHeight = object.playerHeight >>> 0;
            if (object.playerSpeed != null)
                message.playerSpeed = Number(object.playerSpeed);
            if (object.playerPos) {
                if (!Array.isArray(object.playerPos))
                    throw TypeError(".gameconfig.GameConfig.playerPos: array expected");
                message.playerPos = [];
                for (var i = 0; i < object.playerPos.length; ++i) {
                    if (typeof object.playerPos[i] !== "object")
                        throw TypeError(".gameconfig.GameConfig.playerPos: object expected");
                    message.playerPos[i] = $root.gameconfig.PositionInfo.fromObject(object.playerPos[i]);
                }
            }
            if (object.playerColor) {
                if (!Array.isArray(object.playerColor))
                    throw TypeError(".gameconfig.GameConfig.playerColor: array expected");
                message.playerColor = [];
                for (var i = 0; i < object.playerColor.length; ++i) {
                    if (typeof object.playerColor[i] !== "object")
                        throw TypeError(".gameconfig.GameConfig.playerColor: object expected");
                    message.playerColor[i] = $root.gameconfig.ColorInfo.fromObject(object.playerColor[i]);
                }
            }
            if (object.prediction != null)
                message.prediction = Boolean(object.prediction);
            return message;
        };

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameconfig.GameConfig
         * @static
         * @param {gameconfig.GameConfig} message GameConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playerPos = [];
                object.playerColor = [];
            }
            if (options.defaults) {
                object.maxPlayerCount = 0;
                object.mode = options.enums === String ? "SM_FRAME" : 0;
                object.frameCount = 0;
                object.mapWidth = 0;
                object.mapHeight = 0;
                object.playerWidth = 0;
                object.playerHeight = 0;
                object.playerSpeed = 0;
                object.prediction = false;
            }
            if (message.maxPlayerCount != null && message.hasOwnProperty("maxPlayerCount"))
                object.maxPlayerCount = message.maxPlayerCount;
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = options.enums === String ? $root.gameconfig.SyncMode[message.mode] === undefined ? message.mode : $root.gameconfig.SyncMode[message.mode] : message.mode;
            if (message.frameCount != null && message.hasOwnProperty("frameCount"))
                object.frameCount = message.frameCount;
            if (message.mapWidth != null && message.hasOwnProperty("mapWidth"))
                object.mapWidth = message.mapWidth;
            if (message.mapHeight != null && message.hasOwnProperty("mapHeight"))
                object.mapHeight = message.mapHeight;
            if (message.playerWidth != null && message.hasOwnProperty("playerWidth"))
                object.playerWidth = message.playerWidth;
            if (message.playerHeight != null && message.hasOwnProperty("playerHeight"))
                object.playerHeight = message.playerHeight;
            if (message.playerSpeed != null && message.hasOwnProperty("playerSpeed"))
                object.playerSpeed = options.json && !isFinite(message.playerSpeed) ? String(message.playerSpeed) : message.playerSpeed;
            if (message.playerPos && message.playerPos.length) {
                object.playerPos = [];
                for (var j = 0; j < message.playerPos.length; ++j)
                    object.playerPos[j] = $root.gameconfig.PositionInfo.toObject(message.playerPos[j], options);
            }
            if (message.playerColor && message.playerColor.length) {
                object.playerColor = [];
                for (var j = 0; j < message.playerColor.length; ++j)
                    object.playerColor[j] = $root.gameconfig.ColorInfo.toObject(message.playerColor[j], options);
            }
            if (message.prediction != null && message.hasOwnProperty("prediction"))
                object.prediction = message.prediction;
            return object;
        };

        /**
         * Converts this GameConfig to JSON.
         * @function toJSON
         * @memberof gameconfig.GameConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameConfig
         * @function getTypeUrl
         * @memberof gameconfig.GameConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gameconfig.GameConfig";
        };

        return GameConfig;
    })();

    return gameconfig;
})();

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    /**
     * MsgId enum.
     * @name msg.MsgId
     * @enum {number}
     * @property {number} MID_NULL=0 MID_NULL value
     * @property {number} MID_REQ_CONNECT_PLUSE=10001 MID_REQ_CONNECT_PLUSE value
     * @property {number} MID_RSP_CONNECT_PLUSE=20001 MID_RSP_CONNECT_PLUSE value
     * @property {number} MID_REQ_JOIN=11001 MID_REQ_JOIN value
     * @property {number} MID_RSP_JOIN=21001 MID_RSP_JOIN value
     * @property {number} MID_REQ_QUIT=11002 MID_REQ_QUIT value
     * @property {number} MID_RSP_QUIT=21002 MID_RSP_QUIT value
     * @property {number} MID_REQ_OPERATE=11003 MID_REQ_OPERATE value
     * @property {number} MID_RSP_OPERATE=21003 MID_RSP_OPERATE value
     * @property {number} MID_NTF_JOIN=50001 MID_NTF_JOIN value
     * @property {number} MID_NTF_QUIT=50002 MID_NTF_QUIT value
     * @property {number} MID_NTF_GAME_START=50003 MID_NTF_GAME_START value
     * @property {number} MID_NTF_GAME_END=50004 MID_NTF_GAME_END value
     * @property {number} MID_NTF_OPERATE=51005 MID_NTF_OPERATE value
     */
    msg.MsgId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MID_NULL"] = 0;
        values[valuesById[10001] = "MID_REQ_CONNECT_PLUSE"] = 10001;
        values[valuesById[20001] = "MID_RSP_CONNECT_PLUSE"] = 20001;
        values[valuesById[11001] = "MID_REQ_JOIN"] = 11001;
        values[valuesById[21001] = "MID_RSP_JOIN"] = 21001;
        values[valuesById[11002] = "MID_REQ_QUIT"] = 11002;
        values[valuesById[21002] = "MID_RSP_QUIT"] = 21002;
        values[valuesById[11003] = "MID_REQ_OPERATE"] = 11003;
        values[valuesById[21003] = "MID_RSP_OPERATE"] = 21003;
        values[valuesById[50001] = "MID_NTF_JOIN"] = 50001;
        values[valuesById[50002] = "MID_NTF_QUIT"] = 50002;
        values[valuesById[50003] = "MID_NTF_GAME_START"] = 50003;
        values[valuesById[50004] = "MID_NTF_GAME_END"] = 50004;
        values[valuesById[51005] = "MID_NTF_OPERATE"] = 51005;
        return values;
    })();

    /**
     * StatusCode enum.
     * @name msg.StatusCode
     * @enum {number}
     * @property {number} SC_SUCCESS=0 SC_SUCCESS value
     * @property {number} SC_FAILED=1 SC_FAILED value
     * @property {number} SC_PARAM_ERROR=2 SC_PARAM_ERROR value
     * @property {number} SC_CONFIG_ERROR=3 SC_CONFIG_ERROR value
     * @property {number} SC_ALEADY_IN_ROOM=1000 SC_ALEADY_IN_ROOM value
     * @property {number} SC_ROOM_FULL=1001 SC_ROOM_FULL value
     */
    msg.StatusCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SC_SUCCESS"] = 0;
        values[valuesById[1] = "SC_FAILED"] = 1;
        values[valuesById[2] = "SC_PARAM_ERROR"] = 2;
        values[valuesById[3] = "SC_CONFIG_ERROR"] = 3;
        values[valuesById[1000] = "SC_ALEADY_IN_ROOM"] = 1000;
        values[valuesById[1001] = "SC_ROOM_FULL"] = 1001;
        return values;
    })();

    msg.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof msg
         * @interface IPlayerInfo
         * @property {number|Long|null} [playerId] PlayerInfo playerId
         * @property {number|null} [playerNo] PlayerInfo playerNo
         * @property {gameconfig.IPositionInfo|null} [pos] PlayerInfo pos
         * @property {gameconfig.IColorInfo|null} [color] PlayerInfo color
         * @property {msg.OperateDir|null} [moveDir] PlayerInfo moveDir
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof msg
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {msg.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo playerId.
         * @member {number|Long} playerId
         * @memberof msg.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PlayerInfo playerNo.
         * @member {number} playerNo
         * @memberof msg.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.playerNo = 0;

        /**
         * PlayerInfo pos.
         * @member {gameconfig.IPositionInfo|null|undefined} pos
         * @memberof msg.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.pos = null;

        /**
         * PlayerInfo color.
         * @member {gameconfig.IColorInfo|null|undefined} color
         * @memberof msg.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.color = null;

        /**
         * PlayerInfo moveDir.
         * @member {msg.OperateDir} moveDir
         * @memberof msg.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.moveDir = 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof msg.PlayerInfo
         * @static
         * @param {msg.IPlayerInfo=} [properties] Properties to set
         * @returns {msg.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link msg.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.PlayerInfo
         * @static
         * @param {msg.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.playerId);
            if (message.playerNo != null && Object.hasOwnProperty.call(message, "playerNo"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.playerNo);
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                $root.gameconfig.PositionInfo.encode(message.pos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                $root.gameconfig.ColorInfo.encode(message.color, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.moveDir != null && Object.hasOwnProperty.call(message, "moveDir"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.moveDir);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link msg.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PlayerInfo
         * @static
         * @param {msg.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.playerNo = reader.uint32();
                        break;
                    }
                case 3: {
                        message.pos = $root.gameconfig.PositionInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.color = $root.gameconfig.ColorInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.moveDir = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof msg.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.playerNo != null && message.hasOwnProperty("playerNo"))
                if (!$util.isInteger(message.playerNo))
                    return "playerNo: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos")) {
                var error = $root.gameconfig.PositionInfo.verify(message.pos);
                if (error)
                    return "pos." + error;
            }
            if (message.color != null && message.hasOwnProperty("color")) {
                var error = $root.gameconfig.ColorInfo.verify(message.color);
                if (error)
                    return "color." + error;
            }
            if (message.moveDir != null && message.hasOwnProperty("moveDir"))
                switch (message.moveDir) {
                default:
                    return "moveDir: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PlayerInfo)
                return object;
            var message = new $root.msg.PlayerInfo();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = true;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber(true);
            if (object.playerNo != null)
                message.playerNo = object.playerNo >>> 0;
            if (object.pos != null) {
                if (typeof object.pos !== "object")
                    throw TypeError(".msg.PlayerInfo.pos: object expected");
                message.pos = $root.gameconfig.PositionInfo.fromObject(object.pos);
            }
            if (object.color != null) {
                if (typeof object.color !== "object")
                    throw TypeError(".msg.PlayerInfo.color: object expected");
                message.color = $root.gameconfig.ColorInfo.fromObject(object.color);
            }
            switch (object.moveDir) {
            default:
                if (typeof object.moveDir === "number") {
                    message.moveDir = object.moveDir;
                    break;
                }
                break;
            case "OD_NULL":
            case 0:
                message.moveDir = 0;
                break;
            case "OD_UP":
            case 1:
                message.moveDir = 1;
                break;
            case "OD_DOWN":
            case 2:
                message.moveDir = 2;
                break;
            case "OD_LEFT":
            case 3:
                message.moveDir = 3;
                break;
            case "OD_RIGHT":
            case 4:
                message.moveDir = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PlayerInfo
         * @static
         * @param {msg.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
                object.playerNo = 0;
                object.pos = null;
                object.color = null;
                object.moveDir = options.enums === String ? "OD_NULL" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber(true) : message.playerId;
            if (message.playerNo != null && message.hasOwnProperty("playerNo"))
                object.playerNo = message.playerNo;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = $root.gameconfig.PositionInfo.toObject(message.pos, options);
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = $root.gameconfig.ColorInfo.toObject(message.color, options);
            if (message.moveDir != null && message.hasOwnProperty("moveDir"))
                object.moveDir = options.enums === String ? $root.msg.OperateDir[message.moveDir] === undefined ? message.moveDir : $root.msg.OperateDir[message.moveDir] : message.moveDir;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof msg.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerInfo
         * @function getTypeUrl
         * @memberof msg.PlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.PlayerInfo";
        };

        return PlayerInfo;
    })();

    msg.CommonReq = (function() {

        /**
         * Properties of a CommonReq.
         * @memberof msg
         * @interface ICommonReq
         */

        /**
         * Constructs a new CommonReq.
         * @memberof msg
         * @classdesc Represents a CommonReq.
         * @implements ICommonReq
         * @constructor
         * @param {msg.ICommonReq=} [properties] Properties to set
         */
        function CommonReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CommonReq instance using the specified properties.
         * @function create
         * @memberof msg.CommonReq
         * @static
         * @param {msg.ICommonReq=} [properties] Properties to set
         * @returns {msg.CommonReq} CommonReq instance
         */
        CommonReq.create = function create(properties) {
            return new CommonReq(properties);
        };

        /**
         * Encodes the specified CommonReq message. Does not implicitly {@link msg.CommonReq.verify|verify} messages.
         * @function encode
         * @memberof msg.CommonReq
         * @static
         * @param {msg.ICommonReq} message CommonReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CommonReq message, length delimited. Does not implicitly {@link msg.CommonReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CommonReq
         * @static
         * @param {msg.ICommonReq} message CommonReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CommonReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CommonReq} CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CommonReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CommonReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CommonReq} CommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonReq message.
         * @function verify
         * @memberof msg.CommonReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CommonReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CommonReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CommonReq} CommonReq
         */
        CommonReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CommonReq)
                return object;
            return new $root.msg.CommonReq();
        };

        /**
         * Creates a plain object from a CommonReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CommonReq
         * @static
         * @param {msg.CommonReq} message CommonReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CommonReq to JSON.
         * @function toJSON
         * @memberof msg.CommonReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommonReq
         * @function getTypeUrl
         * @memberof msg.CommonReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommonReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.CommonReq";
        };

        return CommonReq;
    })();

    msg.CommonRsp = (function() {

        /**
         * Properties of a CommonRsp.
         * @memberof msg
         * @interface ICommonRsp
         */

        /**
         * Constructs a new CommonRsp.
         * @memberof msg
         * @classdesc Represents a CommonRsp.
         * @implements ICommonRsp
         * @constructor
         * @param {msg.ICommonRsp=} [properties] Properties to set
         */
        function CommonRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CommonRsp instance using the specified properties.
         * @function create
         * @memberof msg.CommonRsp
         * @static
         * @param {msg.ICommonRsp=} [properties] Properties to set
         * @returns {msg.CommonRsp} CommonRsp instance
         */
        CommonRsp.create = function create(properties) {
            return new CommonRsp(properties);
        };

        /**
         * Encodes the specified CommonRsp message. Does not implicitly {@link msg.CommonRsp.verify|verify} messages.
         * @function encode
         * @memberof msg.CommonRsp
         * @static
         * @param {msg.ICommonRsp} message CommonRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CommonRsp message, length delimited. Does not implicitly {@link msg.CommonRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CommonRsp
         * @static
         * @param {msg.ICommonRsp} message CommonRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonRsp message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CommonRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CommonRsp} CommonRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonRsp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CommonRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CommonRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CommonRsp} CommonRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonRsp message.
         * @function verify
         * @memberof msg.CommonRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CommonRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CommonRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CommonRsp} CommonRsp
         */
        CommonRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CommonRsp)
                return object;
            return new $root.msg.CommonRsp();
        };

        /**
         * Creates a plain object from a CommonRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CommonRsp
         * @static
         * @param {msg.CommonRsp} message CommonRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonRsp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CommonRsp to JSON.
         * @function toJSON
         * @memberof msg.CommonRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommonRsp
         * @function getTypeUrl
         * @memberof msg.CommonRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommonRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.CommonRsp";
        };

        return CommonRsp;
    })();

    msg.JoinReq = (function() {

        /**
         * Properties of a JoinReq.
         * @memberof msg
         * @interface IJoinReq
         */

        /**
         * Constructs a new JoinReq.
         * @memberof msg
         * @classdesc Represents a JoinReq.
         * @implements IJoinReq
         * @constructor
         * @param {msg.IJoinReq=} [properties] Properties to set
         */
        function JoinReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new JoinReq instance using the specified properties.
         * @function create
         * @memberof msg.JoinReq
         * @static
         * @param {msg.IJoinReq=} [properties] Properties to set
         * @returns {msg.JoinReq} JoinReq instance
         */
        JoinReq.create = function create(properties) {
            return new JoinReq(properties);
        };

        /**
         * Encodes the specified JoinReq message. Does not implicitly {@link msg.JoinReq.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinReq
         * @static
         * @param {msg.IJoinReq} message JoinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link msg.JoinReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinReq
         * @static
         * @param {msg.IJoinReq} message JoinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinReq} JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinReq} JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinReq message.
         * @function verify
         * @memberof msg.JoinReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinReq} JoinReq
         */
        JoinReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinReq)
                return object;
            return new $root.msg.JoinReq();
        };

        /**
         * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinReq
         * @static
         * @param {msg.JoinReq} message JoinReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this JoinReq to JSON.
         * @function toJSON
         * @memberof msg.JoinReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinReq
         * @function getTypeUrl
         * @memberof msg.JoinReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.JoinReq";
        };

        return JoinReq;
    })();

    msg.JoinRsp = (function() {

        /**
         * Properties of a JoinRsp.
         * @memberof msg
         * @interface IJoinRsp
         * @property {gameconfig.IGameConfig|null} [gameCfg] JoinRsp gameCfg
         * @property {number|Long|null} [roomId] JoinRsp roomId
         * @property {number|Long|null} [myPlayerId] JoinRsp myPlayerId
         * @property {Array.<msg.IPlayerInfo>|null} [players] JoinRsp players
         */

        /**
         * Constructs a new JoinRsp.
         * @memberof msg
         * @classdesc Represents a JoinRsp.
         * @implements IJoinRsp
         * @constructor
         * @param {msg.IJoinRsp=} [properties] Properties to set
         */
        function JoinRsp(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRsp gameCfg.
         * @member {gameconfig.IGameConfig|null|undefined} gameCfg
         * @memberof msg.JoinRsp
         * @instance
         */
        JoinRsp.prototype.gameCfg = null;

        /**
         * JoinRsp roomId.
         * @member {number|Long} roomId
         * @memberof msg.JoinRsp
         * @instance
         */
        JoinRsp.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * JoinRsp myPlayerId.
         * @member {number|Long} myPlayerId
         * @memberof msg.JoinRsp
         * @instance
         */
        JoinRsp.prototype.myPlayerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * JoinRsp players.
         * @member {Array.<msg.IPlayerInfo>} players
         * @memberof msg.JoinRsp
         * @instance
         */
        JoinRsp.prototype.players = $util.emptyArray;

        /**
         * Creates a new JoinRsp instance using the specified properties.
         * @function create
         * @memberof msg.JoinRsp
         * @static
         * @param {msg.IJoinRsp=} [properties] Properties to set
         * @returns {msg.JoinRsp} JoinRsp instance
         */
        JoinRsp.create = function create(properties) {
            return new JoinRsp(properties);
        };

        /**
         * Encodes the specified JoinRsp message. Does not implicitly {@link msg.JoinRsp.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinRsp
         * @static
         * @param {msg.IJoinRsp} message JoinRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameCfg != null && Object.hasOwnProperty.call(message, "gameCfg"))
                $root.gameconfig.GameConfig.encode(message.gameCfg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roomId);
            if (message.myPlayerId != null && Object.hasOwnProperty.call(message, "myPlayerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.myPlayerId);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.msg.PlayerInfo.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRsp message, length delimited. Does not implicitly {@link msg.JoinRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinRsp
         * @static
         * @param {msg.IJoinRsp} message JoinRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRsp message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinRsp} JoinRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRsp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.gameCfg = $root.gameconfig.GameConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.roomId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.myPlayerId = reader.uint64();
                        break;
                    }
                case 4: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.msg.PlayerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinRsp} JoinRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRsp message.
         * @function verify
         * @memberof msg.JoinRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameCfg != null && message.hasOwnProperty("gameCfg")) {
                var error = $root.gameconfig.GameConfig.verify(message.gameCfg);
                if (error)
                    return "gameCfg." + error;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.myPlayerId != null && message.hasOwnProperty("myPlayerId"))
                if (!$util.isInteger(message.myPlayerId) && !(message.myPlayerId && $util.isInteger(message.myPlayerId.low) && $util.isInteger(message.myPlayerId.high)))
                    return "myPlayerId: integer|Long expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.msg.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinRsp} JoinRsp
         */
        JoinRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinRsp)
                return object;
            var message = new $root.msg.JoinRsp();
            if (object.gameCfg != null) {
                if (typeof object.gameCfg !== "object")
                    throw TypeError(".msg.JoinRsp.gameCfg: object expected");
                message.gameCfg = $root.gameconfig.GameConfig.fromObject(object.gameCfg);
            }
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
            if (object.myPlayerId != null)
                if ($util.Long)
                    (message.myPlayerId = $util.Long.fromValue(object.myPlayerId)).unsigned = true;
                else if (typeof object.myPlayerId === "string")
                    message.myPlayerId = parseInt(object.myPlayerId, 10);
                else if (typeof object.myPlayerId === "number")
                    message.myPlayerId = object.myPlayerId;
                else if (typeof object.myPlayerId === "object")
                    message.myPlayerId = new $util.LongBits(object.myPlayerId.low >>> 0, object.myPlayerId.high >>> 0).toNumber(true);
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".msg.JoinRsp.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".msg.JoinRsp.players: object expected");
                    message.players[i] = $root.msg.PlayerInfo.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinRsp
         * @static
         * @param {msg.JoinRsp} message JoinRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.gameCfg = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.myPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.myPlayerId = options.longs === String ? "0" : 0;
            }
            if (message.gameCfg != null && message.hasOwnProperty("gameCfg"))
                object.gameCfg = $root.gameconfig.GameConfig.toObject(message.gameCfg, options);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
            if (message.myPlayerId != null && message.hasOwnProperty("myPlayerId"))
                if (typeof message.myPlayerId === "number")
                    object.myPlayerId = options.longs === String ? String(message.myPlayerId) : message.myPlayerId;
                else
                    object.myPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.myPlayerId) : options.longs === Number ? new $util.LongBits(message.myPlayerId.low >>> 0, message.myPlayerId.high >>> 0).toNumber(true) : message.myPlayerId;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.msg.PlayerInfo.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinRsp to JSON.
         * @function toJSON
         * @memberof msg.JoinRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinRsp
         * @function getTypeUrl
         * @memberof msg.JoinRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.JoinRsp";
        };

        return JoinRsp;
    })();

    msg.JoinNtf = (function() {

        /**
         * Properties of a JoinNtf.
         * @memberof msg
         * @interface IJoinNtf
         * @property {msg.IPlayerInfo|null} [player] JoinNtf player
         */

        /**
         * Constructs a new JoinNtf.
         * @memberof msg
         * @classdesc Represents a JoinNtf.
         * @implements IJoinNtf
         * @constructor
         * @param {msg.IJoinNtf=} [properties] Properties to set
         */
        function JoinNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinNtf player.
         * @member {msg.IPlayerInfo|null|undefined} player
         * @memberof msg.JoinNtf
         * @instance
         */
        JoinNtf.prototype.player = null;

        /**
         * Creates a new JoinNtf instance using the specified properties.
         * @function create
         * @memberof msg.JoinNtf
         * @static
         * @param {msg.IJoinNtf=} [properties] Properties to set
         * @returns {msg.JoinNtf} JoinNtf instance
         */
        JoinNtf.create = function create(properties) {
            return new JoinNtf(properties);
        };

        /**
         * Encodes the specified JoinNtf message. Does not implicitly {@link msg.JoinNtf.verify|verify} messages.
         * @function encode
         * @memberof msg.JoinNtf
         * @static
         * @param {msg.IJoinNtf} message JoinNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.msg.PlayerInfo.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinNtf message, length delimited. Does not implicitly {@link msg.JoinNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.JoinNtf
         * @static
         * @param {msg.IJoinNtf} message JoinNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinNtf message from the specified reader or buffer.
         * @function decode
         * @memberof msg.JoinNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.JoinNtf} JoinNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinNtf.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.JoinNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.player = $root.msg.PlayerInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.JoinNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.JoinNtf} JoinNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinNtf message.
         * @function verify
         * @memberof msg.JoinNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.msg.PlayerInfo.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        /**
         * Creates a JoinNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.JoinNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.JoinNtf} JoinNtf
         */
        JoinNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.JoinNtf)
                return object;
            var message = new $root.msg.JoinNtf();
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".msg.JoinNtf.player: object expected");
                message.player = $root.msg.PlayerInfo.fromObject(object.player);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.JoinNtf
         * @static
         * @param {msg.JoinNtf} message JoinNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.player = null;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.msg.PlayerInfo.toObject(message.player, options);
            return object;
        };

        /**
         * Converts this JoinNtf to JSON.
         * @function toJSON
         * @memberof msg.JoinNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinNtf
         * @function getTypeUrl
         * @memberof msg.JoinNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.JoinNtf";
        };

        return JoinNtf;
    })();

    msg.QuitReq = (function() {

        /**
         * Properties of a QuitReq.
         * @memberof msg
         * @interface IQuitReq
         */

        /**
         * Constructs a new QuitReq.
         * @memberof msg
         * @classdesc Represents a QuitReq.
         * @implements IQuitReq
         * @constructor
         * @param {msg.IQuitReq=} [properties] Properties to set
         */
        function QuitReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new QuitReq instance using the specified properties.
         * @function create
         * @memberof msg.QuitReq
         * @static
         * @param {msg.IQuitReq=} [properties] Properties to set
         * @returns {msg.QuitReq} QuitReq instance
         */
        QuitReq.create = function create(properties) {
            return new QuitReq(properties);
        };

        /**
         * Encodes the specified QuitReq message. Does not implicitly {@link msg.QuitReq.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitReq
         * @static
         * @param {msg.IQuitReq} message QuitReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified QuitReq message, length delimited. Does not implicitly {@link msg.QuitReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitReq
         * @static
         * @param {msg.IQuitReq} message QuitReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitReq} QuitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitReq} QuitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitReq message.
         * @function verify
         * @memberof msg.QuitReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a QuitReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitReq} QuitReq
         */
        QuitReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitReq)
                return object;
            return new $root.msg.QuitReq();
        };

        /**
         * Creates a plain object from a QuitReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitReq
         * @static
         * @param {msg.QuitReq} message QuitReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this QuitReq to JSON.
         * @function toJSON
         * @memberof msg.QuitReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuitReq
         * @function getTypeUrl
         * @memberof msg.QuitReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuitReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.QuitReq";
        };

        return QuitReq;
    })();

    msg.QuitRsp = (function() {

        /**
         * Properties of a QuitRsp.
         * @memberof msg
         * @interface IQuitRsp
         */

        /**
         * Constructs a new QuitRsp.
         * @memberof msg
         * @classdesc Represents a QuitRsp.
         * @implements IQuitRsp
         * @constructor
         * @param {msg.IQuitRsp=} [properties] Properties to set
         */
        function QuitRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new QuitRsp instance using the specified properties.
         * @function create
         * @memberof msg.QuitRsp
         * @static
         * @param {msg.IQuitRsp=} [properties] Properties to set
         * @returns {msg.QuitRsp} QuitRsp instance
         */
        QuitRsp.create = function create(properties) {
            return new QuitRsp(properties);
        };

        /**
         * Encodes the specified QuitRsp message. Does not implicitly {@link msg.QuitRsp.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitRsp
         * @static
         * @param {msg.IQuitRsp} message QuitRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified QuitRsp message, length delimited. Does not implicitly {@link msg.QuitRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitRsp
         * @static
         * @param {msg.IQuitRsp} message QuitRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitRsp message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitRsp} QuitRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRsp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitRsp} QuitRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitRsp message.
         * @function verify
         * @memberof msg.QuitRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a QuitRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitRsp} QuitRsp
         */
        QuitRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitRsp)
                return object;
            return new $root.msg.QuitRsp();
        };

        /**
         * Creates a plain object from a QuitRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitRsp
         * @static
         * @param {msg.QuitRsp} message QuitRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitRsp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this QuitRsp to JSON.
         * @function toJSON
         * @memberof msg.QuitRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuitRsp
         * @function getTypeUrl
         * @memberof msg.QuitRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuitRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.QuitRsp";
        };

        return QuitRsp;
    })();

    msg.QuitNtf = (function() {

        /**
         * Properties of a QuitNtf.
         * @memberof msg
         * @interface IQuitNtf
         * @property {number|Long|null} [playerId] QuitNtf playerId
         */

        /**
         * Constructs a new QuitNtf.
         * @memberof msg
         * @classdesc Represents a QuitNtf.
         * @implements IQuitNtf
         * @constructor
         * @param {msg.IQuitNtf=} [properties] Properties to set
         */
        function QuitNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitNtf playerId.
         * @member {number|Long} playerId
         * @memberof msg.QuitNtf
         * @instance
         */
        QuitNtf.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new QuitNtf instance using the specified properties.
         * @function create
         * @memberof msg.QuitNtf
         * @static
         * @param {msg.IQuitNtf=} [properties] Properties to set
         * @returns {msg.QuitNtf} QuitNtf instance
         */
        QuitNtf.create = function create(properties) {
            return new QuitNtf(properties);
        };

        /**
         * Encodes the specified QuitNtf message. Does not implicitly {@link msg.QuitNtf.verify|verify} messages.
         * @function encode
         * @memberof msg.QuitNtf
         * @static
         * @param {msg.IQuitNtf} message QuitNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified QuitNtf message, length delimited. Does not implicitly {@link msg.QuitNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.QuitNtf
         * @static
         * @param {msg.IQuitNtf} message QuitNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitNtf message from the specified reader or buffer.
         * @function decode
         * @memberof msg.QuitNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.QuitNtf} QuitNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitNtf.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.QuitNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.QuitNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.QuitNtf} QuitNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitNtf message.
         * @function verify
         * @memberof msg.QuitNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        /**
         * Creates a QuitNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.QuitNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.QuitNtf} QuitNtf
         */
        QuitNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.QuitNtf)
                return object;
            var message = new $root.msg.QuitNtf();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = true;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a QuitNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.QuitNtf
         * @static
         * @param {msg.QuitNtf} message QuitNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber(true) : message.playerId;
            return object;
        };

        /**
         * Converts this QuitNtf to JSON.
         * @function toJSON
         * @memberof msg.QuitNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuitNtf
         * @function getTypeUrl
         * @memberof msg.QuitNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuitNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.QuitNtf";
        };

        return QuitNtf;
    })();

    msg.GameStartNtf = (function() {

        /**
         * Properties of a GameStartNtf.
         * @memberof msg
         * @interface IGameStartNtf
         */

        /**
         * Constructs a new GameStartNtf.
         * @memberof msg
         * @classdesc Represents a GameStartNtf.
         * @implements IGameStartNtf
         * @constructor
         * @param {msg.IGameStartNtf=} [properties] Properties to set
         */
        function GameStartNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GameStartNtf instance using the specified properties.
         * @function create
         * @memberof msg.GameStartNtf
         * @static
         * @param {msg.IGameStartNtf=} [properties] Properties to set
         * @returns {msg.GameStartNtf} GameStartNtf instance
         */
        GameStartNtf.create = function create(properties) {
            return new GameStartNtf(properties);
        };

        /**
         * Encodes the specified GameStartNtf message. Does not implicitly {@link msg.GameStartNtf.verify|verify} messages.
         * @function encode
         * @memberof msg.GameStartNtf
         * @static
         * @param {msg.IGameStartNtf} message GameStartNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GameStartNtf message, length delimited. Does not implicitly {@link msg.GameStartNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GameStartNtf
         * @static
         * @param {msg.IGameStartNtf} message GameStartNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStartNtf message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GameStartNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GameStartNtf} GameStartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartNtf.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GameStartNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStartNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GameStartNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GameStartNtf} GameStartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStartNtf message.
         * @function verify
         * @memberof msg.GameStartNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStartNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GameStartNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GameStartNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GameStartNtf} GameStartNtf
         */
        GameStartNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GameStartNtf)
                return object;
            return new $root.msg.GameStartNtf();
        };

        /**
         * Creates a plain object from a GameStartNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GameStartNtf
         * @static
         * @param {msg.GameStartNtf} message GameStartNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStartNtf.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GameStartNtf to JSON.
         * @function toJSON
         * @memberof msg.GameStartNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStartNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameStartNtf
         * @function getTypeUrl
         * @memberof msg.GameStartNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameStartNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.GameStartNtf";
        };

        return GameStartNtf;
    })();

    msg.GameEndNtf = (function() {

        /**
         * Properties of a GameEndNtf.
         * @memberof msg
         * @interface IGameEndNtf
         */

        /**
         * Constructs a new GameEndNtf.
         * @memberof msg
         * @classdesc Represents a GameEndNtf.
         * @implements IGameEndNtf
         * @constructor
         * @param {msg.IGameEndNtf=} [properties] Properties to set
         */
        function GameEndNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GameEndNtf instance using the specified properties.
         * @function create
         * @memberof msg.GameEndNtf
         * @static
         * @param {msg.IGameEndNtf=} [properties] Properties to set
         * @returns {msg.GameEndNtf} GameEndNtf instance
         */
        GameEndNtf.create = function create(properties) {
            return new GameEndNtf(properties);
        };

        /**
         * Encodes the specified GameEndNtf message. Does not implicitly {@link msg.GameEndNtf.verify|verify} messages.
         * @function encode
         * @memberof msg.GameEndNtf
         * @static
         * @param {msg.IGameEndNtf} message GameEndNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEndNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GameEndNtf message, length delimited. Does not implicitly {@link msg.GameEndNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.GameEndNtf
         * @static
         * @param {msg.IGameEndNtf} message GameEndNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameEndNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameEndNtf message from the specified reader or buffer.
         * @function decode
         * @memberof msg.GameEndNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.GameEndNtf} GameEndNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEndNtf.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.GameEndNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameEndNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.GameEndNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.GameEndNtf} GameEndNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameEndNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameEndNtf message.
         * @function verify
         * @memberof msg.GameEndNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameEndNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GameEndNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.GameEndNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.GameEndNtf} GameEndNtf
         */
        GameEndNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.GameEndNtf)
                return object;
            return new $root.msg.GameEndNtf();
        };

        /**
         * Creates a plain object from a GameEndNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.GameEndNtf
         * @static
         * @param {msg.GameEndNtf} message GameEndNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameEndNtf.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GameEndNtf to JSON.
         * @function toJSON
         * @memberof msg.GameEndNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameEndNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameEndNtf
         * @function getTypeUrl
         * @memberof msg.GameEndNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameEndNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.GameEndNtf";
        };

        return GameEndNtf;
    })();

    /**
     * OperateDir enum.
     * @name msg.OperateDir
     * @enum {number}
     * @property {number} OD_NULL=0 OD_NULL value
     * @property {number} OD_UP=1 OD_UP value
     * @property {number} OD_DOWN=2 OD_DOWN value
     * @property {number} OD_LEFT=3 OD_LEFT value
     * @property {number} OD_RIGHT=4 OD_RIGHT value
     */
    msg.OperateDir = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OD_NULL"] = 0;
        values[valuesById[1] = "OD_UP"] = 1;
        values[valuesById[2] = "OD_DOWN"] = 2;
        values[valuesById[3] = "OD_LEFT"] = 3;
        values[valuesById[4] = "OD_RIGHT"] = 4;
        return values;
    })();

    msg.OperateInfo = (function() {

        /**
         * Properties of an OperateInfo.
         * @memberof msg
         * @interface IOperateInfo
         * @property {number|Long|null} [playerId] OperateInfo playerId
         * @property {msg.OperateDir|null} [dir] OperateInfo dir
         */

        /**
         * Constructs a new OperateInfo.
         * @memberof msg
         * @classdesc Represents an OperateInfo.
         * @implements IOperateInfo
         * @constructor
         * @param {msg.IOperateInfo=} [properties] Properties to set
         */
        function OperateInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateInfo playerId.
         * @member {number|Long} playerId
         * @memberof msg.OperateInfo
         * @instance
         */
        OperateInfo.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * OperateInfo dir.
         * @member {msg.OperateDir} dir
         * @memberof msg.OperateInfo
         * @instance
         */
        OperateInfo.prototype.dir = 0;

        /**
         * Creates a new OperateInfo instance using the specified properties.
         * @function create
         * @memberof msg.OperateInfo
         * @static
         * @param {msg.IOperateInfo=} [properties] Properties to set
         * @returns {msg.OperateInfo} OperateInfo instance
         */
        OperateInfo.create = function create(properties) {
            return new OperateInfo(properties);
        };

        /**
         * Encodes the specified OperateInfo message. Does not implicitly {@link msg.OperateInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.OperateInfo
         * @static
         * @param {msg.IOperateInfo} message OperateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.playerId);
            if (message.dir != null && Object.hasOwnProperty.call(message, "dir"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dir);
            return writer;
        };

        /**
         * Encodes the specified OperateInfo message, length delimited. Does not implicitly {@link msg.OperateInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.OperateInfo
         * @static
         * @param {msg.IOperateInfo} message OperateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.OperateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.OperateInfo} OperateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.OperateInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.dir = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.OperateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.OperateInfo} OperateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateInfo message.
         * @function verify
         * @memberof msg.OperateInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.dir != null && message.hasOwnProperty("dir"))
                switch (message.dir) {
                default:
                    return "dir: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates an OperateInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.OperateInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.OperateInfo} OperateInfo
         */
        OperateInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.OperateInfo)
                return object;
            var message = new $root.msg.OperateInfo();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = true;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber(true);
            switch (object.dir) {
            default:
                if (typeof object.dir === "number") {
                    message.dir = object.dir;
                    break;
                }
                break;
            case "OD_NULL":
            case 0:
                message.dir = 0;
                break;
            case "OD_UP":
            case 1:
                message.dir = 1;
                break;
            case "OD_DOWN":
            case 2:
                message.dir = 2;
                break;
            case "OD_LEFT":
            case 3:
                message.dir = 3;
                break;
            case "OD_RIGHT":
            case 4:
                message.dir = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an OperateInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.OperateInfo
         * @static
         * @param {msg.OperateInfo} message OperateInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
                object.dir = options.enums === String ? "OD_NULL" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber(true) : message.playerId;
            if (message.dir != null && message.hasOwnProperty("dir"))
                object.dir = options.enums === String ? $root.msg.OperateDir[message.dir] === undefined ? message.dir : $root.msg.OperateDir[message.dir] : message.dir;
            return object;
        };

        /**
         * Converts this OperateInfo to JSON.
         * @function toJSON
         * @memberof msg.OperateInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OperateInfo
         * @function getTypeUrl
         * @memberof msg.OperateInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OperateInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.OperateInfo";
        };

        return OperateInfo;
    })();

    msg.OperateReq = (function() {

        /**
         * Properties of an OperateReq.
         * @memberof msg
         * @interface IOperateReq
         * @property {msg.IOperateInfo|null} [op] OperateReq op
         */

        /**
         * Constructs a new OperateReq.
         * @memberof msg
         * @classdesc Represents an OperateReq.
         * @implements IOperateReq
         * @constructor
         * @param {msg.IOperateReq=} [properties] Properties to set
         */
        function OperateReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateReq op.
         * @member {msg.IOperateInfo|null|undefined} op
         * @memberof msg.OperateReq
         * @instance
         */
        OperateReq.prototype.op = null;

        /**
         * Creates a new OperateReq instance using the specified properties.
         * @function create
         * @memberof msg.OperateReq
         * @static
         * @param {msg.IOperateReq=} [properties] Properties to set
         * @returns {msg.OperateReq} OperateReq instance
         */
        OperateReq.create = function create(properties) {
            return new OperateReq(properties);
        };

        /**
         * Encodes the specified OperateReq message. Does not implicitly {@link msg.OperateReq.verify|verify} messages.
         * @function encode
         * @memberof msg.OperateReq
         * @static
         * @param {msg.IOperateReq} message OperateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                $root.msg.OperateInfo.encode(message.op, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OperateReq message, length delimited. Does not implicitly {@link msg.OperateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.OperateReq
         * @static
         * @param {msg.IOperateReq} message OperateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.OperateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.OperateReq} OperateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.OperateReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.op = $root.msg.OperateInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.OperateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.OperateReq} OperateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateReq message.
         * @function verify
         * @memberof msg.OperateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.op != null && message.hasOwnProperty("op")) {
                var error = $root.msg.OperateInfo.verify(message.op);
                if (error)
                    return "op." + error;
            }
            return null;
        };

        /**
         * Creates an OperateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.OperateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.OperateReq} OperateReq
         */
        OperateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.OperateReq)
                return object;
            var message = new $root.msg.OperateReq();
            if (object.op != null) {
                if (typeof object.op !== "object")
                    throw TypeError(".msg.OperateReq.op: object expected");
                message.op = $root.msg.OperateInfo.fromObject(object.op);
            }
            return message;
        };

        /**
         * Creates a plain object from an OperateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.OperateReq
         * @static
         * @param {msg.OperateReq} message OperateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.op = null;
            if (message.op != null && message.hasOwnProperty("op"))
                object.op = $root.msg.OperateInfo.toObject(message.op, options);
            return object;
        };

        /**
         * Converts this OperateReq to JSON.
         * @function toJSON
         * @memberof msg.OperateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OperateReq
         * @function getTypeUrl
         * @memberof msg.OperateReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OperateReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.OperateReq";
        };

        return OperateReq;
    })();

    msg.OperateRsp = (function() {

        /**
         * Properties of an OperateRsp.
         * @memberof msg
         * @interface IOperateRsp
         */

        /**
         * Constructs a new OperateRsp.
         * @memberof msg
         * @classdesc Represents an OperateRsp.
         * @implements IOperateRsp
         * @constructor
         * @param {msg.IOperateRsp=} [properties] Properties to set
         */
        function OperateRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new OperateRsp instance using the specified properties.
         * @function create
         * @memberof msg.OperateRsp
         * @static
         * @param {msg.IOperateRsp=} [properties] Properties to set
         * @returns {msg.OperateRsp} OperateRsp instance
         */
        OperateRsp.create = function create(properties) {
            return new OperateRsp(properties);
        };

        /**
         * Encodes the specified OperateRsp message. Does not implicitly {@link msg.OperateRsp.verify|verify} messages.
         * @function encode
         * @memberof msg.OperateRsp
         * @static
         * @param {msg.IOperateRsp} message OperateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified OperateRsp message, length delimited. Does not implicitly {@link msg.OperateRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.OperateRsp
         * @static
         * @param {msg.IOperateRsp} message OperateRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateRsp message from the specified reader or buffer.
         * @function decode
         * @memberof msg.OperateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.OperateRsp} OperateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateRsp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.OperateRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.OperateRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.OperateRsp} OperateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateRsp message.
         * @function verify
         * @memberof msg.OperateRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an OperateRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.OperateRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.OperateRsp} OperateRsp
         */
        OperateRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.OperateRsp)
                return object;
            return new $root.msg.OperateRsp();
        };

        /**
         * Creates a plain object from an OperateRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.OperateRsp
         * @static
         * @param {msg.OperateRsp} message OperateRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateRsp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this OperateRsp to JSON.
         * @function toJSON
         * @memberof msg.OperateRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OperateRsp
         * @function getTypeUrl
         * @memberof msg.OperateRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OperateRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.OperateRsp";
        };

        return OperateRsp;
    })();

    msg.OperateNtf = (function() {

        /**
         * Properties of an OperateNtf.
         * @memberof msg
         * @interface IOperateNtf
         * @property {number|Long|null} [frameNo] OperateNtf frameNo
         * @property {Array.<msg.IOperateInfo>|null} [op] OperateNtf op
         */

        /**
         * Constructs a new OperateNtf.
         * @memberof msg
         * @classdesc Represents an OperateNtf.
         * @implements IOperateNtf
         * @constructor
         * @param {msg.IOperateNtf=} [properties] Properties to set
         */
        function OperateNtf(properties) {
            this.op = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateNtf frameNo.
         * @member {number|Long} frameNo
         * @memberof msg.OperateNtf
         * @instance
         */
        OperateNtf.prototype.frameNo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * OperateNtf op.
         * @member {Array.<msg.IOperateInfo>} op
         * @memberof msg.OperateNtf
         * @instance
         */
        OperateNtf.prototype.op = $util.emptyArray;

        /**
         * Creates a new OperateNtf instance using the specified properties.
         * @function create
         * @memberof msg.OperateNtf
         * @static
         * @param {msg.IOperateNtf=} [properties] Properties to set
         * @returns {msg.OperateNtf} OperateNtf instance
         */
        OperateNtf.create = function create(properties) {
            return new OperateNtf(properties);
        };

        /**
         * Encodes the specified OperateNtf message. Does not implicitly {@link msg.OperateNtf.verify|verify} messages.
         * @function encode
         * @memberof msg.OperateNtf
         * @static
         * @param {msg.IOperateNtf} message OperateNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frameNo != null && Object.hasOwnProperty.call(message, "frameNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.frameNo);
            if (message.op != null && message.op.length)
                for (var i = 0; i < message.op.length; ++i)
                    $root.msg.OperateInfo.encode(message.op[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OperateNtf message, length delimited. Does not implicitly {@link msg.OperateNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.OperateNtf
         * @static
         * @param {msg.IOperateNtf} message OperateNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateNtf message from the specified reader or buffer.
         * @function decode
         * @memberof msg.OperateNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.OperateNtf} OperateNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateNtf.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.OperateNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.frameNo = reader.uint64();
                        break;
                    }
                case 2: {
                        if (!(message.op && message.op.length))
                            message.op = [];
                        message.op.push($root.msg.OperateInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.OperateNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.OperateNtf} OperateNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateNtf message.
         * @function verify
         * @memberof msg.OperateNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frameNo != null && message.hasOwnProperty("frameNo"))
                if (!$util.isInteger(message.frameNo) && !(message.frameNo && $util.isInteger(message.frameNo.low) && $util.isInteger(message.frameNo.high)))
                    return "frameNo: integer|Long expected";
            if (message.op != null && message.hasOwnProperty("op")) {
                if (!Array.isArray(message.op))
                    return "op: array expected";
                for (var i = 0; i < message.op.length; ++i) {
                    var error = $root.msg.OperateInfo.verify(message.op[i]);
                    if (error)
                        return "op." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OperateNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.OperateNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.OperateNtf} OperateNtf
         */
        OperateNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.OperateNtf)
                return object;
            var message = new $root.msg.OperateNtf();
            if (object.frameNo != null)
                if ($util.Long)
                    (message.frameNo = $util.Long.fromValue(object.frameNo)).unsigned = true;
                else if (typeof object.frameNo === "string")
                    message.frameNo = parseInt(object.frameNo, 10);
                else if (typeof object.frameNo === "number")
                    message.frameNo = object.frameNo;
                else if (typeof object.frameNo === "object")
                    message.frameNo = new $util.LongBits(object.frameNo.low >>> 0, object.frameNo.high >>> 0).toNumber(true);
            if (object.op) {
                if (!Array.isArray(object.op))
                    throw TypeError(".msg.OperateNtf.op: array expected");
                message.op = [];
                for (var i = 0; i < object.op.length; ++i) {
                    if (typeof object.op[i] !== "object")
                        throw TypeError(".msg.OperateNtf.op: object expected");
                    message.op[i] = $root.msg.OperateInfo.fromObject(object.op[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OperateNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.OperateNtf
         * @static
         * @param {msg.OperateNtf} message OperateNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.op = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.frameNo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.frameNo = options.longs === String ? "0" : 0;
            if (message.frameNo != null && message.hasOwnProperty("frameNo"))
                if (typeof message.frameNo === "number")
                    object.frameNo = options.longs === String ? String(message.frameNo) : message.frameNo;
                else
                    object.frameNo = options.longs === String ? $util.Long.prototype.toString.call(message.frameNo) : options.longs === Number ? new $util.LongBits(message.frameNo.low >>> 0, message.frameNo.high >>> 0).toNumber(true) : message.frameNo;
            if (message.op && message.op.length) {
                object.op = [];
                for (var j = 0; j < message.op.length; ++j)
                    object.op[j] = $root.msg.OperateInfo.toObject(message.op[j], options);
            }
            return object;
        };

        /**
         * Converts this OperateNtf to JSON.
         * @function toJSON
         * @memberof msg.OperateNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OperateNtf
         * @function getTypeUrl
         * @memberof msg.OperateNtf
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OperateNtf.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.OperateNtf";
        };

        return OperateNtf;
    })();

    msg.BodyReq = (function() {

        /**
         * Properties of a BodyReq.
         * @memberof msg
         * @interface IBodyReq
         * @property {msg.MsgId|null} [msgId] BodyReq msgId
         * @property {number|Long|null} [seq] BodyReq seq
         * @property {boolean|null} [needEcho] BodyReq needEcho
         * @property {msg.ICommonReq|null} [commonReq] BodyReq commonReq
         * @property {msg.IJoinReq|null} [joinReq] BodyReq joinReq
         * @property {msg.IQuitReq|null} [quitReq] BodyReq quitReq
         * @property {msg.IOperateReq|null} [operateReq] BodyReq operateReq
         */

        /**
         * Constructs a new BodyReq.
         * @memberof msg
         * @classdesc Represents a BodyReq.
         * @implements IBodyReq
         * @constructor
         * @param {msg.IBodyReq=} [properties] Properties to set
         */
        function BodyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BodyReq msgId.
         * @member {msg.MsgId} msgId
         * @memberof msg.BodyReq
         * @instance
         */
        BodyReq.prototype.msgId = 0;

        /**
         * BodyReq seq.
         * @member {number|Long} seq
         * @memberof msg.BodyReq
         * @instance
         */
        BodyReq.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BodyReq needEcho.
         * @member {boolean} needEcho
         * @memberof msg.BodyReq
         * @instance
         */
        BodyReq.prototype.needEcho = false;

        /**
         * BodyReq commonReq.
         * @member {msg.ICommonReq|null|undefined} commonReq
         * @memberof msg.BodyReq
         * @instance
         */
        BodyReq.prototype.commonReq = null;

        /**
         * BodyReq joinReq.
         * @member {msg.IJoinReq|null|undefined} joinReq
         * @memberof msg.BodyReq
         * @instance
         */
        BodyReq.prototype.joinReq = null;

        /**
         * BodyReq quitReq.
         * @member {msg.IQuitReq|null|undefined} quitReq
         * @memberof msg.BodyReq
         * @instance
         */
        BodyReq.prototype.quitReq = null;

        /**
         * BodyReq operateReq.
         * @member {msg.IOperateReq|null|undefined} operateReq
         * @memberof msg.BodyReq
         * @instance
         */
        BodyReq.prototype.operateReq = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * BodyReq Body.
         * @member {"commonReq"|"joinReq"|"quitReq"|"operateReq"|undefined} Body
         * @memberof msg.BodyReq
         * @instance
         */
        Object.defineProperty(BodyReq.prototype, "Body", {
            get: $util.oneOfGetter($oneOfFields = ["commonReq", "joinReq", "quitReq", "operateReq"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BodyReq instance using the specified properties.
         * @function create
         * @memberof msg.BodyReq
         * @static
         * @param {msg.IBodyReq=} [properties] Properties to set
         * @returns {msg.BodyReq} BodyReq instance
         */
        BodyReq.create = function create(properties) {
            return new BodyReq(properties);
        };

        /**
         * Encodes the specified BodyReq message. Does not implicitly {@link msg.BodyReq.verify|verify} messages.
         * @function encode
         * @memberof msg.BodyReq
         * @static
         * @param {msg.IBodyReq} message BodyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BodyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.seq);
            if (message.needEcho != null && Object.hasOwnProperty.call(message, "needEcho"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.needEcho);
            if (message.commonReq != null && Object.hasOwnProperty.call(message, "commonReq"))
                $root.msg.CommonReq.encode(message.commonReq, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.joinReq != null && Object.hasOwnProperty.call(message, "joinReq"))
                $root.msg.JoinReq.encode(message.joinReq, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.quitReq != null && Object.hasOwnProperty.call(message, "quitReq"))
                $root.msg.QuitReq.encode(message.quitReq, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.operateReq != null && Object.hasOwnProperty.call(message, "operateReq"))
                $root.msg.OperateReq.encode(message.operateReq, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BodyReq message, length delimited. Does not implicitly {@link msg.BodyReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.BodyReq
         * @static
         * @param {msg.IBodyReq} message BodyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BodyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BodyReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.BodyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.BodyReq} BodyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BodyReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.BodyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.msgId = reader.int32();
                        break;
                    }
                case 2: {
                        message.seq = reader.uint64();
                        break;
                    }
                case 3: {
                        message.needEcho = reader.bool();
                        break;
                    }
                case 10: {
                        message.commonReq = $root.msg.CommonReq.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.joinReq = $root.msg.JoinReq.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.quitReq = $root.msg.QuitReq.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.operateReq = $root.msg.OperateReq.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BodyReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.BodyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.BodyReq} BodyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BodyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BodyReq message.
         * @function verify
         * @memberof msg.BodyReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BodyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                switch (message.msgId) {
                default:
                    return "msgId: enum value expected";
                case 0:
                case 10001:
                case 20001:
                case 11001:
                case 21001:
                case 11002:
                case 21002:
                case 11003:
                case 21003:
                case 50001:
                case 50002:
                case 50003:
                case 50004:
                case 51005:
                    break;
                }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.needEcho != null && message.hasOwnProperty("needEcho"))
                if (typeof message.needEcho !== "boolean")
                    return "needEcho: boolean expected";
            if (message.commonReq != null && message.hasOwnProperty("commonReq")) {
                properties.Body = 1;
                {
                    var error = $root.msg.CommonReq.verify(message.commonReq);
                    if (error)
                        return "commonReq." + error;
                }
            }
            if (message.joinReq != null && message.hasOwnProperty("joinReq")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.JoinReq.verify(message.joinReq);
                    if (error)
                        return "joinReq." + error;
                }
            }
            if (message.quitReq != null && message.hasOwnProperty("quitReq")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.QuitReq.verify(message.quitReq);
                    if (error)
                        return "quitReq." + error;
                }
            }
            if (message.operateReq != null && message.hasOwnProperty("operateReq")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.OperateReq.verify(message.operateReq);
                    if (error)
                        return "operateReq." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BodyReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.BodyReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.BodyReq} BodyReq
         */
        BodyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.BodyReq)
                return object;
            var message = new $root.msg.BodyReq();
            switch (object.msgId) {
            default:
                if (typeof object.msgId === "number") {
                    message.msgId = object.msgId;
                    break;
                }
                break;
            case "MID_NULL":
            case 0:
                message.msgId = 0;
                break;
            case "MID_REQ_CONNECT_PLUSE":
            case 10001:
                message.msgId = 10001;
                break;
            case "MID_RSP_CONNECT_PLUSE":
            case 20001:
                message.msgId = 20001;
                break;
            case "MID_REQ_JOIN":
            case 11001:
                message.msgId = 11001;
                break;
            case "MID_RSP_JOIN":
            case 21001:
                message.msgId = 21001;
                break;
            case "MID_REQ_QUIT":
            case 11002:
                message.msgId = 11002;
                break;
            case "MID_RSP_QUIT":
            case 21002:
                message.msgId = 21002;
                break;
            case "MID_REQ_OPERATE":
            case 11003:
                message.msgId = 11003;
                break;
            case "MID_RSP_OPERATE":
            case 21003:
                message.msgId = 21003;
                break;
            case "MID_NTF_JOIN":
            case 50001:
                message.msgId = 50001;
                break;
            case "MID_NTF_QUIT":
            case 50002:
                message.msgId = 50002;
                break;
            case "MID_NTF_GAME_START":
            case 50003:
                message.msgId = 50003;
                break;
            case "MID_NTF_GAME_END":
            case 50004:
                message.msgId = 50004;
                break;
            case "MID_NTF_OPERATE":
            case 51005:
                message.msgId = 51005;
                break;
            }
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = true;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber(true);
            if (object.needEcho != null)
                message.needEcho = Boolean(object.needEcho);
            if (object.commonReq != null) {
                if (typeof object.commonReq !== "object")
                    throw TypeError(".msg.BodyReq.commonReq: object expected");
                message.commonReq = $root.msg.CommonReq.fromObject(object.commonReq);
            }
            if (object.joinReq != null) {
                if (typeof object.joinReq !== "object")
                    throw TypeError(".msg.BodyReq.joinReq: object expected");
                message.joinReq = $root.msg.JoinReq.fromObject(object.joinReq);
            }
            if (object.quitReq != null) {
                if (typeof object.quitReq !== "object")
                    throw TypeError(".msg.BodyReq.quitReq: object expected");
                message.quitReq = $root.msg.QuitReq.fromObject(object.quitReq);
            }
            if (object.operateReq != null) {
                if (typeof object.operateReq !== "object")
                    throw TypeError(".msg.BodyReq.operateReq: object expected");
                message.operateReq = $root.msg.OperateReq.fromObject(object.operateReq);
            }
            return message;
        };

        /**
         * Creates a plain object from a BodyReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.BodyReq
         * @static
         * @param {msg.BodyReq} message BodyReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BodyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msgId = options.enums === String ? "MID_NULL" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                object.needEcho = false;
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = options.enums === String ? $root.msg.MsgId[message.msgId] === undefined ? message.msgId : $root.msg.MsgId[message.msgId] : message.msgId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber(true) : message.seq;
            if (message.needEcho != null && message.hasOwnProperty("needEcho"))
                object.needEcho = message.needEcho;
            if (message.commonReq != null && message.hasOwnProperty("commonReq")) {
                object.commonReq = $root.msg.CommonReq.toObject(message.commonReq, options);
                if (options.oneofs)
                    object.Body = "commonReq";
            }
            if (message.joinReq != null && message.hasOwnProperty("joinReq")) {
                object.joinReq = $root.msg.JoinReq.toObject(message.joinReq, options);
                if (options.oneofs)
                    object.Body = "joinReq";
            }
            if (message.quitReq != null && message.hasOwnProperty("quitReq")) {
                object.quitReq = $root.msg.QuitReq.toObject(message.quitReq, options);
                if (options.oneofs)
                    object.Body = "quitReq";
            }
            if (message.operateReq != null && message.hasOwnProperty("operateReq")) {
                object.operateReq = $root.msg.OperateReq.toObject(message.operateReq, options);
                if (options.oneofs)
                    object.Body = "operateReq";
            }
            return object;
        };

        /**
         * Converts this BodyReq to JSON.
         * @function toJSON
         * @memberof msg.BodyReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BodyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BodyReq
         * @function getTypeUrl
         * @memberof msg.BodyReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BodyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.BodyReq";
        };

        return BodyReq;
    })();

    msg.BodyRsp = (function() {

        /**
         * Properties of a BodyRsp.
         * @memberof msg
         * @interface IBodyRsp
         * @property {msg.MsgId|null} [msgId] BodyRsp msgId
         * @property {number|Long|null} [seq] BodyRsp seq
         * @property {msg.StatusCode|null} [status] BodyRsp status
         * @property {string|null} [errorMsg] BodyRsp errorMsg
         * @property {msg.ICommonRsp|null} [commonRsp] BodyRsp commonRsp
         * @property {msg.IJoinRsp|null} [joinRsp] BodyRsp joinRsp
         * @property {msg.IJoinNtf|null} [joinNtf] BodyRsp joinNtf
         * @property {msg.IQuitRsp|null} [quitRsp] BodyRsp quitRsp
         * @property {msg.IQuitNtf|null} [quitNtf] BodyRsp quitNtf
         * @property {msg.IGameStartNtf|null} [gameStartNtf] BodyRsp gameStartNtf
         * @property {msg.IGameEndNtf|null} [gameEndNtf] BodyRsp gameEndNtf
         * @property {msg.IOperateRsp|null} [operateRsp] BodyRsp operateRsp
         * @property {msg.IOperateNtf|null} [operateNtf] BodyRsp operateNtf
         */

        /**
         * Constructs a new BodyRsp.
         * @memberof msg
         * @classdesc Represents a BodyRsp.
         * @implements IBodyRsp
         * @constructor
         * @param {msg.IBodyRsp=} [properties] Properties to set
         */
        function BodyRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BodyRsp msgId.
         * @member {msg.MsgId} msgId
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.msgId = 0;

        /**
         * BodyRsp seq.
         * @member {number|Long} seq
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BodyRsp status.
         * @member {msg.StatusCode} status
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.status = 0;

        /**
         * BodyRsp errorMsg.
         * @member {string} errorMsg
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.errorMsg = "";

        /**
         * BodyRsp commonRsp.
         * @member {msg.ICommonRsp|null|undefined} commonRsp
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.commonRsp = null;

        /**
         * BodyRsp joinRsp.
         * @member {msg.IJoinRsp|null|undefined} joinRsp
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.joinRsp = null;

        /**
         * BodyRsp joinNtf.
         * @member {msg.IJoinNtf|null|undefined} joinNtf
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.joinNtf = null;

        /**
         * BodyRsp quitRsp.
         * @member {msg.IQuitRsp|null|undefined} quitRsp
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.quitRsp = null;

        /**
         * BodyRsp quitNtf.
         * @member {msg.IQuitNtf|null|undefined} quitNtf
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.quitNtf = null;

        /**
         * BodyRsp gameStartNtf.
         * @member {msg.IGameStartNtf|null|undefined} gameStartNtf
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.gameStartNtf = null;

        /**
         * BodyRsp gameEndNtf.
         * @member {msg.IGameEndNtf|null|undefined} gameEndNtf
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.gameEndNtf = null;

        /**
         * BodyRsp operateRsp.
         * @member {msg.IOperateRsp|null|undefined} operateRsp
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.operateRsp = null;

        /**
         * BodyRsp operateNtf.
         * @member {msg.IOperateNtf|null|undefined} operateNtf
         * @memberof msg.BodyRsp
         * @instance
         */
        BodyRsp.prototype.operateNtf = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * BodyRsp Body.
         * @member {"commonRsp"|"joinRsp"|"joinNtf"|"quitRsp"|"quitNtf"|"gameStartNtf"|"gameEndNtf"|"operateRsp"|"operateNtf"|undefined} Body
         * @memberof msg.BodyRsp
         * @instance
         */
        Object.defineProperty(BodyRsp.prototype, "Body", {
            get: $util.oneOfGetter($oneOfFields = ["commonRsp", "joinRsp", "joinNtf", "quitRsp", "quitNtf", "gameStartNtf", "gameEndNtf", "operateRsp", "operateNtf"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BodyRsp instance using the specified properties.
         * @function create
         * @memberof msg.BodyRsp
         * @static
         * @param {msg.IBodyRsp=} [properties] Properties to set
         * @returns {msg.BodyRsp} BodyRsp instance
         */
        BodyRsp.create = function create(properties) {
            return new BodyRsp(properties);
        };

        /**
         * Encodes the specified BodyRsp message. Does not implicitly {@link msg.BodyRsp.verify|verify} messages.
         * @function encode
         * @memberof msg.BodyRsp
         * @static
         * @param {msg.IBodyRsp} message BodyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BodyRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.seq);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.errorMsg != null && Object.hasOwnProperty.call(message, "errorMsg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.errorMsg);
            if (message.commonRsp != null && Object.hasOwnProperty.call(message, "commonRsp"))
                $root.msg.CommonRsp.encode(message.commonRsp, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.joinRsp != null && Object.hasOwnProperty.call(message, "joinRsp"))
                $root.msg.JoinRsp.encode(message.joinRsp, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.joinNtf != null && Object.hasOwnProperty.call(message, "joinNtf"))
                $root.msg.JoinNtf.encode(message.joinNtf, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.quitRsp != null && Object.hasOwnProperty.call(message, "quitRsp"))
                $root.msg.QuitRsp.encode(message.quitRsp, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.quitNtf != null && Object.hasOwnProperty.call(message, "quitNtf"))
                $root.msg.QuitNtf.encode(message.quitNtf, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.gameStartNtf != null && Object.hasOwnProperty.call(message, "gameStartNtf"))
                $root.msg.GameStartNtf.encode(message.gameStartNtf, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.gameEndNtf != null && Object.hasOwnProperty.call(message, "gameEndNtf"))
                $root.msg.GameEndNtf.encode(message.gameEndNtf, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.operateRsp != null && Object.hasOwnProperty.call(message, "operateRsp"))
                $root.msg.OperateRsp.encode(message.operateRsp, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.operateNtf != null && Object.hasOwnProperty.call(message, "operateNtf"))
                $root.msg.OperateNtf.encode(message.operateNtf, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BodyRsp message, length delimited. Does not implicitly {@link msg.BodyRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.BodyRsp
         * @static
         * @param {msg.IBodyRsp} message BodyRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BodyRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BodyRsp message from the specified reader or buffer.
         * @function decode
         * @memberof msg.BodyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.BodyRsp} BodyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BodyRsp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.BodyRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.msgId = reader.int32();
                        break;
                    }
                case 2: {
                        message.seq = reader.uint64();
                        break;
                    }
                case 3: {
                        message.status = reader.int32();
                        break;
                    }
                case 4: {
                        message.errorMsg = reader.string();
                        break;
                    }
                case 10: {
                        message.commonRsp = $root.msg.CommonRsp.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.joinRsp = $root.msg.JoinRsp.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.joinNtf = $root.msg.JoinNtf.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.quitRsp = $root.msg.QuitRsp.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.quitNtf = $root.msg.QuitNtf.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.gameStartNtf = $root.msg.GameStartNtf.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.gameEndNtf = $root.msg.GameEndNtf.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.operateRsp = $root.msg.OperateRsp.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.operateNtf = $root.msg.OperateNtf.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BodyRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.BodyRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.BodyRsp} BodyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BodyRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BodyRsp message.
         * @function verify
         * @memberof msg.BodyRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BodyRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                switch (message.msgId) {
                default:
                    return "msgId: enum value expected";
                case 0:
                case 10001:
                case 20001:
                case 11001:
                case 21001:
                case 11002:
                case 21002:
                case 11003:
                case 21003:
                case 50001:
                case 50002:
                case 50003:
                case 50004:
                case 51005:
                    break;
                }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 1000:
                case 1001:
                    break;
                }
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                if (!$util.isString(message.errorMsg))
                    return "errorMsg: string expected";
            if (message.commonRsp != null && message.hasOwnProperty("commonRsp")) {
                properties.Body = 1;
                {
                    var error = $root.msg.CommonRsp.verify(message.commonRsp);
                    if (error)
                        return "commonRsp." + error;
                }
            }
            if (message.joinRsp != null && message.hasOwnProperty("joinRsp")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.JoinRsp.verify(message.joinRsp);
                    if (error)
                        return "joinRsp." + error;
                }
            }
            if (message.joinNtf != null && message.hasOwnProperty("joinNtf")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.JoinNtf.verify(message.joinNtf);
                    if (error)
                        return "joinNtf." + error;
                }
            }
            if (message.quitRsp != null && message.hasOwnProperty("quitRsp")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.QuitRsp.verify(message.quitRsp);
                    if (error)
                        return "quitRsp." + error;
                }
            }
            if (message.quitNtf != null && message.hasOwnProperty("quitNtf")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.QuitNtf.verify(message.quitNtf);
                    if (error)
                        return "quitNtf." + error;
                }
            }
            if (message.gameStartNtf != null && message.hasOwnProperty("gameStartNtf")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.GameStartNtf.verify(message.gameStartNtf);
                    if (error)
                        return "gameStartNtf." + error;
                }
            }
            if (message.gameEndNtf != null && message.hasOwnProperty("gameEndNtf")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.GameEndNtf.verify(message.gameEndNtf);
                    if (error)
                        return "gameEndNtf." + error;
                }
            }
            if (message.operateRsp != null && message.hasOwnProperty("operateRsp")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.OperateRsp.verify(message.operateRsp);
                    if (error)
                        return "operateRsp." + error;
                }
            }
            if (message.operateNtf != null && message.hasOwnProperty("operateNtf")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.msg.OperateNtf.verify(message.operateNtf);
                    if (error)
                        return "operateNtf." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BodyRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.BodyRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.BodyRsp} BodyRsp
         */
        BodyRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.BodyRsp)
                return object;
            var message = new $root.msg.BodyRsp();
            switch (object.msgId) {
            default:
                if (typeof object.msgId === "number") {
                    message.msgId = object.msgId;
                    break;
                }
                break;
            case "MID_NULL":
            case 0:
                message.msgId = 0;
                break;
            case "MID_REQ_CONNECT_PLUSE":
            case 10001:
                message.msgId = 10001;
                break;
            case "MID_RSP_CONNECT_PLUSE":
            case 20001:
                message.msgId = 20001;
                break;
            case "MID_REQ_JOIN":
            case 11001:
                message.msgId = 11001;
                break;
            case "MID_RSP_JOIN":
            case 21001:
                message.msgId = 21001;
                break;
            case "MID_REQ_QUIT":
            case 11002:
                message.msgId = 11002;
                break;
            case "MID_RSP_QUIT":
            case 21002:
                message.msgId = 21002;
                break;
            case "MID_REQ_OPERATE":
            case 11003:
                message.msgId = 11003;
                break;
            case "MID_RSP_OPERATE":
            case 21003:
                message.msgId = 21003;
                break;
            case "MID_NTF_JOIN":
            case 50001:
                message.msgId = 50001;
                break;
            case "MID_NTF_QUIT":
            case 50002:
                message.msgId = 50002;
                break;
            case "MID_NTF_GAME_START":
            case 50003:
                message.msgId = 50003;
                break;
            case "MID_NTF_GAME_END":
            case 50004:
                message.msgId = 50004;
                break;
            case "MID_NTF_OPERATE":
            case 51005:
                message.msgId = 51005;
                break;
            }
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = true;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber(true);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "SC_SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "SC_FAILED":
            case 1:
                message.status = 1;
                break;
            case "SC_PARAM_ERROR":
            case 2:
                message.status = 2;
                break;
            case "SC_CONFIG_ERROR":
            case 3:
                message.status = 3;
                break;
            case "SC_ALEADY_IN_ROOM":
            case 1000:
                message.status = 1000;
                break;
            case "SC_ROOM_FULL":
            case 1001:
                message.status = 1001;
                break;
            }
            if (object.errorMsg != null)
                message.errorMsg = String(object.errorMsg);
            if (object.commonRsp != null) {
                if (typeof object.commonRsp !== "object")
                    throw TypeError(".msg.BodyRsp.commonRsp: object expected");
                message.commonRsp = $root.msg.CommonRsp.fromObject(object.commonRsp);
            }
            if (object.joinRsp != null) {
                if (typeof object.joinRsp !== "object")
                    throw TypeError(".msg.BodyRsp.joinRsp: object expected");
                message.joinRsp = $root.msg.JoinRsp.fromObject(object.joinRsp);
            }
            if (object.joinNtf != null) {
                if (typeof object.joinNtf !== "object")
                    throw TypeError(".msg.BodyRsp.joinNtf: object expected");
                message.joinNtf = $root.msg.JoinNtf.fromObject(object.joinNtf);
            }
            if (object.quitRsp != null) {
                if (typeof object.quitRsp !== "object")
                    throw TypeError(".msg.BodyRsp.quitRsp: object expected");
                message.quitRsp = $root.msg.QuitRsp.fromObject(object.quitRsp);
            }
            if (object.quitNtf != null) {
                if (typeof object.quitNtf !== "object")
                    throw TypeError(".msg.BodyRsp.quitNtf: object expected");
                message.quitNtf = $root.msg.QuitNtf.fromObject(object.quitNtf);
            }
            if (object.gameStartNtf != null) {
                if (typeof object.gameStartNtf !== "object")
                    throw TypeError(".msg.BodyRsp.gameStartNtf: object expected");
                message.gameStartNtf = $root.msg.GameStartNtf.fromObject(object.gameStartNtf);
            }
            if (object.gameEndNtf != null) {
                if (typeof object.gameEndNtf !== "object")
                    throw TypeError(".msg.BodyRsp.gameEndNtf: object expected");
                message.gameEndNtf = $root.msg.GameEndNtf.fromObject(object.gameEndNtf);
            }
            if (object.operateRsp != null) {
                if (typeof object.operateRsp !== "object")
                    throw TypeError(".msg.BodyRsp.operateRsp: object expected");
                message.operateRsp = $root.msg.OperateRsp.fromObject(object.operateRsp);
            }
            if (object.operateNtf != null) {
                if (typeof object.operateNtf !== "object")
                    throw TypeError(".msg.BodyRsp.operateNtf: object expected");
                message.operateNtf = $root.msg.OperateNtf.fromObject(object.operateNtf);
            }
            return message;
        };

        /**
         * Creates a plain object from a BodyRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.BodyRsp
         * @static
         * @param {msg.BodyRsp} message BodyRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BodyRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msgId = options.enums === String ? "MID_NULL" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                object.status = options.enums === String ? "SC_SUCCESS" : 0;
                object.errorMsg = "";
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = options.enums === String ? $root.msg.MsgId[message.msgId] === undefined ? message.msgId : $root.msg.MsgId[message.msgId] : message.msgId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber(true) : message.seq;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.msg.StatusCode[message.status] === undefined ? message.status : $root.msg.StatusCode[message.status] : message.status;
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                object.errorMsg = message.errorMsg;
            if (message.commonRsp != null && message.hasOwnProperty("commonRsp")) {
                object.commonRsp = $root.msg.CommonRsp.toObject(message.commonRsp, options);
                if (options.oneofs)
                    object.Body = "commonRsp";
            }
            if (message.joinRsp != null && message.hasOwnProperty("joinRsp")) {
                object.joinRsp = $root.msg.JoinRsp.toObject(message.joinRsp, options);
                if (options.oneofs)
                    object.Body = "joinRsp";
            }
            if (message.joinNtf != null && message.hasOwnProperty("joinNtf")) {
                object.joinNtf = $root.msg.JoinNtf.toObject(message.joinNtf, options);
                if (options.oneofs)
                    object.Body = "joinNtf";
            }
            if (message.quitRsp != null && message.hasOwnProperty("quitRsp")) {
                object.quitRsp = $root.msg.QuitRsp.toObject(message.quitRsp, options);
                if (options.oneofs)
                    object.Body = "quitRsp";
            }
            if (message.quitNtf != null && message.hasOwnProperty("quitNtf")) {
                object.quitNtf = $root.msg.QuitNtf.toObject(message.quitNtf, options);
                if (options.oneofs)
                    object.Body = "quitNtf";
            }
            if (message.gameStartNtf != null && message.hasOwnProperty("gameStartNtf")) {
                object.gameStartNtf = $root.msg.GameStartNtf.toObject(message.gameStartNtf, options);
                if (options.oneofs)
                    object.Body = "gameStartNtf";
            }
            if (message.gameEndNtf != null && message.hasOwnProperty("gameEndNtf")) {
                object.gameEndNtf = $root.msg.GameEndNtf.toObject(message.gameEndNtf, options);
                if (options.oneofs)
                    object.Body = "gameEndNtf";
            }
            if (message.operateRsp != null && message.hasOwnProperty("operateRsp")) {
                object.operateRsp = $root.msg.OperateRsp.toObject(message.operateRsp, options);
                if (options.oneofs)
                    object.Body = "operateRsp";
            }
            if (message.operateNtf != null && message.hasOwnProperty("operateNtf")) {
                object.operateNtf = $root.msg.OperateNtf.toObject(message.operateNtf, options);
                if (options.oneofs)
                    object.Body = "operateNtf";
            }
            return object;
        };

        /**
         * Converts this BodyRsp to JSON.
         * @function toJSON
         * @memberof msg.BodyRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BodyRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BodyRsp
         * @function getTypeUrl
         * @memberof msg.BodyRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BodyRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/msg.BodyRsp";
        };

        return BodyRsp;
    })();

    return msg;
})();

module.exports = $root;
