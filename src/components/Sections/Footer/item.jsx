

export const Item = ({links ,title}) => {
  return (
    <ul>
    <h1 className="font-semibold mb-4 text-xs leading-5 tracking-widest ">{title}</h1>
    {
        links.map((link) => (
            <li key={link.name} className="my-4 ">
                <a href={link.link} className="text-gray-400 hover:text-primary duration-300 text-sm cursor-pointer">{link.name}</a>
            </li>
        )
            
        )
    }
    </ul>
  )
}
