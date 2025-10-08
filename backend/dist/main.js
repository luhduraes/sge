"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = 3000;
    await app.listen(port);
    console.log(`🚀 Servidor Back-end está rodando em http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map