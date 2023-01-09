import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>portfolio App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Box className={styles.description}>
        <Image width={100} height={200} src={data.avatar_url} alt={data.name}/>
        <Heading size={'md'}>{data.name}</Heading>
        <h3>{data.bio}</h3>
        <Text w={'25%'}>Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS | Deno | ReactJS | HTML | CSS | Chakra-UI | MUI</Text>
        <Link href={'https://drive.google.com/file/d/14xFKToC0yuN5EGO8NvGuLcoto6mSQb3D/view?usp=sharing'}>
          <Button>Resume</Button></Link>
        <Link href={'https://github.com/mhdsadique'}><Button>Follow</Button></Link>
        <Text w={'25%'}>{data.company}</Text>
        </Box>
      </main>
    </>
  )
}
export const getServerSideProps=async()=>{
  const res=await fetch("https://api.github.com/users/mhdsadique")
  // const res=await fetch("http://localhost:8080/home")
  const datas=await res.json()
  return{
    props:{
      data:datas
    }
  }
}

