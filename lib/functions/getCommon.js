import {MaxWidths} from '../main'
const getCommon = ({
    type, rounded, fullRounded, raised, span, 
    width, w, height, h, bg, background, 
    padding, p, margin, m, layer, z,
}) => `
    box-sizing: border-box;
    ${type && "max-width:" + MaxWidths[type]};
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
export default getCommon