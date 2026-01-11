import React from 'react';
import Card from "./components/Card.jsx";

const App = () => {
  const jobs = [
  {
    logo: "https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png",
    company: "Google",
    postedAgo: "30 days ago",
    jobTitle: "Graphic Designer",
    jobType: "Part-Time",
    level: "Mid-Level",
    schedule: "Flexible Schedule",
    salary: { min: 150, max: 220, currency: "USD", type: "year" },
    location: { city: "Kochi" }
    
  },
  {
    logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    company: "Amazon",
    postedAgo: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    jobType: "Full-Time",
    level: "Senior",
    schedule: "Fixed Schedule",
    salary: { min: 80, max: 120, currency: "USD", type: "hour" },
    location: { city: "Mumbai" }
  },
  {
    logo: "https://www.pngmart.com/files/4/Microsoft-Logo-PNG-Photos.png",
    company: "Microsoft",
    postedAgo: "2 days ago",
    jobTitle: "Frontend Developer",
    jobType: "Full-Time",
    level: "Mid-Level",
    schedule: "Remote",
    salary: { min: 120, max: 160, currency: "USD", type: "year" },
    location: { city: "Bangalore" }
    
  },
  {
    logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    company: "Meta",
    postedAgo: "1 day ago",
    jobTitle: "Product Designer",
    jobType: "Contract",
    level: "Senior",
    schedule: "Remote",
    salary: { min: 70, max: 100, currency: "USD", type: "hour" },
    location: { city: "Remote", country: "Global" }
  },
  {
    logo: "https://free.toppng.com/uploads/preview/netflix-logo-transparent-png-11660600805igxhzrr6b7.png",
    company: "Netflix",
    postedAgo: "10 days ago",
    jobTitle: "Motion Graphics Designer",
    jobType: "Full-Time",
    level: "Senior",
    schedule: "Hybrid",
    salary: { min: 140, max: 200, currency: "USD", type: "year" },
    location: { city: "Hyderabad" },
  },
  {
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Spotify-Symbol.png",
    company: "Spotify",
    postedAgo: "7 days ago",
    jobTitle: "Visual Designer",
    jobType: "Part-Time",
    level: "Junior",
    schedule: "Flexible Schedule",
    salary: { min: 40, max: 60, currency: "USD", type: "hour" },
    location: { city: "Remote", country: "Global" },
    
  },
  {
    logo: "https://tse1.mm.bing.net/th/id/OIP.9ZUO8oKVSx3FGQLV4-8eewHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Adobe",
    postedAgo: "12 days ago",
    jobTitle: "UX Researcher",
    jobType: "Full-Time",
    level: "Mid-Level",
    schedule: "Hybrid",
    salary: { min: 110, max: 150, currency: "USD", type: "year" },
    location: { city: "Noida" },
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.OQrbMsmN86RrB-hXq7AfSQHaHY?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Flipkart",
    postedAgo: "3 days ago",
    jobTitle: "Product Designer",
    jobType: "Full-Time",
    level: "Junior",
    schedule: "Onsite",
    salary: { min: 18, max: 25, currency: "INR", type: "year" },
    location: { city: "Bangalore" },
  },
  {
    logo: "https://logos-marcas.com/wp-content/uploads/2020/11/Swiggy-Simbolo.png",
    company: "Swiggy",
    postedAgo: "6 days ago",
    jobTitle: "UI Designer",
    jobType: "Contract",
    level: "Mid-Level",
    schedule: "Remote",
    salary: { min: 60, max: 90, currency: "USD", type: "hour" },
    location: { city: "Remote" },
    
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/050/816/838/non_2x/zomato-transparent-icon-free-png.png",
    company: "Zomato",
    postedAgo: "14 days ago",
    jobTitle: "Brand Designer",
    jobType: "Full-Time",
    level: "Senior",
    schedule: "Onsite",
    salary: { min: 25, max: 35, currency: "INR", type: "year" },
    location: { city: "Gurgaon" },
    isSaved: false
  }
];
  return (
    <div className="parent">
      {jobs.map(function(elem, index){
        return <Card key={index}image={elem.logo} companyName={elem.company} jobPosted={elem.postedAgo} jobTitle={elem.jobTitle}
        jobType={elem.jobType} level={elem.level} minSalary={elem.salary.min} maxSalary={elem.salary.max} location={elem.location.city}/>
      })} 
    </div>
  );
}

export default App;
