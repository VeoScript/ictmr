import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function CreateReportAlbum() {

  const { register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm()

  const router = useRouter()

  function refreshData() {
    router.replace(router.asPath)
  }

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    reset()
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return(
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-5 py-2 bg-drip-cerulean rounded-lg text-sm transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          Create New Album
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 bg-drip-night bg-opacity-50 overflow-y-auto"
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
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-drip-night shadow-xl rounded-2xl">
                <div className="flex flex-row items-center justify-center w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-drip-heaven"
                  >
                    Create Report Album
                  </Dialog.Title>
                </div>
                <form className="flex flex-col w-full mt-5 space-y-2">
                  <div className="flex flex-col w-full space-y-1.5">
                    <div className="form-control">
                      <div className="searchbox flex flex-row items-center w-full max-w-sm mt-5 bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther rounded-full focus:outline-none"
                          type="text"
                          name="title"
                          {...register("title", { required: true })}
                          placeholder="Create Name"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </div>
                      { errors.title && <span className="font-medium text-xs tracking-wide text-yellow-600 mx-1">Album title is required.</span> }
                    </div>
                    <div className="form-control">
                      <button
                        type="button"
                        className="w-full max-w-[5rem] bg-cerulean text-drip-heaven text-sm text-center py-3 rounded-lg hover:bg-opacity-90 focus:outline-none"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}