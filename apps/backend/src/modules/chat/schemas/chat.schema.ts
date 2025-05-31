import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose"


export type ChatDocument = Chat & Document


@Schema({ timestamps: true})
export class Chat {

    @Prop({ required: true })
    name: string


    @Prop({ type: [{ type: Types.ObjectId, ref: 'User'}]})
    participants: Types.ObjectId[]


    @Prop({ type: Types.ObjectId, ref: 'Message'})
    lastMessage?: Types.ObjectId

}
