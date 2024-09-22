import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
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
  async getStaffMember(@Param() params: { id: string }) {
    const staffMember = await this.staffService.findOne(params.id);
    if (!staffMember) {
      throw new NotFoundException(`no staff member with ${params.id} id`);
    }
    return staffMember;
  }
}
