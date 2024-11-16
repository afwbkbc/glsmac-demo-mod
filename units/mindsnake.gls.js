return (um) => {

	// use Unit Manager to add our custom unit
	um.define_unit('MindSnake', { // this id will be used to spawn it
		name: 'Mind Snake',
		morale: 'NATIVE', // only natives are supported now. later there will also be 'NORMAL' (very green, green, ...)
		type: 'static', // only static (meaning no components such as chassis/weapons/...) is supported now
		movement_type: 'air', // it's not really flying but let's let it move on water and land
		movement_per_turn: 6, // tiles per turn
		render: { // here we tell GLSMAC where to find sprite for our unit
			type: 'sprite', // only sprites (not models) are supported now
			file: 'units/mindsnake.png', // also in 8bpc RGBA format
			x: 0, y: 0, w: 256, h: 256, // this whole file contains only this sprite
			cx: 128, cy: 128, // center of sprite, in most cases it's center of image
			morale_based_xshift: 0 // for simplicity let's keep same sprite regardless of morales
		},
	});

};
