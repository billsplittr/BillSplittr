import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Camera, Edit3 } from "lucide-react";

export function HomePage() {
  const handleUploadBill = () => {
    // TODO: Implement camera functionality
    console.log("Upload bill clicked - camera functionality to be implemented");
  };

  const handleManualEntry = () => {
    // TODO: Implement manual entry
    console.log("Manual entry clicked - navigation to manual entry to be implemented");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1>BillSplitter</h1>
        <p className="text-muted-foreground">Choose how to add your bill</p>
      </div>

      <div className="w-full max-w-sm space-y-6">
        <Card 
          className="p-8 cursor-pointer transition-all hover:shadow-md active:scale-[0.98]"
          onClick={handleUploadBill}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full bg-primary text-primary-foreground">
              <Camera className="h-8 w-8" />
            </div>
            <div className="text-center space-y-1">
              <h3>Upload Bill</h3>
              <p className="text-muted-foreground text-sm">
                Take a photo of your receipt
              </p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-8 cursor-pointer transition-all hover:shadow-md active:scale-[0.98]"
          onClick={handleManualEntry}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full bg-secondary text-secondary-foreground">
              <Edit3 className="h-8 w-8" />
            </div>
            <div className="text-center space-y-1">
              <h3>Manual Entry</h3>
              <p className="text-muted-foreground text-sm">
                Enter bill details manually
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}