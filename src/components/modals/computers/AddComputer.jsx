import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import toast, { Toaster } from 'react-hot-toast'

export default function AddComputer() {

  const defaultValues = {
    computer_name: '',
    computer_owner: '',
    computer_ip: '',
    computer_description: '',
    office_assign: '',
  }

  const { register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm({ defaultValues })

  const router = useRouter()

  function refreshData() {
    router.replace(router.asPath)
  }

  async function onCreate(formData) {
    // const monthExist = months.some(album => album.month === formData.month)

    // if(monthExist) {
    //   toast.error('This month is already exist.')
    //   return
    // }

    const response = await fetch('/api/computers/create-computers', {
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
          className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-full max-w-[12rem] bg-scarlet rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          <PlusIcon />
          <span>Add Computer</span>
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
                    New Computer
                  </Dialog.Title>
                </div>
                <form onSubmit={handleSubmit(onCreate)} className="flex flex-col w-full mt-5 space-y-1.5">
                  <div className="flex flex-col w-full space-y-2">
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="computer_name"
                          {...register("computer_name", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Computer Name"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      { errors.computer_name && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Computer Name is required.</span> }
                    </div>
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="computer_owner"
                          {...register("computer_owner", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Computer Owner"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      { errors.computer_owner && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Computer Owner is required.</span> }
                    </div>
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="computer_ip"
                          {...register("computer_ip", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="IP Address"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                        </svg>
                      </div>
                      { errors.computer_ip && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">IP Address is required.</span> }
                    </div>
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="computer_description"
                          {...register("computer_description", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Computer Description"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                      </div>
                      { errors.computer_description && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Computer Description is required.</span> }
                    </div>
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="office_assign"
                          {...register("office_assign", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Office Assign"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      { errors.office_assign && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Office Assign is required.</span> }
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