import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelescraperModule } from './telescraper/telescraper.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [TelescraperModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
