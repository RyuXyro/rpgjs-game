<template>
    <div class="name-screen">
        <div class="dialog-box">
            <form @submit.prevent="changeName">
                <h2>Enter your name</h2>
                <input type="text" v-model="name" />
                <button>OK</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['rpgGuiInteraction'],
    name: 'NameScreenGui',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        changeName() {
            this.rpgGuiInteraction('NameScreenGui', 'setName', {
                name: this.name
            })
        }
    }
}
</script>

<style>
.name-screen {
    position: absolute;
    background: rgb(0, 0, 0);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
}

.dialog-box h2 {
    margin: 0 0 15px;
}

.dialog-box input {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.dialog-box button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.dialog-box button:hover {
    background-color: #0056b3;
}
</style>