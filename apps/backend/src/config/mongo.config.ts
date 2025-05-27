import { MongooseModule, MongooseModuleOptions } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config"


export const MongoConfigModule = MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<MongooseModuleOptions> => ({
        uri: configService.get<string>('MONGO_URI'),
    }),
    inject: [ConfigService]
})


