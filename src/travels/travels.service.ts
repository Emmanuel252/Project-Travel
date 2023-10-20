import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelsService {
  private travels = [
    {
      id: 0,
      place: 'Banco',
      city: 'Yopougon',
      country: 'Abidjan',
    },
    {
      id: 1,
      place: 'Baselique',
      city: 'Yakro',
      country: 'Yamoussoukro',
    },
    {
      id: 3,
      place: 'Montagne',
      city: 'Au Nord',
      country: 'Korogho',
    },
  ];
  getTravel(id: number) {
    const travel = this.travels.find((travel) => travel.id === id);
    if (!travel) throw new Error('Not travels');
    return travel;
  }
  createTravel(CreateTravelDto: CreateTravelDto) {
    const newTravel = {
      ...CreateTravelDto,
      id: Date.now(),
    };
    this.travels.push(newTravel);
    return newTravel;
  }

  updateTravel(id: number, updateTravelDto: UpdateTravelDto) {
    this.travels = this.travels.map((travel) => {
      if (travel.id === id) {
        return { ...travel, ...updateTravelDto };
      }
      return;
    });
    return this.getTravel(id);
  }

  removeUser(id: number) {
    const toBeRemoved = this.getTravel(id);
    this.travels = this.travels.filter((travel) => travel.id !== id);
    return toBeRemoved;
  }
}
