<?php 
namespace Gutenexp\Inc;

defined( 'ABSPATH' ) || exit;

class Enqueue_Assets{
    
    public function __construct(){
        add_action('enqueue_block_assets', [$this, 'scripts']);
        add_action('init', [$this, 'styles']);
    }

    public function scripts(){


        wp_enqueue_script( 'gutenexp_editor_scripts', gutenexp()->url() . 
        'assets/js/blocks.js', ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'wp-hooks', 'wp-components', 'wp-block-editor', 'wp-editor', 'underscore'], gutenexp()->version());
    }

    public function styles(){

        wp_enqueue_style( 
            'gutenexp_editor_styles', gutenexp()->url() . 'assets/css/editor.css', 
            ['wp-edit-blocks'], 
            gutenexp()->version()
        );

        wp_enqueue_style( 
            'gutenexp_preview_styles', gutenexp()->url() .  'assets/css/preview.css', 
            [], 
            gutenexp()->version()
        );
    }
}