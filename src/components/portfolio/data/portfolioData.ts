
export const tabs = [
  { id: 'all', label: 'All Work' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'design', label: 'Design' },
];

export const projects = [
  {
    id: 1,
    title: "Live Shooting Leaderboard App",
    category: "web",
    thumbnail: "https://i.postimg.cc/HxP5ykff/3.png",
    description: "Web app using Python (Flask) and JavaScript to display live shooting competition scores.",
    link: "https://meqdam2025.pythonanywhere.com",
    items: [
      {
        id: 'lsa-1',
        type: 'image',
        src: "https://i.postimg.cc/3xggc7vv/1.jpg",
        alt: "Real-life Shooting Competition",
        caption: "Real-life view of the shooting competition"
      },
      {
        id: 'lsa-2',
        type: 'image',
        src: "https://i.postimg.cc/mrBQxqY6/2.jpg",
        alt: "Competition Setup",
        caption: "Setup of the shooting competition"
      },
      {
        id: 'lsa-3',
        type: 'image',
        src: "https://i.postimg.cc/HxP5ykff/3.png",
        alt: "Desktop View",
        caption: "Desktop view of the leaderboard application"
      },
      {
        id: 'lsa-4',
        type: 'image',
        src: "https://i.postimg.cc/B6vHbKwT/4.jpg",
        alt: "Mobile View",
        caption: "Mobile view of the leaderboard application"
      },
      {
        id: 'lsa-5',
        type: 'image',
        src: "https://i.postimg.cc/XvL9n8xN/5.jpg",
        alt: "Mobile Interface",
        caption: "Another mobile interface of the application"
      }
    ],
    features: [
      "Real-time score updates",
      "Responsive design for all devices",
    ]
  },
  {
    id: 2,
    title: "Volunteering App",
    category: "mobile",
    thumbnail: "https://i.postimg.cc/9Q4MNBww/1.jpg",
    description: "Application developed in Flutter to streamline volunteering activities.",
    items: [
      {
        id: 'va-1',
        type: 'image',
        src: "https://i.postimg.cc/9Q4MNBww/1.jpg",
        alt: "Splash Screen",
        caption: "App splash screen"
      },
      {
        id: 'va-2',
        type: 'image',
        src: "https://i.postimg.cc/yYG69Sp1/2.jpg",
        alt: "Choose Role",
        caption: "Screen to select user role"
      },
      {
        id: 'va-3',
        type: 'image',
        src: "https://i.postimg.cc/pLgTNnKG/3.jpg",
        alt: "Login Page",
        caption: "User login interface"
      },
      {
        id: 'va-4',
        type: 'image',
        src: "https://i.postimg.cc/s2723DcV/4.jpg",
        alt: "Home Page",
        caption: "Main home screen of the app"
      },
      {
        id: 'va-5',
        type: 'image',
        src: "https://i.postimg.cc/qRrvqVb2/5.jpg",
        alt: "User Registration",
        caption: "Registration form for new users"
      },
      {
        id: 'va-6',
        type: 'image',
        src: "https://i.postimg.cc/Hxts7ZRR/6.jpg",
        alt: "Job Application List",
        caption: "List of volunteering opportunities"
      },
      {
        id: 'va-7',
        type: 'image',
        src: "https://i.postimg.cc/6q56VVN3/7.jpg",
        alt: "Dashboard",
        caption: "User dashboard with statistics"
      },
      {
        id: 'va-8',
        type: 'image',
        src: "https://i.postimg.cc/7YhYfNVt/8.jpg",
        alt: "Add Jobs",
        caption: "Interface for adding new volunteering jobs"
      },
      {
        id: 'va-9',
        type: 'image',
        src: "https://i.postimg.cc/Y0nrd4px/9.jpg",
        alt: "User Profile",
        caption: "User profile management screen"
      },
      {
        id: 'va-10',
        type: 'image',
        src: "https://i.postimg.cc/Pf25X7m8/91.jpg",
        alt: "Details for Approval",
        caption: "Job details page for approval"
      }
    ],
    features: [
      "Opportunity matching algorithm",
      "Emergency response in times of crisis",
      "Donation integration for helping the needy",
      "In-app messaging with organizations"
    ]
  },
  {
    id: 3,
    title: "Network Infographic",
    category: "design",
    thumbnail: "https://i.postimg.cc/bJ8q87LW/Floor-Diagram.png",
    description: "Visual network infrastructure diagram for data center planning.",
    items: [
      {
        id: 'ni-1',
        type: 'image',
        src: "https://i.postimg.cc/bJ8q87LW/Floor-Diagram.png",
        alt: "Floor Diagram",
        caption: "Complete floor network structure"
      },
      {
        id: 'ni-2',
        type: 'image',
        src: "https://i.postimg.cc/sD0fS0DG/Room-A.png",
        alt: "Room A Network",
        caption: "Network diagram for Room A"
      },
      {
        id: 'ni-3',
        type: 'image',
        src: "https://i.postimg.cc/zGbzkSVt/Room-B.png",
        alt: "Room B Network",
        caption: "Network diagram for Room B"
      },
      {
        id: 'ni-4',
        type: 'image',
        src: "https://i.postimg.cc/t4KXvZ6X/Room-C.png",
        alt: "Room C Network",
        caption: "Network diagram for Room C"
      },
      {
        id: 'ni-5',
        type: 'image',
        src: "https://i.postimg.cc/43pXDfvp/Room-D.png",
        alt: "Room D Network",
        caption: "Network diagram for Room D"
      }
    ]
  },
  {
    id: 4,
    title: "Graphic Design Works",
    category: "design",
    thumbnail: "https://i.postimg.cc/HnpKVB1S/1.jpg",
    description: "Collection of graphic design projects including events, logos, ads, and infographics.",
    items: {
      events: [
        {
          id: 'gd-e1',
          type: 'image',
          src: "https://i.postimg.cc/HnpKVB1S/1.jpg",
          alt: "Event Poster 1",
          caption: "Event promotional material"
        },
        {
          id: 'gd-e2',
          type: 'image',
          src: "https://i.postimg.cc/VLvGpSfb/zerone.png",
          alt: "Event Poster 2",
          caption: "Conference event poster"
        },
        {
          id: 'gd-e3',
          type: 'image',
          src: "https://i.postimg.cc/43VFPrJL/Cinematic-Day.png",
          alt: "Event Poster 3",
          caption: "Special event announcement"
        },
        {
          id: 'gd-e4',
          type: 'image',
          src: "https://i.postimg.cc/xT1hQxR8/Blue-Aesthetic-Simple-Iftar-Party-Invitation-A4-Document.png",
          alt: "Event Poster 4",
          caption: "Event schedule poster"
        },
        {
          id: 'gd-e5',
          type: 'image',
          src: "https://i.postimg.cc/HW2RfDbF/14.jpg",
          alt: "Event Poster 5",
          caption: "Community event poster"
        },
        {
          id: 'gd-e6',
          type: 'image',
          src: "https://i.postimg.cc/G2PVL6V8/2.png",
          alt: "Event Poster 6",
          caption: "Educational workshop poster"
        },
        {
          id: 'gd-e7',
          type: 'image',
          src: "https://i.postimg.cc/rsQHWx8q/4.jpg",
          alt: "Event Poster 7",
          caption: "Cultural event announcement"
        },
        {
          id: 'gd-e8',
          type: 'image',
          src: "https://i.postimg.cc/4dRjTXLR/7.jpg",
          alt: "Event Poster 8",
          caption: "Technology conference poster"
        },
        {
          id: 'gd-e9',
          type: 'image',
          src: "https://i.postimg.cc/pL9Shm3t/8.jpg",
          alt: "Event Poster 9",
          caption: "Annual meeting announcement"
        },
        {
          id: 'gd-e10',
          type: 'image',
          src: "https://i.postimg.cc/L6Q78tCT/Gamora-List-Poster.jpg",
          alt: "Event Poster 10",
          caption: "Professional development seminar"
        },
        {
          id: 'gd-e11',
          type: 'image',
          src: "https://i.postimg.cc/sgtNpVRG/Gamora-Winners-Page-01.jpg",
          alt: "Event Poster 11",
          caption: "Networking event flyer"
        },
        {
          id: 'gd-e12',
          type: 'image',
          src: "https://i.postimg.cc/Y97Dsb0p/Gamora-Winners-Page-02.jpg",
          alt: "Event Poster 12",
          caption: "Charity fundraiser announcement"
        },
        {
          id: 'gd-e13',
          type: 'image',
          src: "https://i.postimg.cc/wvk48LRD/Gamora-Winners-Page-06.jpg",
          alt: "Event Poster 13",
          caption: "Academic symposium poster"
        },
        {
          id: 'gd-e14',
          type: 'image',
          src: "https://i.postimg.cc/gcNtgyWW/Wedding-Invitation.png",
          alt: "Event Poster 14",
          caption: "Industry exhibition announcement"
        }
      ],
      logos: [
        {
          id: 'gd-l1',
          type: 'image',
          src: "https://i.postimg.cc/kgxr4Vkh/ajvect.png",
          alt: "Logo Design 1",
          caption: "Company logo design"
        },
        {
          id: 'gd-l2',
          type: 'image',
          src: "https://i.postimg.cc/pr4N9KW3/ITechnica.png",
          alt: "Logo Design 2",
          caption: "Brand logo creation"
        },
        {
          id: 'gd-l3',
          type: 'image',
          src: "https://i.postimg.cc/x1rDnGFz/Vector-Art.png",
          alt: "Logo Design 3",
          caption: "Modern logo concept"
        },
        {
          id: 'gd-l4',
          type: 'image',
          src: "https://i.postimg.cc/Y2sByB68/DOM-Logo-2.png",
          alt: "Logo Design 4",
          caption: "Creative brand identity"
        },
        {
          id: 'gd-l5',
          type: 'image',
          src: "https://i.postimg.cc/02KRTXZv/Desert-Dunes-Logo.jpg",
          alt: "Logo Design 5",
          caption: "Desert Dunes logo design"
        },
        {
          id: 'gd-l6',
          type: 'image',
          src: "https://i.postimg.cc/Zqc18GY8/PEOPLESVECTOR.png",
          alt: "Logo Design 6",
          caption: "People's Vector logo design"
        }
      ],
      ads: [
        {
          id: 'gd-a1',
          type: 'image',
          src: "https://i.postimg.cc/ZnRZvTrv/frenchnyou-com.png",
          alt: "Advertisement 1",
          caption: "Product advertisement"
        },
        {
          id: 'gd-a2',
          type: 'image',
          src: "https://i.postimg.cc/KjHbndNq/Logistics-Poster.png",
          alt: "Advertisement 2",
          caption: "Service promotion ad"
        },
        {
          id: 'gd-a3',
          type: 'image',
          src: "https://i.postimg.cc/Dfj7kXTr/MBposter.png",
          alt: "Advertisement 3",
          caption: "Marketing campaign visual"
        }
      ],
      infographics: [
        {
          id: 'gd-i1',
          type: 'image',
          src: "https://i.postimg.cc/Jh1Fzp3G/French-learning-infographic.png",
          alt: "Infographic 1",
          caption: "Data visualization infographic"
        },
        {
          id: 'gd-i2',
          type: 'image',
          src: "https://i.postimg.cc/yYZtQgYY/French-Flashcard-Dog.jpg",
          alt: "Infographic 2",
          caption: "Process explanation infographic"
        },
        {
          id: 'gd-i3',
          type: 'image',
          src: "https://i.postimg.cc/J7gS5c82/French-Flashcard-Building.jpg",
          alt: "Infographic 3",
          caption: "Statistical data visualization"
        },
        {
          id: 'gd-i4',
          type: 'image',
          src: "https://i.postimg.cc/9QHSvmrP/French-Flashcard-Car.jpg",
          alt: "Infographic 4",
          caption: "Timeline infographic design"
        },
        {
          id: 'gd-i5',
          type: 'image',
          src: "https://i.postimg.cc/Jz3g8fkf/Beat-the-Heat.png",
          alt: "Infographic 5",
          caption: "Comparative analysis visualization"
        }
      ]
    }
  }
];
