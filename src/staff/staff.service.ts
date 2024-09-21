import { CreateStaffMemberDto } from './dtos/create-staff-member.dto';
import { StaffRepository } from './staff.repository';

export class StaffService {
  staffRepo: StaffRepository;

  constructor() {
    // Service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    this.staffRepo = new StaffRepository();
  }

  findOne(id: string) {
    return this.staffRepo.findOne(id);
  }

  findAll() {
    return this.staffRepo.findAll();
  }

  create(staffMember: CreateStaffMemberDto) {
    return this.staffRepo.create(staffMember);
  }
}
