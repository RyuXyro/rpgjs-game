import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";
import { MAXHP, MAXSP } from "@rpgjs/server/lib/presets";

EventData({
    name: '',
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class healer1 extends RpgEvent {
    onInit() {
        this.changeMap('', '')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Do You want to Restore All Stats?')
        const heal1 = player.showChoices('Pay 50 G', [
            { text: 'Yes', value: true },
            { text: 'No', value: false }
        ])
    }
}