"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52496],{58780:e=>{e.exports=JSON.parse('{"functions":[{"name":"New","desc":"Creates a new function which will return an observable that, given the props\\nin question, will construct a new instance and assign all props. This is the\\nequivalent of a pipe-able Rx command.\\n\\n```lua\\nBlend.New \\"ScreenGui\\" {\\n\\tParent = game.Players.LocalPlayer.PlayerGui;\\n\\t[Blend.Children] = {\\n\\t\\tBlend.New \\"Frame\\" {\\n\\t\\t\\tSize = UDim2.new(1, 0, 1, 0);\\n\\t\\t\\tBackgroundTransparency = 0.5;\\n\\t\\t};\\n\\t};\\n};\\n\\n```","params":[{"name":"className","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"(props: { [string]: any; }) -> Observable<Instance>"}],"function_type":"static","source":{"line":49,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"State","desc":"Creates a new Blend State which is actually just a ValueObject underneath.","params":[{"name":"defaultValue","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"ValueObject<T>"}],"function_type":"static","source":{"line":82,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"Throttled","desc":"Throttles the update to the end of the defer lane. Can help optimize scenarios when\\nCompute() can trigger multiple times per a frame.\\n\\nGenerally not needed.","params":[{"name":"observable","desc":"","lua_type":"Observable<T>"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":95,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"Shared","desc":"Shares this observables state/computation with all down-stream observables. This can be useful\\nwhen a very expensive computation was done and needs to be shared.\\n\\nGenerally not needed.","params":[{"name":"observable","desc":"","lua_type":"Observable<T>"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":110,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"Computed","desc":"Takes a list of variables and uses them to compute an observable that\\nwill combine into any value. These variables can be any value, and if they\\ncan be converted into an Observable, they will be, which will be used to compute\\nthe value.\\n\\n```lua\\nlocal verbState = Blend.State(\\"hi\\")\\nlocal nameState = Blend.State(\\"alice\\")\\n\\nlocal computed = Blend.Computed(verbState, nameState, function(verb, name)\\n\\treturn verb .. \\" \\" .. name\\nend)\\n\\nmaid:GiveTask(computed:Subscribe(function(sentence)\\n\\tprint(sentence)\\nend)) --\x3e \\"hi alice\\"\\n\\nnameState.Value = \\"bob\\" --\x3e \\"hi bob\\"\\nverbState.Value = \\"bye\\" --\x3e \\"bye bob\\"\\nnameState.Value = \\"alice\\" --\x3e \\"bye alice\\"\\n```","params":[{"name":"...","desc":"","lua_type":"A series of convertable states, followed by a function at the end."}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":159,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"OnChange","desc":"Short hand to register a propertyEvent changing\\n\\n```lua\\nBlend.mount(workspace, {\\n\\t[Blend.OnChange \\"Name\\"] = function(name)\\n\\t\\tprint(name)\\n\\tend;\\n}) --\x3e Immediately will print \\"Workspace\\"\\n\\nworkspace.Name = \\"Hello\\" --\x3e Prints \\"Hello\\"\\n```","params":[{"name":"propertyName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"(instance: Instance) -> Observable"}],"function_type":"static","source":{"line":209,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"OnEvent","desc":"Short hand to register an event from the instance\\n\\n```lua\\n\\tBlend.mount(workspace, {\\n\\t\\t[Blend.OnEvent \\"ChildAdded\\"] = function(child)\\n\\t\\t\\tprint(\\"Child added\\", child)\\n\\t\\tend;\\n\\t})\\n\\n\\tlocal folder = Instance.new(\\"Folder\\")\\n\\tfolder.Name = \\"Hi\\"\\n\\tfolder.Parent = workspace --\x3e prints \\"Child added Hi\\"\\n```","params":[{"name":"eventName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"(instance: Instance) -> Observable"}],"function_type":"static","source":{"line":235,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"Attached","desc":"Uses the constructor to attach a class or resource to the actual object\\nfor the lifetime of the subscription of that object.\\n\\n```lua\\nreturn Blend.New \\"Frame\\" {\\n\\tParent = variables.Parent;\\n\\t[Blend.Attached(function(parent)\\n\\t\\tlocal maid = Maid.new()\\n\\n\\t\\tprint(\\"Got\\", parent)\\n\\n\\t\\tmaid:GiveTask(function()\\n\\t\\t\\tprint(\\"Dead!\\")\\n\\t\\tend)\\n\\n\\t\\treturn maid\\n\\tend)] = true;\\n}\\n```","params":[{"name":"constructor","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"(parent: Instance) -> Observable<T>"}],"function_type":"static","source":{"line":267,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"ComputedPairs","desc":"Similiar to Fusion\'s ComputedPairs, where the changes are cached, and the lifetime limited.","params":[{"name":"source","desc":"","lua_type":"Observable<T> | any"},{"name":"compute","desc":"","lua_type":"(key: any, value: any, innerMaid: Maid) -> Instance | Observable<Instance>"}],"returns":[{"desc":"","lua_type":"Observable<Brio<Instance>>"}],"function_type":"static","source":{"line":291,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"AccelTween","desc":"Like Blend.Spring, but for AccelTween","params":[{"name":"source","desc":"Source observable (or convertable)","lua_type":"any"},{"name":"acceleration","desc":"Source acceleration (or convertable)","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Observable"}],"function_type":"static","source":{"line":344,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"Spring","desc":"Converts this arbitrary value into an observable that will initialize a spring\\nand interpolate it between values upon subscription.\\n\\n```lua\\nlocal percentVisible = Blend.State(0)\\nlocal visibleSpring = Blend.Spring(percentVisible, 30)\\nlocal transparency = Blend.Computed(visibleSpring, function(percent)\\n\\treturn 1 - percent\\nend);\\n\\nBlend.mount(frame, {\\n\\tBackgroundTransparency = visibleSpring;\\n})\\n```","params":[{"name":"source","desc":"","lua_type":"any"},{"name":"speed","desc":"","lua_type":"any"},{"name":"damper","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Observable?"}],"function_type":"static","source":{"line":409,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"toPropertyObservable","desc":"Converts this arbitrary value into an observable suitable for use in properties.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Observable?"}],"function_type":"static","source":{"line":468,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"toNumberObservable","desc":"Converts this arbitrary value into an observable that emits numbers.","params":[{"name":"value","desc":"","lua_type":"number | any"}],"returns":[{"desc":"","lua_type":"Observable<number>?"}],"function_type":"static","source":{"line":493,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"toEventObservable","desc":"Converts this arbitrary value into an observable that can be used to emit events.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Observable?"}],"function_type":"static","source":{"line":507,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"toEventHandler","desc":"Converts this arbitrary value into an event handler, which can be subscribed to","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"function?"}],"function_type":"static","source":{"line":523,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"Children","desc":"Mounts children to the parent and returns an object which will cleanup and delete\\nall children when removed.\\n\\nNote that this effectively recursively mounts children and their values, which is\\nthe heart of the reactive tree.\\n\\n```lua\\nBlend.New \\"ScreenGui\\" {\\n\\tParent = game.Players.LocalPlayer.PlayerGui;\\n\\t[Blend.Children] = {\\n\\t\\tBlend.New \\"Frame\\" {\\n\\t\\t\\tSize = UDim2.new(1, 0, 1, 0);\\n\\t\\t\\tBackgroundTransparency = 0.5;\\n\\t\\t};\\n\\t};\\n};\\n```\\n\\nRules:\\n\\n* `{ Instance }` -Tables of instances are all parented to the parent\\n* Brio<Instance> will last for the lifetime of the brio\\n* Brio<Observable<Instance>> will last for the lifetime of the brio\\n\\t* Brio<Signal<Instance>> will also act as above\\n\\t* Brio<Promise<Instance>> will also act as above\\n\\t* Brio<{ Instance } will also act as above\\n* Observable<Instance> will parent to the parent\\n\\t* Signal<Instance> will act as Observable<Instance>\\n\\t* ValueObject<Instance> will act as an Observable<Instance>\\n\\t* Promise<Instance> will act as an Observable<Instance>\\n*  will parent all instances to the parent\\n* Observables may emit non-observables (in form of Computed/Dynamic)\\n\\t* Observable<Brio<Instance>> will last for the lifetime of the brio, and parent the instance.\\n\\t* Observable<Observable<Instance>> occurs when computed returns a value.\\n* ValueObject<Instance> will switch to the current value\\n\\nCleanup:\\n* Instances will be cleaned up on unsubscribe","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"MaidTask"}],"function_type":"static","source":{"line":592,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"Instance","desc":"An event emitter that emits the instance that was actually created. This is\\nuseful for a variety of things.\\n\\nUsing this to track an instance\\n\\n```lua\\nlocal currentCamera = Blend.State()\\n\\nreturn Blend.New \\"ViewportFrame\\" {\\n\\tCurrentCamera = currentCamera;\\n\\t[Blend.Children] = {\\n\\t\\tself._current;\\n\\t\\tBlend.New \\"Camera\\" {\\n\\t\\t\\t[Blend.Instance] = currentCamera;\\n\\t\\t};\\n\\t};\\n};\\n```\\n\\nYou can also use this to execute code against an instance.\\n\\n```lua\\nreturn Blend.New \\"Frame\\" {\\n\\t[Blend.Instance] = function(frame)\\n\\t\\tprint(\\"We got a new frame!\\")\\n\\tend;\\n};\\n```\\n\\nNote that if you subscribe twice to the resulting observable, the internal function\\nwill execute twice.","params":[{"name":"parent","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Instance>"}],"function_type":"static","source":{"line":643,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"Single","desc":"Ensures the computed version of a value is limited by lifetime instead\\nof multiple. Used in conjunction with [Blend.Children] and [Blend.Computed].\\n\\n:::warning\\nIn general, cosntructing new instances like this is a bad idea, so it\'s recommended against it.\\n:::\\n\\n```lua\\nBlend.New \\"ScreenGui\\" {\\n\\tParent = game.Players.LocalPlayer.PlayerGui;\\n\\t[Blend.Children] = {\\n\\t\\tBlend.Single(Blend.Computed(percentVisible, function()\\n\\t\\t\\t-- you generally would not want to do this anyway because this reconstructs a new frame\\n\\t\\t\\t-- every frame.\\n\\n\\t\\t\\tBlend.New \\"Frame\\" {\\n\\t\\t\\t\\tSize = UDim2.new(1, 0, 1, 0);\\n\\t\\t\\t\\tBackgroundTransparency = 0.5;\\n\\t\\t\\t};\\n\\t\\tend)\\n\\t};\\n};\\n```","params":[{"name":"Observable<Instance","desc":"","lua_type":"| Brio<Instance>>"}],"returns":[{"desc":"","lua_type":"Observable<Brio<Instance>>"}],"function_type":"static","source":{"line":679,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"_observeChildren","desc":"Observes children and ensures that the value is cleaned up\\nafterwards.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Observable<Instance>"}],"function_type":"static","source":{"line":708,"path":"src/blend/src/Shared/Blend/Blend.lua"}},{"name":"mount","desc":"Mounts the instance to the props. This handles mounting children, and events.\\n\\nThe contract is that the props table is turned into observables. Note the following.\\n\\n* Keys of strings are turned into properties\\n\\t* If this can be turned into an observable, it will be used to subscribe to this event\\n\\t* Otherwise, we assign directly\\n* Keys of functions are invoked on the instance in question\\n\\t* `(instance, value) -> Observable\\n\\t* If this returns an observable (or can be turned into one), we subscribe the event immediately\\n* If the key is [Blend.Children] then we invoke mountChildren on it","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"props","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"Maid"}],"function_type":"static","source":{"line":904,"path":"src/blend/src/Shared/Blend/Blend.lua"}}],"properties":[],"types":[],"name":"Blend","desc":"Declarative UI system inspired by Fusion","source":{"line":5,"path":"src/blend/src/Shared/Blend/Blend.lua"}}')}}]);