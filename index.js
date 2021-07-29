function Student(name, age, grade, dept) {
  this.name = name;
  this.age = age;
  this.grade = grade;
  this.dept = dept;
}

window.addEventListener("load", function () {
  name_txt = document.getElementsByName("nameTxt")[0];
  age_txt = document.getElementsByName("ageTxt")[0];
  grade_txt = document.getElementsByName("gradeTxt")[0];
  dept = document.getElementsByName("deptVal")[0];
  listOfEmp = [];
  filteredList = [];

  this.document.querySelector("#btn").addEventListener("click", function () {
    nameError = document.getElementById("nameError");
    if (name_txt.value == "") {
      nameError.style.visibility = "visible";
      return;
    } else {
      nameError.style.visibility = "hidden";
    }

    ageError = document.getElementById("ageError");
    if (age_txt.value < 25 || age_txt.value > 60) {
      ageError.style.visibility = "visible";
      return;
    } else {
      ageError.style.visibility = "hidden";
    }

    salaryError = document.getElementById("salaryError");
    if (grade_txt.value == "") {
      salaryError.style.visibility = "visible";
      return;
    } else {
      salaryError.style.visibility = "hidden";
    }

    std = new Student(
      name_txt.value,
      age_txt.value,
      grade_txt.value,
      dept.value
    );
    tr = document.createElement("tr");
    deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    for (i in std) {
      td = document.createElement("td");
      td.innerText = std[i];
      document.getElementById("stdTable").appendChild(tr).appendChild(td);
      tr.appendChild(td).appendChild(deleteBtn);
    }
    listOfEmp.push(std);
    filteredList = listOfEmp;

    deleteBtn.addEventListener("click", function () {
      document
        .getElementById("stdTable")
        .removeChild(this.parentElement.parentElement);
      listOfEmp.pop(std);
      console.log(listOfEmp);
    }); // end of delete
  });

  filter = document.querySelector(".filter");
  filter.addEventListener("change", function (event) {
    result = event.target.value;
    console.log(result);
    myFilter(result);
  });

  sort = document.querySelector(".sort");
  sort.addEventListener("change", function (event) {
    result = event.target.value;
    console.log(result);
    mySort(result);
  });
}); // end of load

function myFilter(number) {
  // -1 less than 35, 1 more then or equal 35
  filteredList = listOfEmp.filter(function (emp) {
    if (number == -1) {
      return emp.age < 35;
    } else {
      return emp.age >= 35;
    }
  });

  addItemsToTRFormFilteredList(filteredList);
}

function mySort(by) {
  filteredList = filteredList.sort(function (a, b) {
    if (a instanceof Student && b instanceof Student) {
      if ((by = "acs")) {
        return a.age_txt - b.age_txt;
      } else {
        return b.age_txt - a.age_txt;
      }
    }
  });

  addItemsToTRFormFilteredList(filteredList);
}

function addItemsToTRFormFilteredList(filteredList) {
  var oldStdTable = document.getElementById("stdTable");
  oldStdTable.innerHTML = "";

  for (i in filteredList) {
    var employee = filteredList[i];
    tr = document.createElement("tr");
    deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    for (j in employee) {
      td = document.createElement("td");
      td.innerText = employee[j];
      document.getElementById("stdTable").appendChild(tr).appendChild(td);
      tr.appendChild(td).appendChild(deleteBtn);
    }
  }

  deleteBtn.addEventListener("click", function () {
    document
      .getElementById("stdTable")
      .removeChild(this.parentElement.parentElement);
    listOfEmp.pop(std);
    console.log(listOfEmp);
  });
}
