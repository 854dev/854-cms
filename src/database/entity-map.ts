import { User } from 'src/account/entities/user.entity';
import { ContentBody } from 'src/content/entities/content-body.entity';
import { ContentCore } from 'src/content/entities/content-core.entity';
import { ContentMeta } from 'src/content/entities/content-meta.entity';
import { ContentTypeField } from 'src/content/entities/content-type-field.entity';
import { ContentType } from 'src/content/entities/content-type.entity';

const entityMap = {
  account: [User],
  content: [
    ContentBody,
    ContentCore,
    ContentMeta,
    ContentTypeField,
    ContentType,
  ],
} as const;

export default entityMap;
