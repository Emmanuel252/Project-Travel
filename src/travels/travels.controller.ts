import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { TravelsService } from './travels.service';

@Controller('travels')
export class TravelsController {
  constructor(private readonly TravelsService: TravelsService) {}

  @Get(':id')
  getOneTravel(@Param('id') id: number) {
    try {
      return this.TravelsService.getTravel(+id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @Post(':id')
  createTravel(@Body() CreateTravelDto: CreateTravelDto) {
    return this.TravelsService.createTravel(CreateTravelDto);
  }
  @Put(':id')
  updateTravel(
    @Param('id') id: string,
    @Body() UpdateTravelDto: UpdateTravelDto,
  ) {
    return this.TravelsService.updateTravel(+id, UpdateTravelDto);
  }
  //   @Delete(':id')
  //   removeTravel(@Param('id') id: string) {
  //     return this.TravelsService.removeTravel(+id);
  //   }
}
