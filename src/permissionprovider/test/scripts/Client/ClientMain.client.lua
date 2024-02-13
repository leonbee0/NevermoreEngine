--[[
	@class ClientMain
]]

local ReplicatedStorage = game:GetService("ReplicatedStorage")

local packages = ReplicatedStorage:WaitForChild("Packages")
local serviceBag = require(packages:FindFirstChild("ServiceBag", true)).new()

serviceBag:GetService(require("PermissionServiceClient"))
serviceBag:Init()
serviceBag:Start()

serviceBag:GetService(require("PermissionServiceClient")):PromisePermissionProvider()
	:Then(function(permissionProvider)
		return permissionProvider:PromiseIsAdmin()
	end)
	:Then(function(isAdmin)
		print("isAdmin", isAdmin)
	end)

print("Loaded")