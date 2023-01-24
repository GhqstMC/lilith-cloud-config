declare const config: LilithConfig

export default config

interface NumericAutododgeOption {
    enabled: boolean
    lowestEnabled: boolean
    lowest: number
    highestEnabled: boolean
    highest: number
    conditionEnabled: boolean
    condition: string
}

interface MapsAutododgeOption {
    whitelist: {
        enabled: boolean
        maps: string
    }
    blacklist: {
        enabled: boolean
        maps: string
    }
}

interface PlayersAutododgeOption {
    whitelist: {
        enabled: boolean
        players: string
    }
    blacklist: {
        enabled: boolean
        players: string
    }
}

export declare interface LilithConfig {
    general: {
        apiKey: string
        bypass: {
            enabled: boolean
            lunar: {
                disabled: boolean
                cheats: boolean
                hitreg: boolean
            }
            badlion: boolean
            forge: boolean
        }
        quicklobby: {
            enabled: boolean
            duels: boolean
            bedwars: boolean
            skywars: boolean
        }
        proxy: {
            remoteIp: string
            remotePort: number
            localIp: string
            localPort: number
            localMotd: string
            logChatMessages: boolean
        }
        ranks: {
            enabled: boolean
            generalChat: boolean
            directMessages: boolean
            statChecking: boolean
            partyChat: boolean
            guildChat: boolean
            friendJoin: boolean
            guildJoin: boolean
            friendsList: boolean
            partyList: boolean
            guildList: boolean
            lobbyJoin: boolean
            lobbyTablist: boolean
            lobbyLeaderboards: boolean
            gameEnd: boolean
        }
    }
    autogg: {
        enabled: boolean
        first: {
            enabled: boolean
            delay: number
            message: string
        }
        second: {
            enabled: boolean
            delay: number
            message: string
        }
        requeue: {
            enabled: boolean
            delay: number
        }
    }
    lunar: {
        spoof: boolean
    }
    queuestats: {
        gamemodes: {
            duels: {
                enabled: boolean
                overall: boolean
                modesOverall: boolean
                showOwnStats: boolean
                showPartyStats: boolean
                deobfuscation: {
                    chat: boolean
                    nametags: boolean
                    ranks: boolean
                }
            },
            bedwars: {
                enabled: boolean
                chatEnabled: boolean
                overall: boolean
                showOwnStats: boolean
                showPartyStats: boolean
                spaceBeforeStar: boolean
                autoWho: boolean
                showStatsIngame: boolean
            },
            skywars: {
                enabled: boolean
                overall: boolean
                spaceBeforeStar: boolean
                autoWho: boolean
                showStatsIngame: boolean
            }
            wool: {
                enabled: boolean
                chatEnabled: boolean
                showOwnStats: boolean
                showPartyStats: boolean
                spaceBeforeStar: boolean
                autoWho: boolean
                showStatsIngame: boolean
            }
        }
    }
    autododge: {
        duels: {
            enabled: boolean
            requeue: boolean
            noStats: boolean
            warpParty: boolean
            maps: []
            mapsNew: MapsAutododgeOption
            players: PlayersAutododgeOption
            level: NumericAutododgeOption
            wins: NumericAutododgeOption
            losses: NumericAutododgeOption
            wlr: NumericAutododgeOption
            kdr: NumericAutododgeOption
            melee: NumericAutododgeOption
            ranged: NumericAutododgeOption
            ws: NumericAutododgeOption
            bws: NumericAutododgeOption
        }
        bedwars: {
            enabled: boolean
            requeue: boolean
            noStats: boolean
            maps: []
            mapsNew: MapsAutododgeOption
            players: PlayersAutododgeOption
            level: NumericAutododgeOption
            star: NumericAutododgeOption
            fkdr: NumericAutododgeOption
            wins: NumericAutododgeOption
            losses: NumericAutododgeOption
            wlr: NumericAutododgeOption
            ws: NumericAutododgeOption
            bws: NumericAutododgeOption
        }
        skywars: {
            enabled: boolean
            requeue: boolean
            noStats: boolean
            warpParty: boolean
            maps: []
            mapsNew: MapsAutododgeOption
            players: PlayersAutododgeOption
            level: NumericAutododgeOption
            star: NumericAutododgeOption
            wins: NumericAutododgeOption
            losses: NumericAutododgeOption
            wlr: NumericAutododgeOption
            kdr: NumericAutododgeOption
            melee: NumericAutododgeOption
            ranged: NumericAutododgeOption
            ws: NumericAutododgeOption
            bws: NumericAutododgeOption
        }
        wool: {
            enabled: boolean
            requeue: boolean
            noStats: boolean
            mapsNew: MapsAutododgeOption
            players: PlayersAutododgeOption
            level: NumericAutododgeOption
            star: NumericAutododgeOption
            wins: NumericAutododgeOption
            losses: NumericAutododgeOption
            wlr: NumericAutododgeOption
            kdr: NumericAutododgeOption
            games: NumericAutododgeOption
            assists: NumericAutododgeOption
        }
    }
    profiles: {
        [id: string]: {
            data: {
                id: string
                name: string
                itemId: string
            }
            settings: Partial<Omit<LilithConfig, "profiles">>
        }
    }
}
