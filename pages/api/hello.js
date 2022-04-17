// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Hola, mi nombre es Fernando López y soy un desarrollador Full Stack.',
    description: 'Me especializo en diferentes lenguajes de programación cómo PHP, Python, Java, Kotlin, Dart, y JavaScript (TypeScript). Así como en gestores de bases de datos: MySQL, PostgreSQL y MongoDB. Sin olvidar las tecnologías del lado del cliente web cómo HTML y CSS.',
  });
}
