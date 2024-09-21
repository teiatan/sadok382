import { readFile, writeFile } from 'fs/promises';
import { CreateStaffMemberDto } from './dtos/create-staff-member.dto';
import { nanoid } from 'nanoid';

export class StaffRepository {
  async findOne(id: string) {
    const staff = await readFile('../../data/staff.json', 'utf8');
    const staffMembers = JSON.parse(staff);
    return staffMembers[id];
  }

  async findAll() {
    const staff = await readFile('../../data/staff.json', 'utf8');
    const staffMembers = JSON.parse(staff);
    return staffMembers;
  }

  async create(staffMember: CreateStaffMemberDto) {
    const staff = await readFile('../../data/staff.json', 'utf8');
    const staffMembers = JSON.parse(staff);
    const id = nanoid();
    staffMembers[id] = { id, ...staffMember };
    await writeFile('../../data/staff.json', JSON.stringify(staffMembers));
  }
}
