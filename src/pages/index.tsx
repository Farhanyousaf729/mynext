import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import { ImSearch } from "react-icons/im"
import { IoCart } from "react-icons/io5"
import { GetStaticProps } from 'next'
import Img from "../../public/imgs/about-img.jpeg"
import Link from 'next/link'
type myprops = {

  Posts: {}
}

export const getStaticProps: GetStaticProps<{mydata : myprops}> = async () => {
  const res = await fetch(`http://localhost:3004/Posts`)
  const mydata = await res.json()
  return { props: { mydata } }
}




export default function Home({ mydata }: any) {
  // const scrolltoHash = function (element_id: string) {
  //   const element = document.getElementById(element_id)
  //   element?.scrollIntoView({ behavior: "smooth", block: "nearest"});
  // }




  // const scrollIntoViewWithOffset = (element_id:string, offset:any) => {
  //   window.scrollTo({
  //     behavior: 'smooth',
  //     top:
  //       document.getElementById(element_id).getBoundingClientRect().top -
  //       document.body.getBoundingClientRect().top -
  //       offset,
  //   } )
  // }
  const scrollIntoViewWithOffset = (element_id: string, offset:number = 100) => {
    const element = document.getElementById(element_id);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (

    <>
      <nav className='w-[100%] bg-black  text-white flex items-center justify-between px-10 py-6 border-b border-white sticky top-0' >
        <Image src="/imgs/logo.png" alt='' width={70} height={70} />
        <ul className=' font-normal flex justify-between  w-[60%]  lg:w-[50%]'>
          <li className='Hover' onClick={()=> scrollIntoViewWithOffset('sectionone')}>Home</li>
          <li className='Hover'  onClick={()=>  scrollIntoViewWithOffset('sectiontwo')}>About</li>
          <li className='Hover'  onClick={()=>  scrollIntoViewWithOffset('sectionthree')}>Menu</li>
          <li className='Hover'  onClick={()=>  scrollIntoViewWithOffset('sectionfour')}>Products</li>
          <li className='Hover' >Review</li>
          <li className='Hover' >Contact</li>
          <li className='Hover' >Blogs</li>
        </ul>
        <div className='text-4xl flex w-[7%] justify-between '> <ImSearch /><IoCart /></div>
      </nav>
      {/* ==========================section one ========================================================== */}

      <section id='sectionone'>
        <div style={{ backgroundImage: `url(/imgs/home-img.jpeg) `, backgroundSize: `100% 100%` }} className='w-[100%] h-[100vh] text-white flex items-center px-10'>
          <div>
            <h1 className='py-10 text-5xl  font-extrabold w-[50%]'>FRESH COFFEE IN THE MORNING</h1>
            <p className='text-xl font-thin w-[50%] '>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat Labore, Sint Cupiditate Distinctio Tempora Reiciendis.</p>
          </div>
        </div></section>
      {/* ===============================section two =================================================== */}
      <section id='sectiontwo' >
        <div className=' bg-black py-12 px-10'>
          <h1 className='text-center text-5xl font-bold pb-10  text-[#D3AD7F]'>ABOUT <span className='text-white'>US</span></h1>
          <div className='flex items-center flex-col lg:flex-row '>
            <Image className=' w-[100%] lg:w-[50%] ' src={Img} alt='' width={500} height={500} />
            <div className='bg-[#13131A] w-[100%] lg:w-[50%]  px-6 flex items-center'>
              <div className=''>
                <h1 className='text-white  text-3xl  font-bold'>"What Makes Our Coffee Special?</h1>
                <p className='text-white leading-8 text-base '>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?</p>
                <p className='text-white leading-8 text-base pt-6 '>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>
                <button className='bg-[#D3AD7F] px-8 py-2 text-white mt-2'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================section three=============================================== */}
      <section id='sectionthree' >
        <div className=' bg-black px-10 py-12 '>
          <h1 className='text-center text-5xl font-bold text-white pb-10'>OUR <span className='text-[#D3AD7F]'>MANU</span></h1>
          <div className='grid xl:grid-cols-4  lg:grid-cols-3  sm:grid-cols-2  gap-2'>
            {
              mydata.slice(0, 6).map((ele: any) => {
                // console.log(ele);

                return (
                  <Link href={`/posts/${ele.id}`}>  <div className='border-[0.5px] py-12 border-[#D3AD7F] flex justify-center items-center'>
                    <div className='text-white flex flex-col items-center' >
                      <Image className='' src={ele.url} alt='' width={100} height={100} />
                      <h1 className='py-2'>{ele.des}</h1>
                      <h1 className='pb-2'>{ele.price} <span className='line-through '>20.99</span></h1>
                      <button className='text-white py-2 px-6 bg-[#D3AD7F]'>Add To Cart</button>
                    </div>
                  </div></Link>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* ===============================section four========================================== */}

      <section id='sectionfour' >
        <div className=' bg-black px-10 py-12 '>
          <h1 className='text-center text-5xl font-bold text-white pb-10'>OUR <span className='text-[#D3AD7F]'>PRODUCTS</span></h1>
          <div className='sm:grid grid-cols-2 lg:grid-cols-3 gap-2 '>
            {
              mydata.slice(6, mydata.length).map((ele: any) => {
                return (
                  <Link href={`/posts/${ele.id}`}>       <div className='border-[0.5px] py-12 border-[#D3AD7F] flex justify-center items-center'>
                    <div className='text-white flex flex-col items-center'>
                      <Image src={ele.url} alt='' width={200} height={200} />
                      <h1 className='py-2 text-white'>{ele.des}</h1>
                      <h1 className='pb-2'>{ele.price} <span className='line-through '>20.99</span></h1>
                      <button className='text-white py-2 px-6 bg-[#D3AD7F]'>Add To Cart</button>
                    </div>
                  </div></Link>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
