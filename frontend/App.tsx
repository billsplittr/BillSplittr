import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { BillHistoryPage } from "./components/BillHistoryPage";
import { SettingsPage } from "./components/SettingsPage";

type PageType = 'home' | 'history' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'history':
        return <BillHistoryPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Main content with bottom padding for navigation */}
      <main className="pb-20">
        {renderCurrentPage()}
      </main>
      
      {/* Bottom navigation */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}