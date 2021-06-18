import Head from 'next/head'
import Layout from '~/layout/default'
import Scrollbar from 'react-smooth-scrollbar'
import Pantone from '~/components/icons/Pantone'
import { colors } from '~/static/colors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function About({ profile }) {
  return (
    <>
      <Head>
        <title>ICTMR | About</title>
      </Head>
      <Layout profile={ profile }>
        <Scrollbar
          className="w-full h-full overflow-y-auto cursor-default"
        >
          <div className="flex flex-row justify-between items-center w-full px-16 mt-14">
            <div className="flex flex-col items-start w-full max-w-full space-y-1">
              <h1 className="font-bold text-4xl">About</h1>
              <h6 className="font-light text-sm text-cool-gray">Credits & System Information</h6>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-10 px-16 pb-32 mt-10">
            <div className="flex flex-col w-full space-y-3">
              <h1 className="font-bold text-2xl text-scarlet uppercase">System</h1>
              <article className="prose-md text-justify">
                This system is intended for SPMI - Information & Communications Technology Department for the Monthly Reports Management System.
                All of this features are originally inspired by my own conceptions.&nbsp;
                <strong>ICTMR</strong> is an open source project here is the <a className="text-cerulean hover:opacity-80" href="https://github.com/VeoScript/ictmr" target="_blank">source code</a>, everyone can clone or update this project if they want.&nbsp;
                This system was built in <span className="prose-lg text-scarlet">React</span> powered by <span className="prose-lg text-scarlet">NextJS</span> and&nbsp;
                <span className="prose-lg text-scarlet">Prisma</span> with&nbsp;
                <span className="prose-lg text-scarlet">PostgreSQL</span>.
              </article>
            </div>
            <div className="flex flex-col w-full space-y-3">
              <h1 className="font-bold text-2xl text-scarlet uppercase">Main Feature</h1>
              <article className="prose-md text-justify">
                Generate monthly reports, internet status and downtime reports monitoring. <strong>ICTMR</strong> managed all of computers that registered inside the plant and it can be used as your daily journal and notebook.
              </article>
            </div>
            <div className="flex flex-col w-full space-y-3">
              <h1 className="font-bold text-2xl text-scarlet uppercase">Credits</h1>
              <span className="prose-md text-justify">
                A big thanks to <a className="font-semibold hover:opacity-80" href="https://www.pantone.com/ph/en/" target="_blank">PANTONE</a> provides a universal language of color that enables color-critical decisions through every stage of the workflow for brands and manufacturers.
              </span>
              <h3 className="font-bold text-xl text-bright-white uppercase">System Colors</h3>
              <div className="flex flex-row w-full space-x-3">
                {colors.map(({ color, code }, i) => {
                  return (
                    <div className="flex flex-col pantone-card w-36 h-full p-1 rounded-sm text-panther bg-white" key={i}>
                      <div className={`flex w-full h-28 ${color}`} />
                      <div className="flex flex-col justify-start w-full h-full px-2 py-2">
                        <Pantone />
                        <span className="text-sm -mt-7">{ code }</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col w-full space-y-3">
              <h1 className="font-bold text-2xl text-scarlet uppercase">Developer</h1>
              <article className="prose-md text-justify">
                Proudly created with 💕 by Jerome Villaruel (VEOSCRIPT).
              </article>
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