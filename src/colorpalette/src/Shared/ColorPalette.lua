--[=[
	@class ColorPalette
]=]

local require = require(script.Parent.loader).load(script)

local BaseObject = require("BaseObject")
local ValueObject = require("ValueObject")
local ColorSwatch = require("ColorSwatch")
local ColorGradePalette = require("ColorGradePalette")
local Rx = require("Rx")
local Maid = require("Maid")
local Blend = require("Blend")
local Observable = require("Observable")
local Signal = require("Signal")
local Table = require("Table")

local ColorPalette = setmetatable({}, BaseObject)
ColorPalette.ClassName = "ColorPalette"
ColorPalette.__index = ColorPalette

function ColorPalette.new()
	local self = setmetatable(BaseObject.new(), ColorPalette)

	self._gradePalette = ColorGradePalette.new()
	self._maid:GiveTask(self._gradePalette)

	self._gradeMaid = Maid.new()
	self._maid:GiveTask(self._gradeMaid)

	self._colorMaid = Maid.new()
	self._maid:GiveTask(self._colorMaid)

	self._vividMaid = Maid.new()
	self._maid:GiveTask(self._vividMaid)

	self._swatches = {}
	self._colorValues = {}
	self._colorGradeValues = {}
	self._vividnessValues = {}

	self.ColorSwatchAdded = Signal.new() -- :Fire(name)
	self._maid:GiveTask(self.ColorSwatchAdded)

	self.ColorGradeAdded = Signal.new() -- :Fire(name)
	self._maid:GiveTask(self.ColorGradeAdded)

	return self
end

function ColorPalette:GetSwatchNames()
	return Table.keys(self._swatches)
end

function ColorPalette:ObserveSwatchNames()
	return Rx.fromSignal(self.ColorSwatchAdded):Pipe({
		Rx.startFrom(function()
			return self:GetSwatchNames()
		end)
	})
end

function ColorPalette:GetGradeNames()
	return Table.keys(self._colorGradeValues)
end

function ColorPalette:ObserveGradeNames()
	return Rx.fromSignal(self.ColorGradeAdded):Pipe({
		Rx.startFrom(function()
			return self:GetGradeNames()
		end)
	})
end

function ColorPalette:GetColorValues()
	return self._colorValues
end

function ColorPalette:GetColor(name, grade, vividness)
	assert(type(name) == "string", "Bad name")

	return self:GetColorSwatch(name):GetGraded(
		self:_toGrade(grade, name),
		self:_toVividness(vividness, grade, name))
end

function ColorPalette:ObserveColor(name, grade, vividness)
	assert(type(name) == "string", "Bad name")

	return self:GetColorSwatch(name):ObserveGraded(
		self:_toGradeObservable(grade, name),
		self:_toVividnessObservable(vividness, grade, name))
end

function ColorPalette:SetDefaultSurfaceName(surfaceName)
	assert(type(surfaceName) == "string", "Bad surfaceName")

	self._gradePalette:SetDefaultSurfaceName(surfaceName)
end

function ColorPalette:GetColorSwatch(colorName)
	local swatch = self._swatches[colorName]
	if not swatch then
		error(("No swatch with name %q"):format(colorName))
	end

	return swatch
end

function ColorPalette:SetColor(colorName, value)
	assert(type(colorName) == "string", "Bad colorName")

	self._swatches[colorName]:SetColor(value)
end

function ColorPalette:ObserveGradeOn(colorName, newSurfaceName, baseSurfaceName)
	assert(type(colorName) == "string", "Bad colorName")
	assert(type(newSurfaceName) == "string", "Bad newSurfaceName")

	return self._gradePalette:ObserveOn(colorName, newSurfaceName, baseSurfaceName)
end

function ColorPalette:_toGradeObservable(grade, name)
	if type(grade) == "string" then
		return (self._gradePalette:ObserveGrade(grade))
	elseif type(grade) == "number" then
		return Rx.of(grade)
	elseif Observable.isObservable(grade) then
		return grade
	else
		local propertyObservable = Blend.toPropertyObservable(grade)
		if propertyObservable then
			return propertyObservable
		else
			return (self._gradePalette:ObserveGrade(name))
		end
	end
end

function ColorPalette:_toVividnessObservable(vividness, grade, name)
	if type(vividness) == "string" then
		return self._gradePalette:ObserveVividness(vividness)
	elseif type(vividness) == "number" then
		return Rx.of(vividness)
	elseif Observable.isObservable(vividness) then
		return vividness
	end

	local propertyObservable = Blend.toPropertyObservable(vividness)
	if propertyObservable then
		return propertyObservable
	end

	if type(grade) == "string" then
		-- Fall back to the grade value
		return self._gradePalette:ObserveVividness(grade)
	else
		-- Otherwise fall back to name of color
		return self._gradePalette:ObserveVividness(name)
	end
end

