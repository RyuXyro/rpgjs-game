import { type RpgSceneMapHooks, RpgSceneMap, Control } from '@rpgjs/client'

const sceneMap: RpgSceneMapHooks = {
    onAfterLoading(scene: RpgSceneMap) {
        scene.on('click', () => {
            scene.controls.applyControl(Control.Action)
        })
    }
}

export default sceneMap
