import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Layout from '../components/layout';
import badge from '../public/koficoud-badge.png';
import style from './Home.module.scss';

export default function Home() {
  return (
    <Layout title="Inicio">
      {/* Header */}
      <div className={style.headerHome}>
        <div className={style.headerHomeBackground} />
        <div className={style.headerHomeIcon}>
          <Image
            src={badge}
            alt="KofiCoud Badge"
            width={150}
            height={150}
          />
        </div>
      </div>
      <Box sx={{ flexGrow: 1, marginTop: 10 }} className={style.briefHome}>
        <Grid container spacing={2} justifyContent="center">
          {/* Brief */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h1" component="h1" gutterBottom>
              Kofi Coud
            </Typography>
            <Typography variant="h2" gutterBottom component="h2">
              Software Developer
            </Typography>
            <Typography variant="body1" gutterBottom>
              {/* eslint-disable-next-line max-len */}
              Hola, mi nombre es Fernando López y soy un desarrollador Full Stack. Me especializo en diferentes lenguajes de programación cómo PHP, Python, Java, Kotlin, Dart, y JavaScript (TypeScript). Así como en gestores de bases de datos: MySQL, PostgreSQL y MongoDB. Sin olvidar las tecnologías del lado del cliente web cómo HTML y CSS.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
