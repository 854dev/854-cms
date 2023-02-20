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
import { ContentBodyFieldService } from './conetnt-body-field.service';
import { CreateBodyFieldDto } from './dto/create-body-field.dto';
import { UpdateBodyFieldDto } from './dto/update-body-field.dto';

@Controller('content-type')
export class ContentBodyFieldController {
  constructor(private readonly bodyFieldService: ContentBodyFieldService) {}

  @Post()
  create(@Body() createBodyFieldDto: CreateBodyFieldDto) {
    return this.bodyFieldService.create(createBodyFieldDto);
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
      await this.bodyFieldService.findManyWithPagination({
        page,
        limit,
      }),
      { page, limit }
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bodyFieldService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBodyFieldDto: UpdateBodyFieldDto
  ) {
    return this.bodyFieldService.update(+id, updateBodyFieldDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bodyFieldService.softDelete(+id);
  }
}
