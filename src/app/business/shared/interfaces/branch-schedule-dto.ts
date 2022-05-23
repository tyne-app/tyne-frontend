export interface BranchScheduleDto {
  branch_id: number;
  schedule: ScheduleDto[];
}

export interface ScheduleDto {
  opening_hour: string;
  closing_hour: string;
  active: boolean;
  day: number;
}
