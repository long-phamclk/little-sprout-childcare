const SubmitKey = "SubmitList";
let submits = [];

function persistToLocationStorage() {
  localStorage.setItem(SubmitKey, JSON.stringify(submits));
}

function loadSubmitsFromLocalStorage() {
  submits = JSON.parse(localStorage.getItem(SubmitKey)) || [];
}

function addSubmit(submit) {
  loadSubmitsFromLocalStorage();
  var max =
    submits.length == 0 ? 0 : Math.max(...submits.map((x) => x.id || 0));
  submits.push({ id: max + 1, savedSubmit: submit, dateCreated: new Date() });
  persistToLocationStorage();
}

function getSubmits() {
  loadSubmitsFromLocalStorage();
  return submits;
}

const submitService = {
  addSubmit,
  getSubmits,
};

export default submitService;
