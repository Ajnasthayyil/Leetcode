select d.Name as Department , e.Name as Employee, e.salary from Employee e
join Department d 
on e.DepartmentId = d.Id
where e.salary = (select Max(salary) from Employee where departmentId =e.departmentId )