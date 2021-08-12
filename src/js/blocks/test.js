const {Component, render} = wp.element; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/

import {blockWarper, blockInit, Style} from '../inc/components';

const config = {
    name: 'gutenexp/test',
    apiVersion: 2,
    title: 'Test Block',
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
    return(
        <div>
            <p>
                <b className='class-a' >text: {attributes.text}</b> | 
                <u className='class-b' >color: {attributes.color}</u>
            </p>
            <p>
                blockId: {attributes.blockId}
            </p>
        </div>
    )
}

const Styles = function ({attributes}){
    return ([
        <Style viewport="desktop">
            {`
                .${attributes.blockId} .class-a{
                    color: #ab0;
                }
                .${attributes.blockId} .class-b{
                    color: ${attributes.color};
                }
            
            `}
        </Style>,
        <Style viewport="mobile">
                {`
                    .${attributes.blockId} .class-a{
                        color: #000;
                    }
                    .${attributes.blockId} .class-b{
                        color: #00f;
                    }
                
                `}
        </Style>

    ])
}

blockInit(config, View, Styles)