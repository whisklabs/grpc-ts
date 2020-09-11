// Code created by grpc-generator. Version: test
import {
  FieldMap,
  FieldRepeated,
  FieldType,
  FieldItem,
  Field,
  FieldEmpty,
  FieldGet,
  Service,
  ServiceRequest,
  ServiceResponse,
  Values
} from '../../src';

export const google_protobuf_NullValue = {
  NULL_VALUE: 0,
} as const;
export type google_protobuf_NullValue = Values<typeof google_protobuf_NullValue>;
export const google_protobuf_Syntax = {
  SYNTAX_PROTO2: 0,
  SYNTAX_PROTO3: 1,
} as const;
export type google_protobuf_Syntax = Values<typeof google_protobuf_Syntax>;
export const whisk_api_user_v2_HealthGoal = {
  HEALTH_GOAL_WEIGHT_LOSS: 1,
  HEALTH_GOAL_WEIGHT_GAIN: 2,
  HEALTH_GOAL_BETTER_SLEEP: 3,
  HEALTH_GOAL_INCREASE_ENERGY: 4,
} as const;
export type whisk_api_user_v2_HealthGoal = Values<typeof whisk_api_user_v2_HealthGoal>;
export const whisk_api_user_v2_ActivityLevel = {
  ACTIVITY_LEVEL_VERY_LIGHT: 1,
  ACTIVITY_LEVEL_LIGHT: 2,
  ACTIVITY_LEVEL_MODERATE: 3,
  ACTIVITY_LEVEL_ACTIVE: 4,
  ACTIVITY_LEVEL_VERY_ACTIVE: 5,
} as const;
export type whisk_api_user_v2_ActivityLevel = Values<typeof whisk_api_user_v2_ActivityLevel>;
export const whisk_api_user_v2_Gender = {
  GENDER_MALE: 1,
  GENDER_FEMALE: 2,
  GENDER_NON_BINARY: 3,
  GENDER_UNDISCLOSED: 4,
} as const;
export type whisk_api_user_v2_Gender = Values<typeof whisk_api_user_v2_Gender>;
export const whisk_api_user_v2_OrganicPreference = {
  ORGANIC_PREFERENCE_ORGANIC: 1,
  ORGANIC_PREFERENCE_DONT_CARE: 2,
} as const;
export type whisk_api_user_v2_OrganicPreference = Values<typeof whisk_api_user_v2_OrganicPreference>;
export const whisk_api_user_v2_CookingExperience = {
  COOKING_EXPERIENCE_BEGINNER: 1,
  COOKING_EXPERIENCE_INTERMEDIATE: 2,
  COOKING_EXPERIENCE_ADVANCED: 3,
} as const;
export type whisk_api_user_v2_CookingExperience = Values<typeof whisk_api_user_v2_CookingExperience>;
export const whisk_api_user_v2_BudgetGoal = {
  BUDGET_GOAL_BUDGET_FRIENDLY: 1,
  BUDGET_GOAL_AVERAGE_PRICE: 2,
  BUDGET_GOAL_PREMIUM: 3,
} as const;
export type whisk_api_user_v2_BudgetGoal = Values<typeof whisk_api_user_v2_BudgetGoal>;
export const whisk_api_user_v2_EthicalPreference = {
  ETHICAL_PREFERENCE_ETHICAL_FISHED: 1,
  ETHICAL_PREFERENCE_GM_FREE: 2,
  ETHICAL_PREFERENCE_BUYING_LOCALLY: 3,
  ETHICAL_PREFERENCE_FAIR_TRADE: 4,
  ETHICAL_PREFERENCE_ENVIRONMENTAL_EFFECT: 5,
  ETHICAL_PREFERENCE_LOW_WASTE_PRODUCTS: 6,
} as const;
export type whisk_api_user_v2_EthicalPreference = Values<typeof whisk_api_user_v2_EthicalPreference>;
export type google_api_Http = {
  rules: google_api_HttpRule[];
  fullyDecodeReservedExpansion: boolean;
};
export const google_api_Http: Field<google_api_Http>;
export type google_api_HttpRule = {
  selector: string;
  body: string;
  responseBody: string;
  additionalBindings: google_api_HttpRule[];
  pattern?:
    | { oneof: 'get'; value: string; }
    | { oneof: 'put'; value: string; }
    | { oneof: 'post'; value: string; }
    | { oneof: 'delete'; value: string; }
    | { oneof: 'patch'; value: string; }
    | { oneof: 'custom'; value?: google_api_CustomHttpPattern; };
};
export const google_api_HttpRule: Field<google_api_HttpRule>;
export type google_api_CustomHttpPattern = {
  kind: string;
  path: string;
};
export const google_api_CustomHttpPattern: Field<google_api_CustomHttpPattern>;
export type google_api_HttpBody = {
  contentType: string;
  data: Uint8Array;
  extensions: google_protobuf_Any[];
};
export const google_api_HttpBody: Field<google_api_HttpBody>;
export type google_protobuf_Any = {
  typeUrl: string;
  value: Uint8Array;
};
export const google_protobuf_Any: Field<google_protobuf_Any>;
export type google_protobuf_Api = {
  name: string;
  methods: google_protobuf_Method[];
  options: google_protobuf_Option[];
  version: string;
  sourceContext?: google_protobuf_SourceContext;
  mixins: google_protobuf_Mixin[];
  syntax?: google_protobuf_Syntax;
};
export const google_protobuf_Api: Field<google_protobuf_Api>;
export type google_protobuf_Method = {
  name: string;
  requestTypeUrl: string;
  requestStreaming: boolean;
  responseTypeUrl: string;
  responseStreaming: boolean;
  options: google_protobuf_Option[];
  syntax?: google_protobuf_Syntax;
};
export const google_protobuf_Method: Field<google_protobuf_Method>;
export type google_protobuf_Mixin = {
  name: string;
  root: string;
};
export const google_protobuf_Mixin: Field<google_protobuf_Mixin>;
export type google_protobuf_FileDescriptorSet = {
  file: google_protobuf_FileDescriptorProto[];
};
export const google_protobuf_FileDescriptorSet: Field<google_protobuf_FileDescriptorSet>;
export type google_protobuf_FileDescriptorProto = {
  name?: string;
  package?: string;
  dependency: string[];
  publicDependency: number[];
  weakDependency: number[];
  messageType: google_protobuf_DescriptorProto[];
  enumType: google_protobuf_EnumDescriptorProto[];
  service: google_protobuf_ServiceDescriptorProto[];
  extension: google_protobuf_FieldDescriptorProto[];
  options?: google_protobuf_FileOptions;
  sourceCodeInfo?: google_protobuf_SourceCodeInfo;
  syntax?: string;
};
export const google_protobuf_FileDescriptorProto: Field<google_protobuf_FileDescriptorProto>;
export type google_protobuf_DescriptorProto = {
  name?: string;
  field: google_protobuf_FieldDescriptorProto[];
  extension: google_protobuf_FieldDescriptorProto[];
  nestedType: google_protobuf_DescriptorProto[];
  enumType: google_protobuf_EnumDescriptorProto[];
  extensionRange: google_protobuf_DescriptorProto_ExtensionRange[];
  oneofDecl: google_protobuf_OneofDescriptorProto[];
  options?: google_protobuf_MessageOptions;
  reservedRange: google_protobuf_DescriptorProto_ReservedRange[];
  reservedName: string[];
};
export const google_protobuf_DescriptorProto: Field<google_protobuf_DescriptorProto>;
export type google_protobuf_DescriptorProto_ExtensionRange = {
  start?: number;
  end?: number;
  options?: google_protobuf_ExtensionRangeOptions;
};
export const google_protobuf_DescriptorProto_ExtensionRange: Field<google_protobuf_DescriptorProto_ExtensionRange>;
export type google_protobuf_DescriptorProto_ReservedRange = {
  start?: number;
  end?: number;
};
export const google_protobuf_DescriptorProto_ReservedRange: Field<google_protobuf_DescriptorProto_ReservedRange>;
export type google_protobuf_ExtensionRangeOptions = {
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_ExtensionRangeOptions: Field<google_protobuf_ExtensionRangeOptions>;
export const google_protobuf_FieldDescriptorProto_Type = {
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
  TYPE_SINT64: 18,
} as const;
export type google_protobuf_FieldDescriptorProto_Type = Values<typeof google_protobuf_FieldDescriptorProto_Type>;
export const google_protobuf_FieldDescriptorProto_Label = {
  LABEL_OPTIONAL: 1,
  LABEL_REQUIRED: 2,
  LABEL_REPEATED: 3,
} as const;
export type google_protobuf_FieldDescriptorProto_Label = Values<typeof google_protobuf_FieldDescriptorProto_Label>;
export type google_protobuf_FieldDescriptorProto = {
  name?: string;
  number?: number;
  label?: google_protobuf_FieldDescriptorProto_Label;
  type?: google_protobuf_FieldDescriptorProto_Type;
  typeName?: string;
  extendee?: string;
  defaultValue?: string;
  oneofIndex?: number;
  jsonName?: string;
  options?: google_protobuf_FieldOptions;
  proto3Optional?: boolean;
};
export const google_protobuf_FieldDescriptorProto: Field<google_protobuf_FieldDescriptorProto>;
export type google_protobuf_OneofDescriptorProto = {
  name?: string;
  options?: google_protobuf_OneofOptions;
};
export const google_protobuf_OneofDescriptorProto: Field<google_protobuf_OneofDescriptorProto>;
export type google_protobuf_EnumDescriptorProto = {
  name?: string;
  value: google_protobuf_EnumValueDescriptorProto[];
  options?: google_protobuf_EnumOptions;
  reservedRange: google_protobuf_EnumDescriptorProto_EnumReservedRange[];
  reservedName: string[];
};
export const google_protobuf_EnumDescriptorProto: Field<google_protobuf_EnumDescriptorProto>;
export type google_protobuf_EnumDescriptorProto_EnumReservedRange = {
  start?: number;
  end?: number;
};
export const google_protobuf_EnumDescriptorProto_EnumReservedRange: Field<google_protobuf_EnumDescriptorProto_EnumReservedRange>;
export type google_protobuf_EnumValueDescriptorProto = {
  name?: string;
  number?: number;
  options?: google_protobuf_EnumValueOptions;
};
export const google_protobuf_EnumValueDescriptorProto: Field<google_protobuf_EnumValueDescriptorProto>;
export type google_protobuf_ServiceDescriptorProto = {
  name?: string;
  method: google_protobuf_MethodDescriptorProto[];
  options?: google_protobuf_ServiceOptions;
};
export const google_protobuf_ServiceDescriptorProto: Field<google_protobuf_ServiceDescriptorProto>;
export type google_protobuf_MethodDescriptorProto = {
  name?: string;
  inputType?: string;
  outputType?: string;
  options?: google_protobuf_MethodOptions;
  clientStreaming?: boolean;
  serverStreaming?: boolean;
};
export const google_protobuf_MethodDescriptorProto: Field<google_protobuf_MethodDescriptorProto>;
export const google_protobuf_FileOptions_OptimizeMode = {
  SPEED: 1,
  CODE_SIZE: 2,
  LITE_RUNTIME: 3,
} as const;
export type google_protobuf_FileOptions_OptimizeMode = Values<typeof google_protobuf_FileOptions_OptimizeMode>;
export type google_protobuf_FileOptions = {
  javaPackage?: string;
  javaOuterClassname?: string;
  javaMultipleFiles?: boolean;
  /**  @deprecated */
  javaGenerateEqualsAndHash?: boolean;
  javaStringCheckUtf8?: boolean;
  optimizeFor?: google_protobuf_FileOptions_OptimizeMode;
  goPackage?: string;
  ccGenericServices?: boolean;
  javaGenericServices?: boolean;
  pyGenericServices?: boolean;
  phpGenericServices?: boolean;
  deprecated?: boolean;
  ccEnableArenas?: boolean;
  objcClassPrefix?: string;
  csharpNamespace?: string;
  swiftPrefix?: string;
  phpClassPrefix?: string;
  phpNamespace?: string;
  phpMetadataNamespace?: string;
  rubyPackage?: string;
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_FileOptions: Field<google_protobuf_FileOptions>;
export type google_protobuf_MessageOptions = {
  messageSetWireFormat?: boolean;
  noStandardDescriptorAccessor?: boolean;
  deprecated?: boolean;
  mapEntry?: boolean;
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_MessageOptions: Field<google_protobuf_MessageOptions>;
export const google_protobuf_FieldOptions_CType = {
  STRING: 0,
  CORD: 1,
  STRING_PIECE: 2,
} as const;
export type google_protobuf_FieldOptions_CType = Values<typeof google_protobuf_FieldOptions_CType>;
export const google_protobuf_FieldOptions_JSType = {
  JS_NORMAL: 0,
  JS_STRING: 1,
  JS_NUMBER: 2,
} as const;
export type google_protobuf_FieldOptions_JSType = Values<typeof google_protobuf_FieldOptions_JSType>;
export type google_protobuf_FieldOptions = {
  ctype?: google_protobuf_FieldOptions_CType;
  packed?: boolean;
  jstype?: google_protobuf_FieldOptions_JSType;
  lazy?: boolean;
  deprecated?: boolean;
  weak?: boolean;
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_FieldOptions: Field<google_protobuf_FieldOptions>;
export type google_protobuf_OneofOptions = {
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_OneofOptions: Field<google_protobuf_OneofOptions>;
export type google_protobuf_EnumOptions = {
  allowAlias?: boolean;
  deprecated?: boolean;
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_EnumOptions: Field<google_protobuf_EnumOptions>;
export type google_protobuf_EnumValueOptions = {
  deprecated?: boolean;
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_EnumValueOptions: Field<google_protobuf_EnumValueOptions>;
export type google_protobuf_ServiceOptions = {
  deprecated?: boolean;
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_ServiceOptions: Field<google_protobuf_ServiceOptions>;
export const google_protobuf_MethodOptions_IdempotencyLevel = {
  IDEMPOTENCY_UNKNOWN: 0,
  NO_SIDE_EFFECTS: 1,
  IDEMPOTENT: 2,
} as const;
export type google_protobuf_MethodOptions_IdempotencyLevel = Values<typeof google_protobuf_MethodOptions_IdempotencyLevel>;
export type google_protobuf_MethodOptions = {
  deprecated?: boolean;
  idempotencyLevel?: google_protobuf_MethodOptions_IdempotencyLevel;
  uninterpretedOption: google_protobuf_UninterpretedOption[];
};
export const google_protobuf_MethodOptions: Field<google_protobuf_MethodOptions>;
export type google_protobuf_UninterpretedOption = {
  name: google_protobuf_UninterpretedOption_NamePart[];
  identifierValue?: string;
  positiveIntValue?: number;
  negativeIntValue?: number;
  doubleValue?: number;
  stringValue?: Uint8Array;
  aggregateValue?: string;
};
export const google_protobuf_UninterpretedOption: Field<google_protobuf_UninterpretedOption>;
export type google_protobuf_UninterpretedOption_NamePart = {
  namePart: string;
  isExtension: boolean;
};
export const google_protobuf_UninterpretedOption_NamePart: Field<google_protobuf_UninterpretedOption_NamePart>;
export type google_protobuf_SourceCodeInfo = {
  location: google_protobuf_SourceCodeInfo_Location[];
};
export const google_protobuf_SourceCodeInfo: Field<google_protobuf_SourceCodeInfo>;
export type google_protobuf_SourceCodeInfo_Location = {
  path: number[];
  span: number[];
  leadingComments?: string;
  trailingComments?: string;
  leadingDetachedComments: string[];
};
export const google_protobuf_SourceCodeInfo_Location: Field<google_protobuf_SourceCodeInfo_Location>;
export type google_protobuf_GeneratedCodeInfo = {
  annotation: google_protobuf_GeneratedCodeInfo_Annotation[];
};
export const google_protobuf_GeneratedCodeInfo: Field<google_protobuf_GeneratedCodeInfo>;
export type google_protobuf_GeneratedCodeInfo_Annotation = {
  path: number[];
  sourceFile?: string;
  begin?: number;
  end?: number;
};
export const google_protobuf_GeneratedCodeInfo_Annotation: Field<google_protobuf_GeneratedCodeInfo_Annotation>;
export type google_protobuf_Duration = {
  seconds: number;
  nanos: number;
};
export const google_protobuf_Duration: Field<google_protobuf_Duration>;
export type google_protobuf_Empty = FieldEmpty;
export const google_protobuf_Empty: Field<google_protobuf_Empty>;
export type google_protobuf_FieldMask = {
  paths: string[];
};
export const google_protobuf_FieldMask: Field<google_protobuf_FieldMask>;
export type google_protobuf_SourceContext = {
  fileName: string;
};
export const google_protobuf_SourceContext: Field<google_protobuf_SourceContext>;
export type google_protobuf_Struct = {
  fields: Record<string, google_protobuf_Value>;
};
export const google_protobuf_Struct: Field<google_protobuf_Struct>;
export type google_protobuf_Value = {
  kind?:
    | { oneof: 'nullValue'; value?: google_protobuf_NullValue; }
    | { oneof: 'numberValue'; value: number; }
    | { oneof: 'stringValue'; value: string; }
    | { oneof: 'boolValue'; value: boolean; }
    | { oneof: 'structValue'; value?: google_protobuf_Struct; }
    | { oneof: 'listValue'; value?: google_protobuf_ListValue; };
};
export const google_protobuf_Value: Field<google_protobuf_Value>;
export type google_protobuf_ListValue = {
  values: google_protobuf_Value[];
};
export const google_protobuf_ListValue: Field<google_protobuf_ListValue>;
export type google_protobuf_Timestamp = {
  seconds: number;
  nanos: number;
};
export const google_protobuf_Timestamp: Field<google_protobuf_Timestamp>;
export type google_protobuf_Type = {
  name: string;
  fields: google_protobuf_Field[];
  oneofs: string[];
  options: google_protobuf_Option[];
  sourceContext?: google_protobuf_SourceContext;
  syntax?: google_protobuf_Syntax;
};
export const google_protobuf_Type: Field<google_protobuf_Type>;
export const google_protobuf_Field_Kind = {
  TYPE_UNKNOWN: 0,
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
  TYPE_SINT64: 18,
} as const;
export type google_protobuf_Field_Kind = Values<typeof google_protobuf_Field_Kind>;
export const google_protobuf_Field_Cardinality = {
  CARDINALITY_UNKNOWN: 0,
  CARDINALITY_OPTIONAL: 1,
  CARDINALITY_REQUIRED: 2,
  CARDINALITY_REPEATED: 3,
} as const;
export type google_protobuf_Field_Cardinality = Values<typeof google_protobuf_Field_Cardinality>;
export type google_protobuf_Field = {
  kind?: google_protobuf_Field_Kind;
  cardinality?: google_protobuf_Field_Cardinality;
  number: number;
  name: string;
  typeUrl: string;
  oneofIndex: number;
  packed: boolean;
  options: google_protobuf_Option[];
  jsonName: string;
  defaultValue: string;
};
export const google_protobuf_Field: Field<google_protobuf_Field>;
export type google_protobuf_Enum = {
  name: string;
  enumvalue: google_protobuf_EnumValue[];
  options: google_protobuf_Option[];
  sourceContext?: google_protobuf_SourceContext;
  syntax?: google_protobuf_Syntax;
};
export const google_protobuf_Enum: Field<google_protobuf_Enum>;
export type google_protobuf_EnumValue = {
  name: string;
  number: number;
  options: google_protobuf_Option[];
};
export const google_protobuf_EnumValue: Field<google_protobuf_EnumValue>;
export type google_protobuf_Option = {
  name: string;
  value?: google_protobuf_Any;
};
export const google_protobuf_Option: Field<google_protobuf_Option>;
export type google_protobuf_DoubleValue = {
  value: number;
};
export const google_protobuf_DoubleValue: Field<google_protobuf_DoubleValue>;
export type google_protobuf_FloatValue = {
  value: number;
};
export const google_protobuf_FloatValue: Field<google_protobuf_FloatValue>;
export type google_protobuf_Int64Value = {
  value: number;
};
export const google_protobuf_Int64Value: Field<google_protobuf_Int64Value>;
export type google_protobuf_UInt64Value = {
  value: number;
};
export const google_protobuf_UInt64Value: Field<google_protobuf_UInt64Value>;
export type google_protobuf_Int32Value = {
  value: number;
};
export const google_protobuf_Int32Value: Field<google_protobuf_Int32Value>;
export type google_protobuf_UInt32Value = {
  value: number;
};
export const google_protobuf_UInt32Value: Field<google_protobuf_UInt32Value>;
export type google_protobuf_BoolValue = {
  value: boolean;
};
export const google_protobuf_BoolValue: Field<google_protobuf_BoolValue>;
export type google_protobuf_StringValue = {
  value: string;
};
export const google_protobuf_StringValue: Field<google_protobuf_StringValue>;
export type google_protobuf_BytesValue = {
  value: Uint8Array;
};
export const google_protobuf_BytesValue: Field<google_protobuf_BytesValue>;
export const whisk_api_shared_v1_Test_Enum = {
  ONE: 0,
  TWO: 1,
  THREE: 2,
  FOUR: 3,
  FIVE: 4,
} as const;
export type whisk_api_shared_v1_Test_Enum = Values<typeof whisk_api_shared_v1_Test_Enum>;
export type whisk_api_shared_v1_Test = {
  string: string;
  uint32: number;
  inner?: whisk_api_shared_v1_Test_Inner;
  float: number;
};
export const whisk_api_shared_v1_Test: Field<whisk_api_shared_v1_Test>;
export type whisk_api_shared_v1_Test_Inner = {
  int32: number;
  innerInner?: whisk_api_shared_v1_Inner_InnerInner;
  outer?: whisk_api_shared_v1_Outer;
};
export const whisk_api_shared_v1_Test_Inner: Field<whisk_api_shared_v1_Test_Inner>;
export type whisk_api_shared_v1_Inner_InnerInner = {
  long: number;
  enum?: whisk_api_shared_v1_Test_Enum;
  sint32: number;
};
export const whisk_api_shared_v1_Inner_InnerInner: Field<whisk_api_shared_v1_Inner_InnerInner>;
export type whisk_api_shared_v1_Outer = {
  bool: boolean[];
  double: number;
  uint32: number[];
  string: string[];
};
export const whisk_api_shared_v1_Outer: Field<whisk_api_shared_v1_Outer>;
export type whisk_api_shared_v1_Date = {
  year: number;
  month: number;
  day: number;
};
export const whisk_api_shared_v1_Date: Field<whisk_api_shared_v1_Date>;
export type whisk_api_shared_v1_Time = {
  time: number;
  nano?: number;
};
export const whisk_api_shared_v1_Time: Field<whisk_api_shared_v1_Time>;
export type whisk_api_shared_v1_Primitive = {
  double: number;
  float: number;
  int32: number;
  int64: number;
  uint32: number;
  uint64: number;
  sint32: number;
  sint64: number;
  fixed32: number;
  fixed64: number;
  sfixed32: number;
  sfixed64: number;
  bool: boolean;
  string: string;
  bytes: Uint8Array;
};
export const whisk_api_shared_v1_Primitive: Field<whisk_api_shared_v1_Primitive>;
export type whisk_api_shared_v1_Big = {
  b: number;
};
export const whisk_api_shared_v1_Big: Field<whisk_api_shared_v1_Big>;
export type whisk_api_shared_v1_Sign = {
  b: number;
};
export const whisk_api_shared_v1_Sign: Field<whisk_api_shared_v1_Sign>;
export type whisk_api_shared_v1_Double = {
  d: number;
};
export const whisk_api_shared_v1_Double: Field<whisk_api_shared_v1_Double>;
export type whisk_api_shared_v1_Wrapper = {
  double?: number;
  float?: number;
  int64?: number;
  uint64?: number;
  int32?: number;
  uint32?: number;
  bool?: boolean;
  string?: string;
  bytes?: Uint8Array;
};
export const whisk_api_shared_v1_Wrapper: Field<whisk_api_shared_v1_Wrapper>;
export type whisk_api_user_v2_User = {
  id: string;
  email: string;
  phone: string;
  userSettings?: whisk_api_user_v2_UserSettings;
  hasPassword: boolean;
  recommendations?: whisk_api_user_v2_Recommendations;
  mapHealthGoal: Record<string, whisk_api_user_v2_HealthGoal>;
  mapIngredient: Record<string, whisk_api_user_v2_Ingredient>;
};
export const whisk_api_user_v2_User: Field<whisk_api_user_v2_User>;
export type whisk_api_user_v2_UserSettings = {
  personalDetails?: whisk_api_user_v2_PersonalDetails;
  foodPreferences?: whisk_api_user_v2_FoodPreferences;
  cookingPreferences?: whisk_api_user_v2_CookingPreferences;
  shoppingPreferences?: whisk_api_user_v2_ShoppingPreferences;
};
export const whisk_api_user_v2_UserSettings: Field<whisk_api_user_v2_UserSettings>;
export type whisk_api_user_v2_PersonalDetails = {
  firstName: string;
  lastName: string;
  photoUrl: string;
  gender?: whisk_api_user_v2_Gender;
  country: string;
  zipcode: string;
  language: string;
  activityLevel?: whisk_api_user_v2_ActivityLevel;
  /**  @deprecated */
  age: number;
  height?: whisk_api_user_v2_Height;
  weight?: whisk_api_user_v2_Weight;
  healthGoals?: whisk_api_user_v2_PersonalDetails_HealthGoals;
  yearOfBirth: number;
};
export const whisk_api_user_v2_PersonalDetails: Field<whisk_api_user_v2_PersonalDetails>;
export type whisk_api_user_v2_PersonalDetails_HealthGoals = {
  list: whisk_api_user_v2_HealthGoal[];
};
export const whisk_api_user_v2_PersonalDetails_HealthGoals: Field<whisk_api_user_v2_PersonalDetails_HealthGoals>;
export const whisk_api_user_v2_Height_Unit = {
  UNIT_CM: 1,
  UNIT_INCH: 2,
} as const;
export type whisk_api_user_v2_Height_Unit = Values<typeof whisk_api_user_v2_Height_Unit>;
export type whisk_api_user_v2_Height = {
  value: number;
  unit?: whisk_api_user_v2_Height_Unit;
};
export const whisk_api_user_v2_Height: Field<whisk_api_user_v2_Height>;
export const whisk_api_user_v2_Weight_Unit = {
  UNIT_KG: 1,
  UNIT_POUND: 2,
} as const;
export type whisk_api_user_v2_Weight_Unit = Values<typeof whisk_api_user_v2_Weight_Unit>;
export type whisk_api_user_v2_Weight = {
  value: number;
  unit?: whisk_api_user_v2_Height_Unit;
};
export const whisk_api_user_v2_Weight: Field<whisk_api_user_v2_Weight>;
export type whisk_api_user_v2_FoodPreferences = {
  diets: string;
  avoidanceList: string[];
  dislikedIngredients?: whisk_api_user_v2_FoodPreferences_Ingredients;
  organicPreference?: whisk_api_user_v2_OrganicPreference;
  nutritionPreferences: number[];
  preferredIngredients?: whisk_api_user_v2_FoodPreferences_Ingredients;
};
export const whisk_api_user_v2_FoodPreferences: Field<whisk_api_user_v2_FoodPreferences>;
export type whisk_api_user_v2_FoodPreferences_Dates = {
  list: whisk_api_shared_v1_Date[];
};
export const whisk_api_user_v2_FoodPreferences_Dates: Field<whisk_api_user_v2_FoodPreferences_Dates>;
export type whisk_api_user_v2_FoodPreferences_Ingredients = {
  list: whisk_api_user_v2_Ingredient[];
};
export const whisk_api_user_v2_FoodPreferences_Ingredients: Field<whisk_api_user_v2_FoodPreferences_Ingredients>;
export type whisk_api_user_v2_CookingPreferences = {
  householdAdults?: whisk_api_user_v2_CookingPreferences_HouseholdMembers;
  householdChildren?: whisk_api_user_v2_CookingPreferences_HouseholdMembers;
  cookingExperience?: whisk_api_user_v2_CookingExperience;
  cookingMaxTime?: whisk_api_user_v2_CookingPreferences_CookingMaxTime;
  userDevices?: whisk_api_user_v2_CookingPreferences_Devices;
};
export const whisk_api_user_v2_CookingPreferences: Field<whisk_api_user_v2_CookingPreferences>;
export type whisk_api_user_v2_CookingPreferences_HouseholdMembers = {
  size: number;
};
export const whisk_api_user_v2_CookingPreferences_HouseholdMembers: Field<whisk_api_user_v2_CookingPreferences_HouseholdMembers>;
export type whisk_api_user_v2_CookingPreferences_CookingMaxTime = {
  time: number;
};
export const whisk_api_user_v2_CookingPreferences_CookingMaxTime: Field<whisk_api_user_v2_CookingPreferences_CookingMaxTime>;
export type whisk_api_user_v2_CookingPreferences_Devices = {
  list?: whisk_api_user_v2_Device;
};
export const whisk_api_user_v2_CookingPreferences_Devices: Field<whisk_api_user_v2_CookingPreferences_Devices>;
export const whisk_api_user_v2_Device_DeviceType = {
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
  DEVICE_TYPE_MIXER: 13,
} as const;
export type whisk_api_user_v2_Device_DeviceType = Values<typeof whisk_api_user_v2_Device_DeviceType>;
export type whisk_api_user_v2_Device = {
  oneof?:
    | { oneof: 'deviceType'; value?: whisk_api_user_v2_Device_DeviceType; }
    | { oneof: 'customDevice'; value?: whisk_api_user_v2_Device_DeviceType; };
};
export const whisk_api_user_v2_Device: Field<whisk_api_user_v2_Device>;
export type whisk_api_user_v2_ShoppingPreferences = {
  preferredRetailers?: whisk_api_user_v2_ShoppingPreferences_PreferredRetailers;
  budgetGoal?: whisk_api_user_v2_BudgetGoal;
  ethicalPreferences?: whisk_api_user_v2_ShoppingPreferences_EthicalPreferences;
};
export const whisk_api_user_v2_ShoppingPreferences: Field<whisk_api_user_v2_ShoppingPreferences>;
export type whisk_api_user_v2_ShoppingPreferences_PreferredRetailers = {
  retailers: string[];
};
export const whisk_api_user_v2_ShoppingPreferences_PreferredRetailers: Field<whisk_api_user_v2_ShoppingPreferences_PreferredRetailers>;
export type whisk_api_user_v2_ShoppingPreferences_EthicalPreferences = {
  list: whisk_api_user_v2_EthicalPreference[];
};
export const whisk_api_user_v2_ShoppingPreferences_EthicalPreferences: Field<whisk_api_user_v2_ShoppingPreferences_EthicalPreferences>;
export type whisk_api_user_v2_Ingredient = {
  name: string;
  canonicalName: string;
};
export const whisk_api_user_v2_Ingredient: Field<whisk_api_user_v2_Ingredient>;
export type whisk_api_user_v2_Recommendations = {
  dailyCalories: number;
};
export const whisk_api_user_v2_Recommendations: Field<whisk_api_user_v2_Recommendations>;
export type whisk_api_user_v2_TestItem = {
  id: string;
  name: string;
  surname?: string;
  description?: string;
  test: string;
  array: string[];
  story?: string;
  time?: whisk_api_shared_v1_Time;
  date: whisk_api_shared_v1_Date;
  searches: whisk_api_user_v2_SearchRecipesResponse[];
  mapSearch: Record<string, whisk_api_user_v2_SearchRecipesResponse>;
  search?: whisk_api_user_v2_SearchRecipesResponse;
  extraInformation: Record<string, string>;
};
export const whisk_api_user_v2_TestItem: Field<whisk_api_user_v2_TestItem>;
export type whisk_api_user_v2_TestOneof = {
  id: string;
  device?:
    | { oneof: 'deviceType'; value: whisk_api_user_v2_EthicalPreference; }
    | { oneof: 'customDevice'; value: string; };
};
export const whisk_api_user_v2_TestOneof: Field<whisk_api_user_v2_TestOneof>;
export type whisk_api_user_v2_SearchRecipesResponse = {
  hit: whisk_api_user_v2_SearchRecipesResponse_Hit[];
  date?: whisk_api_shared_v1_Date;
  dates: whisk_api_shared_v1_Date[];
};
export const whisk_api_user_v2_SearchRecipesResponse: Field<whisk_api_user_v2_SearchRecipesResponse>;
export type whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient = {
  name: string;
};
export const whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient: Field<whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient>;
export type whisk_api_user_v2_SearchRecipesResponse_Hit = {
  /**  @deprecated */
  content?: whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient;
  ingredients: whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient[];
  mapIngredients: Record<string, whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient>;
  mapExternal: Record<string, whisk_api_user_v2_TestItem>;
};
export const whisk_api_user_v2_SearchRecipesResponse_Hit: Field<whisk_api_user_v2_SearchRecipesResponse_Hit>;
export type whisk_api_user_v2_ApiUpdateBusinessApp = {
  id: string;
  appAny?: whisk_api_user_v2_TestItem;
  maskAnyName: google_protobuf_FieldMask;
};
export const whisk_api_user_v2_ApiUpdateBusinessApp: Field<whisk_api_user_v2_ApiUpdateBusinessApp>;
export type whisk_api_user_v2_GetMeRequest = FieldEmpty;
export const whisk_api_user_v2_GetMeRequest: Field<whisk_api_user_v2_GetMeRequest>;
export type whisk_api_user_v2_GetMeResponse = {
  user?: whisk_api_user_v2_User;
};
export const whisk_api_user_v2_GetMeResponse: Field<whisk_api_user_v2_GetMeResponse>;
export type whisk_api_user_v2_UpdateSettingsRequest = {
  settings?: whisk_api_user_v2_UserSettings;
  id: string;
  mask?: google_protobuf_FieldMask;
};
export const whisk_api_user_v2_UpdateSettingsRequest: Field<whisk_api_user_v2_UpdateSettingsRequest>;
export type whisk_api_user_v2_UpdateSettingsResponse = {
  user?: whisk_api_user_v2_User;
};
export const whisk_api_user_v2_UpdateSettingsResponse: Field<whisk_api_user_v2_UpdateSettingsResponse>;
export type whisk_api_user_v2_ExtractRecipeRequest = {
  url: string;
  recipeMask?: google_protobuf_FieldMask;
};
export const whisk_api_user_v2_ExtractRecipeRequest: Field<whisk_api_user_v2_ExtractRecipeRequest>;
export type whisk_api_user_v2_SaveRecipeRequest = {
  recipeId: string;
  collectionIds: string[];
  sourceUserId: string;
  recipeMask?: google_protobuf_FieldMask;
};
export const whisk_api_user_v2_SaveRecipeRequest: Field<whisk_api_user_v2_SaveRecipeRequest>;
export type whisk_api_user_v2_UpdateRecipeRequest = {
  recipeId: string;
  recipeMask?: google_protobuf_FieldMask;
  updateMask?: google_protobuf_FieldMask;
  payload?: whisk_api_user_v2_User;
  collectionIds: string[];
};
export const whisk_api_user_v2_UpdateRecipeRequest: Field<whisk_api_user_v2_UpdateRecipeRequest>;
export type whisk_api_user_v2_UpdateListRequest = {
  id: string;
  fields?: whisk_api_user_v2_UpdateListRequest_Fields;
  mask?: google_protobuf_FieldMask;
};
export const whisk_api_user_v2_UpdateListRequest: Field<whisk_api_user_v2_UpdateListRequest>;
export type whisk_api_user_v2_UpdateListRequest_Fields = {
  name: string;
  primary: boolean;
};
export const whisk_api_user_v2_UpdateListRequest_Fields: Field<whisk_api_user_v2_UpdateListRequest_Fields>;
export type whisk_api_user_v2_UpdateItemRequest = {
  id: string;
  fields?: whisk_api_user_v2_UpdateListRequest_Fields;
  mask?: google_protobuf_FieldMask;
  newOrder: number;
};
export const whisk_api_user_v2_UpdateItemRequest: Field<whisk_api_user_v2_UpdateItemRequest>;
export type whisk_api_user_v2_UpdateItemRequest_Fields = {
  name: string;
  quantity: number;
  unit: string;
  expiryDate?: whisk_api_shared_v1_Date;
  user?: whisk_api_user_v2_User;
  addedAt: number;
};
export const whisk_api_user_v2_UpdateItemRequest_Fields: Field<whisk_api_user_v2_UpdateItemRequest_Fields>;
export type whisk_api_user_v2_UpdateSettingsRequestOld = {
  settings?: whisk_api_user_v2_UserSettings;
  mask?: google_protobuf_FieldMask;
};
export const whisk_api_user_v2_UpdateSettingsRequestOld: Field<whisk_api_user_v2_UpdateSettingsRequestOld>;
export type whisk_api_user_v2_UpdateBusinessApp = {
  updateMask?: google_protobuf_FieldMask;
  name: string;
  description: string;
  user?: whisk_api_user_v2_User;
  isTest: boolean;
  isTrial: boolean;
};
export const whisk_api_user_v2_UpdateBusinessApp: Field<whisk_api_user_v2_UpdateBusinessApp>;
export type whisk_api_user_v2_UserSettings2 = {
  nonDefaultMask?: google_protobuf_FieldMask;
  onboarding: string[];
  firstName: string;
  lastName: string;
};
export const whisk_api_user_v2_UserSettings2: Field<whisk_api_user_v2_UserSettings2>;
export type whisk_api_user_v2_UserAPI_GetMe = Service<Field<whisk_api_user_v2_GetMeRequest>, Field<whisk_api_user_v2_GetMeResponse>>;
export const whisk_api_user_v2_UserAPI_GetMe: whisk_api_user_v2_UserAPI_GetMe;
export type whisk_api_user_v2_UserAPI_Get = Service<Field<google_protobuf_Empty>, Field<whisk_api_user_v2_GetMeResponse>>;
export const whisk_api_user_v2_UserAPI_Get: whisk_api_user_v2_UserAPI_Get;
export type whisk_api_user_v2_UserAPI_UpdateSettings = Service<Field<whisk_api_user_v2_UpdateSettingsRequest>, Field<whisk_api_user_v2_UpdateSettingsResponse>>;
export const whisk_api_user_v2_UserAPI_UpdateSettings: whisk_api_user_v2_UserAPI_UpdateSettings;