function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth:100
        };       
    },
    methods: {
        attackMonster() {
            const attackValue=getRandomValue(5,15);
            this.monsterHealth -= attackValue;
            this.attackPlayer();

        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 18);
            this.playerHealth -= attackValue;
     }   
    }
});
app.mount('#game');