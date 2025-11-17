import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the birthday HTML page
    window.location.href = '/birthday.html';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="text-6xl animate-pulse">🎂</div>
        <p className="text-xl text-foreground">جاري التحميل...</p>
      </div>
    </div>
  );
};

export default Index;
