
CREATE TABLE applicant_notes (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	score BIGINT(20),
	notes TEXT,
	score_questions BIGINT(20),
	code_applicant BIGINT(20) NOT NULL,
	FOREIGN KEY (code_applicant) REFERENCES Applicants(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO applicant_notes (score, score_questions, notes, code_applicant) values (3, 5, 
'Reading between the lines, NAME seems to feel constrained by high school but, naturally looking for the positive, he was quick to point out the school’s outstanding music program. Recognizing the caliber of the teacher who runs the music program, NAME joined chorale this year as a baritone. He feels this is a way to help him to get the most out of the school’s offerings. While he seems very motivated, NAME has likely not benefited from the type of experiences that would show him how much opportunity is out there. But he seems passionate about doing something with his life that has impact, most likely in the area of Engineering and Environmental Science. His favorite writings are those by Aldo Leopold, which he finds thought provoking, prophetic and admirable because it shows how his beliefs evolved during the course of a life. NAME’s admiration for Leopold is consistent with his own perpetual growth throughout life.'
, 1);


INSERT INTO applicant_notes (score, score_questions, notes, code_applicant) values (1, 3, 
'Reading between the lines, NAME seems to feel constrained by high school but, naturally looking for the positive, he was quick to point out the school’s outstanding music program. Recognizing the caliber of the teacher who runs the music program, NAME joined chorale this year as a baritone. He feels this is a way to help him to get the most out of the school’s offerings. While he seems very motivated, NAME has likely not benefited from the type of experiences that would show him how much opportunity is out there. But he seems passionate about doing something with his life that has impact, most likely in the area of Engineering and Environmental Science. His favorite writings are those by Aldo Leopold, which he finds thought provoking, prophetic and admirable because it shows how his beliefs evolved during the course of a life. NAME’s admiration for Leopold is consistent with his own perpetual growth throughout life.'
, 2);

INSERT INTO applicant_notes (score, score_questions, notes, code_applicant) values (5, 0, 
'Reading between the lines, NAME seems to feel constrained by high school but, naturally looking for the positive, he was quick to point out the school’s outstanding music program. Recognizing the caliber of the teacher who runs the music program, NAME joined chorale this year as a baritone. He feels this is a way to help him to get the most out of the school’s offerings. While he seems very motivated, NAME has likely not benefited from the type of experiences that would show him how much opportunity is out there. But he seems passionate about doing something with his life that has impact, most likely in the area of Engineering and Environmental Science. His favorite writings are those by Aldo Leopold, which he finds thought provoking, prophetic and admirable because it shows how his beliefs evolved during the course of a life. NAME’s admiration for Leopold is consistent with his own perpetual growth throughout life.'
, 3);

INSERT INTO applicant_notes (score, score_questions, notes, code_applicant) values (5, 0, 
'Reading between the lines, NAME seems to feel constrained by high school but, naturally looking for the positive, he was quick to point out the school’s outstanding music program. Recognizing the caliber of the teacher who runs the music program, NAME joined chorale this year as a baritone. He feels this is a way to help him to get the most out of the school’s offerings. While he seems very motivated, NAME has likely not benefited from the type of experiences that would show him how much opportunity is out there. But he seems passionate about doing something with his life that has impact, most likely in the area of Engineering and Environmental Science. His favorite writings are those by Aldo Leopold, which he finds thought provoking, prophetic and admirable because it shows how his beliefs evolved during the course of a life. NAME’s admiration for Leopold is consistent with his own perpetual growth throughout life.'
, 4);

INSERT INTO applicant_notes (score, score_questions, notes, code_applicant) values (3, 0, 
'Reading between the lines, NAME seems to feel constrained by high school but, naturally looking for the positive, he was quick to point out the school’s outstanding music program. Recognizing the caliber of the teacher who runs the music program, NAME joined chorale this year as a baritone. He feels this is a way to help him to get the most out of the school’s offerings. While he seems very motivated, NAME has likely not benefited from the type of experiences that would show him how much opportunity is out there. But he seems passionate about doing something with his life that has impact, most likely in the area of Engineering and Environmental Science. His favorite writings are those by Aldo Leopold, which he finds thought provoking, prophetic and admirable because it shows how his beliefs evolved during the course of a life. NAME’s admiration for Leopold is consistent with his own perpetual growth throughout life.'
, 5);


INSERT INTO applicant_notes (score, score_questions, notes, code_applicant) values (1, 0, 
'Reading between the lines, NAME seems to feel constrained by high school but, naturally looking for the positive, he was quick to point out the school’s outstanding music program. Recognizing the caliber of the teacher who runs the music program, NAME joined chorale this year as a baritone. He feels this is a way to help him to get the most out of the school’s offerings. While he seems very motivated, NAME has likely not benefited from the type of experiences that would show him how much opportunity is out there. But he seems passionate about doing something with his life that has impact, most likely in the area of Engineering and Environmental Science. His favorite writings are those by Aldo Leopold, which he finds thought provoking, prophetic and admirable because it shows how his beliefs evolved during the course of a life. NAME’s admiration for Leopold is consistent with his own perpetual growth throughout life.'
, 6);

