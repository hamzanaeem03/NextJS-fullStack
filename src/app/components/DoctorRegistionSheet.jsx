"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";




// Define schema using Zod for form validation
const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  specialization: z.string().min(1, { message: "Specialization is required." }),
  hospital: z.string().min(1, { message: "Hospital name is required." }),
  experience: z.number().min(0, { message: "Experience must be a positive number." }),
  licenseNumber: z.string().min(1, { message: "License number is required." }),
  consultationHours: z.string().min(1, { message: "Consultation hours are required." }),
  appointmentFee: z.number().min(0, { message: "Appointment fee must be a positive number." }),
})

const DoctorRegistrationSheet = () => {
   // Initialize the form with react-hook-form and zodResolver for validation
   const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      specialization: '',
      hospital: '',
      experience: 0,
      licenseNumber: '',
      consultationHours: '',
      appointmentFee: 0,
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Apply as Doctor</Button>
      </SheetTrigger>
      <SheetContent className="xl:w-[800px] xl:max-w-none sm:w-[400px] sm:max-w-[540px] overflow-y-auto">
      <SheetHeader className="py-8">
          <SheetTitle>Doctor Onboarding Application</SheetTitle>
          <SheetDescription>
            Please fill out the form below to apply as a doctor on our platform. Our team will review your application and notify you upon successful verification.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Address */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Specialization */}
        <FormField
          control={form.control}
          name="specialization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specialization</FormLabel>
              <FormControl>
                <Input placeholder="Enter your specialization" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Hospital/Clinic Name */}
        <FormField
          control={form.control}
          name="hospital"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hospital/Clinic Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter hospital/clinic name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Experience */}
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience (Years)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your experience" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* License Number */}
        <FormField
          control={form.control}
          name="licenseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>License Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your license number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Consultation Hours */}
        <FormField
          control={form.control}
          name="consultationHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consultation Hours</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 9 AM - 5 PM" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Appointment Fee */}
        <FormField
          control={form.control}
          name="appointmentFee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Appointment Fee</FormLabel>
              <FormControl>
                <Input placeholder="Enter fee amount" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <SheetFooter>
          <SheetClose asChild>
        <Button type="submit">Submit</Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </Form>

        
      </SheetContent>
    </Sheet>
  );
};

export default DoctorRegistrationSheet;
