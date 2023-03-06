// // JavaScript
// function generateRandomContributionGraph(year, totalContributions) {
//     const daysInYear = 365;
//     const contributionsPerDay = Math.floor(totalContributions / daysInYear);
//     const remainingContributions = totalContributions % daysInYear;
//     const container = document.querySelector(".contribution-graph");
  
//     for (let day = 1; day <= daysInYear; day++) {
//       const element = document.createElement("div");
//       element.className = "contribution-graph-day";
//       const dayOfWeek = new Date(`${year}-01-${day}`).getDay();
//       element.classList.add(`contribution-graph-day-${dayOfWeek}`);
  
//       // Determine the number of contributions for this day
//       let contributions = contributionsPerDay;
//       if (day <= remainingContributions) {
//         contributions++;
//       }
  
//       // Fill the element with contributions
//       for (let i = 0; i < contributions; i++) {
//         const contribution = document.createElement("span");
//         contribution.className = "contribution-graph-contribution";
//         element.appendChild(contribution);
//       }
  
//       container.appendChild(element);
//     }
//   }
  
//   const year = new Date().getFullYear();
//   const totalContributions = Math.floor(Math.random() * 500);
  
//   generateRandomContributionGraph(2022, 100);
  


// function createContributionGraph(data) {
//     const daysInWeek = 7;
//     const container = document.querySelector(".contribution-graph");
//     const svgContainer = container.querySelector(".contribution-graph-svg");
//     const dateLabel = container.querySelector(".contribution-graph-date");
//     let activeDays = 0;
//     let maxContributions = 0;
  
//     // Create SVG element
//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("width", "725");
//     svg.setAttribute("height", "130");
//     svg.setAttribute("class", "js-calendar-graph-svg");
  
//     // Create background grid
//     const grid = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     grid.setAttribute("transform", "translate(16, 20)");
//     for (let i = 0; i < 7; i++) {
//       for (let j = 0; j < 53; j++) {
//         const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//         rect.setAttribute("class", "day");
//         rect.setAttribute("width", "10");
//         rect.setAttribute("height", "10");
//         rect.setAttribute("x", i * 11);
//         rect.setAttribute("y", j * 11);
//         rect.setAttribute("rx", "2");
//         rect.setAttribute("ry", "2");
//         grid.appendChild(rect);
//       }
//     }
//     svg.appendChild(grid);
  
//     // Fill in contributions
//     const contributions = document.createElementNS("http://www.w3.org/2000/svg", "g");
//     contributions.setAttribute("transform", "translate(16, 20)");
//     for (let i = 0; i < data.length; i++) {
//       const date = new Date(data[i].date);
//       const count = data[i].count;
//       const dayOfWeek = date.getDay();
//       const weekOfYear = getWeekNumber(date) - 1;
//       const rect = grid.childNodes[weekOfYear * daysInWeek + dayOfWeek];
//       rect.setAttribute("class", `day filled contribution-graph-day-${dayOfWeek}`);
//       if (count > 0) {
//         activeDays++;
//         if (count > maxContributions) {
//           maxContributions = count;
//         }
//         const contribution = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//         contribution.setAttribute("class", "contribution");
//         contribution.setAttribute("width", "10");
//         contribution.setAttribute("height", "10");
//         contribution.setAttribute("x", i * 11);
//         contribution.setAttribute("y", weekOfYear * 11);
//         contribution.setAttribute("rx", "2");
//         contribution.setAttribute("ry", "2");
//         // contribution.setAttribute("")
  


// // JavaScript
// function createContributionGraph(data) {
//     const daysInWeek = 7;
//     const container = document.querySelector(".contribution-graph-days");
  
//     for (let i = 0; i < data.length; i++) {
//       const element = document.createElement("div");
//       element.className = "contribution-graph-day";
//       const dayOfWeek = new Date(data[i]).getDay();
//       element.classList.add(`contribution-graph-day-${dayOfWeek}`);
  
//       // Set the data-count attribute to random number between 0 and 4
     
//     }}  
//     createContributionGraph(4)



// const contributionGraph = document.querySelector('.contribution-graph');
// const daysContainer = contributionGraph.querySelector('.contribution-graph-days');
// const weeksContainer = contributionGraph.querySelector('.contribution-graph-weeks');
// const data = generateRandomData();

// // Set up labels for months
// const months = [
//   'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
// ];
// const labelsContainer = contributionGraph.querySelector('.contribution-graph-labels');
// for (const month of months) {
//   const label = document.createElement('div');
//   label.classList.add('contribution-graph-label');
//   label.textContent = month;
//   labelsContainer.appendChild(label);
// }

