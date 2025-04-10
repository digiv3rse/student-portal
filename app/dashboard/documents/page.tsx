"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { FileText, Upload, X, CheckCircle2, Eye } from "lucide-react"

export default function DocumentsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("documents")
  const [documents, setDocuments] = useState({
    idCard: null,
    transcript: null,
    certificate: null,
    recommendation: null,
  })
  const [portfolioItems, setPortfolioItems] = useState([])

  const handleDocumentUpload = (documentType, file) => {
    setDocuments({
      ...documents,
      [documentType]: file,
    })
    toast({
      title: "Document uploaded",
      description: `${file.name} has been uploaded successfully.`,
    })
  }

  const handlePortfolioUpload = (files) => {
    const newItems = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
    }))
    setPortfolioItems([...portfolioItems, ...newItems])
    toast({
      title: "Portfolio items uploaded",
      description: `${files.length} items have been uploaded successfully.`,
    })
  }

  const removePortfolioItem = (id) => {
    setPortfolioItems(portfolioItems.filter((item) => item.id !== id))
    toast({
      title: "Item removed",
      description: "Portfolio item has been removed.",
    })
  }

  const removeDocument = (documentType) => {
    setDocuments({
      ...documents,
      [documentType]: null,
    })
    toast({
      title: "Document removed",
      description: "Document has been removed.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documents & Portfolio</h1>
        <p className="text-gray-400">Upload required documents and your portfolio</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="documents">Required Documents</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
              <CardDescription>Upload all required documents for your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Identification</h3>
                <div className="rounded-lg border border-gray-800 p-4">
                  {!documents.idCard ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span>National ID Card or Passport</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          id="id-card"
                          className="hidden"
                          onChange={(e) => handleDocumentUpload("idCard", e.target.files[0])}
                        />
                        <Label
                          htmlFor="id-card"
                          className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-900 px-4 py-2 hover:bg-gray-800"
                        >
                          <Upload className="h-4 w-4" />
                          <span>Upload ID</span>
                        </Label>
                        <span className="text-sm text-gray-400">PDF, JPG or PNG (Max 5MB)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{documents.idCard.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => removeDocument("idCard")}>
                          <X className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Academic Records</h3>
                <div className="rounded-lg border border-gray-800 p-4">
                  {!documents.transcript ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span>Academic Transcript</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          id="transcript"
                          className="hidden"
                          onChange={(e) => handleDocumentUpload("transcript", e.target.files[0])}
                        />
                        <Label
                          htmlFor="transcript"
                          className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-900 px-4 py-2 hover:bg-gray-800"
                        >
                          <Upload className="h-4 w-4" />
                          <span>Upload Transcript</span>
                        </Label>
                        <span className="text-sm text-gray-400">PDF (Max 5MB)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{documents.transcript.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => removeDocument("transcript")}>
                          <X className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-lg border border-gray-800 p-4">
                  {!documents.certificate ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span>High School Certificate</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          id="certificate"
                          className="hidden"
                          onChange={(e) => handleDocumentUpload("certificate", e.target.files[0])}
                        />
                        <Label
                          htmlFor="certificate"
                          className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-900 px-4 py-2 hover:bg-gray-800"
                        >
                          <Upload className="h-4 w-4" />
                          <span>Upload Certificate</span>
                        </Label>
                        <span className="text-sm text-gray-400">PDF, JPG or PNG (Max 5MB)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{documents.certificate.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => removeDocument("certificate")}>
                          <X className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Additional Documents</h3>
                <div className="rounded-lg border border-gray-800 p-4">
                  {!documents.recommendation ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span>Letter of Recommendation (Optional)</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          id="recommendation"
                          className="hidden"
                          onChange={(e) => handleDocumentUpload("recommendation", e.target.files[0])}
                        />
                        <Label
                          htmlFor="recommendation"
                          className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-900 px-4 py-2 hover:bg-gray-800"
                        >
                          <Upload className="h-4 w-4" />
                          <span>Upload Letter</span>
                        </Label>
                        <span className="text-sm text-gray-400">PDF (Max 5MB)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{documents.recommendation.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => removeDocument("recommendation")}>
                          <X className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save & Continue</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio">
          <Card className="border-gray-800 bg-gray-950">
            <CardHeader>
              <CardTitle>Portfolio</CardTitle>
              <CardDescription>Upload your portfolio items to showcase your work and skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-dashed border-gray-800 p-8">
                <div className="flex flex-col items-center justify-center text-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload Portfolio Items</h3>
                  <p className="text-sm text-gray-400 mb-4">Drag and drop your files here, or click to browse</p>
                  <Input
                    type="file"
                    id="portfolio"
                    className="hidden"
                    multiple
                    accept="image/*,.pdf"
                    onChange={(e) => handlePortfolioUpload(e.target.files)}
                  />
                  <Label
                    htmlFor="portfolio"
                    className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-900 px-4 py-2 hover:bg-gray-800"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Browse Files</span>
                  </Label>
                  <p className="text-xs text-gray-400 mt-4">Supported formats: JPG, PNG, PDF (Max 10MB per file)</p>
                </div>
              </div>

              {portfolioItems.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Uploaded Items ({portfolioItems.length})</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {portfolioItems.map((item) => (
                      <div key={item.id} className="relative rounded-lg border border-gray-800 overflow-hidden">
                        <div className="aspect-square bg-gray-900">
                          {item.file.type.includes("image") ? (
                            <img
                              src={item.preview || "/placeholder.svg"}
                              alt="Portfolio item"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <FileText className="h-16 w-16 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="p-3">
                          <p className="truncate text-sm">{item.file.name}</p>
                          <p className="text-xs text-gray-400">{(item.file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-black/50"
                          onClick={() => removePortfolioItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save & Continue</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
