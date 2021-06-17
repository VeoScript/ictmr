import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Moment from 'react-moment'
import Scrollbar from 'react-smooth-scrollbar'

export default function DowntimeHistory({ history }) {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="w-full max-w-[10rem]">
        <button
          type="button"
          onClick={openModal}
          className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-full bg-panther rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          <HistoryIcon />
          <span>History</span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 bg-light-panther bg-opacity-80 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-[45rem] h-full max-h-[32rem] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-panther border-2 border-cerulean shadow-xl rounded-2xl">
                <div className="flex flex-row justify-between items-center w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-bright-white"
                  >
                    Downtime History
                  </Dialog.Title>
                  <button
                    type="button"
                    className="transition ease-in-out duration-300 transform hover:bg-opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={closeModal}
                  >
                    <CloseIcon />
                  </button>
                </div>
                <Scrollbar
                  damping={0.1}
                  thumbMinSize={20}
                >
                  <div className="flex flex-col w-full h-full overflow-y-auto py-3 mt-5 space-y-2">
                    <div className={`${!history.length == 0 ? 'hidden' : 'flex flex-row justify-center items-center w-full'}`}>
                      <span className="font-bold text-xl text-bright-white opacity-20">No downtime report found.</span>
                    </div>
                    {history.map((({ isp, description, create_at }, i) => {
                      return (
                        <div className="flex flex-row items-center justify-between w-full px-5 py-3 rounded-xl transition ease-in-out duration-300 hover:shadow-lg cursor-default bg-light-panther text-bright-white" key={i}>
                          <div className="flex flex-col items-start w-full max-w-sm">
                            <h1 className="font-normal text-base">{ isp }</h1>
                            <h1 className="font-light text-xs text-cool-gray">Internet Service Provider</h1>
                          </div>
                          <div className="flex flex-col items-start w-full max-w-lg mr-2">
                            <h1 className="font-normal text-sm">{ description }</h1>
                            <h1 className="font-light text-xs text-cool-gray">Details and Reasons</h1>
                          </div>
                          <div className="flex flex-col items-start w-full max-w-lg">
                            <h1 className="font-normal text-sm"><Moment date={ create_at } format='LLLL' /></h1>
                            <h1 className="font-light text-xs text-cool-gray">Date & Time</h1>
                          </div>
                        </div>
                      )
                    }))}
                  </div>
                </Scrollbar>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

function HistoryIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  )
}