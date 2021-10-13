import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;
        }

        /** Properties of a HttpBody. */
        interface IHttpBody {

            /** HttpBody contentType */
            contentType?: (string|null);

            /** HttpBody data */
            data?: (Uint8Array|null);

            /** HttpBody extensions */
            extensions?: (google.protobuf.IAny[]|null);
        }

        /** Represents a HttpBody. */
        class HttpBody implements IHttpBody {

            /**
             * Constructs a new HttpBody.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpBody);

            /** HttpBody contentType. */
            public contentType: string;

            /** HttpBody data. */
            public data: Uint8Array;

            /** HttpBody extensions. */
            public extensions: google.protobuf.IAny[];

            /**
             * Encodes the specified HttpBody message. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpBody message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpBody;
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .eventName */
            ".eventName"?: (string|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** MessageOptions .eventName. */
            public eventName: string;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .entryName */
            ".entryName"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** EnumValueOptions .entryName. */
            public entryName: string;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;
        }
    }
}

/** Namespace whisk. */
export namespace whisk {

    /** Namespace api. */
    namespace api {

        /** Namespace shared. */
        namespace shared {

            /** Namespace v1. */
            namespace v1 {

                /**
                 * Properties of a Test.
                 * @param title - The title of the book.
                 * @param author - The author of the book.
                 */
                class ITest {

                    /**
                     * Properties of a Test.
                     * @param title - The title of the book.
                     * @param author - The author of the book.
                     */
                    constructor(title: string, author: string);
                }

                /** Represents a Test. */
                class Test implements ITest {

                    /**
                     * Constructs a new Test.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.ITest);

                    /**
                     * Multi
                     * line /** test *\/
                     */
                    public string: string;

                    /** Test uint32. */
                    public uint32: number;

                    /** Test inner. */
                    public inner?: (whisk.api.shared.v1.Test.IInner|null);

                    /**
                     * Represents a book.
                     * @param title - The title of the book.
                     * @param author - The author of the book.
                     */
                    public float: number;

                    /**
                     * Encodes the specified Test message. Does not implicitly {@link whisk.api.shared.v1.Test.verify|verify} messages.
                     * @param message Test message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.ITest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Test message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Test
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Test;
                }

                namespace Test {

                    /** Properties of an Inner. */
                    interface IInner {

                        /** Inner int32 */
                        int32?: (number|null);

                        /** Inner innerInner */
                        innerInner?: (whisk.api.shared.v1.Test.Inner.IInnerInner|null);

                        /** Inner outer */
                        outer?: (whisk.api.shared.v1.IOuter|null);
                    }

                    /** Represents an Inner. */
                    class Inner implements IInner {

                        /**
                         * Constructs a new Inner.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.shared.v1.Test.IInner);

                        /** Inner int32. */
                        public int32: number;

                        /** Inner innerInner. */
                        public innerInner?: (whisk.api.shared.v1.Test.Inner.IInnerInner|null);

                        /** Inner outer. */
                        public outer?: (whisk.api.shared.v1.IOuter|null);

                        /**
                         * Encodes the specified Inner message. Does not implicitly {@link whisk.api.shared.v1.Test.Inner.verify|verify} messages.
                         * @param message Inner message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.shared.v1.Test.IInner, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Inner message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Inner
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Test.Inner;
                    }

                    namespace Inner {

                        /** Properties of an InnerInner. */
                        interface IInnerInner {

                            /** InnerInner long */
                            long?: (number|Long|null);

                            /** InnerInner enum */
                            "enum"?: (whisk.api.shared.v1.Test.Enum|null);

                            /** InnerInner sint32 */
                            sint32?: (number|null);
                        }

                        /** Represents an InnerInner. */
                        class InnerInner implements IInnerInner {

                            /**
                             * Constructs a new InnerInner.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: whisk.api.shared.v1.Test.Inner.IInnerInner);

                            /** InnerInner long. */
                            public long: (number|Long);

                            /** InnerInner enum. */
                            public enum: whisk.api.shared.v1.Test.Enum;

                            /** InnerInner sint32. */
                            public sint32: number;

                            /**
                             * Encodes the specified InnerInner message. Does not implicitly {@link whisk.api.shared.v1.Test.Inner.InnerInner.verify|verify} messages.
                             * @param message InnerInner message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: whisk.api.shared.v1.Test.Inner.IInnerInner, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InnerInner message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InnerInner
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Test.Inner.InnerInner;
                        }
                    }

                    /** Enum enum. */
                    enum Enum {
                        ONE = 0,
                        TWO = 1,
                        THREE = 2,
                        FOUR = 3,
                        FIVE = 4
                    }
                }

                /** Properties of an Outer. */
                interface IOuter {

                    /** Outer bool */
                    bool?: (boolean[]|null);

                    /** Outer double */
                    double?: (number|null);

                    /** Outer uint32 */
                    uint32?: (number[]|null);

                    /** Outer string */
                    string?: (string[]|null);
                }

                /** Represents an Outer. */
                class Outer implements IOuter {

                    /**
                     * Constructs a new Outer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.IOuter);

                    /** Outer bool. */
                    public bool: boolean[];

                    /** Outer double. */
                    public double: number;

                    /** Outer uint32. */
                    public uint32: number[];

                    /** Outer string. */
                    public string: string[];

                    /**
                     * Encodes the specified Outer message. Does not implicitly {@link whisk.api.shared.v1.Outer.verify|verify} messages.
                     * @param message Outer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.IOuter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Outer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Outer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Outer;
                }

                /** Properties of a Date. */
                interface IDate {

                    /** Date year */
                    year?: (number|null);

                    /** Date month */
                    month?: (number|null);

                    /** Date day */
                    day?: (number|null);
                }

                /** Represents a Date. */
                class Date implements IDate {

                    /**
                     * Constructs a new Date.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.IDate);

                    /** Date year. */
                    public year: number;

                    /** Date month. */
                    public month: number;

                    /** Date day. */
                    public day: number;

                    /**
                     * Encodes the specified Date message. Does not implicitly {@link whisk.api.shared.v1.Date.verify|verify} messages.
                     * @param message Date message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Date message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Date
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Date;
                }

                /** Properties of a Time. */
                interface ITime {

                    /** Time time */
                    time?: (number|Long|null);

                    /** Time nano */
                    nano?: (google.protobuf.IUInt32Value|null);
                }

                /** Represents a Time. */
                class Time implements ITime {

                    /**
                     * Constructs a new Time.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.ITime);

                    /** Time time. */
                    public time: (number|Long);

                    /** Time nano. */
                    public nano?: (google.protobuf.IUInt32Value|null);

                    /**
                     * Encodes the specified Time message. Does not implicitly {@link whisk.api.shared.v1.Time.verify|verify} messages.
                     * @param message Time message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.ITime, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Time message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Time
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Time;
                }

                /** Properties of a Primitive. */
                interface IPrimitive {

                    /** Primitive double */
                    double?: (number|null);

                    /** Primitive float */
                    float?: (number|null);

                    /** Primitive int32 */
                    int32?: (number|null);

                    /** Primitive int64 */
                    int64?: (number|Long|null);

                    /** Primitive uint32 */
                    uint32?: (number|null);

                    /** Primitive uint64 */
                    uint64?: (number|Long|null);

                    /** Primitive sint32 */
                    sint32?: (number|null);

                    /** Primitive sint64 */
                    sint64?: (number|Long|null);

                    /** Primitive fixed32 */
                    fixed32?: (number|null);

                    /** Primitive fixed64 */
                    fixed64?: (number|Long|null);

                    /** Primitive sfixed32 */
                    sfixed32?: (number|null);

                    /** Primitive sfixed64 */
                    sfixed64?: (number|Long|null);

                    /** Primitive bool */
                    bool?: (boolean|null);

                    /** Primitive string */
                    string?: (string|null);

                    /** Primitive bytes */
                    bytes?: (Uint8Array|null);
                }

                /** Represents a Primitive. */
                class Primitive implements IPrimitive {

                    /**
                     * Constructs a new Primitive.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.IPrimitive);

                    /** Primitive double. */
                    public double: number;

                    /** Primitive float. */
                    public float: number;

                    /** Primitive int32. */
                    public int32: number;

                    /** Primitive int64. */
                    public int64: (number|Long);

                    /** Primitive uint32. */
                    public uint32: number;

                    /** Primitive uint64. */
                    public uint64: (number|Long);

                    /** Primitive sint32. */
                    public sint32: number;

                    /** Primitive sint64. */
                    public sint64: (number|Long);

                    /** Primitive fixed32. */
                    public fixed32: number;

                    /** Primitive fixed64. */
                    public fixed64: (number|Long);

                    /** Primitive sfixed32. */
                    public sfixed32: number;

                    /** Primitive sfixed64. */
                    public sfixed64: (number|Long);

                    /** Primitive bool. */
                    public bool: boolean;

                    /** Primitive string. */
                    public string: string;

                    /** Primitive bytes. */
                    public bytes: Uint8Array;

                    /**
                     * Encodes the specified Primitive message. Does not implicitly {@link whisk.api.shared.v1.Primitive.verify|verify} messages.
                     * @param message Primitive message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.IPrimitive, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Primitive message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Primitive
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Primitive;
                }

                /** Properties of a Big. */
                interface IBig {

                    /** Big b */
                    b?: (number|Long|null);
                }

                /** Represents a Big. */
                class Big implements IBig {

                    /**
                     * Constructs a new Big.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.IBig);

                    /** Big b. */
                    public b: (number|Long);

                    /**
                     * Encodes the specified Big message. Does not implicitly {@link whisk.api.shared.v1.Big.verify|verify} messages.
                     * @param message Big message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.IBig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Big message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Big
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Big;
                }

                /** Properties of a Sign. */
                interface ISign {

                    /** Sign double */
                    double?: (number|null);

                    /** Sign float */
                    float?: (number|null);

                    /** Sign int32 */
                    int32?: (number|null);

                    /** Sign int64 */
                    int64?: (number|Long|null);

                    /** Sign uint32 */
                    uint32?: (number|null);

                    /** Sign uint64 */
                    uint64?: (number|Long|null);

                    /** Sign sint32 */
                    sint32?: (number|null);

                    /** Sign sint64 */
                    sint64?: (number|Long|null);

                    /** Sign fixed32 */
                    fixed32?: (number|null);

