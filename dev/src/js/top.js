import $ from 'jquery';
import { getScrollVal, $w } from './common.js';
import 'jquery-scrollify';


$( function(){
	if( 1024 < $w.width() ){
		$.scrollify({
			section: ".section",
			updateHash: false,
			before: (i, e) => {
				$(e[i]).siblings().removeClass('current')
				indicatorActivator($(e[i]).attr('id'));				
			},
			after: ( i,e ) => {
				$(e[i]).addClass( 'current' );
				indicatorActivator( $(e[i]).attr('id') );				
			}
		});

		$( '.siteNav li a' ).on( 'click', function( e ){
			e.preventDefault();
			e.stopPropagation();

			let $this = $( this ),
				$href = $this.attr( 'data-index' );

			$.scrollify.move( $this.index );
		})


		function indicatorActivator( activePrefix ){
			let $indicator = $( '.siteNav' );

			$.each ($indicator.find( 'a' ), function( e ){
				let $target = $( this );
				$target.removeClass( 'current' );

				if( '#' + activePrefix == $target.attr( 'href' ) ){
					$target.addClass( 'current' ); 
				}
			});
		}
	}

});

