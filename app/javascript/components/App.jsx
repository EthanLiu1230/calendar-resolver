import React from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import DraggableItem from './DraggableItem';

function App () {
  return (
    <main className={'container'}>
      <DraggableItem className={'bg-blue-600 text-white rounded'} event={{
        title: 'FIFA',
        duration: '72:00',
      }}>FIFA</DraggableItem>

      <DraggableItem id={'world_cup'}
                     className={'bg-blue-600 text-white rounded'}
                     event={{ title: 'World Cup', duration: '49:00' }}>World
        Cup</DraggableItem>

      <div className="calendar-container">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek',
          }}
          initialView="dayGridMonth"
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          initialEvents={[
            { title: 'nice event', start: new Date(), resourceId: 'a' },
          ]}
        />
      </div>
    </main>
  );
}

export default App;
