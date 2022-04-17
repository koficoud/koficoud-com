import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navigation from './navigation';
import style from './Layout.module.scss';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1b0000',
    },
    secondary: {
      main: '#984039',
    },
    text: {
      primary: '#1b0000',
      secondary: '#1b0000',
      disabled: 'rgba(27,0,0,0.74)',
      hint: '#1b0000',
    },
  },
  typography: {
    fontFamily: 'Fira Sans',
  },
});

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          | KofiCoud
        </title>
        {/* Meta tags */}
        <title>KofiCoud - Software Developer</title>
        <meta name="title" content="KofiCoud - Software Engineer" />
        <meta name="description" content="Hola, mi nombre es Fernando López y soy un desarrollador Full Stack. Me especializo en diferentes lenguajes de programación cómo PHP, Python, Java, Kotlin, Dart, y JavaScript (TypeScript). Así como en gestores de bases de datos: MySQL, PostgreSQL y MongoDB. Sin olvidar las tecnologías del lado del cliente web cómo HTML y CSS." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://koficoud.com/" />
        <meta property="og:title" content="KofiCoud - Software Developer" />
        <meta property="og:description" content="Hola, mi nombre es Fernando López y soy un desarrollador Full Stack. Me especializo en diferentes lenguajes de programación cómo PHP, Python, Java, Kotlin, Dart, y JavaScript (TypeScript). Así como en gestores de bases de datos: MySQL, PostgreSQL y MongoDB. Sin olvidar las tecnologías del lado del cliente web cómo HTML y CSS." />
        <meta property="og:image" content="/header-home.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://koficoud.com/" />
        <meta property="twitter:title" content="KofiCoud - Software Developer" />
        <meta property="twitter:description" content="Hola, mi nombre es Fernando López y soy un desarrollador Full Stack. Me especializo en diferentes lenguajes de programación cómo PHP, Python, Java, Kotlin, Dart, y JavaScript (TypeScript). Así como en gestores de bases de datos: MySQL, PostgreSQL y MongoDB. Sin olvidar las tecnologías del lado del cliente web cómo HTML y CSS." />
        <meta property="twitter:image" content="/header-home.webp" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={style.main}>
        <ThemeProvider theme={theme}>
          <Navigation />
          {children}
        </ThemeProvider>
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
