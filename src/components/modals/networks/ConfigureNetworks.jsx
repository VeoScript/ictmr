import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import toast, { Toaster } from 'react-hot-toast'

export default function ConfigureNetworks({ networks }) {

  const defaultValues = {
    internet_main: networks[0].internet_main,
    internet_backup: networks[0].internet_backup,
    internet_office: networks[0].internet_office,
    internet_staffhouse: networks[0].internet_staffhouse,
    ip_main: networks[0].ip_main,
    ip_backup: networks[0].ip_backup,
    ip_office: networks[0].ip_office,
    ip_staffhouse: networks[0].ip_staffhouse,
  }

  const { register, handleSubmit, reset, formState: { isSubmitting }} = useForm({ defaultValues })
  const router = useRouter()

  function refreshData() {
    router.replace(router.asPath)
  }

  async function onUpdate(formData) {
    const response = await fetch(`/api/networks/configure-networks`, {
      method: 'PUT',
      body: JSON.stringify(formData)
    })
    toast.success('Configured Successfully!', {
      style: {
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
    reset(defaultValues)
  }

  function openModal() {
    setIsOpen(true)
    reset(defaultValues)
  }

  return (
    <>
      <Toaster 
        position="bottom-center"
        reverseOrder={true}
      />
      <div className="w-full max-w-[15rem]">
        <button
          type="button"
          onClick={openModal}
          className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-full bg-cerulean rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          <NetworkIcon />
          <span>Update Networks</span>
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
                    Update Networks
                  </Dialog.Title>
                </div>
                <form onSubmit={handleSubmit(onUpdate)} className="flex flex-col w-full mt-5 space-y-1.5">
                  <div className="flex flex-col w-full space-y-2">
                    <div className="flex flex-row items-center w-full space-x-2">
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="internet_main"
                            {...register("internet_main")}
                            disabled={ isSubmitting }
                            placeholder="Main Internet"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="ip_main"
                            {...register("ip_main")}
                            disabled={ isSubmitting }
                            placeholder="Main Internet IP"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center w-full space-x-2">
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="internet_backup"
                            {...register("internet_backup")}
                            disabled={ isSubmitting }
                            placeholder="Backup Internet"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="ip_backup"
                            {...register("ip_backup")}
                            disabled={ isSubmitting }
                            placeholder="Backup Internet IP"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center w-full space-x-2">
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="internet_office"
                            {...register("internet_office")}
                            disabled={ isSubmitting }
                            placeholder="Office Internet"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="ip_office"
                            {...register("ip_office")}
                            disabled={ isSubmitting }
                            placeholder="Office Internet IP"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center w-full space-x-2">
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="internet_staffhouse"
                            {...register("internet_staffhouse")}
                            disabled={ isSubmitting }
                            placeholder="Staff House Internet"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="ip_staffhouse"
                            {...register("ip_staffhouse")}
                            disabled={ isSubmitting }
                            placeholder="Staff House Internet IP"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="form-control flex flex-row justify-end items-center w-full pt-0.5 space-x-1.5">
                      <button
                        type="submit"
                        className="w-full max-w-[5rem] bg-cerulean text-bright-white text-sm text-center py-3 rounded-full transition ease-in-out duration-300 transform hover:bg-opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={ isSubmitting }
                      >
                        Update
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

function NetworkIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
    </svg>
  )
}