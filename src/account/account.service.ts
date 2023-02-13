import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>
  ) {
    return;
  }

  create(createAccountDto: CreateAccountDto) {
    const { user, profile } = createAccountDto;

    this.usersRepository.save(this.usersRepository.create(user));

    if (profile) {
      this.profileRepository.save(this.profileRepository.create(profile));
    }
    return `user crated : ${user.username}`;
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
