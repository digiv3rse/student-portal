import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"
import Link from "next/link"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-400">Overview of applications and admissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Data</Button>
          <Button>View Reports</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-gray-400">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-gray-400">8 new since yesterday</p>
          </CardContent>
        </Card>
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">185</div>
            <p className="text-xs text-gray-400">75% approval rate</p>
          </CardContent>
        </Card>
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20</div>
            <p className="text-xs text-gray-400">8% rejection rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>
        <TabsContent value="applications" className="space-y-4">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Application Trends</CardTitle>
              <CardDescription>Monthly application submissions</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] w-full flex items-center justify-center">
                <LineChart className="h-16 w-16 text-gray-400" />
                <span className="ml-4 text-gray-400">Application trend chart would appear here</span>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-gray-800 bg-gray-950">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Latest application submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-gray-800 pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="font-medium">Applicant #{247 - i + 1}</p>
                        <p className="text-sm text-gray-400">Fashion Design • 2 hours ago</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/applications/${247 - i + 1}`}>View</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-950">
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
                <CardDescription>Distribution by status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] w-full flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-gray-400" />
                  <span className="ml-4 text-gray-400">Status distribution chart would appear here</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="courses" className="space-y-4">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Course Popularity</CardTitle>
              <CardDescription>Applications by course</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] w-full flex items-center justify-center">
                <BarChart className="h-16 w-16 text-gray-400" />
                <span className="ml-4 text-gray-400">Course popularity chart would appear here</span>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-gray-800 bg-gray-950">
              <CardHeader>
                <CardTitle>Course Capacity</CardTitle>
                <CardDescription>Available spots by course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fashion Design</p>
                      <p className="text-sm text-gray-400">Bachelor's Degree</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">42/50</p>
                      <p className="text-sm text-gray-400">84% Full</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fashion Marketing</p>
                      <p className="text-sm text-gray-400">Bachelor's Degree</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">38/50</p>
                      <p className="text-sm text-gray-400">76% Full</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fashion Technology</p>
                      <p className="text-sm text-gray-400">Bachelor's Degree</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">25/40</p>
                      <p className="text-sm text-gray-400">62.5% Full</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fashion Styling</p>
                      <p className="text-sm text-gray-400">Diploma</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">18/30</p>
                      <p className="text-sm text-gray-400">60% Full</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-950">
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Quick actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" asChild>
                    <Link href="/admin/courses/new">Add New Course</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/admin/courses">Manage Courses</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/admin/courses/schedule">Update Schedule</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/admin/courses/capacity">Adjust Capacity</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="demographics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-gray-800 bg-gray-950">
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Applicants by age group</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] w-full flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-gray-400" />
                  <span className="ml-4 text-gray-400">Age distribution chart would appear here</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-950">
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Applicants by location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] w-full flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <p>Geographic map would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-950">
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
                <CardDescription>Applicants by gender</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] w-full flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-gray-400" />
                  <span className="ml-4 text-gray-400">Gender distribution chart would appear here</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-950">
              <CardHeader>
                <CardTitle>Educational Background</CardTitle>
                <CardDescription>Applicants by previous education</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] w-full flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-gray-400" />
                  <span className="ml-4 text-gray-400">Education background chart would appear here</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
