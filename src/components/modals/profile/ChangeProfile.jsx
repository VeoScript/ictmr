import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import FacebookSmall from '~/components/icons/social-media/FacebookSmall'
import InstagramSmall from '~/components/icons/social-media/InstagramSmall'
import TwitterSmall from '~/components/icons/social-media/TwitterSmall'
import TikTokSmall from '~/components/icons/social-media/TikTokSmall'
import YouTubeSmall from '~/components/icons/social-media/YouTubeSmall'

export default function ChangeProfile({ profile }) {

  const defaultValues = {
    avatar: profile.avatar,
    name: profile.name,
    position: profile.position,
    email: profile.email,
    phone: profile.phone,
    facebook: profile.facebook,
    twitter: profile.twitter,
    instagram: profile.instagram,
    tiktok: profile.tiktok,
    youtube: profile.youtube,
  }

  const { register, handleSubmit, reset, formState: { isSubmitting }} = useForm({ defaultValues })

  const router = useRouter()

  function refreshData() {
    router.replace(router.asPath)
  }

  async function onChangeProfile(formData) {
    const response = await fetch(`/api/profile`, {
      method: 'PUT',
      body: JSON.stringify(formData)
    })
    reset(defaultValues)
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
      <div className="w-full max-w-[12rem] mt-5">
        <button
          type="button"
          onClick={openModal}
          className="px-1 py-3 space-x-2 w-full bg-cerulean rounded-full text-sm transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
        >
          Change Profile
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
              <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-panther border-2 border-cerulean shadow-xl rounded-2xl">
                <div className="flex flex-row items-center justify-center w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-bright-white"
                  >
                    Change Profile
                  </Dialog.Title>
                </div>
                <form onSubmit={handleSubmit(onChangeProfile)} className="flex flex-col w-full mt-5 space-y-1.5">
                  <div className="flex flex-col w-full space-y-2">
                    <div className="flex flex-row items-center w-full space-x-2">
                      <div className="flex flex-col w-full space-y-2">
                        <h3 className="font-normal text-sm text-cool-gray ml-3">Basic Information</h3>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="avatar"
                              {...register("avatar")}
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
                              name="name"
                              {...register("name")}
                              disabled={ isSubmitting }
                              placeholder="Name"
                            />
                            <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="position"
                              {...register("position")}
                              disabled={ isSubmitting }
                              placeholder="Position"
                            />
                            <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="email"
                              {...register("email")}
                              disabled={ isSubmitting }
                              placeholder="Email"
                            />
                            <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="phone"
                              {...register("phone")}
                              disabled={ isSubmitting }
                              placeholder="Phone"
                            />
                            <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full space-y-2">
                        <h3 className="font-normal text-sm text-cool-gray ml-3">Social Media</h3>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="facebook"
                              {...register("facebook")}
                              disabled={ isSubmitting }
                              placeholder="Facebook"
                            />
                            <FacebookSmall />
                          </div>
                        </div>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="twitter"
                              {...register("twitter")}
                              disabled={ isSubmitting }
                              placeholder="Twitter"
                            />
                            
                            <TwitterSmall />
                          </div>
                        </div>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="instagram"
                              {...register("instagram")}
                              disabled={ isSubmitting }
                              placeholder="Instagram"
                            />
                            <InstagramSmall />
                          </div>
                        </div>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="tiktok"
                              {...register("tiktok")}
                              disabled={ isSubmitting }
                              placeholder="Tik Tok"
                            />
                            <TikTokSmall />
                          </div>
                        </div>
                        <div className="form-control">
                          <div className="flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
                            <input
                              className="w-full px-5 py-3 bg-light-panther text-bright-white rounded-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              name="youtube"
                              {...register("youtube")}
                              disabled={ isSubmitting }
                              placeholder="YouTube"
                            />
                            <YouTubeSmall />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-control flex flex-row justify-end items-center w-full pt-0.5 space-x-1.5">
                      <button
                        type="submit"
                        className="w-full max-w-[5rem] bg-cerulean text-bright-white text-sm text-center py-3 rounded-full transition ease-in-out duration-300 transform hover:bg-opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={ isSubmitting }
                      >
                        Change
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