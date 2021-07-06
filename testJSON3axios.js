const axios = require('axios')

const jobs = [
  {
    title: 'Barista',
    companyName: 'Caffe Lodi',
    location: 'New York, NY, USA (+1 other)',
    via: 'via Culinary Agents',
    description: 'We are looking for an experienced Barista to create and serve espresso, coffee, and tea beverages at our new project, Caffe Lodi. Our ideal candidate has specialty coffee experience, a passion for dining and hospitality, and a commitment to our core values of Excellence, Respect, Transparency, and Resilience.\n' +
      '\n' +
      'Key Responsibilities\n' +
      '• Provide excellent customer service to guests and ensure all of their needs are met\n' +
      '• Prepare and serve coffee, espresso, and teas in compliance with Lodi Standards of Procedure\n' +
      '• Monitor, rotate, and organize product, ensuring consistency and high quality\n' +
      '• Act as a member of the team by filling in and helping with needs outside of your normal duties\n' +
      '\n' +
      'Requirements for Success\n' +
      '• Be able to create beverages based on basic coffee/espresso preparation principles, and recipes/procedures provided by Caffe Lodi\n' +
      '• Desire and willingness to learn and grow\n' +
      '• Proven customer service experience\n' +
      '• 1+ years of experience in specialty coffee\n' +
      '• Interest or experience in... liquor and bartending preferred, but not required\n' +
      '\n' +
      'At Matter House, our purpose is to create an inspiring, sustainable and prosperous business that brings joy, takes care of others, and helps build community through craftsmanship around the table. Our company culture supports the growth and development of our employees and provides opportunities for education and advancement.\n' +
      '\n' +
      'We provide equal employment opportunities (EEO) to all applicants for employment without regard to race, color, religion, gender, sexual orientation, national origin, age, disability, genetic information, marital status, amnesty, or status as a covered veteran in accordance with applicable federal, state, and local laws',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxQXqRDCt854TV3OhwXuuTlrVmROBzt0K0rqH&s=0',
    extensions: ['22 hours ago', 'Full–time'],
    detectedExtensions: { postedAt: '22 hours ago', scheduleType: 'Full–time' },
    job_id: 'eyJqb2JfdGl0bGUiOiJCYXJpc3RhIiwiY29tcGFueV9uYW1lIjoiQ2FmZmUgTG9kaSIsImNvbXBhbnlfbWlkIjoiIiwiYWRkcmVzc19jaXR5IjoiTmV3IFlvcmsiLCJhZGRyZXNzX3N0YXRlIjoiTmV3IFlvcmsiLCJodGlkb2NpZCI6IlRUek1iN2IweFhKQ2ZRM3FBQUFBQUE9PSIsImhsIjoiZW4iLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gQ3VsaW5hcnkgQWdlbnRzIiwibGluayI6Imh0dHBzOi8vY3VsaW5hcnlhZ2VudHMuY29tL2pvYnMvMjQ5NDgxLUJhcmlzdGE/Y2xpZW50X2lkPUNBLUlOLVJFTEFURURKT0JTMTdcdTAwMjZ3aWRnZXRfbmFtZT1qb2ItZGV0YWlsXHUwMDI2dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ=='
  },
  {
    title: 'Barista New York - Newyork jobs',
    companyName: 'Expat jobs',
    location: 'New York, NY, USA',
    via: 'via Expatriates Jobs',
    description: 'Now hiring baristas for Matto Espresso, a high-end espresso bar. We are looking for very energetic, hard-working and motivated individuals with excellent customer service skills who are passionate about high quality espresso and thrive in a fast-paced environment. Please post your resume in the body of your email response as attachments will not be opened.\n' +
      '\n' +
      'Address:8 West 46th Street near 5th Avenue\n' +
      '\n' +
      'More info:\n' +
      '\n' +
      'compensation: $17-$20/hour depending on experience\n' +
      '\n' +
      'employment type: full-time',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcorJ5g42NdEm2hT9uHLU_3FWEBeIBtSzZAeo&s=0',
    extensions: ['22 hours ago', 'Full–time'],
    detectedExtensions: { postedAt: '22 hours ago', scheduleType: 'Full–time' },
    job_id: 'eyJqb2JfdGl0bGUiOiJCYXJpc3RhIE5ldyBZb3JrIC0gTmV3eW9yayBqb2JzIiwiY29tcGFueV9uYW1lIjoiRXhwYXQgam9icyIsImNvbXBhbnlfbWlkIjoiIiwiYWRkcmVzc19jaXR5IjoiTmV3IFlvcmsiLCJhZGRyZXNzX3N0YXRlIjoiTmV3IFlvcmsiLCJodGlkb2NpZCI6IkRkV1ZxZkFkR3AzcnBYQUlBQUFBQUE9PSIsImhsIjoiZW4iLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gRXhwYXRyaWF0ZXMgSm9icyIsImxpbmsiOiJodHRwczovL2V4cGF0cmlhdGVzam9icy5jb20vam9icy9qb2ItMzgxNDQzP3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0='
  },
  {
    title: 'Experienced Barista (Full-Time)',
    companyName: 'Rebel Coffee',
    location: 'New York, NY, USA (+1 other)',
    via: 'via New York Coffee Jobs',
    description: "Rebel Coffee is a friendly neighborhood coffee shop in the heart of the West Village of Manhattan and we're looking for an amazing barista to join our team. Currently we're…",
    extensions: ['20 days ago', 'Full–time'],
    detectedExtensions: { postedAt: '20 days ago', scheduleType: 'Full–time' },
    job_id: 'eyJqb2JfdGl0bGUiOiJFeHBlcmllbmNlZCBCYXJpc3RhIChGdWxsLVRpbWUpIiwiY29tcGFueV9uYW1lIjoiUmViZWwgQ29mZmVlIiwiY29tcGFueV9taWQiOiIiLCJhZGRyZXNzX2NpdHkiOiJOZXcgWW9yayIsImFkZHJlc3Nfc3RhdGUiOiJOZXcgWW9yayIsImh0aWRvY2lkIjoiOUlLUnN0eGxLWUlCUWhpVUFBQUFBQT09IiwiaGwiOiJlbiIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBOZXcgWW9yayBDb2ZmZWUgSm9icyIsImxpbmsiOiJodHRwczovL25ld3lvcmtjb2ZmZWVqb2JzLmNvbS9qb2JzL2V4cGVyaWVuY2VkLWJhcmlzdGFzLWZ1bGwtcGFydC10aW1lLz91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19'
  }
]


let job2String = JSON.stringify(jobs)
const userEmail = "test2@test.com"
const type = "recentCache10"
const dump = `${job2String}`
// console.log(JSON.parse(dump))

axios.post('http://localhost:3001/graphql', {
  query: `
  mutation ADD_JOBS_STRING (
    $userEmail: String!,
    $type: String!,
    $dump: String!
  ) {
    addJobsWithTypeString(
        userEmail: $userEmail,
        type: $type,
        dump: $dump 
  ){
    id
    faveJobs{
      id
      title
      companyName
      location
      jobApiId
    }
    userEmail
    createdAt
    updatedAt
  }
  }
  `, variables: {
    userEmail: userEmail,
    type: type,
    dump: dump
  },
})
.then((res => {
  // let jsonRes = res.json()
  console.log(res.data)
  // console.log(`heyyyyyyy ${jsonRes}`)
  console.log(res.data.faveJobs)
  }))
.catch(err => console.log(err))
