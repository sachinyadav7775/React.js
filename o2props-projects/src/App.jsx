import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$72/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/c7/4b/23/c74b23772d76d255f99a61db7d56b867.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$102/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/79/8a/50/798a5097a5ad60fb5d1e46de48c8ecbb.jpg",
    companyName: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$98/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/9e/ab/c5/9eabc54fbe3cd7a6931695dcce52cc82.jpg",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/cb/07/7a/cb077ad750c7615d3abe4742053d0eb2.jpg",
    companyName: "OpenAI",
    datePosted: "5 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/2c/ea/3e/2cea3e7494f8f6f763216b708c21f4f2.jpg",
    companyName: "Uber",
    datePosted: "8 weeks ago",
    post: "Backend Platform Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Bengaluru, India"
  }
];

  return (
    <div className='parent'>

      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} brandLogo={elem.brandLogo} pay={elem.pay} post={elem.post} location={elem.location} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} />
      })}

    </div>
  )
}

export default App