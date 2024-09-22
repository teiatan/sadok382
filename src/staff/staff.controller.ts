import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStaffMemberDto } from './dtos/create-staff-member.dto';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
  staffService: StaffService;

  constructor() {
    this.staffService = new StaffService();
  }

  @Get()
  listStaff() {
    return this.staffService.findAll();
  }

  @Post()
  createStaffMember(@Body() body: CreateStaffMemberDto) {
    return this.staffService.create(body);
  }

  @Get('/:id')
  getStaffMember(@Param() params: { id: string }) {
    return this.staffService.findOne(params.id);
  }
}
