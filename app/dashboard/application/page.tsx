"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

const personalDetailsSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  dateOfBirth: z.string().min(1, { message: "Last name must be at least 2 characters." }),
  dateOfBirth: z.string().min(1, {
    message: "Date of birth is required.",
  }),
  gender: z.string().min(1, { message: "Gender is required." }),
  nationality: z.string().min(1, { message: "Nationality is required." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(1, { message: "City is required." }),
  country: z.string().min(1, { message: "Country is required." }),
  phoneNumber: z.string().min(5, { message: "Phone number must be at least 5 characters." }),
})

const educationDetailsSchema = z.object({
  highSchool: z.string().min(2, { message: "High school name is required." }),
  graduationYear: z.string().min(4, { message: "Graduation year is required." }),
  educationBoard: z.string().min(1, { message: "Education board is required." }),
  grades: z.string().min(1, { message: "Grades information is required." }),
  previousInstitution: z.string().optional(),
  previousQualification: z.string().optional(),
})

const personalStatementSchema = z.object({
  statement: z.string().min(100, { message: "Personal statement must be at least 100 characters." }),
  whyFashion: z.string().min(50, { message: "Please provide at least 50 characters." }),
  careerGoals: z.string().min(50, { message: "Please provide at least 50 characters." }),
})

const courseSelectionSchema = z.object({
  course: z.string().min(1, { message: "Please select a course." }),
  startDate: z.string().min(1, { message: "Start date is required." }),
  studyMode: z.string().min(1, { message: "Study mode is required." }),
})

