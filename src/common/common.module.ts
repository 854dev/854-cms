import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { CommonCode } from './entities/common-code.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CommonCode])],
  controllers: [CommonController],
  providers: [CommonService],
})
export class CommonModule {}
