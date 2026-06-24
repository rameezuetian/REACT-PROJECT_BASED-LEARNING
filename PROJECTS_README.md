# React Projects Collection

A comprehensive collection of React learning projects built with Vite, demonstrating various React concepts and libraries.

---

## Projects Overview

### **01. 03Reciepeapp** - Recipe Application
- **Purpose:** Recipe browsing and management app
- **Tech Stack:** React + Vite
- **Features:** Display and manage recipes
- **Status:** Practice project

### **02. 04todoapp** - Todo Application
- **Purpose:** Simple task management
- **Tech Stack:** React + Vite
- **Features:** Create, display, and manage todos
- **Components:** Todo list and input components
- **Status:** Practice project

### **03. 05passwordgenerator** - Password Generator
- **Purpose:** Generate random secure passwords
- **Tech Stack:** React + Vite
- **Features:** Password generation with customizable options
- **Assets:** Includes assets folder
- **Status:** Practice project

### **04. 06currcen (Currency Converter)** - Currency Converter
- **Purpose:** Convert between different currencies
- **Tech Stack:** React + Vite + Custom Hooks
- **Features:** Real-time currency conversion
- **Structure:** 
  - `components/` - UI components
  - `hooks/` - Custom React hooks
  - `assets/` - Static files
- **Status:** Practice project

### **05. 07reactrouter** - React Router Demo
- **Purpose:** Demonstrate React Router implementation
- **Tech Stack:** React Router + Vite
- **Files:**
  - `Layout.jsx` - Main layout component
  - `components/` - Route components
  - `assets/` - Static files
- **Status:** Practice project

### **06. 08miniContext** - Mini Context API
- **Purpose:** Learn React Context API basics
- **Tech Stack:** React Context API + Vite
- **Features:**
  - `context/` - Context setup
  - `components/` - Components using context
  - `assets/` - Static files
- **Status:** Practice project

### **07. 09themechanger** - Theme Changer
- **Purpose:** Implement light/dark theme switching
- **Tech Stack:** React Context API + Vite
- **Features:**
  - `context/` - Theme context management
  - `components/` - Theme-aware components
  - `assets/` - Static files
- **Status:** Practice project

### **08. 10Apicontext** - API with Context
- **Purpose:** Combine Context API with API calls
- **Tech Stack:** React Context API + Vite
- **Features:**
  - API data management via Context
  - Async operations
- **Status:** Practice project

### **09. 11reduxtoolkittodo** - Redux Toolkit Todo
- **Purpose:** State management with Redux Toolkit
- **Tech Stack:** Redux Toolkit + React + Vite
- **Features:**
  - Redux slices for todo management
  - Redux DevTools integration
- **Status:** Practice project

### **10. 12MegaBlog** - Mega Blog Project
- **Purpose:** Comprehensive blog application
- **Tech Stack:** React + Vite (Full-featured project)
- **Features:**
  - Blog post management
  - Advanced UI components
- **Status:** Main project

### **11. 13ReactRouter** - Advanced React Router
- **Purpose:** Advanced routing patterns
- **Tech Stack:** React Router + Vite
- **Features:**
  - Complex routing scenarios
  - Dynamic routes
- **Status:** Practice project

### **12. 14ContextApi - Context Auth App** ✅ FIXED
- **Purpose:** Authentication with Context API
- **Tech Stack:** React Context API + Vite
- **Features:**
  - User authentication state management
  - Protected components based on auth state
- **Components:**
  - `Navbar.jsx` - Shows auth status
  - `Login.jsx` - Login button with mock user
  - `Dashboard.jsx` - User-specific dashboard
  - `Logout.jsx` - Logout functionality
- **Context:** `AuthContext.jsx` - Global auth state
- **Status:** ✅ Errors fixed

### **13. 15reductolkit - Redux Toolkit App** ✅ FIXED
- **Purpose:** Redux Toolkit state management
- **Tech Stack:** Redux Toolkit + React-Redux + Vite
- **Features:**
  - Counter slice (increment, decrement, reset)
  - Auth slice (login, logout)
  - Redux DevTools support
- **Structure:**
  - `app/store.js` - Redux store configuration
  - `features/auth/` - Auth slice
  - `features/counter/` - Counter slice
  - `components/` - Connected components
- **Slices:**
  - Auth: login, logout actions
  - Counter: increment, decrement, reset actions
- **Status:** ✅ Errors fixed (changed .reducers to .reducer)

---

## Common Technology Stack

All projects use:
- **Build Tool:** Vite
- **React Version:** 19.2.7
- **Node Modules:** Included (package-lock.json exists)
- **ESLint:** Configured for code quality
- **Package Manager:** npm

---

## Project Categories

### State Management Learning Path
1. **08miniContext** - Basic Context API
2. **09themechanger** - Context with features
3. **14ContextApi** - Context with authentication
4. **11reduxtoolkittodo** - Redux basics
5. **15reductolkit** - Redux Toolkit advanced

### Feature-Based Projects
1. **04todoapp** - Task management
2. **05passwordgenerator** - Utility tool
3. **06currcen** - API integration
4. **03Reciepeapp** - Data display

### Routing Projects
1. **07reactrouter** - Intro to routing
2. **13ReactRouter** - Advanced routing

### Specialized Projects
1. **12MegaBlog** - Full-featured application
2. **10Apicontext** - API data management

---

## Getting Started

### Installation & Running
1. Navigate to any project folder
```bash
cd 15reductolkit/redux-app  # Example
npm install
npm run dev
```

2. The development server runs on `http://localhost:5173` (default Vite port)

### Build for Production
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

---

## Git Configuration
A `.git` folder exists in the root, indicating version control is initialized.

---

## Recent Fixes Applied

### 14ContextApi (context-auth-app)
**Error:** Incorrect Context.Provider reference and logout function scope
- ✅ Fixed: Moved logout function inside provider
- ✅ Fixed: Changed `AuthProvider.Provider` to `AuthContext.Provider`

### 15reductolkit (redux-app)
**Error:** Incorrect slice exports
- ✅ Fixed authSlice.js: `.reducers` → `.reducer`
- ✅ Fixed counterSlice.js: `.reducers` → `.reducer`

---

## Quick Reference

| Project | Type | Key Concept |
|---------|------|-------------|
| 03Reciepeapp | App | Basic React |
| 04todoapp | App | Component State |
| 05passwordgenerator | Tool | Utility Function |
| 06currcen | App | API + Hooks |
| 07reactrouter | Demo | React Router |
| 08miniContext | Demo | Context API |
| 09themechanger | App | Context + Theme |
| 10Apicontext | App | Context + API |
| 11reduxtoolkittodo | App | Redux |
| 12MegaBlog | App | Full Stack |
| 13ReactRouter | Demo | Advanced Routing |
| 14ContextApi | App | Context + Auth ✅ |
| 15reductolkit | App | Redux Toolkit ✅ |

---

**Last Updated:** 2026-06-24

