import { RpgEvent, EventData, RpgPlayer, Components } from '@rpgjs/server'

@EventData({
    name: 'NpcChild1',
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class save1 extends RpgEvent {
    onInit() {
        this.changeMap('map2', 'NpcChild1')
        this.setGraphic('female')
        this.name = 'Villager 2'
        this.setComponentsTop([
            Components.text('{name}')
        ])
    }
    async onAction(player: RpgPlayer) {
        const choice = await player.showChoices('Do You want to save Your progress?', [
            { text: 'Yes', value: true },
            { text: 'No', value: false }
        ])
        if (choice.value) {
            const json = player.save()
            try {
                await axios.post('', {
                    data: json,
                    talkWith: this,
                    playerId: 123 // An identifier that you must have defined when the player was loaded in the game (be careful, do not use player.id which changes every time you log in)

                })
                player.showNotification('Your progress has been saved')
            }
            catch (err) {
                console.log(err)
                player.showNotification('Save failed')
                console.log('A player Failed to Save Game. Id:{player.id}')
            }
        }
    }
}