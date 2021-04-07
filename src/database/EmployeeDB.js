import Realm from 'realm';

const EmployeeSchema = {
  name: 'Employee',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    designation: 'string',
    salary: 'int',
  },
};

let realm = new Realm({ schema: [EmployeeSchema], schemaVersion: 1 });

let getAllEmployees = () => realm.objects('Employee');

let addEmployee = (id, name, designation, salary) => {
  realm.write(() => {
    const newEmployee = realm.create('Employee', {
      id: Number(id),
      name, designation,
      salary: Number(salary),
    });
  });
  return true;
};

let sortData = (sortOrder) => {
  const employeeData = realm.objects('Employee');
  if (sortOrder === 'asc') return employeeData.sorted('salary');
  else return employeeData.sorted('salary', true);
}

let searchEmployee = (value) => {
  const employeeData = realm.objects('Employee');
  return employeeData.filtered(`name LIKE[c] "*${value}*"`);
};

let deleteAllData = () => realm.write(() => realm.deleteAll());

let deleteByID = (id) => {
  const deleteData = realm.objects('Employee').filtered(`id = ${id}`);
  realm.write(() => realm.delete(deleteData));
};

export {
  getAllEmployees,
  addEmployee,
  sortData,
  searchEmployee,
  deleteAllData,
  deleteByID,
};
