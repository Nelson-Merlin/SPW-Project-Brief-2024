<?php
/**
 * Nutrition facts flat template.
 */

global $recipe;
$nutrition_facts = $recipe->nutrition;
$_nf_fields      = delicious_recipes_get_nutrition_facts();

$recipe_global                 = delicious_recipes_get_global_settings();
$nutri_title                   = isset( $recipe_global['nutritionFactsLabel'] ) ? $recipe_global['nutritionFactsLabel'] : '';
$enable_nutrition_facts        = isset( $recipe_global['showNutritionFacts']['0'] ) && 'yes' === $recipe_global['showNutritionFacts']['0'] ? true : false;
$display_nutrition_zero_values = isset( $recipe_global['displayNutritionZeroValues']['0'] ) && 'yes' === $recipe_global['displayNutritionZeroValues']['0'] ? true : false;
$additional_nutrition_elements = isset( $recipe_global['additionalNutritionElements'] ) ? $recipe_global['additionalNutritionElements'] : array();

$nutri_filtered = array_filter(
	$nutrition_facts,
	function( $nut ) {
		return ! empty( $nut ) && false !== $nut;
	}
);

if ( empty( $nutri_filtered ) ) {
	return;
}

if ( ! $enable_nutrition_facts ) {
	return;
}
?>

<style>
	.dr-nutrition-facts.chart-layout-flat .dr-nutrition-list .dr-nutrition-fact-lists .dr-nutrition-fact-value,
	.dr-nutrition-facts.chart-layout-flat .dr-nutrition-list .dr-nutrition-fact-lists .dr-nut-measurement {
		font-style: italic;
		font-weight: bold;
	} 
