//-----------------IMPORTS---------------
import React from 'react';
import styled from "styled-components"
import {Customizer, MyThemeColors as colors}  from "../main";
import {useComponentContext} from '../MyContext'

//---------------END_IMPORTS---------------

const sizes = {
  smallFont: "0.8125rem",
  smallPadding: "8px 12px ",
  smallMargin: "10px",
  mediumFont: "0.875rem",
  mediumPadding: "10px 20px ",
  mediumMargin: "10px ",
  largeFont: " 0.9375rem",
  largePadding: "12px 28px ",
  largeMargin: "10px "
};


const effectRipple = (color = false) => {
  return  `
  position: relative;
  overflow: hidden;
  ::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 30%;
      height: 100%;
      width: 50px;
      background-color: ${color ? color : 'rgba(255, 255,255, 0.7)'};
      border-radius: 500px;
      opacity: 0;
      pointer-events: none;
      transition: all ease-in-out 0.5s;
      transform: scale(5, 5);  
  }
  
  :active::after {
      opacity: .2;
      transition: 0s;
      transform: scale(0, 0);
  }
  `

}

const getGradient = (gradient = false) => gradient && (
    gradient[2] ? 
      "background: linear-gradient(" + gradient[2] + "deg," +  gradient[0] + " 0%," + gradient[1] + " 100%);"
        : 
      "background: linear-gradient(to right, " + gradient[0] + " 0%," + gradient[1] + " 100%);"
    )

let colorMain = type => type ? colors[type].main : colors.primary.main
let colorLighter = (type) => type ? colors[type].lighter : colors.primary.lighter
let colorText = (type) => type === "light" ? colors.text.main : colors.text.white;
let colorRaised = (type) => type ? colors[type].light : colors.primary.light
let colorDisable = colors.disabled.main

//------------STYLED_COMPONENTS---------------
const Button = styled.button`
  /* static */
    cursor: pointer;
    transition: 0.1s;
    border: none;

    :hover{
      transition: 0.1s
    }
    :active{
      transition: 0.1s
    }


   /* dinamyc */
  ${({insertStyleBefore})=> insertStyleBefore && insertStyleBefore}
  ${({
      rounded, fullRounded, size, 
      width, w, height, h, bg, background, 
      padding, p, margin, m, props
    })=> `
    ${rounded ? 'border-radius: 5px' : fullRounded ? 'border-radius: 100px' : ''};
    ${size ? 
      `
        font-family:${sizes[size + 'Font']};
        padding:${sizes[size + 'Padding']};
        margin:${sizes[size + 'Margin']}; 
      ` 
    : 
      `
        font-family:${sizes.mediumFont};
        padding:${sizes.mediumPadding};
        margin:${sizes.mediumMargin}; 
      `
    }
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
    
    
  `}
 
  /* primary */
  ${({primary, type, ripple}) => primary && (`
    background: ${colorMain(type)};
    color: ${colorText(type)};
    ${ ripple && effectRipple()}
  `)} 

  /* ghost */
  ${({ghost, type, ripple}) => ghost && (`
    background: none;
    color ${colorMain(type)};
    border: 1px solid ${colorMain(type)};
    :hover{
      background: ${colorLighter(type)};
    }
    ${ripple && effectRipple(colorMain(type))}
  `)}
  /* smooth */
  ${({smooth, type, ripple}) => smooth && (`
    background: ${colorLighter(type)};
    color ${colorMain(type)};
    ${ripple && effectRipple(colorMain(type))}
  `)}
  /* text */
  ${({text, type, ripple}) => text && ( `
    background: none;
    color ${colorMain(type)};
    :hover{
      background: ${colorLighter(type)};
    }
    ${ripple && effectRipple(colorMain(type))}
  `)}
  /* functions */
  ${({gradient}) => gradient && getGradient(gradient)}

   ${({ raisedColor, type}) =>
     raisedColor && (
     "box-shadow: 3px 3px 5px " +  colorRaised(type) + ";" +
      ":hover { box-shadow: 1px 1px 5px " + colorRaised(type) + "}" +
      ":active { box-shadow: none }"
    
     )
   }
   ${({ raised}) =>
     raised && (
     "box-shadow: 3px 3px 5px #ccc;" +
      ":hover { box-shadow: 1px 1px 5px #ccc }" +
      ":active { box-shadow: none }"
    
     )
   }
  /* custom */
  ${({contextStyle})=> contextStyle && Customizer(contextStyle)}
  ${({myStyle})=> myStyle && Customizer(myStyle)}
  ${({superStyle})=> superStyle && Customizer(superStyle)}
  ${({insertStyle})=> insertStyle && insertStyle}
  /* disabled */
  ${({disabled, ghost}) => disabled && Customizer({
      c: colorDisable, 
      cursor: 'no-drop',
      bxSw: 'none',
      bg: colors.disabled.lighter,
      ':hover': {bg: colors.disabled.lighter, bxSw: 'none'},
      b: ghost ? '1px solid' + colors.disabled.main : 'none',
  })}

  ${({myDisabled, disabled}) => disabled && Customizer(myDisabled)}
`;
//----------END_STYLED_COMPONENTS----------
const MyBtn = ({className, myRef, children, ...rest}) => {
  const {...props} = useComponentContext() || false
  
  return (
    <Button {...props} {...rest} ref={myRef} className={className} >
      {children}
    </Button>
    )
}
export default MyBtn;
