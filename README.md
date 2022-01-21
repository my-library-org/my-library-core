# my-library-core
this is a library of react components and other useful functions for development

## installation

### npm
```bash
npm install my-library-core --save
```
### yarn 
```bash
yarn add my-library-core
```
## demo
    this is little example of one of the components
```jsx
import {
    Box as Wrapper,
    Box as Header,
    Box as Main,
    Box as Aside,
    Box as Footer,
    Box
} from '../lib/components'

function App() {
  const style = {h: '500px'}
  return (
    <Wrapper 
        grid
        gap="10px"
        type="lg" 
        cols="1fr 1fr 1fr" 
        y="start"
        myStyle={{ai: 'start'}}
        areas="
            'header header header'
            'main main aside'
            'footer footer footer'
        "
      >
        <Header header h='80px' bg="#ccc" span="header"/>
        <Main main flex wrap span="main">
          <Box  h='200px' bg="#909A9B" m="0 0 5px 0"/>
          <Box  h='200px' bg="#909A9B" m="5px 0"/>
          <Box  h='200px' bg="#909A9B" m="5px 0"/>
        </Main>
        <Aside aside h='400px'bg="#CACACA" m="0" span="aside"/>
        <Footer footer h='80px'bg="#ccc" span="footer"/>
    </Wrapper>
  )
}

export default App
```
and result will be this:
![Screenshot](src/assets/Capture.PNG)


## overview
this project has the following:<br />
dependencies:<br />
    <b>styled-components</b> <br />
components: <br />
    <b>Box</b><br />
    <b>Card</b><br />
    <b>Modal</b><br />
    <b>MyBtn</b><br />
    <b>Navbar</b><br />
functions: <br />
    <b>customizer</b><br />
const: <br />
    <b>Breakpoints</b><br />
    <b>Layers</b><br />
    <b>LayersBootstrap</b><br />
    <b>MyColors</b><br />
    <b>MyThemeColors</b><br />
provider:<br />
    <b>MyContext</b><br />