// import { useReducer, useState } from 'react'
// import './App.css'

// function App() {
//   function reducer(state, action) {
//     if (action.type === "add") {
//       return { ...state, balance: state.balance + action.payload };
//     }
//     if (action.type === "sub") {
//       return { ...state, balance: state.balance - action.payload };
//     }
//     return state;
//   }

//   const [state, dispatch] = useReducer(reducer, { balance: 0 });
//   const [amount, setAmount] = useState(0);

//   const handleAdd = () => {
//     dispatch({ type: "add", payload: parseInt(amount) || 0 });
//     setAmount(0);
//   };

//   const handleSub = () => {
//     dispatch({ type: "sub", payload: parseInt(amount) || 0 });
//     setAmount(0);
//   };

//   return (
//     <div className="container">
//       <h1>Balance Manager</h1>
//       <div className="balance-display">
//         <h2>Current Balance: ${state.balance}</h2>
//       </div>
//       <div className="input-section">
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Enter amount"
//         />
//       </div>
//       <div className="button-section">
//         <button onClick={handleAdd}>Add Amount</button>
//         <button onClick={handleSub}>Subtract Amount</button>
//       </div>
//     </div>
//   );
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product/:id" element={<Products />} />
        <Route path="dash" element={<Dashboard />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;