import React from 'react'

const CreateTask = () => {
  return (
    <d>
        <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Task Title */}
          <div>
            <h3 className="font-semibold mb-2">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="font-semibold mb-2">Date</h3>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="font-semibold mb-2">Assign To</h3>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <input
              type="text"
              placeholder="UI/UX, Development"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2">Description</h3>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              placeholder="Make a UI"
              className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      
    </d>
  )
}

export default CreateTask
