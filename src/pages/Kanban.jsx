import React from 'react'

import { Header } from '../components';

const Kanban = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="App" title="Team Projects" />
            <div className="italic dark:text-white">
                TO-DO
            </div>
        </div>
    )
}

export default Kanban