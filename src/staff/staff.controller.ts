import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStaffMemberDto } from './dtos/create-staff-member.dto';

@Controller('staff')
export class StaffController {
  @Get()
  listStaff() {
    return 'goooood';
  }

  @Post()
  createStaffMember(@Body() body: CreateStaffMemberDto) {
    console.log(body);
  }

  @Get('/:id')
  getStaffMember(@Param() id: string) {
    console.log(id);
  }
}