                    /** Sign fixed64 */
                    fixed64?: (number|Long|null);

                    /** Sign sfixed32 */
                    sfixed32?: (number|null);

                    /** Sign sfixed64 */
                    sfixed64?: (number|Long|null);
                }

                /** Represents a Sign. */
                class Sign implements ISign {

                    /**
                     * Constructs a new Sign.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.ISign);

                    /** Sign double. */
                    public double: number;

                    /** Sign float. */
                    public float: number;

                    /** Sign int32. */
                    public int32: number;

                    /** Sign int64. */
                    public int64: (number|Long);

                    /** Sign uint32. */
                    public uint32: number;

                    /** Sign uint64. */
                    public uint64: (number|Long);

                    /** Sign sint32. */
                    public sint32: number;

                    /** Sign sint64. */
                    public sint64: (number|Long);

                    /** Sign fixed32. */
                    public fixed32: number;

                    /** Sign fixed64. */
                    public fixed64: (number|Long);

                    /** Sign sfixed32. */
                    public sfixed32: number;

                    /** Sign sfixed64. */
                    public sfixed64: (number|Long);

                    /**
                     * Encodes the specified Sign message. Does not implicitly {@link whisk.api.shared.v1.Sign.verify|verify} messages.
                     * @param message Sign message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.ISign, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sign message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sign
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Sign;
                }

                /** Properties of a Double. */
                interface IDouble {

                    /** Double d */
                    d?: (number|null);
                }

                /** Represents a Double. */
                class Double implements IDouble {

                    /**
                     * Constructs a new Double.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.IDouble);

                    /** Double d. */
                    public d: number;

                    /**
                     * Encodes the specified Double message. Does not implicitly {@link whisk.api.shared.v1.Double.verify|verify} messages.
                     * @param message Double message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.IDouble, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Double message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Double
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Double;
                }

                /** Properties of a Wrapper. */
                interface IWrapper {

                    /** Wrapper double */
                    double?: (google.protobuf.IDoubleValue|null);

                    /** Wrapper float */
                    float?: (google.protobuf.IFloatValue|null);

                    /** Wrapper int64 */
                    int64?: (google.protobuf.IInt64Value|null);

                    /** Wrapper uint64 */
                    uint64?: (google.protobuf.IUInt64Value|null);

                    /** Wrapper int32 */
                    int32?: (google.protobuf.IInt32Value|null);

                    /** Wrapper uint32 */
                    uint32?: (google.protobuf.IUInt32Value|null);

                    /** Wrapper bool */
                    bool?: (google.protobuf.IBoolValue|null);

                    /** Wrapper string */
                    string?: (google.protobuf.IStringValue|null);

                    /** Wrapper bytes */
                    bytes?: (google.protobuf.IBytesValue|null);
                }

                /** Represents a Wrapper. */
                class Wrapper implements IWrapper {

                    /**
                     * Constructs a new Wrapper.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.shared.v1.IWrapper);

                    /** Wrapper double. */
                    public double?: (google.protobuf.IDoubleValue|null);

                    /** Wrapper float. */
                    public float?: (google.protobuf.IFloatValue|null);

                    /** Wrapper int64. */
                    public int64?: (google.protobuf.IInt64Value|null);

                    /** Wrapper uint64. */
                    public uint64?: (google.protobuf.IUInt64Value|null);

                    /** Wrapper int32. */
                    public int32?: (google.protobuf.IInt32Value|null);

                    /** Wrapper uint32. */
                    public uint32?: (google.protobuf.IUInt32Value|null);

                    /** Wrapper bool. */
                    public bool?: (google.protobuf.IBoolValue|null);

                    /** Wrapper string. */
                    public string?: (google.protobuf.IStringValue|null);

                    /** Wrapper bytes. */
                    public bytes?: (google.protobuf.IBytesValue|null);

                    /**
                     * Encodes the specified Wrapper message. Does not implicitly {@link whisk.api.shared.v1.Wrapper.verify|verify} messages.
                     * @param message Wrapper message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.shared.v1.IWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Wrapper message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Wrapper
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.shared.v1.Wrapper;
                }
            }
        }

        /** Namespace user. */
        namespace user {

            /** Namespace v2. */
            namespace v2 {

                /** Properties of a Test. */
                interface ITest {

                    /** Test id */
                    id?: (string|null);

                    /** Test text */
                    text?: (string|null);

                    /** Test currentWeek */
                    currentWeek?: (whisk.api.user.v2.IWeek|null);

                    /** Test nextWeek */
                    nextWeek?: (whisk.api.user.v2.IWeek|null);

                    /** Test time */
                    time?: (whisk.api.shared.v1.ITime|null);

                    /** Test timeAfter */
                    timeAfter?: (whisk.api.shared.v1.ITime|null);

                    /** Test description */
                    description?: (google.protobuf.IStringValue|null);

                    /** Test item */
                    item?: (string|null);

                    /** Test test */
                    test?: (google.protobuf.IStringValue|null);

                    /** Test array */
                    array?: (boolean[]|null);

                    /** Test array_2 */
                    array_2?: (boolean[]|null);

                    /** Test mapSearch */
                    mapSearch?: ({ [k: string]: boolean }|null);

                    /** Test mapSearch_2 */
                    mapSearch_2?: ({ [k: string]: boolean }|null);

                    /** Test type */
                    type?: (whisk.api.user.v2.IWeek|null);

                    /** Test custom */
                    custom?: (whisk.api.user.v2.IWeek|null);
                }

                /** Represents a Test. */
                class Test implements ITest {

                    /**
                     * Constructs a new Test.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ITest);

                    /** Test id. */
                    public id: string;

                    /** Test text. */
                    public text: string;

                    /** Test currentWeek. */
                    public currentWeek?: (whisk.api.user.v2.IWeek|null);

                    /** Test nextWeek. */
                    public nextWeek?: (whisk.api.user.v2.IWeek|null);

                    /** Test time. */
                    public time?: (whisk.api.shared.v1.ITime|null);

                    /** Test timeAfter. */
                    public timeAfter?: (whisk.api.shared.v1.ITime|null);

                    /** Test description. */
                    public description?: (google.protobuf.IStringValue|null);

                    /** Test item. */
                    public item: string;

                    /** Test test. */
                    public test?: (google.protobuf.IStringValue|null);

                    /** Test array. */
                    public array: boolean[];

                    /** Test array_2. */
                    public array_2: boolean[];

                    /** Test mapSearch. */
                    public mapSearch: { [k: string]: boolean };

                    /** Test mapSearch_2. */
                    public mapSearch_2: { [k: string]: boolean };

                    /** Test type. */
                    public type?: (whisk.api.user.v2.IWeek|null);

                    /** Test custom. */
                    public custom?: (whisk.api.user.v2.IWeek|null);

                    /** Test deviceDescription. */
                    public deviceDescription?: ("type"|"custom");

                    /**
                     * Encodes the specified Test message. Does not implicitly {@link whisk.api.user.v2.Test.verify|verify} messages.
                     * @param message Test message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ITest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Test message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Test
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.Test;
                }

                /** Properties of a Day. */
                interface IDay {

                    /** Day num */
                    num?: (number|null);
                }

                /** Represents a Day. */
                class Day implements IDay {

                    /**
                     * Constructs a new Day.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IDay);

                    /** Day num. */
                    public num: number;

                    /**
                     * Encodes the specified Day message. Does not implicitly {@link whisk.api.user.v2.Day.verify|verify} messages.
                     * @param message Day message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IDay, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Day message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Day
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.Day;
                }

                /** Properties of a Week. */
                interface IWeek {

                    /** Week num */
                    num?: (number|null);

                    /** Week day */
                    day?: (whisk.api.user.v2.IDay|null);
                }

                /** Represents a Week. */
                class Week implements IWeek {

                    /**
                     * Constructs a new Week.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IWeek);

                    /** Week num. */
                    public num: number;

                    /** Week day. */
                    public day?: (whisk.api.user.v2.IDay|null);

                    /**
                     * Encodes the specified Week message. Does not implicitly {@link whisk.api.user.v2.Week.verify|verify} messages.
                     * @param message Week message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IWeek, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Week message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Week
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.Week;
                }

                /** Properties of a User. */
                interface IUser {

                    /** User id */
                    id?: (string|null);

                    /** User email */
                    email?: (string|null);

                    /** User phone */
                    phone?: (string|null);

                    /** User userSettings */
                    userSettings?: (whisk.api.user.v2.IUserSettings|null);

                    /** User hasPassword */
                    hasPassword?: (boolean|null);

                    /** User recommendations */
                    recommendations?: (whisk.api.user.v2.IRecommendations|null);

                    /** User mapHealthGoal */
                    mapHealthGoal?: ({ [k: string]: whisk.api.user.v2.HealthGoal }|null);

                    /** User mapIngredient */
                    mapIngredient?: ({ [k: string]: whisk.api.user.v2.IIngredient }|null);
                }

                /** Represents a User. */
                class User implements IUser {

                    /**
                     * Constructs a new User.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUser);

                    /** User id. */
                    public id: string;

                    /** User email. */
                    public email: string;

                    /** User phone. */
                    public phone: string;

                    /** User userSettings. */
                    public userSettings?: (whisk.api.user.v2.IUserSettings|null);

                    /** User hasPassword. */
                    public hasPassword: boolean;

                    /** User recommendations. */
                    public recommendations?: (whisk.api.user.v2.IRecommendations|null);

                    /** User mapHealthGoal. */
                    public mapHealthGoal: { [k: string]: whisk.api.user.v2.HealthGoal };

                    /** User mapIngredient. */
                    public mapIngredient: { [k: string]: whisk.api.user.v2.IIngredient };

                    /**
                     * Encodes the specified User message. Does not implicitly {@link whisk.api.user.v2.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.User;
                }

                /** Properties of a UserSettings. */
                interface IUserSettings {

                    /** UserSettings personalDetails */
                    personalDetails?: (whisk.api.user.v2.IPersonalDetails|null);

                    /** UserSettings foodPreferences */
                    foodPreferences?: (whisk.api.user.v2.IFoodPreferences|null);

                    /** UserSettings cookingPreferences */
                    cookingPreferences?: (whisk.api.user.v2.ICookingPreferences|null);

                    /** UserSettings shoppingPreferences */
                    shoppingPreferences?: (whisk.api.user.v2.IShoppingPreferences|null);
                }

