import { Typewriter } from "react-simple-typewriter"

const OnDev = () => {
    return (
        <div className="h-screen w-screen items-center justify-center flex">
        <h1 className="text-4xl font-bold font-sans">
        <Typewriter
        words={["COMMING SOON!","ON DEVELOPMENT.........."]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      /></h1></div>
    )
}

export default OnDev;