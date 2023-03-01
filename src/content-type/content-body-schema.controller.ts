import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { CreateBodySchemaDto } from './dto/create-body-schema.dto';
import { ContentBodySchemaService } from './content-body-schema.service';

@Controller('content-body-schema')
export class ContentBodySchemaController {
  constructor(
    private readonly contentBodySchemaService: ContentBodySchemaService
  ) {}

  @Post()
  create(@Body() createBodySchemaDto: CreateBodySchemaDto) {
    return this.contentBodySchemaService.create(createBodySchemaDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findBy(@Query('contentTypeId') contentTypeId: number) {
    return this.contentBodySchemaService.findMany({ contentTypeId });
  }

  @Delete()
  async remove(@Query('contentTypeId') contentTypeId: number) {
    await this.contentBodySchemaService.delete({ contentTypeId });
  }
}
