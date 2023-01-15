namespace $.$$ {
	export class $hyoo_game_realm extends $.$hyoo_game_realm {
		
		@ $mol_mem
		map_rows() {
			return this.map().split( '\n' ).map(
				row => [ ... row ].map( p => p === '🔼' ? '⚫' : p )
			)
		}
		
		@ $mol_mem
		map_width() {
			return this.map_rows().reduce( ( max, row )=> Math.max( max, row.length ), 0 )
		}
		
		@ $mol_mem
		map_height() {
			return this.map_rows().length
		}
			  
		coord_by_pos( [ px, py ]: readonly number[] ) {
			return [
				Math.floor( px ),
				Math.floor( py ),
			]
		}
		
		pos_by_coord( [ cx, cy ]: number[] ) {
			return [ cx + .5, cy + .5 ]
		}
		
		place_by_pos( [ px, py ]: number[] ) {
			const [ cx, cy ] = this.coord_by_pos([ px, py ]);
			return this.map_rows()[ cy ]?.[ cx ] ?? '%'
		}
		
		spawn_pos() {
			return [
				this.map_width() / 2,
				this.map_height() / 2,
			]
		}
		
	}
}
