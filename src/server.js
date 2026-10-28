import app from './app.js';
import { verificarConexao } from './infrastructure/mysql.js';

const port = process.env.PORT || 3000;

verificarConexao()
  .then(() => {
    app.listen(port, () => 
      console.log(`GT Store API disponível em: http://localhost:${port}`)
    );
  })
  .catch((erro) => {
    console.log('Não foi possível iniciar a API', erro);
    process.exitCode = 1;
  }); 