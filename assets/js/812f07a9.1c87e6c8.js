"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30953],{94108:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new Spring at the position and target specified, of type T.\\n\\n```lua\\n-- Linear spring\\nlocal linearSpring = Spring.new(0)\\n\\n-- Vector2 spring\\nlocal vector2Spring = Spring.new(Vector2.zero)\\n\\n-- Vector3 spring\\nlocal vector3Spring = Spring.new(Vector3.zero)\\n```","params":[{"name":"initial","desc":"The initial parameter is a number or Vector3 (anything with * number and addition/subtraction).","lua_type":"T"},{"name":"clock?","desc":"The clock function is optional, and is used to update the spring","lua_type":"() -> number"}],"returns":[{"desc":"","lua_type":"Spring<T>"}],"function_type":"static","source":{"line":49,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"Impulse","desc":"Impulses the spring, increasing velocity by the amount given. This is useful to make something shake,\\nlike a Mac password box failing.","params":[{"name":"velocity","desc":"The velocity to impulse with","lua_type":"T"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":70,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"TimeSkip","desc":"Instantly skips the spring forwards by that amount time","params":[{"name":"delta","desc":"Time to skip forwards","lua_type":"number"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":79,"path":"src/spring/src/Shared/Spring.lua"}}],"properties":[{"name":"Position","desc":"The current position at the given clock time. Assigning the position will change the spring to have that position.\\n\\n```lua\\nlocal spring = Spring.new(0)\\nprint(spring.Position) --\x3e 0\\n```","lua_type":"T","source":{"line":98,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"p","desc":"Alias for [Spring.Position](/api/Spring#Position)","lua_type":"T","source":{"line":104,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"Velocity","desc":"The current velocity. Assigning the velocity will change the spring to have that velocity.\\n\\n```lua\\nlocal spring = Spring.new(0)\\nprint(spring.Velocity) --\x3e 0\\n```","lua_type":"T","source":{"line":115,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"v","desc":"Alias for [Spring.Velocity](/api/Spring#Velocity)","lua_type":"T","source":{"line":121,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"Target","desc":"The current target. Assigning the target will change the spring to have that target.\\n\\n```lua\\nlocal spring = Spring.new(0)\\nprint(spring.Target) --\x3e 0\\n```","lua_type":"T","source":{"line":132,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"t","desc":"Alias for [Spring.Target](/api/Spring#Target)","lua_type":"T","source":{"line":137,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"Damper","desc":"The current damper, defaults to 1. At 1 the spring is critically damped. At less than 1, it\\nwill be underdamped, and thus, bounce, and at over 1, it will be critically damped.","lua_type":"number","source":{"line":144,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"d","desc":"Alias for [Spring.Damper](/api/Spring#Damper)","lua_type":"number","source":{"line":150,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"Speed","desc":"The speed, defaults to 1, but should be between [0, infinity)","lua_type":"number","source":{"line":156,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"s","desc":"Alias for [Spring.Speed](/api/Spring#Speed)","lua_type":"number","source":{"line":162,"path":"src/spring/src/Shared/Spring.lua"}},{"name":"Clock","desc":"The current clock object to syncronize the spring against.","lua_type":"() -> number","source":{"line":168,"path":"src/spring/src/Shared/Spring.lua"}}],"types":[],"name":"Spring","desc":"A physical model of a spring, useful in many applications.\\n\\nA spring is an object that will compute based upon Hooke\'s law. Properties only evaluate\\nupon index making this model good for lazy applications.\\n\\n```lua\\nlocal RunService = game:GetService(\\"RunService\\")\\nlocal UserInputService = game:GetService(\\"UserInputService\\")\\n\\nlocal spring = Spring.new(Vector3.zero)\\n\\nRunService.RenderStepped:Connect(function()\\n\\tif UserInputService:IsKeyDown(Enum.KeyCode.W) then\\n\\t\\tspring.Target = Vector3.new(0, 0, 1)\\n\\telse\\n\\t\\tspring.Target = Vector3.zero\\n\\tend\\n\\n\\tprint(spring.Position) -- A smoothed out version of the input keycode W\\nend)\\n```\\n\\nA good visualization can be found here, provided by Defaultio:\\nhttps://www.desmos.com/calculator/hn2i9shxbz","source":{"line":29,"path":"src/spring/src/Shared/Spring.lua"}}')}}]);