import logo from "../../../images/Logo_Color.svg";
import { FooterItemsContainer } from "./footerItemsContainer";

export default function Footer(){
    return (
        <div className="relative w-full mt-auto pt-0 flex">
        <footer className="flex flex-col justify-center bg-grey text-white w-full px-4 py-10 lg:px-6 ">
        <div className="flex w-full flex-col justify-between  items-start self-center" style={{maxWidth:'1140px'}}>
            <div className="w-full flex-col justify-between">
            <div className="my-4 flex flex-col text-left sm:mt-14">
            <img className='w-40' src={logo}alt="provision"/>
            <p className="mt-4 leading-6">Learn in-demand tech skills in half the time</p>
            </div>
            </div>

            <div className="w-full self-center">
                <div className="border-0 border-b border-solid border-gray-50 "></div>
            </div>
<FooterItemsContainer/>
             </div>
             


        </footer>
        
        </div>

    );
}