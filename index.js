
var linkedin_ids = [{
  href: 'https://www.linkedin.com/in/dhruvaggarwal101/',
  name: 'Dhruv Aggarwal',
  location: 'Meerut',
  contact: 'adhruv218@gmail.com'
}, {
  href: 'https://www.linkedin.com/in/parth-agrawal12/',
  name: 'Parth Agrawal',
  location: 'Meerut',
  contact: 'agrawalparth564@gmail.com'
}, {
  href: 'https://www.linkedin.com/in/akash-yadav-36700075/',
  name: 'Akash yadav',
  location: 'Meerut',
  contact: 'yadavmak@amazon.com'
}, {
  href: 'https://www.linkedin.com/in/iamdeepakprasad/',
  name: 'Deepak Prasad',
  location: 'Meerut',
  contact: 'deepakkumarprasad25@gmail.com'
}, {
  href: 'https://www.linkedin.com/in/nikhil-ranjan-8236ba200/',
  name: 'Nikhil Ranjan ',
  location: 'Meerut',
  contact: 'bishuranjan1234@gmail.com'
},


]


for (let i = 0; i < linkedin_ids.length; i++) {


  chrome.tabs.create({ url: linkedin_ids[i].href }).then(() => {
    chrome.tabs.executeScript({
      code: 'console.log("Name :"+linkedin_ids[i].name ) console.log("Location :"+linkedin_ids[i].location ); console.log("Contact Info :"+linkedin_ids[i].contact);'
    }, function () {
      if (chrome.runtime.lastError) {
        console.log("ERROR: " + chrome.runtime.lastError.message);
      }
    }

    )
  })
}


