// this is an experimental concept
const {InspectorControls, useBlockProps} = wp.blockEditor;
const {PanelBody} = wp.components;
const {registerBlockType} = wp.blocks;


const Repeater = function({childAttributes}){ 
    
        console.log(childAttributes)
        return(
            <p>boo</p>
        )

        Object.entries(childAttributes).map(([index, attribute]) => {
            if ( attribute.control && attribute.control.field ) {            

                // dynamic load. 
                // need to check properly if the control exists
                // from wp.components or wp.blockEditor
                let Component = wp.components[attribute.control.field]
                //childAttributes

                return ([
                    <p key={ index + '-label' } ><strong>
                        {attribute.control.label}
                    </strong></p>,
                    // <Component 
                    //     key={ index } 
                    //     // onChange={ ( value ) => changeHandler(index, value ) }

                    //     // for some controls, they need this event
                    //     // later we will put this on condition, may be
                    //     // onChangeComplete={ ( value ) => changeHandler(index, value ) }
                        
                    //     // value={childAttributes[index] || ''}

                    //     {...attribute.control.props } 
                    // />
                ])
            }
        })
    
}



export {Repeater}