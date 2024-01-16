import { RpgEvent, EventData, RpgPlayer, Components } from '@rpgjs/server'

@EventData({
    name: 'monster2',
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class monster2 extends RpgEvent {
    onInit() {
        this.changeMap('map2', 'monster2')
        this.setGraphic('Monster_0')
        this.name = 'monster 2'
        this.hp = 50
        this.setComponentsTop([
            Components.text('HP: {hp}'),
            Components.text('{name}')
        ])
    }

    onAction(player: RpgPlayer) {
        this.hp -= 5
        player.hp -= 5
        if (this.hp <= 0) {
            const mdead = this.getCurrentMap()
            mdead.removeEvent(this.id)
            player.exp += 20
            player.gold += 10
            console.log('- [=] Player ID:', player.id, '=== Player Name:', player.name, '| Was Kill Monster 1')
        }
    }
}