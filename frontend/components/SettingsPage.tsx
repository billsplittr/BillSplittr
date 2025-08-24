import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Settings, User, Bell, DollarSign, Palette } from "lucide-react";

export function SettingsPage() {
  const [defaultTip, setDefaultTip] = useState("15");
  const [currency, setCurrency] = useState("USD");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSaveSettings = () => {
    // Here you would typically save to localStorage or send to backend
    console.log("Settings saved:", {
      defaultTip,
      currency,
      notifications,
      darkMode,
      userName
    });
  };

  return (
    <div className="p-4 space-y-4">
      <div className="text-center pt-4">
        <h1 className="mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your BillSplitter experience</p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <User className="h-4 w-4" />
            Profile
          </CardTitle>
          <CardDescription className="text-xs">Manage your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="userName" className="text-sm">Display Name</Label>
            <Input
              id="userName"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="h-10"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <DollarSign className="h-4 w-4" />
            Bill Preferences
          </CardTitle>
          <CardDescription className="text-xs">Set your default bill splitting preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="defaultTip" className="text-sm">Default Tip Percentage (%)</Label>
            <Input
              id="defaultTip"
              type="number"
              placeholder="15"
              value={defaultTip}
              onChange={(e) => setDefaultTip(e.target.value)}
              className="h-10"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="currency" className="text-sm">Currency</Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD ($)</SelectItem>
                <SelectItem value="EUR">EUR (€)</SelectItem>
                <SelectItem value="GBP">GBP (£)</SelectItem>
                <SelectItem value="CAD">CAD (C$)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Palette className="h-4 w-4" />
            Appearance
          </CardTitle>
          <CardDescription className="text-xs">Customize how the app looks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="darkMode" className="text-sm">Dark Mode</Label>
              <p className="text-xs text-muted-foreground">
                Use dark theme throughout the app
              </p>
            </div>
            <Switch
              id="darkMode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Bell className="h-4 w-4" />
            Notifications
          </CardTitle>
          <CardDescription className="text-xs">Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications" className="text-sm">Push Notifications</Label>
              <p className="text-xs text-muted-foreground">
                Receive notifications about bill reminders
              </p>
            </div>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSaveSettings} className="w-full h-12" size="lg">
        <Settings className="h-4 w-4 mr-2" />
        Save Settings
      </Button>
    </div>
  );
}