function ColorPalette:_toGrade(grade, name)
	if type(grade) == "string" then
		return self._gradePalette:GetGrade(grade)
	elseif type(grade) == "number" then
		return grade
	else
		return self._gradePalette:GetGrade(name)
	end
end

function ColorPalette:_toVividness(vividness, grade, name)
	if type(vividness) == "string" then
		return self._gradePalette:GetVividness(vividness)
	elseif type(grade) == "number" then
		return grade
	elseif type(grade) == "string" then
		-- Fall back to the grade value
		return self._gradePalette:GetVividness(grade)
	else
		-- Otherwise fall back to name of color
		return self._gradePalette:GetVividness(name)
	end
end

function ColorPalette:GetColorValue(colorName)
	assert(type(colorName) == "string", "Bad colorName")

	local colorValue = self._colorValues[colorName]
	if not colorValue then
		error(("No color with name %q"):format(colorName))
	end

	return colorValue
end

function ColorPalette:GetGradeValue(gradeName)
	local gradeValue = self._colorGradeValues[gradeName]
	if not gradeValue then
		error(("No grade with name %q"):format(gradeName))
	end

	return gradeValue
end

function ColorPalette:GetVividnessValue(gradeName)
	local vividnessValue = self._vividnessValues[gradeName]
	if not vividnessValue then
		error(("No grade with name %q"):format(gradeName))
	end

	return vividnessValue
end


function ColorPalette:ObserveModifiedGrade(gradeName, amount, multiplier)
	return self._gradePalette:ObserveModified(gradeName, amount, multiplier)
end

function ColorPalette:ObserveGrade(name)
	assert(type(name) == "string", "Bad name")

	return self._gradePalette:ObserveGrade(name)
end

function ColorPalette:ObserveVividness(name)
	assert(type(name) == "string", "Bad name")

	return self._gradePalette:ObserveVividness(name)
end

function ColorPalette:GetSwatch(swatchName)
	assert(type(swatchName) == "string", "Bad swatchName")

	local swatch = self._swatches[swatchName]
	if not swatch then
		error(("No swatch with name %q"):format(swatchName))
	end

	return swatch
end

function ColorPalette:SetColor(colorName, color)
	assert(type(colorName) == "string", "Bad colorName")

	if not self._colorValues[colorName] then
		error(("No color grade with name %q"):format(colorName))
	end

	self._colorMaid[colorName] = Blend.mount(self._colorValues[colorName], {
		Value = color;
	})
end

function ColorPalette:SetVividness(gradeName, vividness)
	assert(type(gradeName) == "string", "Bad colorName")

	if not self._vividnessValues[gradeName] then
		error(("No vividness with name %q"):format(gradeName))
	end

	self._vividMaid[gradeName] = Blend.mount(self._vividnessValues[gradeName], {
		Value = vividness;
	})
end

function ColorPalette:SetColorGrade(gradeName, grade)
	assert(type(gradeName) == "string", "Bad colorName")

	if not self._colorGradeValues[gradeName] then
		error(("No color grade with name %q"):format(gradeName))
	end

	self._gradeMaid[gradeName] = Blend.mount(self._colorGradeValues[gradeName], {
		Value = grade;
	})
end


function ColorPalette:ObserveColorBaseGradeBetween(colorName, low, high)
	assert(type(colorName) == "string", "Bad colorName")

	return self:GetSwatch(colorName):ObserveBaseGradeBetween(low, high)
end

function ColorPalette:DefineColorGrade(gradeName, gradeValue, vividnessValue)
	assert(type(gradeName) == "string", "Bad gradeName")

	if self._colorGradeValues[gradeName] then
		warn(("Already defined grade of name %q"):format(gradeName))
		return
	end

	local colorGrade = Instance.new("NumberValue")
	self._maid:GiveTask(colorGrade)

	local vividness = ValueObject.new(nil)
	self._maid:GiveTask(vividness)

	self._gradePalette:Add(gradeName, colorGrade, vividness)

	self._colorGradeValues[gradeName] = colorGrade
	self._vividnessValues[gradeName] = vividness

	self:SetVividness(gradeName, vividnessValue)
	self:SetColorGrade(gradeName, gradeValue)

	self.ColorGradeAdded:Fire(gradeName)

	return colorGrade
end

function ColorPalette:DefineColorSwatch(colorName, value)
	assert(type(colorName) == "string", "Bad colorName")

	if self._swatches[colorName] then
		warn(("Already defined color of name %q"):format(colorName))
		return
	end

	local colorValue = Instance.new("Color3Value")
	colorValue.Value = value or Color3.new(0, 0, 0)
	self._maid:GiveTask(colorValue)

	local colorSwatch = ColorSwatch.new(colorValue)
	self._maid:GiveTask(colorSwatch)

	self._colorValues[colorName] = colorValue
	self._swatches[colorName] = colorSwatch

	self.ColorSwatchAdded:Fire(colorName)

	return colorSwatch
end

return ColorPalette