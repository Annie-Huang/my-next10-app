import '../styles/globals.css'
import type { AppProps } from 'next/app'

import App from 'next/app';
import {ThemeProvider} from 'styled-components';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// export default MyApp

// Check theme provider.
const theme = {
  colors: {
    primary: '#0070f3'
  }
};

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    );
  }
}