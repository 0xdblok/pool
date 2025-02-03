import Image from "next/image";
import Countdown from "./countdown";

export default function Home() {
  return (
    <div
      class="flex w-full justify-center items-center bg-blac min-h-[900px] max-md:px-5 max-md:py-24"
      role="main"
    >
      <div class="flex flex-col flex-1 shrink justify-center items-center self-stretch px-20 py-8 my-auto w-full max-w-2xl basis-0  max-md:px-5 max-md:max-w-full">
        <div class="flex flex-col items-center max-w-full ">
          <h1 class="self-stretch font-bold  w-full text-5xl leading-none text-center text-red-900 max-md:text-4xl">
            RedPool ISO
          </h1>
          <div
            class="mt-14 text-lg leading-loose text-center text-red-900 max-md:mt-10"
            aria-live="polite"
          >
            WHAT IS IT DUMPING ?
          </div>
          <div
            class="mt-5 text-sm leading-none text-center text-red-900"
            aria-label="Program Description"
          >
            A Consistency Program
          </div>
          <div
            class="mt-12 text-lg leading-loose text-center text-red-900 max-md:mt-10"
            role="timer"
            aria-live="polite"
          >
            <Countdown targetDate="2025-02-31T00:00:00" />
          </div>
          <div class="self-stretch mt-6 text-base text-center text-red-900 max-md:mr-2 max-md:ml-1">
            Stay updated on our social platforms:
          </div>
          <div
            class="flex gap-5 justify-between mt-7 max-w-full w-[120px]"
            role="navigation"
            aria-label="Social Media Links"
          >
            <a
              href="#"
              class="flex overflow-hidden flex-col justify-center items-center px-3 w-12 h-12 bg-white rounded-full shadow-lg min-h-[48px]"
              aria-label="Visit our first social media platform"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/44d0681faf196370d60030170925a12c932dd45f652b9928cc775597dc4b687d?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                class="object-contain w-6 aspect-square"
                alt="Social Media Icon 1"
              />
            </a>
            <a
              href="#"
              class="flex overflow-hidden flex-col justify-center items-center px-3 w-12 h-12 bg-white rounded-full shadow-lg min-h-[48px]"
              aria-label="Visit our second social media platform"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/96ad05a3997c0cfd9e7cfb3b5ea6b3bd1306a3618e9060bbfac5604baf034e7b?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                class="object-contain w-6 aspect-square"
                alt="Social Media Icon 2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
