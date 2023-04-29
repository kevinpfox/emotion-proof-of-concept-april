import * as React from 'react';
import { css, Global } from '@emotion/react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';


const GLOBAL_CSS = css`
  .MuiButton-root {
    border: 3px solid pink;
  }
`;

export default function About() {
  return (
    <>
      {/*
        GLOBAL_CSS styles (above ^^) <style> tag should be injected below all the MUI <style> tags in <head> so our styles can override MUI styles
        Previously we were able to do this via <StyledEngineProvider injectFirst>
        but now, after switching to MUI V5 we can no longer use that context because it provokes a server/client class name mismatch
        Expectation: any style, global or otherwise, are able to override the out-of-the-box MUI styles
      */}
      <Global styles={GLOBAL_CSS} />

      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI - Next.js example in TypeScript
          </Typography>
          <Box maxWidth="sm">
            <Button variant="contained" component={Link} noLinkStyle href="/">
              Go to the home page
            </Button>
          </Box>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
