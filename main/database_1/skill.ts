import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'

@Skill({
    name: 'Null',
    description: 'Null',
    spCost: 0,
    power: 0,
    variance: 0,
    hitRate: 0,
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {}
})
export class nullSkill {
    onLearn(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onForget(player: RpgPlayer) {
    }
}

@Skill({
    name: 'Fire1',
    description: 'Shoots a ball of fire',
    spCost: 5,
    power: 10,
    variance: 10,
    hitRate: 1,
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {}
})
export class fire1 {
    onLearn(player: RpgPlayer) {
        player.showNotification('Learn Skill Fire 1')
    }
    onUse(player: RpgPlayer) {
    }
    onForget(player: RpgPlayer) {
    }
}

@Skill({
    name: 'Fire2',
    description: 'Shoots better ball of fire',
    spCost: 10,
    power: 20,
    variance: 20,
    hitRate: 1,
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {}
})
export class fire2 {
    onLearn(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onForget(player: RpgPlayer) {
    }
}

@Skill({
    name: 'Double Fire',
    description: 'Shoots 2 ball of fire',
    spCost: 20,
    power: 20,
    variance: 20,
    hitRate: 2,
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {}
})
export class dfire {
    onLearn(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onForget(player: RpgPlayer) {
    }
}