export default function Tarjeta(props) {
  console.log(props.person.place)
  return (

    <div className="max-w-sm lg:flex text-center w-96 h-96">
      {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
      style={{ backgroundImage: `url(${props.person.image})` }} 
      title="Avatar">
      </div> */}
      <div className="border-r border-b border-l border-gray-400 
      lg:border-l-0 lg:border-t lg:border-gray-400 
      rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between 
      opacity-70 leading-normal bg-white hover:opacity-80">
        <div className="mb-8">
          
          <div className="text-gray-900 font-bold text-xl mb-2">{props.person.name}</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio ipsum molestias non doloribus? Unde, iusto? Aspernatur voluptatem officiis quis inventore maxime possimus sunt rerum, minima repellat reprehenderit assumenda eveniet cum aliquam. Asperiores, animi libero! Exercitationem obcaecati quaerat repellendus rem.</p>
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