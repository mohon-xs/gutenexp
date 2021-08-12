<?php 
namespace Gutenexp\Inc;

defined( 'ABSPATH' ) || exit;

class Register_Blocks{
    private $blocks;

    public function __construct(){
        $this->blocks = [
            [
                'id' => 'gutenexp/test',
            ],
            [
                'id' => 'gutenexp/pricing',
            ],
            [
                'id' => 'gutenexp/slider',
            ],
        ];

        add_action('enqueue_block_assets', [$this, 'init']);
    }

    public function init(){

        foreach($this->blocks as $block){
            register_block_type( $block['id'], [
                'api_version' => ($block['id'] ?: 2),
                'style' => 'gutenexp_preview_styles',
                'editor_style' => 'gutenexp_editor_styles',
                'editor_script' => 'gutenexp_editor_scripts',
            ]);
        }
    }
}