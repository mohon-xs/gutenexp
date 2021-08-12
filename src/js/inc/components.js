const {InspectorControls} = wp.blockEditor;
const {PanelBody} = wp.components;
const {registerBlockType} = wp.blocks;
const {useBlockProps} = wp.blockEditor;

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
            </InspectorControls>
        )
    },
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

const blockInit = function(config, View, Styles){

    registerBlockType( config.name, {
        ...config,
        edit(props) {
    
            return ([
                <Styles key="styles" attributes={props.attributes} />,
                <div key="controls">{blockWarper.PanelControls(props, config)}</div>,
                <div key="view" { ...useBlockProps({className: props.attributes.blockId}) }>
                    <View attributes={props.attributes} />
                </div>
            ]);
        },
        save(props) {
    
            return ([
                <Styles key="styles" attributes={props.attributes} />,
                <div key="view" { ...useBlockProps.save({className: props.attributes.blockId}) }>
                    <View attributes={props.attributes} />
                </div>
            ]);
        }
    })
}

export {blockWarper, Style, blockInit}