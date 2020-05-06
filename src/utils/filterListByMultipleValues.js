const filterListByMultipleValues = (list, filterObject) => {
  const filterKeys = Object.keys(filterObject);

  const filteredList = list.filter((item) => {
    return filterKeys.every((key) => {
      if (!filterObject[key].length) return true;

      if (Array.isArray(item[key])) {
        return item[key].some((value) => filterObject[key].includes(value));
      }

      return filterObject[key].includes(item[key]);
    });
  });

  return filteredList;
};

export default filterListByMultipleValues;
