'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { catogories, doctors } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellRing, Hospital, Clock , Coins} from "lucide-react"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { BookingDialog } from "./bookingdialog";

const DoctorSection = ({ isHome }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(''); // Track selected specialty

  // Filter doctors based on selected specialty or show all by default
  const filteredDoctors = selectedSpecialty
    ? doctors.filter((doctor) => doctor.category === selectedSpecialty)
    : doctors;

  // For the home view, limit the number of displayed doctors
  const visibleDoctors = isHome ? filteredDoctors.slice(0, 8) : filteredDoctors;
  const Categories = [...new Set(doctors.map((doctor) => doctor.category))];

  return (
    <section className="text-gray-600 body-font">
      <div className="container pt-24 px-5 mx-auto">
        <div className="flex justify-between w-full mb-20">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            Doctors onboard{" "}
          </h1>
          {isHome ? (
            <Link href={"/doctors"}>
              <Button variant="ghost">See All</Button>
            </Link>
          ) : (
            <Select onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="specialities" />
              </SelectTrigger>
              <SelectContent>
                {Categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        <div className="flex justify-between py-2 flex-wrap -m-4">
          {visibleDoctors.map((doctor) => (
            <Card key={doctor.name} className="p-2 m-2 lg:w-[23%]">
              <div className="items-center flex ">
                <Avatar className="ml-4">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardHeader>
                  <CardTitle>{doctor.name}</CardTitle>
                  <CardDescription>{doctor.category}</CardDescription>
                </CardHeader>
              </div>
              {!isHome && (<div className="flex flex-col justify-between  h-full">
                <CardContent className="flex flex-col ">
                  <div className=" flex items-center space-x-4 py-1">
                    <Hospital size={18} />
                    <p className="text-sm text-muted-foreground">{doctor.hospital}</p>
                  </div>
                  <div className=" flex items-center space-x-4 py-1">
                    <Clock size={18} />
                    <p className="text-sm text-muted-foreground">{doctor.appointmentTime}</p>
                  </div>
                  <div className=" flex items-center space-x-4 py-1">
                    <Coins size={18} />
                    <p className="text-sm text-muted-foreground">{doctor.fees}</p>
                  </div>
                 
                </CardContent>
                <div className='ml-4 space-x-4 my-3 '>

<BookingDialog/>
              </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