                /** Represents a UserSettings. */
                class UserSettings implements IUserSettings {

                    /**
                     * Constructs a new UserSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUserSettings);

                    /** UserSettings personalDetails. */
                    public personalDetails?: (whisk.api.user.v2.IPersonalDetails|null);

                    /** UserSettings foodPreferences. */
                    public foodPreferences?: (whisk.api.user.v2.IFoodPreferences|null);

                    /** UserSettings cookingPreferences. */
                    public cookingPreferences?: (whisk.api.user.v2.ICookingPreferences|null);

                    /** UserSettings shoppingPreferences. */
                    public shoppingPreferences?: (whisk.api.user.v2.IShoppingPreferences|null);

                    /**
                     * Encodes the specified UserSettings message. Does not implicitly {@link whisk.api.user.v2.UserSettings.verify|verify} messages.
                     * @param message UserSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UserSettings;
                }

                /** Properties of a PersonalDetails. */
                interface IPersonalDetails {

                    /** PersonalDetails firstName */
                    firstName?: (string|null);

                    /** PersonalDetails lastName */
                    lastName?: (string|null);

                    /** PersonalDetails photoUrl */
                    photoUrl?: (string|null);

                    /** PersonalDetails gender */
                    gender?: (whisk.api.user.v2.Gender|null);

                    /** PersonalDetails country */
                    country?: (string|null);

                    /** PersonalDetails zipcode */
                    zipcode?: (string|null);

                    /** PersonalDetails language */
                    language?: (string|null);

                    /** PersonalDetails activityLevel */
                    activityLevel?: (whisk.api.user.v2.ActivityLevel|null);

                    /** PersonalDetails age */
                    age?: (number|null);

                    /** PersonalDetails height */
                    height?: (whisk.api.user.v2.IHeight|null);

                    /** PersonalDetails weight */
                    weight?: (whisk.api.user.v2.IWeight|null);

                    /** PersonalDetails healthGoals */
                    healthGoals?: (whisk.api.user.v2.PersonalDetails.IHealthGoals|null);

                    /** PersonalDetails yearOfBirth */
                    yearOfBirth?: (number|null);
                }

                /** Represents a PersonalDetails. */
                class PersonalDetails implements IPersonalDetails {

                    /**
                     * Constructs a new PersonalDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IPersonalDetails);

                    /** PersonalDetails firstName. */
                    public firstName: string;

                    /** PersonalDetails lastName. */
                    public lastName: string;

                    /** PersonalDetails photoUrl. */
                    public photoUrl: string;

                    /** PersonalDetails gender. */
                    public gender: whisk.api.user.v2.Gender;

                    /** PersonalDetails country. */
                    public country: string;

                    /** PersonalDetails zipcode. */
                    public zipcode: string;

                    /** PersonalDetails language. */
                    public language: string;

                    /** PersonalDetails activityLevel. */
                    public activityLevel: whisk.api.user.v2.ActivityLevel;

                    /** PersonalDetails age. */
                    public age: number;

                    /** PersonalDetails height. */
                    public height?: (whisk.api.user.v2.IHeight|null);

                    /** PersonalDetails weight. */
                    public weight?: (whisk.api.user.v2.IWeight|null);

                    /** PersonalDetails healthGoals. */
                    public healthGoals?: (whisk.api.user.v2.PersonalDetails.IHealthGoals|null);

                    /** PersonalDetails yearOfBirth. */
                    public yearOfBirth: number;

                    /**
                     * Encodes the specified PersonalDetails message. Does not implicitly {@link whisk.api.user.v2.PersonalDetails.verify|verify} messages.
                     * @param message PersonalDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IPersonalDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PersonalDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PersonalDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.PersonalDetails;
                }

                namespace PersonalDetails {

                    /** Properties of a HealthGoals. */
                    interface IHealthGoals {

                        /** HealthGoals list */
                        list?: (whisk.api.user.v2.HealthGoal[]|null);
                    }

                    /** Represents a HealthGoals. */
                    class HealthGoals implements IHealthGoals {

                        /**
                         * Constructs a new HealthGoals.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.PersonalDetails.IHealthGoals);

                        /** HealthGoals list. */
                        public list: whisk.api.user.v2.HealthGoal[];

                        /**
                         * Encodes the specified HealthGoals message. Does not implicitly {@link whisk.api.user.v2.PersonalDetails.HealthGoals.verify|verify} messages.
                         * @param message HealthGoals message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.PersonalDetails.IHealthGoals, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HealthGoals message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HealthGoals
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.PersonalDetails.HealthGoals;
                    }
                }

                /** HealthGoal enum. */
                enum HealthGoal {
                    HEALTH_GOAL_INVALID = 0,
                    HEALTH_GOAL_WEIGHT_LOSS = 1,
                    HEALTH_GOAL_WEIGHT_GAIN = 2,
                    HEALTH_GOAL_BETTER_SLEEP = 3,
                    HEALTH_GOAL_INCREASE_ENERGY = 4
                }

                /** Properties of an Height. */
                interface IHeight {

                    /** Height value */
                    value?: (number|null);

                    /** Height unit */
                    unit?: (whisk.api.user.v2.Height.Unit|null);
                }

                /** Represents an Height. */
                class Height implements IHeight {

                    /**
                     * Constructs a new Height.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IHeight);

                    /** Height value. */
                    public value: number;

                    /** Height unit. */
                    public unit: whisk.api.user.v2.Height.Unit;

                    /**
                     * Encodes the specified Height message. Does not implicitly {@link whisk.api.user.v2.Height.verify|verify} messages.
                     * @param message Height message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IHeight, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Height message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Height
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.Height;
                }

                namespace Height {

                    /** Unit enum. */
                    enum Unit {
                        UNIT_INVALID = 0,
                        UNIT_CM = 1,
                        UNIT_INCH = 2
                    }
                }

                /** Properties of a Weight. */
                interface IWeight {

                    /** Weight value */
                    value?: (number|null);

                    /** Weight unit */
                    unit?: (whisk.api.user.v2.Weight.Unit|null);
                }

                /** Represents a Weight. */
                class Weight implements IWeight {

                    /**
                     * Constructs a new Weight.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IWeight);

                    /** Weight value. */
                    public value: number;

                    /** Weight unit. */
                    public unit: whisk.api.user.v2.Weight.Unit;

                    /**
                     * Encodes the specified Weight message. Does not implicitly {@link whisk.api.user.v2.Weight.verify|verify} messages.
                     * @param message Weight message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Weight message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Weight
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.Weight;
                }

                namespace Weight {

                    /** Unit enum. */
                    enum Unit {
                        UNIT_INVALID = 0,
                        UNIT_KG = 1,
                        UNIT_POUND = 2
                    }
                }

                /** Properties of a FoodPreferences. */
                interface IFoodPreferences {

                    /** FoodPreferences diets */
                    diets?: (string|null);

                    /** FoodPreferences avoidanceList */
                    avoidanceList?: (string[]|null);

                    /** FoodPreferences dislikedIngredients */
                    dislikedIngredients?: (whisk.api.user.v2.FoodPreferences.IIngredients|null);

                    /** FoodPreferences organicPreference */
                    organicPreference?: (whisk.api.user.v2.OrganicPreference|null);

                    /** FoodPreferences nutritionPreferences */
                    nutritionPreferences?: (number[]|null);

                    /** FoodPreferences preferredIngredients */
                    preferredIngredients?: (whisk.api.user.v2.FoodPreferences.IIngredients|null);
                }

                /** Represents a FoodPreferences. */
                class FoodPreferences implements IFoodPreferences {

                    /**
                     * Constructs a new FoodPreferences.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IFoodPreferences);

                    /** FoodPreferences diets. */
                    public diets: string;

                    /** FoodPreferences avoidanceList. */
                    public avoidanceList: string[];

                    /** FoodPreferences dislikedIngredients. */
                    public dislikedIngredients?: (whisk.api.user.v2.FoodPreferences.IIngredients|null);

                    /** FoodPreferences organicPreference. */
                    public organicPreference: whisk.api.user.v2.OrganicPreference;

                    /** FoodPreferences nutritionPreferences. */
                    public nutritionPreferences: number[];

                    /** FoodPreferences preferredIngredients. */
                    public preferredIngredients?: (whisk.api.user.v2.FoodPreferences.IIngredients|null);

                    /**
                     * Encodes the specified FoodPreferences message. Does not implicitly {@link whisk.api.user.v2.FoodPreferences.verify|verify} messages.
                     * @param message FoodPreferences message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IFoodPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FoodPreferences message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FoodPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.FoodPreferences;
                }

                namespace FoodPreferences {

                    /** Properties of a Dates. */
                    interface IDates {

                        /** Dates list */
                        list?: (whisk.api.shared.v1.IDate[]|null);
                    }

                    /** Represents a Dates. */
                    class Dates implements IDates {

                        /**
                         * Constructs a new Dates.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.FoodPreferences.IDates);

                        /** Dates list. */
                        public list: whisk.api.shared.v1.IDate[];

                        /**
                         * Encodes the specified Dates message. Does not implicitly {@link whisk.api.user.v2.FoodPreferences.Dates.verify|verify} messages.
                         * @param message Dates message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.FoodPreferences.IDates, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Dates message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Dates
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.FoodPreferences.Dates;
                    }

                    /** Properties of an Ingredients. */
                    interface IIngredients {

                        /** Ingredients list */
                        list?: (whisk.api.user.v2.IIngredient[]|null);
                    }

                    /** Represents an Ingredients. */
                    class Ingredients implements IIngredients {

                        /**
                         * Constructs a new Ingredients.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.FoodPreferences.IIngredients);

                        /** Ingredients list. */
                        public list: whisk.api.user.v2.IIngredient[];

                        /**
                         * Encodes the specified Ingredients message. Does not implicitly {@link whisk.api.user.v2.FoodPreferences.Ingredients.verify|verify} messages.
                         * @param message Ingredients message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.FoodPreferences.IIngredients, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Ingredients message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Ingredients
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.FoodPreferences.Ingredients;
                    }
                }

                /** Properties of a CookingPreferences. */
                interface ICookingPreferences {

                    /** CookingPreferences householdAdults */
                    householdAdults?: (whisk.api.user.v2.CookingPreferences.IHouseholdMembers|null);

