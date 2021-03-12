function sortData(data) {
  const updatedObj = {};
  const updatedData = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (updatedObj.hasOwnProperty(element.primaryCategory.categoryName)) {
      updatedObj[element.primaryCategory.categoryName].push(element);
    } else {
      updatedObj[element.primaryCategory.categoryName] = [element];
    }
  }

  const keys = Object.keys(updatedObj);
  for (let i = 0; i < keys.length; i++) {
    const title = keys[i];
    const item = {
      title,
      data: updatedObj[keys[i]],
    };

    updatedData.push(item);
  }

  return updatedData;
}

export default sortData;
