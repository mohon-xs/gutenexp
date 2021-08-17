const { Component, render } = wp.element; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/
const { useSelect, useDispatch } = wp.data
const { TabPanel } = wp.components
const { blockWarper, blockInit, Style } = gbLibrary

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
        // test:{
        //     control:{
        //         field: '__experimentalAlignmentMatrixControl',
        //         label: 'Test Label - autocontrol',
        //         props: {
        //             width: '50px',
        //             haga: 'poop'
        //         }
        //     },
        //     type: {},
        //     default: {}
        // },
        test:{
            control:{
                field: 'TextControl',
                label: 'Test Label - autocontrol',
                help: 'test help',
                props: {
                    placeholder: 'some placeholder ....',
                }
            },
            type: {},
            default: {
                default: 'default value',
                mobile: 'mobile value',
            }
        },
    },
}


const View = function({attributes, deviceType}){


    // console.clear()
    console.log(attributes)
    return(
        <div>

            <p>
                see console for attribute's value. deviceType: {deviceType}
            </p>
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