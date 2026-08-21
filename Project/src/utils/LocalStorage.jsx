const employees = [
  {
    id: 1,
    name: "Amit",
    email: "amit@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a modern and responsive homepage design.",
        taskDate: "2026-08-20",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Logo",
        taskDescription: "Replace the old company logo with the new version.",
        taskDate: "2026-08-18",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Fix navigation issues on mobile devices.",
        taskDate: "2026-08-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy the updated website to the production server.",
        taskDate: "2026-08-17",
        category: "Deployment"
      }
    ]
  },

  {
    id: 2,
    name: "Priya",
    email: "priya@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Social Media Posts",
        taskDescription: "Prepare five promotional posts for social media.",
        taskDate: "2026-08-20",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Analyze Campaign",
        taskDescription: "Review the performance of the previous campaign.",
        taskDate: "2026-08-19",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Product Description",
        taskDescription: "Write descriptions for the new products.",
        taskDate: "2026-08-21",
        category: "Content"
      }
    ]
  },

  {
    id: 3,
    name: "Rahul",
    email: "rahul@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription:
          "Find and fix the authentication issue in the login system.",
        taskDate: "2026-08-20",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription:
          "Develop the employee dashboard with required features.",
        taskDate: "2026-08-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Integration",
        taskDescription:
          "Connect the frontend application with the backend API.",
        taskDate: "2026-08-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Update",
        taskDescription:
          "Update the database schema according to the new requirements.",
        taskDate: "2026-08-16",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription:
          "Test all dashboard features and report bugs.",
        taskDate: "2026-08-23",
        category: "Testing"
      }
    ]
  },

  {
    id: 4,
    name: "Neha",
    email: "neha@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription: "Prepare the monthly performance report.",
        taskDate: "2026-08-20",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Conduct the weekly team meeting.",
        taskDate: "2026-08-19",
        category: "Meeting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review Documents",
        taskDescription:
          "Review and approve the submitted project documents.",
        taskDate: "2026-08-21",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Call",
        taskDescription:
          "Discuss project progress with the client.",
        taskDate: "2026-08-18",
        category: "Communication"
      }
    ]
  },

  {
    id: 5,
    name: "Vikash",
    email: "vikash@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription:
          "Build a responsive landing page for the new product.",
        taskDate: "2026-08-20",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Website",
        taskDescription:
          "Improve website loading speed and performance.",
        taskDate: "2026-08-21",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription:
          "Fix layout and responsive design problems.",
        taskDate: "2026-08-17",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Write Unit Tests",
        taskDescription:
          "Create unit tests for the main application components.",
        taskDate: "2026-08-16",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "GitHub Update",
        taskDescription:
          "Push the latest project changes to GitHub.",
        taskDate: "2026-08-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription:
          "Review the code submitted by other developers.",
        taskDate: "2026-08-19",
        category: "Development"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@sky.com",
    password: "123"
  }
]

export const setLocalStorage = () => {
  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  )

  localStorage.setItem(
    "admin",
    JSON.stringify(admin)
  )
}

export const getLocalStorage = () => {
  const employees = JSON.parse(
    localStorage.getItem("employees")
  )

  const admin = JSON.parse(
    localStorage.getItem("admin")
  )

  return {
    employees,
    admin
  }
}