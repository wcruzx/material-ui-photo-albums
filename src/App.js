import Box from '@mui/material/Box';
import { Header } from './ui/surfaces/header/header';
import { Typography } from '@mui/material';

function App() {
  return (
    <Box>
      <Header/>
      <main>
        <Box sx={{ pt: 15 }} component={'section'}>
          <Typography variant='h3' align='center' >Album de fotos</Typography>
          <Typography paragraph variant='body2' align='center' sx={{ mt: 2 }}>
            Ut adipisicing cupidatat id irure pariatur tempor anim nostrud pariatur amet. Sint amet aliqua eu sint culpa est aliqua et velit incididunt est proident. Cupidatat ad sint enim esse mollit. Enim pariatur deserunt irure aliquip. Eu dolor qui velit sunt fugiat. Id cillum deserunt quis voluptate culpa incididunt minim proident. Dolore nulla non amet eu ut culpa voluptate proident exercitation sint et nulla est.
          </Typography>
        </Box>
      </main>
    </Box>
  );
}

export default App;
