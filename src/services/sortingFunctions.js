const parseDate = dateString => {
  const parts = dateString.split('/');

  return new Date(parts[2], parts[1] - 1, parts[0]);
};

const sortingFunctions = {
  Salary: {
    true: (a, b) => a.salary - b.salary,
    false: (a, b) => b.salary - a.salary,
  },
  Experience: {
    true: (a, b) => a.years_of_experience - b.years_of_experience,
    false: (a, b) => b.years_of_experience - a.years_of_experience,
  },
  DOB: {
    true: (a, b) => parseDate(a.date_of_birth) - parseDate(b.date_of_birth),
    false: (a, b) => parseDate(b.date_of_birth) - parseDate(a.date_of_birth),
  },
};

export default sortingFunctions;
