import React, { useEffect, useRef } from 'react';
import { Draggable } from '@fullcalendar/interaction';

function DraggableItem ({
  event = {
    title: 'my event', duration: '48:00',
  },
  children,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    new Draggable(ref.current, { eventData: event });
  }, []);
  return (<div ref={ref} {...rest}>{children}</div>);
}

export default DraggableItem;
