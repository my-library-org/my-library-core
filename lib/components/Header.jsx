import styled from 'styled-components'; 
import {Customizer} from '../main'
import {getCommon, getGrid, getFlex} from '../functions'
import {useComponentContext} from '../MyContext'


const Container =  styled.header`
    width: 100%;
    margin: auto;
    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${(...rest)=>getCommon(...rest)}
    ${(...rest)=>getGrid(...rest)}
    ${(...rest)=>getFlex(...rest)}

    ${({myStyle}) => myStyle && Customizer(myStyle)}
    ${({superStyle}) => superStyle && Customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
   
`


const Header = ({myRef, className, children, ...rest}) => {
    const {...props} = useComponentContext() || false
    return (
        <Container {...props}  {...rest} ref={myRef} className={className}>
                {children}
        </Container>
    )
}
export default Header