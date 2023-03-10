import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from "./components";
import { Calendar, Customers, Employees, Home, Kanban } from "./pages";

import { useStateContext } from './contexts/ContextProvider';

import "./App.css";

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4 style={{ zIndex: '1000' }}">
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button"
                                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                onClick={() => setThemeSettings(true)}
                                style={{ background: currentColor, borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>

                        <div>
                            {themeSettings && <ThemeSettings />}
                            <Routes>
                                {/* Dashboard */}
                                <Route path="/home" element={<Home />} />
                                {/* Pages */}
                                <Route path="/employees" element={<Employees />} />
                                <Route path="/customers" element={<Customers />} />
                                {/* Apps */}
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/kanban" element={<Kanban />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App