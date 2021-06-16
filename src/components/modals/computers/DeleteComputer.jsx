import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import toast, { Toaster } from 'react-hot-toast'

export default function EditComputer({ computer }) {

  const { handleSubmit, reset, formState: { isSubmitting }} = useForm()
  const router = useRouter()

  function refreshData() {
    router.replace('/computers')
  }

  async function onDelete() {
    const response = await fetch(`/api/computers/delete-computers/${computer.id}`, {
      method: 'DELETE',
    })
    toast.success('Deleted Successfully!', {
      style: {
        marginTop: '-40px',
        borderRadius: '10px',
        background: '#C0E7C1',
        color: '#235C24',
      }
    })
    refreshData()
    reset()
    closeModal()
    return await response.json()
  }

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Toaster 
        position="bottom-center"
        reverseOrder={true}
      />
      <div className="w-full max-w-[8rem]">
        <button
          type="button"
          onClick={openModal}
          className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-full bg-scarlet rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          <DeleteIcon />
          <span>Delete</span>
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
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-panther border-2 border-scarlet shadow-xl rounded-2xl">
                <div className="flex flex-row items-center justify-center w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-bright-white"
                  >
                    Delete Computer 
                  </Dialog.Title>
                </div>
                <form onSubmit={handleSubmit(onDelete)} className="flex flex-col w-full mt-5 space-y-1.5">
                  <div className="flex flex-col w-full space-y-2">
                    <div className="flex flex-col items-center w-full">
                      <span className="font-light text-xl text-bright-white">Are you sure you want to delete <strong className="font-bold text-scarlet">{ computer.computer_name }</strong>?</span>
                    </div>
                    <div className="form-control flex flex-row justify-center items-center w-full pt-2.5 space-x-1.5">
                      <button
                        type="submit"
                        className="w-full max-w-[5rem] bg-scarlet text-bright-white text-sm text-center py-3 rounded-full transition ease-in-out duration-300 transform hover:bg-opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={ isSubmitting }
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="w-full max-w-[5rem] bg-light-panther text-bright-white text-sm text-center py-3 rounded-full transition ease-in-out duration-300 transform hover:bg-opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={ isSubmitting }
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

function DeleteIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
    </svg>
  )
}