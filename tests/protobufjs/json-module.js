/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  google: {
    nested: {
      api: {
        nested: {
          http: {
            type: "HttpRule",
            id: 72295728,
            extend: "google.protobuf.MethodOptions"
          },
          Http: {
            fields: {
              rules: {
                rule: "repeated",
                type: "HttpRule",
                id: 1
              }
            }
          },
          HttpRule: {
            oneofs: {
              pattern: {
                oneof: [
                  "get",
                  "put",
                  "post",
                  "delete",
                  "patch",
                  "custom"
                ]
              }
            },
            fields: {
              get: {
                type: "string",
                id: 2
              },
              put: {
                type: "string",
                id: 3
              },
              post: {
                type: "string",
                id: 4
              },
              "delete": {
                type: "string",
                id: 5
              },
              patch: {
                type: "string",
                id: 6
              },
              custom: {
                type: "CustomHttpPattern",
                id: 8
              },
              selector: {
                type: "string",
                id: 1
              },
              body: {
                type: "string",
                id: 7
              },
              additionalBindings: {
                rule: "repeated",
                type: "HttpRule",
                id: 11
              }
            }
          },
          CustomHttpPattern: {
            fields: {
              kind: {
                type: "string",
                id: 1
              },
              path: {
                type: "string",
                id: 2
              }
            }
          },
          HttpBody: {
            fields: {
              contentType: {
                type: "string",
                id: 1
              },
              data: {
                type: "bytes",
                id: 2
              },
              extensions: {
                rule: "repeated",
                type: "google.protobuf.Any",
                id: 3
              }
            }
          }
        }
      },
      protobuf: {
        nested: {
          FileDescriptorSet: {
            fields: {
              file: {
                rule: "repeated",
                type: "FileDescriptorProto",
                id: 1
              }
            }
          },
          FileDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              "package": {
                type: "string",
                id: 2
              },
              dependency: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              publicDependency: {
                rule: "repeated",
                type: "int32",
                id: 10,
                options: {
                  packed: false
                }
              },
              weakDependency: {
                rule: "repeated",
                type: "int32",
                id: 11,
                options: {
                  packed: false
                }
              },
              messageType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 4
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 5
              },
              service: {
                rule: "repeated",
                type: "ServiceDescriptorProto",
                id: 6
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 7
              },
              options: {
                type: "FileOptions",
                id: 8
              },
              sourceCodeInfo: {
                type: "SourceCodeInfo",
                id: 9
              },
              syntax: {
                type: "string",
                id: 12
              }
            }
          },
          DescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              field: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 2
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 6
              },
              nestedType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 3
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 4
              },
              extensionRange: {
                rule: "repeated",
                type: "ExtensionRange",
                id: 5
              },
              oneofDecl: {
                rule: "repeated",
                type: "OneofDescriptorProto",
                id: 8
              },
              options: {
                type: "MessageOptions",
                id: 7
              },
              reservedRange: {
                rule: "repeated",
                type: "ReservedRange",
                id: 9
              },
              reservedName: {
                rule: "repeated",
                type: "string",
                id: 10
              }
            },
            nested: {
              ExtensionRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              ReservedRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            }
          },
          FieldDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 3
              },
              label: {
                type: "Label",
                id: 4
              },
              type: {
                type: "Type",
                id: 5
              },
              typeName: {
                type: "string",
                id: 6
              },
              extendee: {
                type: "string",
                id: 2
              },
              defaultValue: {
                type: "string",
                id: 7
              },
              oneofIndex: {
                type: "int32",
                id: 9
              },
              jsonName: {
                type: "string",
                id: 10
              },
              options: {
                type: "FieldOptions",
                id: 8
              }
            },
            nested: {
              Type: {
                values: {
                  TYPE_DOUBLE: 1,
                  TYPE_FLOAT: 2,
                  TYPE_INT64: 3,
                  TYPE_UINT64: 4,
                  TYPE_INT32: 5,
                  TYPE_FIXED64: 6,
                  TYPE_FIXED32: 7,
                  TYPE_BOOL: 8,
                  TYPE_STRING: 9,
                  TYPE_GROUP: 10,
                  TYPE_MESSAGE: 11,
                  TYPE_BYTES: 12,
                  TYPE_UINT32: 13,
                  TYPE_ENUM: 14,
                  TYPE_SFIXED32: 15,
                  TYPE_SFIXED64: 16,
                  TYPE_SINT32: 17,
                  TYPE_SINT64: 18
                }
              },
              Label: {
                values: {
                  LABEL_OPTIONAL: 1,
                  LABEL_REQUIRED: 2,
                  LABEL_REPEATED: 3
                }
              }
            }
          },
          OneofDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              options: {
                type: "OneofOptions",
                id: 2
              }
            }
          },
          EnumDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                rule: "repeated",
                type: "EnumValueDescriptorProto",
                id: 2
              },
              options: {
                type: "EnumOptions",
                id: 3
              }
            }
          },
          EnumValueDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 2
              },
              options: {
                type: "EnumValueOptions",
                id: 3
              }
            }
          },
          ServiceDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              method: {
                rule: "repeated",
                type: "MethodDescriptorProto",
                id: 2
              },
              options: {
                type: "ServiceOptions",
                id: 3
              }
            }
          },
          MethodDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              inputType: {
                type: "string",
                id: 2
              },
              outputType: {
                type: "string",
                id: 3
              },
              options: {
                type: "MethodOptions",
                id: 4
              },
              clientStreaming: {
                type: "bool",
                id: 5
              },
              serverStreaming: {
                type: "bool",
                id: 6
              }
            }
          },
          FileOptions: {
            fields: {
              javaPackage: {
                type: "string",
                id: 1
              },
              javaOuterClassname: {
                type: "string",
                id: 8
              },
              javaMultipleFiles: {
                type: "bool",
                id: 10
              },
              javaGenerateEqualsAndHash: {
                type: "bool",
                id: 20,
                options: {
                  deprecated: true
                }
              },
              javaStringCheckUtf8: {
                type: "bool",
                id: 27
              },
              optimizeFor: {
                type: "OptimizeMode",
                id: 9,
                options: {
                  "default": "SPEED"
                }
              },
              goPackage: {
                type: "string",
                id: 11
              },
              ccGenericServices: {
                type: "bool",
                id: 16
              },
              javaGenericServices: {
                type: "bool",
                id: 17
              },
              pyGenericServices: {
                type: "bool",
                id: 18
              },
              deprecated: {
                type: "bool",
                id: 23
              },
              ccEnableArenas: {
                type: "bool",
                id: 31
              },
              objcClassPrefix: {
                type: "string",
                id: 36
              },
              csharpNamespace: {
                type: "string",
                id: 37
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                38,
                38
              ]
            ],
            nested: {
              OptimizeMode: {
                values: {
                  SPEED: 1,
                  CODE_SIZE: 2,
                  LITE_RUNTIME: 3
                }
              }
            }
          },
          MessageOptions: {
            fields: {
              messageSetWireFormat: {
                type: "bool",
                id: 1
              },
              noStandardDescriptorAccessor: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              mapEntry: {
                type: "bool",
                id: 7
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                8,
                8
              ]
            ]
          },
          FieldOptions: {
            fields: {
              ctype: {
                type: "CType",
                id: 1,
                options: {
                  "default": "STRING"
                }
              },
              packed: {
                type: "bool",
                id: 2
              },
              jstype: {
                type: "JSType",
                id: 6,
                options: {
                  "default": "JS_NORMAL"
                }
              },
              lazy: {
                type: "bool",
                id: 5
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              weak: {
                type: "bool",
                id: 10
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ],
            reserved: [
              [
                4,
                4
              ]
            ],
            nested: {
              CType: {
                values: {
                  STRING: 0,
                  CORD: 1,
                  STRING_PIECE: 2
                }
              },
              JSType: {
                values: {
                  JS_NORMAL: 0,
                  JS_STRING: 1,
                  JS_NUMBER: 2
                }
              }
            }
          },
          OneofOptions: {
            fields: {
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          EnumOptions: {
            fields: {
              allowAlias: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          EnumValueOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 1
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          ServiceOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          MethodOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1000,
                536870911
              ]
            ]
          },
          UninterpretedOption: {
            fields: {
              name: {
                rule: "repeated",
                type: "NamePart",
                id: 2
              },
              identifierValue: {
                type: "string",
                id: 3
              },
              positiveIntValue: {
                type: "uint64",
                id: 4
              },
              negativeIntValue: {
                type: "int64",
                id: 5
              },
              doubleValue: {
                type: "double",
                id: 6
              },
              stringValue: {
                type: "bytes",
                id: 7
              },
              aggregateValue: {
                type: "string",
                id: 8
              }
            },
            nested: {
              NamePart: {
                fields: {
                  namePart: {
                    rule: "required",
                    type: "string",
                    id: 1
                  },
                  isExtension: {
                    rule: "required",
                    type: "bool",
                    id: 2
                  }
                }
              }
            }
          },
          SourceCodeInfo: {
            fields: {
              location: {
                rule: "repeated",
                type: "Location",
                id: 1
              }
            },
            nested: {
              Location: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  span: {
                    rule: "repeated",
                    type: "int32",
                    id: 2
                  },
                  leadingComments: {
                    type: "string",
                    id: 3
                  },
                  trailingComments: {
                    type: "string",
                    id: 4
                  },
                  leadingDetachedComments: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          GeneratedCodeInfo: {
            fields: {
              annotation: {
                rule: "repeated",
                type: "Annotation",
                id: 1
              }
            },
            nested: {
              Annotation: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  sourceFile: {
                    type: "string",
                    id: 2
                  },
                  begin: {
                    type: "int32",
                    id: 3
                  },
                  end: {
                    type: "int32",
                    id: 4
                  }
                }
              }
            }
          },
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          },
          Duration: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          Empty: {
            fields: {}
          },
          FieldMask: {
            fields: {
              paths: {
                rule: "repeated",
                type: "string",
                id: 1
              }
            }
          },
          Struct: {
            fields: {
              fields: {
                keyType: "string",
                type: "Value",
                id: 1
              }
            }
          },
          Value: {
            oneofs: {
              kind: {
                oneof: [
                  "nullValue",
                  "numberValue",
                  "stringValue",
                  "boolValue",
                  "structValue",
                  "listValue"
                ]
              }
            },
            fields: {
              nullValue: {
                type: "NullValue",
                id: 1
              },
              numberValue: {
                type: "double",
                id: 2
              },
              stringValue: {
                type: "string",
                id: 3
              },
              boolValue: {
                type: "bool",
                id: 4
              },
              structValue: {
                type: "Struct",
                id: 5
              },
              listValue: {
                type: "ListValue",
                id: 6
              }
            }
          },
          NullValue: {
            values: {
              NULL_VALUE: 0
            }
          },
          ListValue: {
            fields: {
              values: {
                rule: "repeated",
                type: "Value",
                id: 1
              }
            }
          },
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        }
      }
    }
  },
  whisk: {
    nested: {
      api: {
        nested: {
          shared: {
            nested: {
              v1: {
                nested: {
                  Test: {
                    fields: {
                      string: {
                        type: "string",
                        id: 1
                      },
                      uint32: {
                        type: "uint32",
                        id: 2
                      },
                      inner: {
                        type: "Inner",
                        id: 3
                      },
                      float: {
                        type: "float",
                        id: 4
                      }
                    },
                    nested: {
                      Inner: {
                        fields: {
                          int32: {
                            type: "int32",
                            id: 1
                          },
                          innerInner: {
                            type: "InnerInner",
                            id: 2
                          },
                          outer: {
                            type: "Outer",
                            id: 3
                          }
                        },
                        nested: {
                          InnerInner: {
                            fields: {
                              long: {
                                type: "int64",
                                id: 1
                              },
                              "enum": {
                                type: "Enum",
                                id: 2
                              },
                              sint32: {
                                type: "sint32",
                                id: 3
                              }
                            }
                          }
                        }
                      },
                      Enum: {
                        values: {
                          ONE: 0,
                          TWO: 1,
                          THREE: 2,
                          FOUR: 3,
                          FIVE: 4
                        }
                      }
                    }
                  },
                  Outer: {
                    fields: {
                      bool: {
                        rule: "repeated",
                        type: "bool",
                        id: 1
                      },
                      double: {
                        type: "double",
                        id: 2
                      },
                      uint32: {
                        rule: "repeated",
                        type: "uint32",
                        id: 3
                      },
                      string: {
                        rule: "repeated",
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  Date: {
                    fields: {
                      year: {
                        type: "int32",
                        id: 1
                      },
                      month: {
                        type: "int32",
                        id: 2
                      },
                      day: {
                        type: "int32",
                        id: 3
                      }
                    }
                  },
                  Time: {
                    fields: {
                      time: {
                        type: "int64",
                        id: 1
                      },
                      nano: {
                        type: "google.protobuf.UInt32Value",
                        id: 2
                      }
                    }
                  },
                  Primitive: {
                    fields: {
                      double: {
                        type: "double",
                        id: 1
                      },
                      float: {
                        type: "float",
                        id: 2
                      },
                      int32: {
                        type: "int32",
                        id: 3
                      },
                      int64: {
                        type: "int64",
                        id: 4
                      },
                      uint32: {
                        type: "uint32",
                        id: 5
                      },
                      uint64: {
                        type: "uint64",
                        id: 6
                      },
                      sint32: {
                        type: "sint32",
                        id: 7
                      },
                      sint64: {
                        type: "sint64",
                        id: 8
                      },
                      fixed32: {
                        type: "fixed32",
                        id: 9
                      },
                      fixed64: {
                        type: "fixed64",
                        id: 10
                      },
                      sfixed32: {
                        type: "sfixed32",
                        id: 11
                      },
                      sfixed64: {
                        type: "sfixed64",
                        id: 12
                      },
                      bool: {
                        type: "bool",
                        id: 13
                      },
                      string: {
                        type: "string",
                        id: 14
                      },
                      bytes: {
                        type: "bytes",
                        id: 15
                      }
                    }
                  },
                  Big: {
                    fields: {
                      b: {
                        type: "int64",
                        id: 1
                      }
                    }
                  },
                  Sign: {
                    fields: {
                      b: {
                        type: "sint64",
                        id: 1
                      }
                    }
                  },
                  Double: {
                    fields: {
                      d: {
                        type: "double",
                        id: 1
                      }
                    }
                  },
                  Wrapper: {
                    fields: {
                      double: {
                        type: "google.protobuf.DoubleValue",
                        id: 1
                      },
                      float: {
                        type: "google.protobuf.FloatValue",
                        id: 2
                      },
                      int64: {
                        type: "google.protobuf.Int64Value",
                        id: 3
                      },
                      uint64: {
                        type: "google.protobuf.UInt64Value",
                        id: 4
                      },
                      int32: {
                        type: "google.protobuf.Int32Value",
                        id: 5
                      },
                      uint32: {
                        type: "google.protobuf.UInt32Value",
                        id: 6
                      },
                      bool: {
                        type: "google.protobuf.BoolValue",
                        id: 7
                      },
                      string: {
                        type: "google.protobuf.StringValue",
                        id: 8
                      },
                      bytes: {
                        type: "google.protobuf.BytesValue",
                        id: 9
                      }
                    }
                  }
                }
              }
            }
          },
          user: {
            nested: {
              v2: {
                options: {
                  go_package: "userv2",
                  java_package: "com.whisk.api.user.v2"
                },
                nested: {
                  User: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1,
                        options: {
                          required: true
                        }
                      },
                      email: {
                        type: "string",
                        id: 2
                      },
                      phone: {
                        type: "string",
                        id: 3
                      },
                      userSettings: {
                        type: "UserSettings",
                        id: 4
                      },
                      hasPassword: {
                        type: "bool",
                        id: 5
                      },
                      recommendations: {
                        type: "Recommendations",
                        id: 6
                      },
                      mapHealthGoal: {
                        keyType: "string",
                        type: "HealthGoal",
                        id: 7
                      },
                      mapIngredient: {
                        keyType: "string",
                        type: "Ingredient",
                        id: 8
                      }
                    }
                  },
                  UserSettings: {
                    fields: {
                      personalDetails: {
                        type: "PersonalDetails",
                        id: 1
                      },
                      foodPreferences: {
                        type: "FoodPreferences",
                        id: 2
                      },
                      cookingPreferences: {
                        type: "CookingPreferences",
                        id: 3
                      },
                      shoppingPreferences: {
                        type: "ShoppingPreferences",
                        id: 4
                      }
                    }
                  },
                  PersonalDetails: {
                    fields: {
                      firstName: {
                        type: "string",
                        id: 1
                      },
                      lastName: {
                        type: "string",
                        id: 2
                      },
                      photoUrl: {
                        type: "string",
                        id: 3
                      },
                      gender: {
                        type: "Gender",
                        id: 4
                      },
                      country: {
                        type: "string",
                        id: 5
                      },
                      zipcode: {
                        type: "string",
                        id: 6
                      },
                      language: {
                        type: "string",
                        id: 7
                      },
                      activityLevel: {
                        type: "ActivityLevel",
                        id: 8
                      },
                      age: {
                        type: "int32",
                        id: 9,
                        options: {
                          deprecated: true
                        }
                      },
                      height: {
                        type: "Height",
                        id: 10
                      },
                      weight: {
                        type: "Weight",
                        id: 11
                      },
                      healthGoals: {
                        type: "HealthGoals",
                        id: 12
                      },
                      yearOfBirth: {
                        type: "int32",
                        id: 13
                      }
                    },
                    nested: {
                      HealthGoals: {
                        fields: {
                          list: {
                            rule: "repeated",
                            type: "HealthGoal",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  HealthGoal: {
                    values: {
                      HEALTH_GOAL_INVALID: 0,
                      HEALTH_GOAL_WEIGHT_LOSS: 1,
                      HEALTH_GOAL_WEIGHT_GAIN: 2,
                      HEALTH_GOAL_BETTER_SLEEP: 3,
                      HEALTH_GOAL_INCREASE_ENERGY: 4
                    }
                  },
                  Height: {
                    fields: {
                      value: {
                        type: "double",
                        id: 1
                      },
                      unit: {
                        type: "Unit",
                        id: 2
                      }
                    },
                    nested: {
                      Unit: {
                        values: {
                          UNIT_INVALID: 0,
                          UNIT_CM: 1,
                          UNIT_INCH: 2
                        }
                      }
                    }
                  },
                  Weight: {
                    fields: {
                      value: {
                        type: "double",
                        id: 1
                      },
                      unit: {
                        type: "Unit",
                        id: 2
                      }
                    },
                    nested: {
                      Unit: {
                        values: {
                          UNIT_INVALID: 0,
                          UNIT_KG: 1,
                          UNIT_POUND: 2
                        }
                      }
                    }
                  },
                  FoodPreferences: {
                    fields: {
                      diets: {
                        type: "string",
                        id: 1
                      },
                      avoidanceList: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      },
                      dislikedIngredients: {
                        type: "Ingredients",
                        id: 3
                      },
                      organicPreference: {
                        type: "OrganicPreference",
                        id: 4
                      },
                      nutritionPreferences: {
                        rule: "repeated",
                        type: "double",
                        id: 5
                      },
                      preferredIngredients: {
                        type: "Ingredients",
                        id: 6
                      }
                    },
                    nested: {
                      Dates: {
                        fields: {
                          list: {
                            rule: "repeated",
                            type: "whisk.api.shared.v1.Date",
                            id: 1
                          }
                        }
                      },
                      Ingredients: {
                        fields: {
                          list: {
                            rule: "repeated",
                            type: "Ingredient",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  CookingPreferences: {
                    fields: {
                      householdAdults: {
                        type: "HouseholdMembers",
                        id: 1
                      },
                      householdChildren: {
                        type: "HouseholdMembers",
                        id: 2
                      },
                      cookingExperience: {
                        type: "CookingExperience",
                        id: 4
                      },
                      cookingMaxTime: {
                        type: "CookingMaxTime",
                        id: 5
                      },
                      userDevices: {
                        type: "Devices",
                        id: 6
                      }
                    },
                    nested: {
                      HouseholdMembers: {
                        fields: {
                          size: {
                            type: "int32",
                            id: 1
                          }
                        }
                      },
                      CookingMaxTime: {
                        fields: {
                          time: {
                            type: "int32",
                            id: 1
                          }
                        }
                      },
                      Devices: {
                        fields: {
                          list: {
                            type: "Device",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  Device: {
                    oneofs: {
                      oneof: {
                        oneof: [
                          "deviceType",
                          "customDevice"
                        ]
                      }
                    },
                    fields: {
                      deviceType: {
                        type: "DeviceType",
                        id: 1
                      },
                      customDevice: {
                        type: "DeviceType",
                        id: 2
                      }
                    },
                    nested: {
                      DeviceType: {
                        values: {
                          DEVICE_TYPE_INVALID: 0,
                          DEVICE_TYPE_STOVE: 1,
                          DEVICE_TYPE_OVEN: 2,
                          DEVICE_TYPE_AIR_FRYER: 3,
                          DEVICE_TYPE_FOOD_PROCESSOR: 4,
                          DEVICE_TYPE_SOUS_VIDE: 5,
                          DEVICE_TYPE_PRESSURE_COOKER: 6,
                          DEVICE_TYPE_SLOW_COOKER: 7,
                          DEVICE_TYPE_BLENDER: 8,
                          DEVICE_TYPE_SHAKER: 9,
                          DEVICE_TYPE_MICROWAVE: 10,
                          DEVICE_TYPE_DEEP_FRYER: 11,
                          DEVICE_TYPE_GRILL: 12,
                          DEVICE_TYPE_MIXER: 13
                        }
                      }
                    }
                  },
                  ShoppingPreferences: {
                    fields: {
                      preferredRetailers: {
                        type: "PreferredRetailers",
                        id: 1
                      },
                      budgetGoal: {
                        type: "BudgetGoal",
                        id: 2
                      },
                      ethicalPreferences: {
                        type: "EthicalPreferences",
                        id: 3
                      }
                    },
                    nested: {
                      PreferredRetailers: {
                        fields: {
                          retailers: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      EthicalPreferences: {
                        fields: {
                          list: {
                            rule: "repeated",
                            type: "EthicalPreference",
                            id: 1
                          }
                        }
                      }
                    }
                  },
                  ActivityLevel: {
                    values: {
                      ACTIVITY_LEVEL_INVALID: 0,
                      ACTIVITY_LEVEL_VERY_LIGHT: 1,
                      ACTIVITY_LEVEL_LIGHT: 2,
                      ACTIVITY_LEVEL_MODERATE: 3,
                      ACTIVITY_LEVEL_ACTIVE: 4,
                      ACTIVITY_LEVEL_VERY_ACTIVE: 5
                    }
                  },
                  Gender: {
                    values: {
                      GENDER_UNSPECIFIED: 0,
                      GENDER_MALE: 1,
                      GENDER_FEMALE: 2,
                      GENDER_NON_BINARY: 3,
                      GENDER_UNDISCLOSED: 4
                    }
                  },
                  Ingredient: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      canonicalName: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  OrganicPreference: {
                    values: {
                      ORGANIC_PREFERENCE_INVALID: 0,
                      ORGANIC_PREFERENCE_ORGANIC: 1,
                      ORGANIC_PREFERENCE_DONT_CARE: 2
                    }
                  },
                  CookingExperience: {
                    values: {
                      COOKING_EXPERIENCE_INVALID: 0,
                      COOKING_EXPERIENCE_BEGINNER: 1,
                      COOKING_EXPERIENCE_INTERMEDIATE: 2,
                      COOKING_EXPERIENCE_ADVANCED: 3
                    }
                  },
                  BudgetGoal: {
                    values: {
                      BUDGET_GOAL_INVALID: 0,
                      BUDGET_GOAL_BUDGET_FRIENDLY: 1,
                      BUDGET_GOAL_AVERAGE_PRICE: 2,
                      BUDGET_GOAL_PREMIUM: 3
                    }
                  },
                  EthicalPreference: {
                    values: {
                      ETHICAL_PREFERENCE_INVALID: 0,
                      ETHICAL_PREFERENCE_ETHICAL_FISHED: 1,
                      ETHICAL_PREFERENCE_GM_FREE: 2,
                      ETHICAL_PREFERENCE_BUYING_LOCALLY: 3,
                      ETHICAL_PREFERENCE_FAIR_TRADE: 4,
                      ETHICAL_PREFERENCE_ENVIRONMENTAL_EFFECT: 5,
                      ETHICAL_PREFERENCE_LOW_WASTE_PRODUCTS: 6
                    }
                  },
                  Recommendations: {
                    fields: {
                      dailyCalories: {
                        type: "int32",
                        id: 1
                      }
                    }
                  },
                  TestItem: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1
                      },
                      name: {
                        type: "string",
                        id: 2,
                        options: {
                          required: true
                        }
                      },
                      surname: {
                        type: "string",
                        id: 3,
                        options: {
                          "(required)": false
                        }
                      },
                      description: {
                        type: "google.protobuf.StringValue",
                        id: 10
                      },
                      test: {
                        type: "google.protobuf.StringValue",
                        id: 11,
                        options: {
                          required: true
                        }
                      },
                      array: {
                        rule: "repeated",
                        type: "google.protobuf.StringValue",
                        id: 12
                      },
                      story: {
                        type: "string",
                        id: 13
                      },
                      time: {
                        type: "whisk.api.shared.v1.Time",
                        id: 30
                      },
                      date: {
                        type: "whisk.api.shared.v1.Date",
                        id: 31,
                        options: {
                          "(required)": true
                        }
                      },
                      searches: {
                        rule: "repeated",
                        type: "SearchRecipesResponse",
                        id: 40
                      },
                      mapSearch: {
                        keyType: "string",
                        type: "SearchRecipesResponse",
                        id: 41
                      },
                      search: {
                        type: "SearchRecipesResponse",
                        id: 42
                      },
                      extraInformation: {
                        keyType: "string",
                        type: "string",
                        id: 43
                      }
                    },
                    reserved: [
                      [
                        4,
                        4
                      ],
                      [
                        15,
                        15
                      ],
                      [
                        6,
                        9
                      ],
                      [
                        60,
                        536870911
                      ],
                      "FOO",
                      "BAR"
                    ]
                  },
                  TestOneof: {
                    oneofs: {
                      device: {
                        oneof: [
                          "deviceType",
                          "customDevice"
                        ]
                      }
                    },
                    fields: {
                      id: {
                        type: "string",
                        id: 1
                      },
                      deviceType: {
                        type: "EthicalPreference",
                        id: 11,
                        options: {
                          required: true
                        }
                      },
                      customDevice: {
                        type: "string",
                        id: 12
                      }
                    }
                  },
                  SearchRecipesResponse: {
                    fields: {
                      hit: {
                        rule: "repeated",
                        type: "Hit",
                        id: 1
                      },
                      date: {
                        type: "whisk.api.shared.v1.Date",
                        id: 2
                      },
                      dates: {
                        rule: "repeated",
                        type: "whisk.api.shared.v1.Date",
                        id: 3
                      }
                    },
                    nested: {
                      MatchedIngredient: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      Hit: {
                        fields: {
                          content: {
                            type: "MatchedIngredient",
                            id: 1,
                            options: {
                              deprecated: true
                            }
                          },
                          ingredients: {
                            rule: "repeated",
                            type: "MatchedIngredient",
                            id: 2,
                            options: {
                              required: true
                            }
                          },
                          mapIngredients: {
                            keyType: "string",
                            type: "MatchedIngredient",
                            id: 3
                          },
                          mapExternal: {
                            keyType: "string",
                            type: "TestItem",
                            id: 4
                          }
                        }
                      }
                    }
                  },
                  ApiUpdateBusinessApp: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1
                      },
                      appAny: {
                        type: "TestItem",
                        id: 2
                      },
                      maskAnyName: {
                        type: "google.protobuf.FieldMask",
                        id: 3,
                        options: {
                          required: true,
                          mask: "app_any"
                        }
                      }
                    }
                  },
                  UserAPI: {
                    methods: {
                      GetMe: {
                        requestType: "GetMeRequest",
                        responseType: "GetMeResponse",
                        options: {
                          "(google.api.http).get": "/user/v2/me"
                        }
                      },
                      Get: {
                        requestType: "google.protobuf.Empty",
                        responseType: "GetMeResponse"
                      },
                      UpdateSettings: {
                        requestType: "UpdateSettingsRequest",
                        responseType: "UpdateSettingsResponse",
                        options: {
                          "(google.api.http).patch": "/user/v2/settings",
                          "(google.api.http).body": "*",
                          "(google.api.http).additional_bindings.patch": "/user/v2/settings/{id}",
                          "(google.api.http).additional_bindings.body": "*",
                          "(google.api.http).additional_bindings.put": "/user/v2/settings/{id}",
                          "(google.api.http).additional_bindings.post": "/user/v2/settings/{id}"
                        }
                      }
                    }
                  },
                  GetMeRequest: {
                    fields: {}
                  },
                  GetMeResponse: {
                    fields: {
                      user: {
                        type: "User",
                        id: 1
                      }
                    }
                  },
                  UpdateSettingsRequest: {
                    fields: {
                      settings: {
                        type: "UserSettings",
                        id: 1
                      },
                      id: {
                        type: "string",
                        id: 2
                      },
                      mask: {
                        type: "google.protobuf.FieldMask",
                        id: 3
                      }
                    }
                  },
                  UpdateSettingsResponse: {
                    fields: {
                      user: {
                        type: "User",
                        id: 1
                      }
                    }
                  },
                  ExtractRecipeRequest: {
                    fields: {
                      url: {
                        type: "string",
                        id: 1
                      },
                      recipeMask: {
                        type: "google.protobuf.FieldMask",
                        id: 2
                      }
                    }
                  },
                  SaveRecipeRequest: {
                    fields: {
                      recipeId: {
                        type: "string",
                        id: 1
                      },
                      collectionIds: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      },
                      sourceUserId: {
                        type: "string",
                        id: 3
                      },
                      recipeMask: {
                        type: "google.protobuf.FieldMask",
                        id: 4
                      }
                    }
                  },
                  UpdateRecipeRequest: {
                    fields: {
                      recipeId: {
                        type: "string",
                        id: 1
                      },
                      recipeMask: {
                        type: "google.protobuf.FieldMask",
                        id: 2
                      },
                      updateMask: {
                        type: "google.protobuf.FieldMask",
                        id: 3
                      },
                      payload: {
                        type: "User",
                        id: 4
                      },
                      collectionIds: {
                        rule: "repeated",
                        type: "string",
                        id: 5
                      }
                    }
                  },
                  UpdateListRequest: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1
                      },
                      fields: {
                        type: "Fields",
                        id: 2
                      },
                      mask: {
                        type: "google.protobuf.FieldMask",
                        id: 3
                      }
                    },
                    nested: {
                      Fields: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          primary: {
                            type: "bool",
                            id: 2
                          }
                        }
                      }
                    }
                  },
                  UpdateItemRequest: {
                    fields: {
                      id: {
                        type: "string",
                        id: 1
                      },
                      fields: {
                        type: "Fields",
                        id: 2
                      },
                      mask: {
                        type: "google.protobuf.FieldMask",
                        id: 3
                      },
                      newOrder: {
                        type: "int32",
                        id: 4
                      }
                    },
                    nested: {
                      Fields: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          quantity: {
                            type: "double",
                            id: 2
                          },
                          unit: {
                            type: "string",
                            id: 3
                          },
                          expiryDate: {
                            type: "whisk.api.shared.v1.Date",
                            id: 4
                          },
                          user: {
                            type: "User",
                            id: 5
                          },
                          addedAt: {
                            type: "int64",
                            id: 6
                          }
                        }
                      }
                    }
                  },
                  UpdateSettingsRequestOld: {
                    fields: {
                      settings: {
                        type: "UserSettings",
                        id: 1
                      },
                      mask: {
                        type: "google.protobuf.FieldMask",
                        id: 2
                      }
                    }
                  },
                  UpdateBusinessApp: {
                    fields: {
                      updateMask: {
                        type: "google.protobuf.FieldMask",
                        id: 1
                      },
                      name: {
                        type: "string",
                        id: 3
                      },
                      description: {
                        type: "string",
                        id: 4
                      },
                      user: {
                        type: "User",
                        id: 5
                      },
                      isTest: {
                        type: "bool",
                        id: 7
                      },
                      isTrial: {
                        type: "bool",
                        id: 8
                      }
                    }
                  },
                  UserSettings2: {
                    fields: {
                      nonDefaultMask: {
                        type: "google.protobuf.FieldMask",
                        id: 1
                      },
                      onboarding: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      },
                      firstName: {
                        type: "string",
                        id: 3
                      },
                      lastName: {
                        type: "string",
                        id: 4
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

export { $root as default };
