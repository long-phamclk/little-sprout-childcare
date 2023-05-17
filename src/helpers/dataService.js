// not in use
const DataKey = "DataList";
let data = [];

function persistToLocationStorage() {
  localStorage.setItem(DataKey, JSON.stringify(data));
}

function loadDataFromLocalStorage() {
  data = JSON.parse(localStorage.getItem(DataKey)) || [];
}

function addData(data) {
  loadDataFromLocalStorage();
  var max = data.length == 0 ? 0 : Math.max(...data.map((x) => x.id || 0));
  data.push({ id: max + 1, savedData: data, dateCreated: new Date() });
  persistToLocationStorage();
}

function getData() {
  loadDataFromLocalStorage();
  return data;
}

const dataService = {
  addData,
  getData,
};

export default dataService;
