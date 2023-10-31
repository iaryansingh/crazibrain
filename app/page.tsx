'use client'
import {HeroBanner} from "@/app/components/heroBanner";
import {Services} from "@/app/components/services"
import {Clients} from "@/app/components/clients";
import {Why} from "@/app/components/why"
import {CasestudySection} from "@/app/components/casestudysection"


export default function Home() {
  return (
    <section className='justify-center '>

       <HeroBanner/>

        <div className={" justify-center max-w-[1400px] text-center m-auto py-[100px] mx-5"}>
            <h6 className={"text-[20px]"}>We Bring Your</h6>
            <div className={" text-[35px] font-bold flex flex-row text-center justify-center"}> Vision to <p className={"text-red-600 pl-1 text-center"}>Reality</p></div>
            <p>As a team of enthusiasts in User Experience, Design & Development brings us great joy to shape your vision into reality.</p>
        </div>
        <Services/>
        <Why/>
        <CasestudySection/>
    </section>
  )
}
