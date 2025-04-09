import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NotFound from "@/components/not-found";
import Home from "@/pages/home/home";
import { Route, Routes } from "react-router-dom";
import { PodcastsPage } from "./pages/podcasts/podcastsPage";
import { PodcastPreview } from "./pages/podcasts/podcastPreview";

function App() {
  return (
    <div className="min-h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/podcast/:id" element={<PodcastPreview/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
