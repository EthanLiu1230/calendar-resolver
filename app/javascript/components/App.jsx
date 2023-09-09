import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

function DraggableEvent ({
  id,
  event = {
    title: 'my event', duration: '48:00',
  },
  children,
}) {
  const eventId = `event-${id}`;
  useEffect(() => {
    new Draggable(document.querySelector(`#${eventId}`), { eventData: event });
  }, []);
  return (<div id={eventId} className="draggable-el">{children}</div>);
}

function ExternalEventBox ({ children }) {
  return (
    <div className="bg-blue-500 text-white rounded">{children}</div>
  );
}

function App () {

  return (
    <main className={'container'}>
      <DraggableEvent id={'fifa'} event={{
        title: 'FIFA',
        duration: '72:00',
      }}><ExternalEventBox>FIFA</ExternalEventBox></DraggableEvent>

      <DraggableEvent id={'world_cup'}
                      event={{ title: 'World Cup', duration: '49:00' }}><ExternalEventBox>World
        Cup</ExternalEventBox></DraggableEvent>

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
