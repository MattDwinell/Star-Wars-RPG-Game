//globally declaring all variables, setting the characters as objects and letting those objects call functions which move the character's html element. This way the attack button code can be as short as possible to avoid confusion.

var yoda = $(".yoda");
var vader = $(".vader");
var trooper = $(".trooper");
var r2D2 = $(".r2d2");
var fluffy = $(".fluffy");
var palpatine = $(".palpatine");
var secretCharacter = false;
var finalBoss = false;
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
var fluffyHp = $("#fluffyhp");
var palpatineHp = $("#palpatinehp");
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
        $(".enemies").append(r2D2);
        if (secretCharacter == true){
            $(".enemies").append(fluffy);
        }}
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
        $(".enemies").append(r2D2);
        if (secretCharacter == true){
            $(".enemies").append(fluffy);
        }}
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
        $(".enemies").append(r2D2);
        if (secretCharacter == true){
            $(".enemies").append(fluffy);
        }}
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
        $(".enemies").append(yoda);
            if (secretCharacter == true){
                $(".enemies").append(fluffy);
            }
    }
}
var fluffyStats = {
    name: "fluffy",
    hp:7,
    hpUpdate: function(){
        fluffyHp.text(fluffyStats.hp);
    },
    baseAttack:34,
    attackValue:34,
    vanquish: function(){
        $(".vanquished").append(fluffy);
        defender = false; },
    defend: function(){
        $(".defender").append(fluffy);
        defender = true;
        defenderStats = fluffyStats;},
    attack: function(){
        gameStart = true;
        $(".yourchar").append(fluffy);
        attacker = true;
        attackerStats = fluffyStats;
        $(".enemies").append(yoda);
        $(".enemies").append(vader);
        $(".enemies").append(trooper);
        $(".enemies").append(r2D2);}
}
var palpatineStats = {
    name: "Palpatine",
    hp:220,
    hpUpdate: function(){
        palpatineHp.text(palpatineStats.hp);
    },
    baseAttack:200,
    attackValue:200,
    vanquish: function(){
        $(".vanquished").append(palpatine);
        defender = false; },
    defend: function(){
        $(".defender").append(palpatine);
        defender = true;
        defenderStats = palpatineStats;},
    attack: function(){
        gameStart = true;
        $(".yourchar").append(palpatine);
        attacker = true;
        attackerStats = palpatineStats;
        $(".enemies").append(yoda);
        $(".enemies").append(vader);
        $(".enemies").append(trooper);
        $(".enemies").append(r2D2);}
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
fluffy.on("click",function(){
    if ((attacker == false) && (defender == false) && (gameStart == false) && (gameEnd == false)){
        fluffyStats.attack();
    } else if (attacker == true && defender == false && gameStart == true && gameEnd == false && fluffyStats != attackerStats) {
        fluffyStats.defend();
    }
})
palpatine.on("click", function(){
    if(attacker == true && defender == false && gameStart == true && gameEnd == false){
    palpatineStats.defend();
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
    if (attackerStats == yodaStats && defenderStats == vaderStats){
        secretCharacter = true;
        
    } else if  ((attackerStats == fluffyStats || attackerStats == r2D2Stats) && defenderStats == vaderStats){
        finalBoss =true;
        if(finalBoss == true && palpatineStats.hp > 0){
            $("#fight-message").text("You have awakened scary lighting man. prepare for final boss");
            $(".enemies").append(palpatine);
        }
    }
    if (gameStart == true && gameEnd == false && attacker == true && defender == true){
        console.log(defenderStats);
        defenderStats.hp -= attackerStats.attackValue;
        attackerStats.attackValue += attackerStats.baseAttack;
        defenderStats.hpUpdate();
        
        if (defenderStats.hp <= 0){
            if (secretCharacter == true && finalBoss == true && palpatineStats.hp <= 0){
                alert("the power of puppy love (and, lets be honest, probably mutant super powers) has saved the galaxy! You may now rest on your laurels/ paws.");
            }
            defenderStats.vanquish();
            defender = false;
            $("#fight-message").text("You dealt " + (attackerStats.attackValue - attackerStats.baseAttack)+ " damage and defeated " + defenderStats.name + "!");
            if ($(".enemies > div").length <=0){
                
                gameEnd = true;
                $("#fight-message").text("You dealt " + (attackerStats.attackValue - attackerStats.baseAttack) + " damage and defeated " + defenderStats.name + "! You win! Have you found the two extra characters yet?");
                $("#restart").css("display","block");}
        }else {
            attackerStats.hp -= defenderStats.baseAttack;
            attackerStats.hpUpdate();
            $("#fight-message").text("You dealt " + (attackerStats.attackValue - attackerStats.baseAttack) + " damage to " + defenderStats.name + " and They dealt " + defenderStats.baseAttack + " damage to you." );
            if(attackerStats.hp <= 0){
                $("#fight-message").text(defenderStats.name + " defeated you. Try again?")
                gameEnd = true;
                $("#restart").css("display","block");

            }
        }
    }
})

// changing the mouse pointer when it hovers over the restart button//
$("#restart").hover(function(){
    $(this).css("cursor", "grab");
    }, function(){
    $(this).css("cursor", "pointer");
  });


// coding for the restart button //
$("#restart").on("click",function(){
    if (gameEnd == true){
        gameEnd = false;
        gameStart = false;
        attacker = false;
        defender = false;
        $(".choosechar").append(yoda, vader, trooper, r2D2);
        defenderStats = {};
        attackerStats = {};
        yodaStats.hp = 100;
        yodaStats.attackValue = yodaStats.baseAttack;
        vaderStats.hp = 120;
        vaderStats.attackValue = vaderStats.baseAttack;
        trooperStats.hp = 80;
        trooperStats.attackValue = trooperStats.baseAttack;
        r2D2Stats.hp = 200;
        r2D2Stats.attackValue = r2D2Stats.baseAttack;
        yodaStats.hpUpdate();
        vaderStats.hpUpdate();
        trooperStats.hpUpdate();
        r2D2Stats.hpUpdate();
        $("#restart").css("display","none");
        $("#fight-message").text("press attack to fight!")
        if(secretCharacter == true){
            fluffyStats.hp = 7;
            fluffyStats.attackValue = fluffyStats.baseAttack;
            fluffyStats.hpUpdate();
            $(".choosechar").append(fluffy);
        }

        
        if(finalBoss == true){
            palpatineStats.hp = 220;
            palpatineStats.hpUpdate();
            $(".enemies").append(palpatine);
        }
        

    }
})


