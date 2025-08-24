import { Button } from "./ui/button";
import { Home, History, Settings, Camera, Edit3 } from "lucide-react";

interface NavigationProps {
  currentPage: 'home' | 'history' | 'settings';
  onPageChange: (page: 'home' | 'history' | 'settings') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center px-4 py-2 safe-area-pb">
        <Button
          variant="ghost"
          onClick={() => onPageChange('home')}
          className={`flex flex-col items-center gap-1 h-auto py-3 px-4 rounded-none ${
            currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Button>
        
        <Button
          variant="ghost"
          onClick={() => onPageChange('history')}
          className={`flex flex-col items-center gap-1 h-auto py-3 px-4 rounded-none ${
            currentPage === 'history' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <History className="h-5 w-5" />
          <span className="text-xs">History</span>
        </Button>
        
        <Button
          variant="ghost"
          onClick={() => onPageChange('settings')}
          className={`flex flex-col items-center gap-1 h-auto py-3 px-4 rounded-none ${
            currentPage === 'settings' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <Settings className="h-5 w-5" />
          <span className="text-xs">Settings</span>
        </Button>
      </div>
    </nav>
  );
}