import ReactMde from 'react-mde'
import Markdown from 'react-markdown'
import 'react-mde/lib/styles/css/react-mde-all.css'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function UpdateNotes({ notes }) {

  const defaultValues = {
    image: notes.image,
    title: notes.title,
    slug: notes.slug,
    note: notes.note,
    date: new Date(),
    tag: notes.tag
  }

  const { register, handleSubmit, reset, control, formState: { errors, isSubmitting }} = useForm({ defaultValues })

  //For RichText selectedTab useState
  const [selectedTab, setSelectedTab] = useState('write')

  const router = useRouter()

  function refreshData() {
    router.replace('/notes')
  }

  async function onCreate(formData) {
    const response = await fetch(`/api/notes/update-notes/${notes.id}`, {
      method: 'PUT',
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
      <div className="w-full max-w-[8rem]">
        <button
          type="button"
          onClick={openModal}
          className="px-1 py-3 space-x-2 w-full bg-cerulean rounded-full text-sm transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          Update
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
                    Update Note
                  </Dialog.Title>
                </div>
                <form onSubmit={handleSubmit(onCreate)} className="flex flex-col w-full mt-5 space-y-1.5">
                  <div className="flex flex-col w-full space-y-2">
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="image"
                          {...register("image", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Image URL"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      { errors.image && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Image URL is required.</span> }
                    </div>
                    <div className="form-control">
                      <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                        <input
                          className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          name="title"
                          {...register("title", { required: true })}
                          disabled={ isSubmitting }
                          placeholder="Title"
                        />
                        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      { errors.title && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Title is required.</span> }
                    </div>
                    <div className="flex flex-row items-center w-full space-x-1">
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="slug"
                            {...register("slug", { required: true })}
                            disabled={ isSubmitting }
                            placeholder="Slug"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="form-control">
                        <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                          <input
                            className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            name="tag"
                            {...register("tag", { required: true })}
                            disabled={ isSubmitting }
                            placeholder="Tag"
                          />
                          <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex w-full text-left -mt-1.5">
                        { errors.slug && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Slug is required.</span> }
                      </div>
                      <div className="flex w-full text-right -mt-1.5">
                        { errors.tag && <span className="font-medium text-xs tracking-wide text-bright-white mx-5">Tag is required.</span> }
                      </div>
                    </div>
                    <div className="form-control bg-bright-white">
                      <Controller
                        control={control}
                        name="note"
                        render={({field}) => (
                          <ReactMde 
                            {...field}
                            selectedTab={selectedTab}
                            onTabChange={setSelectedTab}
                            generateMarkdownPreview={markdown => 
                              Promise.resolve(<Markdown children={markdown} />)
                            }
                          />
                        )}
                      />
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