import React, { Component } from 'react';
import './NavPanel.scss';

class NavPanel extends Component {

    state = {
        searchBook: ''
    }

    buttons = [
        { name: 'all', label: 'All Books' },
        { name: 'recent', label: 'Most Recent' },
        { name: 'popular', label: 'Most Popular' },
        { name: 'free', label: 'Free Books' },
    ];

    handleOnChange = (event) => {
        const searchBook = event.target.value;
        this.setState({
            searchBook
        });
        this.props.onSearchChange(searchBook);
    }

    render() {
        const { getFilteredBook, onFilterChange } = this.props;
        const { searchBook } = this.state;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = getFilteredBook === name;
            const className = isActive ? 'active' : '';
            return (
                <button
                    key={name}
                    className={`nav__buttons--item ${className}`}
                    onClick={ () => onFilterChange(name) }
                >
                    {label}
                </button>
            )
        });
        return (
            <div className="nav-panel">
                <div className="nav">
                    <div className="nav__buttons">
                        {buttons}
                    </div>
                </div>
                <input
                    className="nav-panel__search"
                    placeholder="Enter Keywords"
                    value={searchBook}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}
 
export default NavPanel;