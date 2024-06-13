'use client'
import { useState, Fragment } from 'react'

import { DEFAULT_ITEMS } from '@/app/data'
import EventItem from './components/event-item'
import Overlay from './components/overlay'
import EventForm from './components/form'
import '../../history/history.css'

const History = (props) => {
  const [events, setEvents] = useState(DEFAULT_ITEMS)
  const [showForm, setShowForm] = useState(false)
  const greetingName = getFirstName(props.params.id)

  function getFirstName(paramId) {
    const converted = paramId.split('-')
    const firstName = converted[0]
    return firstName.charAt(0).toUpperCase() + firstName.slice(1)
  }

  return (
    <div className='mx-auto p-0 w-[75vw] max-w-[1400px]'>
      <h1>Your History with {greetingName}</h1>

      <div className='canvas-container'>
        {events.map((event, index) => {
          const isLastItem = index === events.length - 1
          const isFirstItem = index === 0

          return (
            <Fragment key={event.id}>
              <div
                className={`event-item-container ${
                  isFirstItem ? 'first' : ''
                } ${isLastItem ? 'last' : ''} relative`}
              >
                <EventItem
                  date={event.timestamp}
                  title={event.title}
                  description={event.description}
                />
                {isLastItem && (
                  <button
                    onClick={() => setShowForm(true)}
                    className='flex pt-1 font-bold border-2 border-orange-200 justify-center items-center rounded-full h-6 w-6 p-2 bg-orange-500 absolute top-[18%] left-[85%]'
                  >
                    +
                  </button>
                )}
              </div>
            </Fragment>
          )
        })}
      </div>
      <Overlay isOpen={showForm} onClose={() => setShowForm(false)}>
        <EventForm
          onClose={() => setShowForm(false)}
          setEvent={(newEvent) => setEvents([...events, newEvent])}
        />
      </Overlay>
    </div>
  )
}

export default History
