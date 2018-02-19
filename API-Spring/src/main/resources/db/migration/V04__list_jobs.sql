CREATE TABLE jobs (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	position VARCHAR(50),
	location VARCHAR(50),
	organization VARCHAR(50),
	publication DATE NOT NULL,
	description TEXT NOT NULL,
	status VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (1, 'Senior Software Engineer Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 
'<div>We have an outstanding opportunity for a Senior Software Engineer to be part of an exciting engagement in Fidelity Ireland under the Fidelity Brokerage Technology (FBT) group.</div>
<div>&nbsp;</div>
<div>You will join a Webtech team that is responsible for developing features for our brokerage and investment advisor clients as part of our flagship market trading application (Wealthscape&reg;).</div>
<div>&nbsp;</div>
<div>The team uses a variety of languages and frameworks and if you have experience in some or all of these, or are interested in learning new technologies, then this could be an ideal role for you! (e.g. JavaScript, HTML, Angular, Java, etc.)</div>
<div>&nbsp;</div>
<div>The&nbsp;<strong>Expertise</strong>&nbsp;We&rsquo;re Looking For</div>
<div>&nbsp;A software engineer who is passionate about their craft and has an interest and ability to learn and develop using latest web technologies and frameworks.</div>
<ul>
<li>
<div>BS or MS Degree in Computer Science, Information Technology, or equivalent.</div>
</li>
<li>
<div>5 years development experience with OO development a plus.</div>
</li>
<li>
<div>Sample list of Languages, Frameworks &amp; Tools includes; Angular, JavaScript, HTML and CSS, Java, and REST/SOAP services.</div>
</li>
</ul>
<div>The&nbsp;<strong>Purpose</strong>&nbsp;of Your Role</div>
<ul>
<li>
<div>Your new team of 8 people is currently engaged on a multi-year strategy to design and deliver a range of new functionality for our business partners and FI clients.</div>
</li>
<li>
<div>Your role is a key contributor to in all facets of the delivery process aligned to this strategy.</div>
</li>
</ul>
<div>&nbsp;The&nbsp;<strong>Skills</strong>&nbsp;You Bring</div>
<div>&nbsp;</div>
<ul>
<li>
<div>Your positivity and strength in working within a team of highly talent engineers</div>
</li>
<li>
<div>Your passion for learning and leveraging our professional development programs to grow your career.</div>
</li>
<li>
<div>Your understanding of best practice agile development.</div>
</li>
<li>
<div>A full understanding of the software development process.</div>
</li>
<li>
<div>Along with skills in a range of different technologies.</div>
<div>&nbsp;</div>
</li>
</ul>
<div>The&nbsp;<strong>Value</strong>&nbsp;You Deliver</div>
<div>&nbsp;</div>
<ul>
<li>
<div>Designing and developing high quality, simple, maintainable software solutions.</div>
</li>
<li>
<div>Participating in Architecture &amp; Application design to create innovative solutions.</div>
</li>
<li>
<div>Promoting advanced Agile development practices such as CI/CD, TDD etc.</div>
</li>
<li>
<div>Resolving issues and/or identifying approaches to solutions.</div>
</li>
<li>
<div>Complying with and helping to improve engineering, architectural and coding standards.</div>
</li>
</ul>', 
'Open');



INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (2, 'Mid-Level Front End Developer', 'Developer', 'Dublin', 'Company X', '2018-01-10', 
'<div><strong>Picture yourself helping the worlds most recognized companies develop the worlds best applications.</strong></div>
<div>&nbsp;</div>
<div>Would you like to develop technology for an established, engaged and expanding user base that consists of the worlds leading technology companies? If this intrigues you, then as a Frontend Developer for os, you will build and shape front-end development practices on a tangible industry, a leading API development product with exposure to modern technology stacks and micro-services development tools.</div>
<p>Responsibilities</p>
<ul>
<li>Tackle interesting challenges as we continue evolving our technology from the desktop to flexible, cloud-based solutions</li>
<li>Single Page Application development using React JS (Reflux, Redux) and other cutting edge frameworks &amp; libraries</li>
<li>Implementing new functionality in close cooperation with stakeholders</li>
<li>Build well designed, clean applications with solid technical foundations</li>
<li>Participate in design and code reviews, develop, debug, or modify source code and unit tests</li>
<li>Create and maintain technical and support documentation</li>
</ul>
<p><strong>Qualifications</strong></p>
<ul>
<li>5+ years working with web-based technologies (JavaScript, HTML, CSS)</li>
<li>Including 3+ years of experience building front-end SPA &amp; SaaS applications</li>
<li>Strong background in JavaScript (ES6) and knowledge of modern trends in Frontend Engineering</li>
<li>Proven ability to implement pixel perfect UI design X-browser (CSS3, pre-processors)</li>
<li>Experience in Single Page Application development using React on the front-end</li>
<li>Experience with Webpack; NodeJS, Docker, and any of Angular, jQuery, Java</li>
<li>Experience integrating with REST APIs</li>
<li>Experienced agile team member</li>
</ul>', 
'Open');



INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (3, 'Graduate Software engineer - Developer Role', 'Developer', 'Galway', 'GMIT', '2017-01-23', 
'<p>Job Requirements&nbsp;<br /><br />In order to be considered, you will be on track to receive or have received a 2.1 degree or better (or an equivalent qualification) in Electronic Engineering, Computer Engineering, Computer Science or other relevant subject. Other degree types may be considered with relevant experience.&nbsp;<br /><br /><strong>Essential skills and experience that we look for in a successful Graduate Software Engineer include:</strong></p>
<ul>
<li>Java coding experience</li>
<li>Knowledge of common software development and test processes</li>
<li>A high level of pro-activity and initiative</li>
<li>Strong communication skills: listening, understanding and persuading</li>
<li>Excellent analytical and problem-solving skills.</li>
</ul>
<p><strong>Desirable skills:</strong></p>
<ul>
<li>A good understanding of, or background in, digital electronics</li>
<li>Experience with scripting languages such as Ruby, Python or TCL</li>
<li>Strong Linux skills</li>
<li>Experience of developing or testing Eclipse-based products.</li>
</ul>', 
'Open');

INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (4, 'Windows', 'Developer', 'Dublin', 'GMIT', '2017-10-20', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (5, 'MySQL', 'Developer', 'Galway', 'GMIT', '2018-01-20', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (6, 'Ionic', 'Developer', 'Galway', 'GMIT', '2018-02-01', 'Java Spring, Angular, HTML', 'Close');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (7, 'Node', 'Developer', 'Dublin', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (8, 'Oracle', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Pendent');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (9, 'Joomla', 'Developer', 'Dublin', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (10, 'PHP Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (11, 'C++ Developer', 'Developer', 'Dublin', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (12, 'Angular Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Close');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (13, 'C# Developer', 'Developer', 'Dublin', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (14, 'Android Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (15, 'IOS Developer', 'Developer', 'Dublin', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (16, 'Spring Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Close');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (17, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (18, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (19, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Pendent');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (20, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (21, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (22, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (23, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Pendent');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (24, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Open');
INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (25, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> Java Spring, Angular, HTML <br> ', 'Pendent');

