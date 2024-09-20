/*
Battle Test Mode

Attack and Defence style combat. Players will be able to attack and potentially parry attacks 

EXPERIMENTAL**** Release when in proper state
*/

var enemyselect = 0;
function OpenTestmode() {
document.getElementById("myNav8").style.height = "0";	
document.getElementById("battle_box1").style.display = "";	
document.getElementById("pro-info-bar").style.display = "";	
document.getElementById("mono_bttn").style.display = "none";	
TestMode(0);
}
function OpenTestmode2() {//mono_bttn
document.getElementById("myNav8").style.height = "0";	
document.getElementById("myNav").style.height = "0";	
document.getElementById("battle_box1").style.display = "";	
document.getElementById("mono_bttn").style.display = "none";
document.getElementById("pro-info-bar").style.display = "";		
}
var attackteam = 0;
var plyrattk = 0;
var enmyattk = 0;
function TestMode(battlecode) {
	/*
	battlecode = what it needs to do 0 = new; 1 = update; 2 = victory; 3 = defeat; 
	battle_nodes[0] = is a battle still going on
	*/
	if(battlecode == 0) {//new battle enemyhealthind
		//new battle
		if(battle_nodes[0] == 0) {
		//starting at beggining so load player stats
			
			playerslots_value[0] = damagerolls[plyrslots[0]];
			
			//player health
			playerslots_value[5] = 20;
			playerslots_value[6] = playerslots_value[5];
			enemy_nodes[0] = 0;
			
			for (var i = 0; i < ernrwdrbl.length; i++) {
				ernrwdrbl[i] = 0;
			}
			battle_nodes[0] = 1;
			battle_nodes [2] = 1;
			playerslots_value[11] = 0;
			setTimeout(function(){ TestMode(5); }, 2000);
			TestMode(1);
		}
		
		
		
		enemyselect = 12; //Math.floor((Math.random() * 11) + 0);
		if(enemyselect == 0) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 14) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Dark Knight";
			rewardtbl = [2,1,3,0,0,0,0,0];
			enemy_nodes[4] = 0;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/dark_knight.gif";
		}
		if(enemyselect == 1) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 18) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "EyeIP";
			rewardtbl = [0,1,2,0,1,1,1,0];
			enemy_nodes[4] = 1;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/eyeip.gif";
		}
		if(enemyselect == 2) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 20) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Enchanted EyeIp";
			rewardtbl = [0,0,2,1,1,1,1,0];
			enemy_nodes[4] = 2;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/eyeip_enchanted.gif";
		}
		if(enemyselect == 3) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 15) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Ghost";
			rewardtbl = [4,0,1,1,0,0,0,0];
			enemy_nodes[4] = 3;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/ghost.gif";
		}
		if(enemyselect == 4) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 14) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Golden Knight";
			rewardtbl = [0,0,0,6,0,0,0,0];
			enemy_nodes[4] = 4;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/golden_knight.gif";
		}
		if(enemyselect == 5) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 25) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Golem";
			rewardtbl = [0,4,2,0,0,0,0,0];
			enemy_nodes[4] = 5;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/golem.gif";
		}		
		if(enemyselect == 6) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 12) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Mecha";
			rewardtbl = [0,0,6,0,0,0,0,0];
			enemy_nodes[4] = 6;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/mecha.gif";
		}		
		if(enemyselect == 7) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 14) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Miner";
			rewardtbl = [1,4,1,0,0,0,0,0];
			enemy_nodes[4] = 7;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/miner.gif";
		}		
		if(enemyselect == 8) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 13) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Raider";
			rewardtbl = [6,0,0,0,0,0,0,0];
			enemy_nodes[4] = 8;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/raider.gif";
		}	
		if(enemyselect == 9) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 12) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Scavenger";
			rewardtbl = [3,0,1,1,1,0,0,0];
			enemy_nodes[4] = 9;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/scavenger.gif";
		}	
		if(enemyselect == 10) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 17) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Soldier";
			rewardtbl = [0,0,1,2,1,1,0,1];
			enemy_nodes[4] = 10;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/soldier.gif";
		}	
		if(enemyselect == 11) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 22) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "Spec. Ops Soldier";
			rewardtbl = [0,0,1,2,1,1,0,1];
			enemy_nodes[4] = 11;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/spec_ops.gif";
		}
		
		if(enemyselect == 12) {
			enemy_nodes[0] = ((Math.floor((Math.random() * 22) + 1)) * plyrstats[0]) * 2 * 2;
			enemy_nodes[1] = enemy_nodes[0];
			id = "NPC#abfgh001";
			rewardtbl = [1,1,1,1,1,1,1,1];
			enemy_nodes[4] = 11;
			document.getElementById("enemyimg2").src = "assets/img/animations/enemies/TEST_idle_left.png";
		}
		TestMode(1);
	}

	if(battlecode == 1) {//update battle enemyhealthind
	EnemyAnim();
	PlayerAnim();
		
		document.getElementById("Dungeon_Progress2").innerHTML = battle_nodes[1] + " / " + battle_nodes[2] + "   " + playeranimationcode;
		document.getElementById("pro-info-bar").value = enemy_nodes[0];
		document.getElementById("pro-info-bar").max = enemy_nodes[1];
		document.getElementById("progress-text").innerHTML = id + "<br><br>" + enemy_nodes[0] + " / " + enemy_nodes[1];
		document.getElementById("enemyhealthind2").innerHTML = enemy_nodes[0] + " / " + enemy_nodes[1];
		document.getElementById("playerhealthind2").innerHTML = playerslots_value[5] + " / " + playerslots_value[6];
		
		//player armor stats
		if(playerslots_value[8] <= 0 ) {
			playerslots_value[8] = 0;	
		}
		
		//player hit history and enemy history
		//player health and enemy health ui
		//players ammo count for arrows
		
		if(enemy_nodes[0] <= 0) {
			battle_nodes[3] = 0;
			enemy_nodes[0] = 0;
			playerslots_value[8] = 0;
			TestMode(3);
		}
		if(playerslots_value[5] <= 0 ) {
			battle_nodes[3] = 0;
			playerslots_value[8] = 0;
			TestMode(4);
		}
			
	}
	
	if(battlecode == 2) {//Attack Condition
		//what weapon
		
		
		//enemy_nodes[0] -= playerslots_value[0];   + plyrstats[5]) * modifiers[0]
		  playerslots_value[14] = ((Math.floor((Math.random() * playerslots_value[0]) + 1)) + plyrstats[5]) * modifiers[0];
		  plyrattk = 1;
		  TestMode(1);
		  attackteam = 2;
		  TestMode(7);
		  

	}
	
	if(battlecode == 3) {//victory conditon
		team1warning = 0;
		team2warning = 0;
		enemytoattck = 0;
		//rewardtbl = [2,1,3,0,0,0,0,0];
		
		for (var i = 0; i < ernrwdrbl.length; i++) {
			ernrwdrbl[i] += rewardtbl[i];
		}
		
		if(battle_nodes[1] <= battle_nodes[2]) {
			battle_nodes[1] += 1;
			plyrstats[1] += 2;
			TestMode(0);
			TestMode(1);
		}
		if(battle_nodes[1] > battle_nodes[2]) {
			TestMode(1);
			for (var i = 0; i < resources.length; i++) {
				resources[i] += ernrwdrbl[i];
			}	//erndernd
			
			for (var i = 0; i < ernrwdrbl.length; i++) {
				document.getElementById('ernd' + i).innerHTML = "+ " + ernrwdrbl[i];
			}//ernd
			
			//alert("Victory!");//determined
			document.getElementById("determined").innerHTML = "Victory!";
			OpenClose(1,7);
			battle_nodes[1] = 0;
			battle_nodes[0] = 0;
			if(battle_nodes[4] == 0) {//not selected, random
			plyrstats[1] += 5;
			}
			if(battle_nodes[4] == 1) {//s
			plyrstats[1] += 10;
			}
			if(battle_nodes[4] == 1) {//m
			plyrstats[1] += 20;
			}
			if(battle_nodes[4] == 1) {//l
			plyrstats[1] += 30;
			}
			if(battle_nodes[4] == 1) {//xl
			plyrstats[1] += 50;
			}
		}
	}
	
	if(battlecode == 4) {//defeat condition
			
			
			team1warning = 0;
			team2warning = 0;
			enemytoattck = 0;

			battle_nodes[0] = 0;
			battle_nodes[1] = 0;
			playerslots_value[5] = 20;
			document.getElementById("determined").innerHTML = "Defeat!";
			for (var i = 0; i < ernrwdrbl.length; i++) {
				ernrwdrbl[i] = 0;
				document.getElementById('ernd' + i).innerHTML = "+ " + ernrwdrbl[i];
			}
			OpenClose(1,7);
	}
	
	if(battlecode == 5) {//enemy attack condition
		if(battle_nodes[0] != 0) {
		enemytoattck = Math.floor(Math.random() * 2) + 1;
		enemy_nodes[6] = Math.floor(Math.random() * 3) + 0;
		enemy_nodes[3] = (Math.floor((Math.random() * enemydamage[enemy_nodes[4]]) + 1));
		
		
		if(enemy_nodes[6] == 0) {//attack right
			setTimeout(function(){ 
			enemy_nodes[6] = 0; 
			TestMode(1);
			
			if(enemytoattck == 2) {//attack
				enemy_nodes[9] = 1; 
				attackteam = 1;
				TestMode(8);
			} else {
					setTimeout(function(){ TestMode(5); }, 3000);
			}

			}, 1000);
		}
		if(enemy_nodes[6] == 1) {//attack right
			setTimeout(function(){ 
			enemy_nodes[6] = 1; 
			TestMode(1);
			
			if(enemytoattck == 2) {//attack
				enemy_nodes[9] = 1; 
				attackteam = 1;
				TestMode(8);
			}else {
					setTimeout(function(){ TestMode(5); }, 3000);
			}
			
			}, 1000);
		}
		if(enemy_nodes[6] == 2) {//attack right
			setTimeout(function(){ 
			enemy_nodes[6] = 2; 
			TestMode(1);
			
			if(enemytoattck == 2) {//attack
				enemy_nodes[9] = 1; 
				attackteam = 1;
				TestMode(8);
			}else {
					setTimeout(function(){ TestMode(5); }, 3000);
			}
			
			}, 1000);
		}
		//TestMode(1);
		}
	}
	
	if(battlecode == 6) {//attk def state
		playerslots_value[9] += 1;
		if(playerslots_value[9] == 2) {
		playerslots_value[9] = 0;	
		}
		if(playerslots_value[9] == 0) {
		document.getElementById("bttn_att_def_state").innerHTML = "Att";
		}
		if(playerslots_value[9] == 1) {
		document.getElementById("bttn_att_def_state").innerHTML = "Def";
		}
	}

	if(battlecode == 7) {//determine discressionary outcomes
				team2warning += 1;
				
					if(team2warning == 1) {//begins warning
						setTimeout(function(){ attackteam == 2; TestMode(7); }, 1500);
					}
					if(team2warning == 2) {
						if(playerslots_value[11] == enemy_nodes[6]) {
							//alert("Blocked!");
							playerslots_value[12] -= (playerslots_value[14] * 1.25);
							enemy_nodes[7] -= (playerslots_value[14] * 1.5);
							plyrattk = 0;
							playAudio1();
						}
						if(playerslots_value[11] != enemy_nodes[6]) {
							//alert("Damage!");
							playerslots_value[12] -= (enemy_nodes[3] * 1.35);
							enemy_nodes[7] -= (playerslots_value[14] * 1);
							enemy_nodes[0] -= playerslots_value[14];
							plyrattk = 0;
							playAudio();
						}
						
						team2warning = 0;
					}
		TestMode(1);
	}
	
	if(battlecode == 8) {//determine discressionary outcomes
				team1warning += 1;
				
					if(team1warning == 1) {//begins warning
						setTimeout(function(){ attackteam == 1; TestMode(8); }, 1500);
					}
					if(team1warning == 2) {
						if(playerslots_value[11] == enemy_nodes[6]) {
							//alert("Blocked!");
							playerslots_value[12] -= (enemy_nodes[3] * 1.5);
							enemy_nodes[7] -= (enemy_nodes[3] * 1.25);
							enemytoattck = 0;
							setTimeout(function(){ TestMode(5); }, 3000);
							TestMode(1);
							playAudio1();
						}
						if(playerslots_value[11] != enemy_nodes[6]) {
							//alert("Damage!");
							playerslots_value[12] -= (enemy_nodes[3] * 1.35);
							enemy_nodes[7] -= (enemy_nodes[3] * 1);
							playerslots_value[5] -= enemy_nodes[3];
							enemytoattck = 0;
							setTimeout(function(){ TestMode(5); }, 3000);
							TestMode(1);
							playAudio();
						}
						
						team1warning = 0;
					}
		TestMode(1);
	}
	
}

