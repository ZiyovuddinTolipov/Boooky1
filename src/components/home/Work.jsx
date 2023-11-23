import landingSvg from "../../assets/landing1.svg"
const Work = () => {
    return (
        <section className="mt-10">
            <h2 className="text-center text-3xl font-bold">How does Kurtis work?</h2>
            <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-100 md:w-1/2 max-h-[400px] relative">
                        <img src={landingSvg} alt="img" width='400px' />
                    </div>
                    <div className="w-100 md:w-1/2 px-10">
                        <h3 className="text-3xl font-bold my-3">
                            Create
                        </h3>
                        <p className="text-[2rem]">
                            It only takes minutes to create a learning game or trivia quiz on any topic, in any language.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-100 md:w-1/2 px-10">
                        <h3 className="text-3xl font-bold my-3">
                            Create
                        </h3>
                        <p className="text-[2rem]">
                            It only takes minutes to create a learning game or trivia quiz on any topic, in any language.
                        </p>
                    </div>
                    <div className="w-100 md:w-1/2  max-h-[400px] relative">
                        <img src={landingSvg} alt="img" width='400px' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work