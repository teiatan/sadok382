import { IsString } from 'class-validator';

export class CreateStaffMemberDto {
  @IsString()
  name: string;
  @IsString()
  surname: string;
}
