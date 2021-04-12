import React, { useState, useEffect } from 'react';

const Main = ({ users }) => {
    const [sortedUsers, updateSortedUsers] = useState([]);

    useEffect(() => updateSortedUsers(users), [users]);

    return (
        <div>
            <table className = "table">
                <thead>
                    <tr>
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
                        }>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>City</th>
                        <th scope='col'>State</th>
                        <th scope='col'>Phone Number</th>
                        <th scope='col'>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(
                        ({
                            picture: { thumbnail },
                            name: { first, last },
                            email,
                            location: { city, state },
                            phone,
                            dob,
                        }) =>
                        <tr key = { thumbnail }>
                            <td><img src={thumbnail} /></td>
                            <th>{first}</th>
                            <td>{last}</td>
                            <td>{city}</td>
                            <td>{state}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            <td>{dob.date}</td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Main
