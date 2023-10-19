let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn"); // Corrected variable name
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTab = document.getElementById("save-btn");

const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (LeadsFromLocalStorage) {
  myLeads = LeadsFromLocalStorage;

  render(myLeads);
}

function render(leads) {

  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
    
    <li>
    
    <a href= '${leads[i]}' target='_blank'>${leads[i]}</a>
    
    
    </li>`;
  }

  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); // Push the value to the myLeads array
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});



saveTab.addEventListener("click",function(){

  chrome.tabs.query({active:true,currentWindow: true},function(tabs){


    let activeTab   = tab[0];
    let activeTabId = activeTab.id;
  });

  myLeads.push(tab[0].url); // Push the value to the myLeads array

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);


});