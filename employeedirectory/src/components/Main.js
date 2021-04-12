import React, { useState, useEffect } from 'react';

const Main = ({ users }) => {
    const [sortedUsers, updateUsers] = useState([]);

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
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Main
