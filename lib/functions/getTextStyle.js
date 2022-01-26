import {MaxWidths} from '../main'
const getTextStyle = ({
    size, rounded, fullRounded, raised, span, 
    width, w, height, h, bg, background, 
    padding, p, margin, m, layer, z,
    
    text, lineHeight, lh, fw, fontWeight, fs, fontSize,
    c, color
}) => `
    box-sizing: border-box;
    ${lineHeight && 'line-height:' + lineHeight};
    ${lh && 'line-height:' + lh};
    ${fontWeight && 'font-weight:' + fontWeight};
    ${fw && 'font-weight:' + fw};
    ${fontSize && 'font-size:' + fontSize};
    ${fs && 'font-size:' + fs};
    ${color && 'color:' + color};
    ${c && 'color:' + c};
    ${text && 'text-align:' + text};





    ${size && "max-width:" + MaxWidths[size]};
    ${rounded ? 'border-radius: 5px' : fullRounded ? 'border-radius: 100px' : ''};
    ${raised && 'box-shadow: 3px 3px 5px #ccc'};
    ${span && 'grid-column:' + span};
    ${width && 'width:' + width};
    ${w && 'width:' + w};
    ${height && 'height:' + height};
    ${h && 'height:' + h};
    ${background && 'background:' + height};
    ${bg && 'background:' + bg};
    ${padding && 'padding:' + padding};
    ${p && 'padding:' + p};
    ${margin && 'margin:' + margin};
    ${m && 'margin:' + m};
    ${layer && 'z-index:' + layer};
    ${z && 'z-index:' + z};
`
export default getTextStyle