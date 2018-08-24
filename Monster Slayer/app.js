const app = new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        totalDamage: 0,
        logs: []
    },
    methods:{
        startGame: function () {
            this.gameIsRunning = true;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.totalDamage = 0;
            this.logs = [];
        },
        calculateDamage: function(minDamage, maxDamage){
            return Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
        },
        attack: function () {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.logs.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage +' damage.',
                class: 'green'
            });
            this.totalDamage += damage;

            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage
            this.logs.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage +' damage.',
                class: 'red'
            });
        },
        specialAttack: function () {
            let playerdamage = this.calculateDamage(15, 35);
            this.monsterHealth -= playerdamage;
            this.totalDamage += playerdamage;
            damage = this.calculateDamage(3, 9);
            this.playerHealth -= damage;
            this.totalDamage = 0
            this.logs.unshift({
                isPlayer: true,
                text: 'Special Attack: Player hits Monster for ' + playerdamage +' damage.',
                class: 'gold'
            });
        },
        heal: function () {
            let heal = this.calculateDamage(15, 35)
            if(this.playerHealth + heal > 100){
                this.playerHealth = 100
            }
            else{
                this.playerHealth += heal
            }
            this.totalDamage = 0
            this.logs.unshift({
                isPlayer: false,
                text: 'Player get heal: '+ heal+ '.',
                class: 'blue'
            });
        },
        giveUp: function () {
            this.gameIsRunning = false;
            this.playerHealth = 0
        }
    },
    watch: {
        monsterHealth: function (value) {
                if(value <= 0){
                    this.monsterHealth = 0;
                    this.gameIsRunning = false;
                }
        },
        playerHealth: function (value) {
            if(value <= 0){
                this.playerHealth = 0;
                this.gameIsRunning = false;
            }
        },

    }
});