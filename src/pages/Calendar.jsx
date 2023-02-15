import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/mock_data';
import { Header } from '../components';

const Calendar = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="App" title="Calender" />
            <ScheduleComponent height="650px">
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    )
}

export default Calendar