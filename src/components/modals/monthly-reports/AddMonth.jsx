import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import toast, { Toaster } from 'react-hot-toast'

export default function AddMonth({ year, months }) {

  const defaultValues = {
    albumYear: year.year,
    month: ''
  }

  const { register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm({ defaultValues })

  const router = useRouter()

  function refreshData() {
    router.replace(router.asPath)
  }

  async function onCreate(formData) {
    const monthExist = months.some(album => album.month === formData.month)

    if(monthExist) {
      toast.error('This month was already exist.')
      return
    }

    const response = await fetch('/api/reports/create-month', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    reset()
    refreshData()
    closeModal()
    return await response.json()
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
      <Toaster 
        position="top-center"
        reverseOrder={true}
      />
      <div className="flex flex-row justify-end w-full space-x-1.5">
        <button
          type="button"
          onClick={openModal}
          className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-36 bg-scarlet rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          <PlusIcon />
          <span>Add Month</span>
        </button>
        <button
          type="button"
          onClick={() => router.push('/monthly-reports')}
          className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-36 bg-light-panther rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          <BackIcon />
          <span>Return</span>
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
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-panther border-2 border-cerulean shadow-xl rounded-2xl">
                <div className="flex flex-row items-center justify-center w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-bright-white"
                  >
                    Add Month
                  </Dialog.Title>
                </div>
                <form onSubmit={handleSubmit(onCreate)} className="flex flex-col w-full mt-5 space-y-1.5">
                  <div className="flex flex-col w-full space-y-2">
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="month"
                          {...register("month", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Month"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      { errors.month && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Month is required.</span> }
                    </div>
                    <div className="form-control flex flex-row justify-end items-center w-full pt-0.5 space-x-1.5">
                      <button
                        type="submit"
                        className="w-full max-w-[5rem] bg-cerulean text-bright-white text-sm text-center py-3 rounded-full transition ease-in-out duration-300 transform hover:bg-opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={ isSubmitting }
                      >
                        Add
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

function PlusIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg>
  )
}

function BackIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  )
}