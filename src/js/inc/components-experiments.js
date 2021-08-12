const {InspectorControls, InnerBlocks} = wp.blockEditor;
const {TextControl, ColorPalette, PanelBody, FontSizePicker, __experimentalBoxControl} = wp.components;

const blockWarper = {
    PanelControls: function(props, config){
        const {attributes, setAttributes, clientId} = props;

        const { blockId } = attributes;
        if ( ! blockId ) {
            setAttributes( { blockId: 'block-id-' + clientId } );
        }

        function changeHandler(name, value){
            console.log({name, value})
            setAttributes({[name]: value});
        }

        return (
        
            <InspectorControls style={{ marginBottom: '40px' }}>
                <PanelBody title="Change Box Margin & Padding">
                    <p>these are traditional static controls</p>
                    <p><strong>type text : </strong></p>
                    <TextControl
                        value= { attributes.text || '' }
                        onChange={ ( value ) => changeHandler('text', value ) }
                    />

                    <p><strong>Select Color : </strong></p>
                    <ColorPalette
                        colors= {[
                            { name: 'red', color: '#f00' },
                            { name: 'white', color: '#fff' },
                            { name: 'blue', color: '#00f' },
                        ]}
                        value= { attributes.color || '' }
                        onChange={ ( value ) => changeHandler('color', value ) }
                    />

                    <Repeater>
                        <PanelBody title="Child">
                            <p>the following controls are auto generated</p>
                            {
                                Object.entries(config.attributes).map(([index, attribute]) => {
                                    if ( attribute.control && attribute.control.field ) {            

                                        // dynamic load. 
                                        // need to check properly if the control exists
                                        // from wp.components or wp.blockEditor
                                        let Component = wp.components[attribute.control.field]

                                        return ([
                                            <p key={ index + '-label' } ><strong>
                                                {attribute.control.label}
                                            </strong></p>,
                                            <Component 
                                                key={ index } 
                                                onChange={ ( value ) => changeHandler(index, value ) }

                                                // for some controls, they need this event
                                                // later we will put this on condition, may be
                                                onChangeComplete={ ( value ) => changeHandler(index, value ) }
                                                
                                                value={attributes[index] || ''}

                                                {...attribute.control.props } 
                                            />
                                        ])
                                    }
                                })
                            }
                        </PanelBody>
                    </Repeater>

                </PanelBody>
            </InspectorControls>
        )
    },
}

// this is an example component of parent child system
// this concept can be used to create multi-repeater, pop-over  and group-based controls.
const Repeater = function({children}){

    return(
        <div>
            <p>warper begins</p>
            { children }
            { children }
            <p>warper ends</p>
        </div>
    )
}

const Style = function ({viewport, children}){
    let screen;
    // console.log(viewport)
    switch (viewport) {
        case 'mobile':
            screen = 'max-width: 600px';
            break;
    
        case 'tablet':
            screen = 'max-width: 1200px';
            break;
    
        default: // desktop
            screen = 'min-width: 1201px';
            break;
    }
    return(
        <style>
            {`@media only screen and (${screen}) {
                ${ children }
            }`}
        </style>
    )
}

export {blockWarper, Style}