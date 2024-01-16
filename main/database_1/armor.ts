import { RpgPlayer } from '@rpgjs/server'
import { Presets } from '@rpgjs/server'
import { Armor } from '@rpgjs/database'

const { MAXHP } = Presets;

@Armor({
    name: 'Wooden Shield',
    description: 'Gives a little defense',
    price: 500,
    pdef: 100,
    sdef: 100,
    addStates: [],
    removeStates: [],
    elements: [],
    params: {},
    paramsModifier: {},
    statesDefense: [],
    elementsDefense: []
})
export class wooden_shield {
    onAdd(player: RpgPlayer) {
    }
    onEquip(player: RpgPlayer, equip: boolean) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Armor({
    name: 'HpUpValue',
    paramsModifier: {
        [MAXHP]: {
            value: 100
        }
    }
})
export class HpUpValue { }