<?php

    extract( $atts );

    //custom class
	$wrap_class  = apply_filters( 'kc-el-class', $atts );

	if( ! empty( $extra_class ) ) {
		$wrap_class[] = $extra_class;
	}

    $img = wp_get_attachment_image_src($divider_img, 'full');

?>

<div class="<?php echo esc_attr( implode( ' ', $wrap_class ) ); ?>">
    <div class="section-heading text-center">
        <?php

            // Print title
            printf('<h2>%s</h2>', esc_html( $title ) );


            // Print image if has
            if( $img ) {
                printf('<img src="%s" alt="%s">', esc_url( $img[0] ), esc_html( $title ) );
            }

            // Print description
            printf('<p>%s</p>', esc_html( $desc ) );

        ?>

    </div>
</div>
