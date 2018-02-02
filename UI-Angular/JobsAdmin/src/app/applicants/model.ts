import { Jobs } from './../jobs/model';

export class Applicants {
  code: number;
  fullname: string;
  email: string;
  phone_number: string;
  profile_url: string;
  cover_letter: string;
  status = 'New applicant';
  applicant_date: Date;
  job = new Jobs();
}



