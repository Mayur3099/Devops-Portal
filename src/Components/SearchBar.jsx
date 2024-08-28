import React from 'react'

const SearchBar = () => {
  return (
    <>
      <div className=''>
        <form class="flex items-center w-full mx-auto">
          <div class="relative w-full">
            <input type="text"
              class="text-gray-900 text-sm block w-full py-2.5 px-2 border-b-2 focus:outline-none focus:border-gray-300 focus:text-gray-700"
              placeholder="Search kerbernetes services" required
            />
          </div>

          <button type="submit"
            class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-gray-500 hover:text-gray-800">
            <svg class="w-4 h-4 me-2 opacity-60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            Search
          </button>
        </form>

      </div>
    </>
  )
}

export default SearchBar