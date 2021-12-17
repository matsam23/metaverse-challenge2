import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";



function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider 
  appId='lnrNpg2yqDY7zX9dcQKUrvYTVFIyUJJYNacgtXIg'
   serverUrl='https://wihbmw4tirbm.usemoralis.com:2053/server'
   >
      <Component {...pageProps} />
  </MoralisProvider>
  
  )
  
}

export default MyApp
