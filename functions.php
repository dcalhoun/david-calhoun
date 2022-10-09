<?php
/**
 * David Calhoun functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package David Calhoun
 * @since David Calhoun 1.0
 */

if (!function_exists("davidcalhoun_setup")):
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * @since David Calhoun 1.0
     *
     * @return void
     */
    function davidcalhoun_setup() {
        // Add support for block styles.
        add_theme_support("wp-block-styles");

        // Enqueue editor styles.
        add_editor_style("style.css");

        // Add support for Global Style settings.
        add_theme_support("appearance-tools");
    }
endif;

add_action("after_setup_theme", "davidcalhoun_setup");

if (!function_exists("davidcalhoun_styles")):
    /**
     * Enqueue styles.
     *
     * @since David Calhoun 1.0
     *
     * @return void
     */
    function davidcalhoun_styles() {
        $theme_version = wp_get_theme()->get("Version");
        $version_string = is_string($theme_version) ? $theme_version : false;

        // Register theme stylesheet.
        wp_register_style(
            "davidcalhoun-style",
            get_template_directory_uri() . "/style.css",
            [],
            $version_string,
        );

        // Enqueue theme stylesheet.
        wp_enqueue_style("davidcalhoun-style");
    }
endif;

add_action("wp_enqueue_scripts", "davidcalhoun_styles");
