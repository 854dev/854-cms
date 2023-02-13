import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { User } from './entities/user.entity';
import { EntityCondition } from './util/types/entity-condition';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {
    return;
  }

  create(createAccountDto: CreateAccountDto) {
    this.usersRepository.save(this.usersRepository.create(createAccountDto));
    return `user crated : ${createAccountDto.username}`;
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(fields: EntityCondition<User>) {
    return this.usersRepository.findOne({
      where: fields,
    });
  }

  update(id: number, updateProfileDto: UpdateAccountDto) {
    return this.usersRepository.save(
      this.usersRepository.create({
        id,
        ...updateProfileDto,
      })
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.usersRepository.softDelete(id);
  }
}
