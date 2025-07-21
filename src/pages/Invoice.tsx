import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Download, Printer, FileText } from "lucide-react";

declare global {
  interface Window {
    html2pdf: any;
  }
}

const Invoice = () => {
  // Invoice form state
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    date: new Date().toISOString().split('T')[0],
    to: "",
    description: "",
    amount: "",
    paymentTerms: "Net 30 days"
  });

  // Letterhead content state
  const [letterContent, setLetterContent] = useState(`<h2>Dear Valued Client,</h2>

<p>We hope this letter finds you well. We are writing to inform you about our latest security infrastructure services that can help protect your organization from emerging cyber threats.</p>

<p>Our comprehensive security solutions include:</p>
<ul>
  <li>Advanced threat detection and monitoring</li>
  <li>Network security assessment</li>
  <li>Incident response planning</li>
  <li>Security awareness training</li>
</ul>

<p>We would be delighted to discuss how we can enhance your security posture.</p>

<p>Best regards,<br>
The Infradefend Team</p>`);

  // Engagement Letter state
  const [engagementData, setEngagementData] = useState({
    clientName: "",
    projectTitle: "",
    startDate: new Date().toISOString().split('T')[0],
    endDate: "",
    scope: "",
    deliverables: "",
    timeline: "",
    terms: "This engagement is subject to our standard terms and conditions."
  });

  const handleInvoiceChange = (field: string, value: string) => {
    setInvoiceData(prev => ({ ...prev, [field]: value }));
  };

  const handleEngagementChange = (field: string, value: string) => {
    setEngagementData(prev => ({ ...prev, [field]: value }));
  };

  const downloadPDF = async (elementId: string, filename: string) => {
    if (typeof window !== 'undefined' && window.html2pdf) {
      const element = document.getElementById(elementId);
      const opt = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      window.html2pdf().set(opt).from(element).save();
    } else {
      // Fallback: open print dialog
      window.print();
    }
  };

  const printDocument = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const printWindow = window.open('', '', 'height=600,width=800');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<style>body{font-family:Arial,sans-serif;margin:20px;}</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(element.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Load html2pdf.js */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Infradefend Document Generator
                </h1>
                <p className="text-muted-foreground">Professional invoices and letterheads</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="invoice" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-lg">
            <TabsTrigger value="invoice" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Invoice</span>
            </TabsTrigger>
            <TabsTrigger value="letterhead" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Letterhead</span>
            </TabsTrigger>
            <TabsTrigger value="engagement" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Engagement Letter</span>
            </TabsTrigger>
          </TabsList>

          {/* Invoice Tab */}
          <TabsContent value="invoice" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Invoice Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Invoice Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Invoice Number</label>
                      <Input
                        value={invoiceData.invoiceNumber}
                        onChange={(e) => handleInvoiceChange('invoiceNumber', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Date</label>
                      <Input
                        type="date"
                        value={invoiceData.date}
                        onChange={(e) => handleInvoiceChange('date', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Bill To</label>
                    <Input
                      placeholder="Client Name or Company"
                      value={invoiceData.to}
                      onChange={(e) => handleInvoiceChange('to', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea
                      placeholder="Service description..."
                      value={invoiceData.description}
                      onChange={(e) => handleInvoiceChange('description', e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Amount ($)</label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={invoiceData.amount}
                        onChange={(e) => handleInvoiceChange('amount', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Payment Terms</label>
                      <Input
                        value={invoiceData.paymentTerms}
                        onChange={(e) => handleInvoiceChange('paymentTerms', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Invoice Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div id="invoice-preview" className="bg-background p-6 border rounded-lg shadow-sm min-h-[500px] print:shadow-none print:border-none print:p-4">
                    {/* Invoice Header */}
                    <div className="flex justify-between items-start mb-8 print:mb-6">
                      <div>
                        <h1 className="text-3xl font-bold text-primary mb-2">INFRADEFEND</h1>
                        <p className="text-muted-foreground text-sm mb-1">Security Infrastructure Solutions</p>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Mumbai, Maharashtra, India</p>
                          <p>Phone: +91 8369645695</p>
                          <p>Email: contact@infradefend.com</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <h2 className="text-3xl font-bold text-foreground mb-3">INVOICE</h2>
                        <p className="text-muted-foreground text-lg">#{invoiceData.invoiceNumber}</p>
                        <p className="text-muted-foreground">{new Date(invoiceData.date).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {/* Bill To */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Bill To:</h3>
                      <p className="text-gray-700">{invoiceData.to || "Client Name"}</p>
                    </div>

                    {/* Invoice Details */}
                    <div className="border-t border-b border-gray-200 py-4 mb-6">
                      <div className="grid grid-cols-4 gap-4 font-semibold text-gray-800 mb-2">
                        <div>Description</div>
                        <div>Qty</div>
                        <div>Rate</div>
                        <div className="text-right">Total</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-gray-700">
                        <div>{invoiceData.description || "Service description"}</div>
                        <div>1</div>
                        <div>${invoiceData.amount || "0.00"}</div>
                        <div className="text-right font-semibold">${invoiceData.amount || "0.00"}</div>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-end mb-8">
                      <div className="w-64">
                        <div className="flex justify-between py-2 border-b">
                          <span>Subtotal:</span>
                          <span>${invoiceData.amount || "0.00"}</span>
                        </div>
                        <div className="flex justify-between py-2 font-bold text-lg">
                          <span>Total:</span>
                          <span>${invoiceData.amount || "0.00"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Terms */}
                    <div className="text-sm text-gray-600">
                      <p><strong>Payment Terms:</strong> {invoiceData.paymentTerms}</p>
                      <p className="mt-2">Thank you for your business!</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-4">
                    <Button 
                      onClick={() => downloadPDF('invoice-preview', `invoice-${invoiceData.invoiceNumber}.pdf`)}
                      className="flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => printDocument('invoice-preview')}
                      className="flex items-center space-x-2"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Letterhead Tab */}
          <TabsContent value="letterhead" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Letter Content Editor */}
              <Card>
                <CardHeader>
                  <CardTitle>Letter Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">HTML Content</label>
                      <Textarea
                        value={letterContent}
                        onChange={(e) => setLetterContent(e.target.value)}
                        rows={20}
                        className="font-mono text-sm"
                        placeholder="Enter your letter content using HTML..."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Letterhead Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div id="letterhead-preview" className="bg-background border rounded-lg shadow-sm min-h-[600px] print:shadow-none print:border-none print:p-0">
                    {/* Letterhead Header */}
                    <div className="border-b-2 border-primary p-6 mb-6 print:p-4 print:mb-4">
                      <div className="flex items-center justify-between print:flex-col print:items-start print:space-y-4">
                        <div>
                          <h1 className="text-3xl font-bold text-primary mb-2">INFRADEFEND</h1>
                          <p className="text-muted-foreground">Security Infrastructure Solutions</p>
                        </div>
                        <div className="text-right print:text-left text-sm text-muted-foreground">
                          <p>Mumbai, Maharashtra, India</p>
                          <p>Phone: +91 8369645695</p>
                          <p>Email: contact@infradefend.com</p>
                        </div>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="px-6 mb-6">
                      <p className="text-right text-gray-600">{new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>

                    {/* Letter Content */}
                    <div className="px-6 pb-6">
                      <div 
                        className="prose prose-sm max-w-none text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: letterContent }}
                      />
                    </div>

                    {/* Footer */}
                    <div className="border-t border-border p-6 mt-8 text-center text-sm text-muted-foreground print:p-4 print:mt-6">
                      <p>INFRADEFEND | Protecting Your Digital Infrastructure</p>
                      <p>Mumbai, Maharashtra, India | contact@infradefend.com | +91 8369645695</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-4">
                    <Button 
                      onClick={() => downloadPDF('letterhead-preview', `letterhead-${Date.now()}.pdf`)}
                      className="flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => printDocument('letterhead-preview')}
                      className="flex items-center space-x-2"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Engagement Letter Tab */}
          <TabsContent value="engagement" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Engagement Letter Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Letter Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Client Name/Company</label>
                    <Input
                      placeholder="Client Name or Company"
                      value={engagementData.clientName}
                      onChange={(e) => handleEngagementChange('clientName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Title</label>
                    <Input
                      placeholder="Security Assessment Project"
                      value={engagementData.projectTitle}
                      onChange={(e) => handleEngagementChange('projectTitle', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Start Date</label>
                      <Input
                        type="date"
                        value={engagementData.startDate}
                        onChange={(e) => handleEngagementChange('startDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">End Date</label>
                      <Input
                        type="date"
                        value={engagementData.endDate}
                        onChange={(e) => handleEngagementChange('endDate', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Scope of Work</label>
                    <Textarea
                      placeholder="Define the scope of work..."
                      value={engagementData.scope}
                      onChange={(e) => handleEngagementChange('scope', e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Deliverables</label>
                    <Textarea
                      placeholder="List expected deliverables..."
                      value={engagementData.deliverables}
                      onChange={(e) => handleEngagementChange('deliverables', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Timeline</label>
                    <Textarea
                      placeholder="Project timeline and milestones..."
                      value={engagementData.timeline}
                      onChange={(e) => handleEngagementChange('timeline', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Terms & Conditions</label>
                    <Textarea
                      value={engagementData.terms}
                      onChange={(e) => handleEngagementChange('terms', e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Engagement Letter Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div id="engagement-preview" className="bg-background border rounded-lg shadow-sm min-h-[600px] print:shadow-none print:border-none print:p-0">
                    {/* Header */}
                    <div className="border-b-2 border-primary p-6 mb-6 print:p-4 print:mb-4">
                      <div className="flex items-center justify-between print:flex-col print:items-start print:space-y-4">
                        <div>
                          <h1 className="text-3xl font-bold text-primary mb-2">INFRADEFEND</h1>
                          <p className="text-muted-foreground">Security Infrastructure Solutions</p>
                        </div>
                        <div className="text-right print:text-left text-sm text-muted-foreground">
                          <p>Mumbai, Maharashtra, India</p>
                          <p>Phone: +91 8369645695</p>
                          <p>Email: contact@infradefend.com</p>
                        </div>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="px-6 mb-6">
                      <p className="text-right text-muted-foreground">{new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>

                    {/* Letter Content */}
                    <div className="px-6 pb-6 space-y-6">
                      <div className="text-center">
                        <h2 className="text-2xl font-bold text-foreground mb-4">ENGAGEMENT LETTER</h2>
                        <h3 className="text-xl text-muted-foreground">
                          {engagementData.projectTitle || "Security Assessment Project"}
                        </h3>
                      </div>

                      <div>
                        <p className="text-foreground mb-4">
                          <strong>To:</strong> {engagementData.clientName || "[Client Name]"}
                        </p>
                        
                        <p className="text-foreground leading-relaxed">
                          We are pleased to confirm our understanding of the services we are to provide for your organization. This letter sets forth the terms of our engagement.
                        </p>
                      </div>

                      {engagementData.scope && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Scope of Work:</h4>
                          <p className="text-foreground leading-relaxed whitespace-pre-wrap">{engagementData.scope}</p>
                        </div>
                      )}

                      {engagementData.deliverables && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Deliverables:</h4>
                          <p className="text-foreground leading-relaxed whitespace-pre-wrap">{engagementData.deliverables}</p>
                        </div>
                      )}

                      {engagementData.timeline && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Timeline:</h4>
                          <p className="text-foreground leading-relaxed whitespace-pre-wrap">{engagementData.timeline}</p>
                        </div>
                      )}

                      {(engagementData.startDate || engagementData.endDate) && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Project Duration:</h4>
                          <p className="text-foreground">
                            {engagementData.startDate && `Start Date: ${new Date(engagementData.startDate).toLocaleDateString()}`}
                            {engagementData.startDate && engagementData.endDate && " | "}
                            {engagementData.endDate && `End Date: ${new Date(engagementData.endDate).toLocaleDateString()}`}
                          </p>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Terms & Conditions:</h4>
                        <p className="text-foreground leading-relaxed whitespace-pre-wrap">{engagementData.terms}</p>
                      </div>

                      <div className="pt-8">
                        <p className="text-foreground mb-6">
                          Please sign and return one copy of this letter to indicate your acknowledgment and acceptance of the terms of our engagement.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 mt-12">
                          <div>
                            <div className="border-b border-border w-48 mb-2"></div>
                            <p className="text-sm text-muted-foreground">INFRADEFEND Representative</p>
                            <p className="text-sm text-muted-foreground">Date: ___________</p>
                          </div>
                          <div>
                            <div className="border-b border-border w-48 mb-2"></div>
                            <p className="text-sm text-muted-foreground">Client Representative</p>
                            <p className="text-sm text-muted-foreground">Date: ___________</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-border p-6 mt-8 text-center text-sm text-muted-foreground print:p-4 print:mt-6">
                      <p>INFRADEFEND | Protecting Your Digital Infrastructure</p>
                      <p>Mumbai, Maharashtra, India | contact@infradefend.com | +91 8369645695</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-4">
                    <Button 
                      onClick={() => downloadPDF('engagement-preview', `engagement-letter-${Date.now()}.pdf`)}
                      className="flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => printDocument('engagement-preview')}
                      className="flex items-center space-x-2"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Invoice;