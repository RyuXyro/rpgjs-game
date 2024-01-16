import { RpgEvent, EventData, RpgPlayer, Components } from '@rpgjs/server'

@EventData({
    name: 'Follower1',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class follower1 extends RpgEvent {
    onInit() {
        this.setGraphic('hero')
        this.name = 'Follower 1'
        this.setComponentsTop([
            Components.text('{name}')
        ])
    }
    async onAction(player: RpgPlayer) {
        if (player.getVariable('exp1')) {
            player.showText('Thankyou for Playing', {
                talkWith: this
            }); return
        }
        player.showText('Here for you: EXP +80', {
            talkWith: this
        })
        player.exp += 80
        console.log('- [+] Player ID:', player.id, '=== Player Name:', player.name, '| Get 80 EXP From NPC')
        player.setVariable('exp1', true)
    }
}