<?php
/*
 * Plugin Name:       Gutenberg Experiments - A minimal testable plugin.
 * Plugin URI:        #
 * Description:       Experimental blocks for Gutenberg editor.
 * Version: 		  1.0.0-beta
 * Author:            #
 * Author URI:        #
 * Text Domain:       gutenexp
 * Requires at least: 5.0
 * Tested up to: 	  5.8
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Language Load
add_action('init', 'gutenexp_language_load');
function gutenexp_language_load()
{
    load_plugin_textdomain('gutenexp', false,  basename(dirname(__FILE__)) . '/languages/');
}

// exit;
// Include autoloader

class Gutenexp_Init{
    private static $instances = [];

    public static function instance() {
        $class = get_called_class();
        if (!isset(self::$instances[$class])) {
            self::$instances[$class] = new $class();
        }
        return self::$instances[$class];
    }

    public function version() {
        return '1.0.0-beta' . time();
    }
    
    public function url() {
        return trailingslashit(plugin_dir_url(__FILE__));
    }
    
    public function dir() {
        return trailingslashit(plugin_dir_path(__FILE__));
    }

    public function __construct(){
        include_once $this->dir() . 'autoloader.php';
        \Gutenexp\Autoloader::run();

        new \Gutenexp\Inc\Enqueue_Assets();
        // new \Gutenexp\Inc\Register_Blocks();
        
    }

}

function gutenexp(){
    return Gutenexp_Init::instance();
}

add_action('plugin_loaded', 'gutenexp');