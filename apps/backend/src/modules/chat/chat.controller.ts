import { Controller, Get } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('chat')
@Controller('chat')
export class ChatController{
    constructor(private readonly chatService: ChatService){}

    @Get('')
    async getChat(){
        return this.chatService.getChat()
    }
}