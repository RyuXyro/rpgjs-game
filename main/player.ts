import { RpgPlayer, type RpgPlayerHooks, Components, RpgWorld, Control, Input, RpgMap } from '@rpgjs/server'
import { shppotion } from './database_1/item'
import { hero_1 } from './database_1/actor'
import { cutter } from './database_1/weapon'
import { fire1, fire2, dfire } from './database_1/skill'
import { Item } from '@rpgjs/database'


const player: RpgPlayerHooks = {
    async onConnected(player: RpgPlayer) {
        console.log('- [+] Player ID:', (player.id), 'Was Joined Server')
        player.setComponentsTop([
            Components.text('HP: {hp}'),
            Components.text('{name}')
        ])
        player.addItem(shppotion, 4)
        player.addItem(cutter, 1)
        const inventory = player.getItem(shppotion, cutter)
        //        console.log(inventory)
        player.setActor(hero_1)
        player.gui('barHud').open()
        //        player.gui('toolTip').open()
        if (player.level == 2) {
            try {
                player.learnSkill(fire1)
                console.log('* [+] Player ID:', player.id, '=== Player Name', player.name, '| Successfull Get Skill')
            }
            catch (err) {
                console.log(err)
            }
        }
    },

    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },

    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('Welcome to my RPG Game')
        await player.showText('Create by KazuoYuuka')
        await player.showNotification('You get Starter pack')
        const guiNameScreen = player.gui('NameScreenGui')
        if (guiNameScreen.on('setName', ({ name }) => {
            console.log('- [+] Player ID:', player.id, '=== Set Name To:', name)
            player.showNotification('Character Created')
            guiNameScreen.close()
            player.name = name
        }))
            await guiNameScreen.open()
        player.setVariable('AFTER_INTRO', true)
    },

    async onDead(player: RpgPlayer) {
        player.gold -= 10
        await player.changeMap('map1', 'start');
        const currentPlayer = RpgWorld.getPlayer(player.id)
        currentPlayer.allRecovery();
        console.log(currentPlayer.allRecovery)
        console.log('- [-] Player ID:', player.id, '=== Player Name:', player.name, '| Was Die (LOL)')
    },

    async onLevelUp(player: RpgPlayer) {
        player.showNotification('Level Up!!')
        /*if (player.level += 1) {
            player.exp -= player.exp
            player.hp += player.hp
            player.sp += player.sp
        }*/
        if (player.initialLevel == 2) {
            try {
                player.learnSkill(fire1)
                console.log('* [+] Player ID:', player.id, '=== Player Name', player.name, '| Successfull Get Skill')
            }
            catch (err) {
                console.log(err)
            }
        }
    },

    async onDisconnected(player: RpgPlayer) {
        console.log('- [-] Player ID:', player.id, '=== Player Name:', player.name, '| Was Leave This Server')
    }
}

export default player
