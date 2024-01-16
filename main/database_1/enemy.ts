import { Enemy } from "@rpgjs/database";
import { shppotion } from "./item";
import { cutter } from "./weapon";

@Enemy({
    startingItems: [{
        nb: 1,
        item: cutter
    }],
    graphic: 'monster_1',
    gain: {
        exp: 5,
        gold: 5,
        items: [{
            nb: 1,
            item: shppotion,
            chance: 0.50
        }]
    }
})
export class rat { }