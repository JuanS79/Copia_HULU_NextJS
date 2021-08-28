import Thumbnail from "./Thumbnail";

export default function Results({results}) {
    return (
        <div className='px-5 my-10 sm:grid md:flex flex-col-3 xl:flex flex-wrap justify-center'>
            {results.results.map((result)=> (
                <Thumbnail key={result.id} result={result}/>)
            )}
        </div>
    )
}
