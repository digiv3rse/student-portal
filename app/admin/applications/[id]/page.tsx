"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, CheckCircle2, Download, FileText, Mail, Phone, Printer, User, X } from "lucide-react"

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [status, setStatus] = useState("Pending")
  const [feedback, setFeedback] = useState("")

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus)
    toast({
      title: "Status Updated",
      description: `Application status changed to ${newStatus}`,
    })
  }

  const handleSaveFeedback = () => {
    toast({
      title: "Feedback Saved",
      description: "Your feedback has been saved successfully",
    })
  }

  const handleExportPDF = () => {
    toast({
      title: "Exporting PDF",
      description: "Application is being exported as PDF",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/applications">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Application {params.id}</h1>
          <p className="text-gray-400">Review and process student application</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList>
              <TabsTrigger value="personal">Personal Details</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="statement">Personal Statement</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="border-gray-800 bg-gray-950">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Applicant's personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Full Name</h3>
                      <p className="mt-1">John Doe</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Date of Birth</h3>
                      <p className="mt-1">January 15, 1998</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Gender</h3>
                      <p className="mt-1">Male</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Nationality</h3>
                      <p className="mt-1">Cambodian</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Address</h3>
                    <p className="mt-1">123 Main Street, Phnom Penh, Cambodia</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>+855 12 345 678</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education">
              <Card className="border-gray-800 bg-gray-950">
                <CardHeader>
                  <CardTitle>Educational Background</CardTitle>
                  <CardDescription>Applicant's academic history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">High School</h3>
                    <p className="mt-1">Phnom Penh International School</p>
                    <p className="text-sm text-gray-400">Graduated: 2022</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Education Board</h3>
                    <p className="mt-1">International Baccalaureate</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Grades/Scores</h3>
                    <div className="mt-1 rounded-md bg-gray-900 p-3">
                      <p>Mathematics: A</p>
                      <p>English: A</p>
                      <p>Science: B</p>
                      <p>Art & Design: A+</p>
                      <p>History: B+</p>
                      <p>Overall GPA: 3.8/4.0</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Previous Institution (if any)</h3>
                    <p className="mt-1">N/A</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="statement">
              <Card className="border-gray-800 bg-gray-950">
                <CardHeader>
                  <CardTitle>Personal Statement</CardTitle>
                  <CardDescription>Applicant's statement and motivations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Personal Statement</h3>
                    <div className="mt-1 rounded-md bg-gray-900 p-3">
                      <p>
                        I am a passionate individual with a deep interest in fashion design. From a young age, I have
                        been fascinated by the way clothing can express identity and culture. Growing up in Cambodia, I
                        was surrounded by rich textiles and traditional craftsmanship, which inspired me to pursue a
                        career in fashion.
                      </p>
                      <p className="mt-2">
                        During high school, I participated in several fashion shows and design competitions, which
                        helped me develop my skills and understanding of the industry. I also volunteered at a local
                        textile workshop, where I learned traditional weaving techniques and how to work with various
                        fabrics.
                      </p>
                      <p className="mt-2">
                        I believe that the Phnom Penh Fashion Institute will provide me with the knowledge, skills, and
                        connections necessary to succeed in the fashion industry. I am particularly excited about the
                        opportunity to learn from experienced professionals and to collaborate with like-minded peers.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Why Fashion?</h3>
                    <div className="mt-1 rounded-md bg-gray-900 p-3">
                      <p>
                        Fashion is more than just clothing to me; it's a form of art and self-expression. I am drawn to
                        fashion design because it combines creativity with practicality, allowing me to create pieces
                        that are both beautiful and functional. I am particularly interested in sustainable fashion and
                        how traditional Cambodian techniques can be incorporated into modern designs.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Career Goals</h3>
                    <div className="mt-1 rounded-md bg-gray-900 p-3">
                      <p>
                        My long-term goal is to establish my own fashion brand that celebrates Cambodian heritage while
                        embracing contemporary design principles. I aim to create sustainable, ethically-produced
                        clothing that showcases the beauty of traditional Cambodian textiles and craftsmanship to a
                        global audience. I also hope to contribute to the growth of Cambodia's fashion industry by
                        mentoring young designers and promoting local talent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents">
              <Card className="border-gray-800 bg-gray-950">
                <CardHeader>
                  <CardTitle>Documents & Portfolio</CardTitle>
                  <CardDescription>Uploaded documents and portfolio items</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Required Documents</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg border border-gray-800 p-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium">National ID Card</p>
                            <p className="text-sm text-gray-400">ID_John_Doe.pdf</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border border-gray-800 p-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium">Academic Transcript</p>
                            <p className="text-sm text-gray-400">Transcript_John_Doe.pdf</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border border-gray-800 p-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium">High School Certificate</p>
                            <p className="text-sm text-gray-400">Certificate_John_Doe.pdf</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border border-gray-800 p-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium">Letter of Recommendation</p>
                            <p className="text-sm text-gray-400">Recommendation_John_Doe.pdf</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Portfolio Items</h3>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="overflow-hidden rounded-lg border border-gray-800">
                          <div className="aspect-square bg-gray-900">
                            <img
                              src={`/placeholder.svg?height=300&width=300&text=Portfolio+Item+${item}`}
                              alt={`Portfolio item ${item}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-2">
                            <p className="text-sm font-medium">Design {item}</p>
                            <p className="text-xs text-gray-400">Fashion sketch</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download All Portfolio Items
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Applicant</CardTitle>
              <CardDescription>Application summary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">John Doe</h3>
                  <p className="text-sm text-gray-400">Applied on April 10, 2025</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Application ID</span>
                  <span>{params.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Course</span>
                  <span>Fashion Design</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Start Date</span>
                  <span>Fall 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Study Mode</span>
                  <span>Full-time</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
              <CardDescription>Update application status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={status} onValueChange={handleStatusChange}>
                <SelectTrigger className="bg-gray-900 border-gray-800">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Under Review">Under Review</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                  <SelectItem value="Waitlisted">Waitlisted</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <label className="text-sm font-medium">Feedback/Notes</label>
                <Textarea
                  placeholder="Add feedback or notes about this application"
                  className="min-h-[100px] bg-gray-900 border-gray-800"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>

              <Button onClick={handleSaveFeedback} className="w-full">
                Save Feedback
              </Button>
            </CardContent>
          </Card>

          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>Application management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" onClick={handleExportPDF}>
                <Printer className="mr-2 h-4 w-4" />
                Export as PDF
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Contact Applicant
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-400"
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Approve
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-400"
                >
                  <X className="mr-2 h-4 w-4" />
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
