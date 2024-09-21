import { Controller, Get, Post } from '@nestjs/common';

@Controller('staff')
export class StaffController {
  @Get()
  listStaff() {}

  @Post()
  createStaffMember() {}

  @Get('/:id')
  getStaffMember() {}
}
