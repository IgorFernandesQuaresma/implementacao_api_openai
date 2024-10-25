import { Injectable} from "@nestjs/common";
import { OpenAI } from 'openai';



@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor() {
    console.log('API Key:', process.env.KEY_CHAT);
    this.openai = new OpenAI({
      apiKey: process.env.KEY_CHAT,
    });
  }

public async generateMessage(prompt: string): Promise<string> {
  try {
    const response = await this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Responda como se você fosse o goku ${prompt}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const message = response.choices[0].message.content;
    return message;
  } catch (error) {
    console.error('Error during OpenAI API request:', error);
    throw new Error('Failed to generate message');
  }


} 
}