import CountdownTimer from "../components/CountdownTimer";
import landingImg from "../assets/coding_challenge_main.svg";
import firstPlace from "../assets/first_place.svg";
import secondPlace from "../assets/second_place.svg";
import thirdPlace from "../assets/third_place.svg";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

export default function CodingChallengeLanding() {
    return (
        <>
            <div className="text-center mt-[40px] mx-[20px] text-center">
                <h1 className="text-[26px] font-[600] font-bold uppercase">Join the</h1>
                <h1 className="text-[26px] font-[600] font-bold text-[#0E5371] uppercase">Coding Challenge</h1>

                <div className="mt-[24px] w-[50%] mx-auto">
                    <img src={landingImg} alt="Coding Challenge" />
                </div>

                <div className="mt-[64px] font-[400] text-[16px]">
                    <h2 className="text-[22px] font-[500] font-bold">Are you ready to put your coding <br />skills to the ultimate test?</h2>
                    <p className="mt-[12px]"><span className="font-bold">Diadraw</span> is looking for talented and creative <br />minds to take part in our Coding Challenge.</p>
                </div>

            </div>
            <div className="mt-[38px] p-[22px] bg-[#E8F5FE] font-[400] text-[20px] text-center">
                <p>We value creativity, problem-solving <br/>and innovative thinking, and this <br/>is your chance to showcase <br/>what makes you stand out.</p>
            </div>
            <div className="mt-[68px] mx-[20px]">
                <h2 className="text-[22px] font-[500] font-bold text-center">How to Join the Challenge</h2>
                <p className="mt-[6px] font-[400] text-[16px] text-center">It takes just 3 simple steps to get started!</p>
                <div className="mt-[24px] font-[400] text-[16px] space-y-[24px] ">
                    <div className="flex">
                        <p className="flex-shrink-0 text-[26px] font-[400] text-[#FFFFFF] bg-[#0E5371] rounded-[360px] w-[50px] h-[50px] flex items-center justify-center">1</p>
                        <div className="ml-[12px]">
                            <p className="font-bold font-[500] text-[20px]">Start the Challenge</p>
                            <p>Click the “Start the Challenge Now” button.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="flex-shrink-0 text-[26px] font-[400] text-[#FFFFFF] bg-[#0E5371] rounded-[360px] w-[50px] h-[50px] flex items-center justify-center">2</p>
                        <div className="ml-[12px]">
                            <p className="font-bold font-[500] text-[20px]">Tell Us Who You Are</p>
                            <p>Fill in a short form with your name, email, and some basics—so we know where to send important updates.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="flex-shrink-0 text-[26px] font-[400] text-[#FFFFFF] bg-[#0E5371] rounded-[360px] w-[50px] h-[50px] flex items-center justify-center">3</p>
                        <div className="ml-[12px]">
                            <p className="font-bold font-[500] text-[20px]">Submit Your Results</p>
                            <p>Once you’ve completed the challenge, simply send your solution to our <span className="font-bold">email: <u>info@diadraw.com</u></span>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[68px] mx-[20px] text-center">
                <h2 className="text-[22px] font-[500] font-bold">Win an Internship at Diadraw</h2>
                <p className="mt-[6px] font-[400] text-[16px]">By participating, you could win <br/> an internship at Diadraw with real <br/> opportunities for professional growth <br/> and career development within the company.</p>
            </div>

            <div className="mt-[68px] p-[20px] bg-[#E8F5FE] flex justify-center flex-col">
                <h2 className="text-[22px] font-[500] font-bold text-center">Challenge Rewards</h2>

                <div className="mt-[24px] grid grid-cols-[auto_1fr] gap-x-[12px] gap-y-2 items-center w-fit mx-auto">
                    <div className="flex justify-center w-20">
                        <img src={firstPlace} alt="First Place" />
                    </div>
                    <p>1st Place – Internship</p>

                    <div className="flex justify-center w-20">
                        <img src={secondPlace} alt="Second Place" />
                    </div>
                    <p>2nd Place – Backpack</p>

                    <div className="flex justify-center w-20">
                        <img src={thirdPlace} alt="Third Place" />
                    </div>
                    <p>3rd Place – Water Bottle</p>
                </div>
            </div>

            <div className="mt-[68px] mx-[20px] text-center">
                <h2 className="text-[22px] font-[500] font-bold">More Than Just Coding</h2>
                <p className="mt-[12px] font-[400] text-[16px]">This challenge is not just about coding.<br/> It’s about bringing ideas to life, thinking<br/> outside the box and pushing your limits.</p>
            </div>

            <div className="mt-[68px] text-center">
                <CountdownTimer targetDate="2025-09-12T23:59:59" />
            </div>

            <div className="mt-[68px] mx-[20px] text-center">
                <div className="relative flex justify-center space-x-[36px] items-center">
                    <img className="absolute left-[50%] translate-x-[-160px]" src={arrow} alt="->" />
                    <h2 className="text-[22px] font-[500] font-bold">Important Dates</h2>
                </div>
                <div className="mt-[24px]">
                    <p className="font-[400] text-[16px]">The challenge opens<br/> on <span className="font-bold">October 9</span> at the Career Show<br/> and closes on <span className="font-bold">October 12</span> at 11:59 PM.</p>
                </div>
            </div>

            <div className="my-[68px] mx-[20px] text-center">
                <h2 className="text-[22px] font-[500] font-bold">Don’t Miss Out</h2>
                <p>Don’t miss your chance to demonstrate<br/> your talent and creativity!</p>
                <button onClick={() => navigate("/form")} className="mt-[32px] bg-[#005F75] text-[#FAFAFA] font-[400] text-[20px] py-[8px] px-[16px] rounded-[4px] hover:bg-[#004c5e] transition-colors shadow-md focus:outline-none">Start the Challenge Now</button>
            </div>
        </>
    );
}