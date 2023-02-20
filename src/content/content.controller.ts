import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
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
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ): Promise<any> {
    if (limit > 50) {
      limit = 50;
    }
    return infinityPagination(
      await this.contentService.findManyWithPagination({
        page,
        limit,
      }),
      { page, limit }
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contentService.findOne({ id });
  }

  @Get(':id/body')
  findOneWithBody(@Param('id') id: number) {
    return this.contentService.findOneWithBody(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentService.update(updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') contentId: number) {
    return this.contentService.softDelete(contentId);
  }
}
