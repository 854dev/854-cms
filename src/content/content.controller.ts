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
  DefaultValuePipe,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { infinityPagination } from 'src/util/infinity-pagination';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.create(createContentDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('contentTypeId', ParseIntPipe) contentTypeId?: number
  ): Promise<any> {
    if (limit > 50) {
      limit = 50;
    }
    return infinityPagination(
      await this.contentService.findManyWithPagination({
        page,
        limit,
        contentTypeId,
      }),
      { page, limit }
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contentService.findOneWithBody(id);
  }

  // @Get(':id/body')
  // findOneWithBody(@Param('id') id: number) {
  //   return this.contentService.findOneWithBody(id);
  // }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateContentDto: UpdateContentDto) {
    updateContentDto.contentId = id;
    return this.contentService.update(updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') contentId: number) {
    return this.contentService.softDelete(contentId);
  }
}
