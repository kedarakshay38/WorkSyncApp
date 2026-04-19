# WorkSync – Team Collaboration Dashboard

## Overview
A modern SaaS-style dashboard (like Jira/Slack) to make you interview-ready for 3+ year React roles.

---

## Tech Stack
- React 19 + Vite
- Tailwind CSS
- React Router v6+
- Axios (added later when we need HTTP calls)
- TanStack React Query (added later when we need data fetching)
- Context API

---

## Folder Structure

```
src/
 ├── app/            → App-level setup (providers, config)
 ├── components/     → Shared/reusable UI components (Button, Modal, etc.)
 ├── features/       → Feature-specific code grouped together
 │    ├── auth/
 │    ├── projects/
 │    ├── tasks/
 │    ├── chat/
 │    └── analytics/
 ├── hooks/          → Custom React hooks (reusable logic)
 ├── services/       → API calls (Axios client, endpoint functions)
 ├── context/        → React Context providers (global state)
 ├── layouts/        → Page layout wrappers (Sidebar + Navbar + Content)
 ├── pages/          → Route-level page components
 ├── routes/         → Route definitions and config
 ├── utils/          → Helper functions (formatDate, etc.)
 └── main.jsx        → App entry point
```

---

## Rules
- Keep components small (one job per component)
- Follow folder structure strictly
- Separate logic from UI
- Write reusable code
- Skip what you don't need yet — add it when you use it

---

## Development Phases

Phases are sorted: Easy → Medium → Hard.
Each phase builds on the previous one without breaking anything.

---

### EASY PHASES (Learning React basics)

---

#### Phase 1: Placeholder Pages

**What you'll learn:**
- JSX — the HTML-like syntax React uses
- Components — reusable building blocks (like functions that return UI)
- How to export/import components between files

**What is a Component?**
A component is just a JavaScript function that returns JSX (HTML-like code).
React renders whatever you return from that function onto the screen.

**Tasks:**
1. Create these files in `src/pages/`, each exporting a component that returns a simple `<h1>`:
   - `Login.jsx` → `<h1>Login</h1>`
   - `Dashboard.jsx` → `<h1>Dashboard</h1>`
   - `Projects.jsx` → `<h1>Projects</h1>`
   - `Tasks.jsx` → `<h1>Tasks</h1>`
   - `Chat.jsx` → `<h1>Chat</h1>`
   - `Analytics.jsx` → `<h1>Analytics</h1>`

2. Delete `src/App.css` (we use Tailwind now, no need for this file)

**Example of a page component:**
```jsx
function Login() {
  return <h1>Login</h1>;
}
export default Login;
```

---

#### Phase 2: Routing (Page Navigation)

**What you'll learn:**
- React Router — how React apps navigate between pages without full page reload
- `<BrowserRouter>` — enables routing in your app
- `<Routes>` + `<Route>` — maps URL paths to components
- Why React is a "Single Page App" (SPA) — only one HTML page, JS swaps content

**What is Routing?**
In a normal website, clicking a link loads a whole new HTML page from the server.
In React, routing swaps components in/out without reloading — it's instant.

**Tasks:**
1. Create `src/routes/AppRoutes.jsx`:
   - Import `BrowserRouter`, `Routes`, `Route` from `react-router-dom`
   - Import all your page components
   - Map these routes:
     - `/login` → Login
     - `/` → Dashboard
     - `/projects` → Projects
     - `/tasks` → Tasks
     - `/chat` → Chat
     - `/analytics` → Analytics

2. Update `src/App.jsx`:
   - Remove ALL the Vite boilerplate code
   - Import and render `<AppRoutes />`

3. Update `src/main.jsx`:
   - Remove the `import './App.css'` line if it exists

4. Test: Run `npm run dev`, visit different URLs like `/login`, `/projects` — you should see the `<h1>` text change.

---

#### Phase 3: Layout (Sidebar + Navbar)

