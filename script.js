let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    const inputValue = inputEl.value
    myLeads.push(inputValue)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}