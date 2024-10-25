import { Module } from '@nestjs/common';
import { PromptController } from './controller/prompt.controller';
import { OpenAiService } from '../OpenIAConfig/service/openAi.service';



@Module({
    imports: [],
    controllers: [PromptController],
    providers: [OpenAiService],
    exports: [],
})
export class PromptModule {}