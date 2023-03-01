import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { CreateBodySchemaDto } from './dto/create-body-schema.dto';
import { ContentBodySchemaService } from './content-body-schema.service';

@Controller('content-type')
export class ContentTypeController {
  constructor(
    private readonly contentBodySchemaService: ContentBodySchemaService
  ) {}

  @Post()
  create(@Body() createBodySchemaDto: CreateBodySchemaDto) {
    return this.contentBodySchemaService.create(createBodySchemaDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findBy(@Query() contentTypeId: number, @Query() fieldName: string) {
    await this.contentBodySchemaService.findMany(contentTypeId, fieldName);
  }

  @Delete()
  async remove(
    @Body() condition: { contentTypeId: number; fieldName: string }
  ) {
    await this.contentBodySchemaService.delete(
      condition.contentTypeId,
      condition.fieldName
    );
  }
}
