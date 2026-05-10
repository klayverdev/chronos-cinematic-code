-- EconomySystem.lua
EconomySystem = {}
EconomySystem.__index = EconomySystem

function EconomySystem:new()
    local obj = setmetatable({}, EconomySystem)
    return obj
end

function EconomySystem:getBalance(playerId)
    local query = "SELECT balance FROM players WHERE id = ?"
    local result = MySQL.Sync.fetchAll(query, { playerId })
    return result[1] and result[1].balance or 0
end

function EconomySystem:addMoney(playerId, amount)
    local currentBalance = self:getBalance(playerId)
    local newBalance = currentBalance + amount
    local query = "UPDATE players SET balance = ? WHERE id = ?"
    MySQL.Sync.execute(query, { newBalance, playerId })
end

function EconomySystem:removeMoney(playerId, amount)
    local currentBalance = self:getBalance(playerId)
    if currentBalance >= amount then
        local newBalance = currentBalance - amount
        local query = "UPDATE players SET balance = ? WHERE id = ?"
        MySQL.Sync.execute(query, { newBalance, playerId })
        return true
    end
    return false
end

function EconomySystem:transferMoney(fromPlayerId, toPlayerId, amount)
    if self:removeMoney(fromPlayerId, amount) then
        self:addMoney(toPlayerId, amount)
        return true
    end
    return false
end

-- Exemplo de uso
local economy = EconomySystem:new()