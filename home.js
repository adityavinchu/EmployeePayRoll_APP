let employeePayRollList;

window.addEventListener('DOMContentLoaded',(event)=>{
    employeePayRollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=employeePayRollList.length;
 createInnerHtml();
 localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}
const createInnerHtml= () =>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(employeePayRollList.length==0)return;
    
    let innerHtml = `${headerHtml}`;
    for(const employeePayrollData of employeePayRollList)
    {
        innerHtml=`${innerHtml}
    <tr>
    </tr>
    <tr>
        <td><img class="profile" alt="" src="${employeePayrollData._profilepic}"></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getdept(employeePayrollData._department)}</td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
           <img name="${employeePayrollData._id}" onclick="remove(this)"alt="delete" src="C:/Users/Aditya/source/EmployeePayRoll_APP/assets/delete-black-18dp.svg">
           <img name="${employeePayrollData._id}" alt="edit" onlclick="update(this)" src="C:/Users/Aditya/source/EmployeePayRoll_APP/assets/assets/create-black-18dp.svg">
        </td>
    </tr>
    `
    ;
    }
    document.querySelector('#display').innerHTML=innerHtml;
}

const EmployeePayrollJson=()=>{
    let employeePayRolllist=[
        {
            _name:'Aman Gupta',
            _gender:'Male',
            _department:["Finance","Marketing"],
            _salary:'850000',
            _startDate:'11 Jan 2018',
            _id:new Date().getTime(),
            _note:'',
            _profilepic:'../EmployeePayRoll_APP/assets/profile-images/Ellipse -3.png'
        },
    ]
    return employeePayRolllist;
}

const getdept=(deplist)=>{
    let depthtml='';
    for(const dept in deplist){
        console.log(deplist[dept]);
        depthtml=`${depthtml}<div class='dept-label'>${deplist[dept]}</div>`
    }
    return depthtml;


}