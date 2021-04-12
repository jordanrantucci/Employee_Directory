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
    directions: "Click on the carrots to filter by heading or use the search box to narrow your results."
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
