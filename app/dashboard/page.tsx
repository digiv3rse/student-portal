import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle2, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-400">Welcome back, John Doe</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/application">Continue Application</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Application Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <span className="text-lg font-bold">In Progress</span>
            </div>
            <p className="mt-2 text-xs text-gray-400">Last updated: 2 days ago</p>
          </CardContent>
        </Card>
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Application Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">65%</span>
            </div>
            <Progress value={65} className="mt-2" />
            <p className="mt-2 text-xs text-gray-400">3 of 5 sections completed</p>
          </CardContent>
        </Card>
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Selected Course</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="text-lg font-bold">Fashion Design</span>
            </div>
            <p className="mt-2 text-xs text-gray-400">Bachelor's Degree - 4 years</p>
          </CardContent>
        </Card>
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="text-lg font-bold">Incomplete</span>
            </div>
            <p className="mt-2 text-xs text-gray-400">2 documents pending upload</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-gray-800 bg-gray-950">
          <CardHeader>
            <CardTitle>Application Timeline</CardTitle>
            <CardDescription>Track your application progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-black" />
                  </div>
                  <div className="h-full w-0.5 bg-gray-800 mt-1"></div>
                </div>
                <div>
                  <h3 className="font-medium">Account Created</h3>
                  <p className="text-sm text-gray-400">April 10, 2025</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-black" />
                  </div>
                  <div className="h-full w-0.5 bg-gray-800 mt-1"></div>
                </div>
                <div>
                  <h3 className="font-medium">Personal Details Submitted</h3>
                  <p className="text-sm text-gray-400">April 10, 2025</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-black" />
                  </div>
                  <div className="h-full w-0.5 bg-gray-800 mt-1"></div>
                </div>
                <div>
                  <h3 className="font-medium">Educational Details</h3>
                  <p className="text-sm text-gray-400">In progress</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="h-full w-0.5 bg-gray-800 mt-1"></div>
                </div>
                <div>
                  <h3 className="font-medium">Documents Upload</h3>
                  <p className="text-sm text-gray-400">Not started</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Application Submission</h3>
                  <p className="text-sm text-gray-400">Not started</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-gray-950">
          <CardHeader>
            <CardTitle>Important Notices</CardTitle>
            <CardDescription>Updates and announcements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                <h3 className="flex items-center gap-2 font-medium text-yellow-400">
                  <AlertCircle className="h-5 w-5" />
                  Application Deadline Approaching
                </h3>
                <p className="mt-2 text-sm">
                  The deadline for submitting your application is May 15, 2025. Please ensure all documents are uploaded
                  before the deadline.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <h3 className="font-medium">Portfolio Requirements Updated</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Please note that the portfolio requirements for Fashion Design have been updated. Check the
                  requirements section for details.
                </p>
                <div className="mt-3">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
                <h3 className="font-medium">Orientation Schedule</h3>
                <p className="mt-2 text-sm text-gray-400">
                  The orientation for new students will be held on June 5, 2025. Attendance is mandatory for all
                  admitted students.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
