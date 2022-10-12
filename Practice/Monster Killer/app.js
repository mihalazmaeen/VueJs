function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner:null
        };       
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };  
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
              return { width: "0%" };
            }
            return { width: this.playerHealth + "%" };  
        },
        useSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
              // draw
                this.winner = 'draw';
            } else if (value <= 0) {
              // Monster lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue=getRandomValue(5,15);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            if (this.playerHealth < 0) {
                //player Lost
            }

        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 18);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();

        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(10, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
     },   
    }
});
app.mount('#game');