import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function CreateReportAlbum() {

  const defaultValues = {
    title: '',
    description: '',
    avatar: '',
    year: '',
    date: new Date(),
  }

  const { register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm({ defaultValues })

  const router = useRouter()

  function refreshData() {
    router.replace(router.asPath)
  }

  async function onCreate(formData) {
    console.log(formData)
    reset()
    closeModal()
    refreshData()
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
          className="flex flex-row items-center space-x-2 px-6 py-3 bg-scarlet rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          <PlusIcon />
          <span>Create Album</span>
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
                    New Report Album
                  </Dialog.Title>
                </div>
                <form onSubmit={handleSubmit(onCreate)} className="flex flex-col w-full mt-5 space-y-1.5">
                  <div className="flex flex-col w-full space-y-2">
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="title"
                          {...register("title", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Create Title"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                      </div>
                      { errors.title && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Album title is required.</span> }
                    </div>
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="description"
                          {...register("description", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Description"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                      </div>
                      { errors.description && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Description is required.</span> }
                    </div>
                    <div className="flex flex-row items-center w-full space-x-1.5">
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="avatar"
                            {...register("avatar", { required: true })}
                            disabled={ isSubmitting }
                            placeholder="Avatar URL"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="year"
                            {...register("year", { required: true })}
                            disabled={ isSubmitting }
                            placeholder="Year"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex w-full text-left -mt-1.5">
                        { errors.avatar && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Avatar URL is required.</span> }
                      </div>
                      <div className="flex w-full text-left -mt-1.5">
                        { errors.year && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Year is required.</span> }
                      </div>
                    </div>
                    <div className="form-control flex flex-row justify-end items-center w-full pt-0.5 space-x-1.5">
                      <button
                        type="submit"
                        className="w-full max-w-[5rem] bg-cerulean text-bright-white text-sm text-center py-3 rounded-full transition ease-in-out duration-300 transform hover:bg-opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={ isSubmitting }
                      >
                        Create
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