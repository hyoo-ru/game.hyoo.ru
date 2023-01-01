namespace $.$$ {
	
	function radians(angle: number) {
		return angle * (Math.PI / 180);
	}
	
	const tload = ( src: string )=> new Promise< HTMLImageElement >( done => {
		const texture = new Image
		texture.src = src
		texture.onload = ()=> done( texture )
	} )
	
	export class $hyoo_game_eye extends $.$hyoo_game_eye {
		
		width() {
			return this.view_rect()?.width ?? 0
		}
		
		height() {
			return this.view_rect()?.height ?? 0
		}
		
		@ $mol_mem_key
		texture( uri: string, next?: HTMLImageElement ) {
			$mol_wire_solid()
			if( next ) return next
			const texture = new Image
			texture.src = uri
			texture.onload = ()=> this.texture( uri, texture )
			return null
		}
		
		@ $mol_mem_key
		side_texture( id: { place_coord: readonly number[], place_kind: string, place_side: string } ) {
			
			const uri = $mol_array_lottery( this.place_skins()[ id.place_kind ] ?? [] ) as string
			if( !uri ) return null
			
			return this.texture( uri )
		}
		
		@ $mol_mem
		paint() {
			
			this.pos()
			const width = this.width()
			const context = this.context()
			const height = this.height()
			const wall_size = this.wall_size()
			const perspective = this.perspective()
			
			const dims = {
				'l': 2,
				'r': 2,
				'd': 1,
				'u': 1,
			}
			
			context.fillStyle = `skyblue`
			context.fillRect( 0, 0, width, height / 2 )
			
			context.fillStyle = `coral`
			context.fillRect( 0, height / 2, width, height )
			
			for( let a=0;a < width; ++a ) {
				
				const { angle, place_coord, place_kind, place_side, x:tx, y:ty } = this.ray( a )
				const plank_height = Math.round( perspective / angle ) / 2
				const x = a - .5
				const y = .5 + ( height - plank_height ) / 2 - plank_height / 4
				
				const texture = this.side_texture({ place_coord, place_kind, place_side })
				
				let side_x = ( tx % wall_size + ty % wall_size ) / wall_size
				if( place_side === 'd' || place_side === 'l' ) side_x = 1 - side_x
				
				if( texture ) {
					
					context.drawImage(
						texture,
						Math.floor( side_x * texture.naturalWidth ), 0, 1, texture.naturalHeight,
						x+.5, y, 1, plank_height,
					)
					
					const alpha = 1 - plank_height / 512
					context.strokeStyle = `hsla( 0deg, 0%, 0%, ${alpha} )`
					context.beginPath()
					context.moveTo( x, y )
					context.lineTo( x, y + plank_height )
					context.stroke()
					
				} else {
					
					const hue = Math.floor( place_kind.charCodeAt(0) % 64 / 64 * 360 )
					const sat = 30 + dims[ place_side ] * 10
					const light = 50 * Math.min( plank_height / 512, 1 )
					
					context.strokeStyle = `hsl( ${hue}deg, ${sat}%, ${light}% )`
					context.beginPath()
					context.moveTo( x, y )
					context.lineTo( x, y + plank_height )
					context.stroke()
					
				}
				
			}
		}
		
		ray( a: number ) {
			
			const max_d = Math.tan(radians(this.fov() / 2));
			const step = max_d * 2 / this.width();
			const d = -max_d + (a + 0.5) * step;
			const ray_angle = Math.atan2(d, 1);
			const angle = this.angle() + ray_angle
			
			const [ sx, sy ] = this.pos()
			
			const wall_size = this.wall_size()
			const map = this.map_rows()
			const mapWidth = this.map_width()
			const mapHeight = this.map_height()
			
			const rx = Math.cos( angle )
			const ry = Math.sin( angle )
			
			let mx = Math.floor( sx / wall_size )
			let my = Math.floor( sy / wall_size )
		
			let t_max_x = sx / wall_size - mx
			if( rx > 0 ) t_max_x = 1 - t_max_x
			
			let t_max_y = sy / wall_size - my
			if( ry > 0 ) t_max_y = 1 - t_max_y
		
			let side, place_kind = '.'
			while( true ) {
				if( ry === 0 || t_max_x < t_max_y * Math.abs( rx / ry ) ) {
					side = 'x';
					mx += rx > 0 ? 1 : -1;
					t_max_x += 1;
					if( mx < 0 || mx >= mapWidth ) break
				} else {
					side = 'y';
					my += ry > 0 ? 1 : -1;
					t_max_y += 1;
					if( my < 0 || my >= mapHeight ) break
				}
				place_kind = map[my]?.[mx]??' ';
				if( ['#', '@', ' '].includes(place_kind) ) break
			}
		
			let pos_x, pos_y, place_side
			if( side === 'x' ) {
				pos_x = (mx + (rx < 0 ? 1 : 0)) * wall_size;
				pos_y = sy + (pos_x - sx) * ry / rx;
				place_side = pos_x >= sx ? 'r' : 'l';
			} else {
				pos_y = (my + (ry < 0 ? 1 : 0)) * wall_size;
				pos_x = sx + (pos_y - sy) * rx / ry;
				place_side = pos_y >= sy ? 'd' : 'u';
			}
			
			const dist = Math.hypot( pos_x - sx, pos_y - sy )
			
			return {
				x: pos_x,
				y: pos_y,
				place_coord: [ mx, my ],
				place_kind,
				place_side,
				dist,
				angle: dist * Math.cos(ray_angle),
			}
			
		}
		
	}
	
}
