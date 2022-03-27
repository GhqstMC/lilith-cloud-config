module.exports = {
    general: {
        apiKey: '',
            bypass: {
            enabled: false,
                lunar: {
                disabled: false,
                    cheats: false,
                    hitreg: false
            },
            badlion: false,
                forge: true
        },
        quicklobby: {
            enabled: true,
                duels: true,
                bedwars: false,
                skywars: false
        },
        proxy: {
            remoteIp: 'mc.hypixel.net',
                remotePort: 25565,
                localIp: '127.0.0.1',
                localPort: 25565,
                localMotd: `Lilith 1.0 Alpha`,
                logChatMessages: false
        }
    },
    autogg: {
        enabled: false,
        first: {
            enabled: false,
            message: `gg`,
            delay: 1000
        },
        second: {
            enabled: false,
            message: `gf <3`,
            delay: 2000
        },
        requeue: {
            enabled: false,
            delay: 3000
        }
    },
    queuestats: {
        gamemodes: {
            duels: {
                enabled: true,
                    overall: false,
                    modesOverall: true,
                    showOwnStats: false,
                    showPartyStats: false,
                    deobfuscation: {
                    chat: true,
                        nametags: true,
                        ranks: true
                }
            },
            bedwars: {
                enabled: false,
                    overall: true,
                    autoWho: false,
                    spaceBeforeStar: false
            },
            skywars: {
                enabled: false,
                    overall: true,
                    autoWho: false,
                    spaceBeforeStar: false
            }
        }
    },
    autododge: {
        duels: {
            enabled: false,
                level: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            wins: {
                enabled: true,
                    lowest: 0,
                    highest: 0
            },
            losses: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            wlr: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            kdr: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            melee: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            ranged: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            ws: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            bws: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            maps: []
        },
        bedwars: {
            enabled: false,
                level: {
                enabled: true,
                    lowest: 0,
                    highest: 0
            },
            star: {
                enabled: true,
                    lowest: 0,
                    highest: 0
            },
            wins: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            losses: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            wlr: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            fkdr: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            ws: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            bws: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            maps: []
        },
        skywars: {
            enabled: false,
                level: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            star: {
                enabled: true,
                    lowest: 0,
                    highest: 0
            },
            wins: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            losses: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            wlr: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            kdr: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            melee: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            ranged: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            ws: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            bws: {
                enabled: false,
                    lowest: 0,
                    highest: 0
            },
            maps: []
        },
    }
}