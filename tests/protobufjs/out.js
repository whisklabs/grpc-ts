/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.api = (function() {

        /**
         * Namespace api.
         * @memberof google
         * @namespace
         */
        const api = {};

        api.Http = (function() {

            /**
             * Properties of a Http.
             * @memberof google.api
             * @interface IHttp
             * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
             */

            /**
             * Constructs a new Http.
             * @memberof google.api
             * @classdesc Represents a Http.
             * @implements IHttp
             * @constructor
             * @param {google.api.IHttp=} [properties] Properties to set
             */
            function Http(properties) {
                this.rules = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Http rules.
             * @member {Array.<google.api.IHttpRule>} rules
             * @memberof google.api.Http
             * @instance
             */
            Http.prototype.rules = $util.emptyArray;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @function encode
             * @memberof google.api.Http
             * @static
             * @param {google.api.IHttp} message Http message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Http.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rules != null && message.rules.length)
                    for (let i = 0; i < message.rules.length; ++i)
                        $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.Http
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.Http} Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Http.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.rules && message.rules.length))
                            message.rules = [];
                        message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Http;
        })();

        api.HttpRule = (function() {

            /**
             * Properties of a HttpRule.
             * @memberof google.api
             * @interface IHttpRule
             * @property {string|null} [get] HttpRule get
             * @property {string|null} [put] HttpRule put
             * @property {string|null} [post] HttpRule post
             * @property {string|null} ["delete"] HttpRule delete
             * @property {string|null} [patch] HttpRule patch
             * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
             * @property {string|null} [selector] HttpRule selector
             * @property {string|null} [body] HttpRule body
             * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
             */

            /**
             * Constructs a new HttpRule.
             * @memberof google.api
             * @classdesc Represents a HttpRule.
             * @implements IHttpRule
             * @constructor
             * @param {google.api.IHttpRule=} [properties] Properties to set
             */
            function HttpRule(properties) {
                this.additionalBindings = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HttpRule get.
             * @member {string} get
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.get = "";

            /**
             * HttpRule put.
             * @member {string} put
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.put = "";

            /**
             * HttpRule post.
             * @member {string} post
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.post = "";

            /**
             * HttpRule delete.
             * @member {string} delete
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype["delete"] = "";

            /**
             * HttpRule patch.
             * @member {string} patch
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.patch = "";

            /**
             * HttpRule custom.
             * @member {google.api.ICustomHttpPattern|null|undefined} custom
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.custom = null;

            /**
             * HttpRule selector.
             * @member {string} selector
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.selector = "";

            /**
             * HttpRule body.
             * @member {string} body
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.body = "";

            /**
             * HttpRule additionalBindings.
             * @member {Array.<google.api.IHttpRule>} additionalBindings
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.additionalBindings = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * HttpRule pattern.
             * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
             * @memberof google.api.HttpRule
             * @instance
             */
            Object.defineProperty(HttpRule.prototype, "pattern", {
                get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @function encode
             * @memberof google.api.HttpRule
             * @static
             * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HttpRule.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                if (message.put != null && Object.hasOwnProperty.call(message, "put"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                if (message.post != null && Object.hasOwnProperty.call(message, "post"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                if (message.patch != null && Object.hasOwnProperty.call(message, "patch"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                if (message.custom != null && Object.hasOwnProperty.call(message, "custom"))
                    $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.additionalBindings != null && message.additionalBindings.length)
                    for (let i = 0; i < message.additionalBindings.length; ++i)
                        $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.HttpRule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.HttpRule} HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HttpRule.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.get = reader.string();
                        break;
                    case 3:
                        message.put = reader.string();
                        break;
                    case 4:
                        message.post = reader.string();
                        break;
                    case 5:
                        message["delete"] = reader.string();
                        break;
                    case 6:
                        message.patch = reader.string();
                        break;
                    case 8:
                        message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                        break;
                    case 1:
                        message.selector = reader.string();
                        break;
                    case 7:
                        message.body = reader.string();
                        break;
                    case 11:
                        if (!(message.additionalBindings && message.additionalBindings.length))
                            message.additionalBindings = [];
                        message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return HttpRule;
        })();

        api.CustomHttpPattern = (function() {

            /**
             * Properties of a CustomHttpPattern.
             * @memberof google.api
             * @interface ICustomHttpPattern
             * @property {string|null} [kind] CustomHttpPattern kind
             * @property {string|null} [path] CustomHttpPattern path
             */

            /**
             * Constructs a new CustomHttpPattern.
             * @memberof google.api
             * @classdesc Represents a CustomHttpPattern.
             * @implements ICustomHttpPattern
             * @constructor
             * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
             */
            function CustomHttpPattern(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CustomHttpPattern kind.
             * @member {string} kind
             * @memberof google.api.CustomHttpPattern
             * @instance
             */
            CustomHttpPattern.prototype.kind = "";

            /**
             * CustomHttpPattern path.
             * @member {string} path
             * @memberof google.api.CustomHttpPattern
             * @instance
             */
            CustomHttpPattern.prototype.path = "";

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @function encode
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomHttpPattern.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                return writer;
            };

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.CustomHttpPattern} CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomHttpPattern.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.kind = reader.string();
                        break;
                    case 2:
                        message.path = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CustomHttpPattern;
        })();

        api.HttpBody = (function() {

            /**
             * Properties of a HttpBody.
             * @memberof google.api
             * @interface IHttpBody
             * @property {string|null} [contentType] HttpBody contentType
             * @property {Uint8Array|null} [data] HttpBody data
             * @property {Array.<google.protobuf.IAny>|null} [extensions] HttpBody extensions
             */

            /**
             * Constructs a new HttpBody.
             * @memberof google.api
             * @classdesc Represents a HttpBody.
             * @implements IHttpBody
             * @constructor
             * @param {google.api.IHttpBody=} [properties] Properties to set
             */
            function HttpBody(properties) {
                this.extensions = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HttpBody contentType.
             * @member {string} contentType
             * @memberof google.api.HttpBody
             * @instance
             */
            HttpBody.prototype.contentType = "";

            /**
             * HttpBody data.
             * @member {Uint8Array} data
             * @memberof google.api.HttpBody
             * @instance
             */
            HttpBody.prototype.data = $util.newBuffer([]);

            /**
             * HttpBody extensions.
             * @member {Array.<google.protobuf.IAny>} extensions
             * @memberof google.api.HttpBody
             * @instance
             */
            HttpBody.prototype.extensions = $util.emptyArray;

            /**
             * Encodes the specified HttpBody message. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @function encode
             * @memberof google.api.HttpBody
             * @static
             * @param {google.api.IHttpBody} message HttpBody message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HttpBody.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.contentType);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                if (message.extensions != null && message.extensions.length)
                    for (let i = 0; i < message.extensions.length; ++i)
                        $root.google.protobuf.Any.encode(message.extensions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a HttpBody message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.HttpBody
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.HttpBody} HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HttpBody.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpBody();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contentType = reader.string();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    case 3:
                        if (!(message.extensions && message.extensions.length))
                            message.extensions = [];
                        message.extensions.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return HttpBody;
        })();

        return api;
    })();

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (let i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (let i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (let i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (let i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.publicDependency && message.publicDependency.length))
                            message.publicDependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.publicDependency.push(reader.int32());
                        } else
                            message.publicDependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weakDependency && message.weakDependency.length))
                            message.weakDependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weakDependency.push(reader.int32());
                        } else
                            message.weakDependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.messageType && message.messageType.length))
                            message.messageType = [];
                        message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (let i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (let i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (let i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (let i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (let i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (let i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nestedType && message.nestedType.length))
                            message.nestedType = [];
                        message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extensionRange && message.extensionRange.length))
                            message.extensionRange = [];
                        message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneofDecl && message.oneofDecl.length))
                            message.oneofDecl = [];
                        message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reservedRange && message.reservedRange.length))
                            message.reservedRange = [];
                        message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reservedName && message.reservedName.length))
                            message.reservedName = [];
                        message.reservedName.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string|null} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number} oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string} jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                return writer;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.typeName = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.defaultValue = reader.string();
                        break;
                    case 9:
                        message.oneofIndex = reader.int32();
                        break;
                    case 10:
                        message.jsonName = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (let i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (let i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean} clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean} serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.inputType = reader.string();
                        break;
                    case 3:
                        message.outputType = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.clientStreaming = reader.bool();
                        break;
                    case 6:
                        message.serverStreaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean} javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean} ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @member {string} objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string} csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.javaPackage = reader.string();
                        break;
                    case 8:
                        message.javaOuterClassname = reader.string();
                        break;
                    case 10:
                        message.javaMultipleFiles = reader.bool();
                        break;
                    case 20:
                        message.javaGenerateEqualsAndHash = reader.bool();
                        break;
                    case 27:
                        message.javaStringCheckUtf8 = reader.bool();
                        break;
                    case 9:
                        message.optimizeFor = reader.int32();
                        break;
                    case 11:
                        message.goPackage = reader.string();
                        break;
                    case 16:
                        message.ccGenericServices = reader.bool();
                        break;
                    case 17:
                        message.javaGenericServices = reader.bool();
                        break;
                    case 18:
                        message.pyGenericServices = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.ccEnableArenas = reader.bool();
                        break;
                    case 36:
                        message.objcClassPrefix = reader.string();
                        break;
                    case 37:
                        message.csharpNamespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean} mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.messageSetWireFormat = reader.bool();
                        break;
                    case 2:
                        message.noStandardDescriptorAccessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.mapEntry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allowAlias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             * @property {google.api.IHttpRule|null} [".google.api.http"] MethodOptions .google.api.http
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MethodOptions .google.api.http.
             * @member {google.api.IHttpRule|null|undefined} .google.api.http
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype[".google.api.http"] = null;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".google.api.http"] != null && Object.hasOwnProperty.call(message, ".google.api.http"))
                    $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 72295728:
                        message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (let i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifierValue = reader.string();
                        break;
                    case 4:
                        message.positiveIntValue = reader.uint64();
                        break;
                    case 5:
                        message.negativeIntValue = reader.int64();
                        break;
                    case 6:
                        message.doubleValue = reader.double();
                        break;
                    case 7:
                        message.stringValue = reader.bytes();
                        break;
                    case 8:
                        message.aggregateValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.namePart = reader.string();
                            break;
                        case 2:
                            message.isExtension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (let i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>} leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (let i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leadingComments = reader.string();
                            break;
                        case 4:
                            message.trailingComments = reader.string();
                            break;
                        case 6:
                            if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                message.leadingDetachedComments = [];
                            message.leadingDetachedComments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (let i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [sourceFile] Annotation sourceFile
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string} sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.sourceFile = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Any;
        })();

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {number|Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Duration nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = 0;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Duration;
        })();

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Empty;
        })();

        protobuf.FieldMask = (function() {

            /**
             * Properties of a FieldMask.
             * @memberof google.protobuf
             * @interface IFieldMask
             * @property {Array.<string>|null} [paths] FieldMask paths
             */

            /**
             * Constructs a new FieldMask.
             * @memberof google.protobuf
             * @classdesc Represents a FieldMask.
             * @implements IFieldMask
             * @constructor
             * @param {google.protobuf.IFieldMask=} [properties] Properties to set
             */
            function FieldMask(properties) {
                this.paths = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldMask paths.
             * @member {Array.<string>} paths
             * @memberof google.protobuf.FieldMask
             * @instance
             */
            FieldMask.prototype.paths = $util.emptyArray;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldMask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.paths != null && message.paths.length)
                    for (let i = 0; i < message.paths.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.paths[i]);
                return writer;
            };

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldMask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldMask} FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldMask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldMask();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.paths && message.paths.length))
                            message.paths = [];
                        message.paths.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FieldMask;
        })();

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                    for (let keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.fields === $util.emptyObject)
                            message.fields = {};
                        key = reader.string();
                        reader.pos++;
                        message.fields[key] = $root.google.protobuf.Value.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = 0;

            /**
             * Value numberValue.
             * @member {number} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = 0;

            /**
             * Value stringValue.
             * @member {string} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = "";

            /**
             * Value boolValue.
             * @member {boolean} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = false;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && Object.hasOwnProperty.call(message, "nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && Object.hasOwnProperty.call(message, "structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && Object.hasOwnProperty.call(message, "listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nullValue = reader.int32();
                        break;
                    case 2:
                        message.numberValue = reader.double();
                        break;
                    case 3:
                        message.stringValue = reader.string();
                        break;
                    case 4:
                        message.boolValue = reader.bool();
                        break;
                    case 5:
                        message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {number}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (let i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ListValue;
        })();

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Timestamp;
        })();

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

export const whisk = $root.whisk = (() => {

    /**
     * Namespace whisk.
     * @exports whisk
     * @namespace
     */
    const whisk = {};

    whisk.api = (function() {

        /**
         * Namespace api.
         * @memberof whisk
         * @namespace
         */
        const api = {};

        api.shared = (function() {

            /**
             * Namespace shared.
             * @memberof whisk.api
             * @namespace
             */
            const shared = {};

            shared.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof whisk.api.shared
                 * @namespace
                 */
                const v1 = {};

                v1.Test = (function() {

                    /**
                     * Properties of a Test.
                     * @memberof whisk.api.shared.v1
                     * @interface ITest
                     * @property {string|null} [string] Test string
                     * @property {number|null} [uint32] Test uint32
                     * @property {whisk.api.shared.v1.Test.IInner|null} [inner] Test inner
                     * @property {number|null} [float] Test float
                     */

                    /**
                     * Constructs a new Test.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents a Test.
                     * @implements ITest
                     * @constructor
                     * @param {whisk.api.shared.v1.ITest=} [properties] Properties to set
                     */
                    function Test(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Test string.
                     * @member {string} string
                     * @memberof whisk.api.shared.v1.Test
                     * @instance
                     */
                    Test.prototype.string = "";

                    /**
                     * Test uint32.
                     * @member {number} uint32
                     * @memberof whisk.api.shared.v1.Test
                     * @instance
                     */
                    Test.prototype.uint32 = 0;

                    /**
                     * Test inner.
                     * @member {whisk.api.shared.v1.Test.IInner|null|undefined} inner
                     * @memberof whisk.api.shared.v1.Test
                     * @instance
                     */
                    Test.prototype.inner = null;

                    /**
                     * Test float.
                     * @member {number} float
                     * @memberof whisk.api.shared.v1.Test
                     * @instance
                     */
                    Test.prototype.float = 0;

                    /**
                     * Encodes the specified Test message. Does not implicitly {@link whisk.api.shared.v1.Test.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Test
                     * @static
                     * @param {whisk.api.shared.v1.ITest} message Test message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Test.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.string != null && Object.hasOwnProperty.call(message, "string"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.string);
                        if (message.uint32 != null && Object.hasOwnProperty.call(message, "uint32"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uint32);
                        if (message.inner != null && Object.hasOwnProperty.call(message, "inner"))
                            $root.whisk.api.shared.v1.Test.Inner.encode(message.inner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.float != null && Object.hasOwnProperty.call(message, "float"))
                            writer.uint32(/* id 4, wireType 5 =*/37).float(message.float);
                        return writer;
                    };

                    /**
                     * Decodes a Test message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Test
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Test} Test
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Test.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Test();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.string = reader.string();
                                break;
                            case 2:
                                message.uint32 = reader.uint32();
                                break;
                            case 3:
                                message.inner = $root.whisk.api.shared.v1.Test.Inner.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.float = reader.float();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Test.Inner = (function() {

                        /**
                         * Properties of an Inner.
                         * @memberof whisk.api.shared.v1.Test
                         * @interface IInner
                         * @property {number|null} [int32] Inner int32
                         * @property {whisk.api.shared.v1.Test.Inner.IInnerInner|null} [innerInner] Inner innerInner
                         * @property {whisk.api.shared.v1.IOuter|null} [outer] Inner outer
                         */

                        /**
                         * Constructs a new Inner.
                         * @memberof whisk.api.shared.v1.Test
                         * @classdesc Represents an Inner.
                         * @implements IInner
                         * @constructor
                         * @param {whisk.api.shared.v1.Test.IInner=} [properties] Properties to set
                         */
                        function Inner(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Inner int32.
                         * @member {number} int32
                         * @memberof whisk.api.shared.v1.Test.Inner
                         * @instance
                         */
                        Inner.prototype.int32 = 0;

                        /**
                         * Inner innerInner.
                         * @member {whisk.api.shared.v1.Test.Inner.IInnerInner|null|undefined} innerInner
                         * @memberof whisk.api.shared.v1.Test.Inner
                         * @instance
                         */
                        Inner.prototype.innerInner = null;

                        /**
                         * Inner outer.
                         * @member {whisk.api.shared.v1.IOuter|null|undefined} outer
                         * @memberof whisk.api.shared.v1.Test.Inner
                         * @instance
                         */
                        Inner.prototype.outer = null;

                        /**
                         * Encodes the specified Inner message. Does not implicitly {@link whisk.api.shared.v1.Test.Inner.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.shared.v1.Test.Inner
                         * @static
                         * @param {whisk.api.shared.v1.Test.IInner} message Inner message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Inner.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.int32 != null && Object.hasOwnProperty.call(message, "int32"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.int32);
                            if (message.innerInner != null && Object.hasOwnProperty.call(message, "innerInner"))
                                $root.whisk.api.shared.v1.Test.Inner.InnerInner.encode(message.innerInner, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.outer != null && Object.hasOwnProperty.call(message, "outer"))
                                $root.whisk.api.shared.v1.Outer.encode(message.outer, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes an Inner message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.shared.v1.Test.Inner
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.shared.v1.Test.Inner} Inner
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Inner.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Test.Inner();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.int32 = reader.int32();
                                    break;
                                case 2:
                                    message.innerInner = $root.whisk.api.shared.v1.Test.Inner.InnerInner.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.outer = $root.whisk.api.shared.v1.Outer.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        Inner.InnerInner = (function() {

                            /**
                             * Properties of an InnerInner.
                             * @memberof whisk.api.shared.v1.Test.Inner
                             * @interface IInnerInner
                             * @property {number|Long|null} [long] InnerInner long
                             * @property {whisk.api.shared.v1.Test.Enum|null} ["enum"] InnerInner enum
                             * @property {number|null} [sint32] InnerInner sint32
                             */

                            /**
                             * Constructs a new InnerInner.
                             * @memberof whisk.api.shared.v1.Test.Inner
                             * @classdesc Represents an InnerInner.
                             * @implements IInnerInner
                             * @constructor
                             * @param {whisk.api.shared.v1.Test.Inner.IInnerInner=} [properties] Properties to set
                             */
                            function InnerInner(properties) {
                                if (properties)
                                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * InnerInner long.
                             * @member {number|Long} long
                             * @memberof whisk.api.shared.v1.Test.Inner.InnerInner
                             * @instance
                             */
                            InnerInner.prototype.long = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                            /**
                             * InnerInner enum.
                             * @member {whisk.api.shared.v1.Test.Enum} enum
                             * @memberof whisk.api.shared.v1.Test.Inner.InnerInner
                             * @instance
                             */
                            InnerInner.prototype["enum"] = 0;

                            /**
                             * InnerInner sint32.
                             * @member {number} sint32
                             * @memberof whisk.api.shared.v1.Test.Inner.InnerInner
                             * @instance
                             */
                            InnerInner.prototype.sint32 = 0;

                            /**
                             * Encodes the specified InnerInner message. Does not implicitly {@link whisk.api.shared.v1.Test.Inner.InnerInner.verify|verify} messages.
                             * @function encode
                             * @memberof whisk.api.shared.v1.Test.Inner.InnerInner
                             * @static
                             * @param {whisk.api.shared.v1.Test.Inner.IInnerInner} message InnerInner message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            InnerInner.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.long != null && Object.hasOwnProperty.call(message, "long"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.long);
                                if (message["enum"] != null && Object.hasOwnProperty.call(message, "enum"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message["enum"]);
                                if (message.sint32 != null && Object.hasOwnProperty.call(message, "sint32"))
                                    writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.sint32);
                                return writer;
                            };

                            /**
                             * Decodes an InnerInner message from the specified reader or buffer.
                             * @function decode
                             * @memberof whisk.api.shared.v1.Test.Inner.InnerInner
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {whisk.api.shared.v1.Test.Inner.InnerInner} InnerInner
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            InnerInner.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Test.Inner.InnerInner();
                                while (reader.pos < end) {
                                    let tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.long = reader.int64();
                                        break;
                                    case 2:
                                        message["enum"] = reader.int32();
                                        break;
                                    case 3:
                                        message.sint32 = reader.sint32();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            return InnerInner;
                        })();

                        return Inner;
                    })();

                    /**
                     * Enum enum.
                     * @name whisk.api.shared.v1.Test.Enum
                     * @enum {number}
                     * @property {number} ONE=0 ONE value
                     * @property {number} TWO=1 TWO value
                     * @property {number} THREE=2 THREE value
                     * @property {number} FOUR=3 FOUR value
                     * @property {number} FIVE=4 FIVE value
                     */
                    Test.Enum = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "ONE"] = 0;
                        values[valuesById[1] = "TWO"] = 1;
                        values[valuesById[2] = "THREE"] = 2;
                        values[valuesById[3] = "FOUR"] = 3;
                        values[valuesById[4] = "FIVE"] = 4;
                        return values;
                    })();

                    return Test;
                })();

                v1.Outer = (function() {

                    /**
                     * Properties of an Outer.
                     * @memberof whisk.api.shared.v1
                     * @interface IOuter
                     * @property {Array.<boolean>|null} [bool] Outer bool
                     * @property {number|null} [double] Outer double
                     * @property {Array.<number>|null} [uint32] Outer uint32
                     * @property {Array.<string>|null} [string] Outer string
                     */

                    /**
                     * Constructs a new Outer.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents an Outer.
                     * @implements IOuter
                     * @constructor
                     * @param {whisk.api.shared.v1.IOuter=} [properties] Properties to set
                     */
                    function Outer(properties) {
                        this.bool = [];
                        this.uint32 = [];
                        this.string = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Outer bool.
                     * @member {Array.<boolean>} bool
                     * @memberof whisk.api.shared.v1.Outer
                     * @instance
                     */
                    Outer.prototype.bool = $util.emptyArray;

                    /**
                     * Outer double.
                     * @member {number} double
                     * @memberof whisk.api.shared.v1.Outer
                     * @instance
                     */
                    Outer.prototype.double = 0;

                    /**
                     * Outer uint32.
                     * @member {Array.<number>} uint32
                     * @memberof whisk.api.shared.v1.Outer
                     * @instance
                     */
                    Outer.prototype.uint32 = $util.emptyArray;

                    /**
                     * Outer string.
                     * @member {Array.<string>} string
                     * @memberof whisk.api.shared.v1.Outer
                     * @instance
                     */
                    Outer.prototype.string = $util.emptyArray;

                    /**
                     * Encodes the specified Outer message. Does not implicitly {@link whisk.api.shared.v1.Outer.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Outer
                     * @static
                     * @param {whisk.api.shared.v1.IOuter} message Outer message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Outer.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.bool != null && message.bool.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (let i = 0; i < message.bool.length; ++i)
                                writer.bool(message.bool[i]);
                            writer.ldelim();
                        }
                        if (message.double != null && Object.hasOwnProperty.call(message, "double"))
                            writer.uint32(/* id 2, wireType 1 =*/17).double(message.double);
                        if (message.uint32 != null && message.uint32.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (let i = 0; i < message.uint32.length; ++i)
                                writer.uint32(message.uint32[i]);
                            writer.ldelim();
                        }
                        if (message.string != null && message.string.length)
                            for (let i = 0; i < message.string.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.string[i]);
                        return writer;
                    };

                    /**
                     * Decodes an Outer message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Outer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Outer} Outer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Outer.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Outer();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.bool && message.bool.length))
                                    message.bool = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.bool.push(reader.bool());
                                } else
                                    message.bool.push(reader.bool());
                                break;
                            case 2:
                                message.double = reader.double();
                                break;
                            case 3:
                                if (!(message.uint32 && message.uint32.length))
                                    message.uint32 = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.uint32.push(reader.uint32());
                                } else
                                    message.uint32.push(reader.uint32());
                                break;
                            case 4:
                                if (!(message.string && message.string.length))
                                    message.string = [];
                                message.string.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Outer;
                })();

                v1.Date = (function() {

                    /**
                     * Properties of a Date.
                     * @memberof whisk.api.shared.v1
                     * @interface IDate
                     * @property {number|null} [year] Date year
                     * @property {number|null} [month] Date month
                     * @property {number|null} [day] Date day
                     */

                    /**
                     * Constructs a new Date.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents a Date.
                     * @implements IDate
                     * @constructor
                     * @param {whisk.api.shared.v1.IDate=} [properties] Properties to set
                     */
                    function Date(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Date year.
                     * @member {number} year
                     * @memberof whisk.api.shared.v1.Date
                     * @instance
                     */
                    Date.prototype.year = 0;

                    /**
                     * Date month.
                     * @member {number} month
                     * @memberof whisk.api.shared.v1.Date
                     * @instance
                     */
                    Date.prototype.month = 0;

                    /**
                     * Date day.
                     * @member {number} day
                     * @memberof whisk.api.shared.v1.Date
                     * @instance
                     */
                    Date.prototype.day = 0;

                    /**
                     * Encodes the specified Date message. Does not implicitly {@link whisk.api.shared.v1.Date.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Date
                     * @static
                     * @param {whisk.api.shared.v1.IDate} message Date message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Date.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.year != null && Object.hasOwnProperty.call(message, "year"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.year);
                        if (message.month != null && Object.hasOwnProperty.call(message, "month"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.month);
                        if (message.day != null && Object.hasOwnProperty.call(message, "day"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.day);
                        return writer;
                    };

                    /**
                     * Decodes a Date message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Date
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Date} Date
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Date.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Date();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.year = reader.int32();
                                break;
                            case 2:
                                message.month = reader.int32();
                                break;
                            case 3:
                                message.day = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Date;
                })();

                v1.Time = (function() {

                    /**
                     * Properties of a Time.
                     * @memberof whisk.api.shared.v1
                     * @interface ITime
                     * @property {number|Long|null} [time] Time time
                     * @property {google.protobuf.IUInt32Value|null} [nano] Time nano
                     */

                    /**
                     * Constructs a new Time.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents a Time.
                     * @implements ITime
                     * @constructor
                     * @param {whisk.api.shared.v1.ITime=} [properties] Properties to set
                     */
                    function Time(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Time time.
                     * @member {number|Long} time
                     * @memberof whisk.api.shared.v1.Time
                     * @instance
                     */
                    Time.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Time nano.
                     * @member {google.protobuf.IUInt32Value|null|undefined} nano
                     * @memberof whisk.api.shared.v1.Time
                     * @instance
                     */
                    Time.prototype.nano = null;

                    /**
                     * Encodes the specified Time message. Does not implicitly {@link whisk.api.shared.v1.Time.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Time
                     * @static
                     * @param {whisk.api.shared.v1.ITime} message Time message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Time.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
                        if (message.nano != null && Object.hasOwnProperty.call(message, "nano"))
                            $root.google.protobuf.UInt32Value.encode(message.nano, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a Time message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Time
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Time} Time
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Time.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Time();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.time = reader.int64();
                                break;
                            case 2:
                                message.nano = $root.google.protobuf.UInt32Value.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Time;
                })();

                v1.Primitive = (function() {

                    /**
                     * Properties of a Primitive.
                     * @memberof whisk.api.shared.v1
                     * @interface IPrimitive
                     * @property {number|null} [double] Primitive double
                     * @property {number|null} [float] Primitive float
                     * @property {number|null} [int32] Primitive int32
                     * @property {number|Long|null} [int64] Primitive int64
                     * @property {number|null} [uint32] Primitive uint32
                     * @property {number|Long|null} [uint64] Primitive uint64
                     * @property {number|null} [sint32] Primitive sint32
                     * @property {number|Long|null} [sint64] Primitive sint64
                     * @property {number|null} [fixed32] Primitive fixed32
                     * @property {number|Long|null} [fixed64] Primitive fixed64
                     * @property {number|null} [sfixed32] Primitive sfixed32
                     * @property {number|Long|null} [sfixed64] Primitive sfixed64
                     * @property {boolean|null} [bool] Primitive bool
                     * @property {string|null} [string] Primitive string
                     * @property {Uint8Array|null} [bytes] Primitive bytes
                     */

                    /**
                     * Constructs a new Primitive.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents a Primitive.
                     * @implements IPrimitive
                     * @constructor
                     * @param {whisk.api.shared.v1.IPrimitive=} [properties] Properties to set
                     */
                    function Primitive(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Primitive double.
                     * @member {number} double
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.double = 0;

                    /**
                     * Primitive float.
                     * @member {number} float
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.float = 0;

                    /**
                     * Primitive int32.
                     * @member {number} int32
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.int32 = 0;

                    /**
                     * Primitive int64.
                     * @member {number|Long} int64
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.int64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Primitive uint32.
                     * @member {number} uint32
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.uint32 = 0;

                    /**
                     * Primitive uint64.
                     * @member {number|Long} uint64
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.uint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Primitive sint32.
                     * @member {number} sint32
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.sint32 = 0;

                    /**
                     * Primitive sint64.
                     * @member {number|Long} sint64
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.sint64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Primitive fixed32.
                     * @member {number} fixed32
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.fixed32 = 0;

                    /**
                     * Primitive fixed64.
                     * @member {number|Long} fixed64
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.fixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Primitive sfixed32.
                     * @member {number} sfixed32
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.sfixed32 = 0;

                    /**
                     * Primitive sfixed64.
                     * @member {number|Long} sfixed64
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.sfixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Primitive bool.
                     * @member {boolean} bool
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.bool = false;

                    /**
                     * Primitive string.
                     * @member {string} string
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.string = "";

                    /**
                     * Primitive bytes.
                     * @member {Uint8Array} bytes
                     * @memberof whisk.api.shared.v1.Primitive
                     * @instance
                     */
                    Primitive.prototype.bytes = $util.newBuffer([]);

                    /**
                     * Encodes the specified Primitive message. Does not implicitly {@link whisk.api.shared.v1.Primitive.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Primitive
                     * @static
                     * @param {whisk.api.shared.v1.IPrimitive} message Primitive message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Primitive.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.double != null && Object.hasOwnProperty.call(message, "double"))
                            writer.uint32(/* id 1, wireType 1 =*/9).double(message.double);
                        if (message.float != null && Object.hasOwnProperty.call(message, "float"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.float);
                        if (message.int32 != null && Object.hasOwnProperty.call(message, "int32"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.int32);
                        if (message.int64 != null && Object.hasOwnProperty.call(message, "int64"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.int64);
                        if (message.uint32 != null && Object.hasOwnProperty.call(message, "uint32"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.uint32);
                        if (message.uint64 != null && Object.hasOwnProperty.call(message, "uint64"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.uint64);
                        if (message.sint32 != null && Object.hasOwnProperty.call(message, "sint32"))
                            writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.sint32);
                        if (message.sint64 != null && Object.hasOwnProperty.call(message, "sint64"))
                            writer.uint32(/* id 8, wireType 0 =*/64).sint64(message.sint64);
                        if (message.fixed32 != null && Object.hasOwnProperty.call(message, "fixed32"))
                            writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.fixed32);
                        if (message.fixed64 != null && Object.hasOwnProperty.call(message, "fixed64"))
                            writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.fixed64);
                        if (message.sfixed32 != null && Object.hasOwnProperty.call(message, "sfixed32"))
                            writer.uint32(/* id 11, wireType 5 =*/93).sfixed32(message.sfixed32);
                        if (message.sfixed64 != null && Object.hasOwnProperty.call(message, "sfixed64"))
                            writer.uint32(/* id 12, wireType 1 =*/97).sfixed64(message.sfixed64);
                        if (message.bool != null && Object.hasOwnProperty.call(message, "bool"))
                            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.bool);
                        if (message.string != null && Object.hasOwnProperty.call(message, "string"))
                            writer.uint32(/* id 14, wireType 2 =*/114).string(message.string);
                        if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                            writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.bytes);
                        return writer;
                    };

                    /**
                     * Decodes a Primitive message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Primitive
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Primitive} Primitive
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Primitive.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Primitive();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.double = reader.double();
                                break;
                            case 2:
                                message.float = reader.float();
                                break;
                            case 3:
                                message.int32 = reader.int32();
                                break;
                            case 4:
                                message.int64 = reader.int64();
                                break;
                            case 5:
                                message.uint32 = reader.uint32();
                                break;
                            case 6:
                                message.uint64 = reader.uint64();
                                break;
                            case 7:
                                message.sint32 = reader.sint32();
                                break;
                            case 8:
                                message.sint64 = reader.sint64();
                                break;
                            case 9:
                                message.fixed32 = reader.fixed32();
                                break;
                            case 10:
                                message.fixed64 = reader.fixed64();
                                break;
                            case 11:
                                message.sfixed32 = reader.sfixed32();
                                break;
                            case 12:
                                message.sfixed64 = reader.sfixed64();
                                break;
                            case 13:
                                message.bool = reader.bool();
                                break;
                            case 14:
                                message.string = reader.string();
                                break;
                            case 15:
                                message.bytes = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Primitive;
                })();

                v1.Big = (function() {

                    /**
                     * Properties of a Big.
                     * @memberof whisk.api.shared.v1
                     * @interface IBig
                     * @property {number|Long|null} [b] Big b
                     */

                    /**
                     * Constructs a new Big.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents a Big.
                     * @implements IBig
                     * @constructor
                     * @param {whisk.api.shared.v1.IBig=} [properties] Properties to set
                     */
                    function Big(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Big b.
                     * @member {number|Long} b
                     * @memberof whisk.api.shared.v1.Big
                     * @instance
                     */
                    Big.prototype.b = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Encodes the specified Big message. Does not implicitly {@link whisk.api.shared.v1.Big.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Big
                     * @static
                     * @param {whisk.api.shared.v1.IBig} message Big message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Big.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.b);
                        return writer;
                    };

                    /**
                     * Decodes a Big message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Big
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Big} Big
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Big.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Big();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.b = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Big;
                })();

                v1.Sign = (function() {

                    /**
                     * Properties of a Sign.
                     * @memberof whisk.api.shared.v1
                     * @interface ISign
                     * @property {number|Long|null} [b] Sign b
                     */

                    /**
                     * Constructs a new Sign.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents a Sign.
                     * @implements ISign
                     * @constructor
                     * @param {whisk.api.shared.v1.ISign=} [properties] Properties to set
                     */
                    function Sign(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Sign b.
                     * @member {number|Long} b
                     * @memberof whisk.api.shared.v1.Sign
                     * @instance
                     */
                    Sign.prototype.b = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Encodes the specified Sign message. Does not implicitly {@link whisk.api.shared.v1.Sign.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Sign
                     * @static
                     * @param {whisk.api.shared.v1.ISign} message Sign message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Sign.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                            writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.b);
                        return writer;
                    };

                    /**
                     * Decodes a Sign message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Sign
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Sign} Sign
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Sign.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Sign();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.b = reader.sint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Sign;
                })();

                v1.Double = (function() {

                    /**
                     * Properties of a Double.
                     * @memberof whisk.api.shared.v1
                     * @interface IDouble
                     * @property {number|null} [d] Double d
                     */

                    /**
                     * Constructs a new Double.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents a Double.
                     * @implements IDouble
                     * @constructor
                     * @param {whisk.api.shared.v1.IDouble=} [properties] Properties to set
                     */
                    function Double(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Double d.
                     * @member {number} d
                     * @memberof whisk.api.shared.v1.Double
                     * @instance
                     */
                    Double.prototype.d = 0;

                    /**
                     * Encodes the specified Double message. Does not implicitly {@link whisk.api.shared.v1.Double.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Double
                     * @static
                     * @param {whisk.api.shared.v1.IDouble} message Double message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Double.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.d != null && Object.hasOwnProperty.call(message, "d"))
                            writer.uint32(/* id 1, wireType 1 =*/9).double(message.d);
                        return writer;
                    };

                    /**
                     * Decodes a Double message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Double
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Double} Double
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Double.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Double();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.d = reader.double();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Double;
                })();

                v1.Wrapper = (function() {

                    /**
                     * Properties of a Wrapper.
                     * @memberof whisk.api.shared.v1
                     * @interface IWrapper
                     * @property {google.protobuf.IDoubleValue|null} [double] Wrapper double
                     * @property {google.protobuf.IFloatValue|null} [float] Wrapper float
                     * @property {google.protobuf.IInt64Value|null} [int64] Wrapper int64
                     * @property {google.protobuf.IUInt64Value|null} [uint64] Wrapper uint64
                     * @property {google.protobuf.IInt32Value|null} [int32] Wrapper int32
                     * @property {google.protobuf.IUInt32Value|null} [uint32] Wrapper uint32
                     * @property {google.protobuf.IBoolValue|null} [bool] Wrapper bool
                     * @property {google.protobuf.IStringValue|null} [string] Wrapper string
                     * @property {google.protobuf.IBytesValue|null} [bytes] Wrapper bytes
                     */

                    /**
                     * Constructs a new Wrapper.
                     * @memberof whisk.api.shared.v1
                     * @classdesc Represents a Wrapper.
                     * @implements IWrapper
                     * @constructor
                     * @param {whisk.api.shared.v1.IWrapper=} [properties] Properties to set
                     */
                    function Wrapper(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Wrapper double.
                     * @member {google.protobuf.IDoubleValue|null|undefined} double
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.double = null;

                    /**
                     * Wrapper float.
                     * @member {google.protobuf.IFloatValue|null|undefined} float
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.float = null;

                    /**
                     * Wrapper int64.
                     * @member {google.protobuf.IInt64Value|null|undefined} int64
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.int64 = null;

                    /**
                     * Wrapper uint64.
                     * @member {google.protobuf.IUInt64Value|null|undefined} uint64
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.uint64 = null;

                    /**
                     * Wrapper int32.
                     * @member {google.protobuf.IInt32Value|null|undefined} int32
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.int32 = null;

                    /**
                     * Wrapper uint32.
                     * @member {google.protobuf.IUInt32Value|null|undefined} uint32
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.uint32 = null;

                    /**
                     * Wrapper bool.
                     * @member {google.protobuf.IBoolValue|null|undefined} bool
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.bool = null;

                    /**
                     * Wrapper string.
                     * @member {google.protobuf.IStringValue|null|undefined} string
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.string = null;

                    /**
                     * Wrapper bytes.
                     * @member {google.protobuf.IBytesValue|null|undefined} bytes
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @instance
                     */
                    Wrapper.prototype.bytes = null;

                    /**
                     * Encodes the specified Wrapper message. Does not implicitly {@link whisk.api.shared.v1.Wrapper.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @static
                     * @param {whisk.api.shared.v1.IWrapper} message Wrapper message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Wrapper.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.double != null && Object.hasOwnProperty.call(message, "double"))
                            $root.google.protobuf.DoubleValue.encode(message.double, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.float != null && Object.hasOwnProperty.call(message, "float"))
                            $root.google.protobuf.FloatValue.encode(message.float, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.int64 != null && Object.hasOwnProperty.call(message, "int64"))
                            $root.google.protobuf.Int64Value.encode(message.int64, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.uint64 != null && Object.hasOwnProperty.call(message, "uint64"))
                            $root.google.protobuf.UInt64Value.encode(message.uint64, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.int32 != null && Object.hasOwnProperty.call(message, "int32"))
                            $root.google.protobuf.Int32Value.encode(message.int32, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.uint32 != null && Object.hasOwnProperty.call(message, "uint32"))
                            $root.google.protobuf.UInt32Value.encode(message.uint32, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.bool != null && Object.hasOwnProperty.call(message, "bool"))
                            $root.google.protobuf.BoolValue.encode(message.bool, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.string != null && Object.hasOwnProperty.call(message, "string"))
                            $root.google.protobuf.StringValue.encode(message.string, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                            $root.google.protobuf.BytesValue.encode(message.bytes, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a Wrapper message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.shared.v1.Wrapper
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.shared.v1.Wrapper} Wrapper
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Wrapper.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.shared.v1.Wrapper();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.double = $root.google.protobuf.DoubleValue.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.float = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.int64 = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.uint64 = $root.google.protobuf.UInt64Value.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.int32 = $root.google.protobuf.Int32Value.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.uint32 = $root.google.protobuf.UInt32Value.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.bool = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.string = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 9:
                                message.bytes = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Wrapper;
                })();

                return v1;
            })();

            return shared;
        })();

        api.user = (function() {

            /**
             * Namespace user.
             * @memberof whisk.api
             * @namespace
             */
            const user = {};

            user.v2 = (function() {

                /**
                 * Namespace v2.
                 * @memberof whisk.api.user
                 * @namespace
                 */
                const v2 = {};

                v2.User = (function() {

                    /**
                     * Properties of a User.
                     * @memberof whisk.api.user.v2
                     * @interface IUser
                     * @property {string|null} [id] User id
                     * @property {string|null} [email] User email
                     * @property {string|null} [phone] User phone
                     * @property {whisk.api.user.v2.IUserSettings|null} [userSettings] User userSettings
                     * @property {boolean|null} [hasPassword] User hasPassword
                     * @property {whisk.api.user.v2.IRecommendations|null} [recommendations] User recommendations
                     * @property {Object.<string,whisk.api.user.v2.HealthGoal>|null} [mapHealthGoal] User mapHealthGoal
                     * @property {Object.<string,whisk.api.user.v2.IIngredient>|null} [mapIngredient] User mapIngredient
                     */

                    /**
                     * Constructs a new User.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a User.
                     * @implements IUser
                     * @constructor
                     * @param {whisk.api.user.v2.IUser=} [properties] Properties to set
                     */
                    function User(properties) {
                        this.mapHealthGoal = {};
                        this.mapIngredient = {};
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * User id.
                     * @member {string} id
                     * @memberof whisk.api.user.v2.User
                     * @instance
                     */
                    User.prototype.id = "";

                    /**
                     * User email.
                     * @member {string} email
                     * @memberof whisk.api.user.v2.User
                     * @instance
                     */
                    User.prototype.email = "";

                    /**
                     * User phone.
                     * @member {string} phone
                     * @memberof whisk.api.user.v2.User
                     * @instance
                     */
                    User.prototype.phone = "";

                    /**
                     * User userSettings.
                     * @member {whisk.api.user.v2.IUserSettings|null|undefined} userSettings
                     * @memberof whisk.api.user.v2.User
                     * @instance
                     */
                    User.prototype.userSettings = null;

                    /**
                     * User hasPassword.
                     * @member {boolean} hasPassword
                     * @memberof whisk.api.user.v2.User
                     * @instance
                     */
                    User.prototype.hasPassword = false;

                    /**
                     * User recommendations.
                     * @member {whisk.api.user.v2.IRecommendations|null|undefined} recommendations
                     * @memberof whisk.api.user.v2.User
                     * @instance
                     */
                    User.prototype.recommendations = null;

                    /**
                     * User mapHealthGoal.
                     * @member {Object.<string,whisk.api.user.v2.HealthGoal>} mapHealthGoal
                     * @memberof whisk.api.user.v2.User
                     * @instance
                     */
                    User.prototype.mapHealthGoal = $util.emptyObject;

                    /**
                     * User mapIngredient.
                     * @member {Object.<string,whisk.api.user.v2.IIngredient>} mapIngredient
                     * @memberof whisk.api.user.v2.User
                     * @instance
                     */
                    User.prototype.mapIngredient = $util.emptyObject;

                    /**
                     * Encodes the specified User message. Does not implicitly {@link whisk.api.user.v2.User.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.User
                     * @static
                     * @param {whisk.api.user.v2.IUser} message User message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    User.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
                        if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.phone);
                        if (message.userSettings != null && Object.hasOwnProperty.call(message, "userSettings"))
                            $root.whisk.api.user.v2.UserSettings.encode(message.userSettings, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.hasPassword != null && Object.hasOwnProperty.call(message, "hasPassword"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.hasPassword);
                        if (message.recommendations != null && Object.hasOwnProperty.call(message, "recommendations"))
                            $root.whisk.api.user.v2.Recommendations.encode(message.recommendations, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.mapHealthGoal != null && Object.hasOwnProperty.call(message, "mapHealthGoal"))
                            for (let keys = Object.keys(message.mapHealthGoal), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapHealthGoal[keys[i]]).ldelim();
                        if (message.mapIngredient != null && Object.hasOwnProperty.call(message, "mapIngredient"))
                            for (let keys = Object.keys(message.mapIngredient), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.whisk.api.user.v2.Ingredient.encode(message.mapIngredient[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.User
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.User} User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    User.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.User(), key;
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.email = reader.string();
                                break;
                            case 3:
                                message.phone = reader.string();
                                break;
                            case 4:
                                message.userSettings = $root.whisk.api.user.v2.UserSettings.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.hasPassword = reader.bool();
                                break;
                            case 6:
                                message.recommendations = $root.whisk.api.user.v2.Recommendations.decode(reader, reader.uint32());
                                break;
                            case 7:
                                reader.skip().pos++;
                                if (message.mapHealthGoal === $util.emptyObject)
                                    message.mapHealthGoal = {};
                                key = reader.string();
                                reader.pos++;
                                message.mapHealthGoal[key] = reader.int32();
                                break;
                            case 8:
                                reader.skip().pos++;
                                if (message.mapIngredient === $util.emptyObject)
                                    message.mapIngredient = {};
                                key = reader.string();
                                reader.pos++;
                                message.mapIngredient[key] = $root.whisk.api.user.v2.Ingredient.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return User;
                })();

                v2.UserSettings = (function() {

                    /**
                     * Properties of a UserSettings.
                     * @memberof whisk.api.user.v2
                     * @interface IUserSettings
                     * @property {whisk.api.user.v2.IPersonalDetails|null} [personalDetails] UserSettings personalDetails
                     * @property {whisk.api.user.v2.IFoodPreferences|null} [foodPreferences] UserSettings foodPreferences
                     * @property {whisk.api.user.v2.ICookingPreferences|null} [cookingPreferences] UserSettings cookingPreferences
                     * @property {whisk.api.user.v2.IShoppingPreferences|null} [shoppingPreferences] UserSettings shoppingPreferences
                     */

                    /**
                     * Constructs a new UserSettings.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a UserSettings.
                     * @implements IUserSettings
                     * @constructor
                     * @param {whisk.api.user.v2.IUserSettings=} [properties] Properties to set
                     */
                    function UserSettings(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UserSettings personalDetails.
                     * @member {whisk.api.user.v2.IPersonalDetails|null|undefined} personalDetails
                     * @memberof whisk.api.user.v2.UserSettings
                     * @instance
                     */
                    UserSettings.prototype.personalDetails = null;

                    /**
                     * UserSettings foodPreferences.
                     * @member {whisk.api.user.v2.IFoodPreferences|null|undefined} foodPreferences
                     * @memberof whisk.api.user.v2.UserSettings
                     * @instance
                     */
                    UserSettings.prototype.foodPreferences = null;

                    /**
                     * UserSettings cookingPreferences.
                     * @member {whisk.api.user.v2.ICookingPreferences|null|undefined} cookingPreferences
                     * @memberof whisk.api.user.v2.UserSettings
                     * @instance
                     */
                    UserSettings.prototype.cookingPreferences = null;

                    /**
                     * UserSettings shoppingPreferences.
                     * @member {whisk.api.user.v2.IShoppingPreferences|null|undefined} shoppingPreferences
                     * @memberof whisk.api.user.v2.UserSettings
                     * @instance
                     */
                    UserSettings.prototype.shoppingPreferences = null;

                    /**
                     * Encodes the specified UserSettings message. Does not implicitly {@link whisk.api.user.v2.UserSettings.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UserSettings
                     * @static
                     * @param {whisk.api.user.v2.IUserSettings} message UserSettings message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserSettings.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.personalDetails != null && Object.hasOwnProperty.call(message, "personalDetails"))
                            $root.whisk.api.user.v2.PersonalDetails.encode(message.personalDetails, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.foodPreferences != null && Object.hasOwnProperty.call(message, "foodPreferences"))
                            $root.whisk.api.user.v2.FoodPreferences.encode(message.foodPreferences, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.cookingPreferences != null && Object.hasOwnProperty.call(message, "cookingPreferences"))
                            $root.whisk.api.user.v2.CookingPreferences.encode(message.cookingPreferences, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.shoppingPreferences != null && Object.hasOwnProperty.call(message, "shoppingPreferences"))
                            $root.whisk.api.user.v2.ShoppingPreferences.encode(message.shoppingPreferences, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a UserSettings message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UserSettings
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UserSettings} UserSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserSettings.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UserSettings();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.personalDetails = $root.whisk.api.user.v2.PersonalDetails.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.foodPreferences = $root.whisk.api.user.v2.FoodPreferences.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.cookingPreferences = $root.whisk.api.user.v2.CookingPreferences.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.shoppingPreferences = $root.whisk.api.user.v2.ShoppingPreferences.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return UserSettings;
                })();

                v2.PersonalDetails = (function() {

                    /**
                     * Properties of a PersonalDetails.
                     * @memberof whisk.api.user.v2
                     * @interface IPersonalDetails
                     * @property {string|null} [firstName] PersonalDetails firstName
                     * @property {string|null} [lastName] PersonalDetails lastName
                     * @property {string|null} [photoUrl] PersonalDetails photoUrl
                     * @property {whisk.api.user.v2.Gender|null} [gender] PersonalDetails gender
                     * @property {string|null} [country] PersonalDetails country
                     * @property {string|null} [zipcode] PersonalDetails zipcode
                     * @property {string|null} [language] PersonalDetails language
                     * @property {whisk.api.user.v2.ActivityLevel|null} [activityLevel] PersonalDetails activityLevel
                     * @property {number|null} [age] PersonalDetails age
                     * @property {whisk.api.user.v2.IHeight|null} [height] PersonalDetails height
                     * @property {whisk.api.user.v2.IWeight|null} [weight] PersonalDetails weight
                     * @property {whisk.api.user.v2.PersonalDetails.IHealthGoals|null} [healthGoals] PersonalDetails healthGoals
                     * @property {number|null} [yearOfBirth] PersonalDetails yearOfBirth
                     */

                    /**
                     * Constructs a new PersonalDetails.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a PersonalDetails.
                     * @implements IPersonalDetails
                     * @constructor
                     * @param {whisk.api.user.v2.IPersonalDetails=} [properties] Properties to set
                     */
                    function PersonalDetails(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PersonalDetails firstName.
                     * @member {string} firstName
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.firstName = "";

                    /**
                     * PersonalDetails lastName.
                     * @member {string} lastName
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.lastName = "";

                    /**
                     * PersonalDetails photoUrl.
                     * @member {string} photoUrl
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.photoUrl = "";

                    /**
                     * PersonalDetails gender.
                     * @member {whisk.api.user.v2.Gender} gender
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.gender = 0;

                    /**
                     * PersonalDetails country.
                     * @member {string} country
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.country = "";

                    /**
                     * PersonalDetails zipcode.
                     * @member {string} zipcode
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.zipcode = "";

                    /**
                     * PersonalDetails language.
                     * @member {string} language
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.language = "";

                    /**
                     * PersonalDetails activityLevel.
                     * @member {whisk.api.user.v2.ActivityLevel} activityLevel
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.activityLevel = 0;

                    /**
                     * PersonalDetails age.
                     * @member {number} age
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.age = 0;

                    /**
                     * PersonalDetails height.
                     * @member {whisk.api.user.v2.IHeight|null|undefined} height
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.height = null;

                    /**
                     * PersonalDetails weight.
                     * @member {whisk.api.user.v2.IWeight|null|undefined} weight
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.weight = null;

                    /**
                     * PersonalDetails healthGoals.
                     * @member {whisk.api.user.v2.PersonalDetails.IHealthGoals|null|undefined} healthGoals
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.healthGoals = null;

                    /**
                     * PersonalDetails yearOfBirth.
                     * @member {number} yearOfBirth
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @instance
                     */
                    PersonalDetails.prototype.yearOfBirth = 0;

                    /**
                     * Encodes the specified PersonalDetails message. Does not implicitly {@link whisk.api.user.v2.PersonalDetails.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @static
                     * @param {whisk.api.user.v2.IPersonalDetails} message PersonalDetails message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersonalDetails.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstName);
                        if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastName);
                        if (message.photoUrl != null && Object.hasOwnProperty.call(message, "photoUrl"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.photoUrl);
                        if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gender);
                        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.country);
                        if (message.zipcode != null && Object.hasOwnProperty.call(message, "zipcode"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.zipcode);
                        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.language);
                        if (message.activityLevel != null && Object.hasOwnProperty.call(message, "activityLevel"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.activityLevel);
                        if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.age);
                        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                            $root.whisk.api.user.v2.Height.encode(message.height, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                            $root.whisk.api.user.v2.Weight.encode(message.weight, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.healthGoals != null && Object.hasOwnProperty.call(message, "healthGoals"))
                            $root.whisk.api.user.v2.PersonalDetails.HealthGoals.encode(message.healthGoals, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                        if (message.yearOfBirth != null && Object.hasOwnProperty.call(message, "yearOfBirth"))
                            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.yearOfBirth);
                        return writer;
                    };

                    /**
                     * Decodes a PersonalDetails message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.PersonalDetails
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.PersonalDetails} PersonalDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersonalDetails.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.PersonalDetails();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.firstName = reader.string();
                                break;
                            case 2:
                                message.lastName = reader.string();
                                break;
                            case 3:
                                message.photoUrl = reader.string();
                                break;
                            case 4:
                                message.gender = reader.int32();
                                break;
                            case 5:
                                message.country = reader.string();
                                break;
                            case 6:
                                message.zipcode = reader.string();
                                break;
                            case 7:
                                message.language = reader.string();
                                break;
                            case 8:
                                message.activityLevel = reader.int32();
                                break;
                            case 9:
                                message.age = reader.int32();
                                break;
                            case 10:
                                message.height = $root.whisk.api.user.v2.Height.decode(reader, reader.uint32());
                                break;
                            case 11:
                                message.weight = $root.whisk.api.user.v2.Weight.decode(reader, reader.uint32());
                                break;
                            case 12:
                                message.healthGoals = $root.whisk.api.user.v2.PersonalDetails.HealthGoals.decode(reader, reader.uint32());
                                break;
                            case 13:
                                message.yearOfBirth = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    PersonalDetails.HealthGoals = (function() {

                        /**
                         * Properties of a HealthGoals.
                         * @memberof whisk.api.user.v2.PersonalDetails
                         * @interface IHealthGoals
                         * @property {Array.<whisk.api.user.v2.HealthGoal>|null} [list] HealthGoals list
                         */

                        /**
                         * Constructs a new HealthGoals.
                         * @memberof whisk.api.user.v2.PersonalDetails
                         * @classdesc Represents a HealthGoals.
                         * @implements IHealthGoals
                         * @constructor
                         * @param {whisk.api.user.v2.PersonalDetails.IHealthGoals=} [properties] Properties to set
                         */
                        function HealthGoals(properties) {
                            this.list = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * HealthGoals list.
                         * @member {Array.<whisk.api.user.v2.HealthGoal>} list
                         * @memberof whisk.api.user.v2.PersonalDetails.HealthGoals
                         * @instance
                         */
                        HealthGoals.prototype.list = $util.emptyArray;

                        /**
                         * Encodes the specified HealthGoals message. Does not implicitly {@link whisk.api.user.v2.PersonalDetails.HealthGoals.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.PersonalDetails.HealthGoals
                         * @static
                         * @param {whisk.api.user.v2.PersonalDetails.IHealthGoals} message HealthGoals message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        HealthGoals.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.list != null && message.list.length) {
                                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                                for (let i = 0; i < message.list.length; ++i)
                                    writer.int32(message.list[i]);
                                writer.ldelim();
                            }
                            return writer;
                        };

                        /**
                         * Decodes a HealthGoals message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.PersonalDetails.HealthGoals
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.PersonalDetails.HealthGoals} HealthGoals
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        HealthGoals.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.PersonalDetails.HealthGoals();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.list && message.list.length))
                                        message.list = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.list.push(reader.int32());
                                    } else
                                        message.list.push(reader.int32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return HealthGoals;
                    })();

                    return PersonalDetails;
                })();

                /**
                 * HealthGoal enum.
                 * @name whisk.api.user.v2.HealthGoal
                 * @enum {number}
                 * @property {number} HEALTH_GOAL_INVALID=0 HEALTH_GOAL_INVALID value
                 * @property {number} HEALTH_GOAL_WEIGHT_LOSS=1 HEALTH_GOAL_WEIGHT_LOSS value
                 * @property {number} HEALTH_GOAL_WEIGHT_GAIN=2 HEALTH_GOAL_WEIGHT_GAIN value
                 * @property {number} HEALTH_GOAL_BETTER_SLEEP=3 HEALTH_GOAL_BETTER_SLEEP value
                 * @property {number} HEALTH_GOAL_INCREASE_ENERGY=4 HEALTH_GOAL_INCREASE_ENERGY value
                 */
                v2.HealthGoal = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "HEALTH_GOAL_INVALID"] = 0;
                    values[valuesById[1] = "HEALTH_GOAL_WEIGHT_LOSS"] = 1;
                    values[valuesById[2] = "HEALTH_GOAL_WEIGHT_GAIN"] = 2;
                    values[valuesById[3] = "HEALTH_GOAL_BETTER_SLEEP"] = 3;
                    values[valuesById[4] = "HEALTH_GOAL_INCREASE_ENERGY"] = 4;
                    return values;
                })();

                v2.Height = (function() {

                    /**
                     * Properties of an Height.
                     * @memberof whisk.api.user.v2
                     * @interface IHeight
                     * @property {number|null} [value] Height value
                     * @property {whisk.api.user.v2.Height.Unit|null} [unit] Height unit
                     */

                    /**
                     * Constructs a new Height.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an Height.
                     * @implements IHeight
                     * @constructor
                     * @param {whisk.api.user.v2.IHeight=} [properties] Properties to set
                     */
                    function Height(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Height value.
                     * @member {number} value
                     * @memberof whisk.api.user.v2.Height
                     * @instance
                     */
                    Height.prototype.value = 0;

                    /**
                     * Height unit.
                     * @member {whisk.api.user.v2.Height.Unit} unit
                     * @memberof whisk.api.user.v2.Height
                     * @instance
                     */
                    Height.prototype.unit = 0;

                    /**
                     * Encodes the specified Height message. Does not implicitly {@link whisk.api.user.v2.Height.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.Height
                     * @static
                     * @param {whisk.api.user.v2.IHeight} message Height message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Height.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                        if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unit);
                        return writer;
                    };

                    /**
                     * Decodes an Height message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.Height
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.Height} Height
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Height.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.Height();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = reader.double();
                                break;
                            case 2:
                                message.unit = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Unit enum.
                     * @name whisk.api.user.v2.Height.Unit
                     * @enum {number}
                     * @property {number} UNIT_INVALID=0 UNIT_INVALID value
                     * @property {number} UNIT_CM=1 UNIT_CM value
                     * @property {number} UNIT_INCH=2 UNIT_INCH value
                     */
                    Height.Unit = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UNIT_INVALID"] = 0;
                        values[valuesById[1] = "UNIT_CM"] = 1;
                        values[valuesById[2] = "UNIT_INCH"] = 2;
                        return values;
                    })();

                    return Height;
                })();

                v2.Weight = (function() {

                    /**
                     * Properties of a Weight.
                     * @memberof whisk.api.user.v2
                     * @interface IWeight
                     * @property {number|null} [value] Weight value
                     * @property {whisk.api.user.v2.Weight.Unit|null} [unit] Weight unit
                     */

                    /**
                     * Constructs a new Weight.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a Weight.
                     * @implements IWeight
                     * @constructor
                     * @param {whisk.api.user.v2.IWeight=} [properties] Properties to set
                     */
                    function Weight(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Weight value.
                     * @member {number} value
                     * @memberof whisk.api.user.v2.Weight
                     * @instance
                     */
                    Weight.prototype.value = 0;

                    /**
                     * Weight unit.
                     * @member {whisk.api.user.v2.Weight.Unit} unit
                     * @memberof whisk.api.user.v2.Weight
                     * @instance
                     */
                    Weight.prototype.unit = 0;

                    /**
                     * Encodes the specified Weight message. Does not implicitly {@link whisk.api.user.v2.Weight.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.Weight
                     * @static
                     * @param {whisk.api.user.v2.IWeight} message Weight message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Weight.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                        if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unit);
                        return writer;
                    };

                    /**
                     * Decodes a Weight message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.Weight
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.Weight} Weight
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Weight.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.Weight();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = reader.double();
                                break;
                            case 2:
                                message.unit = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Unit enum.
                     * @name whisk.api.user.v2.Weight.Unit
                     * @enum {number}
                     * @property {number} UNIT_INVALID=0 UNIT_INVALID value
                     * @property {number} UNIT_KG=1 UNIT_KG value
                     * @property {number} UNIT_POUND=2 UNIT_POUND value
                     */
                    Weight.Unit = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UNIT_INVALID"] = 0;
                        values[valuesById[1] = "UNIT_KG"] = 1;
                        values[valuesById[2] = "UNIT_POUND"] = 2;
                        return values;
                    })();

                    return Weight;
                })();

                v2.FoodPreferences = (function() {

                    /**
                     * Properties of a FoodPreferences.
                     * @memberof whisk.api.user.v2
                     * @interface IFoodPreferences
                     * @property {string|null} [diets] FoodPreferences diets
                     * @property {Array.<string>|null} [avoidanceList] FoodPreferences avoidanceList
                     * @property {whisk.api.user.v2.FoodPreferences.IIngredients|null} [dislikedIngredients] FoodPreferences dislikedIngredients
                     * @property {whisk.api.user.v2.OrganicPreference|null} [organicPreference] FoodPreferences organicPreference
                     * @property {Array.<number>|null} [nutritionPreferences] FoodPreferences nutritionPreferences
                     * @property {whisk.api.user.v2.FoodPreferences.IIngredients|null} [preferredIngredients] FoodPreferences preferredIngredients
                     */

                    /**
                     * Constructs a new FoodPreferences.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a FoodPreferences.
                     * @implements IFoodPreferences
                     * @constructor
                     * @param {whisk.api.user.v2.IFoodPreferences=} [properties] Properties to set
                     */
                    function FoodPreferences(properties) {
                        this.avoidanceList = [];
                        this.nutritionPreferences = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FoodPreferences diets.
                     * @member {string} diets
                     * @memberof whisk.api.user.v2.FoodPreferences
                     * @instance
                     */
                    FoodPreferences.prototype.diets = "";

                    /**
                     * FoodPreferences avoidanceList.
                     * @member {Array.<string>} avoidanceList
                     * @memberof whisk.api.user.v2.FoodPreferences
                     * @instance
                     */
                    FoodPreferences.prototype.avoidanceList = $util.emptyArray;

                    /**
                     * FoodPreferences dislikedIngredients.
                     * @member {whisk.api.user.v2.FoodPreferences.IIngredients|null|undefined} dislikedIngredients
                     * @memberof whisk.api.user.v2.FoodPreferences
                     * @instance
                     */
                    FoodPreferences.prototype.dislikedIngredients = null;

                    /**
                     * FoodPreferences organicPreference.
                     * @member {whisk.api.user.v2.OrganicPreference} organicPreference
                     * @memberof whisk.api.user.v2.FoodPreferences
                     * @instance
                     */
                    FoodPreferences.prototype.organicPreference = 0;

                    /**
                     * FoodPreferences nutritionPreferences.
                     * @member {Array.<number>} nutritionPreferences
                     * @memberof whisk.api.user.v2.FoodPreferences
                     * @instance
                     */
                    FoodPreferences.prototype.nutritionPreferences = $util.emptyArray;

                    /**
                     * FoodPreferences preferredIngredients.
                     * @member {whisk.api.user.v2.FoodPreferences.IIngredients|null|undefined} preferredIngredients
                     * @memberof whisk.api.user.v2.FoodPreferences
                     * @instance
                     */
                    FoodPreferences.prototype.preferredIngredients = null;

                    /**
                     * Encodes the specified FoodPreferences message. Does not implicitly {@link whisk.api.user.v2.FoodPreferences.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.FoodPreferences
                     * @static
                     * @param {whisk.api.user.v2.IFoodPreferences} message FoodPreferences message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FoodPreferences.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.diets != null && Object.hasOwnProperty.call(message, "diets"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.diets);
                        if (message.avoidanceList != null && message.avoidanceList.length)
                            for (let i = 0; i < message.avoidanceList.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avoidanceList[i]);
                        if (message.dislikedIngredients != null && Object.hasOwnProperty.call(message, "dislikedIngredients"))
                            $root.whisk.api.user.v2.FoodPreferences.Ingredients.encode(message.dislikedIngredients, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.organicPreference != null && Object.hasOwnProperty.call(message, "organicPreference"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.organicPreference);
                        if (message.nutritionPreferences != null && message.nutritionPreferences.length) {
                            writer.uint32(/* id 5, wireType 2 =*/42).fork();
                            for (let i = 0; i < message.nutritionPreferences.length; ++i)
                                writer.double(message.nutritionPreferences[i]);
                            writer.ldelim();
                        }
                        if (message.preferredIngredients != null && Object.hasOwnProperty.call(message, "preferredIngredients"))
                            $root.whisk.api.user.v2.FoodPreferences.Ingredients.encode(message.preferredIngredients, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a FoodPreferences message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.FoodPreferences
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.FoodPreferences} FoodPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FoodPreferences.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.FoodPreferences();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.diets = reader.string();
                                break;
                            case 2:
                                if (!(message.avoidanceList && message.avoidanceList.length))
                                    message.avoidanceList = [];
                                message.avoidanceList.push(reader.string());
                                break;
                            case 3:
                                message.dislikedIngredients = $root.whisk.api.user.v2.FoodPreferences.Ingredients.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.organicPreference = reader.int32();
                                break;
                            case 5:
                                if (!(message.nutritionPreferences && message.nutritionPreferences.length))
                                    message.nutritionPreferences = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.nutritionPreferences.push(reader.double());
                                } else
                                    message.nutritionPreferences.push(reader.double());
                                break;
                            case 6:
                                message.preferredIngredients = $root.whisk.api.user.v2.FoodPreferences.Ingredients.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    FoodPreferences.Dates = (function() {

                        /**
                         * Properties of a Dates.
                         * @memberof whisk.api.user.v2.FoodPreferences
                         * @interface IDates
                         * @property {Array.<whisk.api.shared.v1.IDate>|null} [list] Dates list
                         */

                        /**
                         * Constructs a new Dates.
                         * @memberof whisk.api.user.v2.FoodPreferences
                         * @classdesc Represents a Dates.
                         * @implements IDates
                         * @constructor
                         * @param {whisk.api.user.v2.FoodPreferences.IDates=} [properties] Properties to set
                         */
                        function Dates(properties) {
                            this.list = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Dates list.
                         * @member {Array.<whisk.api.shared.v1.IDate>} list
                         * @memberof whisk.api.user.v2.FoodPreferences.Dates
                         * @instance
                         */
                        Dates.prototype.list = $util.emptyArray;

                        /**
                         * Encodes the specified Dates message. Does not implicitly {@link whisk.api.user.v2.FoodPreferences.Dates.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.FoodPreferences.Dates
                         * @static
                         * @param {whisk.api.user.v2.FoodPreferences.IDates} message Dates message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Dates.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.list != null && message.list.length)
                                for (let i = 0; i < message.list.length; ++i)
                                    $root.whisk.api.shared.v1.Date.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a Dates message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.FoodPreferences.Dates
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.FoodPreferences.Dates} Dates
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Dates.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.FoodPreferences.Dates();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.list && message.list.length))
                                        message.list = [];
                                    message.list.push($root.whisk.api.shared.v1.Date.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Dates;
                    })();

                    FoodPreferences.Ingredients = (function() {

                        /**
                         * Properties of an Ingredients.
                         * @memberof whisk.api.user.v2.FoodPreferences
                         * @interface IIngredients
                         * @property {Array.<whisk.api.user.v2.IIngredient>|null} [list] Ingredients list
                         */

                        /**
                         * Constructs a new Ingredients.
                         * @memberof whisk.api.user.v2.FoodPreferences
                         * @classdesc Represents an Ingredients.
                         * @implements IIngredients
                         * @constructor
                         * @param {whisk.api.user.v2.FoodPreferences.IIngredients=} [properties] Properties to set
                         */
                        function Ingredients(properties) {
                            this.list = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Ingredients list.
                         * @member {Array.<whisk.api.user.v2.IIngredient>} list
                         * @memberof whisk.api.user.v2.FoodPreferences.Ingredients
                         * @instance
                         */
                        Ingredients.prototype.list = $util.emptyArray;

                        /**
                         * Encodes the specified Ingredients message. Does not implicitly {@link whisk.api.user.v2.FoodPreferences.Ingredients.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.FoodPreferences.Ingredients
                         * @static
                         * @param {whisk.api.user.v2.FoodPreferences.IIngredients} message Ingredients message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Ingredients.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.list != null && message.list.length)
                                for (let i = 0; i < message.list.length; ++i)
                                    $root.whisk.api.user.v2.Ingredient.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes an Ingredients message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.FoodPreferences.Ingredients
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.FoodPreferences.Ingredients} Ingredients
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Ingredients.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.FoodPreferences.Ingredients();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.list && message.list.length))
                                        message.list = [];
                                    message.list.push($root.whisk.api.user.v2.Ingredient.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Ingredients;
                    })();

                    return FoodPreferences;
                })();

                v2.CookingPreferences = (function() {

                    /**
                     * Properties of a CookingPreferences.
                     * @memberof whisk.api.user.v2
                     * @interface ICookingPreferences
                     * @property {whisk.api.user.v2.CookingPreferences.IHouseholdMembers|null} [householdAdults] CookingPreferences householdAdults
                     * @property {whisk.api.user.v2.CookingPreferences.IHouseholdMembers|null} [householdChildren] CookingPreferences householdChildren
                     * @property {whisk.api.user.v2.CookingExperience|null} [cookingExperience] CookingPreferences cookingExperience
                     * @property {whisk.api.user.v2.CookingPreferences.ICookingMaxTime|null} [cookingMaxTime] CookingPreferences cookingMaxTime
                     * @property {whisk.api.user.v2.CookingPreferences.IDevices|null} [userDevices] CookingPreferences userDevices
                     */

                    /**
                     * Constructs a new CookingPreferences.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a CookingPreferences.
                     * @implements ICookingPreferences
                     * @constructor
                     * @param {whisk.api.user.v2.ICookingPreferences=} [properties] Properties to set
                     */
                    function CookingPreferences(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CookingPreferences householdAdults.
                     * @member {whisk.api.user.v2.CookingPreferences.IHouseholdMembers|null|undefined} householdAdults
                     * @memberof whisk.api.user.v2.CookingPreferences
                     * @instance
                     */
                    CookingPreferences.prototype.householdAdults = null;

                    /**
                     * CookingPreferences householdChildren.
                     * @member {whisk.api.user.v2.CookingPreferences.IHouseholdMembers|null|undefined} householdChildren
                     * @memberof whisk.api.user.v2.CookingPreferences
                     * @instance
                     */
                    CookingPreferences.prototype.householdChildren = null;

                    /**
                     * CookingPreferences cookingExperience.
                     * @member {whisk.api.user.v2.CookingExperience} cookingExperience
                     * @memberof whisk.api.user.v2.CookingPreferences
                     * @instance
                     */
                    CookingPreferences.prototype.cookingExperience = 0;

                    /**
                     * CookingPreferences cookingMaxTime.
                     * @member {whisk.api.user.v2.CookingPreferences.ICookingMaxTime|null|undefined} cookingMaxTime
                     * @memberof whisk.api.user.v2.CookingPreferences
                     * @instance
                     */
                    CookingPreferences.prototype.cookingMaxTime = null;

                    /**
                     * CookingPreferences userDevices.
                     * @member {whisk.api.user.v2.CookingPreferences.IDevices|null|undefined} userDevices
                     * @memberof whisk.api.user.v2.CookingPreferences
                     * @instance
                     */
                    CookingPreferences.prototype.userDevices = null;

                    /**
                     * Encodes the specified CookingPreferences message. Does not implicitly {@link whisk.api.user.v2.CookingPreferences.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.CookingPreferences
                     * @static
                     * @param {whisk.api.user.v2.ICookingPreferences} message CookingPreferences message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CookingPreferences.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.householdAdults != null && Object.hasOwnProperty.call(message, "householdAdults"))
                            $root.whisk.api.user.v2.CookingPreferences.HouseholdMembers.encode(message.householdAdults, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.householdChildren != null && Object.hasOwnProperty.call(message, "householdChildren"))
                            $root.whisk.api.user.v2.CookingPreferences.HouseholdMembers.encode(message.householdChildren, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.cookingExperience != null && Object.hasOwnProperty.call(message, "cookingExperience"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cookingExperience);
                        if (message.cookingMaxTime != null && Object.hasOwnProperty.call(message, "cookingMaxTime"))
                            $root.whisk.api.user.v2.CookingPreferences.CookingMaxTime.encode(message.cookingMaxTime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.userDevices != null && Object.hasOwnProperty.call(message, "userDevices"))
                            $root.whisk.api.user.v2.CookingPreferences.Devices.encode(message.userDevices, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a CookingPreferences message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.CookingPreferences
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.CookingPreferences} CookingPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CookingPreferences.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.CookingPreferences();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.householdAdults = $root.whisk.api.user.v2.CookingPreferences.HouseholdMembers.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.householdChildren = $root.whisk.api.user.v2.CookingPreferences.HouseholdMembers.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.cookingExperience = reader.int32();
                                break;
                            case 5:
                                message.cookingMaxTime = $root.whisk.api.user.v2.CookingPreferences.CookingMaxTime.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.userDevices = $root.whisk.api.user.v2.CookingPreferences.Devices.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    CookingPreferences.HouseholdMembers = (function() {

                        /**
                         * Properties of an HouseholdMembers.
                         * @memberof whisk.api.user.v2.CookingPreferences
                         * @interface IHouseholdMembers
                         * @property {number|null} [size] HouseholdMembers size
                         */

                        /**
                         * Constructs a new HouseholdMembers.
                         * @memberof whisk.api.user.v2.CookingPreferences
                         * @classdesc Represents an HouseholdMembers.
                         * @implements IHouseholdMembers
                         * @constructor
                         * @param {whisk.api.user.v2.CookingPreferences.IHouseholdMembers=} [properties] Properties to set
                         */
                        function HouseholdMembers(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * HouseholdMembers size.
                         * @member {number} size
                         * @memberof whisk.api.user.v2.CookingPreferences.HouseholdMembers
                         * @instance
                         */
                        HouseholdMembers.prototype.size = 0;

                        /**
                         * Encodes the specified HouseholdMembers message. Does not implicitly {@link whisk.api.user.v2.CookingPreferences.HouseholdMembers.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.CookingPreferences.HouseholdMembers
                         * @static
                         * @param {whisk.api.user.v2.CookingPreferences.IHouseholdMembers} message HouseholdMembers message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        HouseholdMembers.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.size);
                            return writer;
                        };

                        /**
                         * Decodes an HouseholdMembers message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.CookingPreferences.HouseholdMembers
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.CookingPreferences.HouseholdMembers} HouseholdMembers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        HouseholdMembers.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.CookingPreferences.HouseholdMembers();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.size = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return HouseholdMembers;
                    })();

                    CookingPreferences.CookingMaxTime = (function() {

                        /**
                         * Properties of a CookingMaxTime.
                         * @memberof whisk.api.user.v2.CookingPreferences
                         * @interface ICookingMaxTime
                         * @property {number|null} [time] CookingMaxTime time
                         */

                        /**
                         * Constructs a new CookingMaxTime.
                         * @memberof whisk.api.user.v2.CookingPreferences
                         * @classdesc Represents a CookingMaxTime.
                         * @implements ICookingMaxTime
                         * @constructor
                         * @param {whisk.api.user.v2.CookingPreferences.ICookingMaxTime=} [properties] Properties to set
                         */
                        function CookingMaxTime(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CookingMaxTime time.
                         * @member {number} time
                         * @memberof whisk.api.user.v2.CookingPreferences.CookingMaxTime
                         * @instance
                         */
                        CookingMaxTime.prototype.time = 0;

                        /**
                         * Encodes the specified CookingMaxTime message. Does not implicitly {@link whisk.api.user.v2.CookingPreferences.CookingMaxTime.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.CookingPreferences.CookingMaxTime
                         * @static
                         * @param {whisk.api.user.v2.CookingPreferences.ICookingMaxTime} message CookingMaxTime message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CookingMaxTime.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
                            return writer;
                        };

                        /**
                         * Decodes a CookingMaxTime message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.CookingPreferences.CookingMaxTime
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.CookingPreferences.CookingMaxTime} CookingMaxTime
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CookingMaxTime.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.CookingPreferences.CookingMaxTime();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.time = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return CookingMaxTime;
                    })();

                    CookingPreferences.Devices = (function() {

                        /**
                         * Properties of a Devices.
                         * @memberof whisk.api.user.v2.CookingPreferences
                         * @interface IDevices
                         * @property {whisk.api.user.v2.IDevice|null} [list] Devices list
                         */

                        /**
                         * Constructs a new Devices.
                         * @memberof whisk.api.user.v2.CookingPreferences
                         * @classdesc Represents a Devices.
                         * @implements IDevices
                         * @constructor
                         * @param {whisk.api.user.v2.CookingPreferences.IDevices=} [properties] Properties to set
                         */
                        function Devices(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Devices list.
                         * @member {whisk.api.user.v2.IDevice|null|undefined} list
                         * @memberof whisk.api.user.v2.CookingPreferences.Devices
                         * @instance
                         */
                        Devices.prototype.list = null;

                        /**
                         * Encodes the specified Devices message. Does not implicitly {@link whisk.api.user.v2.CookingPreferences.Devices.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.CookingPreferences.Devices
                         * @static
                         * @param {whisk.api.user.v2.CookingPreferences.IDevices} message Devices message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Devices.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.list != null && Object.hasOwnProperty.call(message, "list"))
                                $root.whisk.api.user.v2.Device.encode(message.list, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a Devices message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.CookingPreferences.Devices
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.CookingPreferences.Devices} Devices
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Devices.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.CookingPreferences.Devices();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.list = $root.whisk.api.user.v2.Device.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Devices;
                    })();

                    return CookingPreferences;
                })();

                v2.Device = (function() {

                    /**
                     * Properties of a Device.
                     * @memberof whisk.api.user.v2
                     * @interface IDevice
                     * @property {whisk.api.user.v2.Device.DeviceType|null} [deviceType] Device deviceType
                     * @property {whisk.api.user.v2.Device.DeviceType|null} [customDevice] Device customDevice
                     */

                    /**
                     * Constructs a new Device.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a Device.
                     * @implements IDevice
                     * @constructor
                     * @param {whisk.api.user.v2.IDevice=} [properties] Properties to set
                     */
                    function Device(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Device deviceType.
                     * @member {whisk.api.user.v2.Device.DeviceType} deviceType
                     * @memberof whisk.api.user.v2.Device
                     * @instance
                     */
                    Device.prototype.deviceType = 0;

                    /**
                     * Device customDevice.
                     * @member {whisk.api.user.v2.Device.DeviceType} customDevice
                     * @memberof whisk.api.user.v2.Device
                     * @instance
                     */
                    Device.prototype.customDevice = 0;

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * Device oneof.
                     * @member {"deviceType"|"customDevice"|undefined} oneof
                     * @memberof whisk.api.user.v2.Device
                     * @instance
                     */
                    Object.defineProperty(Device.prototype, "oneof", {
                        get: $util.oneOfGetter($oneOfFields = ["deviceType", "customDevice"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Encodes the specified Device message. Does not implicitly {@link whisk.api.user.v2.Device.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.Device
                     * @static
                     * @param {whisk.api.user.v2.IDevice} message Device message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Device.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deviceType != null && Object.hasOwnProperty.call(message, "deviceType"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.deviceType);
                        if (message.customDevice != null && Object.hasOwnProperty.call(message, "customDevice"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.customDevice);
                        return writer;
                    };

                    /**
                     * Decodes a Device message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.Device
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.Device} Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Device.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.Device();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deviceType = reader.int32();
                                break;
                            case 2:
                                message.customDevice = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * DeviceType enum.
                     * @name whisk.api.user.v2.Device.DeviceType
                     * @enum {number}
                     * @property {number} DEVICE_TYPE_INVALID=0 DEVICE_TYPE_INVALID value
                     * @property {number} DEVICE_TYPE_STOVE=1 DEVICE_TYPE_STOVE value
                     * @property {number} DEVICE_TYPE_OVEN=2 DEVICE_TYPE_OVEN value
                     * @property {number} DEVICE_TYPE_AIR_FRYER=3 DEVICE_TYPE_AIR_FRYER value
                     * @property {number} DEVICE_TYPE_FOOD_PROCESSOR=4 DEVICE_TYPE_FOOD_PROCESSOR value
                     * @property {number} DEVICE_TYPE_SOUS_VIDE=5 DEVICE_TYPE_SOUS_VIDE value
                     * @property {number} DEVICE_TYPE_PRESSURE_COOKER=6 DEVICE_TYPE_PRESSURE_COOKER value
                     * @property {number} DEVICE_TYPE_SLOW_COOKER=7 DEVICE_TYPE_SLOW_COOKER value
                     * @property {number} DEVICE_TYPE_BLENDER=8 DEVICE_TYPE_BLENDER value
                     * @property {number} DEVICE_TYPE_SHAKER=9 DEVICE_TYPE_SHAKER value
                     * @property {number} DEVICE_TYPE_MICROWAVE=10 DEVICE_TYPE_MICROWAVE value
                     * @property {number} DEVICE_TYPE_DEEP_FRYER=11 DEVICE_TYPE_DEEP_FRYER value
                     * @property {number} DEVICE_TYPE_GRILL=12 DEVICE_TYPE_GRILL value
                     * @property {number} DEVICE_TYPE_MIXER=13 DEVICE_TYPE_MIXER value
                     */
                    Device.DeviceType = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "DEVICE_TYPE_INVALID"] = 0;
                        values[valuesById[1] = "DEVICE_TYPE_STOVE"] = 1;
                        values[valuesById[2] = "DEVICE_TYPE_OVEN"] = 2;
                        values[valuesById[3] = "DEVICE_TYPE_AIR_FRYER"] = 3;
                        values[valuesById[4] = "DEVICE_TYPE_FOOD_PROCESSOR"] = 4;
                        values[valuesById[5] = "DEVICE_TYPE_SOUS_VIDE"] = 5;
                        values[valuesById[6] = "DEVICE_TYPE_PRESSURE_COOKER"] = 6;
                        values[valuesById[7] = "DEVICE_TYPE_SLOW_COOKER"] = 7;
                        values[valuesById[8] = "DEVICE_TYPE_BLENDER"] = 8;
                        values[valuesById[9] = "DEVICE_TYPE_SHAKER"] = 9;
                        values[valuesById[10] = "DEVICE_TYPE_MICROWAVE"] = 10;
                        values[valuesById[11] = "DEVICE_TYPE_DEEP_FRYER"] = 11;
                        values[valuesById[12] = "DEVICE_TYPE_GRILL"] = 12;
                        values[valuesById[13] = "DEVICE_TYPE_MIXER"] = 13;
                        return values;
                    })();

                    return Device;
                })();

                v2.ShoppingPreferences = (function() {

                    /**
                     * Properties of a ShoppingPreferences.
                     * @memberof whisk.api.user.v2
                     * @interface IShoppingPreferences
                     * @property {whisk.api.user.v2.ShoppingPreferences.IPreferredRetailers|null} [preferredRetailers] ShoppingPreferences preferredRetailers
                     * @property {whisk.api.user.v2.BudgetGoal|null} [budgetGoal] ShoppingPreferences budgetGoal
                     * @property {whisk.api.user.v2.ShoppingPreferences.IEthicalPreferences|null} [ethicalPreferences] ShoppingPreferences ethicalPreferences
                     */

                    /**
                     * Constructs a new ShoppingPreferences.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a ShoppingPreferences.
                     * @implements IShoppingPreferences
                     * @constructor
                     * @param {whisk.api.user.v2.IShoppingPreferences=} [properties] Properties to set
                     */
                    function ShoppingPreferences(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ShoppingPreferences preferredRetailers.
                     * @member {whisk.api.user.v2.ShoppingPreferences.IPreferredRetailers|null|undefined} preferredRetailers
                     * @memberof whisk.api.user.v2.ShoppingPreferences
                     * @instance
                     */
                    ShoppingPreferences.prototype.preferredRetailers = null;

                    /**
                     * ShoppingPreferences budgetGoal.
                     * @member {whisk.api.user.v2.BudgetGoal} budgetGoal
                     * @memberof whisk.api.user.v2.ShoppingPreferences
                     * @instance
                     */
                    ShoppingPreferences.prototype.budgetGoal = 0;

                    /**
                     * ShoppingPreferences ethicalPreferences.
                     * @member {whisk.api.user.v2.ShoppingPreferences.IEthicalPreferences|null|undefined} ethicalPreferences
                     * @memberof whisk.api.user.v2.ShoppingPreferences
                     * @instance
                     */
                    ShoppingPreferences.prototype.ethicalPreferences = null;

                    /**
                     * Encodes the specified ShoppingPreferences message. Does not implicitly {@link whisk.api.user.v2.ShoppingPreferences.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.ShoppingPreferences
                     * @static
                     * @param {whisk.api.user.v2.IShoppingPreferences} message ShoppingPreferences message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ShoppingPreferences.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preferredRetailers != null && Object.hasOwnProperty.call(message, "preferredRetailers"))
                            $root.whisk.api.user.v2.ShoppingPreferences.PreferredRetailers.encode(message.preferredRetailers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.budgetGoal != null && Object.hasOwnProperty.call(message, "budgetGoal"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.budgetGoal);
                        if (message.ethicalPreferences != null && Object.hasOwnProperty.call(message, "ethicalPreferences"))
                            $root.whisk.api.user.v2.ShoppingPreferences.EthicalPreferences.encode(message.ethicalPreferences, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a ShoppingPreferences message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.ShoppingPreferences
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.ShoppingPreferences} ShoppingPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ShoppingPreferences.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.ShoppingPreferences();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.preferredRetailers = $root.whisk.api.user.v2.ShoppingPreferences.PreferredRetailers.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.budgetGoal = reader.int32();
                                break;
                            case 3:
                                message.ethicalPreferences = $root.whisk.api.user.v2.ShoppingPreferences.EthicalPreferences.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ShoppingPreferences.PreferredRetailers = (function() {

                        /**
                         * Properties of a PreferredRetailers.
                         * @memberof whisk.api.user.v2.ShoppingPreferences
                         * @interface IPreferredRetailers
                         * @property {Array.<string>|null} [retailers] PreferredRetailers retailers
                         */

                        /**
                         * Constructs a new PreferredRetailers.
                         * @memberof whisk.api.user.v2.ShoppingPreferences
                         * @classdesc Represents a PreferredRetailers.
                         * @implements IPreferredRetailers
                         * @constructor
                         * @param {whisk.api.user.v2.ShoppingPreferences.IPreferredRetailers=} [properties] Properties to set
                         */
                        function PreferredRetailers(properties) {
                            this.retailers = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * PreferredRetailers retailers.
                         * @member {Array.<string>} retailers
                         * @memberof whisk.api.user.v2.ShoppingPreferences.PreferredRetailers
                         * @instance
                         */
                        PreferredRetailers.prototype.retailers = $util.emptyArray;

                        /**
                         * Encodes the specified PreferredRetailers message. Does not implicitly {@link whisk.api.user.v2.ShoppingPreferences.PreferredRetailers.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.ShoppingPreferences.PreferredRetailers
                         * @static
                         * @param {whisk.api.user.v2.ShoppingPreferences.IPreferredRetailers} message PreferredRetailers message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PreferredRetailers.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.retailers != null && message.retailers.length)
                                for (let i = 0; i < message.retailers.length; ++i)
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.retailers[i]);
                            return writer;
                        };

                        /**
                         * Decodes a PreferredRetailers message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.ShoppingPreferences.PreferredRetailers
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.ShoppingPreferences.PreferredRetailers} PreferredRetailers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PreferredRetailers.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.ShoppingPreferences.PreferredRetailers();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.retailers && message.retailers.length))
                                        message.retailers = [];
                                    message.retailers.push(reader.string());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return PreferredRetailers;
                    })();

                    ShoppingPreferences.EthicalPreferences = (function() {

                        /**
                         * Properties of an EthicalPreferences.
                         * @memberof whisk.api.user.v2.ShoppingPreferences
                         * @interface IEthicalPreferences
                         * @property {Array.<whisk.api.user.v2.EthicalPreference>|null} [list] EthicalPreferences list
                         */

                        /**
                         * Constructs a new EthicalPreferences.
                         * @memberof whisk.api.user.v2.ShoppingPreferences
                         * @classdesc Represents an EthicalPreferences.
                         * @implements IEthicalPreferences
                         * @constructor
                         * @param {whisk.api.user.v2.ShoppingPreferences.IEthicalPreferences=} [properties] Properties to set
                         */
                        function EthicalPreferences(properties) {
                            this.list = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * EthicalPreferences list.
                         * @member {Array.<whisk.api.user.v2.EthicalPreference>} list
                         * @memberof whisk.api.user.v2.ShoppingPreferences.EthicalPreferences
                         * @instance
                         */
                        EthicalPreferences.prototype.list = $util.emptyArray;

                        /**
                         * Encodes the specified EthicalPreferences message. Does not implicitly {@link whisk.api.user.v2.ShoppingPreferences.EthicalPreferences.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.ShoppingPreferences.EthicalPreferences
                         * @static
                         * @param {whisk.api.user.v2.ShoppingPreferences.IEthicalPreferences} message EthicalPreferences message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EthicalPreferences.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.list != null && message.list.length) {
                                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                                for (let i = 0; i < message.list.length; ++i)
                                    writer.int32(message.list[i]);
                                writer.ldelim();
                            }
                            return writer;
                        };

                        /**
                         * Decodes an EthicalPreferences message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.ShoppingPreferences.EthicalPreferences
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.ShoppingPreferences.EthicalPreferences} EthicalPreferences
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EthicalPreferences.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.ShoppingPreferences.EthicalPreferences();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.list && message.list.length))
                                        message.list = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.list.push(reader.int32());
                                    } else
                                        message.list.push(reader.int32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return EthicalPreferences;
                    })();

                    return ShoppingPreferences;
                })();

                /**
                 * ActivityLevel enum.
                 * @name whisk.api.user.v2.ActivityLevel
                 * @enum {number}
                 * @property {number} ACTIVITY_LEVEL_INVALID=0 ACTIVITY_LEVEL_INVALID value
                 * @property {number} ACTIVITY_LEVEL_VERY_LIGHT=1 ACTIVITY_LEVEL_VERY_LIGHT value
                 * @property {number} ACTIVITY_LEVEL_LIGHT=2 ACTIVITY_LEVEL_LIGHT value
                 * @property {number} ACTIVITY_LEVEL_MODERATE=3 ACTIVITY_LEVEL_MODERATE value
                 * @property {number} ACTIVITY_LEVEL_ACTIVE=4 ACTIVITY_LEVEL_ACTIVE value
                 * @property {number} ACTIVITY_LEVEL_VERY_ACTIVE=5 ACTIVITY_LEVEL_VERY_ACTIVE value
                 */
                v2.ActivityLevel = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ACTIVITY_LEVEL_INVALID"] = 0;
                    values[valuesById[1] = "ACTIVITY_LEVEL_VERY_LIGHT"] = 1;
                    values[valuesById[2] = "ACTIVITY_LEVEL_LIGHT"] = 2;
                    values[valuesById[3] = "ACTIVITY_LEVEL_MODERATE"] = 3;
                    values[valuesById[4] = "ACTIVITY_LEVEL_ACTIVE"] = 4;
                    values[valuesById[5] = "ACTIVITY_LEVEL_VERY_ACTIVE"] = 5;
                    return values;
                })();

                /**
                 * Gender enum.
                 * @name whisk.api.user.v2.Gender
                 * @enum {number}
                 * @property {number} GENDER_UNSPECIFIED=0 GENDER_UNSPECIFIED value
                 * @property {number} GENDER_MALE=1 GENDER_MALE value
                 * @property {number} GENDER_FEMALE=2 GENDER_FEMALE value
                 * @property {number} GENDER_NON_BINARY=3 GENDER_NON_BINARY value
                 * @property {number} GENDER_UNDISCLOSED=4 GENDER_UNDISCLOSED value
                 */
                v2.Gender = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "GENDER_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "GENDER_MALE"] = 1;
                    values[valuesById[2] = "GENDER_FEMALE"] = 2;
                    values[valuesById[3] = "GENDER_NON_BINARY"] = 3;
                    values[valuesById[4] = "GENDER_UNDISCLOSED"] = 4;
                    return values;
                })();

                v2.Ingredient = (function() {

                    /**
                     * Properties of an Ingredient.
                     * @memberof whisk.api.user.v2
                     * @interface IIngredient
                     * @property {string|null} [name] Ingredient name
                     * @property {string|null} [canonicalName] Ingredient canonicalName
                     */

                    /**
                     * Constructs a new Ingredient.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an Ingredient.
                     * @implements IIngredient
                     * @constructor
                     * @param {whisk.api.user.v2.IIngredient=} [properties] Properties to set
                     */
                    function Ingredient(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Ingredient name.
                     * @member {string} name
                     * @memberof whisk.api.user.v2.Ingredient
                     * @instance
                     */
                    Ingredient.prototype.name = "";

                    /**
                     * Ingredient canonicalName.
                     * @member {string} canonicalName
                     * @memberof whisk.api.user.v2.Ingredient
                     * @instance
                     */
                    Ingredient.prototype.canonicalName = "";

                    /**
                     * Encodes the specified Ingredient message. Does not implicitly {@link whisk.api.user.v2.Ingredient.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.Ingredient
                     * @static
                     * @param {whisk.api.user.v2.IIngredient} message Ingredient message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Ingredient.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.canonicalName != null && Object.hasOwnProperty.call(message, "canonicalName"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.canonicalName);
                        return writer;
                    };

                    /**
                     * Decodes an Ingredient message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.Ingredient
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.Ingredient} Ingredient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Ingredient.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.Ingredient();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.canonicalName = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Ingredient;
                })();

                /**
                 * OrganicPreference enum.
                 * @name whisk.api.user.v2.OrganicPreference
                 * @enum {number}
                 * @property {number} ORGANIC_PREFERENCE_INVALID=0 ORGANIC_PREFERENCE_INVALID value
                 * @property {number} ORGANIC_PREFERENCE_ORGANIC=1 ORGANIC_PREFERENCE_ORGANIC value
                 * @property {number} ORGANIC_PREFERENCE_DONT_CARE=2 ORGANIC_PREFERENCE_DONT_CARE value
                 */
                v2.OrganicPreference = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ORGANIC_PREFERENCE_INVALID"] = 0;
                    values[valuesById[1] = "ORGANIC_PREFERENCE_ORGANIC"] = 1;
                    values[valuesById[2] = "ORGANIC_PREFERENCE_DONT_CARE"] = 2;
                    return values;
                })();

                /**
                 * CookingExperience enum.
                 * @name whisk.api.user.v2.CookingExperience
                 * @enum {number}
                 * @property {number} COOKING_EXPERIENCE_INVALID=0 COOKING_EXPERIENCE_INVALID value
                 * @property {number} COOKING_EXPERIENCE_BEGINNER=1 COOKING_EXPERIENCE_BEGINNER value
                 * @property {number} COOKING_EXPERIENCE_INTERMEDIATE=2 COOKING_EXPERIENCE_INTERMEDIATE value
                 * @property {number} COOKING_EXPERIENCE_ADVANCED=3 COOKING_EXPERIENCE_ADVANCED value
                 */
                v2.CookingExperience = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "COOKING_EXPERIENCE_INVALID"] = 0;
                    values[valuesById[1] = "COOKING_EXPERIENCE_BEGINNER"] = 1;
                    values[valuesById[2] = "COOKING_EXPERIENCE_INTERMEDIATE"] = 2;
                    values[valuesById[3] = "COOKING_EXPERIENCE_ADVANCED"] = 3;
                    return values;
                })();

                /**
                 * BudgetGoal enum.
                 * @name whisk.api.user.v2.BudgetGoal
                 * @enum {number}
                 * @property {number} BUDGET_GOAL_INVALID=0 BUDGET_GOAL_INVALID value
                 * @property {number} BUDGET_GOAL_BUDGET_FRIENDLY=1 BUDGET_GOAL_BUDGET_FRIENDLY value
                 * @property {number} BUDGET_GOAL_AVERAGE_PRICE=2 BUDGET_GOAL_AVERAGE_PRICE value
                 * @property {number} BUDGET_GOAL_PREMIUM=3 BUDGET_GOAL_PREMIUM value
                 */
                v2.BudgetGoal = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "BUDGET_GOAL_INVALID"] = 0;
                    values[valuesById[1] = "BUDGET_GOAL_BUDGET_FRIENDLY"] = 1;
                    values[valuesById[2] = "BUDGET_GOAL_AVERAGE_PRICE"] = 2;
                    values[valuesById[3] = "BUDGET_GOAL_PREMIUM"] = 3;
                    return values;
                })();

                /**
                 * EthicalPreference enum.
                 * @name whisk.api.user.v2.EthicalPreference
                 * @enum {number}
                 * @property {number} ETHICAL_PREFERENCE_INVALID=0 ETHICAL_PREFERENCE_INVALID value
                 * @property {number} ETHICAL_PREFERENCE_ETHICAL_FISHED=1 ETHICAL_PREFERENCE_ETHICAL_FISHED value
                 * @property {number} ETHICAL_PREFERENCE_GM_FREE=2 ETHICAL_PREFERENCE_GM_FREE value
                 * @property {number} ETHICAL_PREFERENCE_BUYING_LOCALLY=3 ETHICAL_PREFERENCE_BUYING_LOCALLY value
                 * @property {number} ETHICAL_PREFERENCE_FAIR_TRADE=4 ETHICAL_PREFERENCE_FAIR_TRADE value
                 * @property {number} ETHICAL_PREFERENCE_ENVIRONMENTAL_EFFECT=5 ETHICAL_PREFERENCE_ENVIRONMENTAL_EFFECT value
                 * @property {number} ETHICAL_PREFERENCE_LOW_WASTE_PRODUCTS=6 ETHICAL_PREFERENCE_LOW_WASTE_PRODUCTS value
                 */
                v2.EthicalPreference = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ETHICAL_PREFERENCE_INVALID"] = 0;
                    values[valuesById[1] = "ETHICAL_PREFERENCE_ETHICAL_FISHED"] = 1;
                    values[valuesById[2] = "ETHICAL_PREFERENCE_GM_FREE"] = 2;
                    values[valuesById[3] = "ETHICAL_PREFERENCE_BUYING_LOCALLY"] = 3;
                    values[valuesById[4] = "ETHICAL_PREFERENCE_FAIR_TRADE"] = 4;
                    values[valuesById[5] = "ETHICAL_PREFERENCE_ENVIRONMENTAL_EFFECT"] = 5;
                    values[valuesById[6] = "ETHICAL_PREFERENCE_LOW_WASTE_PRODUCTS"] = 6;
                    return values;
                })();

                v2.Recommendations = (function() {

                    /**
                     * Properties of a Recommendations.
                     * @memberof whisk.api.user.v2
                     * @interface IRecommendations
                     * @property {number|null} [dailyCalories] Recommendations dailyCalories
                     */

                    /**
                     * Constructs a new Recommendations.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a Recommendations.
                     * @implements IRecommendations
                     * @constructor
                     * @param {whisk.api.user.v2.IRecommendations=} [properties] Properties to set
                     */
                    function Recommendations(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Recommendations dailyCalories.
                     * @member {number} dailyCalories
                     * @memberof whisk.api.user.v2.Recommendations
                     * @instance
                     */
                    Recommendations.prototype.dailyCalories = 0;

                    /**
                     * Encodes the specified Recommendations message. Does not implicitly {@link whisk.api.user.v2.Recommendations.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.Recommendations
                     * @static
                     * @param {whisk.api.user.v2.IRecommendations} message Recommendations message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Recommendations.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.dailyCalories != null && Object.hasOwnProperty.call(message, "dailyCalories"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dailyCalories);
                        return writer;
                    };

                    /**
                     * Decodes a Recommendations message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.Recommendations
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.Recommendations} Recommendations
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Recommendations.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.Recommendations();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.dailyCalories = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return Recommendations;
                })();

                v2.TestItem = (function() {

                    /**
                     * Properties of a TestItem.
                     * @memberof whisk.api.user.v2
                     * @interface ITestItem
                     * @property {string|null} [id] TestItem id
                     * @property {string|null} [name] TestItem name
                     * @property {string|null} [surname] TestItem surname
                     * @property {google.protobuf.IStringValue|null} [description] TestItem description
                     * @property {google.protobuf.IStringValue|null} [test] TestItem test
                     * @property {Array.<google.protobuf.IStringValue>|null} [array] TestItem array
                     * @property {string|null} [story] TestItem story
                     * @property {whisk.api.shared.v1.ITime|null} [time] TestItem time
                     * @property {whisk.api.shared.v1.IDate|null} [date] TestItem date
                     * @property {Array.<whisk.api.user.v2.ISearchRecipesResponse>|null} [searches] TestItem searches
                     * @property {Object.<string,whisk.api.user.v2.ISearchRecipesResponse>|null} [mapSearch] TestItem mapSearch
                     * @property {whisk.api.user.v2.ISearchRecipesResponse|null} [search] TestItem search
                     * @property {Object.<string,string>|null} [extraInformation] TestItem extraInformation
                     */

                    /**
                     * Constructs a new TestItem.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a TestItem.
                     * @implements ITestItem
                     * @constructor
                     * @param {whisk.api.user.v2.ITestItem=} [properties] Properties to set
                     */
                    function TestItem(properties) {
                        this.array = [];
                        this.searches = [];
                        this.mapSearch = {};
                        this.extraInformation = {};
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TestItem id.
                     * @member {string} id
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.id = "";

                    /**
                     * TestItem name.
                     * @member {string} name
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.name = "";

                    /**
                     * TestItem surname.
                     * @member {string} surname
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.surname = "";

                    /**
                     * TestItem description.
                     * @member {google.protobuf.IStringValue|null|undefined} description
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.description = null;

                    /**
                     * TestItem test.
                     * @member {google.protobuf.IStringValue|null|undefined} test
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.test = null;

                    /**
                     * TestItem array.
                     * @member {Array.<google.protobuf.IStringValue>} array
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.array = $util.emptyArray;

                    /**
                     * TestItem story.
                     * @member {string} story
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.story = "";

                    /**
                     * TestItem time.
                     * @member {whisk.api.shared.v1.ITime|null|undefined} time
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.time = null;

                    /**
                     * TestItem date.
                     * @member {whisk.api.shared.v1.IDate|null|undefined} date
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.date = null;

                    /**
                     * TestItem searches.
                     * @member {Array.<whisk.api.user.v2.ISearchRecipesResponse>} searches
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.searches = $util.emptyArray;

                    /**
                     * TestItem mapSearch.
                     * @member {Object.<string,whisk.api.user.v2.ISearchRecipesResponse>} mapSearch
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.mapSearch = $util.emptyObject;

                    /**
                     * TestItem search.
                     * @member {whisk.api.user.v2.ISearchRecipesResponse|null|undefined} search
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.search = null;

                    /**
                     * TestItem extraInformation.
                     * @member {Object.<string,string>} extraInformation
                     * @memberof whisk.api.user.v2.TestItem
                     * @instance
                     */
                    TestItem.prototype.extraInformation = $util.emptyObject;

                    /**
                     * Encodes the specified TestItem message. Does not implicitly {@link whisk.api.user.v2.TestItem.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.TestItem
                     * @static
                     * @param {whisk.api.user.v2.ITestItem} message TestItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TestItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.surname != null && Object.hasOwnProperty.call(message, "surname"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.surname);
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            $root.google.protobuf.StringValue.encode(message.description, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.test != null && Object.hasOwnProperty.call(message, "test"))
                            $root.google.protobuf.StringValue.encode(message.test, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.array != null && message.array.length)
                            for (let i = 0; i < message.array.length; ++i)
                                $root.google.protobuf.StringValue.encode(message.array[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                        if (message.story != null && Object.hasOwnProperty.call(message, "story"))
                            writer.uint32(/* id 13, wireType 2 =*/106).string(message.story);
                        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                            $root.whisk.api.shared.v1.Time.encode(message.time, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
                        if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                            $root.whisk.api.shared.v1.Date.encode(message.date, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
                        if (message.searches != null && message.searches.length)
                            for (let i = 0; i < message.searches.length; ++i)
                                $root.whisk.api.user.v2.SearchRecipesResponse.encode(message.searches[i], writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
                        if (message.mapSearch != null && Object.hasOwnProperty.call(message, "mapSearch"))
                            for (let keys = Object.keys(message.mapSearch), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 41, wireType 2 =*/330).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.whisk.api.user.v2.SearchRecipesResponse.encode(message.mapSearch[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.search != null && Object.hasOwnProperty.call(message, "search"))
                            $root.whisk.api.user.v2.SearchRecipesResponse.encode(message.search, writer.uint32(/* id 42, wireType 2 =*/338).fork()).ldelim();
                        if (message.extraInformation != null && Object.hasOwnProperty.call(message, "extraInformation"))
                            for (let keys = Object.keys(message.extraInformation), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 43, wireType 2 =*/346).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.extraInformation[keys[i]]).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a TestItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.TestItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.TestItem} TestItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TestItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.TestItem(), key;
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.surname = reader.string();
                                break;
                            case 10:
                                message.description = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 11:
                                message.test = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 12:
                                if (!(message.array && message.array.length))
                                    message.array = [];
                                message.array.push($root.google.protobuf.StringValue.decode(reader, reader.uint32()));
                                break;
                            case 13:
                                message.story = reader.string();
                                break;
                            case 30:
                                message.time = $root.whisk.api.shared.v1.Time.decode(reader, reader.uint32());
                                break;
                            case 31:
                                message.date = $root.whisk.api.shared.v1.Date.decode(reader, reader.uint32());
                                break;
                            case 40:
                                if (!(message.searches && message.searches.length))
                                    message.searches = [];
                                message.searches.push($root.whisk.api.user.v2.SearchRecipesResponse.decode(reader, reader.uint32()));
                                break;
                            case 41:
                                reader.skip().pos++;
                                if (message.mapSearch === $util.emptyObject)
                                    message.mapSearch = {};
                                key = reader.string();
                                reader.pos++;
                                message.mapSearch[key] = $root.whisk.api.user.v2.SearchRecipesResponse.decode(reader, reader.uint32());
                                break;
                            case 42:
                                message.search = $root.whisk.api.user.v2.SearchRecipesResponse.decode(reader, reader.uint32());
                                break;
                            case 43:
                                reader.skip().pos++;
                                if (message.extraInformation === $util.emptyObject)
                                    message.extraInformation = {};
                                key = reader.string();
                                reader.pos++;
                                message.extraInformation[key] = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return TestItem;
                })();

                v2.TestOneof = (function() {

                    /**
                     * Properties of a TestOneof.
                     * @memberof whisk.api.user.v2
                     * @interface ITestOneof
                     * @property {string|null} [id] TestOneof id
                     * @property {whisk.api.user.v2.EthicalPreference|null} [deviceType] TestOneof deviceType
                     * @property {string|null} [customDevice] TestOneof customDevice
                     */

                    /**
                     * Constructs a new TestOneof.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a TestOneof.
                     * @implements ITestOneof
                     * @constructor
                     * @param {whisk.api.user.v2.ITestOneof=} [properties] Properties to set
                     */
                    function TestOneof(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TestOneof id.
                     * @member {string} id
                     * @memberof whisk.api.user.v2.TestOneof
                     * @instance
                     */
                    TestOneof.prototype.id = "";

                    /**
                     * TestOneof deviceType.
                     * @member {whisk.api.user.v2.EthicalPreference} deviceType
                     * @memberof whisk.api.user.v2.TestOneof
                     * @instance
                     */
                    TestOneof.prototype.deviceType = 0;

                    /**
                     * TestOneof customDevice.
                     * @member {string} customDevice
                     * @memberof whisk.api.user.v2.TestOneof
                     * @instance
                     */
                    TestOneof.prototype.customDevice = "";

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * TestOneof device.
                     * @member {"deviceType"|"customDevice"|undefined} device
                     * @memberof whisk.api.user.v2.TestOneof
                     * @instance
                     */
                    Object.defineProperty(TestOneof.prototype, "device", {
                        get: $util.oneOfGetter($oneOfFields = ["deviceType", "customDevice"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Encodes the specified TestOneof message. Does not implicitly {@link whisk.api.user.v2.TestOneof.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.TestOneof
                     * @static
                     * @param {whisk.api.user.v2.ITestOneof} message TestOneof message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TestOneof.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.deviceType != null && Object.hasOwnProperty.call(message, "deviceType"))
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.deviceType);
                        if (message.customDevice != null && Object.hasOwnProperty.call(message, "customDevice"))
                            writer.uint32(/* id 12, wireType 2 =*/98).string(message.customDevice);
                        return writer;
                    };

                    /**
                     * Decodes a TestOneof message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.TestOneof
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.TestOneof} TestOneof
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TestOneof.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.TestOneof();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 11:
                                message.deviceType = reader.int32();
                                break;
                            case 12:
                                message.customDevice = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return TestOneof;
                })();

                v2.TestEmpty = (function() {

                    /**
                     * Properties of a TestEmpty.
                     * @memberof whisk.api.user.v2
                     * @interface ITestEmpty
                     * @property {string|null} [id] TestEmpty id
                     * @property {whisk.api.user.v2.TestEmpty.IGlobalRegion|null} [global] TestEmpty global
                     * @property {whisk.api.user.v2.TestEmpty.IGlobalRegion|null} [any] TestEmpty any
                     * @property {string|null} [local] TestEmpty local
                     */

                    /**
                     * Constructs a new TestEmpty.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a TestEmpty.
                     * @implements ITestEmpty
                     * @constructor
                     * @param {whisk.api.user.v2.ITestEmpty=} [properties] Properties to set
                     */
                    function TestEmpty(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TestEmpty id.
                     * @member {string} id
                     * @memberof whisk.api.user.v2.TestEmpty
                     * @instance
                     */
                    TestEmpty.prototype.id = "";

                    /**
                     * TestEmpty global.
                     * @member {whisk.api.user.v2.TestEmpty.IGlobalRegion|null|undefined} global
                     * @memberof whisk.api.user.v2.TestEmpty
                     * @instance
                     */
                    TestEmpty.prototype.global = null;

                    /**
                     * TestEmpty any.
                     * @member {whisk.api.user.v2.TestEmpty.IGlobalRegion|null|undefined} any
                     * @memberof whisk.api.user.v2.TestEmpty
                     * @instance
                     */
                    TestEmpty.prototype.any = null;

                    /**
                     * TestEmpty local.
                     * @member {string} local
                     * @memberof whisk.api.user.v2.TestEmpty
                     * @instance
                     */
                    TestEmpty.prototype.local = "";

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * TestEmpty itemNameLong.
                     * @member {"global"|"any"|"local"|undefined} itemNameLong
                     * @memberof whisk.api.user.v2.TestEmpty
                     * @instance
                     */
                    Object.defineProperty(TestEmpty.prototype, "itemNameLong", {
                        get: $util.oneOfGetter($oneOfFields = ["global", "any", "local"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Encodes the specified TestEmpty message. Does not implicitly {@link whisk.api.user.v2.TestEmpty.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.TestEmpty
                     * @static
                     * @param {whisk.api.user.v2.ITestEmpty} message TestEmpty message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TestEmpty.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.global != null && Object.hasOwnProperty.call(message, "global"))
                            $root.whisk.api.user.v2.TestEmpty.GlobalRegion.encode(message.global, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.any != null && Object.hasOwnProperty.call(message, "any"))
                            $root.whisk.api.user.v2.TestEmpty.GlobalRegion.encode(message.any, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.local != null && Object.hasOwnProperty.call(message, "local"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.local);
                        return writer;
                    };

                    /**
                     * Decodes a TestEmpty message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.TestEmpty
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.TestEmpty} TestEmpty
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TestEmpty.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.TestEmpty();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.global = $root.whisk.api.user.v2.TestEmpty.GlobalRegion.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.any = $root.whisk.api.user.v2.TestEmpty.GlobalRegion.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.local = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    TestEmpty.GlobalRegion = (function() {

                        /**
                         * Properties of a GlobalRegion.
                         * @memberof whisk.api.user.v2.TestEmpty
                         * @interface IGlobalRegion
                         */

                        /**
                         * Constructs a new GlobalRegion.
                         * @memberof whisk.api.user.v2.TestEmpty
                         * @classdesc Represents a GlobalRegion.
                         * @implements IGlobalRegion
                         * @constructor
                         * @param {whisk.api.user.v2.TestEmpty.IGlobalRegion=} [properties] Properties to set
                         */
                        function GlobalRegion(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Encodes the specified GlobalRegion message. Does not implicitly {@link whisk.api.user.v2.TestEmpty.GlobalRegion.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.TestEmpty.GlobalRegion
                         * @static
                         * @param {whisk.api.user.v2.TestEmpty.IGlobalRegion} message GlobalRegion message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GlobalRegion.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Decodes a GlobalRegion message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.TestEmpty.GlobalRegion
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.TestEmpty.GlobalRegion} GlobalRegion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GlobalRegion.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.TestEmpty.GlobalRegion();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GlobalRegion;
                    })();

                    return TestEmpty;
                })();

                v2.MatchedIngredient = (function() {

                    /**
                     * Properties of a MatchedIngredient.
                     * @memberof whisk.api.user.v2
                     * @interface IMatchedIngredient
                     * @property {string|null} [name] MatchedIngredient name
                     */

                    /**
                     * Constructs a new MatchedIngredient.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a MatchedIngredient.
                     * @implements IMatchedIngredient
                     * @constructor
                     * @param {whisk.api.user.v2.IMatchedIngredient=} [properties] Properties to set
                     */
                    function MatchedIngredient(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MatchedIngredient name.
                     * @member {string} name
                     * @memberof whisk.api.user.v2.MatchedIngredient
                     * @instance
                     */
                    MatchedIngredient.prototype.name = "";

                    /**
                     * Encodes the specified MatchedIngredient message. Does not implicitly {@link whisk.api.user.v2.MatchedIngredient.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.MatchedIngredient
                     * @static
                     * @param {whisk.api.user.v2.IMatchedIngredient} message MatchedIngredient message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MatchedIngredient.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };

                    /**
                     * Decodes a MatchedIngredient message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.MatchedIngredient
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.MatchedIngredient} MatchedIngredient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MatchedIngredient.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.MatchedIngredient();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    MatchedIngredient.Calories = (function() {

                        /**
                         * Properties of a Calories.
                         * @memberof whisk.api.user.v2.MatchedIngredient
                         * @interface ICalories
                         * @property {number|null} [dailyCalories] Calories dailyCalories
                         */

                        /**
                         * Constructs a new Calories.
                         * @memberof whisk.api.user.v2.MatchedIngredient
                         * @classdesc Represents a Calories.
                         * @implements ICalories
                         * @constructor
                         * @param {whisk.api.user.v2.MatchedIngredient.ICalories=} [properties] Properties to set
                         */
                        function Calories(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Calories dailyCalories.
                         * @member {number} dailyCalories
                         * @memberof whisk.api.user.v2.MatchedIngredient.Calories
                         * @instance
                         */
                        Calories.prototype.dailyCalories = 0;

                        /**
                         * Encodes the specified Calories message. Does not implicitly {@link whisk.api.user.v2.MatchedIngredient.Calories.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.MatchedIngredient.Calories
                         * @static
                         * @param {whisk.api.user.v2.MatchedIngredient.ICalories} message Calories message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Calories.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.dailyCalories != null && Object.hasOwnProperty.call(message, "dailyCalories"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dailyCalories);
                            return writer;
                        };

                        /**
                         * Decodes a Calories message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.MatchedIngredient.Calories
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.MatchedIngredient.Calories} Calories
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Calories.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.MatchedIngredient.Calories();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.dailyCalories = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Calories;
                    })();

                    return MatchedIngredient;
                })();

                v2.SearchRecipesResponse = (function() {

                    /**
                     * Properties of a SearchRecipesResponse.
                     * @memberof whisk.api.user.v2
                     * @interface ISearchRecipesResponse
                     * @property {Array.<whisk.api.user.v2.SearchRecipesResponse.IHit>|null} [hit] SearchRecipesResponse hit
                     * @property {whisk.api.shared.v1.IDate|null} [date] SearchRecipesResponse date
                     * @property {Array.<whisk.api.shared.v1.IDate>|null} [dates] SearchRecipesResponse dates
                     * @property {whisk.api.user.v2.SearchRecipesResponse.IEmpty|null} [empty] SearchRecipesResponse empty
                     * @property {Array.<whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations>|null} [items] SearchRecipesResponse items
                     * @property {whisk.api.user.v2.MatchedIngredient.ICalories|null} [calories] SearchRecipesResponse calories
                     * @property {whisk.api.user.v2.Height.Unit|null} [size] SearchRecipesResponse size
                     * @property {whisk.api.user.v2.SearchRecipesResponse.Height.Unit2|null} [size2] SearchRecipesResponse size2
                     */

                    /**
                     * Constructs a new SearchRecipesResponse.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a SearchRecipesResponse.
                     * @implements ISearchRecipesResponse
                     * @constructor
                     * @param {whisk.api.user.v2.ISearchRecipesResponse=} [properties] Properties to set
                     */
                    function SearchRecipesResponse(properties) {
                        this.hit = [];
                        this.dates = [];
                        this.items = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SearchRecipesResponse hit.
                     * @member {Array.<whisk.api.user.v2.SearchRecipesResponse.IHit>} hit
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @instance
                     */
                    SearchRecipesResponse.prototype.hit = $util.emptyArray;

                    /**
                     * SearchRecipesResponse date.
                     * @member {whisk.api.shared.v1.IDate|null|undefined} date
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @instance
                     */
                    SearchRecipesResponse.prototype.date = null;

                    /**
                     * SearchRecipesResponse dates.
                     * @member {Array.<whisk.api.shared.v1.IDate>} dates
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @instance
                     */
                    SearchRecipesResponse.prototype.dates = $util.emptyArray;

                    /**
                     * SearchRecipesResponse empty.
                     * @member {whisk.api.user.v2.SearchRecipesResponse.IEmpty|null|undefined} empty
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @instance
                     */
                    SearchRecipesResponse.prototype.empty = null;

                    /**
                     * SearchRecipesResponse items.
                     * @member {Array.<whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations>} items
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @instance
                     */
                    SearchRecipesResponse.prototype.items = $util.emptyArray;

                    /**
                     * SearchRecipesResponse calories.
                     * @member {whisk.api.user.v2.MatchedIngredient.ICalories|null|undefined} calories
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @instance
                     */
                    SearchRecipesResponse.prototype.calories = null;

                    /**
                     * SearchRecipesResponse size.
                     * @member {whisk.api.user.v2.Height.Unit} size
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @instance
                     */
                    SearchRecipesResponse.prototype.size = 0;

                    /**
                     * SearchRecipesResponse size2.
                     * @member {whisk.api.user.v2.SearchRecipesResponse.Height.Unit2} size2
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @instance
                     */
                    SearchRecipesResponse.prototype.size2 = 0;

                    /**
                     * Encodes the specified SearchRecipesResponse message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @static
                     * @param {whisk.api.user.v2.ISearchRecipesResponse} message SearchRecipesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SearchRecipesResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hit != null && message.hit.length)
                            for (let i = 0; i < message.hit.length; ++i)
                                $root.whisk.api.user.v2.SearchRecipesResponse.Hit.encode(message.hit[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                            $root.whisk.api.shared.v1.Date.encode(message.date, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.dates != null && message.dates.length)
                            for (let i = 0; i < message.dates.length; ++i)
                                $root.whisk.api.shared.v1.Date.encode(message.dates[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                            $root.whisk.api.user.v2.SearchRecipesResponse.Empty.encode(message.empty, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.items != null && message.items.length)
                            for (let i = 0; i < message.items.length; ++i)
                                $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations.encode(message.items[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.calories != null && Object.hasOwnProperty.call(message, "calories"))
                            $root.whisk.api.user.v2.MatchedIngredient.Calories.encode(message.calories, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.size);
                        if (message.size2 != null && Object.hasOwnProperty.call(message, "size2"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.size2);
                        return writer;
                    };

                    /**
                     * Decodes a SearchRecipesResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.SearchRecipesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.SearchRecipesResponse} SearchRecipesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SearchRecipesResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.SearchRecipesResponse();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.hit && message.hit.length))
                                    message.hit = [];
                                message.hit.push($root.whisk.api.user.v2.SearchRecipesResponse.Hit.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.date = $root.whisk.api.shared.v1.Date.decode(reader, reader.uint32());
                                break;
                            case 3:
                                if (!(message.dates && message.dates.length))
                                    message.dates = [];
                                message.dates.push($root.whisk.api.shared.v1.Date.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                message.empty = $root.whisk.api.user.v2.SearchRecipesResponse.Empty.decode(reader, reader.uint32());
                                break;
                            case 5:
                                if (!(message.items && message.items.length))
                                    message.items = [];
                                message.items.push($root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                message.calories = $root.whisk.api.user.v2.MatchedIngredient.Calories.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.size = reader.int32();
                                break;
                            case 8:
                                message.size2 = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    SearchRecipesResponse.MatchedIngredient = (function() {

                        /**
                         * Properties of a MatchedIngredient.
                         * @memberof whisk.api.user.v2.SearchRecipesResponse
                         * @interface IMatchedIngredient
                         * @property {string|null} [name] MatchedIngredient name
                         */

                        /**
                         * Constructs a new MatchedIngredient.
                         * @memberof whisk.api.user.v2.SearchRecipesResponse
                         * @classdesc Represents a MatchedIngredient.
                         * @implements IMatchedIngredient
                         * @constructor
                         * @param {whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient=} [properties] Properties to set
                         */
                        function MatchedIngredient(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * MatchedIngredient name.
                         * @member {string} name
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient
                         * @instance
                         */
                        MatchedIngredient.prototype.name = "";

                        /**
                         * Encodes the specified MatchedIngredient message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient
                         * @static
                         * @param {whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient} message MatchedIngredient message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MatchedIngredient.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };

                        /**
                         * Decodes a MatchedIngredient message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient} MatchedIngredient
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MatchedIngredient.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        MatchedIngredient.Recommendations = (function() {

                            /**
                             * Properties of a Recommendations.
                             * @memberof whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient
                             * @interface IRecommendations
                             * @property {number|null} [dailyCalories] Recommendations dailyCalories
                             */

                            /**
                             * Constructs a new Recommendations.
                             * @memberof whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient
                             * @classdesc Represents a Recommendations.
                             * @implements IRecommendations
                             * @constructor
                             * @param {whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations=} [properties] Properties to set
                             */
                            function Recommendations(properties) {
                                if (properties)
                                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Recommendations dailyCalories.
                             * @member {number} dailyCalories
                             * @memberof whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations
                             * @instance
                             */
                            Recommendations.prototype.dailyCalories = 0;

                            /**
                             * Encodes the specified Recommendations message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations.verify|verify} messages.
                             * @function encode
                             * @memberof whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations
                             * @static
                             * @param {whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations} message Recommendations message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Recommendations.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.dailyCalories != null && Object.hasOwnProperty.call(message, "dailyCalories"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dailyCalories);
                                return writer;
                            };

                            /**
                             * Decodes a Recommendations message from the specified reader or buffer.
                             * @function decode
                             * @memberof whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations} Recommendations
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Recommendations.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations();
                                while (reader.pos < end) {
                                    let tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.dailyCalories = reader.int32();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            return Recommendations;
                        })();

                        return MatchedIngredient;
                    })();

                    SearchRecipesResponse.Empty = (function() {

                        /**
                         * Properties of an Empty.
                         * @memberof whisk.api.user.v2.SearchRecipesResponse
                         * @interface IEmpty
                         */

                        /**
                         * Constructs a new Empty.
                         * @memberof whisk.api.user.v2.SearchRecipesResponse
                         * @classdesc Represents an Empty.
                         * @implements IEmpty
                         * @constructor
                         * @param {whisk.api.user.v2.SearchRecipesResponse.IEmpty=} [properties] Properties to set
                         */
                        function Empty(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Encodes the specified Empty message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.Empty.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Empty
                         * @static
                         * @param {whisk.api.user.v2.SearchRecipesResponse.IEmpty} message Empty message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Empty.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Decodes an Empty message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Empty
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.SearchRecipesResponse.Empty} Empty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Empty.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.SearchRecipesResponse.Empty();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Empty;
                    })();

                    SearchRecipesResponse.Hit = (function() {

                        /**
                         * Properties of a Hit.
                         * @memberof whisk.api.user.v2.SearchRecipesResponse
                         * @interface IHit
                         * @property {whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient|null} [content] Hit content
                         * @property {Array.<whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient>|null} [ingredients] Hit ingredients
                         * @property {Object.<string,whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations>|null} [mapIngredients] Hit mapIngredients
                         * @property {Object.<string,whisk.api.user.v2.MatchedIngredient.ICalories>|null} [mapCalories] Hit mapCalories
                         * @property {Object.<string,whisk.api.user.v2.ITestItem>|null} [mapExternal] Hit mapExternal
                         */

                        /**
                         * Constructs a new Hit.
                         * @memberof whisk.api.user.v2.SearchRecipesResponse
                         * @classdesc Represents a Hit.
                         * @implements IHit
                         * @constructor
                         * @param {whisk.api.user.v2.SearchRecipesResponse.IHit=} [properties] Properties to set
                         */
                        function Hit(properties) {
                            this.ingredients = [];
                            this.mapIngredients = {};
                            this.mapCalories = {};
                            this.mapExternal = {};
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Hit content.
                         * @member {whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient|null|undefined} content
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Hit
                         * @instance
                         */
                        Hit.prototype.content = null;

                        /**
                         * Hit ingredients.
                         * @member {Array.<whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient>} ingredients
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Hit
                         * @instance
                         */
                        Hit.prototype.ingredients = $util.emptyArray;

                        /**
                         * Hit mapIngredients.
                         * @member {Object.<string,whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations>} mapIngredients
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Hit
                         * @instance
                         */
                        Hit.prototype.mapIngredients = $util.emptyObject;

                        /**
                         * Hit mapCalories.
                         * @member {Object.<string,whisk.api.user.v2.MatchedIngredient.ICalories>} mapCalories
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Hit
                         * @instance
                         */
                        Hit.prototype.mapCalories = $util.emptyObject;

                        /**
                         * Hit mapExternal.
                         * @member {Object.<string,whisk.api.user.v2.ITestItem>} mapExternal
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Hit
                         * @instance
                         */
                        Hit.prototype.mapExternal = $util.emptyObject;

                        /**
                         * Encodes the specified Hit message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.Hit.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Hit
                         * @static
                         * @param {whisk.api.user.v2.SearchRecipesResponse.IHit} message Hit message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Hit.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                                $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.ingredients != null && message.ingredients.length)
                                for (let i = 0; i < message.ingredients.length; ++i)
                                    $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.encode(message.ingredients[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.mapIngredients != null && Object.hasOwnProperty.call(message, "mapIngredients"))
                                for (let keys = Object.keys(message.mapIngredients), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations.encode(message.mapIngredients[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            if (message.mapCalories != null && Object.hasOwnProperty.call(message, "mapCalories"))
                                for (let keys = Object.keys(message.mapCalories), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.whisk.api.user.v2.MatchedIngredient.Calories.encode(message.mapCalories[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            if (message.mapExternal != null && Object.hasOwnProperty.call(message, "mapExternal"))
                                for (let keys = Object.keys(message.mapExternal), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.whisk.api.user.v2.TestItem.encode(message.mapExternal[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            return writer;
                        };

                        /**
                         * Decodes a Hit message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Hit
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.SearchRecipesResponse.Hit} Hit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Hit.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.SearchRecipesResponse.Hit(), key;
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.content = $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    if (!(message.ingredients && message.ingredients.length))
                                        message.ingredients = [];
                                    message.ingredients.push($root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.decode(reader, reader.uint32()));
                                    break;
                                case 3:
                                    reader.skip().pos++;
                                    if (message.mapIngredients === $util.emptyObject)
                                        message.mapIngredients = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.mapIngredients[key] = $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations.decode(reader, reader.uint32());
                                    break;
                                case 4:
                                    reader.skip().pos++;
                                    if (message.mapCalories === $util.emptyObject)
                                        message.mapCalories = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.mapCalories[key] = $root.whisk.api.user.v2.MatchedIngredient.Calories.decode(reader, reader.uint32());
                                    break;
                                case 5:
                                    reader.skip().pos++;
                                    if (message.mapExternal === $util.emptyObject)
                                        message.mapExternal = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.mapExternal[key] = $root.whisk.api.user.v2.TestItem.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Hit;
                    })();

                    SearchRecipesResponse.Height = (function() {

                        /**
                         * Properties of an Height.
                         * @memberof whisk.api.user.v2.SearchRecipesResponse
                         * @interface IHeight
                         */

                        /**
                         * Constructs a new Height.
                         * @memberof whisk.api.user.v2.SearchRecipesResponse
                         * @classdesc Represents an Height.
                         * @implements IHeight
                         * @constructor
                         * @param {whisk.api.user.v2.SearchRecipesResponse.IHeight=} [properties] Properties to set
                         */
                        function Height(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Encodes the specified Height message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.Height.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Height
                         * @static
                         * @param {whisk.api.user.v2.SearchRecipesResponse.IHeight} message Height message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Height.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Decodes an Height message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.SearchRecipesResponse.Height
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.SearchRecipesResponse.Height} Height
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Height.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.SearchRecipesResponse.Height();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Unit2 enum.
                         * @name whisk.api.user.v2.SearchRecipesResponse.Height.Unit2
                         * @enum {number}
                         * @property {number} UNIT_INVALID=0 UNIT_INVALID value
                         * @property {number} UNIT_CM=1 UNIT_CM value
                         */
                        Height.Unit2 = (function() {
                            const valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "UNIT_INVALID"] = 0;
                            values[valuesById[1] = "UNIT_CM"] = 1;
                            return values;
                        })();

                        return Height;
                    })();

                    return SearchRecipesResponse;
                })();

                v2.DeepCheck = (function() {

                    /**
                     * Properties of a DeepCheck.
                     * @memberof whisk.api.user.v2
                     * @interface IDeepCheck
                     * @property {Array.<whisk.api.user.v2.SearchRecipesResponse.IHit>|null} [items] DeepCheck items
                     * @property {Array.<whisk.api.user.v2.MatchedIngredient.ICalories>|null} [recommendations] DeepCheck recommendations
                     * @property {whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations|null} [ingredients] DeepCheck ingredients
                     * @property {whisk.api.user.v2.Height.Unit|null} [size] DeepCheck size
                     */

                    /**
                     * Constructs a new DeepCheck.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a DeepCheck.
                     * @implements IDeepCheck
                     * @constructor
                     * @param {whisk.api.user.v2.IDeepCheck=} [properties] Properties to set
                     */
                    function DeepCheck(properties) {
                        this.items = [];
                        this.recommendations = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeepCheck items.
                     * @member {Array.<whisk.api.user.v2.SearchRecipesResponse.IHit>} items
                     * @memberof whisk.api.user.v2.DeepCheck
                     * @instance
                     */
                    DeepCheck.prototype.items = $util.emptyArray;

                    /**
                     * DeepCheck recommendations.
                     * @member {Array.<whisk.api.user.v2.MatchedIngredient.ICalories>} recommendations
                     * @memberof whisk.api.user.v2.DeepCheck
                     * @instance
                     */
                    DeepCheck.prototype.recommendations = $util.emptyArray;

                    /**
                     * DeepCheck ingredients.
                     * @member {whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations|null|undefined} ingredients
                     * @memberof whisk.api.user.v2.DeepCheck
                     * @instance
                     */
                    DeepCheck.prototype.ingredients = null;

                    /**
                     * DeepCheck size.
                     * @member {whisk.api.user.v2.Height.Unit} size
                     * @memberof whisk.api.user.v2.DeepCheck
                     * @instance
                     */
                    DeepCheck.prototype.size = 0;

                    /**
                     * Encodes the specified DeepCheck message. Does not implicitly {@link whisk.api.user.v2.DeepCheck.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.DeepCheck
                     * @static
                     * @param {whisk.api.user.v2.IDeepCheck} message DeepCheck message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeepCheck.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.items != null && message.items.length)
                            for (let i = 0; i < message.items.length; ++i)
                                $root.whisk.api.user.v2.SearchRecipesResponse.Hit.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.recommendations != null && message.recommendations.length)
                            for (let i = 0; i < message.recommendations.length; ++i)
                                $root.whisk.api.user.v2.MatchedIngredient.Calories.encode(message.recommendations[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.ingredients != null && Object.hasOwnProperty.call(message, "ingredients"))
                            $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations.encode(message.ingredients, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.size);
                        return writer;
                    };

                    /**
                     * Decodes a DeepCheck message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.DeepCheck
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.DeepCheck} DeepCheck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeepCheck.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.DeepCheck();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.items && message.items.length))
                                    message.items = [];
                                message.items.push($root.whisk.api.user.v2.SearchRecipesResponse.Hit.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                if (!(message.recommendations && message.recommendations.length))
                                    message.recommendations = [];
                                message.recommendations.push($root.whisk.api.user.v2.MatchedIngredient.Calories.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                message.ingredients = $root.whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.size = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return DeepCheck;
                })();

                v2.ApiUpdateBusinessApp = (function() {

                    /**
                     * Properties of an ApiUpdateBusinessApp.
                     * @memberof whisk.api.user.v2
                     * @interface IApiUpdateBusinessApp
                     * @property {string|null} [id] ApiUpdateBusinessApp id
                     * @property {whisk.api.user.v2.ITestItem|null} [appAny] ApiUpdateBusinessApp appAny
                     * @property {google.protobuf.IFieldMask|null} [maskAnyName] ApiUpdateBusinessApp maskAnyName
                     */

                    /**
                     * Constructs a new ApiUpdateBusinessApp.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an ApiUpdateBusinessApp.
                     * @implements IApiUpdateBusinessApp
                     * @constructor
                     * @param {whisk.api.user.v2.IApiUpdateBusinessApp=} [properties] Properties to set
                     */
                    function ApiUpdateBusinessApp(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ApiUpdateBusinessApp id.
                     * @member {string} id
                     * @memberof whisk.api.user.v2.ApiUpdateBusinessApp
                     * @instance
                     */
                    ApiUpdateBusinessApp.prototype.id = "";

                    /**
                     * ApiUpdateBusinessApp appAny.
                     * @member {whisk.api.user.v2.ITestItem|null|undefined} appAny
                     * @memberof whisk.api.user.v2.ApiUpdateBusinessApp
                     * @instance
                     */
                    ApiUpdateBusinessApp.prototype.appAny = null;

                    /**
                     * ApiUpdateBusinessApp maskAnyName.
                     * @member {google.protobuf.IFieldMask|null|undefined} maskAnyName
                     * @memberof whisk.api.user.v2.ApiUpdateBusinessApp
                     * @instance
                     */
                    ApiUpdateBusinessApp.prototype.maskAnyName = null;

                    /**
                     * Encodes the specified ApiUpdateBusinessApp message. Does not implicitly {@link whisk.api.user.v2.ApiUpdateBusinessApp.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.ApiUpdateBusinessApp
                     * @static
                     * @param {whisk.api.user.v2.IApiUpdateBusinessApp} message ApiUpdateBusinessApp message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ApiUpdateBusinessApp.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.appAny != null && Object.hasOwnProperty.call(message, "appAny"))
                            $root.whisk.api.user.v2.TestItem.encode(message.appAny, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.maskAnyName != null && Object.hasOwnProperty.call(message, "maskAnyName"))
                            $root.google.protobuf.FieldMask.encode(message.maskAnyName, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes an ApiUpdateBusinessApp message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.ApiUpdateBusinessApp
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.ApiUpdateBusinessApp} ApiUpdateBusinessApp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ApiUpdateBusinessApp.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.ApiUpdateBusinessApp();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.appAny = $root.whisk.api.user.v2.TestItem.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.maskAnyName = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return ApiUpdateBusinessApp;
                })();

                v2.UserAPI = (function() {

                    /**
                     * Constructs a new UserAPI service.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a UserAPI
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function UserAPI(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }

                    (UserAPI.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserAPI;

                    /**
                     * Callback as used by {@link whisk.api.user.v2.UserAPI#getMe}.
                     * @memberof whisk.api.user.v2.UserAPI
                     * @typedef GetMeCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {whisk.api.user.v2.GetMeResponse} [response] GetMeResponse
                     */

                    /**
                     * Calls GetMe.
                     * @function getMe
                     * @memberof whisk.api.user.v2.UserAPI
                     * @instance
                     * @param {whisk.api.user.v2.IGetMeRequest} request GetMeRequest message or plain object
                     * @param {whisk.api.user.v2.UserAPI.GetMeCallback} callback Node-style callback called with the error, if any, and GetMeResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(UserAPI.prototype.getMe = function getMe(request, callback) {
                        return this.rpcCall(getMe, $root.whisk.api.user.v2.GetMeRequest, $root.whisk.api.user.v2.GetMeResponse, request, callback);
                    }, "name", { value: "GetMe" });

                    /**
                     * Calls GetMe.
                     * @function getMe
                     * @memberof whisk.api.user.v2.UserAPI
                     * @instance
                     * @param {whisk.api.user.v2.IGetMeRequest} request GetMeRequest message or plain object
                     * @returns {Promise<whisk.api.user.v2.GetMeResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link whisk.api.user.v2.UserAPI#get}.
                     * @memberof whisk.api.user.v2.UserAPI
                     * @typedef GetCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {whisk.api.user.v2.GetMeResponse} [response] GetMeResponse
                     */

                    /**
                     * Calls Get.
                     * @function get
                     * @memberof whisk.api.user.v2.UserAPI
                     * @instance
                     * @param {google.protobuf.IEmpty} request Empty message or plain object
                     * @param {whisk.api.user.v2.UserAPI.GetCallback} callback Node-style callback called with the error, if any, and GetMeResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(UserAPI.prototype.get = function get(request, callback) {
                        return this.rpcCall(get, $root.google.protobuf.Empty, $root.whisk.api.user.v2.GetMeResponse, request, callback);
                    }, "name", { value: "Get" });

                    /**
                     * Calls Get.
                     * @function get
                     * @memberof whisk.api.user.v2.UserAPI
                     * @instance
                     * @param {google.protobuf.IEmpty} request Empty message or plain object
                     * @returns {Promise<whisk.api.user.v2.GetMeResponse>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link whisk.api.user.v2.UserAPI#updateSettings}.
                     * @memberof whisk.api.user.v2.UserAPI
                     * @typedef UpdateSettingsCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {whisk.api.user.v2.UpdateSettingsResponse} [response] UpdateSettingsResponse
                     */

                    /**
                     * Calls UpdateSettings.
                     * @function updateSettings
                     * @memberof whisk.api.user.v2.UserAPI
                     * @instance
                     * @param {whisk.api.user.v2.IUpdateSettingsRequest} request UpdateSettingsRequest message or plain object
                     * @param {whisk.api.user.v2.UserAPI.UpdateSettingsCallback} callback Node-style callback called with the error, if any, and UpdateSettingsResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(UserAPI.prototype.updateSettings = function updateSettings(request, callback) {
                        return this.rpcCall(updateSettings, $root.whisk.api.user.v2.UpdateSettingsRequest, $root.whisk.api.user.v2.UpdateSettingsResponse, request, callback);
                    }, "name", { value: "UpdateSettings" });

                    /**
                     * Calls UpdateSettings.
                     * @function updateSettings
                     * @memberof whisk.api.user.v2.UserAPI
                     * @instance
                     * @param {whisk.api.user.v2.IUpdateSettingsRequest} request UpdateSettingsRequest message or plain object
                     * @returns {Promise<whisk.api.user.v2.UpdateSettingsResponse>} Promise
                     * @variation 2
                     */

                    return UserAPI;
                })();

                v2.GetMeRequest = (function() {

                    /**
                     * Properties of a GetMeRequest.
                     * @memberof whisk.api.user.v2
                     * @interface IGetMeRequest
                     */

                    /**
                     * Constructs a new GetMeRequest.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a GetMeRequest.
                     * @implements IGetMeRequest
                     * @constructor
                     * @param {whisk.api.user.v2.IGetMeRequest=} [properties] Properties to set
                     */
                    function GetMeRequest(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Encodes the specified GetMeRequest message. Does not implicitly {@link whisk.api.user.v2.GetMeRequest.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.GetMeRequest
                     * @static
                     * @param {whisk.api.user.v2.IGetMeRequest} message GetMeRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMeRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Decodes a GetMeRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.GetMeRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.GetMeRequest} GetMeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMeRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.GetMeRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return GetMeRequest;
                })();

                v2.GetMeResponse = (function() {

                    /**
                     * Properties of a GetMeResponse.
                     * @memberof whisk.api.user.v2
                     * @interface IGetMeResponse
                     * @property {whisk.api.user.v2.IUser|null} [user] GetMeResponse user
                     */

                    /**
                     * Constructs a new GetMeResponse.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a GetMeResponse.
                     * @implements IGetMeResponse
                     * @constructor
                     * @param {whisk.api.user.v2.IGetMeResponse=} [properties] Properties to set
                     */
                    function GetMeResponse(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetMeResponse user.
                     * @member {whisk.api.user.v2.IUser|null|undefined} user
                     * @memberof whisk.api.user.v2.GetMeResponse
                     * @instance
                     */
                    GetMeResponse.prototype.user = null;

                    /**
                     * Encodes the specified GetMeResponse message. Does not implicitly {@link whisk.api.user.v2.GetMeResponse.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.GetMeResponse
                     * @static
                     * @param {whisk.api.user.v2.IGetMeResponse} message GetMeResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetMeResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.whisk.api.user.v2.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a GetMeResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.GetMeResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.GetMeResponse} GetMeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetMeResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.GetMeResponse();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.whisk.api.user.v2.User.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return GetMeResponse;
                })();

                v2.UpdateSettingsRequest = (function() {

                    /**
                     * Properties of an UpdateSettingsRequest.
                     * @memberof whisk.api.user.v2
                     * @interface IUpdateSettingsRequest
                     * @property {whisk.api.user.v2.IUserSettings|null} [settings] UpdateSettingsRequest settings
                     * @property {string|null} [id] UpdateSettingsRequest id
                     * @property {google.protobuf.IFieldMask|null} [mask] UpdateSettingsRequest mask
                     */

                    /**
                     * Constructs a new UpdateSettingsRequest.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an UpdateSettingsRequest.
                     * @implements IUpdateSettingsRequest
                     * @constructor
                     * @param {whisk.api.user.v2.IUpdateSettingsRequest=} [properties] Properties to set
                     */
                    function UpdateSettingsRequest(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateSettingsRequest settings.
                     * @member {whisk.api.user.v2.IUserSettings|null|undefined} settings
                     * @memberof whisk.api.user.v2.UpdateSettingsRequest
                     * @instance
                     */
                    UpdateSettingsRequest.prototype.settings = null;

                    /**
                     * UpdateSettingsRequest id.
                     * @member {string} id
                     * @memberof whisk.api.user.v2.UpdateSettingsRequest
                     * @instance
                     */
                    UpdateSettingsRequest.prototype.id = "";

                    /**
                     * UpdateSettingsRequest mask.
                     * @member {google.protobuf.IFieldMask|null|undefined} mask
                     * @memberof whisk.api.user.v2.UpdateSettingsRequest
                     * @instance
                     */
                    UpdateSettingsRequest.prototype.mask = null;

                    /**
                     * Encodes the specified UpdateSettingsRequest message. Does not implicitly {@link whisk.api.user.v2.UpdateSettingsRequest.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UpdateSettingsRequest
                     * @static
                     * @param {whisk.api.user.v2.IUpdateSettingsRequest} message UpdateSettingsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateSettingsRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                            $root.whisk.api.user.v2.UserSettings.encode(message.settings, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                        if (message.mask != null && Object.hasOwnProperty.call(message, "mask"))
                            $root.google.protobuf.FieldMask.encode(message.mask, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes an UpdateSettingsRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UpdateSettingsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UpdateSettingsRequest} UpdateSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateSettingsRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateSettingsRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.settings = $root.whisk.api.user.v2.UserSettings.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.id = reader.string();
                                break;
                            case 3:
                                message.mask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return UpdateSettingsRequest;
                })();

                v2.UpdateSettingsResponse = (function() {

                    /**
                     * Properties of an UpdateSettingsResponse.
                     * @memberof whisk.api.user.v2
                     * @interface IUpdateSettingsResponse
                     * @property {whisk.api.user.v2.IUser|null} [user] UpdateSettingsResponse user
                     */

                    /**
                     * Constructs a new UpdateSettingsResponse.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an UpdateSettingsResponse.
                     * @implements IUpdateSettingsResponse
                     * @constructor
                     * @param {whisk.api.user.v2.IUpdateSettingsResponse=} [properties] Properties to set
                     */
                    function UpdateSettingsResponse(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateSettingsResponse user.
                     * @member {whisk.api.user.v2.IUser|null|undefined} user
                     * @memberof whisk.api.user.v2.UpdateSettingsResponse
                     * @instance
                     */
                    UpdateSettingsResponse.prototype.user = null;

                    /**
                     * Encodes the specified UpdateSettingsResponse message. Does not implicitly {@link whisk.api.user.v2.UpdateSettingsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UpdateSettingsResponse
                     * @static
                     * @param {whisk.api.user.v2.IUpdateSettingsResponse} message UpdateSettingsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateSettingsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.whisk.api.user.v2.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes an UpdateSettingsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UpdateSettingsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UpdateSettingsResponse} UpdateSettingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateSettingsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateSettingsResponse();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.whisk.api.user.v2.User.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return UpdateSettingsResponse;
                })();

                v2.ExtractRecipeRequest = (function() {

                    /**
                     * Properties of an ExtractRecipeRequest.
                     * @memberof whisk.api.user.v2
                     * @interface IExtractRecipeRequest
                     * @property {string|null} [url] ExtractRecipeRequest url
                     * @property {google.protobuf.IFieldMask|null} [recipeMask] ExtractRecipeRequest recipeMask
                     */

                    /**
                     * Constructs a new ExtractRecipeRequest.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an ExtractRecipeRequest.
                     * @implements IExtractRecipeRequest
                     * @constructor
                     * @param {whisk.api.user.v2.IExtractRecipeRequest=} [properties] Properties to set
                     */
                    function ExtractRecipeRequest(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ExtractRecipeRequest url.
                     * @member {string} url
                     * @memberof whisk.api.user.v2.ExtractRecipeRequest
                     * @instance
                     */
                    ExtractRecipeRequest.prototype.url = "";

                    /**
                     * ExtractRecipeRequest recipeMask.
                     * @member {google.protobuf.IFieldMask|null|undefined} recipeMask
                     * @memberof whisk.api.user.v2.ExtractRecipeRequest
                     * @instance
                     */
                    ExtractRecipeRequest.prototype.recipeMask = null;

                    /**
                     * Encodes the specified ExtractRecipeRequest message. Does not implicitly {@link whisk.api.user.v2.ExtractRecipeRequest.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.ExtractRecipeRequest
                     * @static
                     * @param {whisk.api.user.v2.IExtractRecipeRequest} message ExtractRecipeRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtractRecipeRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                        if (message.recipeMask != null && Object.hasOwnProperty.call(message, "recipeMask"))
                            $root.google.protobuf.FieldMask.encode(message.recipeMask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes an ExtractRecipeRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.ExtractRecipeRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.ExtractRecipeRequest} ExtractRecipeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtractRecipeRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.ExtractRecipeRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.url = reader.string();
                                break;
                            case 2:
                                message.recipeMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return ExtractRecipeRequest;
                })();

                v2.SaveRecipeRequest = (function() {

                    /**
                     * Properties of a SaveRecipeRequest.
                     * @memberof whisk.api.user.v2
                     * @interface ISaveRecipeRequest
                     * @property {string|null} [recipeId] SaveRecipeRequest recipeId
                     * @property {Array.<string>|null} [collectionIds] SaveRecipeRequest collectionIds
                     * @property {string|null} [sourceUserId] SaveRecipeRequest sourceUserId
                     * @property {google.protobuf.IFieldMask|null} [recipeMask] SaveRecipeRequest recipeMask
                     */

                    /**
                     * Constructs a new SaveRecipeRequest.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a SaveRecipeRequest.
                     * @implements ISaveRecipeRequest
                     * @constructor
                     * @param {whisk.api.user.v2.ISaveRecipeRequest=} [properties] Properties to set
                     */
                    function SaveRecipeRequest(properties) {
                        this.collectionIds = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SaveRecipeRequest recipeId.
                     * @member {string} recipeId
                     * @memberof whisk.api.user.v2.SaveRecipeRequest
                     * @instance
                     */
                    SaveRecipeRequest.prototype.recipeId = "";

                    /**
                     * SaveRecipeRequest collectionIds.
                     * @member {Array.<string>} collectionIds
                     * @memberof whisk.api.user.v2.SaveRecipeRequest
                     * @instance
                     */
                    SaveRecipeRequest.prototype.collectionIds = $util.emptyArray;

                    /**
                     * SaveRecipeRequest sourceUserId.
                     * @member {string} sourceUserId
                     * @memberof whisk.api.user.v2.SaveRecipeRequest
                     * @instance
                     */
                    SaveRecipeRequest.prototype.sourceUserId = "";

                    /**
                     * SaveRecipeRequest recipeMask.
                     * @member {google.protobuf.IFieldMask|null|undefined} recipeMask
                     * @memberof whisk.api.user.v2.SaveRecipeRequest
                     * @instance
                     */
                    SaveRecipeRequest.prototype.recipeMask = null;

                    /**
                     * Encodes the specified SaveRecipeRequest message. Does not implicitly {@link whisk.api.user.v2.SaveRecipeRequest.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.SaveRecipeRequest
                     * @static
                     * @param {whisk.api.user.v2.ISaveRecipeRequest} message SaveRecipeRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SaveRecipeRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.recipeId != null && Object.hasOwnProperty.call(message, "recipeId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.recipeId);
                        if (message.collectionIds != null && message.collectionIds.length)
                            for (let i = 0; i < message.collectionIds.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.collectionIds[i]);
                        if (message.sourceUserId != null && Object.hasOwnProperty.call(message, "sourceUserId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sourceUserId);
                        if (message.recipeMask != null && Object.hasOwnProperty.call(message, "recipeMask"))
                            $root.google.protobuf.FieldMask.encode(message.recipeMask, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes a SaveRecipeRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.SaveRecipeRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.SaveRecipeRequest} SaveRecipeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SaveRecipeRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.SaveRecipeRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.recipeId = reader.string();
                                break;
                            case 2:
                                if (!(message.collectionIds && message.collectionIds.length))
                                    message.collectionIds = [];
                                message.collectionIds.push(reader.string());
                                break;
                            case 3:
                                message.sourceUserId = reader.string();
                                break;
                            case 4:
                                message.recipeMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return SaveRecipeRequest;
                })();

                v2.UpdateRecipeRequest = (function() {

                    /**
                     * Properties of an UpdateRecipeRequest.
                     * @memberof whisk.api.user.v2
                     * @interface IUpdateRecipeRequest
                     * @property {string|null} [recipeId] UpdateRecipeRequest recipeId
                     * @property {google.protobuf.IFieldMask|null} [recipeMask] UpdateRecipeRequest recipeMask
                     * @property {google.protobuf.IFieldMask|null} [updateMask] UpdateRecipeRequest updateMask
                     * @property {whisk.api.user.v2.IUser|null} [payload] UpdateRecipeRequest payload
                     * @property {Array.<string>|null} [collectionIds] UpdateRecipeRequest collectionIds
                     */

                    /**
                     * Constructs a new UpdateRecipeRequest.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an UpdateRecipeRequest.
                     * @implements IUpdateRecipeRequest
                     * @constructor
                     * @param {whisk.api.user.v2.IUpdateRecipeRequest=} [properties] Properties to set
                     */
                    function UpdateRecipeRequest(properties) {
                        this.collectionIds = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateRecipeRequest recipeId.
                     * @member {string} recipeId
                     * @memberof whisk.api.user.v2.UpdateRecipeRequest
                     * @instance
                     */
                    UpdateRecipeRequest.prototype.recipeId = "";

                    /**
                     * UpdateRecipeRequest recipeMask.
                     * @member {google.protobuf.IFieldMask|null|undefined} recipeMask
                     * @memberof whisk.api.user.v2.UpdateRecipeRequest
                     * @instance
                     */
                    UpdateRecipeRequest.prototype.recipeMask = null;

                    /**
                     * UpdateRecipeRequest updateMask.
                     * @member {google.protobuf.IFieldMask|null|undefined} updateMask
                     * @memberof whisk.api.user.v2.UpdateRecipeRequest
                     * @instance
                     */
                    UpdateRecipeRequest.prototype.updateMask = null;

                    /**
                     * UpdateRecipeRequest payload.
                     * @member {whisk.api.user.v2.IUser|null|undefined} payload
                     * @memberof whisk.api.user.v2.UpdateRecipeRequest
                     * @instance
                     */
                    UpdateRecipeRequest.prototype.payload = null;

                    /**
                     * UpdateRecipeRequest collectionIds.
                     * @member {Array.<string>} collectionIds
                     * @memberof whisk.api.user.v2.UpdateRecipeRequest
                     * @instance
                     */
                    UpdateRecipeRequest.prototype.collectionIds = $util.emptyArray;

                    /**
                     * Encodes the specified UpdateRecipeRequest message. Does not implicitly {@link whisk.api.user.v2.UpdateRecipeRequest.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UpdateRecipeRequest
                     * @static
                     * @param {whisk.api.user.v2.IUpdateRecipeRequest} message UpdateRecipeRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRecipeRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.recipeId != null && Object.hasOwnProperty.call(message, "recipeId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.recipeId);
                        if (message.recipeMask != null && Object.hasOwnProperty.call(message, "recipeMask"))
                            $root.google.protobuf.FieldMask.encode(message.recipeMask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.updateMask != null && Object.hasOwnProperty.call(message, "updateMask"))
                            $root.google.protobuf.FieldMask.encode(message.updateMask, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                            $root.whisk.api.user.v2.User.encode(message.payload, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.collectionIds != null && message.collectionIds.length)
                            for (let i = 0; i < message.collectionIds.length; ++i)
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.collectionIds[i]);
                        return writer;
                    };

                    /**
                     * Decodes an UpdateRecipeRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UpdateRecipeRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UpdateRecipeRequest} UpdateRecipeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRecipeRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateRecipeRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.recipeId = reader.string();
                                break;
                            case 2:
                                message.recipeMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.updateMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.payload = $root.whisk.api.user.v2.User.decode(reader, reader.uint32());
                                break;
                            case 5:
                                if (!(message.collectionIds && message.collectionIds.length))
                                    message.collectionIds = [];
                                message.collectionIds.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return UpdateRecipeRequest;
                })();

                v2.UpdateListRequest = (function() {

                    /**
                     * Properties of an UpdateListRequest.
                     * @memberof whisk.api.user.v2
                     * @interface IUpdateListRequest
                     * @property {string|null} [id] UpdateListRequest id
                     * @property {whisk.api.user.v2.UpdateListRequest.IFields|null} [fields] UpdateListRequest fields
                     * @property {google.protobuf.IFieldMask|null} [mask] UpdateListRequest mask
                     */

                    /**
                     * Constructs a new UpdateListRequest.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an UpdateListRequest.
                     * @implements IUpdateListRequest
                     * @constructor
                     * @param {whisk.api.user.v2.IUpdateListRequest=} [properties] Properties to set
                     */
                    function UpdateListRequest(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateListRequest id.
                     * @member {string} id
                     * @memberof whisk.api.user.v2.UpdateListRequest
                     * @instance
                     */
                    UpdateListRequest.prototype.id = "";

                    /**
                     * UpdateListRequest fields.
                     * @member {whisk.api.user.v2.UpdateListRequest.IFields|null|undefined} fields
                     * @memberof whisk.api.user.v2.UpdateListRequest
                     * @instance
                     */
                    UpdateListRequest.prototype.fields = null;

                    /**
                     * UpdateListRequest mask.
                     * @member {google.protobuf.IFieldMask|null|undefined} mask
                     * @memberof whisk.api.user.v2.UpdateListRequest
                     * @instance
                     */
                    UpdateListRequest.prototype.mask = null;

                    /**
                     * Encodes the specified UpdateListRequest message. Does not implicitly {@link whisk.api.user.v2.UpdateListRequest.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UpdateListRequest
                     * @static
                     * @param {whisk.api.user.v2.IUpdateListRequest} message UpdateListRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateListRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                            $root.whisk.api.user.v2.UpdateListRequest.Fields.encode(message.fields, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.mask != null && Object.hasOwnProperty.call(message, "mask"))
                            $root.google.protobuf.FieldMask.encode(message.mask, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes an UpdateListRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UpdateListRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UpdateListRequest} UpdateListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateListRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateListRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.fields = $root.whisk.api.user.v2.UpdateListRequest.Fields.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.mask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    UpdateListRequest.Fields = (function() {

                        /**
                         * Properties of a Fields.
                         * @memberof whisk.api.user.v2.UpdateListRequest
                         * @interface IFields
                         * @property {string|null} [name] Fields name
                         * @property {boolean|null} [primary] Fields primary
                         */

                        /**
                         * Constructs a new Fields.
                         * @memberof whisk.api.user.v2.UpdateListRequest
                         * @classdesc Represents a Fields.
                         * @implements IFields
                         * @constructor
                         * @param {whisk.api.user.v2.UpdateListRequest.IFields=} [properties] Properties to set
                         */
                        function Fields(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Fields name.
                         * @member {string} name
                         * @memberof whisk.api.user.v2.UpdateListRequest.Fields
                         * @instance
                         */
                        Fields.prototype.name = "";

                        /**
                         * Fields primary.
                         * @member {boolean} primary
                         * @memberof whisk.api.user.v2.UpdateListRequest.Fields
                         * @instance
                         */
                        Fields.prototype.primary = false;

                        /**
                         * Encodes the specified Fields message. Does not implicitly {@link whisk.api.user.v2.UpdateListRequest.Fields.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.UpdateListRequest.Fields
                         * @static
                         * @param {whisk.api.user.v2.UpdateListRequest.IFields} message Fields message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Fields.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.primary != null && Object.hasOwnProperty.call(message, "primary"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.primary);
                            return writer;
                        };

                        /**
                         * Decodes a Fields message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.UpdateListRequest.Fields
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.UpdateListRequest.Fields} Fields
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Fields.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateListRequest.Fields();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.primary = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Fields;
                    })();

                    return UpdateListRequest;
                })();

                v2.UpdateItemRequest = (function() {

                    /**
                     * Properties of an UpdateItemRequest.
                     * @memberof whisk.api.user.v2
                     * @interface IUpdateItemRequest
                     * @property {string|null} [id] UpdateItemRequest id
                     * @property {whisk.api.user.v2.UpdateItemRequest.IFields|null} [fields] UpdateItemRequest fields
                     * @property {google.protobuf.IFieldMask|null} [mask] UpdateItemRequest mask
                     * @property {number|null} [newOrder] UpdateItemRequest newOrder
                     */

                    /**
                     * Constructs a new UpdateItemRequest.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an UpdateItemRequest.
                     * @implements IUpdateItemRequest
                     * @constructor
                     * @param {whisk.api.user.v2.IUpdateItemRequest=} [properties] Properties to set
                     */
                    function UpdateItemRequest(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateItemRequest id.
                     * @member {string} id
                     * @memberof whisk.api.user.v2.UpdateItemRequest
                     * @instance
                     */
                    UpdateItemRequest.prototype.id = "";

                    /**
                     * UpdateItemRequest fields.
                     * @member {whisk.api.user.v2.UpdateItemRequest.IFields|null|undefined} fields
                     * @memberof whisk.api.user.v2.UpdateItemRequest
                     * @instance
                     */
                    UpdateItemRequest.prototype.fields = null;

                    /**
                     * UpdateItemRequest mask.
                     * @member {google.protobuf.IFieldMask|null|undefined} mask
                     * @memberof whisk.api.user.v2.UpdateItemRequest
                     * @instance
                     */
                    UpdateItemRequest.prototype.mask = null;

                    /**
                     * UpdateItemRequest newOrder.
                     * @member {number} newOrder
                     * @memberof whisk.api.user.v2.UpdateItemRequest
                     * @instance
                     */
                    UpdateItemRequest.prototype.newOrder = 0;

                    /**
                     * Encodes the specified UpdateItemRequest message. Does not implicitly {@link whisk.api.user.v2.UpdateItemRequest.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UpdateItemRequest
                     * @static
                     * @param {whisk.api.user.v2.IUpdateItemRequest} message UpdateItemRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateItemRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                            $root.whisk.api.user.v2.UpdateItemRequest.Fields.encode(message.fields, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.mask != null && Object.hasOwnProperty.call(message, "mask"))
                            $root.google.protobuf.FieldMask.encode(message.mask, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.newOrder != null && Object.hasOwnProperty.call(message, "newOrder"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.newOrder);
                        return writer;
                    };

                    /**
                     * Decodes an UpdateItemRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UpdateItemRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UpdateItemRequest} UpdateItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateItemRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateItemRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.fields = $root.whisk.api.user.v2.UpdateItemRequest.Fields.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.mask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.newOrder = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    UpdateItemRequest.Fields = (function() {

                        /**
                         * Properties of a Fields.
                         * @memberof whisk.api.user.v2.UpdateItemRequest
                         * @interface IFields
                         * @property {string|null} [name] Fields name
                         * @property {number|null} [quantity] Fields quantity
                         * @property {string|null} [unit] Fields unit
                         * @property {whisk.api.shared.v1.IDate|null} [expiryDate] Fields expiryDate
                         * @property {whisk.api.user.v2.IUser|null} [user] Fields user
                         * @property {number|Long|null} [addedAt] Fields addedAt
                         */

                        /**
                         * Constructs a new Fields.
                         * @memberof whisk.api.user.v2.UpdateItemRequest
                         * @classdesc Represents a Fields.
                         * @implements IFields
                         * @constructor
                         * @param {whisk.api.user.v2.UpdateItemRequest.IFields=} [properties] Properties to set
                         */
                        function Fields(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Fields name.
                         * @member {string} name
                         * @memberof whisk.api.user.v2.UpdateItemRequest.Fields
                         * @instance
                         */
                        Fields.prototype.name = "";

                        /**
                         * Fields quantity.
                         * @member {number} quantity
                         * @memberof whisk.api.user.v2.UpdateItemRequest.Fields
                         * @instance
                         */
                        Fields.prototype.quantity = 0;

                        /**
                         * Fields unit.
                         * @member {string} unit
                         * @memberof whisk.api.user.v2.UpdateItemRequest.Fields
                         * @instance
                         */
                        Fields.prototype.unit = "";

                        /**
                         * Fields expiryDate.
                         * @member {whisk.api.shared.v1.IDate|null|undefined} expiryDate
                         * @memberof whisk.api.user.v2.UpdateItemRequest.Fields
                         * @instance
                         */
                        Fields.prototype.expiryDate = null;

                        /**
                         * Fields user.
                         * @member {whisk.api.user.v2.IUser|null|undefined} user
                         * @memberof whisk.api.user.v2.UpdateItemRequest.Fields
                         * @instance
                         */
                        Fields.prototype.user = null;

                        /**
                         * Fields addedAt.
                         * @member {number|Long} addedAt
                         * @memberof whisk.api.user.v2.UpdateItemRequest.Fields
                         * @instance
                         */
                        Fields.prototype.addedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Encodes the specified Fields message. Does not implicitly {@link whisk.api.user.v2.UpdateItemRequest.Fields.verify|verify} messages.
                         * @function encode
                         * @memberof whisk.api.user.v2.UpdateItemRequest.Fields
                         * @static
                         * @param {whisk.api.user.v2.UpdateItemRequest.IFields} message Fields message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Fields.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                                writer.uint32(/* id 2, wireType 1 =*/17).double(message.quantity);
                            if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.unit);
                            if (message.expiryDate != null && Object.hasOwnProperty.call(message, "expiryDate"))
                                $root.whisk.api.shared.v1.Date.encode(message.expiryDate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                                $root.whisk.api.user.v2.User.encode(message.user, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                            if (message.addedAt != null && Object.hasOwnProperty.call(message, "addedAt"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.addedAt);
                            return writer;
                        };

                        /**
                         * Decodes a Fields message from the specified reader or buffer.
                         * @function decode
                         * @memberof whisk.api.user.v2.UpdateItemRequest.Fields
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {whisk.api.user.v2.UpdateItemRequest.Fields} Fields
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Fields.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateItemRequest.Fields();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.quantity = reader.double();
                                    break;
                                case 3:
                                    message.unit = reader.string();
                                    break;
                                case 4:
                                    message.expiryDate = $root.whisk.api.shared.v1.Date.decode(reader, reader.uint32());
                                    break;
                                case 5:
                                    message.user = $root.whisk.api.user.v2.User.decode(reader, reader.uint32());
                                    break;
                                case 6:
                                    message.addedAt = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Fields;
                    })();

                    return UpdateItemRequest;
                })();

                v2.UpdateSettingsRequestOld = (function() {

                    /**
                     * Properties of an UpdateSettingsRequestOld.
                     * @memberof whisk.api.user.v2
                     * @interface IUpdateSettingsRequestOld
                     * @property {whisk.api.user.v2.IUserSettings|null} [settings] UpdateSettingsRequestOld settings
                     * @property {google.protobuf.IFieldMask|null} [mask] UpdateSettingsRequestOld mask
                     */

                    /**
                     * Constructs a new UpdateSettingsRequestOld.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an UpdateSettingsRequestOld.
                     * @implements IUpdateSettingsRequestOld
                     * @constructor
                     * @param {whisk.api.user.v2.IUpdateSettingsRequestOld=} [properties] Properties to set
                     */
                    function UpdateSettingsRequestOld(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateSettingsRequestOld settings.
                     * @member {whisk.api.user.v2.IUserSettings|null|undefined} settings
                     * @memberof whisk.api.user.v2.UpdateSettingsRequestOld
                     * @instance
                     */
                    UpdateSettingsRequestOld.prototype.settings = null;

                    /**
                     * UpdateSettingsRequestOld mask.
                     * @member {google.protobuf.IFieldMask|null|undefined} mask
                     * @memberof whisk.api.user.v2.UpdateSettingsRequestOld
                     * @instance
                     */
                    UpdateSettingsRequestOld.prototype.mask = null;

                    /**
                     * Encodes the specified UpdateSettingsRequestOld message. Does not implicitly {@link whisk.api.user.v2.UpdateSettingsRequestOld.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UpdateSettingsRequestOld
                     * @static
                     * @param {whisk.api.user.v2.IUpdateSettingsRequestOld} message UpdateSettingsRequestOld message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateSettingsRequestOld.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                            $root.whisk.api.user.v2.UserSettings.encode(message.settings, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.mask != null && Object.hasOwnProperty.call(message, "mask"))
                            $root.google.protobuf.FieldMask.encode(message.mask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Decodes an UpdateSettingsRequestOld message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UpdateSettingsRequestOld
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UpdateSettingsRequestOld} UpdateSettingsRequestOld
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateSettingsRequestOld.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateSettingsRequestOld();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.settings = $root.whisk.api.user.v2.UserSettings.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.mask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return UpdateSettingsRequestOld;
                })();

                v2.UpdateBusinessApp = (function() {

                    /**
                     * Properties of an UpdateBusinessApp.
                     * @memberof whisk.api.user.v2
                     * @interface IUpdateBusinessApp
                     * @property {google.protobuf.IFieldMask|null} [updateMask] UpdateBusinessApp updateMask
                     * @property {string|null} [name] UpdateBusinessApp name
                     * @property {string|null} [description] UpdateBusinessApp description
                     * @property {whisk.api.user.v2.IUser|null} [user] UpdateBusinessApp user
                     * @property {boolean|null} [isTest] UpdateBusinessApp isTest
                     * @property {boolean|null} [isTrial] UpdateBusinessApp isTrial
                     */

                    /**
                     * Constructs a new UpdateBusinessApp.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents an UpdateBusinessApp.
                     * @implements IUpdateBusinessApp
                     * @constructor
                     * @param {whisk.api.user.v2.IUpdateBusinessApp=} [properties] Properties to set
                     */
                    function UpdateBusinessApp(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateBusinessApp updateMask.
                     * @member {google.protobuf.IFieldMask|null|undefined} updateMask
                     * @memberof whisk.api.user.v2.UpdateBusinessApp
                     * @instance
                     */
                    UpdateBusinessApp.prototype.updateMask = null;

                    /**
                     * UpdateBusinessApp name.
                     * @member {string} name
                     * @memberof whisk.api.user.v2.UpdateBusinessApp
                     * @instance
                     */
                    UpdateBusinessApp.prototype.name = "";

                    /**
                     * UpdateBusinessApp description.
                     * @member {string} description
                     * @memberof whisk.api.user.v2.UpdateBusinessApp
                     * @instance
                     */
                    UpdateBusinessApp.prototype.description = "";

                    /**
                     * UpdateBusinessApp user.
                     * @member {whisk.api.user.v2.IUser|null|undefined} user
                     * @memberof whisk.api.user.v2.UpdateBusinessApp
                     * @instance
                     */
                    UpdateBusinessApp.prototype.user = null;

                    /**
                     * UpdateBusinessApp isTest.
                     * @member {boolean} isTest
                     * @memberof whisk.api.user.v2.UpdateBusinessApp
                     * @instance
                     */
                    UpdateBusinessApp.prototype.isTest = false;

                    /**
                     * UpdateBusinessApp isTrial.
                     * @member {boolean} isTrial
                     * @memberof whisk.api.user.v2.UpdateBusinessApp
                     * @instance
                     */
                    UpdateBusinessApp.prototype.isTrial = false;

                    /**
                     * Encodes the specified UpdateBusinessApp message. Does not implicitly {@link whisk.api.user.v2.UpdateBusinessApp.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UpdateBusinessApp
                     * @static
                     * @param {whisk.api.user.v2.IUpdateBusinessApp} message UpdateBusinessApp message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateBusinessApp.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.updateMask != null && Object.hasOwnProperty.call(message, "updateMask"))
                            $root.google.protobuf.FieldMask.encode(message.updateMask, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.whisk.api.user.v2.User.encode(message.user, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.isTest != null && Object.hasOwnProperty.call(message, "isTest"))
                            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isTest);
                        if (message.isTrial != null && Object.hasOwnProperty.call(message, "isTrial"))
                            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isTrial);
                        return writer;
                    };

                    /**
                     * Decodes an UpdateBusinessApp message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UpdateBusinessApp
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UpdateBusinessApp} UpdateBusinessApp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateBusinessApp.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UpdateBusinessApp();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.updateMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.name = reader.string();
                                break;
                            case 4:
                                message.description = reader.string();
                                break;
                            case 5:
                                message.user = $root.whisk.api.user.v2.User.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.isTest = reader.bool();
                                break;
                            case 8:
                                message.isTrial = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return UpdateBusinessApp;
                })();

                v2.UserSettings2 = (function() {

                    /**
                     * Properties of a UserSettings2.
                     * @memberof whisk.api.user.v2
                     * @interface IUserSettings2
                     * @property {google.protobuf.IFieldMask|null} [nonDefaultMask] UserSettings2 nonDefaultMask
                     * @property {Array.<string>|null} [onboarding] UserSettings2 onboarding
                     * @property {string|null} [firstName] UserSettings2 firstName
                     * @property {string|null} [lastName] UserSettings2 lastName
                     */

                    /**
                     * Constructs a new UserSettings2.
                     * @memberof whisk.api.user.v2
                     * @classdesc Represents a UserSettings2.
                     * @implements IUserSettings2
                     * @constructor
                     * @param {whisk.api.user.v2.IUserSettings2=} [properties] Properties to set
                     */
                    function UserSettings2(properties) {
                        this.onboarding = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UserSettings2 nonDefaultMask.
                     * @member {google.protobuf.IFieldMask|null|undefined} nonDefaultMask
                     * @memberof whisk.api.user.v2.UserSettings2
                     * @instance
                     */
                    UserSettings2.prototype.nonDefaultMask = null;

                    /**
                     * UserSettings2 onboarding.
                     * @member {Array.<string>} onboarding
                     * @memberof whisk.api.user.v2.UserSettings2
                     * @instance
                     */
                    UserSettings2.prototype.onboarding = $util.emptyArray;

                    /**
                     * UserSettings2 firstName.
                     * @member {string} firstName
                     * @memberof whisk.api.user.v2.UserSettings2
                     * @instance
                     */
                    UserSettings2.prototype.firstName = "";

                    /**
                     * UserSettings2 lastName.
                     * @member {string} lastName
                     * @memberof whisk.api.user.v2.UserSettings2
                     * @instance
                     */
                    UserSettings2.prototype.lastName = "";

                    /**
                     * Encodes the specified UserSettings2 message. Does not implicitly {@link whisk.api.user.v2.UserSettings2.verify|verify} messages.
                     * @function encode
                     * @memberof whisk.api.user.v2.UserSettings2
                     * @static
                     * @param {whisk.api.user.v2.IUserSettings2} message UserSettings2 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserSettings2.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nonDefaultMask != null && Object.hasOwnProperty.call(message, "nonDefaultMask"))
                            $root.google.protobuf.FieldMask.encode(message.nonDefaultMask, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.onboarding != null && message.onboarding.length)
                            for (let i = 0; i < message.onboarding.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.onboarding[i]);
                        if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.firstName);
                        if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.lastName);
                        return writer;
                    };

                    /**
                     * Decodes a UserSettings2 message from the specified reader or buffer.
                     * @function decode
                     * @memberof whisk.api.user.v2.UserSettings2
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {whisk.api.user.v2.UserSettings2} UserSettings2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserSettings2.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whisk.api.user.v2.UserSettings2();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.nonDefaultMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (!(message.onboarding && message.onboarding.length))
                                    message.onboarding = [];
                                message.onboarding.push(reader.string());
                                break;
                            case 3:
                                message.firstName = reader.string();
                                break;
                            case 4:
                                message.lastName = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    return UserSettings2;
                })();

                return v2;
            })();

            return user;
        })();

        return api;
    })();

    return whisk;
})();

export { $root as default };
