import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module( {
    imports: [
        //ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.oeudk.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule
    ]

})
export class AppModule {}