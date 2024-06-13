const EventItem = ({title, date, description}) => {
  return (
    <div className='relative bg-white border border-gray-600 rounded-lg h-[220px] w-[200px] flex-shrink-0 p-2 m-9 overflow-hidden text-ellipsis'>
      <div className='event-item-content'>
        <h1 className='underline'>{title}</h1>
        <div className='text-gray-400'>
          {new Date(date).toLocaleDateString()}
        </div>
        <div className='event-body-container'>
          <p className='event-body'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default EventItem
