// Code created by grpc-generator. Version: test
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.google_protobuf_GeneratedCodeInfo_Annotation = exports.google_protobuf_GeneratedCodeInfo = exports.google_protobuf_SourceCodeInfo_Location = exports.google_protobuf_SourceCodeInfo = exports.google_protobuf_UninterpretedOption_NamePart = exports.google_protobuf_UninterpretedOption = exports.google_protobuf_MethodOptions = exports.google_protobuf_MethodOptions_IdempotencyLevel = exports.google_protobuf_ServiceOptions = exports.google_protobuf_EnumValueOptions = exports.google_protobuf_EnumOptions = exports.google_protobuf_OneofOptions = exports.google_protobuf_FieldOptions = exports.google_protobuf_FieldOptions_JSType = exports.google_protobuf_FieldOptions_CType = exports.google_protobuf_MessageOptions = exports.google_protobuf_FileOptions = exports.google_protobuf_FileOptions_OptimizeMode = exports.google_protobuf_MethodDescriptorProto = exports.google_protobuf_ServiceDescriptorProto = exports.google_protobuf_EnumValueDescriptorProto = exports.google_protobuf_EnumDescriptorProto_EnumReservedRange = exports.google_protobuf_EnumDescriptorProto = exports.google_protobuf_OneofDescriptorProto = exports.google_protobuf_FieldDescriptorProto = exports.google_protobuf_FieldDescriptorProto_Label = exports.google_protobuf_FieldDescriptorProto_Type = exports.google_protobuf_ExtensionRangeOptions = exports.google_protobuf_DescriptorProto_ReservedRange = exports.google_protobuf_DescriptorProto_ExtensionRange = exports.google_protobuf_DescriptorProto = exports.google_protobuf_FileDescriptorProto = exports.google_protobuf_FileDescriptorSet = exports.google_protobuf_Mixin = exports.google_protobuf_Method = exports.google_protobuf_Api = exports.google_protobuf_Any = exports.google_api_HttpBody = exports.google_api_CustomHttpPattern = exports.google_api_HttpRule = exports.google_api_Http = exports.whisk_api_user_v2_EthicalPreference = exports.whisk_api_user_v2_BudgetGoal = exports.whisk_api_user_v2_CookingExperience = exports.whisk_api_user_v2_OrganicPreference = exports.whisk_api_user_v2_Gender = exports.whisk_api_user_v2_ActivityLevel = exports.whisk_api_user_v2_HealthGoal = exports.google_protobuf_Syntax = exports.google_protobuf_NullValue = void 0;
exports.whisk_api_user_v2_CookingPreferences_CookingMaxTime = exports.whisk_api_user_v2_CookingPreferences_HouseholdMembers = exports.whisk_api_user_v2_CookingPreferences = exports.whisk_api_user_v2_FoodPreferences_Ingredients = exports.whisk_api_user_v2_FoodPreferences_Dates = exports.whisk_api_user_v2_FoodPreferences = exports.whisk_api_user_v2_Weight = exports.whisk_api_user_v2_Weight_Unit = exports.whisk_api_user_v2_Height = exports.whisk_api_user_v2_Height_Unit = exports.whisk_api_user_v2_PersonalDetails_HealthGoals = exports.whisk_api_user_v2_PersonalDetails = exports.whisk_api_user_v2_UserSettings = exports.whisk_api_user_v2_User = exports.whisk_api_shared_v1_Wrapper = exports.whisk_api_shared_v1_Double = exports.whisk_api_shared_v1_Sign = exports.whisk_api_shared_v1_Big = exports.whisk_api_shared_v1_Primitive = exports.whisk_api_shared_v1_Time = exports.whisk_api_shared_v1_Date = exports.whisk_api_shared_v1_Outer = exports.whisk_api_shared_v1_Inner_InnerInner = exports.whisk_api_shared_v1_Test_Inner = exports.whisk_api_shared_v1_Test = exports.whisk_api_shared_v1_Test_Enum = exports.google_protobuf_BytesValue = exports.google_protobuf_StringValue = exports.google_protobuf_BoolValue = exports.google_protobuf_UInt32Value = exports.google_protobuf_Int32Value = exports.google_protobuf_UInt64Value = exports.google_protobuf_Int64Value = exports.google_protobuf_FloatValue = exports.google_protobuf_DoubleValue = exports.google_protobuf_Option = exports.google_protobuf_EnumValue = exports.google_protobuf_Enum = exports.google_protobuf_Field = exports.google_protobuf_Field_Cardinality = exports.google_protobuf_Field_Kind = exports.google_protobuf_Type = exports.google_protobuf_Timestamp = exports.google_protobuf_ListValue = exports.google_protobuf_Value = exports.google_protobuf_Struct = exports.google_protobuf_SourceContext = exports.google_protobuf_FieldMask = exports.google_protobuf_Empty = exports.google_protobuf_Duration = void 0;
exports.whisk_api_user_v2_UserAPI_UpdateSettings = exports.whisk_api_user_v2_UserAPI_Get = exports.whisk_api_user_v2_UserAPI_GetMe = exports.whisk_api_user_v2_UserSettings2 = exports.whisk_api_user_v2_UpdateBusinessApp = exports.whisk_api_user_v2_UpdateSettingsRequestOld = exports.whisk_api_user_v2_UpdateItemRequest_Fields = exports.whisk_api_user_v2_UpdateItemRequest = exports.whisk_api_user_v2_UpdateListRequest_Fields = exports.whisk_api_user_v2_UpdateListRequest = exports.whisk_api_user_v2_UpdateRecipeRequest = exports.whisk_api_user_v2_SaveRecipeRequest = exports.whisk_api_user_v2_ExtractRecipeRequest = exports.whisk_api_user_v2_UpdateSettingsResponse = exports.whisk_api_user_v2_UpdateSettingsRequest = exports.whisk_api_user_v2_GetMeResponse = exports.whisk_api_user_v2_GetMeRequest = exports.whisk_api_user_v2_ApiUpdateBusinessApp = exports.whisk_api_user_v2_SearchRecipesResponse_Hit = exports.whisk_api_user_v2_SearchRecipesResponse_Empty = exports.whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient = exports.whisk_api_user_v2_SearchRecipesResponse = exports.whisk_api_user_v2_TestEmpty_GlobalRegion = exports.whisk_api_user_v2_TestEmpty = exports.whisk_api_user_v2_TestOneof = exports.whisk_api_user_v2_TestItem = exports.whisk_api_user_v2_Recommendations = exports.whisk_api_user_v2_Ingredient = exports.whisk_api_user_v2_ShoppingPreferences_EthicalPreferences = exports.whisk_api_user_v2_ShoppingPreferences_PreferredRetailers = exports.whisk_api_user_v2_ShoppingPreferences = exports.whisk_api_user_v2_Device = exports.whisk_api_user_v2_Device_DeviceType = exports.whisk_api_user_v2_CookingPreferences_Devices = void 0;
exports.google_protobuf_NullValue = {
    NULL_VALUE: 0,
};
exports.google_protobuf_Syntax = {
    SYNTAX_PROTO2: 0,
    SYNTAX_PROTO3: 1,
};
exports.whisk_api_user_v2_HealthGoal = {
    HEALTH_GOAL_WEIGHT_LOSS: 1,
    HEALTH_GOAL_WEIGHT_GAIN: 2,
    HEALTH_GOAL_BETTER_SLEEP: 3,
    HEALTH_GOAL_INCREASE_ENERGY: 4,
};
exports.whisk_api_user_v2_ActivityLevel = {
    ACTIVITY_LEVEL_VERY_LIGHT: 1,
    ACTIVITY_LEVEL_LIGHT: 2,
    ACTIVITY_LEVEL_MODERATE: 3,
    ACTIVITY_LEVEL_ACTIVE: 4,
    ACTIVITY_LEVEL_VERY_ACTIVE: 5,
};
exports.whisk_api_user_v2_Gender = {
    GENDER_MALE: 1,
    GENDER_FEMALE: 2,
    GENDER_NON_BINARY: 3,
    GENDER_UNDISCLOSED: 4,
};
exports.whisk_api_user_v2_OrganicPreference = {
    ORGANIC_PREFERENCE_ORGANIC: 1,
    ORGANIC_PREFERENCE_DONT_CARE: 2,
};
exports.whisk_api_user_v2_CookingExperience = {
    COOKING_EXPERIENCE_BEGINNER: 1,
    COOKING_EXPERIENCE_INTERMEDIATE: 2,
    COOKING_EXPERIENCE_ADVANCED: 3,
};
exports.whisk_api_user_v2_BudgetGoal = {
    BUDGET_GOAL_BUDGET_FRIENDLY: 1,
    BUDGET_GOAL_AVERAGE_PRICE: 2,
    BUDGET_GOAL_PREMIUM: 3,
};
exports.whisk_api_user_v2_EthicalPreference = {
    ETHICAL_PREFERENCE_ETHICAL_FISHED: 1,
    ETHICAL_PREFERENCE_GM_FREE: 2,
    ETHICAL_PREFERENCE_BUYING_LOCALLY: 3,
    ETHICAL_PREFERENCE_FAIR_TRADE: 4,
    ETHICAL_PREFERENCE_ENVIRONMENTAL_EFFECT: 5,
    ETHICAL_PREFERENCE_LOW_WASTE_PRODUCTS: 6,
};
var google_api_Http = function () { return [
    [1, "rules", ["repeated", exports.google_api_HttpRule], 1],
    [2, "fullyDecodeReservedExpansion", "bool", 1],
]; };
exports.google_api_Http = google_api_Http;
var google_api_HttpRule = function () { return [
    [1, "selector", "string", 1],
    [2, "get", "string", 1, "pattern"],
    [3, "put", "string", 1, "pattern"],
    [4, "post", "string", 1, "pattern"],
    [5, "delete", "string", 1, "pattern"],
    [6, "patch", "string", 1, "pattern"],
    [8, "custom", exports.google_api_CustomHttpPattern, 0, "pattern"],
    [7, "body", "string", 1],
    [12, "responseBody", "string", 1],
    [11, "additionalBindings", ["repeated", exports.google_api_HttpRule], 1],
]; };
exports.google_api_HttpRule = google_api_HttpRule;
var google_api_CustomHttpPattern = function () { return [
    [1, "kind", "string", 1],
    [2, "path", "string", 1],
]; };
exports.google_api_CustomHttpPattern = google_api_CustomHttpPattern;
var google_api_HttpBody = function () { return [
    [1, "contentType", "string", 1],
    [2, "data", "bytes", 1],
    [3, "extensions", ["repeated", exports.google_protobuf_Any], 1],
]; };
exports.google_api_HttpBody = google_api_HttpBody;
var google_protobuf_Any = function () { return [
    [1, "typeUrl", "string", 1],
    [2, "value", "bytes", 1],
]; };
exports.google_protobuf_Any = google_protobuf_Any;
var google_protobuf_Api = function () { return [
    [1, "name", "string", 1],
    [2, "methods", ["repeated", exports.google_protobuf_Method], 1],
    [3, "options", ["repeated", exports.google_protobuf_Option], 1],
    [4, "version", "string", 1],
    [5, "sourceContext", exports.google_protobuf_SourceContext, 0],
    [6, "mixins", ["repeated", exports.google_protobuf_Mixin], 1],
    [7, "syntax", "enum", 0],
]; };
exports.google_protobuf_Api = google_protobuf_Api;
var google_protobuf_Method = function () { return [
    [1, "name", "string", 1],
    [2, "requestTypeUrl", "string", 1],
    [3, "requestStreaming", "bool", 1],
    [4, "responseTypeUrl", "string", 1],
    [5, "responseStreaming", "bool", 1],
    [6, "options", ["repeated", exports.google_protobuf_Option], 1],
    [7, "syntax", "enum", 0],
]; };
exports.google_protobuf_Method = google_protobuf_Method;
var google_protobuf_Mixin = function () { return [
    [1, "name", "string", 1],
    [2, "root", "string", 1],
]; };
exports.google_protobuf_Mixin = google_protobuf_Mixin;
var google_protobuf_FileDescriptorSet = function () { return [
    [1, "file", ["repeated", exports.google_protobuf_FileDescriptorProto], 1],
]; };
exports.google_protobuf_FileDescriptorSet = google_protobuf_FileDescriptorSet;
var google_protobuf_FileDescriptorProto = function () { return [
    [1, "name", "string", 0],
    [2, "package", "string", 0],
    [3, "dependency", ["repeated", "string"], 1],
    [10, "publicDependency", ["repeated", "int32"], 1],
    [11, "weakDependency", ["repeated", "int32"], 1],
    [4, "messageType", ["repeated", exports.google_protobuf_DescriptorProto], 1],
    [5, "enumType", ["repeated", exports.google_protobuf_EnumDescriptorProto], 1],
    [6, "service", ["repeated", exports.google_protobuf_ServiceDescriptorProto], 1],
    [7, "extension", ["repeated", exports.google_protobuf_FieldDescriptorProto], 1],
    [8, "options", exports.google_protobuf_FileOptions, 0],
    [9, "sourceCodeInfo", exports.google_protobuf_SourceCodeInfo, 0],
    [12, "syntax", "string", 0],
]; };
exports.google_protobuf_FileDescriptorProto = google_protobuf_FileDescriptorProto;
var google_protobuf_DescriptorProto = function () { return [
    [1, "name", "string", 0],
    [2, "field", ["repeated", exports.google_protobuf_FieldDescriptorProto], 1],
    [6, "extension", ["repeated", exports.google_protobuf_FieldDescriptorProto], 1],
    [3, "nestedType", ["repeated", exports.google_protobuf_DescriptorProto], 1],
    [4, "enumType", ["repeated", exports.google_protobuf_EnumDescriptorProto], 1],
    [5, "extensionRange", ["repeated", exports.google_protobuf_DescriptorProto_ExtensionRange], 1],
    [8, "oneofDecl", ["repeated", exports.google_protobuf_OneofDescriptorProto], 1],
    [7, "options", exports.google_protobuf_MessageOptions, 0],
    [9, "reservedRange", ["repeated", exports.google_protobuf_DescriptorProto_ReservedRange], 1],
    [10, "reservedName", ["repeated", "string"], 1],
]; };
exports.google_protobuf_DescriptorProto = google_protobuf_DescriptorProto;
var google_protobuf_DescriptorProto_ExtensionRange = function () { return [
    [1, "start", "int32", 0],
    [2, "end", "int32", 0],
    [3, "options", exports.google_protobuf_ExtensionRangeOptions, 0],
]; };
exports.google_protobuf_DescriptorProto_ExtensionRange = google_protobuf_DescriptorProto_ExtensionRange;
var google_protobuf_DescriptorProto_ReservedRange = function () { return [
    [1, "start", "int32", 0],
    [2, "end", "int32", 0],
]; };
exports.google_protobuf_DescriptorProto_ReservedRange = google_protobuf_DescriptorProto_ReservedRange;
var google_protobuf_ExtensionRangeOptions = function () { return [
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_ExtensionRangeOptions = google_protobuf_ExtensionRangeOptions;
exports.google_protobuf_FieldDescriptorProto_Type = {
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
};
exports.google_protobuf_FieldDescriptorProto_Label = {
    LABEL_OPTIONAL: 1,
    LABEL_REQUIRED: 2,
    LABEL_REPEATED: 3,
};
var google_protobuf_FieldDescriptorProto = function () { return [
    [1, "name", "string", 0],
    [3, "number", "int32", 0],
    [4, "label", "enum", 0],
    [5, "type", "enum", 0],
    [6, "typeName", "string", 0],
    [2, "extendee", "string", 0],
    [7, "defaultValue", "string", 0],
    [9, "oneofIndex", "int32", 0],
    [10, "jsonName", "string", 0],
    [8, "options", exports.google_protobuf_FieldOptions, 0],
    [17, "proto3Optional", "bool", 0],
]; };
exports.google_protobuf_FieldDescriptorProto = google_protobuf_FieldDescriptorProto;
var google_protobuf_OneofDescriptorProto = function () { return [
    [1, "name", "string", 0],
    [2, "options", exports.google_protobuf_OneofOptions, 0],
]; };
exports.google_protobuf_OneofDescriptorProto = google_protobuf_OneofDescriptorProto;
var google_protobuf_EnumDescriptorProto = function () { return [
    [1, "name", "string", 0],
    [2, "value", ["repeated", exports.google_protobuf_EnumValueDescriptorProto], 1],
    [3, "options", exports.google_protobuf_EnumOptions, 0],
    [4, "reservedRange", ["repeated", exports.google_protobuf_EnumDescriptorProto_EnumReservedRange], 1],
    [5, "reservedName", ["repeated", "string"], 1],
]; };
exports.google_protobuf_EnumDescriptorProto = google_protobuf_EnumDescriptorProto;
var google_protobuf_EnumDescriptorProto_EnumReservedRange = function () { return [
    [1, "start", "int32", 0],
    [2, "end", "int32", 0],
]; };
exports.google_protobuf_EnumDescriptorProto_EnumReservedRange = google_protobuf_EnumDescriptorProto_EnumReservedRange;
var google_protobuf_EnumValueDescriptorProto = function () { return [
    [1, "name", "string", 0],
    [2, "number", "int32", 0],
    [3, "options", exports.google_protobuf_EnumValueOptions, 0],
]; };
exports.google_protobuf_EnumValueDescriptorProto = google_protobuf_EnumValueDescriptorProto;
var google_protobuf_ServiceDescriptorProto = function () { return [
    [1, "name", "string", 0],
    [2, "method", ["repeated", exports.google_protobuf_MethodDescriptorProto], 1],
    [3, "options", exports.google_protobuf_ServiceOptions, 0],
]; };
exports.google_protobuf_ServiceDescriptorProto = google_protobuf_ServiceDescriptorProto;
var google_protobuf_MethodDescriptorProto = function () { return [
    [1, "name", "string", 0],
    [2, "inputType", "string", 0],
    [3, "outputType", "string", 0],
    [4, "options", exports.google_protobuf_MethodOptions, 0],
    [5, "clientStreaming", "bool", 0],
    [6, "serverStreaming", "bool", 0],
]; };
exports.google_protobuf_MethodDescriptorProto = google_protobuf_MethodDescriptorProto;
exports.google_protobuf_FileOptions_OptimizeMode = {
    SPEED: 1,
    CODE_SIZE: 2,
    LITE_RUNTIME: 3,
};
var google_protobuf_FileOptions = function () { return [
    [1, "javaPackage", "string", 0],
    [8, "javaOuterClassname", "string", 0],
    [10, "javaMultipleFiles", "bool", 0],
    [20, "javaGenerateEqualsAndHash", "bool", 0],
    [27, "javaStringCheckUtf8", "bool", 0],
    [9, "optimizeFor", "enum", 0],
    [11, "goPackage", "string", 0],
    [16, "ccGenericServices", "bool", 0],
    [17, "javaGenericServices", "bool", 0],
    [18, "pyGenericServices", "bool", 0],
    [42, "phpGenericServices", "bool", 0],
    [23, "deprecated", "bool", 0],
    [31, "ccEnableArenas", "bool", 0],
    [36, "objcClassPrefix", "string", 0],
    [37, "csharpNamespace", "string", 0],
    [39, "swiftPrefix", "string", 0],
    [40, "phpClassPrefix", "string", 0],
    [41, "phpNamespace", "string", 0],
    [44, "phpMetadataNamespace", "string", 0],
    [45, "rubyPackage", "string", 0],
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_FileOptions = google_protobuf_FileOptions;
var google_protobuf_MessageOptions = function () { return [
    [1, "messageSetWireFormat", "bool", 0],
    [2, "noStandardDescriptorAccessor", "bool", 0],
    [3, "deprecated", "bool", 0],
    [7, "mapEntry", "bool", 0],
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_MessageOptions = google_protobuf_MessageOptions;
exports.google_protobuf_FieldOptions_CType = {
    STRING: 0,
    CORD: 1,
    STRING_PIECE: 2,
};
exports.google_protobuf_FieldOptions_JSType = {
    JS_NORMAL: 0,
    JS_STRING: 1,
    JS_NUMBER: 2,
};
var google_protobuf_FieldOptions = function () { return [
    [1, "ctype", "enum", 0],
    [2, "packed", "bool", 0],
    [6, "jstype", "enum", 0],
    [5, "lazy", "bool", 0],
    [3, "deprecated", "bool", 0],
    [10, "weak", "bool", 0],
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_FieldOptions = google_protobuf_FieldOptions;
var google_protobuf_OneofOptions = function () { return [
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_OneofOptions = google_protobuf_OneofOptions;
var google_protobuf_EnumOptions = function () { return [
    [2, "allowAlias", "bool", 0],
    [3, "deprecated", "bool", 0],
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_EnumOptions = google_protobuf_EnumOptions;
var google_protobuf_EnumValueOptions = function () { return [
    [1, "deprecated", "bool", 0],
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_EnumValueOptions = google_protobuf_EnumValueOptions;
var google_protobuf_ServiceOptions = function () { return [
    [33, "deprecated", "bool", 0],
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_ServiceOptions = google_protobuf_ServiceOptions;
exports.google_protobuf_MethodOptions_IdempotencyLevel = {
    IDEMPOTENCY_UNKNOWN: 0,
    NO_SIDE_EFFECTS: 1,
    IDEMPOTENT: 2,
};
var google_protobuf_MethodOptions = function () { return [
    [33, "deprecated", "bool", 0],
    [34, "idempotencyLevel", "enum", 0],
    [999, "uninterpretedOption", ["repeated", exports.google_protobuf_UninterpretedOption], 1],
]; };
exports.google_protobuf_MethodOptions = google_protobuf_MethodOptions;
var google_protobuf_UninterpretedOption = function () { return [
    [2, "name", ["repeated", exports.google_protobuf_UninterpretedOption_NamePart], 1],
    [3, "identifierValue", "string", 0],
    [4, "positiveIntValue", "uint64", 0],
    [5, "negativeIntValue", "int64", 0],
    [6, "doubleValue", "double", 0],
    [7, "stringValue", "bytes", 0],
    [8, "aggregateValue", "string", 0],
]; };
exports.google_protobuf_UninterpretedOption = google_protobuf_UninterpretedOption;
var google_protobuf_UninterpretedOption_NamePart = function () { return [
    [1, "namePart", "string", 1],
    [2, "isExtension", "bool", 1],
]; };
exports.google_protobuf_UninterpretedOption_NamePart = google_protobuf_UninterpretedOption_NamePart;
var google_protobuf_SourceCodeInfo = function () { return [
    [1, "location", ["repeated", exports.google_protobuf_SourceCodeInfo_Location], 1],
]; };
exports.google_protobuf_SourceCodeInfo = google_protobuf_SourceCodeInfo;
var google_protobuf_SourceCodeInfo_Location = function () { return [
    [1, "path", ["repeated", "int32"], 1],
    [2, "span", ["repeated", "int32"], 1],
    [3, "leadingComments", "string", 0],
    [4, "trailingComments", "string", 0],
    [6, "leadingDetachedComments", ["repeated", "string"], 1],
]; };
exports.google_protobuf_SourceCodeInfo_Location = google_protobuf_SourceCodeInfo_Location;
var google_protobuf_GeneratedCodeInfo = function () { return [
    [1, "annotation", ["repeated", exports.google_protobuf_GeneratedCodeInfo_Annotation], 1],
]; };
exports.google_protobuf_GeneratedCodeInfo = google_protobuf_GeneratedCodeInfo;
var google_protobuf_GeneratedCodeInfo_Annotation = function () { return [
    [1, "path", ["repeated", "int32"], 1],
    [2, "sourceFile", "string", 0],
    [3, "begin", "int32", 0],
    [4, "end", "int32", 0],
]; };
exports.google_protobuf_GeneratedCodeInfo_Annotation = google_protobuf_GeneratedCodeInfo_Annotation;
var google_protobuf_Duration = function () { return [
    [1, "seconds", "int64", 1],
    [2, "nanos", "int32", 1],
]; };
exports.google_protobuf_Duration = google_protobuf_Duration;
var google_protobuf_Empty = function () { return []; };
exports.google_protobuf_Empty = google_protobuf_Empty;
var google_protobuf_FieldMask = function () { return [
    [1, "paths", ["repeated", "string"], 1],
]; };
exports.google_protobuf_FieldMask = google_protobuf_FieldMask;
var google_protobuf_SourceContext = function () { return [
    [1, "fileName", "string", 1],
]; };
exports.google_protobuf_SourceContext = google_protobuf_SourceContext;
var google_protobuf_Struct = function () { return [
    [1, "fields", ["map", "string", exports.google_protobuf_Value], 1],
]; };
exports.google_protobuf_Struct = google_protobuf_Struct;
var google_protobuf_Value = function () { return [
    [1, "nullValue", "enum", 0, "kind"],
    [2, "numberValue", "double", 1, "kind"],
    [3, "stringValue", "string", 1, "kind"],
    [4, "boolValue", "bool", 1, "kind"],
    [5, "structValue", exports.google_protobuf_Struct, 0, "kind"],
    [6, "listValue", exports.google_protobuf_ListValue, 0, "kind"],
]; };
exports.google_protobuf_Value = google_protobuf_Value;
var google_protobuf_ListValue = function () { return [
    [1, "values", ["repeated", exports.google_protobuf_Value], 1],
]; };
exports.google_protobuf_ListValue = google_protobuf_ListValue;
var google_protobuf_Timestamp = function () { return [
    [1, "seconds", "int64", 1],
    [2, "nanos", "int32", 1],
]; };
exports.google_protobuf_Timestamp = google_protobuf_Timestamp;
var google_protobuf_Type = function () { return [
    [1, "name", "string", 1],
    [2, "fields", ["repeated", exports.google_protobuf_Field], 1],
    [3, "oneofs", ["repeated", "string"], 1],
    [4, "options", ["repeated", exports.google_protobuf_Option], 1],
    [5, "sourceContext", exports.google_protobuf_SourceContext, 0],
    [6, "syntax", "enum", 0],
]; };
exports.google_protobuf_Type = google_protobuf_Type;
exports.google_protobuf_Field_Kind = {
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
};
exports.google_protobuf_Field_Cardinality = {
    CARDINALITY_UNKNOWN: 0,
    CARDINALITY_OPTIONAL: 1,
    CARDINALITY_REQUIRED: 2,
    CARDINALITY_REPEATED: 3,
};
var google_protobuf_Field = function () { return [
    [1, "kind", "enum", 0],
    [2, "cardinality", "enum", 0],
    [3, "number", "int32", 1],
    [4, "name", "string", 1],
    [6, "typeUrl", "string", 1],
    [7, "oneofIndex", "int32", 1],
    [8, "packed", "bool", 1],
    [9, "options", ["repeated", exports.google_protobuf_Option], 1],
    [10, "jsonName", "string", 1],
    [11, "defaultValue", "string", 1],
]; };
exports.google_protobuf_Field = google_protobuf_Field;
var google_protobuf_Enum = function () { return [
    [1, "name", "string", 1],
    [2, "enumvalue", ["repeated", exports.google_protobuf_EnumValue], 1],
    [3, "options", ["repeated", exports.google_protobuf_Option], 1],
    [4, "sourceContext", exports.google_protobuf_SourceContext, 0],
    [5, "syntax", "enum", 0],
]; };
exports.google_protobuf_Enum = google_protobuf_Enum;
var google_protobuf_EnumValue = function () { return [
    [1, "name", "string", 1],
    [2, "number", "int32", 1],
    [3, "options", ["repeated", exports.google_protobuf_Option], 1],
]; };
exports.google_protobuf_EnumValue = google_protobuf_EnumValue;
var google_protobuf_Option = function () { return [
    [1, "name", "string", 1],
    [2, "value", exports.google_protobuf_Any, 0],
]; };
exports.google_protobuf_Option = google_protobuf_Option;
var google_protobuf_DoubleValue = function () { return [
    [1, "value", "double", 1],
]; };
exports.google_protobuf_DoubleValue = google_protobuf_DoubleValue;
var google_protobuf_FloatValue = function () { return [
    [1, "value", "float", 1],
]; };
exports.google_protobuf_FloatValue = google_protobuf_FloatValue;
var google_protobuf_Int64Value = function () { return [
    [1, "value", "int64", 1],
]; };
exports.google_protobuf_Int64Value = google_protobuf_Int64Value;
var google_protobuf_UInt64Value = function () { return [
    [1, "value", "uint64", 1],
]; };
exports.google_protobuf_UInt64Value = google_protobuf_UInt64Value;
var google_protobuf_Int32Value = function () { return [
    [1, "value", "int32", 1],
]; };
exports.google_protobuf_Int32Value = google_protobuf_Int32Value;
var google_protobuf_UInt32Value = function () { return [
    [1, "value", "uint32", 1],
]; };
exports.google_protobuf_UInt32Value = google_protobuf_UInt32Value;
var google_protobuf_BoolValue = function () { return [
    [1, "value", "bool", 1],
]; };
exports.google_protobuf_BoolValue = google_protobuf_BoolValue;
var google_protobuf_StringValue = function () { return [
    [1, "value", "string", 1],
]; };
exports.google_protobuf_StringValue = google_protobuf_StringValue;
var google_protobuf_BytesValue = function () { return [
    [1, "value", "bytes", 1],
]; };
exports.google_protobuf_BytesValue = google_protobuf_BytesValue;
exports.whisk_api_shared_v1_Test_Enum = {
    ONE: 0,
    TWO: 1,
    THREE: 2,
    FOUR: 3,
    FIVE: 4,
};
var whisk_api_shared_v1_Test = function () { return [
    [1, "string", "string", 1],
    [2, "uint32", "uint32", 1],
    [3, "inner", exports.whisk_api_shared_v1_Test_Inner, 0],
    [4, "float", "float", 1],
]; };
exports.whisk_api_shared_v1_Test = whisk_api_shared_v1_Test;
var whisk_api_shared_v1_Test_Inner = function () { return [
    [1, "int32", "int32", 1],
    [2, "innerInner", exports.whisk_api_shared_v1_Inner_InnerInner, 0],
    [3, "outer", exports.whisk_api_shared_v1_Outer, 0],
]; };
exports.whisk_api_shared_v1_Test_Inner = whisk_api_shared_v1_Test_Inner;
var whisk_api_shared_v1_Inner_InnerInner = function () { return [
    [1, "long", "int64", 1],
    [2, "enum", "enum", 0],
    [3, "sint32", "sint32", 1],
]; };
exports.whisk_api_shared_v1_Inner_InnerInner = whisk_api_shared_v1_Inner_InnerInner;
var whisk_api_shared_v1_Outer = function () { return [
    [1, "bool", ["repeated", "bool"], 1],
    [2, "double", "double", 1],
    [3, "uint32", ["repeated", "uint32"], 1],
    [4, "string", ["repeated", "string"], 1],
]; };
exports.whisk_api_shared_v1_Outer = whisk_api_shared_v1_Outer;
var whisk_api_shared_v1_Date = function () { return [
    [1, "year", "int32", 1],
    [2, "month", "int32", 1],
    [3, "day", "int32", 1],
]; };
exports.whisk_api_shared_v1_Date = whisk_api_shared_v1_Date;
var whisk_api_shared_v1_Time = function () { return [
    [1, "time", "int64", 1],
    [2, "nano", ["wrapper", "uint32"], 0],
]; };
exports.whisk_api_shared_v1_Time = whisk_api_shared_v1_Time;
var whisk_api_shared_v1_Primitive = function () { return [
    [1, "double", "double", 1],
    [2, "float", "float", 1],
    [3, "int32", "int32", 1],
    [4, "int64", "int64", 1],
    [5, "uint32", "uint32", 1],
    [6, "uint64", "uint64", 1],
    [7, "sint32", "sint32", 1],
    [8, "sint64", "sint64", 1],
    [9, "fixed32", "fixed32", 1],
    [10, "fixed64", "fixed64", 1],
    [11, "sfixed32", "sfixed32", 1],
    [12, "sfixed64", "sfixed64", 1],
    [13, "bool", "bool", 1],
    [14, "string", "string", 1],
    [15, "bytes", "bytes", 1],
]; };
exports.whisk_api_shared_v1_Primitive = whisk_api_shared_v1_Primitive;
var whisk_api_shared_v1_Big = function () { return [
    [1, "b", "int64", 1],
]; };
exports.whisk_api_shared_v1_Big = whisk_api_shared_v1_Big;
var whisk_api_shared_v1_Sign = function () { return [
    [1, "b", "sint64", 1],
]; };
exports.whisk_api_shared_v1_Sign = whisk_api_shared_v1_Sign;
var whisk_api_shared_v1_Double = function () { return [
    [1, "d", "double", 1],
]; };
exports.whisk_api_shared_v1_Double = whisk_api_shared_v1_Double;
var whisk_api_shared_v1_Wrapper = function () { return [
    [1, "double", ["wrapper", "double"], 0],
    [2, "float", ["wrapper", "float"], 0],
    [3, "int64", ["wrapper", "int64"], 0],
    [4, "uint64", ["wrapper", "uint64"], 0],
    [5, "int32", ["wrapper", "int32"], 0],
    [6, "uint32", ["wrapper", "uint32"], 0],
    [7, "bool", ["wrapper", "bool"], 0],
    [8, "string", ["wrapper", "string"], 0],
    [9, "bytes", ["wrapper", "bytes"], 0],
]; };
exports.whisk_api_shared_v1_Wrapper = whisk_api_shared_v1_Wrapper;
var whisk_api_user_v2_User = function () { return [
    [1, "id", "string", 1],
    [2, "email", "string", 1],
    [3, "phone", "string", 1],
    [4, "userSettings", exports.whisk_api_user_v2_UserSettings, 0],
    [5, "hasPassword", "bool", 1],
    [6, "recommendations", exports.whisk_api_user_v2_Recommendations, 0],
    [7, "mapHealthGoal", ["map", "string", "enum"], 1],
    [8, "mapIngredient", ["map", "string", exports.whisk_api_user_v2_Ingredient], 1],
]; };
exports.whisk_api_user_v2_User = whisk_api_user_v2_User;
var whisk_api_user_v2_UserSettings = function () { return [
    [1, "personalDetails", exports.whisk_api_user_v2_PersonalDetails, 0],
    [2, "foodPreferences", exports.whisk_api_user_v2_FoodPreferences, 0],
    [3, "cookingPreferences", exports.whisk_api_user_v2_CookingPreferences, 0],
    [4, "shoppingPreferences", exports.whisk_api_user_v2_ShoppingPreferences, 0],
]; };
exports.whisk_api_user_v2_UserSettings = whisk_api_user_v2_UserSettings;
var whisk_api_user_v2_PersonalDetails = function () { return [
    [1, "firstName", "string", 1],
    [2, "lastName", "string", 1],
    [3, "photoUrl", "string", 1],
    [4, "gender", "enum", 0],
    [5, "country", "string", 1],
    [6, "zipcode", "string", 1],
    [7, "language", "string", 1],
    [8, "activityLevel", "enum", 0],
    [9, "age", "int32", 1],
    [10, "height", exports.whisk_api_user_v2_Height, 0],
    [11, "weight", exports.whisk_api_user_v2_Weight, 0],
    [12, "healthGoals", exports.whisk_api_user_v2_PersonalDetails_HealthGoals, 0],
    [13, "yearOfBirth", "int32", 1],
]; };
exports.whisk_api_user_v2_PersonalDetails = whisk_api_user_v2_PersonalDetails;
var whisk_api_user_v2_PersonalDetails_HealthGoals = function () { return [
    [1, "list", ["repeated", "enum"], 1],
]; };
exports.whisk_api_user_v2_PersonalDetails_HealthGoals = whisk_api_user_v2_PersonalDetails_HealthGoals;
exports.whisk_api_user_v2_Height_Unit = {
    UNIT_CM: 1,
    UNIT_INCH: 2,
};
var whisk_api_user_v2_Height = function () { return [
    [1, "value", "double", 1],
    [2, "unit", "enum", 0],
]; };
exports.whisk_api_user_v2_Height = whisk_api_user_v2_Height;
exports.whisk_api_user_v2_Weight_Unit = {
    UNIT_KG: 1,
    UNIT_POUND: 2,
};
var whisk_api_user_v2_Weight = function () { return [
    [1, "value", "double", 1],
    [2, "unit", "enum", 0],
]; };
exports.whisk_api_user_v2_Weight = whisk_api_user_v2_Weight;
var whisk_api_user_v2_FoodPreferences = function () { return [
    [1, "diets", "string", 1],
    [2, "avoidanceList", ["repeated", "string"], 1],
    [3, "dislikedIngredients", exports.whisk_api_user_v2_FoodPreferences_Ingredients, 0],
    [4, "organicPreference", "enum", 0],
    [5, "nutritionPreferences", ["repeated", "double"], 1],
    [6, "preferredIngredients", exports.whisk_api_user_v2_FoodPreferences_Ingredients, 0],
]; };
exports.whisk_api_user_v2_FoodPreferences = whisk_api_user_v2_FoodPreferences;
var whisk_api_user_v2_FoodPreferences_Dates = function () { return [
    [1, "list", ["repeated", exports.whisk_api_shared_v1_Date], 1],
]; };
exports.whisk_api_user_v2_FoodPreferences_Dates = whisk_api_user_v2_FoodPreferences_Dates;
var whisk_api_user_v2_FoodPreferences_Ingredients = function () { return [
    [1, "list", ["repeated", exports.whisk_api_user_v2_Ingredient], 1],
]; };
exports.whisk_api_user_v2_FoodPreferences_Ingredients = whisk_api_user_v2_FoodPreferences_Ingredients;
var whisk_api_user_v2_CookingPreferences = function () { return [
    [1, "householdAdults", exports.whisk_api_user_v2_CookingPreferences_HouseholdMembers, 0],
    [2, "householdChildren", exports.whisk_api_user_v2_CookingPreferences_HouseholdMembers, 0],
    [4, "cookingExperience", "enum", 0],
    [5, "cookingMaxTime", exports.whisk_api_user_v2_CookingPreferences_CookingMaxTime, 0],
    [6, "userDevices", exports.whisk_api_user_v2_CookingPreferences_Devices, 0],
]; };
exports.whisk_api_user_v2_CookingPreferences = whisk_api_user_v2_CookingPreferences;
var whisk_api_user_v2_CookingPreferences_HouseholdMembers = function () { return [
    [1, "size", "int32", 1],
]; };
exports.whisk_api_user_v2_CookingPreferences_HouseholdMembers = whisk_api_user_v2_CookingPreferences_HouseholdMembers;
var whisk_api_user_v2_CookingPreferences_CookingMaxTime = function () { return [
    [1, "time", "int32", 1],
]; };
exports.whisk_api_user_v2_CookingPreferences_CookingMaxTime = whisk_api_user_v2_CookingPreferences_CookingMaxTime;
var whisk_api_user_v2_CookingPreferences_Devices = function () { return [
    [1, "list", exports.whisk_api_user_v2_Device, 0],
]; };
exports.whisk_api_user_v2_CookingPreferences_Devices = whisk_api_user_v2_CookingPreferences_Devices;
exports.whisk_api_user_v2_Device_DeviceType = {
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
};
var whisk_api_user_v2_Device = function () { return [
    [1, "deviceType", "enum", 0, "oneof"],
    [2, "customDevice", "enum", 0, "oneof"],
]; };
exports.whisk_api_user_v2_Device = whisk_api_user_v2_Device;
var whisk_api_user_v2_ShoppingPreferences = function () { return [
    [1, "preferredRetailers", exports.whisk_api_user_v2_ShoppingPreferences_PreferredRetailers, 0],
    [2, "budgetGoal", "enum", 0],
    [3, "ethicalPreferences", exports.whisk_api_user_v2_ShoppingPreferences_EthicalPreferences, 0],
]; };
exports.whisk_api_user_v2_ShoppingPreferences = whisk_api_user_v2_ShoppingPreferences;
var whisk_api_user_v2_ShoppingPreferences_PreferredRetailers = function () { return [
    [1, "retailers", ["repeated", "string"], 1],
]; };
exports.whisk_api_user_v2_ShoppingPreferences_PreferredRetailers = whisk_api_user_v2_ShoppingPreferences_PreferredRetailers;
var whisk_api_user_v2_ShoppingPreferences_EthicalPreferences = function () { return [
    [1, "list", ["repeated", "enum"], 1],
]; };
exports.whisk_api_user_v2_ShoppingPreferences_EthicalPreferences = whisk_api_user_v2_ShoppingPreferences_EthicalPreferences;
var whisk_api_user_v2_Ingredient = function () { return [
    [1, "name", "string", 1],
    [2, "canonicalName", "string", 1],
]; };
exports.whisk_api_user_v2_Ingredient = whisk_api_user_v2_Ingredient;
var whisk_api_user_v2_Recommendations = function () { return [
    [1, "dailyCalories", "int32", 1],
]; };
exports.whisk_api_user_v2_Recommendations = whisk_api_user_v2_Recommendations;
var whisk_api_user_v2_TestItem = function () { return [
    [1, "id", "string", 1],
    [2, "name", "string", 1],
    [3, "surname", "string", 0],
    [10, "description", ["wrapper", "string"], 0],
    [11, "test", ["wrapper", "string"], 1],
    [12, "array", ["repeated", ["wrapper", "string"]], 1],
    [13, "story", "string", 0],
    [30, "time", exports.whisk_api_shared_v1_Time, 0],
    [31, "date", exports.whisk_api_shared_v1_Date, 1],
    [40, "searches", ["repeated", exports.whisk_api_user_v2_SearchRecipesResponse], 1],
    [41, "mapSearch", ["map", "string", exports.whisk_api_user_v2_SearchRecipesResponse], 1],
    [42, "search", exports.whisk_api_user_v2_SearchRecipesResponse, 0],
    [43, "extraInformation", ["map", "string", "string"], 1],
]; };
exports.whisk_api_user_v2_TestItem = whisk_api_user_v2_TestItem;
var whisk_api_user_v2_TestOneof = function () { return [
    [1, "id", "string", 1],
    [11, "deviceType", "enum", 1, "device"],
    [12, "customDevice", "string", 1, "device"],
]; };
exports.whisk_api_user_v2_TestOneof = whisk_api_user_v2_TestOneof;
var whisk_api_user_v2_TestEmpty = function () { return [
    [1, "id", "string", 1],
    [2, "global", exports.whisk_api_user_v2_TestEmpty_GlobalRegion, 1, "item"],
    [3, "any", exports.whisk_api_user_v2_TestEmpty_GlobalRegion, 0, "item"],
    [4, "local", "string", 1, "item"],
]; };
exports.whisk_api_user_v2_TestEmpty = whisk_api_user_v2_TestEmpty;
var whisk_api_user_v2_TestEmpty_GlobalRegion = function () { return []; };
exports.whisk_api_user_v2_TestEmpty_GlobalRegion = whisk_api_user_v2_TestEmpty_GlobalRegion;
var whisk_api_user_v2_SearchRecipesResponse = function () { return [
    [1, "hit", ["repeated", exports.whisk_api_user_v2_SearchRecipesResponse_Hit], 1],
    [2, "date", exports.whisk_api_shared_v1_Date, 0],
    [3, "dates", ["repeated", exports.whisk_api_shared_v1_Date], 1],
    [4, "empty", exports.whisk_api_user_v2_SearchRecipesResponse_Empty, 0],
]; };
exports.whisk_api_user_v2_SearchRecipesResponse = whisk_api_user_v2_SearchRecipesResponse;
var whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient = function () { return [
    [1, "name", "string", 1],
]; };
exports.whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient = whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient;
var whisk_api_user_v2_SearchRecipesResponse_Empty = function () { return []; };
exports.whisk_api_user_v2_SearchRecipesResponse_Empty = whisk_api_user_v2_SearchRecipesResponse_Empty;
var whisk_api_user_v2_SearchRecipesResponse_Hit = function () { return [
    [1, "content", exports.whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient, 0],
    [2, "ingredients", ["repeated", exports.whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient], 1],
    [3, "mapIngredients", ["map", "string", exports.whisk_api_user_v2_SearchRecipesResponse_MatchedIngredient], 1],
    [4, "mapExternal", ["map", "string", exports.whisk_api_user_v2_TestItem], 1],
]; };
exports.whisk_api_user_v2_SearchRecipesResponse_Hit = whisk_api_user_v2_SearchRecipesResponse_Hit;
var whisk_api_user_v2_ApiUpdateBusinessApp = function () { return [
    [1, "id", "string", 1],
    [2, "appAny", exports.whisk_api_user_v2_TestItem, 0],
    [3, "maskAnyName", exports.google_protobuf_FieldMask, 1],
]; };
exports.whisk_api_user_v2_ApiUpdateBusinessApp = whisk_api_user_v2_ApiUpdateBusinessApp;
var whisk_api_user_v2_GetMeRequest = function () { return []; };
exports.whisk_api_user_v2_GetMeRequest = whisk_api_user_v2_GetMeRequest;
var whisk_api_user_v2_GetMeResponse = function () { return [
    [1, "user", exports.whisk_api_user_v2_User, 0],
]; };
exports.whisk_api_user_v2_GetMeResponse = whisk_api_user_v2_GetMeResponse;
var whisk_api_user_v2_UpdateSettingsRequest = function () { return [
    [1, "settings", exports.whisk_api_user_v2_UserSettings, 0],
    [2, "id", "string", 1],
    [3, "mask", exports.google_protobuf_FieldMask, 0],
]; };
exports.whisk_api_user_v2_UpdateSettingsRequest = whisk_api_user_v2_UpdateSettingsRequest;
var whisk_api_user_v2_UpdateSettingsResponse = function () { return [
    [1, "user", exports.whisk_api_user_v2_User, 0],
]; };
exports.whisk_api_user_v2_UpdateSettingsResponse = whisk_api_user_v2_UpdateSettingsResponse;
var whisk_api_user_v2_ExtractRecipeRequest = function () { return [
    [1, "url", "string", 1],
    [2, "recipeMask", exports.google_protobuf_FieldMask, 0],
]; };
exports.whisk_api_user_v2_ExtractRecipeRequest = whisk_api_user_v2_ExtractRecipeRequest;
var whisk_api_user_v2_SaveRecipeRequest = function () { return [
    [1, "recipeId", "string", 1],
    [2, "collectionIds", ["repeated", "string"], 1],
    [3, "sourceUserId", "string", 1],
    [4, "recipeMask", exports.google_protobuf_FieldMask, 0],
]; };
exports.whisk_api_user_v2_SaveRecipeRequest = whisk_api_user_v2_SaveRecipeRequest;
var whisk_api_user_v2_UpdateRecipeRequest = function () { return [
    [1, "recipeId", "string", 1],
    [2, "recipeMask", exports.google_protobuf_FieldMask, 0],
    [3, "updateMask", exports.google_protobuf_FieldMask, 0],
    [4, "payload", exports.whisk_api_user_v2_User, 0],
    [5, "collectionIds", ["repeated", "string"], 1],
]; };
exports.whisk_api_user_v2_UpdateRecipeRequest = whisk_api_user_v2_UpdateRecipeRequest;
var whisk_api_user_v2_UpdateListRequest = function () { return [
    [1, "id", "string", 1],
    [2, "fields", exports.whisk_api_user_v2_UpdateListRequest_Fields, 0],
    [3, "mask", exports.google_protobuf_FieldMask, 0],
]; };
exports.whisk_api_user_v2_UpdateListRequest = whisk_api_user_v2_UpdateListRequest;
var whisk_api_user_v2_UpdateListRequest_Fields = function () { return [
    [1, "name", "string", 1],
    [2, "primary", "bool", 1],
]; };
exports.whisk_api_user_v2_UpdateListRequest_Fields = whisk_api_user_v2_UpdateListRequest_Fields;
var whisk_api_user_v2_UpdateItemRequest = function () { return [
    [1, "id", "string", 1],
    [2, "fields", exports.whisk_api_user_v2_UpdateListRequest_Fields, 0],
    [3, "mask", exports.google_protobuf_FieldMask, 0],
    [4, "newOrder", "int32", 1],
]; };
exports.whisk_api_user_v2_UpdateItemRequest = whisk_api_user_v2_UpdateItemRequest;
var whisk_api_user_v2_UpdateItemRequest_Fields = function () { return [
    [1, "name", "string", 1],
    [2, "quantity", "double", 1],
    [3, "unit", "string", 1],
    [4, "expiryDate", exports.whisk_api_shared_v1_Date, 0],
    [5, "user", exports.whisk_api_user_v2_User, 0],
    [6, "addedAt", "int64", 1],
]; };
exports.whisk_api_user_v2_UpdateItemRequest_Fields = whisk_api_user_v2_UpdateItemRequest_Fields;
var whisk_api_user_v2_UpdateSettingsRequestOld = function () { return [
    [1, "settings", exports.whisk_api_user_v2_UserSettings, 0],
    [2, "mask", exports.google_protobuf_FieldMask, 0],
]; };
exports.whisk_api_user_v2_UpdateSettingsRequestOld = whisk_api_user_v2_UpdateSettingsRequestOld;
var whisk_api_user_v2_UpdateBusinessApp = function () { return [
    [1, "updateMask", exports.google_protobuf_FieldMask, 0],
    [3, "name", "string", 1],
    [4, "description", "string", 1],
    [5, "user", exports.whisk_api_user_v2_User, 0],
    [7, "isTest", "bool", 1],
    [8, "isTrial", "bool", 1],
]; };
exports.whisk_api_user_v2_UpdateBusinessApp = whisk_api_user_v2_UpdateBusinessApp;
var whisk_api_user_v2_UserSettings2 = function () { return [
    [1, "nonDefaultMask", exports.google_protobuf_FieldMask, 0],
    [2, "onboarding", ["repeated", "string"], 1],
    [3, "firstName", "string", 1],
    [4, "lastName", "string", 1],
]; };
exports.whisk_api_user_v2_UserSettings2 = whisk_api_user_v2_UserSettings2;
exports.whisk_api_user_v2_UserAPI_GetMe = {
    name: "whisk.api.user.v2.UserAPI/GetMe",
    encode: exports.whisk_api_user_v2_GetMeRequest,
    decode: exports.whisk_api_user_v2_GetMeResponse,
};
exports.whisk_api_user_v2_UserAPI_Get = {
    name: "whisk.api.user.v2.UserAPI/Get",
    encode: exports.google_protobuf_Empty,
    decode: exports.whisk_api_user_v2_GetMeResponse,
};
exports.whisk_api_user_v2_UserAPI_UpdateSettings = {
    name: "whisk.api.user.v2.UserAPI/UpdateSettings",
    encode: exports.whisk_api_user_v2_UpdateSettingsRequest,
    decode: exports.whisk_api_user_v2_UpdateSettingsResponse,
};
