var bio = {
	"name": "Steve Huang",
	"role": "Data Analyst",
	"contacts": {"location": "Pleasanton, CA", "phone":"925-963-5667", "email": "mingdash@gmail.com"},
	"github": "Arimpact",
	"welcome": "welcome to my biography page!"
};

var education = {
	"school": [{
		"name": "CSU Fullerton",
		"city": "Fullerton",
		"major": "MBA Finance",
		"graduation": 2011},
		{"name": "UC Irvine",
		"city": "Irvine",
		"major": "International Business",
		"graduation": 2007}]
};

var work = {
// 		"company": [{"name": "Google Inc - (through Astreya)",
// 		"city": "Mountain View, CA",
// 		"role": "Data Analyst",
// 		"year": "Jan 2015 - Present",
// 		"descript": {"part1": "Assist in the support of a global cross-functional team of regional leads, coordinators, and technicians for the Chrome team through the creation of business operation tools for data analysis, and metrics. ",
// 					"part2": "Using Google App script, created many business applications that would automate tasks for data manipulation, automatic emailing, work process ticket creation, and data analysis.",
// 					"part3": "Leveraged Google internal databases (Dremel and PLX) and other APIs to create analytical reports and dashboards."}
// 		},
// 		{"name": "VG Market",
// 		"city": "Dublin, CA",
// 		"role": "Quantitative Research Analyst",
// 		"year": "April 2014 - Dec 2014",
// 		"descript": {"part1": "Provide clients with direct feedback on quantitative and coding-related requests.",
// 					"part2": "Analyze and present quantitative survey data through Excel.",
// 					"part3": "Highlight significant findings in reports and presentations utilizing clear charts and tables."}
// 		},
// 		{"name": "Ross Stores INC",
// 		"city": "Dublin, CA",
// 		"role": "System Administion Analyst",
// 		"year": "Oct 2011 - March 2014",
// 		"descript": {"part1": "Generated weekly and monthly automation reports, utilizing large database SQL pulls.",
// 					"part2": "Responsible in all phase of excel tool project lifecycle, from specifications and coding through deployment, testing, debugging, documentation, and maintenance.",
// 					"part3": "Administering support for the Allocation Department in the form of report creation/execution, analysis and allocation system management."}
// 		}]
};

var project = {"pro": [
	{"name": "Arcade Game",
	"descript": {"part1": "Used Object Oriented Programming's pseudo-classical style to create game objects. Game asset provided by Udacity.",
				"part2": "Coded player/enemy movement logic, scoring system, and win conditions for game. Created Gem pick up system to make game more fun.",
				"part3": "Created game intro/game-over/character-selection menus using HTML canvas and x/y pointer location logic."},
	"date": "September 2015"},
	{"name": "My Resume",
	"descript": {"part1": "Created personal resume using javascript knowledge learned in the course.",
				"part2": "Used HTML, CSS, basic Javascript and jQuery to manipulate the HTML DOM.",
				"part3": "Used the Google Maps API provided by Udacity to show locations where I lived and worked."},
	"date": "August 2015"},
	{"name": "My Portfolio",
	"descript": {"part1": "Created responsive website to showcase personal web site Portfolio.",
				"part2": "Leveraged HTML, CSS, Github and Grunt to automate tasks.",
				"part3": "Used Bootstrap framework to create portfolio website."},
	"date": "July 2015"}
	]
};

var online = {"courses": [
	{"name": "Intro to HTML and CSS",
	 "date": "July 2015",
	 "school": "https://www.udacity.com"},
	{"name": "Responsive Imaging and Web Design",
	 "date": "July 2015",
	 "school": "https://www.udacity.com"},
	{"name": "Basic Javascript",
	 "date": "August 2015",
	 "school": "https://www.udacity.com"},
	{"name": "Object Oriented Javascript",
	 "date": "August 2015",
	 "school": "https://www.udacity.com"},
	{"name": "Python Track",
	 "date": "July 2015",
	 "school": "http://www.codecademy.com"},
	{"name": "Javascript Track",
	 "date": "July 2015",
	 "school": "http://www.codecademy.com"}
	 ]
};



var phone = HTMLmobile.replace("%data%", bio.contacts.phone);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var locate = HTMLlocation.replace("%data%",bio.contacts.location);
var github = HTMLgithub.replace("%data%",bio.github);

$("#topContacts").prepend(phone);
$("#topContacts").prepend(email);
$("#topContacts").append(locate);
$("#topContacts").append(github);

function onlinecourse() {
	var onlinelen = online.courses.length;
	for (var i = 0; i < onlinelen; i++ ) {
		$('#online-course').append(HTMLonlineStart);
		var onlinename = HTMLonlineTitle.replace("%data%",online.courses[i].name);
		$(".online-entry:last").append(onlinename);
		var onlinedate = HTMLonlineDates.replace("%data%",online.courses[i].date);
		$(".online-entry:last").append(onlinedate);
		var onlineschool = HTMLonlineSchool.replace("%data%",online.courses[i].school).replace("%data%",online.courses[i].school);
		$(".online-entry:last").append(onlineschool);
	}
}

function displaywork () {
	var worklen = work.company.length;
	for (var i = 0; i < worklen; i++) {
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%",work.company[i].name);
		var title = HTMLworkTitle.replace("%data%",work.company[i].role);
		emp_title = employer + title;
		$(".work-entry:last").append(emp_title);
		var date = HTMLworkDates.replace("%data%",work.company[i].year);
		var locat = HTMLworkLocation.replace("%data%",work.company[i].city);
		$(".work-entry:last").append(locat);
		$(".work-entry:last").append(date);
		for (var j in work.company[i].descript) {
			var desc = HTMLworkbullet.replace("%data%",work.company[i].descript[j]);
			$(".work-entry:last").append(desc);
		}
		$(".work-entry:last").append("<br>");
	}
}


project.display = function() {
	var projectlen = this.pro.length;
	for (var i = 0; i < projectlen; i++) {
		$("#projects").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%",this.pro[i].name);
		$(".project-entry:last").append(title);
		var date = HTMLprojectDates.replace("%data%",this.pro[i].date);
		$(".project-entry:last").append(date);
		for (var j in this.pro[i].descript) {
			var desc = HTMLprojectbullet.replace("%data%",this.pro[i].descript[j]);
			$(".project-entry:last").append(desc);
		}
		$(".project-entry:last").append("<br>");
	}
};


function educations() {
	var educationlen = education.school.length;
	for (var i = 0; i < educationlen; i++) {
		$("#education").append(HTMLschoolStart);
		var title = HTMLschoolName.replace("%data%",education.school[i].name) + HTMLschoolDegree.replace("%data%",education.school[i].major);
		$(".education-entry:last").append(title);
		var desc = HTMLschoolDates.replace("%data%",education.school[i].graduation);
		$(".education-entry:last").append(desc);
	}
}

onlinecourse();

project.display();

displaywork();

educations();

function inName() {
	var names = bio.name.split(" ");
	names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	names = names.join(" ");
	return names;
}

$("#mapDiv").append(googleMap);

var menu = document.querySelector('#menu');
var main = document.querySelector('#main');
var drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(e) {
		drawer.classList.toggle('open');
		e.stopPropagation();
		document.body.style.overflow = "hidden";
		console.log(e);
});


$("#drawer ul li a").click(function() {
	drawer.classList.remove('open');
});

main.addEventListener('click', function() {
	drawer.classList.remove('open');
	document.body.style.overflow = "visible";
});

if ($(window).width() < 750) {
   $(".hr1").remove();
}


