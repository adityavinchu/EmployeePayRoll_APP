class EmployeePayrollData {
  id; 
  salary; 
  gender;
  startDate;
  

  get name() { return this._name; }
  set name(name) { 
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if (nameRegex.test(name))
      this._name = name; 
    else throw 'Name is Incorrect!';
  }

  toString() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = !this.startDate ? "undefined" : 
                    this.startDate.toLocaleDateString("en-US", options);
    return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ", "+
           "gender=" + this.gender + ", startDate=" + empDate;
  }
}

