import { User } from 'src/account/entities/user.entity';
import { CommonCode } from 'src/common/entities/common-code.entity';
import { ContentBody } from 'src/content/entities/content-body.entity';
import { ContentCore } from 'src/content/entities/content-core.entity';
import { ContentMeta } from 'src/content/entities/content-meta.entity';
import { ContentBodyField } from 'src/content/entities/content-body-field.entity';
import { ContentType } from 'src/content/entities/content-type.entity';

const entityMap = {
  account: [User],
  content: [
    ContentBody,
    ContentCore,
    ContentMeta,
    ContentBodyField,
    ContentType,
  ],
  common: [CommonCode],
} as const;

export default entityMap;
