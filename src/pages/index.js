import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
const Header = dynamic(() => import('../components/Header'));
const Card = dynamic(() => import('../components/Card'));
const Blogs = dynamic(() => import('../components/Blogs'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Elbrit - Get Your Vitamins & Minerals</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../Assets/f2-1.png.png" />

      </Head>
      <div className="text-start">
        <Image src="/Assets/log.png" alt="Elbrit Logo" style={{width:"auto",height:"auto"}} height={100} width={300} className="img-fluid mb-3"/>
      </div>
      <Header />
      <Card/>
      <Blogs/>
      <Footer/>
    </>
  );
}
