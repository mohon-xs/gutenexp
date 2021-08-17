const {Component, render} = wp.element; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/
const { useSelect, useDispatch } = wp.data

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
    // const { setPreviewDeviceType } = useDispatch( 'core/edit-post' )
    const { __experimentalSetPreviewDeviceType : setPreviewDeviceType } = useDispatch( 'core/edit-post' )


    const { deviceType } = useSelect( select => {
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );
    
        return {
            deviceType: __experimentalGetPreviewDeviceType(),
        }
    }, [] );

    setTimeout(() => {
        setPreviewDeviceType('Mobile')
    }, 5000);

    console.log(deviceType)
    console.log(typeof setPreviewDeviceType)
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