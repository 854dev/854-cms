import { User } from 'src/account/entities/user.entity';
import { CommonCode } from 'src/common/entities/common-code.entity';
import { ContentBody } from 'src/content/entities/content-body.entity';
import { ContentMeta } from 'src/content/entities/content-meta.entity';
import { ContentType } from 'src/content/entities/content-type.entity';
import { ContentBodySchema } from 'src/content/entities/content-body-schema.entity';
import { Tag } from 'src/tag/entities/tag.entity';

const entityMap = {
  account: [User],
  content: [ContentBody, ContentMeta, ContentType, ContentBodySchema],
  common: [CommonCode],
  tag: [Tag],
} as const;

export const entityMapArray = [
  ...entityMap.account,
  ...entityMap.content,
  ...entityMap.common,
  ...entityMap.tag,
];

export default entityMap;
