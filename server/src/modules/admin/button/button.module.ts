import { Module } from '@nestjs/common';
import { ButtonController } from './button.controller';
import { ButtonProvider } from './entities/button.model';
import { ButtonService } from './button.service';

@Module({
  controllers: [ButtonController],
  providers: [ButtonProvider, ButtonService],
})
export class ButtonModule {}
