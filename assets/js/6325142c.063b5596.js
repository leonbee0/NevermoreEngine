"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48132],{20795:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new setting definition which defines the name and the defaultValue","params":[{"name":"settingName","desc":"","lua_type":"string"},{"name":"defaultValue","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"SettingDefinition<T>"}],"function_type":"static","source":{"line":40,"path":"src/settings/src/Shared/Setting/SettingDefinition.lua"}},{"name":"GetSettingProperty","desc":"Gets a new setting property for the given definition","params":[{"name":"serviceBag","desc":"","lua_type":"ServiceBag"},{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"SettingProperty<T>"}],"function_type":"method","source":{"line":61,"path":"src/settings/src/Shared/Setting/SettingDefinition.lua"}},{"name":"GetLocalPlayerSettingProperty","desc":"Gets a new setting property for the given definition","params":[{"name":"serviceBag","desc":"","lua_type":"ServiceBag"}],"returns":[{"desc":"","lua_type":"SettingProperty<T>"}],"function_type":"method","source":{"line":74,"path":"src/settings/src/Shared/Setting/SettingDefinition.lua"}},{"name":"GetSettingName","desc":"Retrieves the default name of the setting","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":84,"path":"src/settings/src/Shared/Setting/SettingDefinition.lua"}},{"name":"GetDefaultValue","desc":"Retrieves the default value for the setting","params":[],"returns":[{"desc":"","lua_type":"T"}],"function_type":"method","source":{"line":92,"path":"src/settings/src/Shared/Setting/SettingDefinition.lua"}}],"properties":[],"types":[],"name":"SettingDefinition","desc":"These settings definitions are used to define a setting and register them on both the client and server. See\\n[SettingDefinitionProvider] for more details on grouping these.\\n\\nNotably a setting is basically anything on the client that can be stored on the server by the client, and that\\nrelatively minimal validation is required upon. This can be both user-set settings, as well as very temporary\\ndata.\\n\\n```lua\\nlocal SettingDefinition = require(\\"SettingDefinition\\")\\n\\nreturn require(\\"SettingDefinitionProvider\\").new({\\n\\tSettingDefinition.new(\\"LastTimeUpdateSeen\\", 0);\\n\\tSettingDefinition.new(\\"LastTimeShopSeen\\", 0);\\n})\\n```","source":{"line":20,"path":"src/settings/src/Shared/Setting/SettingDefinition.lua"}}')}}]);