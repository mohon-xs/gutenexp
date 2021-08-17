const {InspectorControls, useBlockProps} = wp.blockEditor;
const {PanelBody, TabPanel, BaseControl} = wp.components;
const {registerBlockType} = wp.blocks;
const { useSelect, useDispatch } = wp.data

const blockWarper = {
    PanelControls: function(props, config){
        const {attributes, setAttributes, clientId} = props;
        const { __experimentalSetPreviewDeviceType : setPreviewDeviceType } = useDispatch( 'core/edit-post' )

        const { blockId } = attributes;
        if ( ! blockId ) {
            setAttributes( { blockId: 'block-id-' + clientId } );
        }

        function changeHandler(name, oldValue, newValue, viewport){
            viewport = viewport || 'default'
            
            let value = {
                default: (oldValue.default || null),
                tablet: (oldValue.tablet || null),
                mobile: (oldValue.mobile || null)
            }
            
            value[viewport] = newValue
            
            console.log({name, oldValue, newValue, viewport, value})
            setAttributes({[name]: value})
        }

        const onSelect = ( tabName ) => {
            console.log( 'Selecting tab', tabName );
        }

        return (
        
            <InspectorControls style={{ marginBottom: '40px' }}>
                <TabPanel
                    className="my-tab-panel"
                    activeClass="active-tab"
                    onSelect={ onSelect }
                    tabs={ [
                        {
                            name: 'tab1',
                            title: 'Tab 1',
                            className: 'tab-one',
                        },
                        {
                            name: 'tab2',
                            title: 'Tab 2',
                            className: 'tab-two',
                        },
                    ] }
                >
                    { ( tab ) => <p>{ tab.title } ok</p> }
                </TabPanel>

                <PanelBody title="Change Box Margin & Padding">
                    <p>the following controls are auto generated</p>
                    {
                        Object.entries(config.attributes).map(([index, attribute]) => {
                            if ( attribute.control && attribute.control.field ) {            

                                let Component = wp.components[attribute.control.field]
                                let controlId = (attribute.control.field + index + attributes.blockId)

                                return (
                                    <BaseControl 
                                        key={ index } 
                                        id={controlId} 
                                        label={attribute.control.label} 
                                        help={attribute.control.help} >
                                        
                                        <p>
                                            <button key={controlId + 'rs-default'} onClick={()=>{setPreviewDeviceType('Desktop')}}>default</button>
                                            <button key={controlId + 'rs-tablet'} onClick={()=>{setPreviewDeviceType('Tablet')}}>tablet</button>
                                            <button key={controlId + 'rs-mobile'} onClick={()=>{setPreviewDeviceType('Mobile')}}>mobile</button>
                                        </p>

                                        <Component 
                                            key={ index + 'default'  } 
                                            id={controlId}
                                            onChange={ ( value ) => { changeHandler(index, attributes[index], value ) }}
                                            
                                            value={attributes[index].default || ''}

                                            {...attribute.control.props } 
                                        />

                                        <Component 
                                            key={ index + 'tablet'  } 
                                            id={controlId}
                                            onChange={ ( value ) => { changeHandler(index, attributes[index], value, 'tablet' ) }}
                                            
                                            value={attributes[index].tablet || ''}

                                            {...attribute.control.props } 
                                        />

                                        <Component 
                                            key={ index + 'mobile' } 
                                            id={controlId}
                                            onChange={ ( value ) => { changeHandler(index, attributes[index], value, 'mobile' ) }}
                                            
                                            value={attributes[index].mobile || ''}

                                            {...attribute.control.props } 
                                        />

                                    </BaseControl>
                                )
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
            
            // only CSS/ Style section will receive this value in editor view. currently it's in testing phase.
            const { deviceType } = useSelect( select => {
                const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );
            
                return {
                    deviceType: __experimentalGetPreviewDeviceType(),
                }
            }, [] )

            return ([
                <Styles deviceType={deviceType} key="styles" attributes={props.attributes} />,
                <div key="controls">{blockWarper.PanelControls(props, config)}</div>,
                <div key="view" { ...useBlockProps({className: props.attributes.blockId}) }>
                    <View deviceType={deviceType} attributes={props.attributes} />
                </div>
            ]);
        },
        save(props) {
            const deviceType = 'Desktop'
            return ([
                <Styles deviceType={deviceType} key="styles" attributes={props.attributes} />,
                <div key="view" { ...useBlockProps.save({className: props.attributes.blockId}) }>
                    <View deviceType={deviceType} attributes={props.attributes} />
                </div>
            ]);
        }
    })
}

if ( 'undefined' === typeof window.gbLibrary ) {

	window.gbLibrary = {};
}

gbLibrary.blockWarper = blockWarper
gbLibrary.Style = Style
gbLibrary.blockInit = blockInit
// export {blockWarper, Style, blockInit}