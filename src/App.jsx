import { Box, Title, Text, Paragraph} from "../lib/components";

import {createTheme} from "../lib/main/"

createTheme({
  prop1: 'green',
  rop2: {
    prop1: 'blue'
  },
  prop3: {
    prop1: {
      prop1: 'orange'
    }
  },
  prop4: {
    prop1: {
      prop1: {
        prop1: 'yellow'
      }
    }
  },
  prop5: {
    prop1: {
      prop1: {
        prop1: {
          prop1: 'grey'
        }
      }
    }
  }
})



function App() {

  return (
    <Box
      grid
      gap="10px"
      type="mayor"
      cols="1fr 1fr 1fr"
      areas="
            'header header header'
            'main main aside'
            'footer footer footer'
        "
        myStyle={{
          bg: '--prop1.prop2',
          c: 'red',
          'h1': {c: 'orange'},
          break: {sm: {bg: '--prop2.prop1', 'h1': {c: 'red'}}}
      }}
    >
      
      <Box type="header" h="80px" bg="#ccc" span="header" />
      <Box main flex wrap span="main">
      <h1>hola</h1>
        <Text text="center" c="#ccc">
          <Title text="center">titulo del articulo</Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at consectetur reiciendis quo, labore optio nam dolor nesciunt eos veritatis. Qui incidunt iusto assumenda corporis aliquam ipsam, dolores optio.</p> <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at consectetur reiciendis quo, labore optio nam dolor nesciunt eos veritatis. Qui incidunt iusto assumenda corporis aliquam ipsam, dolores optio.</p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at consectetur reiciendis quo, labore optio nam dolor nesciunt eos veritatis. Qui incidunt iusto assumenda corporis aliquam ipsam, dolores optio.</p><br />
          <Paragraph c="red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at consectetur reiciendis quo, labore optio nam dolor nesciunt eos veritatis. Qui incidunt iusto assumenda corporis aliquam ipsam, dolores optio.</Paragraph>
        </Text>
        <Box h="200px" bg="#909A9B" m="0 0 5px 0" />
        <Box h="200px" bg="#909A9B" m="5px 0" />
        <Box h="200px" bg="#909A9B" m="5px 0" />
      </Box>
      <Box aside h="400px" bg="#CACACA" m="0" span="aside" />
      <Box footer h="80px" bg="#ccc" span="footer" />
    </Box>
  );
}

export default App;
