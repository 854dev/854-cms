import { User } from 'src/account/entities/user.entity';
import { Profile } from 'src/account/entities/profile.entity';

const entityMap = {
  User,
  Profile,
} as const;

export default entityMap;
