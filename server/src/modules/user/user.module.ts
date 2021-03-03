import { Global, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserProvider } from './entities/user.model';
import { UserService } from './user.service';

@Global()
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserProvider],
  exports: [UserService],
})
export class UserModule {}
