import { Controller, Get, Query } from '@nestjs/common';
import { OpenAiService } from '../../OpenIAConfig/service/openAi.service';


@Controller('prompts')
export class PromptController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Get('message')
  async generateMessage(@Query('prompt') prompt: string) {
    return await this.openAiService.generateMessage(prompt);
  }
}

