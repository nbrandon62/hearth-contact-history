import '../../../history/history.css'

const Overlay = ({ isOpen, onClose, children }) => {
  return (
    <div className={`overlay-form ${isOpen ? 'open' : ''} shadow-lg mr-3`}>
      <nav className='mb-5'>
        <button
          onClick={onClose}
          className='flex justify-center items-center bg-orange-500 w-11 h-11 rounded-full'
        >
          X
        </button>
      </nav>
      {children}
    </div>
  )
}

export default Overlay
