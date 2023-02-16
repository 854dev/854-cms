import { PartialType } from '@nestjs/swagger';
import { CreateContentTypeDto } from './create-content-type.dto';

export class UpdateContentTypeDto extends PartialType(CreateContentTypeDto) {}
