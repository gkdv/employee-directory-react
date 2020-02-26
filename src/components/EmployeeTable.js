import React from 'react';
import employees from '../employees.json'

const Employees = employees.forEach(renderEmployees())

function renderEmployees(employee) {
    const item = `
    <tr>
        <th scope="row">1</th>
        <td>${employee.picture.medium}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.phone}</td>
    </tr>`

    return item;
}

function Table() {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {Employees}
                </tbody>
            </table>
        </>
    )

}

export default Table;