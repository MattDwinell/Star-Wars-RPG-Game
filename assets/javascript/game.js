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
var yodaHp = $("#yodahp");
var vaderHp = $("#vaderhp");
var trooperHp = $("#trooperhp");
var r2D2Hp = $("#r2d2hp");
var yodaStats = {
    name: "Yoda",
    hp:100,
    hpUpdate: function(){
        yodaHp.text(yodaStats.hp);
    },
    baseAttack:10,
    attackValue:10,
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
    name: "Darth-Vader",
    hp:120,
    hpUpdate: function(){
        vaderHp.text(vaderStats.hp);
    },
    baseAttack:25,
    attackValue:25,
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
    name: "Storm Trooper",
    hp:80,
    hpUpdate: function(){
        trooperHp.text(trooperStats.hp);
    },
    baseAttack:10,
    attackValue:10,
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
    name: "R2D2",
    hp:200,
    hpUpdate: function(){
        r2D2Hp.text(r2D2Stats.hp);
    },
    baseAttack:3,
    attackValue:3,
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
// changing the mouse pointer when it hovers over the attack button//
$("#attack").hover(function(){
    $(this).css("cursor", "crosshair");
    }, function(){
    $(this).css("cursor", "pointer");
  });
// attack button code. can describe everything in terms of attacker stats & defender stats. //
$("#attack").on("click", function(){
    console.log(gameStart, gameEnd, attacker, defender);
    if (gameStart == true && gameEnd == false && attacker == true && defender == true){
        console.log(defenderStats);
        defenderStats.hp -= attackerStats.attackValue;
        attackerStats.attackValue += attackerStats.baseAttack;
        defenderStats.hpUpdate();
        
        if (defenderStats.hp <= 0){
            defenderStats.vanquish();
            defender = false;
            $("#fight-message").text("You defeated " + defenderStats.name + "!");
            if ($(".enemies > div").length <=0){
                gameEnd = true;
                $("#fight-message").text("You win! Play again?");
                $("#restart").css("display","inline-block");
            }
        }else {
            attackerStats.hp -= defenderStats.baseAttack;
            attackerStats.hpUpdate();
            $("#fight-message").text("You dealt " + (attackerStats.attackValue - attackerStats.baseAttack) + " damage to " + defenderStats.name + " and They dealt " + defenderStats.baseAttack + " damage to you." );
            if(attackerStats.hp <= 0){
                $("#fight-message").text(defenderStats.name + " defeated you. try again?")
                gameEnd = true;
                $("#restart").css("display","inline-block");

            }
        }
    }
})



