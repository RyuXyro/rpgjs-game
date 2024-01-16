import { RpgPlayer } from '@rpgjs/server'
import { Weapon } from '@rpgjs/database'

@Weapon({
    name: 'Cutter',
    description: 'Small Cutter',
    price: 160,
    atk: 2,
    pdef: 1,
    sdef: 1,
    addStates: [],
    removeStates: [],
    elements: [],
    params: {
        maxhp: []
    },
    paramsModifier: {
    },
    statesDefense: [],
    elementsDefense: []
})
export class cutter {
    onAdd(player: RpgPlayer) {
    }
    onEquip(player: RpgPlayer, equip: boolean) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Weapon({
    name: 'Dagger',
    description: 'Just A Dagger',
    price: 400,
    atk: 5,
    pdef: 2,
    sdef: 2,
    addStates: [],
    removeStates: [],
    elements: [],
    params: {
        maxhp: []
    },
    paramsModifier: {
    },
    statesDefense: [],
    elementsDefense: []
})
export class dagger {
    onAdd(player: RpgPlayer) {
    }
    onEquip(player: RpgPlayer, equip: boolean) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Weapon({
    name: 'Mini Sword',
    description: 'This is Mini Sword',
    price: 600,
    atk: 8,
    pdef: 4,
    sdef: 4,
    addStates: [],
    removeStates: [],
    elements: [],
    params: {
        maxhp: []
    },
    paramsModifier: {
    },
    statesDefense: [],
    elementsDefense: []
})
export class minisword {
    onAdd(player: RpgPlayer) {
    }
    onEquip(player: RpgPlayer, equip: boolean) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Weapon({
    name: 'Sword',
    description: 'This is A Normal Sword',
    price: 800,
    atk: 10,
    pdef: 5,
    sdef: 5,
    addStates: [],
    removeStates: [],
    elements: [],
    params: {
        maxhp: []
    },
    paramsModifier: {
    },
    statesDefense: [],
    elementsDefense: []
})
export class sword {
    onAdd(player: RpgPlayer) {
    }
    onEquip(player: RpgPlayer, equip: boolean) {
    }
    onRemove(player: RpgPlayer) {
    }
}