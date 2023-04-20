export default function Tarjeta(props) {
  console.log(props.person.place)
  return (

    <div className="max-w-sm lg:flex text-center w-96">
      {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
      style={{ backgroundImage: `url(${props.person.image})` }} 
      title="Avatar">
      </div> */}
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          
          <div className="text-gray-900 font-bold text-xl mb-2">{props.person.name}</div>
          <p className="text-gray-700 text-base">Member of the {props.person.species} species, 
          this client is working with us since {props.person.created}.
          While currently located in {props.person.place}, the client's actual place of origin is {props.person.originplace}.</p>
        </div>
        <div className="flex items-center">
          <img className="w-20 h-20 rounded-lg mr-4" src={props.person.image} alt="Avatar"/>
          <div className="text-sm">
            <p className="text-gray-600">Current status: {props.person.status}</p>
            <p className="text-gray-600">Gender: {props.person.gender}</p>
          </div>
        </div>
      </div>
    </div>
  )
}