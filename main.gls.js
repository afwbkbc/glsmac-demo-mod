/**
 * Every mod starts with #main entrypoint in main.gls.js file. Mods get executed after core scripts, in same order as specified on command line.
 * 'gm' here stands for "Game Manager" which is what configures game state before it's launched.
 * See scripts of GLSMAC_data/default to understand core logic.
 * Mods don't need to copy it, instead they change or override it where needed.
 */
#main((gm) => {

	// We can print something to logs (visible only with debug builds).
	#print('Loading GLSMAC demo mod');

	/**
	 * Before game is started we can configure factions, via gm.fm ('fm' stands for "Faction Manager")
	 */

	// For example, we can remove Believers faction from game
	gm.fm.remove('BELIEVERS');

	// We can also add our custom faction. We'll keep it in separate file for convenience.
	#include('factions/democol')(gm.fm); // passing faction manager to it


	/**
	 * Now we configure the process of starting game.
	 * Note - this method (as others) is run after core scripts, so some things are already set
	 */
	gm.on('start', (e) => {

		/**
		 * e.game is game object, it can be used to manipulate game before it starts.
		 */

		// ...
		// early initialization, such as setting callbacks
		// ...

		e.game.on('start', (e) => {

			/**
			 * Here game is actually started, we can perform various startup actions.
			 */

			// for example, we can show a message (it will be printed in game and added to Messages panel).
			e.game.message('Hello, world!');

			// we can list players
			let players_list = '';
			for (player of e.game.get_players()) {
				players_list += ' ' + player.name + ' (' + player.faction.name + ')';
			}
			e.game.message('Players in game:' + players_list);

			// We can invent a custom unit, Mind Snake. We'll keep it in separate file for convenience.
			#include('units/mindsnake')(e.game.um); // passing unit manager to it

			/**
			 * Now let's spawn it at planet center
			 */

			const owner = (e.game.get_players())[0]; // owner of unit. let it be us (game host is always first player)

			// tile to spawn on
			const tile = e.game.tm.get_tile( // tm means "Tile Manager"
				// we want both to be even because of SMAC coordinate system, hence we multiply by 2
				e.game.tm.get_map_width() / 4 * 2,
				e.game.tm.get_map_height() / 4 * 2
			);

			// um means "Unit Manager"
			e.game.um.spawn_unit(
				'MindSnake', // id we used in unit definition
				owner,
				tile,
				6, // maximum morale
				1.0 // full health
			);

		});

		/**
		 * This handles turn transition. Core scripts already have some logic, here we can do something else after it.
		 */
		e.game.on('turn', (e) => {

			if (e.game.year > 2101) { // don't print at game start
				e.game.message('Welcome to year ' + #to_string(e.game.year) + '!');
			}

		});

		/**
		 * Many, MANY more possibilities, I will add more example here later, feel free to also inspect core scripts in GLSMAC_data/default.
		 * Everything that is possible in core scripts should be possible in mods, it's same scripting engine.
		 * Some things ( for example calling functions from wrong callbacks ) weren't tested and can break, it will get more stable in later versions.
		 * Have fun :)
		 */

	});

});
