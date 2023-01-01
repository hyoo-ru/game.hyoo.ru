namespace $.$$ {
	export class $hyoo_game_realm extends $.$hyoo_game_realm {
		
		@ $mol_mem
		map_rows() {
			return this.map().split( '\n' )
		}
		
		@ $mol_mem
		map_width() {
			return this.map_rows().reduce( ( max, row )=> Math.max( max, row.length ), 0 )
		}
		
		@ $mol_mem
		map_height() {
			return this.map_rows().length
		}
			  
		coord_by_pos( [ px, py ]: number[] ) {
			return [
				Math.floor( py / this.wall_size() ),
				Math.floor( px / this.wall_size() ),
			]
		}
		
		pos_by_coord( [ cx, cy ]: number[] ) {
			return [
				( cx + .5 ) * this.wall_size(),
				( cy + .5 ) * this.wall_size(),
			]
		}
		
		place_by_pos( [ px, py ]: number[] ) {
			const [ cx, cy ] = this.coord_by_pos([ px, py ]);
			return this.map_rows()[ cy ]?.[ cx ] ?? '%'
		}
		
		spawn_pos() {
			return [
				this.map_width() / 2 * this.wall_size(),
				this.map_height() / 2 * this.wall_size(),
			]
		}
		
	}
}
