
import Link from "next/link";

export default function Home() {
    return (
      <>
        <header>
            <div className=" max-w-[1390px] px-[50px] py-[15px] m-auto flex flex-col gap-[20px] sm:gap-[0px] sm:flex-row justify-between items-center sm:h-[100px]">
                <div className="img-parent w-[69px] h-[47px]">
                    <img src="/logo.png" className="w-[100%] h-[100%] object-contain" alt="" />
                </div>
                <div className="flex gap-[20px] md:gap-[30px] lg:gap-[50px]">
                    <Link href="">Products</Link>
                    <Link href="">Gallery</Link>
                    <Link href="">Contact</Link>
                </div>
                <div className="flex gap-[25px]">
                    <Link className="px-[20px] py-[12px] text-[#42454A] text-[14px]" href="login">LOG IN</Link>
                    <Link className="bg-[#42454A] px-[20px] py-[12px] text-white text-[14px] rounded" href="signup">SIGN UP</Link>
                </div>
            </div>
        </header>
      </>
    );
  }