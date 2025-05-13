import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { FileInput } from "@/components/ui/file-input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONTACT_INFO, ENQUIRY_OPTIONS } from "@/lib/constants";

// Social media links
interface SocialLink {
  id: number;
  icon: string;
  url: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { id: 1, icon: "facebook-f", url: "https://facebook.com" },
  { id: 2, icon: "twitter", url: "https://twitter.com" },
  { id: 3, icon: "linkedin-in", url: "https://linkedin.com" },
  { id: 4, icon: "instagram", url: "https://instagram.com" }
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  inquiry: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  privacy: z.boolean().refine((val) => val === true, { message: "You must agree to the privacy policy" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiry: "services",
      message: "",
      privacy: false,
    },
  });

  const handleFileChange = (file: File | null) => {
    setResumeFile(file);
  };

  const contactMutation = useMutation({
    mutationFn: async (formData: FormValues) => {
      // Create a FormData object to handle file upload
      const data = new FormData();
      
      // Append form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'resume') {
          data.append(key, String(value));
        }
      });
      
      // Append file if exists
      if (resumeFile) {
        data.append('resume', resumeFile);
      }
      
      // Use Fetch API directly for multipart/form-data
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to submit form');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setResumeFile(null);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Something went wrong. Please try again later.",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-montserrat font-bold text-4xl text-vac-purple mb-4">Contact / Join Us</h2>
        <p className="text-xl max-w-3xl mx-auto">Let's work together for quality, compassionate care. Whether you're seeking support or want to join our team, we'd love to hear from you.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-vac-light p-8 rounded-lg custom-shadow">
          <h3 className="font-montserrat font-semibold text-2xl text-vac-purple mb-6">Get in Touch</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-vac-dark font-medium">Your Name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vac-purple"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-vac-dark font-medium">Email Address *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vac-purple"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-vac-dark font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vac-purple"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="inquiry"
                render={({ field }) => (
                  <FormItem id="inquiry-field">
                    <FormLabel htmlFor="inquiry-select" className="text-vac-dark font-medium">Inquiry Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger 
                          id="inquiry-select" 
                          name="inquiry"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vac-purple">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ENQUIRY_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem id="message-field">
                    <FormLabel htmlFor="message-textarea" className="text-vac-dark font-medium">Message *</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message-textarea"
                        {...field}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vac-purple"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              {form.watch("inquiry") === "employment" && (
                <div>
                  <FileInput
                    label="Upload Resume (optional)"
                    accept=".pdf,.doc,.docx"
                    onFileChange={handleFileChange}
                  />
                </div>
              )}
              
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        id="privacy-checkbox"
                        name="privacy"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="w-5 h-5 text-vac-purple rounded focus:ring-vac-purple"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel htmlFor="privacy-checkbox" className="text-sm">
                        I agree to the <a href="#" className="text-vac-purple">privacy policy</a> and consent to being contacted.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="bg-vac-purple hover:bg-opacity-90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition duration-300 w-full"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
        
        <div>
          <div className="bg-vac-purple text-white p-8 rounded-lg custom-shadow mb-8">
            <h3 className="font-montserrat font-semibold text-2xl mb-6">Book a Consultation</h3>
            <p className="mb-6">Would you like to learn more about our services? Schedule a free consultation with our team to discuss your needs.</p>
            <Button className="bg-white text-vac-purple font-montserrat font-semibold px-8 py-3 rounded-full inline-block hover:bg-opacity-90 transition duration-300">
              Book Now
            </Button>
          </div>
          
          <div className="bg-vac-light p-8 rounded-lg custom-shadow">
            <h3 className="font-montserrat font-semibold text-2xl text-vac-purple mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-vac-purple rounded-full p-2 mr-4 mt-1">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Address</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-vac-purple rounded-full p-2 mr-4 mt-1">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Phone</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-vac-purple rounded-full p-2 mr-4 mt-1">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Email</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-vac-purple rounded-full p-2 mr-4 mt-1">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Hours</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{CONTACT_INFO.hours}</p>
                  <p className="text-sm text-gray-600">{CONTACT_INFO.hoursNote}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-montserrat font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a 
                    key={social.id}
                    href={social.url} 
                    className="bg-vac-purple rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-opacity-90 transition duration-300"
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
