import { EnvelopeIcon } from '@heroicons/react/24/solid'
import type { NextPage } from 'next'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Home: NextPage = () => {
    return (
        <div className="flex container justify-evenly flex-wrap transition-all">
            <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-lg drop-shadow-2xl">
                <h1 className="font-shadows text-5xl text-wood dark:text-cream mt-3 p-4 text-center tracking-widest ">
                    Andrew Chuah
                </h1>
                <div className="flex container flex-row justify-center mb-3 flex-wrap">
                    <a
                        href="https://www.linkedin.com/in/andrewchuah/"
                        target={'_blank'}
                        rel="noreferrer noopenner"
                    >
                        <FaLinkedinIn className="text-wood w-10 h-10 rounded-lg border-2 p-1 border-wood m-2 hover:text-cream hover:bg-wood duration-short" />
                    </a>
                    <a
                        href="https://github.com/SheathedBlade/arczenpulse"
                        target={'_blank'}
                        rel="noreferrer noopenner"
                    >
                        <FaGithub className="text-wood w-10 h-10 rounded-lg border-2 p-1 border-wood m-2 hover:text-cream hover:bg-wood duration-short" />
                    </a>
                    <EnvelopeIcon className="text-wood w-10 h-10 rounded-lg border-2 p-1 border-wood m-2 hover:text-cream hover:bg-wood duration-short" />
                </div>
                <hr className="bg-wood dark:bg-cream my-auto mx-10 p-break rounded-lg border-wood dark:border-cream" />
                <p className="font-zenMaru font-medium p-4 text-center text-wood dark:text-cream text-lg">
                    I&apos;m an aspiring full-stack developer and software
                    engineer!
                </p>
            </div>
            <div className="flex container flex-col justify-center content-center items-center max-w-lg gap-y-4">
                <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-sm drop-shadow-2xl hover:-translate-x-3 duration-short">
                    <Link href="/about">
                        <h1 className="text-3xl font-adventPro text-wood dark:text-cream text-center my-1 select-none">
                            About the Site
                        </h1>
                    </Link>
                </div>
                <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-sm drop-shadow-2xl hover:-translate-x-3 duration-short">
                    <Link href="/works">
                        <h1 className="text-3xl font-adventPro text-wood dark:text-cream text-center my-1 select-none">
                            Works
                        </h1>
                    </Link>
                </div>
                <div className="flex container flex-col bg-cream dark:bg-wood rounded-lg justify-center content-center max-w-sm drop-shadow-2xl hover:-translate-x-3 duration-short">
                    <h1 className="text-3xl font-adventPro text-wood dark:text-cream text-center my-1 select-none">
                        Contact Info
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home
