
CREATE TABLE applicants (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	fullname VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	phone_number VARCHAR(30),
	profile_url VARCHAR(30),
	cover_letter TEXT,
	upload_cv MEDIUMBLOB,
	status VARCHAR(30),
	applicant_date DATE,
	code_job BIGINT(20) NOT NULL,
	FOREIGN KEY (code_job) REFERENCES jobs(code)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Alexander Souza', 'alexpt2000@gmail.com', '0877687528', 'https://www.w3schools.com/', 
'<p>Your Name<br />Your Address<br />Your City, State, Zip Code<br />Cell: 555-555-5555<br />Email: name@<span class="skimlinks-unlinked">email.com</span></p>
<p>Date</p>
<p>Name<br />Job Title<br />Company<br />Street<br />City, State Zip</p>
<p>Dear Ms. LastName,</p>
<p>I am writing to apply for the scientific research summer internship position that was listed through the XYZ University Career Services Office. I believe my research and conservation experience make me an ideal candidate.</p>
<p>I have had a great deal of research experience in chemistry, biology, and geology, both in the lab and in the field. Most of my experience is in environmental field studies. I am currently conducting research in our schools outdoor laboratory to assess the water quality of a nearby pond.</p>
<div >
<p>I know water quality assessment is a component of this internship, and I know my previous experience makes me a prime candidate for this.</p>
<p>Last summer, I worked as a&nbsp;conservation assistant at the National Trust s Clumber Park. Along with trail maintenance and building, I also served as a research assistant for the research organization at the park. I conducted analysis of soil samples, and input data from various research projects. I received a special commendation from the director of the research organization for my attention to detail and dedication to research.</p>
<p>I believe that I would be an asset to your program. This internship would provide me with the ideal opportunity to assist your organization and to expand my research skills.</p>
<p>I will call next week to see if you agree that my qualifications seem to be a match for the position. If so, I hope to schedule an interview at a mutually convenient time. I look forward to speaking with you.</p>
<p>Thank you for your consideration,</p>
<p>Sincerely,</p>
</div>
<p><br /><br /></p>', 
'Did not pass', '2018-01-29', 1);

INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Kevin Souza', 'alexpt2000@gmail.com', '0877687528', 'www.alex.com', 
'<p>Your Name<br />Your Address<br />Your City, State, Zip Code<br />Cell: 555-555-5555<br />Email: name@<span class="skimlinks-unlinked">email.com</span></p>
<p>Date</p>
<p>Name<br />Job Title<br />Company<br />Street<br />City, State Zip</p>
<p>Dear Ms. LastName,</p>
<p>I am writing to apply for the scientific research summer internship position that was listed through the XYZ University Career Services Office. I believe my research and conservation experience make me an ideal candidate.</p>
<p>I have had a great deal of research experience in chemistry, biology, and geology, both in the lab and in the field. Most of my experience is in environmental field studies. I am currently conducting research in our schools outdoor laboratory to assess the water quality of a nearby pond.</p>
<div >
<p>I know water quality assessment is a component of this internship, and I know my previous experience makes me a prime candidate for this.</p>
<p>Last summer, I worked as a&nbsp;conservation assistant at the National Trust s Clumber Park. Along with trail maintenance and building, I also served as a research assistant for the research organization at the park. I conducted analysis of soil samples, and input data from various research projects. I received a special commendation from the director of the research organization for my attention to detail and dedication to research.</p>
<p>I believe that I would be an asset to your program. This internship would provide me with the ideal opportunity to assist your organization and to expand my research skills.</p>
<p>I will call next week to see if you agree that my qualifications seem to be a match for the position. If so, I hope to schedule an interview at a mutually convenient time. I look forward to speaking with you.</p>
<p>Thank you for your consideration,</p>
<p>Sincerely,</p>
</div>
<p><br /><br /></p>', 
'New applicant', '2018-01-29', 2);

INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Sandra Souza', 'Sandra@gmail.com', '0877687528', 'www.alex.com', 
'<p>Your Name<br />Your Address<br />Your City, State, Zip Code<br />Cell: 555-555-5555<br />Email: name@<span class="skimlinks-unlinked">email.com</span></p>
<p>Date</p>
<p>Name<br />Job Title<br />Company<br />Street<br />City, State Zip</p>
<p>Dear Ms. LastName,</p>
<p>I am writing to apply for the scientific research summer internship position that was listed through the XYZ University Career Services Office. I believe my research and conservation experience make me an ideal candidate.</p>
<p>I have had a great deal of research experience in chemistry, biology, and geology, both in the lab and in the field. Most of my experience is in environmental field studies. I am currently conducting research in our schools outdoor laboratory to assess the water quality of a nearby pond.</p>
<div >
<p>I know water quality assessment is a component of this internship, and I know my previous experience makes me a prime candidate for this.</p>
<p>Last summer, I worked as a&nbsp;conservation assistant at the National Trust s Clumber Park. Along with trail maintenance and building, I also served as a research assistant for the research organization at the park. I conducted analysis of soil samples, and input data from various research projects. I received a special commendation from the director of the research organization for my attention to detail and dedication to research.</p>
<p>I believe that I would be an asset to your program. This internship would provide me with the ideal opportunity to assist your organization and to expand my research skills.</p>
<p>I will call next week to see if you agree that my qualifications seem to be a match for the position. If so, I hope to schedule an interview at a mutually convenient time. I look forward to speaking with you.</p>
<p>Thank you for your consideration,</p>
<p>Sincerely,</p>
</div>
<p><br /><br /></p>', 
'New applicant', '2018-01-29', 1);

INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Nina Souza', 'Nina@gmail.com', '0877687528', 'www.alex.com', 
'<p>Your Name<br />Your Address<br />Your City, State, Zip Code<br />Cell: 555-555-5555<br />Email: name@<span class="skimlinks-unlinked">email.com</span></p>
<p>Date</p>
<p>Name<br />Job Title<br />Company<br />Street<br />City, State Zip</p>
<p>Dear Ms. LastName,</p>
<p>I am writing to apply for the scientific research summer internship position that was listed through the XYZ University Career Services Office. I believe my research and conservation experience make me an ideal candidate.</p>
<p>I have had a great deal of research experience in chemistry, biology, and geology, both in the lab and in the field. Most of my experience is in environmental field studies. I am currently conducting research in our schools outdoor laboratory to assess the water quality of a nearby pond.</p>
<div >
<p>I know water quality assessment is a component of this internship, and I know my previous experience makes me a prime candidate for this.</p>
<p>Last summer, I worked as a&nbsp;conservation assistant at the National Trust s Clumber Park. Along with trail maintenance and building, I also served as a research assistant for the research organization at the park. I conducted analysis of soil samples, and input data from various research projects. I received a special commendation from the director of the research organization for my attention to detail and dedication to research.</p>
<p>I believe that I would be an asset to your program. This internship would provide me with the ideal opportunity to assist your organization and to expand my research skills.</p>
<p>I will call next week to see if you agree that my qualifications seem to be a match for the position. If so, I hope to schedule an interview at a mutually convenient time. I look forward to speaking with you.</p>
<p>Thank you for your consideration,</p>
<p>Sincerely,</p>
</div>
<p><br /><br /></p>', 
'New applicant', '2018-01-29', 1);

INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Alex Souza', 'alexpt2000@gmail.com', '0877687528', 'www.alex.com', 
'<p>Your Name<br />Your Address<br />Your City, State, Zip Code<br />Cell: 555-555-5555<br />Email: name@<span class="skimlinks-unlinked">email.com</span></p>
<p>Date</p>
<p>Name<br />Job Title<br />Company<br />Street<br />City, State Zip</p>
<p>Dear Ms. LastName,</p>
<p>I am writing to apply for the scientific research summer internship position that was listed through the XYZ University Career Services Office. I believe my research and conservation experience make me an ideal candidate.</p>
<p>I have had a great deal of research experience in chemistry, biology, and geology, both in the lab and in the field. Most of my experience is in environmental field studies. I am currently conducting research in our schools outdoor laboratory to assess the water quality of a nearby pond.</p>
<div >
<p>I know water quality assessment is a component of this internship, and I know my previous experience makes me a prime candidate for this.</p>
<p>Last summer, I worked as a&nbsp;conservation assistant at the National Trust s Clumber Park. Along with trail maintenance and building, I also served as a research assistant for the research organization at the park. I conducted analysis of soil samples, and input data from various research projects. I received a special commendation from the director of the research organization for my attention to detail and dedication to research.</p>
<p>I believe that I would be an asset to your program. This internship would provide me with the ideal opportunity to assist your organization and to expand my research skills.</p>
<p>I will call next week to see if you agree that my qualifications seem to be a match for the position. If so, I hope to schedule an interview at a mutually convenient time. I look forward to speaking with you.</p>
<p>Thank you for your consideration,</p>
<p>Sincerely,</p>
</div>
<p><br /><br /></p>', 
'In process', '2018-01-29', 1);

INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Kevin Fortes Souza', 'alexpt2000@gmail.com', '0877687528', 'www.alex.com', 
'<p>Your Name<br />Your Address<br />Your City, State, Zip Code<br />Cell: 555-555-5555<br />Email: name@<span class="skimlinks-unlinked">email.com</span></p>
<p>Date</p>
<p>Name<br />Job Title<br />Company<br />Street<br />City, State Zip</p>
<p>Dear Ms. LastName,</p>
<p>I am writing to apply for the scientific research summer internship position that was listed through the XYZ University Career Services Office. I believe my research and conservation experience make me an ideal candidate.</p>
<p>I have had a great deal of research experience in chemistry, biology, and geology, both in the lab and in the field. Most of my experience is in environmental field studies. I am currently conducting research in our schools outdoor laboratory to assess the water quality of a nearby pond.</p>
<div >
<p>I know water quality assessment is a component of this internship, and I know my previous experience makes me a prime candidate for this.</p>
<p>Last summer, I worked as a&nbsp;conservation assistant at the National Trust s Clumber Park. Along with trail maintenance and building, I also served as a research assistant for the research organization at the park. I conducted analysis of soil samples, and input data from various research projects. I received a special commendation from the director of the research organization for my attention to detail and dedication to research.</p>
<p>I believe that I would be an asset to your program. This internship would provide me with the ideal opportunity to assist your organization and to expand my research skills.</p>
<p>I will call next week to see if you agree that my qualifications seem to be a match for the position. If so, I hope to schedule an interview at a mutually convenient time. I look forward to speaking with you.</p>
<p>Thank you for your consideration,</p>
<p>Sincerely,</p>
</div>
<p><br /><br /></p>', 
'New applicant', '2018-01-29', 1);