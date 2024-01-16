import { RpgEvent, EventData, RpgPlayer, Components } from '@rpgjs/server'

@EventData({
    name: 'NPC',
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class villager1 extends RpgEvent {
    onInit() {
        this.setGraphic('female')
        this.name = 'Villager 1'
        this.setComponentsTop([
            Components.text('{name}')
        ])
        this.following
    }
    async onAction(player: RpgPlayer) {
        if (player.getVariable('welcome')) {
            player.showText('Goodbyee..', {
                talkWith: this
            }); return
        }
        await player.showText('I give you 20 gold.', {
            talkWith: this
        })
        player.gold += 20
        console.log('- [+] Player ID:', player.id, '=== Player Name:', player.name, '| Get 20 Gold From NPC')
        player.setVariable('welcome', true)
    }
}
