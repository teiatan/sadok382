import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('staff')
export class StaffController {
  @Get()
  listStaff() {
    return 'goooood';
  }

  @Post()
  createStaffMember(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getStaffMember(@Param() id: string) {
    console.log(id);
  }
}