                    /** CookingPreferences householdChildren */
                    householdChildren?: (whisk.api.user.v2.CookingPreferences.IHouseholdMembers|null);

                    /** CookingPreferences cookingExperience */
                    cookingExperience?: (whisk.api.user.v2.CookingExperience|null);

                    /** CookingPreferences cookingMaxTime */
                    cookingMaxTime?: (whisk.api.user.v2.CookingPreferences.ICookingMaxTime|null);

                    /** CookingPreferences userDevices */
                    userDevices?: (whisk.api.user.v2.CookingPreferences.IDevices|null);
                }

                /** Represents a CookingPreferences. */
                class CookingPreferences implements ICookingPreferences {

                    /**
                     * Constructs a new CookingPreferences.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ICookingPreferences);

                    /** CookingPreferences householdAdults. */
                    public householdAdults?: (whisk.api.user.v2.CookingPreferences.IHouseholdMembers|null);

                    /** CookingPreferences householdChildren. */
                    public householdChildren?: (whisk.api.user.v2.CookingPreferences.IHouseholdMembers|null);

                    /** CookingPreferences cookingExperience. */
                    public cookingExperience: whisk.api.user.v2.CookingExperience;

                    /** CookingPreferences cookingMaxTime. */
                    public cookingMaxTime?: (whisk.api.user.v2.CookingPreferences.ICookingMaxTime|null);

                    /** CookingPreferences userDevices. */
                    public userDevices?: (whisk.api.user.v2.CookingPreferences.IDevices|null);

                    /**
                     * Encodes the specified CookingPreferences message. Does not implicitly {@link whisk.api.user.v2.CookingPreferences.verify|verify} messages.
                     * @param message CookingPreferences message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ICookingPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CookingPreferences message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CookingPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.CookingPreferences;
                }

                namespace CookingPreferences {

                    /** Properties of an HouseholdMembers. */
                    interface IHouseholdMembers {

                        /** HouseholdMembers size */
                        size?: (number|null);
                    }

                    /** Represents an HouseholdMembers. */
                    class HouseholdMembers implements IHouseholdMembers {

                        /**
                         * Constructs a new HouseholdMembers.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.CookingPreferences.IHouseholdMembers);

                        /** HouseholdMembers size. */
                        public size: number;

                        /**
                         * Encodes the specified HouseholdMembers message. Does not implicitly {@link whisk.api.user.v2.CookingPreferences.HouseholdMembers.verify|verify} messages.
                         * @param message HouseholdMembers message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.CookingPreferences.IHouseholdMembers, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an HouseholdMembers message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HouseholdMembers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.CookingPreferences.HouseholdMembers;
                    }

                    /** Properties of a CookingMaxTime. */
                    interface ICookingMaxTime {

                        /** CookingMaxTime time */
                        time?: (number|null);
                    }

                    /** Represents a CookingMaxTime. */
                    class CookingMaxTime implements ICookingMaxTime {

                        /**
                         * Constructs a new CookingMaxTime.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.CookingPreferences.ICookingMaxTime);

                        /** CookingMaxTime time. */
                        public time: number;

                        /**
                         * Encodes the specified CookingMaxTime message. Does not implicitly {@link whisk.api.user.v2.CookingPreferences.CookingMaxTime.verify|verify} messages.
                         * @param message CookingMaxTime message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.CookingPreferences.ICookingMaxTime, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CookingMaxTime message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CookingMaxTime
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.CookingPreferences.CookingMaxTime;
                    }

                    /** Properties of a Devices. */
                    interface IDevices {

                        /** Devices list */
                        list?: (whisk.api.user.v2.IDevice|null);
                    }

                    /** Represents a Devices. */
                    class Devices implements IDevices {

                        /**
                         * Constructs a new Devices.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.CookingPreferences.IDevices);

                        /** Devices list. */
                        public list?: (whisk.api.user.v2.IDevice|null);

                        /**
                         * Encodes the specified Devices message. Does not implicitly {@link whisk.api.user.v2.CookingPreferences.Devices.verify|verify} messages.
                         * @param message Devices message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.CookingPreferences.IDevices, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Devices message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Devices
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.CookingPreferences.Devices;
                    }
                }

                /** Properties of a Device. */
                interface IDevice {

                    /** Device deviceType */
                    deviceType?: (whisk.api.user.v2.Device.DeviceType|null);

                    /** Device customDevice */
                    customDevice?: (whisk.api.user.v2.Device.DeviceType|null);
                }

                /** Represents a Device. */
                class Device implements IDevice {

                    /**
                     * Constructs a new Device.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IDevice);

                    /** Device deviceType. */
                    public deviceType: whisk.api.user.v2.Device.DeviceType;

                    /** Device customDevice. */
                    public customDevice: whisk.api.user.v2.Device.DeviceType;

                    /** Device oneof. */
                    public oneof?: ("deviceType"|"customDevice");

                    /**
                     * Encodes the specified Device message. Does not implicitly {@link whisk.api.user.v2.Device.verify|verify} messages.
                     * @param message Device message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Device message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.Device;
                }

                namespace Device {

                    /** DeviceType enum. */
                    enum DeviceType {
                        DEVICE_TYPE_INVALID = 0,
                        DEVICE_TYPE_STOVE = 1,
                        DEVICE_TYPE_OVEN = 2,
                        DEVICE_TYPE_AIR_FRYER = 3,
                        DEVICE_TYPE_FOOD_PROCESSOR = 4,
                        DEVICE_TYPE_SOUS_VIDE = 5,
                        DEVICE_TYPE_PRESSURE_COOKER = 6,
                        DEVICE_TYPE_SLOW_COOKER = 7,
                        DEVICE_TYPE_BLENDER = 8,
                        DEVICE_TYPE_SHAKER = 9,
                        DEVICE_TYPE_MICROWAVE = 10,
                        DEVICE_TYPE_DEEP_FRYER = 11,
                        DEVICE_TYPE_GRILL = 12,
                        DEVICE_TYPE_MIXER = 13
                    }
                }

                /** Properties of a ShoppingPreferences. */
                interface IShoppingPreferences {

                    /** ShoppingPreferences preferredRetailers */
                    preferredRetailers?: (whisk.api.user.v2.ShoppingPreferences.IPreferredRetailers|null);

                    /** ShoppingPreferences budgetGoal */
                    budgetGoal?: (whisk.api.user.v2.BudgetGoal|null);

                    /** ShoppingPreferences ethicalPreferences */
                    ethicalPreferences?: (whisk.api.user.v2.ShoppingPreferences.IEthicalPreferences|null);
                }

                /** Represents a ShoppingPreferences. */
                class ShoppingPreferences implements IShoppingPreferences {

                    /**
                     * Constructs a new ShoppingPreferences.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IShoppingPreferences);

                    /** ShoppingPreferences preferredRetailers. */
                    public preferredRetailers?: (whisk.api.user.v2.ShoppingPreferences.IPreferredRetailers|null);

                    /** ShoppingPreferences budgetGoal. */
                    public budgetGoal: whisk.api.user.v2.BudgetGoal;

                    /** ShoppingPreferences ethicalPreferences. */
                    public ethicalPreferences?: (whisk.api.user.v2.ShoppingPreferences.IEthicalPreferences|null);

                    /**
                     * Encodes the specified ShoppingPreferences message. Does not implicitly {@link whisk.api.user.v2.ShoppingPreferences.verify|verify} messages.
                     * @param message ShoppingPreferences message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IShoppingPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShoppingPreferences message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShoppingPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.ShoppingPreferences;
                }

                namespace ShoppingPreferences {

                    /** Properties of a PreferredRetailers. */
                    interface IPreferredRetailers {

                        /** PreferredRetailers retailers */
                        retailers?: (string[]|null);
                    }

                    /** Represents a PreferredRetailers. */
                    class PreferredRetailers implements IPreferredRetailers {

                        /**
                         * Constructs a new PreferredRetailers.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.ShoppingPreferences.IPreferredRetailers);

                        /** PreferredRetailers retailers. */
                        public retailers: string[];

                        /**
                         * Encodes the specified PreferredRetailers message. Does not implicitly {@link whisk.api.user.v2.ShoppingPreferences.PreferredRetailers.verify|verify} messages.
                         * @param message PreferredRetailers message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.ShoppingPreferences.IPreferredRetailers, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PreferredRetailers message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PreferredRetailers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.ShoppingPreferences.PreferredRetailers;
                    }

                    /** Properties of an EthicalPreferences. */
                    interface IEthicalPreferences {

                        /** EthicalPreferences list */
                        list?: (whisk.api.user.v2.EthicalPreference[]|null);
                    }

                    /** Represents an EthicalPreferences. */
                    class EthicalPreferences implements IEthicalPreferences {

                        /**
                         * Constructs a new EthicalPreferences.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.ShoppingPreferences.IEthicalPreferences);

                        /** EthicalPreferences list. */
                        public list: whisk.api.user.v2.EthicalPreference[];

                        /**
                         * Encodes the specified EthicalPreferences message. Does not implicitly {@link whisk.api.user.v2.ShoppingPreferences.EthicalPreferences.verify|verify} messages.
                         * @param message EthicalPreferences message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.ShoppingPreferences.IEthicalPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EthicalPreferences message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EthicalPreferences
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.ShoppingPreferences.EthicalPreferences;
                    }
                }

                /** ActivityLevel enum. */
                enum ActivityLevel {
                    ACTIVITY_LEVEL_INVALID = 0,
                    ACTIVITY_LEVEL_VERY_LIGHT = 1,
                    ACTIVITY_LEVEL_LIGHT = 2,
                    ACTIVITY_LEVEL_MODERATE = 3,
                    ACTIVITY_LEVEL_ACTIVE = 4,
                    ACTIVITY_LEVEL_VERY_ACTIVE = 5
                }

                /** Gender enum. */
                enum Gender {
                    GENDER_UNSPECIFIED = 0,
                    GENDER_MALE = 1,
                    GENDER_FEMALE = 2,
                    GENDER_NON_BINARY = 3,
                    GENDER_UNDISCLOSED = 4
                }

                /** Properties of an Ingredient. */
                interface IIngredient {

                    /** Ingredient name */
                    name?: (string|null);

                    /** Ingredient canonicalName */
                    canonicalName?: (string|null);
                }

                /** Represents an Ingredient. */
                class Ingredient implements IIngredient {

