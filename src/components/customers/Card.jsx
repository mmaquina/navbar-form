import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Tarjeta(props) {
    console.log(props.name)
    return (
      <Card className="bg-gradient-to-bl from-violet-200 to-slate-300 p-5 m-5 rounded-lg w-96 text-center">
        <CardHeader color="blue" className="relative ">
          <img
            src={props.person.image}
            alt="img-blur-shadow"
            className=""
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {props.person.name}
          </Typography>
          <Typography>
            {props.person.status}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{props.person.species}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            {props.person.gender}
          </Typography>
        </CardFooter>
      </Card>
    );
  }