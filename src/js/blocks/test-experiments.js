const {registerBlockType} = wp.blocks;
const {useBlockProps} = wp.blockEditor;
const {Component, render} = wp.element; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/

import {blockWarper, SeparateView, Style} from '../inc/components-experiments';

const config = {
    name: 'gutenexp/test-experiments',
    apiVersion: 2,
    title: 'Test Block - experiments',
    icon: 'universal-access-alt',
    category: 'design',
    attributes: {
        blockId: {
            type: 'string',
            // default: 'fooId'
        },
        text:{
            type: 'string',
            default: 'some text'
        },
        color:{
            type: 'string',
            default: '#f0f'
        },
        autocontrol1:{
            control:{
                field: 'ColorPalette',
                label: 'Some Label - autocontrol1',
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
        autocontrol2:{
            control:{
                field: 'TextControl',
                label: 'Some Label - autocontrol1',
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
                autocontrol1: {attributes.autocontrol1} | autocontrol2: {attributes.autocontrol2}
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


registerBlockType( config.name, {
    ...config,
    edit(props) {

        return ([
            <Styles key="styles" attributes={props.attributes} />,
            <div key="controls">{blockWarper.PanelControls(props, config)}</div>,
            <div key="view" { ...useBlockProps({className: props.attributes.blockId}) }>
                Hello World (from the editor).<br/>
                <View attributes={props.attributes} />
            </div>
        ]);
    },
    save(props) {

        return ([
            <Styles key="styles" attributes={props.attributes} />,
            <div key="view" { ...useBlockProps.save({className: props.attributes.blockId}) }>
                Hello World (from the preview).<br/>
                <View attributes={props.attributes} />
            </div>
        ]);
    }
})
