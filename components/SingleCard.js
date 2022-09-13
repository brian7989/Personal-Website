
export default function SingleCard({title, imgUrl, link, number}) {
    let sizing_property = null;

    switch (number) {
        case "1":
            sizing_property = "w-full block col-span-3 shadow-2xl"
            break;
        case "2":
            sizing_property = "w-full block col-span-3  sm:col-span-2 shadow-2xl"
            break;
        case "3":
            sizing_property = "w-full block col-span-3 sm:col-span-1  object-cover"
            break;
    }

    return (<a
        href={link}
        className={sizing_property}
    >
        <div className="relative overflow-hidden">
            <img
                src={imgUrl}
                alt={title}
                className="transform hover:scale-125 transition duration-2000 ease-out"
            />
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-green-500 rounded-md px-2">
                {title}
            </h1>
            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                {number}
            </h1>
        </div>
    </a>)
}
