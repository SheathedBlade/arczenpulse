const NotFound = () => {
    return (
        <div className="container flex justify-center content-center flex-col bg-cream dark:bg-wood max-w-md rounded-lg drop-shadow-2xl">
            <h1 className="text-wood dark:text-cream text-center text-5xl my-3 p-5 font-shadows tracking-widest">
                Page Not Found
            </h1>
            <hr className="bg-wood dark:bg-cream my-auto mx-10 p-break rounded-lg border-wood dark:border-cream" />
            <h2 className="font-zenMaru font-medium text-wood dark:text-cream text-center p-10 text-2xl">
                Click here to head back to the main page!
            </h2>
        </div>
    )
}

export default NotFound
