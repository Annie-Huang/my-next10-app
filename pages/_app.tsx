import '../styles/globals.css';
import type { AppProps } from 'next/app';

import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// export default MyApp

//========================================================================

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Check theme provider.
const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
