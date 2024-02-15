
function Error({children}) {
  return (
    <div className='bg-red-800 text-white p-3 text-center font-bold mb-3 rounded-lg shadow-md'>
        <p>{children}</p>
    </div>
  )
}

export default Error
