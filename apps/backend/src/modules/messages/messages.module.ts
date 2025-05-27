import { Module } from "@nestjs/common"
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";

@Module({
    imports:[],
    providers: [MessagesService],
    controllers: [MessagesController],
    exports: [MessagesService]

})
export class MessagesModule{}