import { RpgPlayer } from '@rpgjs/server'
import { Class } from '@rpgjs/database'
import type { ClassOnSet, ClassCanEquip, WeaponInstance, ArmorInstance } from '@rpgjs/database'
import { nullSkill } from './skill'

@Class({
    name: 'Fighter',
    description: 'A great fighter!',
    statesEfficiency: [],
    elementsEfficiency: [],
    skillsToLearn: [
        {
            level: 10000,
            skill: nullSkill
        }
    ]
})

export class fighter implements ClassOnSet, ClassCanEquip {
    // Called when the class is assigned to the player
    onSet(player: RpgPlayer): void { }

    // Return true if the player can equip the item
    canEquip(item: WeaponInstance | ArmorInstance, player: RpgPlayer): true { }
}