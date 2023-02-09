import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [AccountModule, ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
