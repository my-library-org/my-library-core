const Dictionary = {
    //this dictionary contains 2 types of properties: 
    //abbreviated and unabridged properties 
    // to facilitate the use

    //abbreviations 

//if these is after the first word then is with upercase
//-------------------------------------------------
    //l  : left 
    //r  : right
    //bm : bottom
    //t  : top
//-----------------------------------------------
    //mn : min
    //mx : max
//-----------------------------------------------
    //an : align
    //att: attachment
    //bg : background
    //b  : border
    //bx : box
    //c  : color
    //cp : clip
    //ct : content
    //clr: clear
    //d  : display
    //dc : decoration
    //dy : delay
    //dt : duration
    //dit: direction
    //i: image
    //z  : z-index
    //col: column 
    //cols: colums
    //fx : flex
    //f  : font
    //fm : family
    //j  : justify
    //ls : list-style
    //rl : rule
    //ln : line
    //m  : margin
    //a  : animation
    //w  : width
    //g  : grid
    //h  : heigth
    //of : overflow
    //o  : opacity
    //ob : object
    //p  : padding
    //pt : position
    //prop: property
    //pe : pointer-events
    //tf : tranform
    //tmf: timing-function
    //tt : transiotion
    //tp : type
    //tmp: template
    //s  : style
    //sz : size
    //szg: sizing
    //sw : shadow
    //src: source
    //rs : radius
    //rp : repeat
    //rz : resize
    //v  : viribility
    //vt : vertical
    //ww : windows
    //wt : Weight

//exceptions for practicism
    //br : border-radius
    //fs : font-size
    //jc : justify-content
    br: 'border-radius: ',
    fs : 'font-size: ',
    ff : 'font-family: ',
    fw: 'font-weight: ',
    jc: 'justify-content: ',
    ji: 'justify-items: ',
    ai : 'align-items: ',
    at: 'align-tracks: ',
    as: 'align-self: ',
    ac : 'align-content: ',
    gr : 'grid-row: ',
    gc: 'grid-column: ',
    gtc: 'grid-template-columns: ',
    gtr: 'grid-template-rows: ',
    gg: 'grid-gap: ',
    ta: 'text-align: ',
    text: 'text-align: ',
    
    anCt: 'align-content: ',
    anItems: 'align-items: ',
    anSelf: 'align-self: ',
    anTracks: 'align-tracks: ',

    a: 'animation: ',
    aDy: 'animation-delay: ',
    aDit: 'animation-direction: ',
    aDt: 'animation-duration: ',
    aFillMode: 'animation-fill-mode: ',
    aIterationCount: 'animation-iteration-count: ',
    aName: 'animation-name: ',
    aPlayState: 'animation-play-state: ',
    aTmf: 'animation-timing-function : ',


    bg: 'background: ',
    bgAtt: 'background-attachment: ',
    bgBlendMode: 'background-blend-mode: ',
    bgCp: 'background-clip: ',
    bgC: 'background-color: ',
    bgImg: 'background-image: ',
    bgOrigin: 'background-origin: ',
    bgPt: 'background-position: ',
    bgRp: 'background-repeat: ',
    bgSz: 'background-size: ',

    //--------done---------
    b: 'border: ',
    bBm: 'border-bottom: ',
    bBmC: 'border-bottom-color: ',
    bBmLRs: 'border-bottom-left-radius: ',
    bBmRRs: 'border-bottom-right-radius: ',
    bBmS: 'border-bottom-style: ',
    bBmW: 'border-bottom-width: ',

    bCollapse: 'border-collapse: ',
    bImg: 'border-image: ',

    bImgOutset: 'border-image-outset: ',
    bImgRp: 'border-image-repeat: ',
    bImgSlice: 'border-image-slice :',
    bImgSrc: 'border-image-source: ',
    bImgW: 'border-image-width: ',
    bL: 'border-left: ',
    bLC: 'border-left-color: ',
    bLS: 'border-left-style: ',
    bLW: 'border-left-width: ',

    bRs: 'border-radius: ',//
    bR: 'border-right: ',
    bRC: 'border-right-color: ',
    bRS : 'border-right-style: ',
    bRW: 'border-right-width: ',

    bSpacing: 'border-spacing: ',
    bS: 'border-style: ',
    bT: 'border-top: ',
    bTC: 'border-top-color: ',
    bTLRs : 'border-top-left-radius: ',
    bTRRs: 'border-top-right-radius: ',
    bTS: 'border-top-style: ',
    bTW: 'border-top-width: ',
    bW: 'border-width: ',
//-----------------------
    bm: 'bottom: ',
    bxDcBreak: 'box-decoration-break: ',
    bxSw: 'box-shadow: ',
    bxSzg: 'box-sizing: ',
 
    clr: 'clear: ',
    cpPath: 'clip-path: ',
    c: 'color: ',
    cAdjust: 'color-adjust: ',
    colCount: 'column-count: ',
    colFill: 'column-fill: ',
    colGap: 'column-gap: ',
    colRl: 'column-rule: ',
    colRlC: 'column-rule-color: ',
    colRlS: 'column-rule-style: ',
    colRlW : 'column-rule-width: ',
    colSpan: 'column-span: ',
    colW: 'column-width: ',
    cols: 'columns: ',
    ct: 'content: ',

    dit: 'direction: ',
    d: 'display: ',

    fx: 'flex: ',
    fxBasis: 'flex-basis: ',
    fxDit: 'flex-direction: ',
    fxFlow: 'flex-flow: ',
    fxGrow: 'flex-grow: ',
    fxShrink: 'flex-shrink: ',
    fxWrap: 'flex-wrap: ',
 
    f: 'font: ',
    fD: 'font-display: ',
    fFm: 'font-family: ',//
    fSz: 'font-size: ',//
    fSzAdjust: 'font-size-adjust: ',
    fStretch: 'font-stretch: ',
    fS: 'font-style: ',
    fVariant: 'font-variant: ',
    fVariantNumeric: 'font-variant-numeric: ',
    fWt: 'font-weight: ',

    gRow : 'grid-row: ',
    gCol: 'grid-column: ',
    gTmpCols: 'grid-template-columns: ',
    gTmpRows: 'grid-template-rows: ',

    h: 'height: ',

    imgRendering: 'image-rendering: ',
 

    jCt: 'justify-content: ', //----------
    l: 'left: ',
    lnClamp: 'line-clamp: ',
    lnH: 'line-height: ',
    ls: 'list-style: ',
    lsImg: 'list-style-image: ',
    lsPt: 'list-style-position: ',
    lsTp: 'list-style-type: ',
   
    m: 'margin: ',
    mBm: 'margin-bottom: ',
    mL: 'margin-left: ',
    mR: 'margin-right: ',
    mT: 'margin-top: ',
    mxH: 'max-height: ',
    mxW: 'max-width: ',
    mnH: 'min-height: ',
    mnW: 'min-width: ',

    obFit: 'object-fit: ',
    obPt: 'object-position: ',
    o: 'opacity: ',
    
    of: 'overflow: ',
    ofX: 'overflow-x: ',
    ofY: 'overflow-y: ',
    ofWrap: 'overflow-wrap: ',
   
    p: 'padding: ',
    pBm: 'padding-bottom: ',
    pL: 'padding-left: ',
    pR: 'padding-right: ',
    pT: 'padding-top: ',
    //------------------

    pe: 'pointer-events: ',
    pt: 'position: ',
    rz: 'resize: ',
    r: 'right: ',
 

    txtAn: 'text-align: ',
    txtAnLast: 'text-align-last: ',
    txtDc: 'text-decoration: ',
    txtDcC: 'text-decoration-color: ',
    txtDcLn: 'text-decoration-line: ',
    txtDcSkip: 'text-decoration-skip: ',
    txtDcSkipInk: 'text-decoration-skip-ink: ',
    txtDcS: 'text-decoration-style: ',
    txtIndent: 'text-indent: ',
    txtJ: 'text-justify: ',
    txtOf: 'text-overflow: ',
    txtRendering:'text-rendering: ',
    txtSw: 'text-shadow: ',
    txtStroke: 'text-stroke: ',
    txtTf: 'text-transform: ',
    t: 'top: ',
    tf: 'transform: ',
    tfOrigin: 'transform-origin: ',
    tfS: 'transform-style: ',
    tt: 'transition: ',
    ttDy: 'transition-delay: ',
    ttDt: 'transition-duration: ',
    ttProp: 'transition-property: ',
    ttTmf: 'transition-timing-function: ',

    
    vtAn: 'vertical-align: ',
    v: 'visibility: ',
    ws: 'widows: ',
    w: 'width: ',
    
    z: 'z-index: ',




    //bleed: 'bleed: ',
    //unicodeBidi: 'unicode-bidi: ',
    //unicodeRange: 'unicode-range: ',
    //userSelect: 'user-select: ',
    //float: 'float: ',
    //hangingPunctuation: 'hanging-punctuation: ',
    //hyphens: 'hyphens: ',
    //maxBlendMode: 'mix-blend-mode: ',
    //letterSpacing: 'letter-spacing: ',
    //whiteSpace: 'white-space: ',
    //all: 'all: ',
    // willChange: 'will-change: ',
    // wordBreak: 'word-break: ',
    // wordSpacing: 'word-spacing: ',
    // writingMode: 'writing-mode: ',
    //   quotes: 'quotes: ',
 
    // tabSize: 'tab-size: ',
    // tableLayout: 'table-layout: ',
    // pageBreakAfter: 'page-break-after: ',
    // pageBreakBefore: 'page-break-before: ',
    // pageBreakInside: 'page-break-inside: ',
    // perspective: 'perspective: ',
    // perspectiveOrigin: 'perspective-origin: ',
    // emptyCells: 'empty-cells: ',
    // filter: 'filter: ',
    // initialLetter: 'initial-letter: ',
    // isolation: 'isolation: ',
    // order: 'order: ',
    // orphans: 'orphans: ',
    // outline: 'outline: ',
    // outlineOffset: 'outline-offset: ',
    // breakInside: 'break-inside: ',
    // captionSide: 'caption-side: ',
    // caretColor: 'caret-color: ',
    // backfaceVisibilit: 'backface-visibilit: ',
    // appearance: 'appearance: ',
    // backdropFilter: 'backdrop-filter: ',
    // backfaceVisibility: 'backface-visibility: ',
    // scrollBehavior: 'scroll-behavior: ',
    // shapeOutside: 'shape-outside: ',
    // shapeMargin: 'shape-margin: ',
    // counterIncrement: 'counter-increment: ',
    // counterReset: 'counter-reset: ',
    // cursor: 'cursor: ', 

    //unabridged properties
    alignContent: 'align-content: ',
    alignItems: 'align-items: ',
    alignSelf: 'align-self: ',
    alignTracks: 'align-tracks: ',
    all: 'all: ',
    animation: 'animation: ',
    animationDelay: 'animation-delay: ',
    animationDirection: 'animation-direction: ',
    animationDuration: 'animation-duration: ',
    animationFillMode: 'animation-fill-mode: ',
    animationIterationCount: 'animation-iteration-count: ',
    animationName: 'animation-name: ',
    animationPlayState: 'animation-play-state: ',
    animationTimingFunction: 'animation-timing-function : ',
    aspectRatio: 'aspect-ratio: ',
    backfaceVisibilit: 'backface-visibilit: ',
    appearance: 'appearance: ',
    backdropFilter: 'backdrop-filter: ',
    backfaceVisibility: 'backface-visibility: ',
    background: 'background: ',
    backgroundAttachment: 'background-attachment: ',
    backgroundBlendMode: 'background-blend-mode: ',
    backgroundClip: 'background-clip: ',
    backgroundColor: 'background-color: ',
    backgroundImage: 'background-image: ',
    backgroundOrigin: 'background-origin: ',
    backgroundPosition: 'background-position: ',
    backgroundRepeat: 'background-repeat: ',
    backgroundSize: 'background-size: ',
    bleed: 'bleed: ',
    border: 'border: ',
    borderBottom: 'border-bottom: ',
    borderBottomColor: 'border-bottom-color: ',
    borderBottomLeftRadius: 'border-bottom-left-radius: ',
    borderBottomRightRadius: 'border-bottom-right-radius: ',
    borderBottomStyle: 'border-bottom-style: ',
    borderBottomWidth: 'border-bottom-width: ',

    borderCollapse: 'border-collapse: ',
    borderImage: 'border-image: ',

    borderImageOutset: 'border-image-outset: ',
    borderImageRepeat: 'border-image-repeat: ',
    borderImageSlice: 'border-image-slice :',
    borderImageSource: 'border-image-source: ',
    borderImageWidth: 'border-image-width: ',
    borderLeft: 'border-left: ',
    borderLeftColor: 'border-left-color: ',
    borderLeftStyle: 'border-left-style: ',
    borderLeftWidth: 'border-left-width: ',

    borderRadius: 'border-radius: ',
    borderRight: 'border-right: ',
    borderRightColor: 'border-right-color: ',
    borderRightStyle : 'border-right-style: ',
    borderRightWidth: 'border-right-width: ',

    borderSpacing: 'border-spacing: ',
    borderStyle: 'border-style: ',
    borderTop: 'border-top: ',
    borderTopColor: 'border-top-color: ',
    borderTopLeftRadius : 'border-top-left-radius: ',
    borderTopRightRadius: 'border-top-right-radius: ',
    borderTopStyle: 'border-top-style: ',
    borderTopWidth: 'border-top-width: ',
    borderWidth: 'border-width: ',
    bottom: 'bottom: ',
    boxDecorationBreak: 'box-decoration-break: ',
    boxShadow: 'box-shadow: ',
    boxSizing: 'box-sizing: ',
    breakInside: 'break-inside: ',
    captionSide: 'caption-side: ',
    caretColor: 'caret-color: ',
    clear: 'clear: ',
    clipPath: 'clip-path: ',
    color: 'color: ',
    colorAdjust: 'color-adjust: ',
    columnCount: 'column-count: ',
    columnFill: 'column-fill: ',
    columnGap: 'column-gap: ',
    columnRule: 'column-rule: ',
    columnRuleColor: 'column-rule-color: ',
    columnRuleStyle: 'column-rule-style: ',
    columnRuleWidth : 'column-rule-width: ',
    columnSpan: 'column-span: ',
    columnWidth: 'column-width: ',
    columns: 'columns: ',
    content: 'content: ',
    counterIncrement: 'counter-increment: ',
    counterReset: 'counter-reset: ',
    cursor: 'cursor: ',
    direction: 'direction: ',
    display: 'display: ',
    emptyCells: 'empty-cells: ',
    filter: 'filter: ',
    flex: 'flex: ',
    flexBasis: 'flex-basis: ',
    flexDirection: 'flex-direction: ',
    flexFlow: 'flex-flow: ',
    flexGrow: 'flex-grow: ',
    flexShrink: 'flex-shrink: ',
    flexWrap: 'flex-wrap: ',
    float: 'float: ',
    font: 'font: ',
    fontDisplay: 'font-display: ',
    fontFamily: 'font-family: ',
    fontSize: 'font-size: ',
    fontSizeAdjust: 'font-size-adjust: ',
    fontStretch: 'font-stretch: ',
    fontStyle: 'font-style: ',
    fontVariant: 'font-variant: ',
    fontVariantNumeric: 'font-variant-numeric: ',
    fontWeight: 'font-weight: ',
    gridRow : 'grid-row: ',
    gridColumn: 'grid-column: ',
    gridTemplateColumns: 'grid-template-columns: ',
    gridTemplateRows: 'grid-template-rows: ',
    gridGap: 'grid-gap: ',
    hangingPunctuation: 'hanging-punctuation: ',
    height: 'height: ',
    hyphens: 'hyphens: ',
    imageRendering: 'image-rendering: ',
    initialLetter: 'initial-letter: ',
    isolation: 'isolation: ',
    justifyContent: 'justify-content: ',
    justifyItems: 'justify-items: ',
    left: 'left: ',
    letterSpacing: 'letter-spacing: ',
    lineClamp: 'line-clamp: ',
    lineHeight: 'line-height: ',
    listStyle: 'list-style: ',
    listStyleImage: 'list-style-image: ',
    listStylePosition: 'list-style-position: ',
    listStyleType: 'list-style-type: ',
    margin: 'margin: ',
    marginBottom: 'margin-bottom: ',
    marginLeft: 'margin-left: ',
    marginRight: 'margin-right: ',
    marginTop: 'margin-top: ',
    maxHeight: 'max-height: ',
    maxWidth: 'max-width: ',
    minHeight: 'min-height: ',
    minWidth: 'min-width: ',
    mixBlendMode: 'mix-blend-mode: ',
    objectFit: 'object-fit: ',
    objectPosition: 'object-position: ',
    opacity: 'opacity: ',
    order: 'order: ',
    orphans: 'orphans: ',
    outline: 'outline: ',
    outlineOffset: 'outline-offset: ',
    overflow: 'overflow: ',
    overflowX: 'overflow-x: ',
    overflowY: 'overflow-y: ',
    overflowWrap: 'overflow-wrap: ',
    padding: 'padding: ',
    paddingBottom: 'padding-bottom: ',
    paddingLeft: 'padding-left: ',
    paddingRight: 'padding-right: ',
    paddingTop: 'padding-top: ',
    pageBreakAfter: 'page-break-after: ',
    pageBreakBefore: 'page-break-before: ',
    pageBreakInside: 'page-break-inside: ',
    perspective: 'perspective: ',
    perspectiveOrigin: 'perspective-origin: ',
    placeItems: 'place-items: ',
    pointerEvents: 'pointer-events: ',
    position: 'position: ',
    quotes: 'quotes: ',
    resize: 'resize: ',
    right: 'right: ',
    scrollBehavior: 'scroll-behavior: ',
    shapeOutside: 'shape-outside: ',
    shapeMargin: 'shape-margin: ',
    tabSize: 'tab-size: ',
    tableLayout: 'table-layout: ',
    textAlign: 'text-align: ',
    textAlignLast: 'text-align-last: ',
    textDecoration: 'text-decoration: ',
    textDecorationColor: 'text-decoration-color: ',
    textDecorationLine: 'text-decoration-line: ',
    textDecorationSkip: 'text-decoration-skip: ',
    textDecorationSkipInk: 'text-decoration-skip-ink: ',
    textDecorationStyle: 'text-decoration-style: ',
    textIndent: 'text-indent: ',
    textJustify: 'text-justify: ',
    textOverflow: 'text-overflow: ',
    textRendering:'text-rendering: ',
    textShadow: 'text-shadow: ',
    textStroke: 'text-stroke: ',
    textTransform: 'text-transform: ',
    top: 'top: ',
    transform: 'transform: ',
    transformOrigin: 'transform-origin: ',
    transformStyle: 'transform-style: ',
    transition: 'transition: ',
    transitionDelay: 'transition-delay: ',
    transitionDuration: 'transition-duration: ',
    transitionProperty: 'transition-property: ',
    transitionTimingFunction: 'transition-timing-function: ',
    unicodeBidi: 'unicode-bidi: ',
    unicodeRange: 'unicode-range: ',
    userSelect: 'user-select: ',
    verticalAlign: 'vertical-align: ',
    visibility: 'visibility: ',
    whiteSpace: 'white-space: ',
    widows: 'widows: ',
    width: 'width: ',
    willChange: 'will-change: ',
    wordBreak: 'word-break: ',
    wordSpacing: 'word-spacing: ',
    writingMode: 'writing-mode: ',
    zIndex: 'z-index'





















}

export default Dictionary