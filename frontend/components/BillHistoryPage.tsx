import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Users, DollarSign, Trash2 } from "lucide-react";

// Mock data for demonstration
const mockBills = [
  {
    id: 1,
    name: "Dinner at Tony's",
    amount: 120.50,
    people: 4,
    tipPercentage: 18,
    date: "2025-08-18",
    perPerson: 36.15
  },
  {
    id: 2,
    name: "Coffee Meeting",
    amount: 24.80,
    people: 2,
    tipPercentage: 15,
    date: "2025-08-17",
    perPerson: 14.26
  },
  {
    id: 3,
    name: "Group Lunch",
    amount: 85.30,
    people: 6,
    tipPercentage: 20,
    date: "2025-08-15",
    perPerson: 17.07
  },
  {
    id: 4,
    name: "Pizza Night",
    amount: 45.60,
    people: 3,
    tipPercentage: 15,
    date: "2025-08-12",
    perPerson: 17.48
  }
];

export function BillHistoryPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="p-4 space-y-4">
      <div className="text-center pt-4">
        <h1 className="mb-2">Bill History</h1>
        <p className="text-muted-foreground">View your past bill splits</p>
      </div>

      {mockBills.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <DollarSign className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="mb-2">No bills yet</h3>
            <p className="text-muted-foreground text-center">
              Start splitting bills to see your history here
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {mockBills.map((bill) => (
            <Card key={bill.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base truncate">{bill.name}</CardTitle>
                    <CardDescription className="flex items-center gap-3 mt-1 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(bill.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {bill.people} people
                      </span>
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="ml-2 h-8 w-8 p-0">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Bill Amount</p>
                    <p className="text-sm">${bill.amount.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tip</p>
                    <p className="text-sm">{bill.tipPercentage}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Total</p>
                    <p className="text-sm">${(bill.amount * (1 + bill.tipPercentage / 100)).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Per Person</p>
                    <Badge variant="secondary" className="text-xs">
                      ${bill.perPerson.toFixed(2)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}