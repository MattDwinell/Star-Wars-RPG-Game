//globally declaring all variables, setting the characters as objects and letting those objects call functions which move the character's html element. This way the attack button code can be as short as possible to avoid confusion.

var yoda = $(".yoda");
var vader = $(".vader");
var trooper = $(".trooper");
var r2D2 = $(".r2d2");
var gameStart = false;
var gameEnd = false;
var defender = false;
var attacker = false;
var defenderStats ={};
var attackerStats = {};
var yodaStats = {
    hp:120,
    baseAttack:10,
    attack:10,
    vanquish: function(){
        $(".vanquished").append(yoda);
        defender = false; },
    defend: function(){
        $(".defender").append(yoda);
        defender = true;
        defenderStats = yodaStats;},
    attack: function(){
        gameStart = true;
        $(".yourchar").append(yoda);
        attacker = true;
        attackerStats = yodaStats;
        $(".enemies").append(vader);
        $(".enemies").append(trooper);
        $(".enemies").append(r2D2);}
}
var vaderStats = {
    hp:150,
    baseAttack:15,
    attack:15,
    vanquish: function(){
        $(".vanquished").append(vader);
        defender = false; },
    defend: function(){
        $(".defender").append(vader);
        defender = true;
        defenderStats = vaderStats;},
    attack: function(){
        gameStart = true;
        $(".yourchar").append(vader);
        attacker = true;
        attackerStats = vaderStats;
        $(".enemies").append(yoda);
        $(".enemies").append(trooper);
        $(".enemies").append(r2D2);}
}
var trooperStats = {
    hp:100,
    baseAttack:8,
    attack:8,
    vanquish: function(){
        $(".vanquished").append(trooper);
        defender = false; },
    defend: function(){
        $(".defender").append(trooper);
        defender = true;
        defenderStats = trooperStats;},
    attack: function(){
        gameStart = true;
        $(".yourchar").append(trooper);
        attacker = true;
        attackerStats = trooperStats;
        $(".enemies").append(vader);
        $(".enemies").append(yoda);
        $(".enemies").append(r2D2);}
}
var r2D2Stats = {
    hp:120,
    baseAttack:10,
    attack:10,
    vanquish: function(){
        $(".vanquished").append(r2D2);
        defender = false; },
    defend: function(){
        $(".defender").append(r2D2);
        defender = true;
        defenderStats = r2D2Stats;},
    attack: function(){
        gameStart = true;
        $(".yourchar").append(r2D2);
        attacker = true;
        attackerStats = r2D2Stats;
        $(".enemies").append(vader);
        $(".enemies").append(trooper);
        $(".enemies").append(yoda);}
}

// code for moving the characters' html containers when clicked on.
//because each function has already been described in the object variable, all I have to do is call the functions under the proper conditions.

yoda.on("click",function(){
    if ((attacker == false) && (defender == false) && (gameStart == false) && (gameEnd == false)){
        yodaStats.attack();
    } else if (attacker == true && defender == false && gameStart == true && gameEnd == false && yodaStats != attackerStats) {
        yodaStats.defend();
    }
})
vader.on("click",function(){
    if ((attacker == false) && (defender == false) && (gameStart == false) && (gameEnd == false)){
        vaderStats.attack();
    } else if (attacker == true && defender == false && gameStart == true && gameEnd == false && vaderStats != attackerStats) {
        vaderStats.defend();
    }
})
trooper.on("click",function(){
    if ((attacker == false) && (defender == false) && (gameStart == false) && (gameEnd == false)){
        trooperStats.attack();
    } else if (attacker == true && defender == false && gameStart == true && gameEnd == false && trooperStats != attackerStats) {
        trooperStats.defend();
    }
})
r2D2.on("click",function(){
    if ((attacker == false) && (defender == false) && (gameStart == false) && (gameEnd == false)){
        r2D2Stats.attack();
    } else if (attacker == true && defender == false && gameStart == true && gameEnd == false && r2D2Stats != attackerStats) {
        r2D2Stats.defend();
    }
})

// attack button code//
$("attack").on("click", function(){
    if (gameStart == true && gameEnd == false && attacker == true && defender == true){
        
    }
})



