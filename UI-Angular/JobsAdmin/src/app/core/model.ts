
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

export class Jobs {
  code: number;
  title: string;
  position: string;
  location: string;
  organization: string;
  publication: Date;
  description: string;
  status: string;
}


export class Schedules {
  code: number;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean = false;
  notes: string;
}


export class ApplicantNotes {
  code: number;
  score: number;
  notes: string;
  applicant = new Applicants();
}

