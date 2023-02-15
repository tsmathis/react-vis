import React from 'react';

import { Header } from '../components';

const Home = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Dashboard" title="Org Overview" />
            <div>
                <p className="text-lg text-slate-900 dark:text-white">
                    Welcome to the React Landing. This dashboard application is a work in progress, but feel free to check out the Calendar and play around with the Settings!
                </p>
                <p className="italic mt-10 text-gray-400 dark:text-white">
                    This application was built using React.js, Tailwind CSS, and UI components from the Syncfusion React Library.
                </p>
            </div>
        </div>
    )
}

export default Home