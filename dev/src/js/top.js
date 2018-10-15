import $ from 'jquery';
import { getScrollVal, $w } from './common.js';
import 'jquery-scrollify';


$( function(){

	$.scrollify({
		section: ".section",
		before: (i, e) => {
			$(e[i]).removeClass('current')
		},
		after: ( i,e ) => {
			$(e[i]).addClass( 'current' )
		}
	});
	
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
