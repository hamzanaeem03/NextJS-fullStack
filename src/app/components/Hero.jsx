import { Button } from "@/components/ui/button";
import Image from "next/image";
import DoctorRegistionDialog from "./DoctorRegistionSheet";
import DoctorRegistionSheet from "./DoctorRegistionSheet";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Your Health, Our Priority –{" "}
            <br className="hidden lg:inline-block" />
            Book Appointments with Ease{" "}
          </h1>
          <p className="mb-8 leading-relaxed">
            Connecting you with the best healthcare professionals around the
            clock. Schedule appointments, manage your health records, and
            receive timely reminders, all from the comfort of your home. Your
            journey to better health starts here – book your appointment today
          </p>
          {/* <div className="flex justify-center">
            <Button >Apply as Doctor</Button>
          </div> */}
          <DoctorRegistionSheet />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            height={400}
            width={400}
            alt="hero"
            src="https://img.freepik.com/free-vector/medical-checkup-concept-illustration_114360-25989.jpg?ga=GA1.1.1513788950.1727356336&semt=ais_hybrid"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
