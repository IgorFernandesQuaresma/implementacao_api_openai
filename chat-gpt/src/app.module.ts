import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { OpenAiModule } from './OpenIAConfig/openAi.module';
import { PromptModule } from './prompt/prompt.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    OpenAiModule,
    PromptModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
