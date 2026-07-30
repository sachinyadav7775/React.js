import React, { useState } from "react";
import {
  Logs,
  Plus,
  Mail,
  House,
  Search,
  Ellipsis,
  MapPinned,
  Smartphone,
  LayoutGrid,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Felecia Burke",
    role: "Founder & CEO",
    location: "Mumbai, India",
    email: "felecia@gmail.com",
    phone: "+72 (876) 543-210",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Project Manager",
    location: "Delhi, India",
    email: "john@gmail.com",
    phone: "+31 (987) 6543-211",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia Wilson",
    role: "UI/UX Designer",
    location: "Bengaluru, India",
    email: "sophia@gmail.com",
    phone: "+41 (987) 6540_3212",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Software Engineer",
    location: "Hyderabad, India",
    email: "michael@gmail.com",
    phone: "+64 (987) 6543-213",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Emma Davis",
    role: "HR Manager",
    location: "Pune, India",
    email: "emma@gmail.com",
    phone: "+001 (987) 654-3214",
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "David Miller",
    role: "Marketing Lead",
    location: "Chennai, India",
    email: "david@gmail.com",
    phone: "+01 (987) 6543-215",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Olivia Taylor",
    role: "Business Analyst",
    location: "Jaipur, India",
    email: "olivia@gmail.com",
    phone: "+11 (001) 384-3216",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww%3D%3D",
  },
  {
    id: 8,
    name: "James Anderson",
    role: "Product Manager",
    location: "Ahmedabad, India",
    email: "james@gmail.com",
    phone: "+910 (987) 654-3217",
    image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fHww",
  },
  {
    id: 9,
    name: "Isabella Thomas",
    role: "Graphic Designer",
    location: "Lucknow, India",
    email: "isabella@gmail.com",
    phone: "+1 (987) 6543-218",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "William Johnson",
    role: "Full Stack Developer",
    location: "Kolkata, India",
    email: "william@gmail.com",
    phone: "+19 (012) 545-8491",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const Card = () => {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <div className="top">
        <h1>Contacts</h1>

        <div className="home">
          <div className="breadcrumb">
            <House color="#7C8593" size={18} />
            <ChevronRight color="#7C8593" size={16} />
            <span>Contacts</span>
          </div>

          <div className="menu-icon">
            <LayoutGrid size={25} />
            <Logs size={25} />
          </div>
        </div>

        <div className="search">
          <div className="search-element">
            <p>Show</p>

            <button type="button" className="btn1">
              10 <ChevronDown color="#7C8593" size={20} />
            </button>

            <button type="button" className="btn2">
              Newest <ChevronDown color="#7C8593" size={20} />
            </button>
          </div>

          <div className="search-box">
            <div className="search-text">
              <Search size={20} />

              <input
                type="text"
                placeholder="Search contacts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button type="button" aria-label="Add Contact">
              <Plus size={30} />
            </button>
          </div>
        </div>
      </div>

      <div className="bottom">
        {filteredContacts.map((contact) => (
          <div className="bottom-card" key={contact.id}>
            <div className="card-top">
              <img src={contact.image} alt={contact.name} />
              <Ellipsis color="#7C8593" />
            </div>

            <div className="card-center">
              <h3>{contact.name}</h3>
              <p>{contact.role}</p>
            </div>

            <div className="card-bottom">
              <div className="card-icon">
                <div className="map">
                  <span>
                    <MapPinned size={20} color="#7C8593" />
                    Location:
                  </span>
                  <p>{contact.location}</p>
                </div>

                <div className="email">
                  <span>
                    <Mail size={20} color="#7C8593" />
                    Email:
                  </span>
                  <p>{contact.email}</p>
                </div>

                <div className="smartphone">
                  <span>
                    <Smartphone size={20} color="#7C8593" />
                    Phone:
                  </span>
                  <p>{contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredContacts.length === 0 && (
          <p>No contacts found.</p>
        )}
      </div>
    </div>
  );
};

export default Card;