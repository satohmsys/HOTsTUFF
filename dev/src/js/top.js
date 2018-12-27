import $ from 'jquery';
import { getScrollVal, $w } from './common.js';
import 'jquery-scrollify';


	if (1024 < $w.width() && $('.siteNav').hasClass( '-is-scrollify-active')){
		$.scrollify({
			section: ".section",
			updateHash: false,
			before: (i, e) => {

        if (i === 1 ){
          $('body').addClass('-is-ci-appear')
        } else {
          $('body').removeClass('-is-ci-appear')
        }
				$(e[i]).siblings().removeClass('current')
				indicatorActivator($(e[i]).attr('id'));				
			},
			after: ( i,e ) => {
				$(e[i]).addClass( 'current' );
				indicatorActivator( $(e[i]).attr('id') );
			},
      afterRender: () => {
        // $.each( $( '.section' ), function( e ){
        //   $( this ).addClass( 'current' )
        // });
      }
		});



		$( '.siteNav li a' ).on( 'click', function( e ){
			let $this = $( this ),
				$href = $this.attr( 'data-index' );
			e.stopPropagation();

			if( $href.length ){
				e.preventDefault();
				$.scrollify.move( '#' + $href );
			}
		});



		function indicatorActivator( activePrefix ){
			let $indicator = $( '.siteNav' );

			$.each ($indicator.find( 'a' ), function( e ){
				let $target = $( this );
				$target.removeClass( 'current' );

				if ( 0 < $target.attr('href').indexOf(activePrefix) ){
					$target.addClass( 'current' ); 
				}
			});
		}
	}
	

/**
 * current Section 
 */
$w.on('load', function (e) {
  let $hash = location.hash;
  if ($hash.length) {
    $($hash).addClass('current');
  } else {
    $('.section').eq(0).addClass('current');
  }
});


