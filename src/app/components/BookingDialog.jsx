import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


const formSchema = z.object({
  name: z.string().min(1, { message: "Patient name is required." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  gender: z.string(),
  experience: z.number().min(0, { message: "Experience must be a positive number." }),
})

export function BookingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Book Appiontment</Button>
      </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Appiontment</DialogTitle>
          <DialogDescription>
            Enter details of patient.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">

            
            <Label htmlFor="name" className="text-right">
            Patient Name
            </Label>
            <Input id="name"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="age" className="text-right">
              Age
            </Label>
            <Input id="age" type="number" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Book</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
