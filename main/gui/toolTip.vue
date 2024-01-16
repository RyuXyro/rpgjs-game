<template>
    <div class="speech-bubble">Sprite Id: {{ id }}</div>
</template>

<script>
export default {
    name: "toolTip",
    rpgAttachToSprite: true,
    props: ["spriteData"],
    inject: ["rpgScene"],
    data() {
        return {
            id: 'actor_1'
        };
    },
    mounted() {
        const sprite = this.rpgScene().getSprite(this.spriteData.id)
        this.id = this.spriteData.id
    }
};
</script>

<style>
.speech-bubble {
    position: absolute;
    background: #f0f0f0;
    border-radius: .4em;
    padding: 10px;
    max-width: 400px;
    text-align: center;
    bottom: 30px;
    left: 50%;
    transform: translateX(-24px);
}

.speech-bubble:after {
    content: 'Uh';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #f0f0f0;
    border-bottom: 0;
    margin-left: -10px;
    margin-top: -1px;
}
</style>