                    /**
                     * Constructs a new Ingredient.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IIngredient);

                    /** Ingredient name. */
                    public name: string;

                    /** Ingredient canonicalName. */
                    public canonicalName: string;

                    /**
                     * Encodes the specified Ingredient message. Does not implicitly {@link whisk.api.user.v2.Ingredient.verify|verify} messages.
                     * @param message Ingredient message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IIngredient, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Ingredient message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Ingredient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.Ingredient;
                }

                /** OrganicPreference enum. */
                enum OrganicPreference {
                    ORGANIC_PREFERENCE_INVALID = 0,
                    ORGANIC_PREFERENCE_ORGANIC = 1,
                    ORGANIC_PREFERENCE_DONT_CARE = 2
                }

                /** CookingExperience enum. */
                enum CookingExperience {
                    COOKING_EXPERIENCE_INVALID = 0,
                    COOKING_EXPERIENCE_BEGINNER = 1,
                    COOKING_EXPERIENCE_INTERMEDIATE = 2,
                    COOKING_EXPERIENCE_ADVANCED = 3
                }

                /** BudgetGoal enum. */
                enum BudgetGoal {
                    BUDGET_GOAL_INVALID = 0,
                    BUDGET_GOAL_BUDGET_FRIENDLY = 1,
                    BUDGET_GOAL_AVERAGE_PRICE = 2,
                    BUDGET_GOAL_PREMIUM = 3
                }

                /** EthicalPreference enum. */
                enum EthicalPreference {
                    ETHICAL_PREFERENCE_INVALID = 0,
                    ETHICAL_PREFERENCE_ETHICAL_FISHED = 1,
                    ETHICAL_PREFERENCE_GM_FREE = 2,
                    ETHICAL_PREFERENCE_BUYING_LOCALLY = 3,
                    ETHICAL_PREFERENCE_FAIR_TRADE = 4,
                    ETHICAL_PREFERENCE_ENVIRONMENTAL_EFFECT = 5,
                    ETHICAL_PREFERENCE_LOW_WASTE_PRODUCTS = 6
                }

                /** Properties of a Recommendations. */
                interface IRecommendations {

                    /** Recommendations dailyCalories */
                    dailyCalories?: (number|null);
                }

                /** Represents a Recommendations. */
                class Recommendations implements IRecommendations {

                    /**
                     * Constructs a new Recommendations.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IRecommendations);

                    /** Recommendations dailyCalories. */
                    public dailyCalories: number;

                    /**
                     * Encodes the specified Recommendations message. Does not implicitly {@link whisk.api.user.v2.Recommendations.verify|verify} messages.
                     * @param message Recommendations message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IRecommendations, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Recommendations message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Recommendations
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.Recommendations;
                }

                /** Properties of a TestItem. */
                interface ITestItem {

                    /** TestItem id */
                    id?: (string|null);

                    /** TestItem name */
                    name?: (string|null);

                    /** TestItem surname */
                    surname?: (string|null);

                    /** TestItem description */
                    description?: (google.protobuf.IStringValue|null);

                    /** TestItem test */
                    test?: (google.protobuf.IStringValue|null);

                    /** TestItem array */
                    array?: (google.protobuf.IStringValue[]|null);

                    /** TestItem story */
                    story?: (string|null);

                    /** TestItem time */
                    time?: (whisk.api.shared.v1.ITime|null);

                    /** TestItem date */
                    date?: (whisk.api.shared.v1.IDate|null);

                    /** TestItem searches */
                    searches?: (whisk.api.user.v2.ISearchRecipesResponse[]|null);

                    /** TestItem mapSearch */
                    mapSearch?: ({ [k: string]: whisk.api.user.v2.ISearchRecipesResponse }|null);

                    /** TestItem search */
                    search?: (whisk.api.user.v2.ISearchRecipesResponse|null);

                    /** TestItem extraInformation */
                    extraInformation?: ({ [k: string]: string }|null);
                }

                /** Represents a TestItem. */
                class TestItem implements ITestItem {

                    /**
                     * Constructs a new TestItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ITestItem);

                    /** TestItem id. */
                    public id: string;

                    /** TestItem name. */
                    public name: string;

                    /** TestItem surname. */
                    public surname: string;

                    /** TestItem description. */
                    public description?: (google.protobuf.IStringValue|null);

                    /** TestItem test. */
                    public test?: (google.protobuf.IStringValue|null);

                    /** TestItem array. */
                    public array: google.protobuf.IStringValue[];

                    /** TestItem story. */
                    public story: string;

                    /** TestItem time. */
                    public time?: (whisk.api.shared.v1.ITime|null);

                    /** TestItem date. */
                    public date?: (whisk.api.shared.v1.IDate|null);

                    /** TestItem searches. */
                    public searches: whisk.api.user.v2.ISearchRecipesResponse[];

                    /** TestItem mapSearch. */
                    public mapSearch: { [k: string]: whisk.api.user.v2.ISearchRecipesResponse };

                    /** TestItem search. */
                    public search?: (whisk.api.user.v2.ISearchRecipesResponse|null);

                    /** TestItem extraInformation. */
                    public extraInformation: { [k: string]: string };

                    /**
                     * Encodes the specified TestItem message. Does not implicitly {@link whisk.api.user.v2.TestItem.verify|verify} messages.
                     * @param message TestItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ITestItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TestItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TestItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.TestItem;
                }

                /** Properties of a TestOneof. */
                interface ITestOneof {

                    /** TestOneof id */
                    id?: (string|null);

                    /** TestOneof deviceType */
                    deviceType?: (whisk.api.user.v2.EthicalPreference|null);

                    /** TestOneof customDevice */
                    customDevice?: (string|null);
                }

                /** Represents a TestOneof. */
                class TestOneof implements ITestOneof {

                    /**
                     * Constructs a new TestOneof.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ITestOneof);

                    /** TestOneof id. */
                    public id: string;

                    /** TestOneof deviceType. */
                    public deviceType: whisk.api.user.v2.EthicalPreference;

                    /** TestOneof customDevice. */
                    public customDevice: string;

                    /** TestOneof device. */
                    public device?: ("deviceType"|"customDevice");

                    /**
                     * Encodes the specified TestOneof message. Does not implicitly {@link whisk.api.user.v2.TestOneof.verify|verify} messages.
                     * @param message TestOneof message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ITestOneof, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TestOneof message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TestOneof
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.TestOneof;
                }

                /** Properties of a TestEmpty. */
                interface ITestEmpty {

                    /** TestEmpty id */
                    id?: (string|null);

                    /** TestEmpty global */
                    global?: (whisk.api.user.v2.TestEmpty.IGlobalRegion|null);

                    /** TestEmpty any */
                    any?: (whisk.api.user.v2.TestEmpty.IGlobalRegion|null);

                    /** TestEmpty local */
                    local?: (string|null);
                }

                /** Represents a TestEmpty. */
                class TestEmpty implements ITestEmpty {

                    /**
                     * Constructs a new TestEmpty.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ITestEmpty);

                    /** TestEmpty id. */
                    public id: string;

                    /** TestEmpty global. */
                    public global?: (whisk.api.user.v2.TestEmpty.IGlobalRegion|null);

                    /** TestEmpty any. */
                    public any?: (whisk.api.user.v2.TestEmpty.IGlobalRegion|null);

                    /** TestEmpty local. */
                    public local: string;

                    /** TestEmpty itemNameLong. */
                    public itemNameLong?: ("global"|"any"|"local");

                    /**
                     * Encodes the specified TestEmpty message. Does not implicitly {@link whisk.api.user.v2.TestEmpty.verify|verify} messages.
                     * @param message TestEmpty message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ITestEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TestEmpty message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TestEmpty
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.TestEmpty;
                }

                namespace TestEmpty {

                    /** Properties of a GlobalRegion. */
                    interface IGlobalRegion {
                    }

                    /** Represents a GlobalRegion. */
                    class GlobalRegion implements IGlobalRegion {

                        /**
                         * Constructs a new GlobalRegion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.TestEmpty.IGlobalRegion);

                        /**
                         * Encodes the specified GlobalRegion message. Does not implicitly {@link whisk.api.user.v2.TestEmpty.GlobalRegion.verify|verify} messages.
                         * @param message GlobalRegion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.TestEmpty.IGlobalRegion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GlobalRegion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GlobalRegion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.TestEmpty.GlobalRegion;
                    }
                }

                /** Properties of a MatchedIngredient. */
                interface IMatchedIngredient {

                    /** MatchedIngredient name */
                    name?: (string|null);
                }

                /** Represents a MatchedIngredient. */
                class MatchedIngredient implements IMatchedIngredient {

                    /**
                     * Constructs a new MatchedIngredient.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IMatchedIngredient);

                    /** MatchedIngredient name. */
                    public name: string;

                    /**
                     * Encodes the specified MatchedIngredient message. Does not implicitly {@link whisk.api.user.v2.MatchedIngredient.verify|verify} messages.
                     * @param message MatchedIngredient message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IMatchedIngredient, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MatchedIngredient message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MatchedIngredient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.MatchedIngredient;
                }

                namespace MatchedIngredient {

                    /** Properties of a Calories. */
                    interface ICalories {

                        /** Calories dailyCalories */
                        dailyCalories?: (number|null);
                    }

                    /** Represents a Calories. */
                    class Calories implements ICalories {

                        /**
                         * Constructs a new Calories.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.MatchedIngredient.ICalories);

                        /** Calories dailyCalories. */
                        public dailyCalories: number;

                        /**
                         * Encodes the specified Calories message. Does not implicitly {@link whisk.api.user.v2.MatchedIngredient.Calories.verify|verify} messages.
                         * @param message Calories message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.MatchedIngredient.ICalories, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Calories message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Calories
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.MatchedIngredient.Calories;
                    }
                }

                /** Properties of a SearchRecipesResponse. */
                interface ISearchRecipesResponse {

                    /** SearchRecipesResponse hit */
                    hit?: (whisk.api.user.v2.SearchRecipesResponse.IHit[]|null);

                    /** SearchRecipesResponse date */
                    date?: (whisk.api.shared.v1.IDate|null);

                    /** SearchRecipesResponse dates */
                    dates?: (whisk.api.shared.v1.IDate[]|null);

