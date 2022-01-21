import {Box} from '../lib/components'

function App() {
  const style = {h: '500px'}
  return (
    <Box 
        grid
        gap="10px"
        type="lg" 
        cols="1fr 1fr 1fr" 
        y="start"
        areas="
            'header header header'
            'main main aside'
            'footer footer footer'
        "
      >
        <Box header h='80px' bg="#ccc" span="header"/>
        <Box main flex wrap span="main">
          <Box  h='200px' bg="#909A9B" m="0 0 5px 0"/>
          <Box  h='200px' bg="#909A9B" m="5px 0"/>
          <Box  h='200px' bg="#909A9B" m="5px 0"/>
        </Box>
        <Box aside h='400px'bg="#CACACA" m="0" span="aside"/>
        <Box footer h='80px'bg="#ccc" span="footer"/>
    </Box>
  )
}

export default App
