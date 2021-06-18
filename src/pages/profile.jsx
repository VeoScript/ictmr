import Head from 'next/head'
import Link from 'next/link'
import DefaultErrorPage from 'next/error'
import Layout from '~/layout/default'
import Scrollbar from 'react-smooth-scrollbar'
import ChangeProfile from '~/components/modals/profile/ChangeProfile'
import Facebook from '~/components/icons/social-media/Facebook'
import Instagram from '~/components/icons/social-media/Instagram'
import Twitter from '~/components/icons/social-media/Twitter'
import TikTok from '~/components/icons/social-media/TikTok'
import YouTube from '~/components/icons/social-media/YouTube'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Profile({ profile }) {

  if (!profile) {
    return <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage statusCode={404} />
    </>
  }
  
  return (
    <>
      <Head>
        <title>ICTMR | { profile.name }</title>
      </Head>
      <Layout profile={ profile }>
        <Scrollbar
          className="w-full h-full overflow-y-auto cursor-default"
        >
          <div className="flex flex-row justify-between items-center w-full px-16 mt-14">
            <div className="flex flex-col items-start w-full max-w-full space-y-1">
              <h1 className="font-bold text-4xl">Profile</h1>
              <h6 className="font-light text-sm text-cool-gray">Your personal information</h6>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <Link href={ profile.facebook }>
                <a className={!profile.facebook ? 'hidden' : 'block'} target="_blank">
                  <Facebook />
                </a>
              </Link>
              <Link href={ profile.twitter }>
                <a className={!profile.twitter ? 'hidden' : 'block'} target="_blank">
                  <Twitter />
                </a>
              </Link>
              <Link href={ profile.instagram }>
                <a className={!profile.instagram ? 'hidden' : 'block'} target="_blank">
                  <Instagram />
                </a>
              </Link>
              <Link href={ profile.tiktok }>
                <a className={!profile.tiktok ? 'hidden' : 'block'} target="_blank">
                  <TikTok />
                </a>
              </Link>
              <Link href={ profile.youtube }>
                <a className={!profile.youtube ? 'hidden' : 'block'} target="_blank">
                  <YouTube />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full space-y-10 px-16 pb-32 mt-10">
            <div className="flex flex-col items-start w-full max-w-[20rem]">
              <img className="w-80 h-80 rounded-full object-cover bg-cool-gray" src={ profile.avatar } alt={ profile.name } />
            </div>
            <div className="flex flex-col items-start w-full max-w-xl ml-10">
              <h1 className="font-bold text-5xl text-bright-white">{ profile.name }</h1>
              <h3 className="font-semibold text-3xl text-cool-gray mt-1">{ profile.position }</h3>
              <div className="flex flex-col mt-3 space-y-1">
                <span className="font-light text-xl text-bright-white">{ profile.email }</span>
                <span className="font-light text-xl text-bright-white">{ profile.phone }</span>
              </div>
              <ChangeProfile profile={ profile } />
            </div>
          </div>
        </Scrollbar>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const profile = await prisma.user.findFirst({
    where: {
      id: 1
    }
  })
  return {
    props: {
      profile
    }
  }
}