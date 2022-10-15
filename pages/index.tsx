import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="flex container justify-evenly flex-wrap transition-all">
            <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-lg drop-shadow-2xl">
                <h1 className="font-shadows text-5xl text-wood dark:text-cream my-3 p-4 text-center font-semibold">
                    Andrew Chuah
                </h1>
                <hr className="bg-wood dark:bg-cream my-auto mx-10 p-break rounded-lg border-wood dark:border-cream" />
                <p className="font-zenMaru font-medium p-5 text-center text-wood dark:text-cream text-lg">
                    I am an aspiring full-stack developer and software engineer!
                </p>
            </div>
            <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-lg drop-shadow-2xl"></div>
        </div>
    )
}

export default Home