export default function ApplicationPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("personal")

  const personalForm = useForm<z.infer<typeof personalDetailsSchema>>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      address: "",
      city: "",
      country: "",
      phoneNumber: "",
    },
  })

  const educationForm = useForm<z.infer<typeof educationDetailsSchema>>({
    resolver: zodResolver(educationDetailsSchema),
    defaultValues: {
      highSchool: "",
      graduationYear: "",
      educationBoard: "",
      grades: "",
      previousInstitution: "",
      previousQualification: "",
    },
  })

  const statementForm = useForm<z.infer<typeof personalStatementSchema>>({
    resolver: zodResolver(personalStatementSchema),
    defaultValues: {
      statement: "",
      whyFashion: "",
      careerGoals: "",
    },
  })

  const courseForm = useForm<z.infer<typeof courseSelectionSchema>>({
    resolver: zodResolver(courseSelectionSchema),
    defaultValues: {
      course: "",
      startDate: "",
      studyMode: "",
    },
  })

  function onPersonalSubmit(values: z.infer<typeof personalDetailsSchema>) {
    toast({
      title: "Personal details saved",
      description: "Your personal details have been saved successfully.",
    })
    setActiveTab("education")
  }

  function onEducationSubmit(values: z.infer<typeof educationDetailsSchema>) {
    toast({
      title: "Education details saved",
      description: "Your education details have been saved successfully.",
    })
    setActiveTab("statement")
  }

  function onStatementSubmit(values: z.infer<typeof personalStatementSchema>) {
    toast({
      title: "Personal statement saved",
      description: "Your personal statement has been saved successfully.",
    })
    setActiveTab("course")
  }

  function onCourseSubmit(values: z.infer<typeof courseSelectionSchema>) {
    toast({
      title: "Course selection saved",
      description: "Your course selection has been saved successfully.",
    })
    // Redirect to documents upload page
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Application Form</h1>
        <p className="text-gray-400">Complete all sections of your application</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal Details</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="statement">Personal Statement</TabsTrigger>
          <TabsTrigger value="course">Course Selection</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
              <CardDescription>Provide your personal information for your application</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...personalForm}>
                <form onSubmit={personalForm.handleSubmit(onPersonalSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={personalForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="bg-gray-900 border-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-gray-900 border-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={personalForm.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="bg-gray-900 border-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex space-x-4"
                            >
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem value="male" />
                                </FormControl>
                                <FormLabel className="font-normal">Male</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem value="female" />
                                </FormControl>
                                <FormLabel className="font-normal">Female</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <RadioGroupItem value="other" />
                                </FormControl>
                                <FormLabel className="font-normal">Other</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={personalForm.control}
                    name="nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nationality</FormLabel>
                        <FormControl>
                          <Input placeholder="Cambodian" {...field} className="bg-gray-900 border-gray-800" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} className="bg-gray-900 border-gray-800" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={personalForm.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Phnom Penh" {...field} className="bg-gray-900 border-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalForm.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input placeholder="Cambodia" {...field} className="bg-gray-900 border-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={personalForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+855 12 345 678" {...field} className="bg-gray-900 border-gray-800" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button type="submit">Save & Continue</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Education Details</CardTitle>
              <CardDescription>Provide information about your educational background</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...educationForm}>
                <form onSubmit={educationForm.handleSubmit(onEducationSubmit)} className="space-y-4">
                  <FormField
                    control={educationForm.control}
                    name="highSchool"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>High School Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phnom Penh High School"
                            {...field}
                            className="bg-gray-900 border-gray-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={educationForm.control}
                      name="graduationYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Graduation Year</FormLabel>
                          <FormControl>
                            <Input placeholder="2024" {...field} className="bg-gray-900 border-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={educationForm.control}
                      name="educationBoard"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Education Board</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-900 border-gray-800">
                                <SelectValue placeholder="Select education board" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cambodian_national">Cambodian National Board</SelectItem>
                              <SelectItem value="international_baccalaureate">International Baccalaureate</SelectItem>
                              <SelectItem value="cambridge">Cambridge International</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={educationForm.control}
                    name="grades"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grades/Scores</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Provide details of your grades or scores"
                            {...field}
                            className="min-h-[100px] bg-gray-900 border-gray-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={educationForm.control}
                    name="previousInstitution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Institution (if any)</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-gray-900 border-gray-800" />
                        </FormControl>
                        <FormDescription>
                          If you have attended any other educational institution, please provide details.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={educationForm.control}
                    name="previousQualification"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Qualification (if any)</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-gray-900 border-gray-800" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("personal")}>
                      Previous
                    </Button>
                    <Button type="submit">Save & Continue</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="statement">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Personal Statement</CardTitle>
              <CardDescription>Tell us about yourself and your aspirations</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...statementForm}>
                <form onSubmit={statementForm.handleSubmit(onStatementSubmit)} className="space-y-4">
                  <FormField
                    control={statementForm.control}
                    name="statement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Personal Statement</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about yourself, your background, interests, and experiences"
                            {...field}
                            className="min-h-[200px] bg-gray-900 border-gray-800"
                          />
                        </FormControl>
                        <FormDescription>
                          Minimum 100 characters. This is your opportunity to introduce yourself to the admissions
                          committee.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={statementForm.control}
                    name="whyFashion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why Fashion?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Explain why you are interested in studying fashion"
                            {...field}
                            className="min-h-[150px] bg-gray-900 border-gray-800"
                          />
                        </FormControl>
                        <FormDescription>
                          Minimum 50 characters. Describe your passion for fashion and why you want to study it.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={statementForm.control}
                    name="careerGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Career Goals</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your career aspirations in the fashion industry"
                            {...field}
                            className="min-h-[150px] bg-gray-900 border-gray-800"
                          />
                        </FormControl>
                        <FormDescription>
                          Minimum 50 characters. What are your long-term career goals in the fashion industry?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("education")}>
                      Previous
                    </Button>
                    <Button type="submit">Save & Continue</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="course">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Course Selection</CardTitle>
              <CardDescription>Select your preferred course and study options</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...courseForm}>
                <form onSubmit={courseForm.handleSubmit(onCourseSubmit)} className="space-y-4">
                  <FormField
                    control={courseForm.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-900 border-gray-800">
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="fashion_design">Bachelor of Fashion Design</SelectItem>
                            <SelectItem value="fashion_marketing">Bachelor of Fashion Marketing</SelectItem>
                            <SelectItem value="fashion_technology">Bachelor of Fashion Technology</SelectItem>
                            <SelectItem value="fashion_styling">Diploma in Fashion Styling</SelectItem>
                            <SelectItem value="textile_design">Diploma in Textile Design</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>Select the course you wish to apply for.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={courseForm.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Start Date</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-900 border-gray-800">
                              <SelectValue placeholder="Select start date" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="fall_2025">Fall 2025 (September)</SelectItem>
                            <SelectItem value="spring_2026">Spring 2026 (January)</SelectItem>
                            <SelectItem value="summer_2026">Summer 2026 (June)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={courseForm.control}
                    name="studyMode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Study Mode</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value="full_time" />
                              </FormControl>
                              <FormLabel className="font-normal">Full-time</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value="part_time" />
                              </FormControl>
                              <FormLabel className="font-normal">Part-time</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("statement")}>
                      Previous
                    </Button>
                    <Button type="submit">Save & Continue</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
