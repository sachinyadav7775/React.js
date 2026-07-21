import Section1 from './components/Section1/Section1';

const App = () => {
  
  const users = [
    {
      num: 1,
      img: "https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "A confident professional leading projects with vision and determination.",
      tag: "Leadership",
      btnColor:"#FF0000",
    },
    {
      num: 2,
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      intro: "A focused professional working efficiently in a modern office environment.",
      tag: "Productivity",
      btnColor:"#FF00FF",
    },
    {
      num: 3,
      img: "https://plus.unsplash.com/premium_photo-1661290242235-eb3017a06423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      intro: "Creative teamwork and collaboration during a business meeting.",
      tag: "Teamwork",
      btnColor:"#16166B",
    },
    {
      num: 4,
      img: "https://plus.unsplash.com/premium_photo-1688821130081-f21c82fd4f7b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Planning strategies and achieving goals with confidence and innovation.",
      tag: "Success",
      btnColor:"#0BDA51",
    },
    {
      num: 5,
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Business professionals collaborating to create impactful solutions.",
      tag: "Innovation",
      btnColor:"#FF0080",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;