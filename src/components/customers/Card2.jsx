export default function Tarjeta(props) {
  console.log(props.person.place)
  return (

    <div className="max-w-sm lg:flex text-center w-96 h-72">
      <div className="border-r border-b border-l border-gray-400 
      lg:border-l-0 lg:border-t lg:border-gray-400 
      rounded p-4 flex flex-col justify-between 
      opacity-70 leading-normal bg-white hover:opacity-80" style={{ width: "98%", height: "97%" }}>
    <div className="max-width mb-8" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <div className="text-gray-900 font-bold text-xl mb-2">{props.person.name}</div>
      <div className="quote-container" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="text-gray-700 text-base">{props.person.quote}</p>
      </div>
    </div>
        <div className="flex items-center">
          <img className="w-16 h-16 rounded-full mr-4" src={props.person.image} alt="Avatar"/>
          <div className="text-sm">
            <p className="text-gray-600">Twitter: @{props.person.username}</p>
            <p className="text-gray-600">Gender: {props.person.gender}</p>
          </div>
        </div>
      </div>
    </div>
  )
}