// Arquivo: backend/src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem-vinda ao Sistema de Gestão Escolar!';
  }
}
