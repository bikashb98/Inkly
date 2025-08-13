// interface QuotesProp = {}


export function Quotes () {
    return(
        <div className = 'flex bg-slate-50 h-screen justify-center  '>
            <div className = 'flex flex-col justify-center'>
                <div className = ' max-w-xl font-headland text-3xl font-bold px-5'>
                    "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
                </div>
                <div className = 'mt-5 font-bold text-lg px-5'>
                    Jules Winnfield
                </div>
                <div className = 'px-5 text-slate-500 font-medium text-md'>CEO, Acme Inc</div>
            </div>
        </div>
    )
}