**What you'll learn:**
- Component composition — building UI from smaller pieces
- `<Outlet />` — a placeholder where child routes render their content
- Layouts — wrapping multiple pages with shared UI (sidebar, navbar)
- Tailwind CSS basics — utility classes for styling (`flex`, `bg-gray-800`, `p-4`, etc.)
- `<Link>` vs `<a>` — Link navigates without reload, `<a>` reloads the page

**What is a Layout?**
A layout is a wrapper component. It shows the sidebar and navbar on every page,
and the `<Outlet />` slot shows the current page's content.

```
┌─────────────────────────────────┐
│           Navbar                │
├──────┬──────────────────────────┤
│      │                          │
│ Side │     <Outlet />           │
│ bar  │   (page content here)    │
│      │                          │
├──────┴──────────────────────────┤
```

**Tasks:**
1. Create `src/layouts/MainLayout.jsx`:
   - Import `Outlet` from `react-router-dom`
   - Build a layout with:
     - A **sidebar** on the left (fixed width, dark background)
     - A **navbar** at the top
     - A **content area** that renders `<Outlet />`
   - Use Tailwind classes for styling (flex, h-screen, etc.)

2. Create `src/components/Sidebar.jsx`:
   - Show navigation links using `<Link>` from react-router-dom
   - Links: Dashboard, Projects, Tasks, Chat, Analytics

3. Create `src/components/Navbar.jsx`:
   - Show app name "WorkSync" and a placeholder for user info

