"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48311],{54412:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new font palette.","params":[],"returns":[{"desc":"","lua_type":"FontPallete"}],"function_type":"static","source":{"line":24,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"GetFontNames","desc":"Gets all available font names","params":[],"returns":[{"desc":"","lua_type":"{ string }"}],"function_type":"method","source":{"line":41,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"ObserveFontNames","desc":"Observes all available font names as they are added starting with\\nexisting fonts.","params":[],"returns":[{"desc":"","lua_type":"Observable<string>"}],"function_type":"method","source":{"line":51,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"GetFont","desc":"Gets a font from name","params":[{"name":"fontName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Enum.Font"}],"function_type":"method","source":{"line":70,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"ObserveFont","desc":"Observes a font from name","params":[{"name":"fontName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Observe<Enum.Font>"}],"function_type":"method","source":{"line":82,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"ObserveFontFace","desc":"Observes the curent font face defined for the font name","params":[{"name":"fontName","desc":"","lua_type":"string"},{"name":"weight","desc":"","lua_type":"FontWeight | Observable<FontWeight> | nil"},{"name":"style","desc":"","lua_type":"FontStyle | Observable<FontStyle> | nil"}],"returns":[{"desc":"","lua_type":"Observable<Font>"}],"function_type":"method","source":{"line":96,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"GetFontFaceValue","desc":"Gets a font value object for a given font.","params":[{"name":"fontName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"ValueObject<Enum.Font>"}],"function_type":"method","source":{"line":120,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"GetFontValue","desc":"Gets a font value object for a given font.","params":[{"name":"fontName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"ValueObject<Enum.Font>"}],"function_type":"method","source":{"line":137,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"GetDefaultFontMap","desc":"Gets the default font map","params":[],"returns":[{"desc":"","lua_type":"{ string: Font }"}],"function_type":"method","source":{"line":152,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}},{"name":"DefineFont","desc":"Defines a new font into the palette which can be changed over time.","params":[{"name":"fontName","desc":"","lua_type":"string"},{"name":"defaultFont","desc":"","lua_type":"Enum.Font | Font"}],"returns":[{"desc":"","lua_type":"ValueObject<Enum.Font | Font>"}],"function_type":"method","source":{"line":163,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}}],"properties":[],"types":[],"name":"FontPalette","desc":"Holds fonts for reuse by giving fonts a semantic name. This makes theming easier in general.","source":{"line":6,"path":"src/colorpalette/src/Shared/Font/FontPalette.lua"}}')}}]);