                    /** SearchRecipesResponse empty */
                    empty?: (whisk.api.user.v2.SearchRecipesResponse.IEmpty|null);

                    /** SearchRecipesResponse items */
                    items?: (whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations[]|null);

                    /** SearchRecipesResponse calories */
                    calories?: (whisk.api.user.v2.MatchedIngredient.ICalories|null);

                    /** SearchRecipesResponse size */
                    size?: (whisk.api.user.v2.Height.Unit|null);

                    /** SearchRecipesResponse size2 */
                    size2?: (whisk.api.user.v2.SearchRecipesResponse.Height.Unit2|null);
                }

                /** Represents a SearchRecipesResponse. */
                class SearchRecipesResponse implements ISearchRecipesResponse {

                    /**
                     * Constructs a new SearchRecipesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ISearchRecipesResponse);

                    /** SearchRecipesResponse hit. */
                    public hit: whisk.api.user.v2.SearchRecipesResponse.IHit[];

                    /** SearchRecipesResponse date. */
                    public date?: (whisk.api.shared.v1.IDate|null);

                    /** SearchRecipesResponse dates. */
                    public dates: whisk.api.shared.v1.IDate[];

                    /** SearchRecipesResponse empty. */
                    public empty?: (whisk.api.user.v2.SearchRecipesResponse.IEmpty|null);

                    /** SearchRecipesResponse items. */
                    public items: whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations[];

                    /** SearchRecipesResponse calories. */
                    public calories?: (whisk.api.user.v2.MatchedIngredient.ICalories|null);

                    /** SearchRecipesResponse size. */
                    public size: whisk.api.user.v2.Height.Unit;

                    /** SearchRecipesResponse size2. */
                    public size2: whisk.api.user.v2.SearchRecipesResponse.Height.Unit2;

                    /**
                     * Encodes the specified SearchRecipesResponse message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.verify|verify} messages.
                     * @param message SearchRecipesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ISearchRecipesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchRecipesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchRecipesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.SearchRecipesResponse;
                }

                namespace SearchRecipesResponse {

                    /** Properties of a MatchedIngredient. */
                    interface IMatchedIngredient {

                        /** MatchedIngredient name */
                        name?: (string|null);
                    }

                    /** Represents a MatchedIngredient. */
                    class MatchedIngredient implements IMatchedIngredient {

                        /**
                         * Constructs a new MatchedIngredient.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient);

                        /** MatchedIngredient name. */
                        public name: string;

                        /**
                         * Encodes the specified MatchedIngredient message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.verify|verify} messages.
                         * @param message MatchedIngredient message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MatchedIngredient message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MatchedIngredient
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient;
                    }

                    namespace MatchedIngredient {

                        /** Properties of a Recommendations. */
                        interface IRecommendations {

                            /** Recommendations dailyCalories */
                            dailyCalories?: (number|null);
                        }

                        /** Represents a Recommendations. */
                        class Recommendations implements IRecommendations {

                            /**
                             * Constructs a new Recommendations.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations);

                            /** Recommendations dailyCalories. */
                            public dailyCalories: number;

                            /**
                             * Encodes the specified Recommendations message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations.verify|verify} messages.
                             * @param message Recommendations message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Recommendations message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Recommendations
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.Recommendations;
                        }
                    }

                    /** Properties of an Empty. */
                    interface IEmpty {
                    }

                    /** Represents an Empty. */
                    class Empty implements IEmpty {

                        /**
                         * Constructs a new Empty.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.SearchRecipesResponse.IEmpty);

                        /**
                         * Encodes the specified Empty message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.Empty.verify|verify} messages.
                         * @param message Empty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.SearchRecipesResponse.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Empty message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Empty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.SearchRecipesResponse.Empty;
                    }

                    /** Properties of a Hit. */
                    interface IHit {

                        /** Hit content */
                        content?: (whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient|null);

                        /** Hit ingredients */
                        ingredients?: (whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient[]|null);

                        /** Hit mapIngredients */
                        mapIngredients?: ({ [k: string]: whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations }|null);

                        /** Hit mapCalories */
                        mapCalories?: ({ [k: string]: whisk.api.user.v2.MatchedIngredient.ICalories }|null);

                        /** Hit mapExternal */
                        mapExternal?: ({ [k: string]: whisk.api.user.v2.ITestItem }|null);
                    }

                    /** Represents a Hit. */
                    class Hit implements IHit {

                        /**
                         * Constructs a new Hit.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.SearchRecipesResponse.IHit);

                        /** Hit content. */
                        public content?: (whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient|null);

                        /** Hit ingredients. */
                        public ingredients: whisk.api.user.v2.SearchRecipesResponse.IMatchedIngredient[];

                        /** Hit mapIngredients. */
                        public mapIngredients: { [k: string]: whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations };

                        /** Hit mapCalories. */
                        public mapCalories: { [k: string]: whisk.api.user.v2.MatchedIngredient.ICalories };

                        /** Hit mapExternal. */
                        public mapExternal: { [k: string]: whisk.api.user.v2.ITestItem };

                        /**
                         * Encodes the specified Hit message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.Hit.verify|verify} messages.
                         * @param message Hit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.SearchRecipesResponse.IHit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Hit message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Hit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.SearchRecipesResponse.Hit;
                    }

                    /** Properties of an Height. */
                    interface IHeight {
                    }

                    /** Represents an Height. */
                    class Height implements IHeight {

                        /**
                         * Constructs a new Height.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.SearchRecipesResponse.IHeight);

                        /**
                         * Encodes the specified Height message. Does not implicitly {@link whisk.api.user.v2.SearchRecipesResponse.Height.verify|verify} messages.
                         * @param message Height message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.SearchRecipesResponse.IHeight, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Height message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Height
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.SearchRecipesResponse.Height;
                    }

                    namespace Height {

                        /** Unit2 enum. */
                        enum Unit2 {
                            UNIT_INVALID = 0,
                            UNIT_CM = 1
                        }
                    }
                }

                /** Properties of a DeepCheck. */
                interface IDeepCheck {

                    /** DeepCheck items */
                    items?: (whisk.api.user.v2.SearchRecipesResponse.IHit[]|null);

                    /** DeepCheck recommendations */
                    recommendations?: (whisk.api.user.v2.MatchedIngredient.ICalories[]|null);

                    /** DeepCheck ingredients */
                    ingredients?: (whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations|null);

                    /** DeepCheck size */
                    size?: (whisk.api.user.v2.Height.Unit|null);
                }

                /** Represents a DeepCheck. */
                class DeepCheck implements IDeepCheck {

                    /**
                     * Constructs a new DeepCheck.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IDeepCheck);

                    /** DeepCheck items. */
                    public items: whisk.api.user.v2.SearchRecipesResponse.IHit[];

                    /** DeepCheck recommendations. */
                    public recommendations: whisk.api.user.v2.MatchedIngredient.ICalories[];

                    /** DeepCheck ingredients. */
                    public ingredients?: (whisk.api.user.v2.SearchRecipesResponse.MatchedIngredient.IRecommendations|null);

                    /** DeepCheck size. */
                    public size: whisk.api.user.v2.Height.Unit;

                    /**
                     * Encodes the specified DeepCheck message. Does not implicitly {@link whisk.api.user.v2.DeepCheck.verify|verify} messages.
                     * @param message DeepCheck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IDeepCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeepCheck message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeepCheck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.DeepCheck;
                }

                /** Properties of an ApiUpdateBusinessApp. */
                interface IApiUpdateBusinessApp {

                    /** ApiUpdateBusinessApp id */
                    id?: (string|null);

                    /** ApiUpdateBusinessApp appAny */
                    appAny?: (whisk.api.user.v2.ITestItem|null);

                    /** ApiUpdateBusinessApp maskAnyName */
                    maskAnyName?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an ApiUpdateBusinessApp. */
                class ApiUpdateBusinessApp implements IApiUpdateBusinessApp {

                    /**
                     * Constructs a new ApiUpdateBusinessApp.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IApiUpdateBusinessApp);

                    /** ApiUpdateBusinessApp id. */
                    public id: string;

                    /** ApiUpdateBusinessApp appAny. */
                    public appAny?: (whisk.api.user.v2.ITestItem|null);

                    /** ApiUpdateBusinessApp maskAnyName. */
                    public maskAnyName?: (google.protobuf.IFieldMask|null);

                    /**
                     * Encodes the specified ApiUpdateBusinessApp message. Does not implicitly {@link whisk.api.user.v2.ApiUpdateBusinessApp.verify|verify} messages.
                     * @param message ApiUpdateBusinessApp message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IApiUpdateBusinessApp, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApiUpdateBusinessApp message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApiUpdateBusinessApp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.ApiUpdateBusinessApp;
                }

                /** Properties of a CookingIntentAttribute. */
                interface ICookingIntentAttribute {

                    /** CookingIntentAttribute intValue */
                    intValue?: (whisk.api.user.v2.CookingIntentAttribute.IIntAttributeValue|null);
                }

                /** Represents a CookingIntentAttribute. */
                class CookingIntentAttribute implements ICookingIntentAttribute {

                    /**
                     * Constructs a new CookingIntentAttribute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ICookingIntentAttribute);

                    /** CookingIntentAttribute intValue. */
                    public intValue?: (whisk.api.user.v2.CookingIntentAttribute.IIntAttributeValue|null);

                    /** CookingIntentAttribute value. */
                    public value?: "intValue";

                    /**
                     * Encodes the specified CookingIntentAttribute message. Does not implicitly {@link whisk.api.user.v2.CookingIntentAttribute.verify|verify} messages.
                     * @param message CookingIntentAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ICookingIntentAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CookingIntentAttribute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CookingIntentAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.CookingIntentAttribute;
                }

                namespace CookingIntentAttribute {

                    /** Properties of an IntAttributeValue. */
                    interface IIntAttributeValue {

                        /** IntAttributeValue value */
                        value?: (number|null);
                    }

                    /** Represents an IntAttributeValue. */
                    class IntAttributeValue implements IIntAttributeValue {

                        /**
                         * Constructs a new IntAttributeValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.CookingIntentAttribute.IIntAttributeValue);

                        /** IntAttributeValue value. */
                        public value: number;

