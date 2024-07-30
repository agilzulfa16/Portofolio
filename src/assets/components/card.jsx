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
          Oleh {by}
        </Typography>

        <div className="">
        <a href={link} className="inline-block hover:bg-black hover:bg-opacity-70 hover:rounded-md px-4 py-2">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              <p className="text-xl">See Certificate</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </div>
      </CardBody>
    </motion.Card>
  );
}

export default CardCertificate;
