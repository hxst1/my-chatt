import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <> 
      <Head>
        <title>my-chatt</title>
      </Head>
      {children}
    </>
  )
}

export default Layout
