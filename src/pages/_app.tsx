import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {


  return(
    <main className="max-w-[120rem] mx-auto min-h-[2rem]">
  <Component {...pageProps} />

    </main>
  )
  
}