4. Update `src/routes/AppRoutes.jsx`:
   - Wrap the dashboard/projects/tasks/chat/analytics routes inside `MainLayout`
   - Keep `/login` outside the layout (login page shouldn't have sidebar)
   - Use nested routes: parent route renders layout, child routes render inside `<Outlet />`

5. Test: Pages should now show sidebar + navbar. Login page should be clean (no sidebar).

---

### MEDIUM PHASES (Real features + state management)

---

#### Phase 4: Authentication (Login + Protected Routes)

**What you'll learn:**
- `useState` — storing data that can change (like form inputs)
- `useNavigate` — programmatic navigation (redirect after login)
- Context API — sharing data (like user info) across the entire app without passing props
- Custom hooks — reusable logic extracted into a function (`useAuth`)
- Protected routes — blocking pages for logged-out users
- `localStorage` — browser storage that persists across refreshes

**What is State?**
State is data that changes over time. When state changes, React re-renders the component
to show the updated UI. `useState` is how you create and update state.

**What is Context?**
Normally you pass data from parent to child via props. Context lets you share data
with ANY component without passing it through every level — like a global variable, but React-managed.

**Tasks:**
1. Create `src/context/AuthContext.jsx`:
   - Create a context using `createContext()`
   - Create an `AuthProvider` component that:
     - Stores `user` and `token` in state
     - Reads token from `localStorage` on first load
     - Provides `login()` and `logout()` functions
     - Wraps children in `AuthContext.Provider`

2. Create `src/hooks/useAuth.js`:
   - A custom hook that calls `useContext(AuthContext)` and returns it
   - This is just a shortcut so components don't import context directly

3. Create `src/pages/Login.jsx` (replace placeholder):
   - Build a login form with email + password inputs
   - Use `useState` for form values
   - On submit: call `login()` from `useAuth`, save a fake token, navigate to `/`
   - Style with Tailwind (centered card, inputs, button)

4. Create a `ProtectedRoute` component in `src/routes/`:
   - Check if user is logged in (using `useAuth`)
   - If yes: render children / `<Outlet />`
   - If no: redirect to `/login` using `<Navigate />`

5. Update `src/routes/AppRoutes.jsx`:
   - Wrap protected pages inside `ProtectedRoute`

6. Wrap the app with `AuthProvider` in `App.jsx`

**Deferred items to add now:**
- Create `src/services/apiClient.js` — Axios instance with base URL, request interceptor (attach token), response interceptor (handle 401 → redirect to login)
- Create `src/app/providers.jsx` — QueryClient + QueryClientProvider setup (staleTime: 5min, retry: 1)
- Wrap app with `Providers` in `App.jsx`

---

#### Phase 5: Projects (List + Create)

**What you'll learn:**
- React Query (`useQuery`, `useMutation`) — fetching and updating server data
- Modal pattern — showing a popup form to create something
- Loading/error states — showing spinners or error messages while data loads
- Conditional rendering — showing different UI based on state

**What is React Query?**
Instead of manually calling fetch + managing loading/error/data with useState,
React Query does it all for you. It also caches data, retries failures, and refetches in the background.

**Tasks:**
1. Create mock data: `src/services/mockData.js` with an array of sample projects
2. Create `src/features/projects/ProjectList.jsx` — fetches and displays projects
3. Create `src/features/projects/ProjectCard.jsx` — displays a single project
4. Create `src/features/projects/CreateProjectModal.jsx` — form inside a modal
5. Update `src/pages/Projects.jsx` — compose the above components together
6. Use `useQuery` to fetch projects, `useMutation` to create new ones

---

#### Phase 6: Tasks + Kanban Board

**What you'll learn:**
- Complex component composition — columns containing cards
- Lifting state up — when sibling components need to share data
- CRUD operations — Create, Read, Update, Delete
- `useCallback` — prevents creating new function references on every render
- Component props — passing data and functions between components

**What is a Kanban Board?**
Think Trello or Jira board: columns like "To Do", "In Progress", "Done",
with task cards you can view and manage.

**Tasks:**
1. Create `src/features/tasks/TaskColumn.jsx` — a column (To Do / In Progress / Done)
2. Create `src/features/tasks/TaskCard.jsx` — a single task card
3. Create `src/features/tasks/CreateTaskModal.jsx` — form to add a task
4. Create `src/features/tasks/TaskBoard.jsx` — renders 3 columns, manages task state
5. Update `src/pages/Tasks.jsx` — render the TaskBoard
6. Implement task CRUD: add, edit status, delete

---

#### Phase 7: Chat Module

**What you'll learn:**
- `useRef` — accessing DOM elements directly (for auto-scrolling to latest message)
- `useEffect` — running code on component mount or when data changes
- Simulating real-time — using `setTimeout` to mimic incoming messages
- Controlled inputs — input value controlled by React state

**What is useRef?**
`useRef` gives you a reference to an actual DOM element. Useful when you need to
do something React can't do declaratively — like scrolling a div to the bottom.

**What is useEffect?**
Code that runs AFTER React renders. Used for side effects: fetching data,
setting up timers, subscribing to events. It has a dependency array that controls WHEN it re-runs.

**Tasks:**
1. Create `src/features/chat/ChatWindow.jsx` — message list + auto-scroll
2. Create `src/features/chat/MessageBubble.jsx` — single message display
3. Create `src/features/chat/ChatInput.jsx` — text input + send button
4. Update `src/pages/Chat.jsx` — compose chat components
5. Simulate bot replies using `setTimeout` inside `useEffect`

---

### HARD PHASES (Advanced patterns + optimization)

---

#### Phase 8: Drag & Drop (Kanban)

**What you'll learn:**
- HTML Drag and Drop API (or a library like `@hello-pangea/dnd`)
- State updates for moving items between arrays
- Immutable state updates — never mutate state directly, always create new arrays/objects

**Tasks:**
1. Add drag handlers to `TaskCard` (draggable)
2. Add drop handlers to `TaskColumn` (drop zone)
3. Update task status on drop (move between columns)
4. Ensure state updates are immutable

---

#### Phase 9: Analytics Dashboard

**What you'll learn:**
- Chart library (Recharts or Chart.js)
- `useMemo` — caching expensive calculations so they don't re-run every render
- Derived state — computing values from existing state instead of storing duplicates

**What is useMemo?**
If you have a heavy calculation (like processing 1000 tasks into chart data),
`useMemo` remembers the result and only recalculates when the input data changes.

**Tasks:**
1. Install a chart library (`recharts` recommended)
2. Create `src/features/analytics/TaskStats.jsx` — show task counts by status
3. Create `src/features/analytics/ProjectChart.jsx` — bar/pie chart of project data
4. Update `src/pages/Analytics.jsx` — compose analytics components
5. Use `useMemo` to compute chart data from raw task/project data

---

#### Phase 10: Advanced Patterns

**What you'll learn:**
- Custom hooks — extracting and reusing stateful logic (`useTasks`, `useDebounce`)
- Debouncing — delaying a function call until the user stops typing (for search)
- Pagination — loading data in chunks instead of all at once
- `React.memo` — skipping re-renders when props haven't changed

**What is Debouncing?**
If a user types "hello" in a search box, without debounce you'd search for "h", "he", "hel", "hell", "hello".
With debounce, you wait 300ms after the user stops typing, then search once for "hello".

**Tasks:**
1. Create `src/hooks/useTasks.js` — encapsulates all task fetching/mutation logic
2. Create `src/hooks/useDebounce.js` — returns a debounced version of a value
3. Add search functionality to Projects or Tasks page with debounced input
4. Add pagination to project/task lists
5. Wrap expensive child components with `React.memo`

---

#### Phase 11: Performance Optimization

**What you'll learn:**
- React DevTools Profiler — measuring what re-renders and why
- `useCallback` — memoizing functions passed as props
- `useMemo` — memoizing expensive computed values
- Lazy loading — loading page code only when the user navigates to it (`React.lazy`)

**What is useCallback?**
Every time a component re-renders, functions inside it are recreated.
`useCallback` remembers the function so child components don't re-render unnecessarily.

**Tasks:**
1. Profile the app using React DevTools — identify unnecessary re-renders
2. Add `useCallback` to functions passed as props (especially in TaskBoard)
3. Add `useMemo` where you compute derived data
4. Add `React.lazy()` + `<Suspense>` for route-level code splitting
5. Measure before/after performance improvements

---

#### Phase 12: UI Polish + Dark Mode

**What you'll learn:**
- CSS transitions/animations with Tailwind
- Dark mode toggle using Tailwind's `dark:` variant
- Responsive design — making the app work on mobile
- Persisting theme preference in `localStorage`

**Tasks:**
1. Add a dark mode toggle in the Navbar
2. Store theme in `localStorage`, apply `dark` class to `<html>`
3. Add `dark:` variants to all components
4. Make sidebar collapsible on mobile
5. Add hover/transition effects to cards and buttons
6. Test on different screen sizes

---

## Interview Questions You Should Be Able To Answer After Each Phase

| Phase | Questions |
|-------|-----------|
| 1-2 | What is JSX? What is a component? How does React Router work? What is an SPA? |
| 3 | What is Outlet? How do nested routes work? What's the difference between Link and anchor tag? |
| 4 | What is useState? What is Context API? Why use custom hooks? What are protected routes? |
| 5 | What is React Query? Difference between server state and client state? |
| 6 | What is lifting state up? How do you structure complex components? |
| 7 | What is useRef? What is useEffect? What is a side effect? |
| 8 | How do you handle drag and drop? What are immutable state updates? |
| 9 | When to use useMemo? What is derived state? |
| 10 | What is debouncing? How do custom hooks work? What is React.memo? |
| 11 | How to optimize React performance? What is code splitting? useCallback vs useMemo? |
| 12 | How to implement dark mode? How to make responsive layouts? |

---

## Current Progress

- [x] Phase 1 setup (Vite + Tailwind + folder structure)
- [ ] Phase 1: Placeholder pages
- [ ] Phase 2: Routing
- [ ] Phase 3: Layout
- [ ] Phase 4: Auth (+ Axios & React Query setup)
- [ ] Phase 5: Projects
- [ ] Phase 6: Tasks / Kanban
- [ ] Phase 7: Chat
- [ ] Phase 8: Drag & Drop
- [ ] Phase 9: Analytics
- [ ] Phase 10: Advanced Patterns
- [ ] Phase 11: Performance
- [ ] Phase 12: UI Polish + Dark Mode
