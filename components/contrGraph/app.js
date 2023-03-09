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