                        /**
                         * Encodes the specified IntAttributeValue message. Does not implicitly {@link whisk.api.user.v2.CookingIntentAttribute.IntAttributeValue.verify|verify} messages.
                         * @param message IntAttributeValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.CookingIntentAttribute.IIntAttributeValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IntAttributeValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IntAttributeValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.CookingIntentAttribute.IntAttributeValue;
                    }
                }

                /** Properties of a CookingIntentAttributePayload. */
                interface ICookingIntentAttributePayload {

                    /** CookingIntentAttributePayload intValue */
                    intValue?: (whisk.api.user.v2.CookingIntentAttributePayload.IIntAttributeValue|null);
                }

                /** Represents a CookingIntentAttributePayload. */
                class CookingIntentAttributePayload implements ICookingIntentAttributePayload {

                    /**
                     * Constructs a new CookingIntentAttributePayload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ICookingIntentAttributePayload);

                    /** CookingIntentAttributePayload intValue. */
                    public intValue?: (whisk.api.user.v2.CookingIntentAttributePayload.IIntAttributeValue|null);

                    /** CookingIntentAttributePayload value. */
                    public value?: "intValue";

                    /**
                     * Encodes the specified CookingIntentAttributePayload message. Does not implicitly {@link whisk.api.user.v2.CookingIntentAttributePayload.verify|verify} messages.
                     * @param message CookingIntentAttributePayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ICookingIntentAttributePayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CookingIntentAttributePayload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CookingIntentAttributePayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.CookingIntentAttributePayload;
                }

                namespace CookingIntentAttributePayload {

                    /** Properties of an IntAttributeValue. */
                    interface IIntAttributeValue {

                        /** IntAttributeValue value */
                        value?: (number|null);
                    }

                    /** Represents an IntAttributeValue. */
                    class IntAttributeValue implements IIntAttributeValue {

                        /**
                         * Constructs a new IntAttributeValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.CookingIntentAttributePayload.IIntAttributeValue);

                        /** IntAttributeValue value. */
                        public value: number;

                        /**
                         * Encodes the specified IntAttributeValue message. Does not implicitly {@link whisk.api.user.v2.CookingIntentAttributePayload.IntAttributeValue.verify|verify} messages.
                         * @param message IntAttributeValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.CookingIntentAttributePayload.IIntAttributeValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IntAttributeValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IntAttributeValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.CookingIntentAttributePayload.IntAttributeValue;
                    }
                }

                /** Represents a UserAPI */
                class UserAPI extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new UserAPI service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Calls GetMe.
                     * @param request GetMeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GetMeResponse
                     */
                    public getMe(request: whisk.api.user.v2.IGetMeRequest, callback: whisk.api.user.v2.UserAPI.GetMeCallback): void;

                    /**
                     * Calls GetMe.
                     * @param request GetMeRequest message or plain object
                     * @returns Promise
                     */
                    public getMe(request: whisk.api.user.v2.IGetMeRequest): Promise<whisk.api.user.v2.GetMeResponse>;

                    /**
                     * Calls Get.
                     * @param request Empty message or plain object
                     * @param callback Node-style callback called with the error, if any, and GetMeResponse
                     */
                    public get(request: google.protobuf.IEmpty, callback: whisk.api.user.v2.UserAPI.GetCallback): void;

                    /**
                     * Calls Get.
                     * @param request Empty message or plain object
                     * @returns Promise
                     */
                    public get(request: google.protobuf.IEmpty): Promise<whisk.api.user.v2.GetMeResponse>;

                    /**
                     * Calls UpdateSettings.
                     * @param request UpdateSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UpdateSettingsResponse
                     */
                    public updateSettings(request: whisk.api.user.v2.IUpdateSettingsRequest, callback: whisk.api.user.v2.UserAPI.UpdateSettingsCallback): void;

                    /**
                     * Calls UpdateSettings.
                     * @param request UpdateSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public updateSettings(request: whisk.api.user.v2.IUpdateSettingsRequest): Promise<whisk.api.user.v2.UpdateSettingsResponse>;
                }

                namespace UserAPI {

                    /**
                     * Callback as used by {@link whisk.api.user.v2.UserAPI#getMe}.
                     * @param error Error, if any
                     * @param [response] GetMeResponse
                     */
                    type GetMeCallback = (error: (Error|null), response?: whisk.api.user.v2.GetMeResponse) => void;

                    /**
                     * Callback as used by {@link whisk.api.user.v2.UserAPI#get}.
                     * @param error Error, if any
                     * @param [response] GetMeResponse
                     */
                    type GetCallback = (error: (Error|null), response?: whisk.api.user.v2.GetMeResponse) => void;

                    /**
                     * Callback as used by {@link whisk.api.user.v2.UserAPI#updateSettings}.
                     * @param error Error, if any
                     * @param [response] UpdateSettingsResponse
                     */
                    type UpdateSettingsCallback = (error: (Error|null), response?: whisk.api.user.v2.UpdateSettingsResponse) => void;
                }

                /** Properties of a GetMeRequest. */
                interface IGetMeRequest {
                }

                /** Represents a GetMeRequest. */
                class GetMeRequest implements IGetMeRequest {

                    /**
                     * Constructs a new GetMeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IGetMeRequest);

                    /**
                     * Encodes the specified GetMeRequest message. Does not implicitly {@link whisk.api.user.v2.GetMeRequest.verify|verify} messages.
                     * @param message GetMeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IGetMeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.GetMeRequest;
                }

                /** Properties of a GetMeResponse. */
                interface IGetMeResponse {

                    /** GetMeResponse user */
                    user?: (whisk.api.user.v2.IUser|null);
                }

                /** Represents a GetMeResponse. */
                class GetMeResponse implements IGetMeResponse {

                    /**
                     * Constructs a new GetMeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IGetMeResponse);

                    /** GetMeResponse user. */
                    public user?: (whisk.api.user.v2.IUser|null);

                    /**
                     * Encodes the specified GetMeResponse message. Does not implicitly {@link whisk.api.user.v2.GetMeResponse.verify|verify} messages.
                     * @param message GetMeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IGetMeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.GetMeResponse;
                }

                /** Properties of an UpdateSettingsRequest. */
                interface IUpdateSettingsRequest {

                    /** UpdateSettingsRequest settings */
                    settings?: (whisk.api.user.v2.IUserSettings|null);

                    /** UpdateSettingsRequest id */
                    id?: (string|null);

                    /** UpdateSettingsRequest mask */
                    mask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSettingsRequest. */
                class UpdateSettingsRequest implements IUpdateSettingsRequest {

                    /**
                     * Constructs a new UpdateSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUpdateSettingsRequest);

                    /** UpdateSettingsRequest settings. */
                    public settings?: (whisk.api.user.v2.IUserSettings|null);

                    /** UpdateSettingsRequest id. */
                    public id: string;

                    /** UpdateSettingsRequest mask. */
                    public mask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Encodes the specified UpdateSettingsRequest message. Does not implicitly {@link whisk.api.user.v2.UpdateSettingsRequest.verify|verify} messages.
                     * @param message UpdateSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUpdateSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateSettingsRequest;
                }

                /** Properties of an UpdateSettingsResponse. */
                interface IUpdateSettingsResponse {

                    /** UpdateSettingsResponse user */
                    user?: (whisk.api.user.v2.IUser|null);
                }

                /** Represents an UpdateSettingsResponse. */
                class UpdateSettingsResponse implements IUpdateSettingsResponse {

                    /**
                     * Constructs a new UpdateSettingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUpdateSettingsResponse);

                    /** UpdateSettingsResponse user. */
                    public user?: (whisk.api.user.v2.IUser|null);

                    /**
                     * Encodes the specified UpdateSettingsResponse message. Does not implicitly {@link whisk.api.user.v2.UpdateSettingsResponse.verify|verify} messages.
                     * @param message UpdateSettingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUpdateSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSettingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSettingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateSettingsResponse;
                }

                /** Properties of an ExtractRecipeRequest. */
                interface IExtractRecipeRequest {

                    /** ExtractRecipeRequest url */
                    url?: (string|null);

                    /** ExtractRecipeRequest recipeMask */
                    recipeMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an ExtractRecipeRequest. */
                class ExtractRecipeRequest implements IExtractRecipeRequest {

                    /**
                     * Constructs a new ExtractRecipeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IExtractRecipeRequest);

                    /** ExtractRecipeRequest url. */
                    public url: string;

                    /** ExtractRecipeRequest recipeMask. */
                    public recipeMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Encodes the specified ExtractRecipeRequest message. Does not implicitly {@link whisk.api.user.v2.ExtractRecipeRequest.verify|verify} messages.
                     * @param message ExtractRecipeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IExtractRecipeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExtractRecipeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExtractRecipeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.ExtractRecipeRequest;
                }

                /** Properties of a SaveRecipeRequest. */
                interface ISaveRecipeRequest {

                    /** SaveRecipeRequest recipeId */
                    recipeId?: (string|null);

                    /** SaveRecipeRequest collectionIds */
                    collectionIds?: (string[]|null);

                    /** SaveRecipeRequest sourceUserId */
                    sourceUserId?: (string|null);

                    /** SaveRecipeRequest recipeMask */
                    recipeMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a SaveRecipeRequest. */
                class SaveRecipeRequest implements ISaveRecipeRequest {

                    /**
                     * Constructs a new SaveRecipeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.ISaveRecipeRequest);

                    /** SaveRecipeRequest recipeId. */
                    public recipeId: string;

                    /** SaveRecipeRequest collectionIds. */
                    public collectionIds: string[];

                    /** SaveRecipeRequest sourceUserId. */
                    public sourceUserId: string;

                    /** SaveRecipeRequest recipeMask. */
                    public recipeMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Encodes the specified SaveRecipeRequest message. Does not implicitly {@link whisk.api.user.v2.SaveRecipeRequest.verify|verify} messages.
                     * @param message SaveRecipeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.ISaveRecipeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SaveRecipeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SaveRecipeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.SaveRecipeRequest;
                }

                /** Properties of an UpdateRecipeRequest. */
                interface IUpdateRecipeRequest {

                    /** UpdateRecipeRequest recipeId */
                    recipeId?: (string|null);

                    /** UpdateRecipeRequest recipeMask */
                    recipeMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecipeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecipeRequest payload */
                    payload?: (whisk.api.user.v2.IUser|null);

                    /** UpdateRecipeRequest collectionIds */
                    collectionIds?: (string[]|null);
                }

