 let descriptionArray = ["Agero’s mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions.", 
    "Akamai is the global leader in Content Delivery Network (CDN) services, making the Internet fast, reliable and secure for its customers.",
     "athenahealth partners with hospital and ambulatory customers to drive clinical and financial results. We offer medical record, revenue cycle, patient engagement, care coordination, and population health services.",
     "Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world’s top 10 SaaS companies with a leadership position in every one of our markets.",
     "Tripadvisor helps nearly a half a billion travelers each month make every trip their best trip. Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions of accommodations, restaurants, experiences, airlines and cruises.",
     "Wayfair is one of the world's largest online destinations for the home.",
    ]

    let urlArray = ["https://www.agero.com/sites/all/themes/agero/images/logo_header.png",
     "https://www.akamai.com/us/en/multimedia/images/logo/akamai-logo.png",
    "https://www.athenahealth.com/sites/ahcom/themes/ah_theme/assets/images/logo-color.svg",
    "http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png",
    "https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",
    "http://www.codesquad-test.org/assets/img/wayfair_logo.png"
    ]

 function myFunction() {
    let url = prompt("Please insert corporate URl logo below");
// for (let x of urlArray) {
    if (urlArray.includes(url)) {
        let description = descriptionArray[urlArray.indexOf(url)]
        document.getElementById("companyLogo").innerHTML=`<img src="${url}" width="250px">`;
        document.getElementById("descript").innerHTML = `<p style="width:250px"> ${description}</p>`

    }

    document.querySelector("#companyLogo")
// }


 }