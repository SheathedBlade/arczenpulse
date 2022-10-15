import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="flex container justify-evenly flex-wrap transition-all">
            <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-lg drop-shadow-2xl">
                <h1 className="font-shadows text-5xl text-wood dark:text-cream my-3 p-4 text-center tracking-widest ">
                    Andrew Chuah
                </h1>
                <hr className="bg-wood dark:bg-cream my-auto mx-10 p-break rounded-lg border-wood dark:border-cream" />
                <p className="font-zenMaru font-medium p-4 text-center text-wood dark:text-cream text-lg">
                    I&apos;m an aspiring full-stack developer and software
                    engineer!
                </p>
            </div>
            <div className="flex container flex-col justify-center content-center items-center max-w-lg gap-y-4">
                <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-sm drop-shadow-2xl hover:-translate-x-3 duration-short">
                    <a href="/works">
                        <h1 className="text-3xl font-adventPro text-wood dark:text-cream text-center my-1">
                            Works
                        </h1>
                    </a>
                </div>
                <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-sm drop-shadow-2xl hover:-translate-x-3 duration-short">
                    <h1 className="text-3xl font-adventPro text-wood dark:text-cream text-center my-1">
                        Source
                    </h1>
                </div>
                <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-sm drop-shadow-2xl hover:-translate-x-3 duration-short">
                    <h1 className="text-3xl font-adventPro text-wood dark:text-cream text-center my-1">
                        Contact Info
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home
