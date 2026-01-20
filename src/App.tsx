import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TerminalMode from "./terminal/TerminalMode";
import GlobalBackground from "./components/Background";
import BottomNavBar from "./components/BottomNavBar";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <div className="w-full max-h-fit overflow-hidden text-foreground relative">
      {/* Background Pattern & Blobs */}
      {!terminalMode && <GlobalBackground />}

      {/* Navbar */}
      <Navbar terminalMode={terminalMode} setTerminalMode={setTerminalMode} />

      {/* Main View Switch */}
      {!terminalMode ? (
        <Routes>
          {/* Project Detail Route */}
          <Route path="/project/:projectName" element={<ProjectDetail />} />

          {/* Main Navigation Routes */}
          <Route path="*" element={
            !activeSection ? (
              <BottomNavBar />
            ) : (
              <></>
            )
          } />
        </Routes>
      ) : (
        <TerminalMode />
      )}
    </div>
  );
};

export default App;
