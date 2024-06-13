import Link from "next/link";

const id = 'john-sciutto123'

export default function Home() {
  return (
    <>
      <h1 className='mb-5'>Hearth Employee</h1>
      <div className='flex justify-around items-center gap-5 w-4/5 p-6 border-t border-b border-gray-400'>
        <div className='table-item'>John Sciutto</div>
        <div className='table-item'>Hearth AI</div>
        <div className='table-item'>San Francisco, CA</div>
        <div className='table-item'>jsciutto123@gmail.com</div>
        <Link
          href={`history/${id}`}
          className='bg-orange-100 rounded-lg p-3 border border-gray-200 transition ease-in duration-200 hover:border-gray-400'
        >
          History
        </Link>
      </div>
    </>
  )
}
