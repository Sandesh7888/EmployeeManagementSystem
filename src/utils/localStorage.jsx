const employees = [
  {
    id: 1,
    username: "john_doe",
    password: "123",
    tasks: [
      {
        title: "Design Login Page",
        description: "Create a responsive login page UI",
        date: "2025-08-06",
        categories: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in the navigation bar",
        date: "2025-08-08",
        categories: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write API Docs",
        description: "Document the authentication API",
        date: "2025-08-10",
        categories: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    username: "jane_smith",
    password: "123",
    tasks: [
      {
        title: "Implement Dark Mode",
        description: "Add dark mode toggle in settings",
        date: "2025-08-07",
        categories: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Schedule daily database backups",
        date: "2025-08-09",
        categories: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress images for faster loading",
        date: "2025-08-11",
        categories: "Performance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    username: "michael_lee",
    password: "123",
    tasks: [
      {
        title: "Test Payment Gateway",
        description: "Run end-to-end payment test cases",
        date: "2025-08-06",
        categories: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Update Readme",
        description: "Add installation steps in README.md",
        date: "2025-08-08",
        categories: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create API Endpoint",
        description: "Build endpoint for user profile updates",
        date: "2025-08-12",
        categories: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    username: "sophia_wong",
    password: "123",
    tasks: [
      {
        title: "Research New Library",
        description: "Check feasibility of using Tailwind CSS v4",
        date: "2025-08-06",
        categories: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Footer Overlap",
        description: "Ensure footer stays at bottom on small screens",
        date: "2025-08-09",
        categories: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Setup CI/CD",
        description: "Implement CI/CD pipeline for deployments",
        date: "2025-08-10",
        categories: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    username: "david_khan",
    password: "123",
    tasks: [
      {
        title: "Create Signup Form",
        description: "Build responsive signup form with validation",
        date: "2025-08-07",
        categories: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add Logging Middleware",
        description: "Implement logging in API for debugging",
        date: "2025-08-09",
        categories: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Refactor Codebase",
        description: "Clean up unused imports and variables",
        date: "2025-08-12",
        categories: "Code Quality",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    username: "admin",
    password: "123"
  }
];


export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

}
export const getLocalStorage =()=>{
    const employees= JSON.parse(localStorage.getItem('employees'));
    const admin= localStorage.getItem('admin');
    

    console.log(JSON.parse(employees));
    console.log(JSON.parse(admin));
    

}

