import $ from 'jquery';
import { getScrollVal, $w } from './common.js';
import 'jquery-scrollify';


$( function(){

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

});

/**
 * インジケーター  
 */

getScrollVal( function( scrollVal ){
	// let $sections = $( '.section--catetory' ),
	// 	$scrollBottom = scrollVal + $w.height()*1.1;

	// $.each($sections, function( e ){
	// 	let $section = $( this ),
	// 		$section_offsets = $section.offset().top;
	// 	if( $section_offsets < scrollVal ){
	// 		let $id = $section.attr( 'id' );

	// 		$( '.siteHeader__nav li a' ).removeClass( 'active' );
	// 		$( '.siteHeader__nav li a[ href="#' + $id + '"]' ).addClass( 'active' );
	// 	} else if ( scrollVal < 400) {
	// 		 $('.siteHeader__nav li a').removeClass('active')
	// 	}
	// } )

})
