import { Box, Title, Text, Paragraph } from "../lib/components";

function App() {
  return (
    <Box
      grid
      gap="10px"
      type="lg"
      cols="1fr 1fr 1fr"
      areas="
            'header header header'
            'main main aside'
            'footer footer footer'
        "
    >
      <Box type="header" h="80px" bg="#ccc" span="header" />
      <Box main flex wrap span="main">
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
