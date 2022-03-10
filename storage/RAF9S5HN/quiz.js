! function( $ ) {
	$( document ).ready( function() {
		$( '.fp-quiz' ).each( function( i, el ) {
			let $quiz              = $( el );
			let quiz_num_questions = $quiz.find( '.fp-quiz-question' ).length;
			let quiz_num_answered  = 0;
			let quiz_score         = 0;
			let quiz_score_tiers   = [];

			/**
			 * Each score tier will have an associated div on the page.
			 * Assemble the various tiers into an array for scoring after
			 * all of the questions have been answered.
			 */
			$quiz.find( '.fp-quiz-score' ).each( function( i, el ) {
				quiz_score_tiers.push( $( el ).data( 'score' ) );
			} );
			quiz_score_tiers = quiz_score_tiers.sort( function( a, b ) {
				return a - b;
			} );

			/**
			 * Handler for selecting an answer
			 */
			$quiz.find( '.fp-quiz-question' ).on( 'click', 'button', function( e ) {
				var $this = $( this );

				quiz_num_answered++;

				if ( $this.hasClass( 'is-answer') ) {
					quiz_score++;
					$this.addClass( 'correct' );
				} else {
					$this.addClass( 'incorrect' );
					$this.siblings( '.is-answer' ).addClass( 'correct' );
				}

				// Disable the buttons, answers are final
				$this.parent().find( 'button' ).attr( 'disabled', 'disabled' );
				$this.siblings( '.fp-quiz-question-result' ).fadeIn();

				/**
				 * When all of the questions have been answered, iterate over the
				 * score tiers, calculate the user's score, and show the quiz results div
				 * that has the corresponding message.
				 */
				if ( quiz_num_answered === quiz_num_questions ) {
					let quiz_rank = 0;

					for ( let i = 0; i < quiz_score_tiers.length; i++ ) {
						if ( quiz_score > quiz_score_tiers[i] ) {
							quiz_rank++;
						}
					}

					$quiz.find( '.fp-quiz-your-score span' ).html( quiz_score + '/' + quiz_num_questions );
					$quiz.find( '.fp-quiz-score[data-score="' + quiz_score_tiers[quiz_rank] + '"]' ).fadeIn();
				}
			} );
		} );
	} );
}( jQuery );
