import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuProvider } from './entities/menu.model';
import { MenuService } from './menu.service';

@Module({
  controllers: [MenuController],
  providers: [MenuProvider, MenuService],
})
export class MenuModule {}
