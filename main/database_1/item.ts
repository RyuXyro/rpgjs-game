import { RpgPlayer } from '@rpgjs/server'
import { Item } from '@rpgjs/database'

@Item({
    name: 'Small HP Potion',
    description: 'A Small HP Potion Give 50 HP to Ally',
    id: '1',
    price: 60,
    hpValue: 50,
    hitRate: 1,
    consumable: true,
    addStates: [],
    removeStates: [],
    elements: [],
    paramsModifier: {}
})
export class shppotion {
    onAdd(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onUseFailed(player: RpgPlayer) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Item({
    name: 'HP Potion',
    description: 'A Normal HP Potion Give 100 HP to Ally',
    price: 160,
    hpValue: 100,
    hitRate: 1,
    consumable: true,
    addStates: [],
    removeStates: [],
    elements: [],
    paramsModifier: {}
})
export class hppotion {

    onAdd(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onUseFailed(player: RpgPlayer) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Item({
    name: 'Medium HP Potion',
    description: 'A Medium HP Potion Give 200 HP to Ally',
    price: 260,
    hpValue: 200,
    hitRate: 1,
    consumable: true,
    addStates: [],
    removeStates: [],
    elements: [],
    paramsModifier: {}
})
export class mhppotion {

    onAdd(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onUseFailed(player: RpgPlayer) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Item({
    name: 'Big HP Potion',
    description: 'A Big HP Potion Give 500 HP to Ally',
    price: 560,
    hpValue: 500,
    hitRate: 1,
    consumable: true,
    addStates: [],
    removeStates: [],
    elements: [],
    paramsModifier: {}
})
export class bhppotion {

    onAdd(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onUseFailed(player: RpgPlayer) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Item({
    name: 'Super Big HP Potion',
    description: 'A Supperr Bigg HP Potion Give 1000 HP to Ally (woww)',
    price: 1060,
    hpValue: 1000,
    hitRate: 1,
    consumable: true,
    addStates: [],
    removeStates: [],
    elements: [],
    paramsModifier: {}
})
export class sbhppotion {

    onAdd(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onUseFailed(player: RpgPlayer) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Item({
    name: 'Special HP Potion',
    description: 'A Special HP Potion Give 2x 100 HP to Ally',
    price: 320,
    hpValue: 100,
    hitRate: 2,
    consumable: true,
    addStates: [],
    removeStates: [],
    elements: [],
    paramsModifier: {}
})
export class sphppotion {

    onAdd(player: RpgPlayer) {
    }
    onUse(player: RpgPlayer) {
    }
    onUseFailed(player: RpgPlayer) {
    }
    onRemove(player: RpgPlayer) {
    }
}

@Item({
    name: 'Key',
    consumable: false
})
export class Key { }