                /** Represents an UpdateRecipeRequest. */
                class UpdateRecipeRequest implements IUpdateRecipeRequest {

                    /**
                     * Constructs a new UpdateRecipeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUpdateRecipeRequest);

                    /** UpdateRecipeRequest recipeId. */
                    public recipeId: string;

                    /** UpdateRecipeRequest recipeMask. */
                    public recipeMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecipeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecipeRequest payload. */
                    public payload?: (whisk.api.user.v2.IUser|null);

                    /** UpdateRecipeRequest collectionIds. */
                    public collectionIds: string[];

                    /**
                     * Encodes the specified UpdateRecipeRequest message. Does not implicitly {@link whisk.api.user.v2.UpdateRecipeRequest.verify|verify} messages.
                     * @param message UpdateRecipeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUpdateRecipeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRecipeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRecipeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateRecipeRequest;
                }

                /** Properties of an UpdateListRequest. */
                interface IUpdateListRequest {

                    /** UpdateListRequest id */
                    id?: (string|null);

                    /** UpdateListRequest fields */
                    fields?: (whisk.api.user.v2.UpdateListRequest.IFields|null);

                    /** UpdateListRequest mask */
                    mask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateListRequest. */
                class UpdateListRequest implements IUpdateListRequest {

                    /**
                     * Constructs a new UpdateListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUpdateListRequest);

                    /** UpdateListRequest id. */
                    public id: string;

                    /** UpdateListRequest fields. */
                    public fields?: (whisk.api.user.v2.UpdateListRequest.IFields|null);

                    /** UpdateListRequest mask. */
                    public mask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Encodes the specified UpdateListRequest message. Does not implicitly {@link whisk.api.user.v2.UpdateListRequest.verify|verify} messages.
                     * @param message UpdateListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUpdateListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateListRequest;
                }

                namespace UpdateListRequest {

                    /** Properties of a Fields. */
                    interface IFields {

                        /** Fields name */
                        name?: (string|null);

                        /** Fields primary */
                        primary?: (boolean|null);
                    }

                    /** Represents a Fields. */
                    class Fields implements IFields {

                        /**
                         * Constructs a new Fields.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.UpdateListRequest.IFields);

                        /** Fields name. */
                        public name: string;

                        /** Fields primary. */
                        public primary: boolean;

                        /**
                         * Encodes the specified Fields message. Does not implicitly {@link whisk.api.user.v2.UpdateListRequest.Fields.verify|verify} messages.
                         * @param message Fields message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.UpdateListRequest.IFields, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Fields message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Fields
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateListRequest.Fields;
                    }
                }

                /** Properties of an UpdateItemRequest. */
                interface IUpdateItemRequest {

                    /** UpdateItemRequest id */
                    id?: (string|null);

                    /** UpdateItemRequest fields */
                    fields?: (whisk.api.user.v2.UpdateItemRequest.IFields|null);

                    /** UpdateItemRequest mask */
                    mask?: (google.protobuf.IFieldMask|null);

                    /** UpdateItemRequest newOrder */
                    newOrder?: (number|null);
                }

                /** Represents an UpdateItemRequest. */
                class UpdateItemRequest implements IUpdateItemRequest {

                    /**
                     * Constructs a new UpdateItemRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUpdateItemRequest);

                    /** UpdateItemRequest id. */
                    public id: string;

                    /** UpdateItemRequest fields. */
                    public fields?: (whisk.api.user.v2.UpdateItemRequest.IFields|null);

                    /** UpdateItemRequest mask. */
                    public mask?: (google.protobuf.IFieldMask|null);

                    /** UpdateItemRequest newOrder. */
                    public newOrder: number;

                    /**
                     * Encodes the specified UpdateItemRequest message. Does not implicitly {@link whisk.api.user.v2.UpdateItemRequest.verify|verify} messages.
                     * @param message UpdateItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUpdateItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateItemRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateItemRequest;
                }

                namespace UpdateItemRequest {

                    /** Properties of a Fields. */
                    interface IFields {

                        /** Fields name */
                        name?: (string|null);

                        /** Fields quantity */
                        quantity?: (number|null);

                        /** Fields unit */
                        unit?: (string|null);

                        /** Fields expiryDate */
                        expiryDate?: (whisk.api.shared.v1.IDate|null);

                        /** Fields user */
                        user?: (whisk.api.user.v2.IUser|null);

                        /** Fields addedAt */
                        addedAt?: (number|Long|null);
                    }

                    /** Represents a Fields. */
                    class Fields implements IFields {

                        /**
                         * Constructs a new Fields.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: whisk.api.user.v2.UpdateItemRequest.IFields);

                        /** Fields name. */
                        public name: string;

                        /** Fields quantity. */
                        public quantity: number;

                        /** Fields unit. */
                        public unit: string;

                        /** Fields expiryDate. */
                        public expiryDate?: (whisk.api.shared.v1.IDate|null);

                        /** Fields user. */
                        public user?: (whisk.api.user.v2.IUser|null);

                        /** Fields addedAt. */
                        public addedAt: (number|Long);

                        /**
                         * Encodes the specified Fields message. Does not implicitly {@link whisk.api.user.v2.UpdateItemRequest.Fields.verify|verify} messages.
                         * @param message Fields message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: whisk.api.user.v2.UpdateItemRequest.IFields, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Fields message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Fields
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateItemRequest.Fields;
                    }
                }

                /** Properties of an UpdateSettingsRequestOld. */
                interface IUpdateSettingsRequestOld {

                    /** UpdateSettingsRequestOld settings */
                    settings?: (whisk.api.user.v2.IUserSettings|null);

                    /** UpdateSettingsRequestOld mask */
                    mask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSettingsRequestOld. */
                class UpdateSettingsRequestOld implements IUpdateSettingsRequestOld {

                    /**
                     * Constructs a new UpdateSettingsRequestOld.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUpdateSettingsRequestOld);

                    /** UpdateSettingsRequestOld settings. */
                    public settings?: (whisk.api.user.v2.IUserSettings|null);

                    /** UpdateSettingsRequestOld mask. */
                    public mask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Encodes the specified UpdateSettingsRequestOld message. Does not implicitly {@link whisk.api.user.v2.UpdateSettingsRequestOld.verify|verify} messages.
                     * @param message UpdateSettingsRequestOld message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUpdateSettingsRequestOld, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSettingsRequestOld message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSettingsRequestOld
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateSettingsRequestOld;
                }

                /** Properties of an UpdateBusinessApp. */
                interface IUpdateBusinessApp {

                    /** UpdateBusinessApp updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBusinessApp name */
                    name?: (string|null);

                    /** UpdateBusinessApp description */
                    description?: (string|null);

                    /** UpdateBusinessApp user */
                    user?: (whisk.api.user.v2.IUser|null);

                    /** UpdateBusinessApp isTest */
                    isTest?: (boolean|null);

                    /** UpdateBusinessApp isTrial */
                    isTrial?: (boolean|null);
                }

                /** Represents an UpdateBusinessApp. */
                class UpdateBusinessApp implements IUpdateBusinessApp {

                    /**
                     * Constructs a new UpdateBusinessApp.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUpdateBusinessApp);

                    /** UpdateBusinessApp updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBusinessApp name. */
                    public name: string;

                    /** UpdateBusinessApp description. */
                    public description: string;

                    /** UpdateBusinessApp user. */
                    public user?: (whisk.api.user.v2.IUser|null);

                    /** UpdateBusinessApp isTest. */
                    public isTest: boolean;

                    /** UpdateBusinessApp isTrial. */
                    public isTrial: boolean;

                    /**
                     * Encodes the specified UpdateBusinessApp message. Does not implicitly {@link whisk.api.user.v2.UpdateBusinessApp.verify|verify} messages.
                     * @param message UpdateBusinessApp message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUpdateBusinessApp, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBusinessApp message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBusinessApp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UpdateBusinessApp;
                }

                /** Properties of a UserSettings2. */
                interface IUserSettings2 {

                    /** UserSettings2 nonDefaultMask */
                    nonDefaultMask?: (google.protobuf.IFieldMask|null);

                    /** UserSettings2 onboarding */
                    onboarding?: (string[]|null);

                    /** UserSettings2 firstName */
                    firstName?: (string|null);

                    /** UserSettings2 lastName */
                    lastName?: (string|null);
                }

                /** Represents a UserSettings2. */
                class UserSettings2 implements IUserSettings2 {

                    /**
                     * Constructs a new UserSettings2.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: whisk.api.user.v2.IUserSettings2);

                    /** UserSettings2 nonDefaultMask. */
                    public nonDefaultMask?: (google.protobuf.IFieldMask|null);

                    /** UserSettings2 onboarding. */
                    public onboarding: string[];

                    /** UserSettings2 firstName. */
                    public firstName: string;

                    /** UserSettings2 lastName. */
                    public lastName: string;

                    /**
                     * Encodes the specified UserSettings2 message. Does not implicitly {@link whisk.api.user.v2.UserSettings2.verify|verify} messages.
                     * @param message UserSettings2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: whisk.api.user.v2.IUserSettings2, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserSettings2 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserSettings2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.api.user.v2.UserSettings2;
                }
            }
        }
    }

    /** Namespace local. */
    namespace local {

        /** Properties of a Message. */
        interface IMessage {

            /** Message id */
            id?: (ISendMessage|null);

            /** Message type */
            type?: (App|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: whisk.local.IMessage);

            /** Message id. */
            public id?: (ISendMessage|null);

            /** Message type. */
            public type: App;

            /**
             * Encodes the specified Message message. Does not implicitly {@link whisk.local.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: whisk.local.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whisk.local.Message;
        }
    }
}

/** App enum. */
export enum App {
    APP_UNSPECIFIED = 0,
    APP_WEB = 1,
    APP_ANDROID = 2,
    APP_IOS = 3
}

/** Represents a SendMessage. */
export class SendMessage implements ISendMessage {

    /**
     * Constructs a new SendMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendMessage);

    /** SendMessage id. */
    public id: string;

    /**
     * Encodes the specified SendMessage message. Does not implicitly {@link SendMessage.verify|verify} messages.
     * @param message SendMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendMessage;
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message id. */
    public id?: (ISendMessage|null);

    /** Message type. */
    public type: App;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;
}
