const NotFound = () => {
    return (
        <div className="container flex justify-center content-center flex-col bg-cream max-w-md rounded-lg">
            <h1 className="text-wood text-center text-5xl uppercase mb-3 p-5 font-adventProHeader">
                Page Not Found
            </h1>
            <hr className="bg-wood my-auto mx-10 p-1 rounded-lg border-wood" />
            <h2 className="font-titillium text-wood text-center p-10 text-3xl">
                Click here to head back to the main page!
            </h2>
        </div>
    )
}

export default NotFound
