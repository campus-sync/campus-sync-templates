const departmentsList = document.getElementById('departments-list');

// Sample departments and events data
const departments = [
    {
        name: "Computer Science Engineering",
        events: [
            {
                title: "AI Workshop",
                date: "2024-11-01",
                time: "10:00 AM - 12:00 PM",
                description: "An interactive workshop on artificial intelligence and its applications."
            },
            {
                title: "Hackathon",
                date: "2024-11-15",
                time: "9:00 AM - 5:00 PM",
                description: "24-hour coding competition. Teams will work on innovative projects."
            },
            {
                title: "Machine Learning Bootcamp",
                date: "2024-11-20",
                time: "1:00 PM - 4:00 PM",
                description: "Learn the basics of machine learning in this hands-on bootcamp."
            }
        ]
    },
    {
        name: "Information Science Engineering",
        events: [
            {
                title: "Data Science Bootcamp",
                date: "2024-11-03",
                time: "1:00 PM - 4:00 PM",
                description: "A bootcamp covering data analysis, visualization, and machine learning."
            },
            {
                title: "Tech Talk on Cybersecurity",
                date: "2024-11-10",
                time: "2:00 PM - 3:30 PM",
                description: "Industry experts discuss the latest trends in cybersecurity."
            },
            {
                title: "Web Development Workshop",
                date: "2024-11-25",
                time: "10:00 AM - 12:00 PM",
                description: "An introduction to front-end and back-end web development."
            }
        ]
    },
    {
        name: "Electronics and Communication Engineering",
        events: [
            {
                title: "Robotics Workshop",
                date: "2024-11-05",
                time: "10:00 AM - 1:00 PM",
                description: "Hands-on workshop on building and programming robots."
            },
            {
                title: "Embedded Systems Seminar",
                date: "2024-11-12",
                time: "11:00 AM - 1:00 PM",
                description: "Learn about the latest developments in embedded systems technology."
            },
            {
                title: "Signal Processing Conference",
                date: "2024-11-18",
                time: "9:00 AM - 12:00 PM",
                description: "A conference discussing advancements in signal processing."
            }
        ]
    },
    {
        name: "Mechanical Engineering",
        events: [
            {
                title: "3D Printing Workshop",
                date: "2024-11-08",
                time: "10:00 AM - 12:00 PM",
                description: "Explore the world of 3D printing and create your own designs."
            },
            {
                title: "Sustainable Engineering Conference",
                date: "2024-11-20",
                time: "1:00 PM - 4:00 PM",
                description: "Discuss sustainable practices in mechanical engineering."
            },
            {
                title: "Thermodynamics Seminar",
                date: "2024-11-28",
                time: "3:00 PM - 5:00 PM",
                description: "A seminar on the latest research in thermodynamics."
            }
        ]
    },
    {
        name: "Civil Engineering",
        events: [
            {
                title: "Smart City Development Workshop",
                date: "2024-11-04",
                time: "9:00 AM - 12:00 PM",
                description: "Learn about smart city initiatives and sustainable infrastructure."
            },
            {
                title: "Structural Analysis Seminar",
                date: "2024-11-11",
                time: "2:00 PM - 4:00 PM",
                description: "Explore the latest tools and techniques in structural analysis."
            },
            {
                title: "Construction Management Bootcamp",
                date: "2024-11-27",
                time: "10:00 AM - 5:00 PM",
                description: "An intensive bootcamp on project management in construction."
            }
        ]
    },
    {
        name: "Chemical Engineering",
        events: [
            {
                title: "Process Design Workshop",
                date: "2024-11-06",
                time: "10:00 AM - 1:00 PM",
                description: "Hands-on workshop on process design and optimization."
            },
            {
                title: "Materials Science Seminar",
                date: "2024-11-13",
                time: "1:00 PM - 3:00 PM",
                description: "A seminar discussing advancements in materials science."
            },
            {
                title: "Green Chemistry Conference",
                date: "2024-11-30",
                time: "9:00 AM - 12:00 PM",
                description: "Explore the principles of green chemistry and sustainable practices."
            }
        ]
    }
];

// Function to render departments and their events
function renderDepartments() {
    departments.forEach(department => {
        const departmentDiv = document.createElement('div');
        departmentDiv.classList.add('department');

        const departmentName = document.createElement('div');
        departmentName.classList.add('department-name');
        departmentName.innerText = department.name;

        departmentDiv.appendChild(departmentName);

        department.events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            const eventTitle = document.createElement('div');
            eventTitle.classList.add('event-title');
            eventTitle.innerText = event.title;

            const eventDateTime = document.createElement('div');
            eventDateTime.classList.add('date-time');
            eventDateTime.innerText = `${event.date} | ${event.time}`;

            const eventDetails = document.createElement('div');
            eventDetails.classList.add('event-details');
            eventDetails.innerText = event.description;

            // Event click handler
            eventDiv.onclick = () => {
                eventDetails.classList.toggle('show');
            };

            eventDiv.appendChild(eventTitle);
            eventDiv.appendChild(eventDateTime);
            eventDiv.appendChild(eventDetails);
            departmentDiv.appendChild(eventDiv);
        });

        departmentsList.appendChild(departmentDiv);
    });
}

// Initial rendering of departments and events
renderDepartments();
