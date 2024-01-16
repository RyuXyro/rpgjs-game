import { RpgPlayer, Presets } from '@rpgjs/server'
import { fighter } from './class' // Remember to put a correct import
import { cutter } from './weapon'
import { dfire, fire1, fire2 } from './skill'
import { Actor } from '@rpgjs/database'

const { MAXHP } = Presets
const { MAXSP } = Presets
const { ATK } = Presets
const { PDEF } = Presets
const { SDEF } = Presets
const { STR } = Presets
const { AGI } = Presets
const { INT } = Presets
const { DEX } = Presets

@Actor({
    name: 'Kazuo',
    description: 'A great fighter!',
    initialLevel: 1,
    finalLevel: 10000,
    expCurve: {
        basis: 30,
        extra: 10,
        accelerationA: 40,
        accelerationB: 40
    },
    parameters: {
        [MAXHP]: {
            start: 200,
            end: 20000
        },
        [MAXSP]: {
            start: 100,
            end: 10000
        },
        [STR]: {
            start: 10,
            end: 30000
        },
        [AGI]: {
            start: 4,
            end: 5000
        },
        [INT]: {
            start: 5,
            end: 10000
        },
        [DEX]: {
            start: 5,
            end: 20000
        },
        [ATK]: {
            start: 4,
            end: 9000
        },
        [PDEF]: {
            start: 5,
            end: 8000
        },
        [SDEF]: {
            start: 4,
            end: 10000
        }
    },
    startingEquipment: [
        cutter
    ],
    class: fighter
})
export class hero_1 {
    onSet(player: RpgPlayer) {
        /*if (player.level == 2) {
            try {
                player.learnSkill(fire1)
                console.log('* [+] Player ID:', player.id, '=== Player Name', player.name, '| Successfull Get Skill:', fire1)
            }
            catch (err) {
                console.log(err)
            }
        }*/
    }
    onLearn(player: RpgPlayer) {
    }
}