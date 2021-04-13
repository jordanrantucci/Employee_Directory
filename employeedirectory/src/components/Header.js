import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, directions }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <h6>{directions}</h6>
        </header>
    )
}

Header.defaultProps = {
    title: "Employee Directory",
    directions: "Click A-Z to Sort First Names Alphabetically. You Can also use the open box to search a first or last name."
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