</style>
<div class="dr-nutrition-facts chart-layout-flat">
	<div class="dr-title-wrap" >
		<div class="dr-title dr-print-block-title nutrition">
			<b><?php echo esc_html( $nutri_title ); ?></b>
		</div>
	</div>

	<div class="dr-nutrition-list">
		<?php
		if ( $nutrition_facts ) {
			if ( ! empty( $_nf_fields['top'] ) ) {

				echo '<p class="dr-nutrition-servings">';
				foreach ( $_nf_fields['top'] as $slug => $nf ) {
					$value = '';
					if ( isset( $nutrition_facts[ $slug ] ) ) {
						$value = $nutrition_facts[ $slug ];
					}

					if ( $display_nutrition_zero_values ) {
						$hide = '' == $value;
					} else {
						$hide = '' == $value || 0 == $value;
					}

					if ( $hide ) {
						continue;
					}

					echo '<span>' . esc_html( $nf['name'] ) . ': <span class="dr-nutrition-fact-value">' . ( esc_attr( $nutrition_facts[ $slug ] ) ) . '</span></span>&nbsp;';
				}
				echo '</p>';

			}

			echo '<p class="dr-nutrition-fact-lists">';
			if ( ! empty( $_nf_fields['top'] ) ) {
				if ( isset( $nutrition_facts['servings'] ) && $nutrition_facts['servings'] ) {
					echo '<span class="dr-nut-label">' . esc_html__( 'Servings', 'delicious-recipes' ) . ': <span class="dr-nutrition-fact-value"> ' . esc_html( $nutrition_facts['servings'] ) . ' ' . esc_html__( 'Serving', 'delicious-recipes' ) . '</span></span>&nbsp;';
				}
			}

			if ( ! empty( $_nf_fields['mid'] ) ) {
				foreach ( $_nf_fields['mid'] as $slug => $nf ) {
					$value = '';
					if ( isset( $nutrition_facts[ $slug ] ) ) {
						$value = $nutrition_facts[ $slug ];
					}

					if ( $display_nutrition_zero_values ) {
						$hide = '' == $value;
					} else {
						$hide = '' == $value || 0 == $value;
					}

					if ( $hide ) {
						continue;
					}

					if ( 'calories_fat' !== $slug ) {
						echo '<span>' . esc_html( $nf['name'] ) . ': <span class="dr-nutrition-fact-value">' . esc_attr( $nutrition_facts[ $slug ] ) . '</span>' . ( isset( $nf['measurement'] ) ? '&nbsp;<span class="dr-nut-measurement">' . esc_attr( $nf['measurement'] ) . '</span></span>&nbsp;' : '</span>&nbsp;' );

						if ( isset( $nutrition_facts['calories_fat'] ) && $nutrition_facts['calories_fat'] ) {
							echo '<span>' . esc_attr( $_nf_fields['mid']['calories_fat']['name'] ) . '<span class="dr-nutrition-fact-value">' . esc_attr( $nutrition_facts['calories_fat'] ) . '</span></span>&nbsp;';
						}
					}
				}
			}

			if ( ! empty( $_nf_fields['main'] ) ) {
				foreach ( $_nf_fields['main'] as $slug => $nf ) {
					$value = '';
					if ( isset( $nutrition_facts[ $slug ] ) ) {
						$value = $nutrition_facts[ $slug ];
					}

					if ( $display_nutrition_zero_values ) {
						$hide = '' == $value;
					} else {
						$hide = '' == $value || 0 == $value;
					}

					if ( ! $hide ) {
						echo '<span>' . esc_html( $nf['name'] ) . ': <span class="dr-nutrition-fact-value">' . esc_attr( $nutrition_facts[ $slug ] ) . '</span> ' . ( isset( $nf['measurement'] ) ? '&nbsp;<span class="dr-nut-measurement">' . esc_attr( $nf['measurement'] ) . '</span></span>&nbsp;' : '</span>&nbsp;' );
					}

					if ( isset( $nf['subs'] ) ) {
						foreach ( $nf['subs'] as $sub_slug => $sub_nf ) {
							$value = '';
							if ( isset( $nutrition_facts[ $sub_slug ] ) ) {
								$value = $nutrition_facts[ $sub_slug ];
							}

							if ( $display_nutrition_zero_values ) {
								$hide = '' == $value;
							} else {
								$hide = '' == $value || 0 == $value;
							}

							if ( $hide ) {
								continue;
							}

							echo '<span>' . esc_html( $sub_nf['name'] ) . ': <span class="dr-nutrition-fact-value">' . esc_attr( $nutrition_facts[ $sub_slug ] ) . '</span>' . ( isset( $sub_nf['measurement'] ) ? '&nbsp;<span class="dr-nut-measurement">' . esc_attr( $sub_nf['measurement'] ) . '</span></span>&nbsp;' : '</span>&nbsp;' );
						}
					}
				}
			}

			if ( ! empty( $_nf_fields['bottom'] ) ) {
				foreach ( $_nf_fields['bottom'] as $slug => $nf ) {
					$value = '';
					if ( isset( $nutrition_facts[ $slug ] ) ) {
						$value = $nutrition_facts[ $slug ];
					}

					if ( $display_nutrition_zero_values ) {
						$hide = '' == $value;
					} else {
						$hide = '' == $value || 0 == $value;
					}

					if ( $hide ) {
						continue;
					}

					echo '<span>' . esc_html( $nf['name'] ) . ': <span class="dr-nutrition-fact-value">' . esc_attr( $nutrition_facts[ $slug ] ) . '</span> ' . ( isset( $nf['measurement'] ) ? '&nbsp;<span class="dr-nut-measurement">' . esc_attr( $nf['measurement'] ) . '</span></span>&nbsp;' : '</span>&nbsp;' );
				}
			}

			if ( ! empty( $nutrition_facts['additionalNutritionalElements'] ) && is_array( $additional_nutrition_elements ) && ! empty( $additional_nutrition_elements ) ) {
				$nutri_additional_nutritional_elements = $nutrition_facts['additionalNutritionalElements'];

				foreach ( $additional_nutrition_elements as $additional_nutrition_element_key => $additional_nutrition_element_value ) {
					if ( $display_nutrition_zero_values ) {
						if ( ! isset( $nutri_additional_nutritional_elements[ $additional_nutrition_element_key ] ) || '' == ( trim( $nutri_additional_nutritional_elements[ $additional_nutrition_element_key ] ) ) ) {
							continue;
						}
					} else {
						if ( ! isset( $nutri_additional_nutritional_elements[ $additional_nutrition_element_key ] ) || empty( trim( $nutri_additional_nutritional_elements[ $additional_nutrition_element_key ] ) ) ) {
							continue;
						}
					}

					echo '<span>' . esc_html( $additional_nutrition_element_value['name'] ) . ': <span class="dr-nutrition-fact-value">' . esc_attr( $nutri_additional_nutritional_elements[ $additional_nutrition_element_key ] ) . '</span>' . ( isset( $additional_nutrition_element_value['measurement'] ) ? '&nbsp;<span class="dr-nut-measurement">' . esc_attr( $additional_nutrition_element_value['measurement'] ) . '</span></span>&nbsp;' : '</span>&nbsp;' );
				}
			}
			echo '</p>';

		}
		?>
	</div>
</div>
