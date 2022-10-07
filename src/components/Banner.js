export default function Banner() {
    return (
        <>
            <section className="py-5 bg-light  bg-red-300 border-bottom mb-4">
            <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-col sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium text-gray-900 text-center">Welcome to my blog home page</h1>
                          <p className="flex-grow sm:pr-16 text-xl font-normal text-gray-900 text-center">
                             Build a cross-platform desktop application with  Rust, Nextjs,  TailwindCSS, and Markdown.                            
                          </p>                  
                    </div>
                </div>
            </section>
        </>
    )
}