var team1warning = 0;
var team2warning = 0;
var enemytoattck = 0;

//input.addEventListener('keydown', TestControls1());

document.addEventListener("keyup", function(event) {
  /*switch(event) {
	 case 48: 
		setTimeout(function(){ enemy_nodes[6] = 2; TestMode(1);}, 750);
	 break;
	 case 57: 
		setTimeout(function(){ enemy_nodes[6] = 1; TestMode(1);}, 750);
	 break;
	 case 56: 
		setTimeout(function(){ enemy_nodes[6] = 0; TestMode(1);}, 750);
	 break;
  }*/
  		if(event == 56) {//defend right side
			setTimeout(function(){ enemy_nodes[6] = 0; TestMode(1);}, 750);
		}
		if(event == 57) {//defend top side
			setTimeout(function(){ enemy_nodes[6] = 1; TestMode(1);}, 750);
		}
		if(event == 48) {//defend left side
			setTimeout(function(){ enemy_nodes[6] = 2; TestMode(1);}, 750);
		}
});

function TestControls(callbaclk) {
		//player controls
		if(callbaclk == 0) {//defend right side
			setTimeout(function(){ playerslots_value[11] = 0; TestMode(1); PlayerAnim();}, 750);
		}
		if(callbaclk == 1) {//defend top side
			setTimeout(function(){ playerslots_value[11] = 1; TestMode(1); PlayerAnim();}, 750);
		}
		if(callbaclk == 2) {//defend left side
			setTimeout(function(){ playerslots_value[11] = 2; TestMode(1); PlayerAnim();}, 750);
		}
		
		if(callbaclk == 9) {//defend right side
			setTimeout(function(){ enemy_nodes[6] = 0; TestMode(1);}, 750);
		}
		if(callbaclk == 8) {//defend top side
			setTimeout(function(){ enemy_nodes[6] = 1; TestMode(1);}, 750);
		}
		if(callbaclk == 7) {//defend left side
			setTimeout(function(){ enemy_nodes[6] = 2; TestMode(1);}, 750);
		}
		
	TestMode(1);
}

function TestControls1() {
		//player controls
		if(callbaclk == 0) {//defend right side
			setTimeout(function(){ playerslots_value[11] = 0; TestMode(1);}, 750);
		}
		if(callbaclk == 1) {//defend top side
			setTimeout(function(){ playerslots_value[11] = 1; TestMode(1);}, 750);
		}
		if(callbaclk == 2) {//defend left side
			setTimeout(function(){ playerslots_value[11] = 2; TestMode(1);}, 750);
		}
		
		if(callbaclk == 9) {//defend right side
			setTimeout(function(){ enemy_nodes[6] = 0; TestMode(1);}, 750);
		}
		if(callbaclk == 8) {//defend top side
			setTimeout(function(){ enemy_nodes[6] = 1; TestMode(1);}, 750);
		}
		if(callbaclk == 7) {//defend left side
			setTimeout(function(){ enemy_nodes[6] = 2; TestMode(1);}, 750);
		}
		
	TestMode(1);
}