// // Set up labels for days
// const daysOfWeek = ['Mon', 'Wed', 'Fri'];
// for (const dayOfWeek of daysOfWeek) {
//   const axis = document.createElement('div');
//   axis.classList.add('contribution-graph-axis');
//   axis.textContent = dayOfWeek;
//   daysContainer.appendChild(axis);
// }
// for (let i = 0; i < 4; i++) {
//   const day = document.createElement('div');
//   day.classList.add('contribution-graph-day');
//   daysContainer.appendChild(day);
// }

// // Set up contributions for weeks
// let weekIndex = 0;
// let dayIndex = 0;
// for (const weekData of data) {
//   const week = document.createElement('div');
//   week.classList.add('contribution-graph-week');
//   for (const dayData of weekData) {
//     const day = document.createElement('div');
//     day.classList.add('contribution-graph-day');
//     day.dataset.level = dayData;
//     week.appendChild(day);
//     dayIndex++;
//   }
//   weeksContainer.appendChild(week);
//   weekIndex++;
// }

// // Generate random data for the graph
// function generateRandomData() {
//   const data = [];
//   for (let i = 0; i < 52; i++) {
//     const weekData = [];
//     for (let j = 0; j < 7; j++) {
//       weekData.push(getRandomLevel());
//     }
//     data.push(weekData);
//   }
//   return data;
// }

// // Helper function to get a random contribution level
// function getRandomLevel() {
//   const levels = [1, 2, 3, 4];
//   const weights = [0.2, 0.4, 0.3, 0.1];
//   const weightedIndex = getRandomWeightedIndex(weights);
//   return levels[weightedIndex];
// }

// // Helper function to get a random index based on weighted probabilities
// function getRandomWeightedIndex(weights) {
//   const sum = weights.reduce((total, weight) => total + weight, 0);
//   let random = Math.random() * sum;
//   for (let i = 0; i < weights.length; i++) {
//     random -= weights[i];
//     if (random < 0) {
//       return i;
//     }
//   }
//   return weights.length - 1;
// }




// Get container element
const container = document.querySelector('.contributions');

// Define colors for contribution squares
const colors = ['#ebedf0', '#9be9a8', '#3fc463', '#30a14e', '#216e39'];

// Generate random data for contribution graph
const data = [];
for (let i = 0; i < 365; i++) {
  const count = Math.floor(Math.random() * 5);
  data.push(count);
}

// Loop through data and create contribution squares
data.forEach((count) => {
  const contribution = document.createElement('div');
  contribution.classList.add('contribution');
  if (count > 0) {
    contribution.classList.add(`color-${count}`);
  }
  container.appendChild(contribution);
});

// Get all contribution squares
const contributions = document.querySelectorAll('.contribution');

// Set data attribute on each contribution square
contributions.forEach((contribution, index) => {
  const date = new Date();
  date.setDate(date.getDate() - (364 - index));
  contribution.setAttribute('data-date', date.toISOString().slice(0, 10));
});

// Get day labels container element
const dayLabelsContainer = document.querySelector('.days');

// Create day labels
const dayLabels = ['M', 'W', 'F'];
for (let i = 0; i < dayLabels.length; i++) {
  const dayLabel = document.createElement('div');
  dayLabel.classList.add('day-label');
  dayLabel.innerText = dayLabels[i];
  dayLabelsContainer.appendChild(dayLabel);
}

// Get all day labels
const dayLabelsElements = document.querySelectorAll('.day-label');

// Set data attribute on each day label
dayLabelsElements.forEach((dayLabel, index) => {
  const date = new Date();
  date.setDate(date.getDate() - (364 - (index * 2)));
  dayLabel.setAttribute('data-date', date.toISOString().slice(0, 10));
});

// Get month labels container element
const monthLabelsContainer = document.querySelector('.months');

// Create month labels
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
for (let i = 0; i < monthLabels.length; i++) {
  const monthLabel = document.createElement('div');
  monthLabel.classList.add('month-label');
  monthLabel.innerText = monthLabels[i];
  monthLabelsContainer.appendChild(monthLabel);
}

// Get all month labels
const monthLabelsElements = document.querySelectorAll('.month-label');

// Set data attribute on each month label
monthLabelsElements.forEach((monthLabel, index) => {
  const date = new Date();
  date.setMonth(index);
  monthLabel.setAttribute('data-date', date.toISOString().slice(0, 7));
});
