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
        add_editor_style("dist/style.css");

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
            get_template_directory_uri() . "/dist/style.css",
            [],
            $version_string,
        );

        // Enqueue theme stylesheet.
        wp_enqueue_style("davidcalhoun-style");
    }
endif;

add_action("wp_enqueue_scripts", "davidcalhoun_styles");

/**
 * Disable the emojis to improve performance.
 */
function disable_emojis() {
    remove_action("wp_head", "print_emoji_detection_script", 7);
    remove_action("admin_print_scripts", "print_emoji_detection_script");
    remove_action("wp_print_styles", "print_emoji_styles");
    remove_action("admin_print_styles", "print_emoji_styles");
    remove_filter("the_content_feed", "wp_staticize_emoji");
    remove_filter("comment_text_rss", "wp_staticize_emoji");
    remove_filter("wp_mail", "wp_staticize_emoji_for_email");
    add_filter(
        "wp_resource_hints",
        "disable_emojis_remove_dns_prefetch",
        10,
        2,
    );
}
add_action("init", "disable_emojis");

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch($urls, $relation_type) {
    if ("dns-prefetch" == $relation_type) {
        /** This filter is documented in wp-includes/formatting.php */
        $emoji_svg_url = apply_filters(
            "emoji_svg_url",
            "https://s.w.org/images/core/emoji/2/svg/",
        );

        $urls = array_diff($urls, [$emoji_svg_url]);
    }

    return $urls;
}
