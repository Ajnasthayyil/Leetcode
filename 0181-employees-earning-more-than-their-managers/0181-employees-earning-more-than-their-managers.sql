# Write your MySQL query statement below
select e.name As Employee 
        from Employee e
        join Employee m 
        on e.managerId=m.Id
        where e.salary>m.salary;
