import React, { useState, useEffect } from 'react';

const Main = ({ users }) => {
    const [sortedUsers, updateSortedUsers] = useState([]);

    useEffect(() => updateSortedUsers(users), [users]);

    function sortNameDescending() {
        console.log("clicked")
        const sorted = users.sort(function(name1, name2){
            if(name1.name.first < name2.name.first){
                return -1
            }
            if(name1.name.first > name2.name.first){
                return 1
            }
            return 0
        })
        updateSortedUsers([...sorted])
    }


    return (
       
            <table className = "allTable">
                <thead>
                    <tr className="tableRow">
                        <th scope='col'>Picture</th>
                        <th scope='col' onClick={() => {
                            const usersCopy = [...users];
                            const updateSort = usersCopy.sort((a, b) => {
                                const nameA = a.name.first;
                                const nameB = b.name.first;

                                if (nameA < nameB) {
                                    return -1;
                                }
                                if (nameA > nameB) {
                                    return 1;
                                }
                                return 0;
                            });

                            updateSortedUsers(updateSort)}  
                        }>First Name <button className="btn btn-outline-dark" onClick={sortNameDescending}>A-Z</button></th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>City</th>
                        <th scope='col'>State</th>
                        <th scope='col'>Phone Number</th>
                        <th scope='col'>Date of Birth</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {sortedUsers.map(
                        ({
                            picture: { large },
                            name: { first, last },
                            email,
                            location: { city, state },
                            phone,
                            dob,
                        }) =>
                        <tr>
                            <td><img src={large} /></td>
                            <th>{first}</th>
                            <td>{last}</td>
                            <td>{email}</td>
                            <td>{city}</td>
                            <td>{state}</td>
                            <td>{phone}</td>
                            <td>{dob.date}</td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
    )
}

export default Main
