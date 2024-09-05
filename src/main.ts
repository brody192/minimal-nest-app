import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    console.log('Server started on port', process.env.PORT || 3000);
    console.log('Redis URL:', process.env.REDIS_URL);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
