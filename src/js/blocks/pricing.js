const {registerBlockType} = wp.blocks;
const {RichText, InspectorControls, ColorPalette, InnerBlocks} = wp.blockEditor;
const {PanelBody, FontSizePicker, __experimentalBoxControl} = wp.components;

registerBlockType('gutenexp/pricing', {
    title: 'Pricing',  
    description: 'Block to generate a custom Pricing Section.',
    icon: 'money-alt',
    category: 'text',

    attributes: {
        planTitle:{
            type: 'string',
            source: 'html',
            selector: 'h4',
            default: 'Basic'
        },
        planPrice:{
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: '$99'
        },
        planButton:{
            type: 'string',
            source: 'html',
            selector: 'a',
            default: 'Subscribe Now'
        },
        planBtnBack:{
            type: 'string',
            default: '#0170B9'
        },
        planPriceFonts:{
            type: 'string',
            default: '26'
        },
        planPriceMargin:{
            type: 'string',
            default: {
                top: '10px',
                left: '10px',
                right: '10px',
                bottom: '10px'
            }
        },
        planPricePadding:{
            type: 'string',
            default: {
                top: '10px',
                left: '10px',
                right: '10px',
                bottom: '10px'
            }
        }
    },

    edit({attributes, setAttributes}){
        const ALLOWED_BLOCKS = ['core/list'];
        const TEMPLATE = [
            [
                'core/list',
                {
                    placeholder: 'Enter your Feature....'
                }
            ]
        ];
        const {
            planTitle, 
            planPrice,
            planButton,
            planBtnBack,
            planPriceFonts,
            planPriceMargin,
            planPricePadding
        } = attributes;

        function updateTitle(newTitle){
            setAttributes({planTitle: newTitle});
        }

        function updatePrice(newPrice){
            setAttributes({planPrice: newPrice});
        }

        function updateButton(newButton){
            setAttributes({planButton: newButton});
        }

        function onPlanBtnBackChange(newButtonBackground){
                setAttributes({planBtnBack: newButtonBackground});
        }

        function onPlanPriceFontChange(newPriceFontSize){
            setAttributes({planPriceFonts: newPriceFontSize});
        }

        function onPlanPriceMargin(newPriceMargin){
            setAttributes({planPriceMargin: newPriceMargin});
        }
        
        function onPlanPricePadding(newPricePadding){
            setAttributes({planPricePadding: newPricePadding});
        }


        return ([
            <InspectorControls style={{ marginBottom: '40px' }}>
                <PanelBody title="Change Box Margin & Padding">
                    <__experimentalBoxControl
                        label="Margin"
                        values={ planPriceMargin }
                        onChange={onPlanPriceMargin}
                    />
                    <__experimentalBoxControl
                        label="Padding"
                        values={ planPricePadding }
                        onChange={onPlanPricePadding}
                    />
                </PanelBody>
                <PanelBody title={'Change Text Size'}>
                    <FontSizePicker
                        fontSizes={[
                            {
                                name: 'Small' ,
                                slug: 'small',
                                size: 12,
                            },
                            {
                                name: 'Big' ,
                                slug: 'big',
                                size: 26,
                            },
                        ]}
                        value={ planPriceFonts }
                        fallbackFontSize={ 12 }
                        onChange={ onPlanPriceFontChange }
                        withSlider
                    />
                </PanelBody>
                <PanelBody title={'Change Button Background'}>
                    <p><strong>Select Color : </strong></p>
                    <ColorPalette 
                        value={planBtnBack}
                        onChange={onPlanBtnBackChange}
                    />
                </PanelBody>
            </InspectorControls>,
            <div class="gutenexp-pricing-two extra-class" style={{ background: '#f4f4f5',textAlign: "center", margin: planPriceMargin.top, padding:planPricePadding.top }}>
                <RichText 
                    key="editable"
                    tagName="h4"
                    className="gutenexp-pricing-title"
                    placeholder="Your Plan Title"
                    value={planTitle}
                    onChange={updateTitle}
                />
                text proper
                <RichText 
                    key="editable"
                    tagName="h2"
                    className="gutenexp-pricing-price"
                    placeholder="$99"
                    value={planPrice}
                    onChange={updatePrice}
                    style={{ fontSize: planPriceFonts }}
                />
                <InnerBlocks 
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                    templateLock={true}
                />
                <RichText 
                    key="editable"
                    tagName="a"
                    className="gutenexp-pricing-btn"
                    placeholder="Button text...."
                    value={planButton}
                    onChange={updateButton}
                    style={{ background: planBtnBack}}
                />
            </div>
        ]);
    },
    save({attributes}){
        const {planTitle, planPrice, planButton, planBtnBack, planPriceFonts, planPriceMargin, planPricePadding} = attributes;
        return (
        <div class="gutenexp-pricing-one" style={{ background: '#f4f4f5',textAlign: "center", margin: planPriceMargin.top, padding: planPricePadding.top }}>
                <RichText.Content
                    tagName="h4"
                    className="gutenexp-pricing-title"
                    value={planTitle}
                />
                <RichText.Content
                    tagName="h2"
                    className="gutenexp-pricing-price"
                    value={planPrice}
                    style={{ fontSize: planPriceFonts }}
                />
                <div className="planFeature">
                    <InnerBlocks.Content />
                </div>
                <RichText.Content
                    tagName="a"
                    className="gutenexp-pricing-btn"
                    value={planButton}
                    style={{ background: planBtnBack, padding: '10px 20px', color: '#fff'  }}
                />
        </div>
        );
    }
})