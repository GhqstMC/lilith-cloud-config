declare const config: LilithConfig

export default config

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
                overall: boolean
                spaceBeforeStar: boolean
                autoWho: boolean
            },
            skywars: {
                enabled: boolean
                overall: boolean
                spaceBeforeStar: boolean
                autoWho: boolean
            }
        }
    }
    autododge: {
        duels: {
            enabled: boolean
            maps: []
            level: {
                enabled: boolean
                lowest: number
                highest: number
            }
            wins: {
                enabled: boolean
                lowest: number
                highest: number
            }
            losses: {
                enabled: boolean
                lowest: number
                highest: number
            }
            wlr: {
                enabled: boolean
                lowest: number
                highest: number
            }
            kdr: {
                enabled: boolean
                lowest: number
                highest: number
            }
            melee: {
                enabled: boolean
                lowest: number
                highest: number
            }
            ranged: {
                enabled: boolean
                lowest: number
                highest: number
            }
            ws: {
                enabled: boolean
                lowest: number
                highest: number
            }
            bws: {
                enabled: boolean
                lowest: number
                highest: number
            }
        }
        bedwars: {
            enabled: boolean
            maps: []
            level: {
                enabled: boolean
                lowest: number
                highest: number
            }
            star: {
                enabled: boolean
                lowest: number
                highest: number
            }
            fkdr: {
                enabled: boolean
                lowest: number
                highest: number
            }
            wins: {
                enabled: boolean
                lowest: number
                highest: number
            }
            losses: {
                enabled: boolean
                lowest: number
                highest: number
            }
            wlr: {
                enabled: boolean
                lowest: number
                highest: number
            }
            ws: {
                enabled: boolean
                lowest: number
                highest: number
            }
            bws: {
                enabled: boolean
                lowest: number
                highest: number
            }
        }
        skywars: {
            enabled: boolean
            maps: []
            level: {
                enabled: boolean
                lowest: number
                highest: number
            }
            star: {
                enabled: boolean
                lowest: number
                highest: number
            }
            wins: {
                enabled: boolean
                lowest: number
                highest: number
            }
            losses: {
                enabled: boolean
                lowest: number
                highest: number
            }
            wlr: {
                enabled: boolean
                lowest: number
                highest: number
            }
            kdr: {
                enabled: boolean
                lowest: number
                highest: number
            }
            melee: {
                enabled: boolean
                lowest: number
                highest: number
            }
            ranged: {
                enabled: boolean
                lowest: number
                highest: number
            }
            ws: {
                enabled: boolean
                lowest: number
                highest: number
            }
            bws: {
                enabled: boolean
                lowest: number
                highest: number
            }
        }
    }
}