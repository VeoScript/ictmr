import Head from 'next/head'
import Layout from '~/layout/default'
import DisplayNetworks from '~/components/DisplayNetworks'
import { useState, useEffect } from 'react'

export default function Network() {
  let [isOnline, setNetwork] = useState()

  if (typeof window !== 'undefined') {
    [isOnline, setNetwork] = useState(window.navigator.onLine)

    const updateNetwork = () => {
      setNetwork(window.navigator.onLine)
    }
    
    useEffect(() => {
      window.addEventListener("offline", updateNetwork);
      window.addEventListener("online", updateNetwork);
      return () => {
        window.removeEventListener("offline", updateNetwork);
        window.removeEventListener("online", updateNetwork);
      }
    })
  }

  console.log(isOnline == true ? 'Online' : 'Offline')
  
  return (
    <>
      <Head>
        <title>ICTMR | Network</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-between items-center w-full px-6 mt-14">
          <div className="flex flex-col items-start w-full px-10 space-y-1">
            <h1 className="font-bold text-4xl">Networks</h1>
            <h6 className="font-light text-sm text-cool-gray">Monitor your network and your internet connection</h6>
          </div>
        </div>
        <DisplayNetworks />
      </Layout>
    </>
  )
}