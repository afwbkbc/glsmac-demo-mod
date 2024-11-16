return (fm) => {

	// Use Faction Manager to add our faction
	fm.add('DEMOCOLLECTIVE', {
		name: 'Demo Collective', // faction name
		colors: { // here we define colors for faction-specific things such as text
			faction: #to_color(250, 50, 250), // 3 RGB bytes, 0 to 255
			faction_shadow: #to_color(125, 20, 125),
			text: #to_color(1.0, 0.6, 1.0), // 3 RGB floats, 0.0 to 1.0
			text_shadow: #to_color(1.0, 0.6, 1.0, 0.5), // 4 RGB floats (last one is alpha channel, 0.5 means 50% transparent, 1.0 means non-transparent)
			border: #to_color(250, 120, 250, 200), // 4 RGB bytes
			border_alpha: #to_color(250, 120, 250, 200),
			vehicle: #to_color(1.0, 0.6, 1.0),
		},
		bases: {
			render: { // here we are telling GLSMAC where to find sprites for bases
				type: 'sprite_grid', // base sprites aligned in 4 columns, 6 rows, same as in original faction PCX files
				file: 'factions/democol.png', // must be in 8bpc RGBA format with transparent background
				grid_x: 4, grid_y: 4, // define where grid starts (top left corner)
				cell_width: 400, cell_height: 300, // define size of each grid element (each base sprite)
				cell_padding: 4, // space between sprites
			},
			names: { // here we define base names
				land: [ // land bases
					'Fortress Horizon',
					'Citadel of Ages',
					'Ironclad Bastion',
					'Vanguard Keep',
					'Stonewatch Outpost',
					'Emerald Stronghold',
					'Obsidian Citadel',
					'Crimson Fortress',
					'Silvermoon Hold',
					'Stormbreaker Fort',
					'Thunderstrike Castle',
					'Eagle\'s Nest',
					'Golden Shield Base',
					'Deepwood Refuge',
					'Sunspire Command',
					'Dragon\'s Lair',
					'Mystic Peak Citadel',
					'Shadowfall Fortress',
					'Eternal Guard Station',
					'Phoenix Tower',
				],
				water: [ // water bases
					'Aqua Bastion',
					'Tidewatch Station',
					'Neptune\'s Gate',
					'Coral Fortress',
					'Tranquil Isle Stronghold',
					'Poseidon Point',
					'Wavecrest Outpost',
					'Azure Depths Base',
					'Cascade Harbor',
					'Seafarer\'s Haven',
				],
			}
		},
	});

};
