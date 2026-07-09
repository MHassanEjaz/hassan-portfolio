// import React from "react";
// import { CartProvider } from './components/CartContext';
// import { AuthProvider } from './components/AuthContext';
// import Header from "./components/Header";
// import Home from "./components/Hero";
// import About from "./components/About";
// import Services from './components/Services';
// import Projects from './components/Projects'; // Add this import
// import Footer from './components/Footer';
// // import { Prayer } from './components/Prayer';
// import './App.css';

// function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <div className="App">
//           <Header />
//           <main>
//             <Home />
//             <About />
//             <Services />
//             <Projects /> {/* Add Projects section */}
//             {/* <section className="prayer-section" id="prayer">
//               <Prayer />
//             </section> */}
//           </main>
          
//           <Footer />
//         </div>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;



import React from "react";
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';
import Header from "./components/Header";
import Home from "./components/Hero";
import About from "./components/About";
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Add this
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <main>
            <Home />
            <About />
            <Services />
            <Projects />
            <Contact /> {/* Add Contact section */}
          </main>
          
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;