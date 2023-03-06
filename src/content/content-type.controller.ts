import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  DefaultValuePipe,
  Query,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { infinityPagination } from 'src/util/infinity-pagination';
import { ContentTypeService } from './content-type.service';
import { CreateContentTypeDto } from './dto/create-content-type.dto';
import { UpdateContentTypeDto } from './dto/update-content-type.dto';

@Controller('content-type')
export class ContentTypeController {
  constructor(private readonly contentTypeService: ContentTypeService) {}

  @Post()
  create(@Body() createContentTypeDto: CreateContentTypeDto) {
    return this.contentTypeService.create(createContentTypeDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ) {
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.contentTypeService.findManyWithPagination({
        page,
        limit,
      }),
      { page, limit }
    );
  }

  @Get(':contentTypeId')
  findOne(@Param('contentTypeId') contentTypeId?: number) {
    return this.contentTypeService.findOne({ contentTypeId });
  }

  @Put()
  update(@Body() updateContentTypeDto: UpdateContentTypeDto) {
    return this.contentTypeService.update(updateContentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentTypeService.softDelete(+id);
  }
}
