function calculateMonthDifferenceWithDays() {
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  const resultElement = document.getElementById('result');

  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);

  if (isNaN(startDate) || isNaN(endDate)) {
    resultElement.textContent =
      'Invalid date format. Please use a valid date format.';
    return;
  }

  const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
  const monthsDifference = endDate.getMonth() - startDate.getMonth();
  const daysDifference = endDate.getDate() - startDate.getDate();

  const totalMonths = yearsDifference * 12 + monthsDifference;

  resultElement.textContent = `The range between ${startDate.toDateString()} and ${endDate.toDateString()} is ${totalMonths} months and ${daysDifference} days.`;
}
