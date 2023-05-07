export default function Home() {
    return (
        <>
            <nav className="bg-white/90 z-10 h-12 w-full top-0 fixed flex flex-row justify-between p-3">
                <h1 className="basis-1/2 text-lg font-bold bg-gradient-to-r bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 inline-block text-transparent bg-clip-text">
                    OpenStore
                </h1>
                <div className="basis-1/1">
                    <a className="text-black/80 p-2">Documentaton</a>
                    <a className="text-black/80 p-2">About</a>
                    <a className="text-black/80 p-2">Get Started</a>
                </div>
            </nav>
            <main className="flex min-h-screen flex-col items-center m-20">
                <div className="relative flex place-items-center flex-col">
                    <p className="font-bold text-8xl text-center font-sans bg-gradient-to-r bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 inline-block text-transparent bg-clip-text">
                        Open Store
                    </p>
                    <p className="p-4 text-2xl text-center font-sans text-black-600/100 ">
                        Opensource e-commece platform
                    </p>
                </div>
                <div className="relative flex place-items-center justify-between">
                    <div className="relative flex place-items-center justify-between p-10">
                        <button className="bg-sky-500/100 rounded-lg p-3">
                            <p className="text-2xl font-sans text-white text-bold font-sans">
                                Get started
                            </p>
                        </button>
                        <p className="text-2xl font-sans text-blue-600/90 p-3">
                            Learn more
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
