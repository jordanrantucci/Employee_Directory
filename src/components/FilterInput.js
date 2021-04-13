import React, { useEffect, useState } from 'react';

const FilterInput = ({ users, updateUsers }) => {
    const [inputValue, updateInput] = useState("");
    
    //first name or last name search
    useEffect(() => {
        const filteredUsers = inputValue === "" ? users : users.filter(
            ({ name: { first, last } }) => first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 || 
            last.toLowerCase().indexOf(inputValue.toLowerCase()) >=0
        );

        updateUsers(filteredUsers);
    }, [inputValue, users])

    return (
        <div className="filterinput">
        <input value={inputValue} onChange={e => updateInput(e.target.value)} />
        </div>
    )
}

export default FilterInput;
