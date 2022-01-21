import React from 'react';
import styled from 'styled-components'; 
import {Customizer} from '../main'
import {getCommon, getGrid, getFlex} from '../functions'
import {useComponentContext} from '../MyContext'



//------------------------------------------------------------
const Section =  styled.section`
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
const Nav =  styled.nav`
    ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}

    ${(...rest)=>getCommon(...rest)}
    ${(...rest)=>getGrid(...rest)}
    ${(...rest)=>getFlex(...rest)}

    ${({myStyle}) => myStyle && Customizer(myStyle)}
    ${({superStyle}) => superStyle && Customizer(superStyle)}
    ${({insertStyle}) => insertStyle && insertStyle}
`
const Header =  styled.header`
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
const Form =  styled.form`
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
const Aside =  styled.aside`
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
const Main =  styled.div`
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
const Footer =  styled.div`
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
const Container =  styled.div`
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
//------------------------------------------------------------


const Box = ({
    className, myRef, children, 
    container, header,nav, section, aside, form,main, footer,
    ...rest
}) => {
    const {...props} = useComponentContext() || false
    return (
        <>
        {
            header ?
            <Header  {...props} {...rest} ref={myRef} className={className}>
                {children}
            </Header>
            :
            nav ? 
            <Nav  {...props} {...rest} ref={myRef} className={className}>
                {children}
            </Nav>
            :
            main ? 
            <Main {...props} {...rest} ref={myRef} className={className}>
                {children}
            </Main>
            :
            footer ? 
            <Footer {...props} {...rest} ref={myRef} className={className}>
                {children}
            </Footer>
            :
            section ? 
            <Section {...props} {...rest} ref={myRef} className={className}>
                {children}
            </Section>
            :
            form ? 
            <Form {...props} {...rest} ref={myRef} className={className}>
                {children}
            </Form>
            :
            aside ? 
            <Aside {...props} {...rest} ref={myRef} className={className}>
                {children}
            </Aside>
            :
            <Container {...props} {...rest} ref={myRef} className={className}>
                {children}
            </Container>
        }
        </> 
    )
}
export default Box