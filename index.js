/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const makeFreelancer = () => {
  const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const randomJob = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const randomPrice =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return {
    name: randomName,
    occupation: randomJob,
    price: randomPrice,
  };
};

const freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(makeFreelancer());
}

const findAveragePrice = () => {
  let total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    total += freelancers[i].price;
  }
  return total / freelancers.length;
};

let averageRate = findAveragePrice();

function FreelancerComponent(freelancer) {
  const article = document.createElement("article");
  article.className = "freelancer-row";

  const name = document.createElement("p");
  name.className = "freelancer-name";
  name.textContent = freelancer.name;

  const occupation = document.createElement("p");
  occupation.className = "freelancer-occupation";
  occupation.textContent = freelancer.occupation;

  const rate = document.createElement("p");
  rate.className = "freelancer-rate";
  rate.textContent = `$${freelancer.price}/hr`;

  article.appendChild(name);
  article.appendChild(occupation);
  article.appendChild(rate);

  return article;
}

function FreelancersListComponent(freelancers) {
  const section = document.createElement("section");
  section.className = "freelancer-list";

  const header = document.createElement("header");
  header.className = "freelancer-header";

  const nameHeader = document.createElement("p");
  nameHeader.className = "freelancer-name header";
  nameHeader.textContent = "Name";

  const occupationHeader = document.createElement("p");
  occupationHeader.className = "freelancer-occupation header";
  occupationHeader.textContent = "Occupation";

  const rateHeader = document.createElement("p");
  rateHeader.className = "freelancer-rate header";
  rateHeader.textContent = "Rate";

  header.appendChild(nameHeader);
  header.appendChild(occupationHeader);
  header.appendChild(rateHeader);
  section.appendChild(header);

  freelancers.forEach((freelancer) => {
    section.appendChild(FreelancerComponent(freelancer));
  });
  return section;
}

function AverageRateComponent(rate) {
  const h2 = document.createElement("h2");
  h2.className = "average-rate";
  h2.textContent = `Average Rate: $${rate.toFixed(2)}/hr`;
  return h2;
}

function render() {
  const app =
    document.getElementById("app") ||
    document.body.appendChild(document.createElement("div"));
  app.id = "app";
  app.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  app.appendChild(heading);

  app.appendChild(AverageRateComponent(averageRate));
  app.appendChild(FreelancersListComponent(freelancers));
}

render();
