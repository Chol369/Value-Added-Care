import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ENQUIRY_OPTIONS } from '@/lib/constants';

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  inquiry: z.string().min(1, { message: "Please select an inquiry type" }),
  message: z.string().min(1, { message: "Message is required" }),
  consent: z.boolean().refine((val) => val === true, { message: "You must consent to the data collection" }),
  resume: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [fileName, setFileName] = useState<string>('No file selected');
  const [fileData, setFileData] = useState<File | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      inquiry: '',
      message: '',
      consent: false,
      resume: undefined,
    },
  });

  const watchInquiry = watch('inquiry');

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const formData = new FormData();
      
      // Append all form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'resume') {
          formData.append(key, value?.toString() || '');
        }
      });
      
      // Append file if exists
      if (fileData) {
        formData.append('resume', fileData);
      }
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you shortly.",
        variant: "default",
      });
      reset();
      setFileName('No file selected');
      setFileData(null);
    },
    onError: (error) => {
      toast({
        title: "Error submitting form",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFileData(file);
      setValue('resume', file);
    } else {
      setFileName('No file selected');
      setFileData(null);
      setValue('resume', undefined);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" className="block mb-2 font-medium text-neutral-dark">First Name*</Label>
          <Input 
            type="text" 
            id="firstName" 
            {...register('firstName')} 
            autoComplete="given-name"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2d90] ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>}
        </div>
        <div>
          <Label htmlFor="lastName" className="block mb-2 font-medium text-neutral-dark">Last Name*</Label>
          <Input 
            type="text" 
            id="lastName" 
            {...register('lastName')} 
            autoComplete="family-name"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2d90] ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>
      
      <div>
        <Label htmlFor="email" className="block mb-2 font-medium text-neutral-dark">Email Address*</Label>
        <Input 
          type="email" 
          id="email" 
          {...register('email')} 
          autoComplete="email"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2d90] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>
      
      <div>
        <Label htmlFor="phone" className="block mb-2 font-medium text-neutral-dark">Phone Number</Label>
        <Input 
          type="tel" 
          id="phone" 
          {...register('phone')} 
          autoComplete="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2d90]"
        />
      </div>
      
      <div>
        <Label htmlFor="inquiry-trigger" className="block mb-2 font-medium text-neutral-dark">I'm interested in:*</Label>
        <Select 
          onValueChange={(value) => setValue('inquiry', value)} 
          defaultValue={watchInquiry}
        >
          <SelectTrigger id="inquiry-trigger" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2d90] ${errors.inquiry ? 'border-red-500' : 'border-gray-300'}`}>
            <SelectValue placeholder="Please select..." />
          </SelectTrigger>
          <SelectContent>
            {ENQUIRY_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.inquiry && <p className="mt-1 text-sm text-red-500">{errors.inquiry.message}</p>}
      </div>
      
      <div>
        <Label htmlFor="message" className="block mb-2 font-medium text-neutral-dark">Message*</Label>
        <Textarea 
          id="message" 
          {...register('message')} 
          rows={4} 
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6b2d90] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>
      
      <div className="file-upload-container">
        <Label htmlFor="resume" className="block mb-2 font-medium text-neutral-dark">Resume/CV (for employment inquiries)</Label>
        <div className="flex items-center justify-between border border-gray-300 rounded-md overflow-hidden">
          <span className="px-4 py-2 text-gray-500 truncate flex-grow" id="file-name-display" aria-live="polite">{fileName}</span>
          <Button 
            type="button" 
            variant="outline"
            className="bg-gray-100 px-4 py-2 text-neutral-dark font-medium border-l border-gray-300 hover:bg-gray-200 transition-colors"
            onClick={() => document.getElementById('resume')?.click()}
            aria-controls="resume"
          >
            Browse
          </Button>
          <input 
            type="file" 
            id="resume" 
            name="resume"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx" 
            className="hidden"
            aria-describedby="file-format-help"
          />
        </div>
        <p id="file-format-help" className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
      </div>
      
      <div className="flex items-start">
        <Checkbox 
          id="consent" 
          checked={watch('consent')}
          onCheckedChange={(checked) => setValue('consent', checked as boolean)}
          className="mt-1"
        />
        <Label htmlFor="consent" className="ml-2 text-sm text-neutral-dark">
          I consent to Value Added Care collecting and storing my data for the purpose of responding to my inquiry.*
        </Label>
      </div>
      {errors.consent && <p className="mt-1 text-sm text-red-500">{errors.consent.message}</p>}
      
      <Button 
        type="submit" 
        disabled={mutation.isPending}
        className="bg-gradient-to-r from-[#6b2d90] to-[#8dc63f] hover:from-[#5e2780] hover:to-[#7db52f] text-white px-8 py-3 rounded-full font-medium w-full transition-all duration-300"
      >
        {mutation.isPending ? 'Submitting...' : 'Submit'}
      </Button>

      {/* ContactForm styles are in index.css */}
    </form>
  );
};

export default ContactForm;
