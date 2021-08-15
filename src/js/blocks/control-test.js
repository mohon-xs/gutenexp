const {Component, render} = wp.element; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/
const { useSelect, useDispatch } = wp.data

import {blockWarper, blockInit, Style} from '../inc/components';

const config = {
    name: 'gutenexp/control-test',
    apiVersion: 2,
    title: 'Control Test',
    icon: 'universal-access-alt',
    category: 'design',
    attributes: {
        blockId: {
            type: 'string',
        },
        color:{
            control:{
                field: 'ColorPalette',
                label: 'Color Label - autocontrol',
                props: {
                    colors: [
                        { name: 'red', color: '#f00' },
                        { name: 'white', color: '#fff' },
                        { name: 'blue', color: '#00f' },
                    ]
                }
            },
            type: 'string',
            default: '#dfb'
        },
        text:{
            control:{
                field: 'TextControl',
                label: 'Text Label - autocontrol',
                props: {
                    placeholder: 'enter your text ....',
                }
            },
            type: 'string',
            default: 'some text'
        },
    },
}


const View = function({attributes}){

    console.clear()
    console.log(attributes)
    return(
        <div>
            <p>
                blockId: {attributes.blockId}
            </p>
        </div>
    )
}

const Styles = function ({attributes}){
    return null
}

blockInit(config, View, Styles)