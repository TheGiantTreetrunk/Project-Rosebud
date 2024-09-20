
	//game manager
	var game_score = 0;
	var game_map = 0;
	var game_map_biome = [1];
	var game_map_elevation = [0];
	var game_map_water = [0];
	var game_map_minerals = [0];
	var game_map_fertile_soil = [0];
	var game_map_wildlife = [0];
	var game_map_foliage = [0];
	var game_days = 0;
	var game_time_of_day = 0;
	var game_weather = [0];
	var game_distance_traveled = 0;
	var game_kills = 0;
	var game_current_tile = 0;
	var map_pack = 0;//for modularity of different map packs
	var inbattle = 0;
	
	
	var time_of_day = ["Dawn","Morning","Noon","Evening","Night","Dusk"];
	
	//assets to pull from bedrock
	var bedrock_biomes = ["grasslands","forest","tundra","dessert","woodlands","swamp","jungle"];
	var bedrock_elevation = ["sea level", "hills","plains","mountian"];
	var bedrock_water = ["no water","creek","river","lake","ocean"];
	var bedrock_minerals = ["none","low","medium","high"];
	var bedrock_fertile_soil = ["none","low","medium","high"];
	var bedrock_wildlife = ["none","low","medium","high"];
	var bedrock_foliage = ["none","low","medium","high"];
	var bedrock_weather = ["clear","partly cloudy","mostly cloudy","cloudy","rain showers","snow fall","thunder","hail"];
	
	//add future updates like hellworld and water world assets below.
	
	
	//player interactive commands
	var commands_map = ["Forward","Retreat","Eat","Drink","Sleep","forage","dowsing","set camp", "reconnaissance"];
	var commands_battle = ["Attack","Defend","Buff Up","Forward","Retreat"];
					
	var player = {
		Name: "A Traveler",
		Health: 10,
		Academic: 10,
		Mobility: 10,
		Strength: 10,
		Weapon: 0,
		Armor: 0,
		Food: 100,
		Water: 100,
		Battery: 98,
		Exhaustion: 0
	};
	
	var player_inventory = {
		supertool: 1,
		foods: 5,
		waters: 5,
		wood: 5,
		stone: 5,
		cooking_pot: 0,
		gold_coins: 10,
		iron: 5,
		steel: 5,
		coal: 1,
		ruby: 1,
		saphire: 1,
		emerald: 1,
		daimond: 1,
		gold: 5,
		silver: 5,
		fur: 1,
		feather: 1,
		advanced_alloy: 1,
		sulfur: 1,
	};
			
	var enemy = {
		Name: "",
		Pawn: 0,
		Weapon: 0,
		Health: 2,
		Armor: 7,
		Mobility: 8,
		Strength: 10
	};
			
	/*COCOA PAWN*/
	var char1 = "data:image/png;base64, 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dHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6MTJiOTc4MzMtZjRiOS00OWIwLThlNDMtM2QwMGRlZjk3OTkyIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0Y2VkNzBkLTI1YjYtNGZlYS04MzA0LTg2NzdjYjZjNDgxNCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjRlYzlkYWQ0LTRjYjItNDcyMy04NzY4LTkzNmUyYTM5OWYwYSIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNzE0MzQ0MjUzNTUzNTY4IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzQiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0OjA0OjI4VDE1OjQ0OjEzLTA3OjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNDowNDoyOFQxNTo0NDoxMy0wNzowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1Y2RiYzA4LTg2ZDctNGRjZS04NGMyLTlhMDhmNGZjM2ZhOCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMy0wNC0wOVQxNDowNToxOCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMWRhZGQwZC0wNzM2LTRmM2YtOTY2YS0wM2EyMmMxZDU5ODgiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjMtMDQtMDlUMTU6MDc6NTYiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjY0ZGU4OGUtYWU4ZC00MTFjLThjMzMtY2M1Y2FlODcxNzQ2IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTA0LTI4VDExOjA0OjIyIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmNzIzNzI1LTY1MDAtNDI5MC05YTk1LThmMThlZWUzMjE5YSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNC0wNC0yOFQxNTo0NDoxMyIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7DevsIAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AQcFiwNhqe1eQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAA6SURBVBjTjY9BDgAgDMKK//8znrapcUYukDQsQ5TMLgGMpC6+ZjXt5CNgtA4PZt8csB7n/36gmZl5AnYAJ+TxnGeOAAAAAElFTkSuQmCC";
	
	function launch() {
		let usrinp = prompt("What shall thy hero be called:", "");
		if (usrinp == null || usrinp == "") {
		  alert("Thy hero cannot be nameless!");
		  launch();
		} else {
		  alert(usrinp + "! Your journey awaits!");
		  player.Name = usrinp;
		  startup();
		}
	
		//alert("works");
	}
	
	function generate() {
		
	}
	
	function startup() {
		document.getElementById("game_portion").classList.remove("hide_this");
		document.getElementById("main_menu").style.display = "none";
		document.getElementById("game_portion").style.display = "block";
		document.getElementById("body").classList.add("body_desktop");
		document.getElementById("plyrname_tag").innerHTML = player.Name + "'s Long Journey Ahead...";
		document.getElementById("plyr_stat_block").innerHTML = 
		"<img id='plyr_icon'>";
		
		document.getElementById("plyr_icon").src = char1;
		document.getElementById("player_rpg_stat_health").innerHTML = player.Health;
		document.getElementById("player_rpg_stat_academic").innerHTML = player.Academic;
		document.getElementById("player_rpg_stat_mobility").innerHTML = player.Mobility;
		document.getElementById("player_rpg_stat_strength").innerHTML = player.Strength;
		document.getElementById("player_rpg_stat_weapon").innerHTML = player.Weapon;
		document.getElementById("player_rpg_stat_armor").innerHTML = player.Armor;
		document.getElementById("player_rpg_stat_food").innerHTML = player.Food;
		document.getElementById("player_rpg_stat_water").innerHTML = player.Water;
		document.getElementById("player_rpg_stat_battery").innerHTML = player.Battery;
		

		
		Inventory_Update();
		World();
		tabz(event, 'commanda');
		Commands(0);
		DayNightController();
	}

	
	function Inventory_Update() {
		document.getElementById("inventory_list").innerHTML = 
		"Super Tool: " + player_inventory.supertool + "<br>" +
		"Food: " + player_inventory.foods + "<br>" +
		"Water: " + player_inventory.waters + "<br>" +
		"Wood: " + player_inventory.wood + "<br>" +
		"Stone: " + player_inventory.stone + "<br>" +
		"Cooking Pot: " + player_inventory.cooking_pot + "<br>" +
		"Gold Coins: " + player_inventory.gold_coins + "<br>" +
		"Iron: " + player_inventory.iron + "<br>" +
		"Steel: " + player_inventory.steel + "<br>" +
		"Coal: " + player_inventory.coal + "<br>" +
		"Ruby: " + player_inventory.ruby + "<br>" +
		"Saphire: " + player_inventory.saphire + "<br>" +
		"Emerald: " + player_inventory.emerald + "<br>" +
		"Daimond: " + player_inventory.daimond + "<br>" +
		"Gold: " + player_inventory.gold + "<br>" +
		"Silver: " + player_inventory.silver + "<br>" +
		"Fur: " + player_inventory.fur + "<br>" +
		"Feather: " + player_inventory.feather + "<br>" +
		"Advanced Alloy: " + player_inventory.advanced_alloy + "<br>" +
		"Sulfur: " + player_inventory.sulfur + "<br>";
	}

	function Core(action)/*Prototype Battle System (Simple Dice Roller)*/{
		if(action == 0)/*load data*/{
			if(texillus.player.stats[1] <= 0)/*defeat condition*/{
				alert("The Enemy Wins!");
				Engine(0);
			}else if(texillus.enemy.stats[1] <= 0)/*victory condition*/{
				alert("The Player Wins!");
				Engine(0);
			}else /*otherwiseload*/{Engine(3);}
		}
		if(action == 1)/*Roll Data*/{
			var plyroll = Math.floor(Math.random() * 6) + 1;
			var enyroll = Math.floor(Math.random() * 6) + 1;
			if(plyroll > enyroll) {
				alert("Players: " + plyroll + " " + "Enemies: " + enyroll + " The Player Wins!");
				texillus.enemy.stats[1] -= plyroll - enyroll;
			}
			if(plyroll < enyroll) {
				alert("Players: " + plyroll + " " + "Enemies: " + enyroll + " The Enemy Wins!");
				texillus.player.stats[1] -= enyroll - plyroll;
			}
			if(plyroll == enyroll) {
				alert("Players: " + plyroll + " " + "Enemies: " + enyroll + " Nothing Hits!");

			}
			Core(0);
		}
	}
	
	function Commands(command) {
		if(command == 0) {
			document.getElementById("rpg_text_output").innerHTML = "The joyrney begins.";
		}
		
		if(command == 1) {//forward command
			game_current_tile += 1;
			World();
			document.getElementById("rpg_text_output").innerHTML = "You move forward.";
			Survival_Controller();
			DayNightController();
		}
		
		if(command == 2) {//retreat command
			if(game_current_tile == 0) {
				alert("you cant go anymore backwards");
			} else {
				game_current_tile -= 1;
				World();
				document.getElementById("rpg_text_output").innerHTML = "You move backward.";
				Survival_Controller();
				DayNightController();
			}
		}
		
		if(command == 3) {//eat command
			if(player.Food < 100) {//are you actually hungry you fat fuck!
				if(player_inventory.foods > 1) {//do you actually have food?
					player.Food = 100;
					player_inventory.foods -= 1;
					document.getElementById("rpg_text_output").innerHTML = "You eat food.";
				} else {//you ate it all!
					document.getElementById("rpg_text_output").innerHTML = "You have no food...";
				}
			} else {//your full you fat fuck!
				document.getElementById("rpg_text_output").innerHTML = "You are not hungry.";
			}

			document.getElementById("player_rpg_stat_food").innerHTML = player.Food;
			Inventory_Update();
		}
		
		if(command == 4) {//drink command
			if(player.Water < 100) {//are you actually!
				if(player_inventory.waters > 1) {//do you actually have water?
					player.Water = 100;
					player_inventory.waters -= 1;
					document.getElementById("rpg_text_output").innerHTML = "You drink water.";
				} else {//you drank it all!
					document.getElementById("rpg_text_output").innerHTML = "You have no water";
				}
			} else {//your full you idiot!
				document.getElementById("rpg_text_output").innerHTML = "You are not thirsty.";
			}

			document.getElementById("player_rpg_stat_water").innerHTML = player.Water;
			Inventory_Update();
		}
		
		if(command == 5) {//sleep command
		
		}
		
		if(command == 6) {//forage command
		
		}
		
		if(command == 7) {//dowsing command
		
		}
		
		if(command == 8) {//set camp command
		
		}
		
		if(command == 9) {//reconnaissance command
		
		}
		
		if(command == 10) {//go fish command
			
		}
		
		if(command == 11) {//forage basic command
		
		}
		
		if(command == 12) {//collect water from river command
		
		}
		
		if(command == 13) {//collect water from dowsing stick command
		
		}
		
		if(command == 14) {//
		
		}
	}
	
	function Output_Commando (commando) {
		
	}

	function Survival_Controller() {
		/*
		Core info for survival
		3 minutes without air
		3 days without water
		3 weeks without food

		3 days / 6 parts of in game = 18 actions before completely running out of water.
		3 weeks = 21 days too much... just do 6 days without food = 36 total actions before completely running out of food.
		
		*/

		player.Water -= 10;
		player.Food -= 5;
		document.getElementById("player_rpg_stat_food").innerHTML = player.Food;
		document.getElementById("player_rpg_stat_water").innerHTML = player.Water;

	}

	function DayNightController () {
		//alert("test");
		game_time_of_day += 1;
		
		if(game_time_of_day <= 5) {
			

			//var time_of_day = ["Dawn","Morning","Noon","Evening","Night","Dusk"];
			const yelement = document.getElementById("daytime_stat_and_position");
			yelement.classList.remove("rpg_time_stat_dawn");
			yelement.classList.remove("rpg_time_stat_morning");
			yelement.classList.remove("rpg_time_stat_noon");
			yelement.classList.remove("rpg_time_stat_evening");
			yelement.classList.remove("rpg_time_stat_night");
			yelement.classList.remove("rpg_time_stat_dusk");

			document.getElementById("rpg_tod_counter").innerHTML = time_of_day[game_time_of_day];

			if(game_time_of_day == 0) {
				document.getElementById("daytime_stat_and_position").classList.add("rpg_time_stat_dawn");
			}

			if(game_time_of_day == 1) {
				document.getElementById("daytime_stat_and_position").classList.add("rpg_time_stat_morning");
			}

			if(game_time_of_day == 2) {
				document.getElementById("daytime_stat_and_position").classList.add("rpg_time_stat_noon");
			}

			if(game_time_of_day == 3) {
				document.getElementById("daytime_stat_and_position").classList.add("rpg_time_stat_evening");
			}

			if(game_time_of_day == 4) {
				document.getElementById("daytime_stat_and_position").classList.add("rpg_time_stat_night");
			}

			if(game_time_of_day == 5) {
				document.getElementById("daytime_stat_and_position").classList.add("rpg_time_stat_dusk");
			}

		}

		if(game_time_of_day == 6) {
			game_time_of_day = 0;

			const y1element = document.getElementById("daytime_stat_and_position");
			y1element.classList.remove("rpg_time_stat_dawn");
			y1element.classList.remove("rpg_time_stat_morning");
			y1element.classList.remove("rpg_time_stat_noon");
			y1element.classList.remove("rpg_time_stat_evening");
			y1element.classList.remove("rpg_time_stat_night");
			y1element.classList.remove("rpg_time_stat_dusk");

			document.getElementById("rpg_tod_counter").innerHTML = time_of_day[game_time_of_day];

			
			y1element.classList.add("rpg_time_stat_dawn");
			
		}
	}
		
	function World() {
		if(game_current_tile <= game_map) { //to determine if the player is simply moving around to a generated tile 
			//if moving to a generated tile. just load it
			if(map_pack == 0) {//bedrock edition
				
				const xelement = document.getElementById("game_map_scenery1");
				xelement.classList.remove("rpg_biome_grasslands");
				xelement.classList.remove("rpg_biome_forest");
				xelement.classList.remove("rpg_biome_tundra");
				xelement.classList.remove("rpg_biome_dessert");
				xelement.classList.remove("rpg_biome_mesa");
				xelement.classList.remove("rpg_biome_canyon");
				xelement.classList.remove("rpg_biome_woodlands");
				xelement.classList.remove("rpg_biome_swamp");
				xelement.classList.remove("rpg_biome_jungle");
			
				document.getElementById("rpg_day_counter").innerHTML = "Day: " + game_days;
				document.getElementById("rpg_tod_counter").innerHTML = time_of_day[game_time_of_day];
				document.getElementById("rpg_distance_traveled_counter").innerHTML = game_distance_traveled + " KM";
				document.getElementById("rpg_tot_kills").innerHTML = game_kills + " Kills";
				document.getElementById("rpg_biomes").innerHTML = bedrock_biomes[game_map_biome[game_current_tile]];
				document.getElementById("rpg_terrain").innerHTML = bedrock_elevation[game_map_elevation[game_current_tile]];
				document.getElementById("rpg_body_water").innerHTML = bedrock_water[game_map_water[game_current_tile]];
				
				if(bedrock_biomes[game_map_biome[game_current_tile]] == "grasslands") {
					xelement.classList.add("rpg_biome_grasslands");
				}
				
				if(bedrock_biomes[game_map_biome[game_current_tile]] == "forest") {
					xelement.classList.add("rpg_biome_forest");
				}
				
				if(bedrock_biomes[game_map_biome[game_current_tile]] == "tundra") {
					xelement.classList.add("rpg_biome_tundra");
				}
				
				if(bedrock_biomes[game_map_biome[game_current_tile]] == "dessert") {
					xelement.classList.add("rpg_biome_dessert");
				}
				
				if(bedrock_biomes[game_map_biome[game_current_tile]] == "woodlands") {
					xelement.classList.add("rpg_biome_woodlands");
				}
				
				if(bedrock_biomes[game_map_biome[game_current_tile]] == "swamp") {
					xelement.classList.add("rpg_biome_swamp");
				}
				
				if(bedrock_biomes[game_map_biome[game_current_tile]] == "jungle") {
				xelement.classList.add("rpg_biome_jungle");
				}
				
				if(inbattle == 1) {
				xelement.classList.add("rpg_biome_temp");
				}
			}
		}
		
		if(game_current_tile > game_map) {//if player has gone over the map size it will simply generate a new tile...
			//first broadcast new tile info.
			//alert("new tile");
			
			//second generate a new tile.
			var xa = Math.floor(Math.random() * bedrock_biomes.length);
			var xb = Math.floor(Math.random() * bedrock_elevation.length);
			var xc = Math.floor(Math.random() * bedrock_water.length);
			var xd = Math.floor(Math.random() * bedrock_minerals.length);
			var xe = Math.floor(Math.random() * bedrock_fertile_soil.length);
			var xf = Math.floor(Math.random() * bedrock_wildlife.length);
			var xg = Math.floor(Math.random() * bedrock_foliage.length);
			var xh = Math.floor(Math.random() * bedrock_weather.length);
			
			//third push to array
			game_map_biome.push(xa);
			game_map_elevation.push(xb);
			game_map_water.push(xc);
			game_map_minerals.push(xd);
			game_map_fertile_soil.push(xe);
			game_map_wildlife.push(xf);
			game_map_foliage.push(xg);
			game_weather.push(xh);
			
			
			//finally apply the game map size by +1.
			game_map += 1;
			
			//and now load the tile.
			World();
		}
	}