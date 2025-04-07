import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

function CardCertificate(props) {
  const { judul, by, foto, link } = props;

  return (
    <motion.Card
     whileHover={{ scale: 1.02 }}
      shadow={false}
      className="relative grid h-[28rem] border-black border-2 shadow-xl shadow-black md:max-w-[20rem] w-[19.5rem] items-center justify-center overflow-hidden text-center  rounded-xl"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{
        backgroundImage: `url(${foto})`}}
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolut inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>

      
      <CardBody className="relative py-14 px-4 md:px-12 flex flex-col">
        <Typography
          variant="h2"
          color="white"
          className="mb-2 font-extrabold leading-[1.5]"
        >
          {judul}
        </Typography>

        <Typography
          variant="p"
          color="white"
          className="mb-8 font-light leading-[1.5]"
        >
         {by}
        </Typography>

      </CardBody>
    </motion.Card>
  );
}

export default CardCertificate;
