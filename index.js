let createElement = (el) => document.createElement(el); // ! Do not change / rename or redeclare this.

// TODO: Extra improvements
// ? - Find better naming for all the sections elements
// ? Example: If you take the section education and you try to create an div element from that
// ? you may need to name the first div something like educationResumeData, educationYear, and so one.
// ? - Try to understend the differences between append and appendChild and where we need to use.

// Example 1

let getResumInfoElementFromEducation = document.getElementById("educationData");

// This is the first element for education period
let divResumeData = createElement("div");
divResumeData.classList.add("resume-data");

let divYear = createElement("div"); // This is creating an html div element
divYear.classList.add("year"); // This is adding a class to the initial element created
divYear.innerHTML = "2009-2013"; // This is added the text we want to show in the element

let divContent = createElement("div");
divContent.classList.add("content");

let firstParagraph = createElement("p");
firstParagraph.innerHTML = "Liceul Haci Dudu Mehmet Gebizli";

let secondParagraph = createElement("p");
secondParagraph.innerHTML = "Student";

divContent.append(firstParagraph); //  This is adding the element in other one the divContent is the parent element and firstParagraph is child element
divContent.append(secondParagraph);

divResumeData.append(divYear);
divResumeData.append(divContent);

getResumInfoElementFromEducation.append(divResumeData);

// Second education experience
let divResumeData1 = createElement("div");
divResumeData1.classList.add("resume-data");

let divYear1 = createElement("div");
divYear1.classList.add("year");
divYear1.innerHTML = "2015-2017";

let divContent1 = createElement("div");
divContent1.classList.add("content");

let firstParagraph1 = createElement("p");
firstParagraph1.innerHTML = "Facultatea Vasile Goldis Din Arad";

let secondParagraph1 = createElement("p");
secondParagraph1.innerHTML = "Student";

divContent1.append(firstParagraph1);
divContent1.append(secondParagraph1);

divResumeData1.append(divYear1);
divResumeData1.append(divContent1);

getResumInfoElementFromEducation.append(divResumeData1); //

// Last education experience

let divResumeData2 = createElement("div");
divResumeData2.classList.add("resume-data");

let divYear2 = createElement("div");
divYear2.classList.add("year");
divYear2.innerHTML = "2019-2020";

let divContent2 = createElement("div");
divContent2.classList.add("content");

let firstParagraph2 = createElement("p");
firstParagraph2.innerHTML = "Link Academy";

let secondParagraph2 = createElement("p");
secondParagraph2.innerHTML = "Frontend Javascript Development";

divContent2.append(firstParagraph2);
divContent2.append(secondParagraph2);

divResumeData2.append(divYear2);
divResumeData2.append(divContent2);

getResumInfoElementFromEducation.append(divResumeData2);

// First element of Experience section

let getResumInfoElementFromExperience =
  document.getElementById("experienceData");

let divResumeData3 = createElement("div");
divResumeData3.classList.add("resume-data");

let divYear3 = createElement("div");
divYear3.classList.add("year");
divYear3.innerHTML = "2019-2020";

let divContent3 = createElement("div");
divContent3.classList.add("content");

let firstParagraph3 = createElement("p");
firstParagraph3.innerHTML = "Frontend Developer";

let secondParagraph3 = createElement("p");
secondParagraph3.innerHTML = "Designing Web Pages";

let thirdParagraph3 = createElement("p");
thirdParagraph3.innerHTML = "Making apps";

let fourthParagraph3 = createElement("p");
fourthParagraph3.innerHTML = "Designing projects";

divContent3.append(firstParagraph3);
divContent3.append(secondParagraph3);
divContent3.append(thirdParagraph3);
divContent3.append(fourthParagraph3);

divResumeData3.append(divYear3);
divResumeData3.append(divContent3);

getResumInfoElementFromExperience.append(divResumeData3);
