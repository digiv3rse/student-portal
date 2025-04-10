"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DownloadIcon, FileText, Search, SlidersHorizontal } from "lucide-react"

// Mock data for applications
const applications = [
  {
    id: "APP-247",
    name: "John Doe",
    email: "john.doe@example.com",
    course: "Fashion Design",
    status: "Pending",
    date: "2025-04-10",
  },
  {
    id: "APP-246",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    course: "Fashion Marketing",
    status: "Approved",
    date: "2025-04-09",
  },
  {
    id: "APP-245",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    course: "Fashion Technology",
    status: "Rejected",
    date: "2025-04-08",
  },
  {
    id: "APP-244",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    course: "Fashion Design",
    status: "Approved",
    date: "2025-04-07",
  },
  {
    id: "APP-243",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    course: "Fashion Styling",
    status: "Pending",
    date: "2025-04-06",
  },
  {
    id: "APP-242",
    name: "Sarah Brown",
    email: "sarah.brown@example.com",
    course: "Fashion Marketing",
    status: "Approved",
    date: "2025-04-05",
  },
  {
    id: "APP-241",
    name: "David Miller",
    email: "david.miller@example.com",
    course: "Fashion Technology",
    status: "Pending",
    date: "2025-04-04",
  },
  {
    id: "APP-240",
    name: "Lisa Taylor",
    email: "lisa.taylor@example.com",
    course: "Fashion Design",
    status: "Approved",
    date: "2025-04-03",
  },
  {
    id: "APP-239",
    name: "James Anderson",
    email: "james.anderson@example.com",
    course: "Fashion Styling",
    status: "Rejected",
    date: "2025-04-02",
  },
  {
    id: "APP-238",
    name: "Jennifer Thomas",
    email: "jennifer.thomas@example.com",
    course: "Fashion Marketing",
    status: "Pending",
    date: "2025-04-01",
  },
]

export default function ApplicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [courseFilter, setCourseFilter] = useState("all")

  // Filter applications based on search term and filters
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || app.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesCourse = courseFilter === "all" || app.course === courseFilter

    return matchesSearch && matchesStatus && matchesCourse
  })

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "text-green-500"
      case "rejected":
        return "text-red-500"
      default:
        return "text-yellow-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
          <p className="text-gray-400">Manage and review student applications</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Bulk Process
          </Button>
        </div>
      </div>

      <Card className="border-gray-800 bg-gray-950">
        <CardHeader>
          <CardTitle>Application Filters</CardTitle>
          <CardDescription>Filter and search applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, or ID"
                className="pl-8 bg-gray-900 border-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-gray-900 border-gray-800">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={courseFilter} onValueChange={setCourseFilter}>
              <SelectTrigger className="bg-gray-900 border-gray-800">
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="Fashion Design">Fashion Design</SelectItem>
                <SelectItem value="Fashion Marketing">Fashion Marketing</SelectItem>
                <SelectItem value="Fashion Technology">Fashion Technology</SelectItem>
                <SelectItem value="Fashion Styling">Fashion Styling</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-800 bg-gray-950">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-gray-900">
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((application) => (
                <TableRow key={application.id} className="border-gray-800 hover:bg-gray-900">
                  <TableCell>{application.id}</TableCell>
                  <TableCell>{application.name}</TableCell>
                  <TableCell>{application.email}</TableCell>
                  <TableCell>{application.course}</TableCell>
                  <TableCell>
                    <span className={getStatusColor(application.status)}>{application.status}</span>
                  </TableCell>
                  <TableCell>{application.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/applications/${application.id}`}>View</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
