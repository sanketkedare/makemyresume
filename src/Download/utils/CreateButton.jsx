import React from 'react'

const CreateButton = ({fun}) => {
  return (
    <div className="flex">
          <button
            className="bg-inherit text-black font-bold text-center w-[50%] mx-auto border-2 border-white p-2 rounded-lg my-2 bg-sky-500
                     hover:bg-yellow-700 hover:text-white"
            onClick={fun}
          >
            Create Resume
          </button>
        </div>
  )
}

export default CreateButton
