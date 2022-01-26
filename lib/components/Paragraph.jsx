import styled from 'styled-components'; 
import {customizer, TextTypes} from '../main'
import {getTextStyle} from '../functions'
import {useComponentContext} from '../MyContext'

const P = styled.p`
${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

${({type})=> type && TextTypes[type]}
${(...rest)=>getTextStyle(...rest)}


${({myStyle}) => myStyle && customizer(myStyle)}
${({superStyle}) => superStyle && customizer(superStyle)}
${({insertStyle}) => insertStyle && insertStyle}
`

const Paragraph = ({children, className, myRef,bold, italic, ...rest}) => {
    const {...props} = useComponentContext() || false
    return(
        <P {...props}  {...rest} ref={myRef} className={className}>
            {
                    bold && italic ? <i><b>{children}</b></i> :
                    bold ? <b>{children}</b>                  :
                    italic ? <i>{children}</i> :
                    children
                }
        </P >
    )
}
export default Paragraph