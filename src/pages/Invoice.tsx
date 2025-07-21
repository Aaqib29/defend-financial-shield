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

  const handleInvoiceChange = (field: string, value: string) => {
    setInvoiceData(prev => ({ ...prev, [field]: value }));
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
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="invoice" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Invoice</span>
            </TabsTrigger>
            <TabsTrigger value="letterhead" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Letterhead</span>
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
                  <div id="invoice-preview" className="bg-white p-6 border rounded-lg shadow-sm min-h-[500px]">
                    {/* Invoice Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-blue-600">INFRADEFEND</h1>
                        <p className="text-gray-600">Security Infrastructure Solutions</p>
                      </div>
                      <div className="text-right">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">INVOICE</h2>
                        <p className="text-gray-600">#{invoiceData.invoiceNumber}</p>
                        <p className="text-gray-600">{new Date(invoiceData.date).toLocaleDateString()}</p>
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
                  <div id="letterhead-preview" className="bg-white border rounded-lg shadow-sm min-h-[600px]">
                    {/* Letterhead Header */}
                    <div className="border-b-2 border-blue-600 p-6 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                            <FileText className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h1 className="text-2xl font-bold text-blue-600">INFRADEFEND</h1>
                            <p className="text-gray-600">Security Infrastructure Solutions</p>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <p>123 Security Street</p>
                          <p>Cyber City, CC 12345</p>
                          <p>Phone: (555) 123-4567</p>
                          <p>Email: info@infradefend.com</p>
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
                    <div className="border-t border-gray-200 p-6 mt-8 text-center text-sm text-gray-600">
                      <p>INFRADEFEND | Protecting Your Digital Infrastructure</p>
                      <p>www.infradefend.com | info@infradefend.com | (555) 123-4567</p>
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
        </Tabs>
      </div>
    </div>
  );
};

export default Invoice;