import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="flex container justify-evenly">
            <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-lg">
                <h1 className="font-adventProHeader font-black text-5xl text-wood dark:text-cream mb-3 p-4 text-center uppercase">
                    Andrew Chuah
                </h1>
                <hr className="bg-wood dark:bg-cream my-auto mx-10 p-1 rounded-lg border-wood dark:border-cream" />
                <p className="font-titillium p-5 text-center text-wood dark:text-cream text-lg">
                    I am an aspiring full-stack developer and software engineer.
                </p>
            </div>
            <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-lg"></div>
        </div>
    )
}

export default Home
