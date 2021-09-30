// Material UI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// Styling
import styled from 'styled-components';

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #001e3c;
`;

function App() {
  return (
    <StyledApp>

      <Box>
      <TextField
      style={{backgroundColor: 'rgba(255,255,255, 0.15)'}}
          label="Size"
          id="filled-size-normal"
          defaultValue="Normal"
          variant="filled"
        />
      </Box>
        
    </StyledApp>
  );
}

export default App;
