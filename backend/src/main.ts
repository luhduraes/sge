// Arquivo: backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Agora este import vai funcionar!

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 3000; // Usando a porta 3000 por padrão
  await app.listen(port);

  console.log(`🚀 Servidor Back-end está rodando em http://localhost:${port}`);
}
bootstrap();
