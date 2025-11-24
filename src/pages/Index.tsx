import Header from "@/components/Header";
import LoginCard from "@/components/LoginCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <LoginCard />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
