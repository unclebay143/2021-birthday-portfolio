import { GITHUB_ENDPOINT } from './../config.js';
import { formatDate } from "../_helper/dateFormatter.js";


const fetchProject = (number) =>{
    Promise.all([
        fetch(GITHUB_ENDPOINT + `?page=1&per_page=100'`),
        fetch(GITHUB_ENDPOINT + `?page=2&per_page=100'`),
        fetch(GITHUB_ENDPOINT + `?page=3&per_page=100'`),
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        const combineRepo = [...data[0], ...data[1], ...data[2]]
            projectCard(combineRepo.reverse())

        // Log the data to the console
        // You would do something with both sets of data here
    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });
}


const projects = [
    {
        name: "Customer Self Service",
        image:`<img loading="eager" src= './../../assets/img/project/customer-service.png' alt="forbes website built by unclebay" />`,
        description: "A network provider service, where users can purchase data and airtime and pay with flutterwave",
        created_at: "04/23/2020",
        homepage: "https://customer-self-service.netlify.app/",
        html_url: "https://github.com/unclebay143/customer-self-service-with-flutterwave-payment-gateway#readme"
    },
    {
        name: "Forbes Website",
        image:`<img loading="eager" src= './../../assets/img/project/forbes.png' alt="forbes website built by unclebay" />`,
        description: "A real-time website showing the list of the world billionaire",
        created_at: "04/23/2020",
        homepage: "https://unclebay-forbes.netlify.app/",
        html_url: "https://github.com/unclebay143/Forbes#readme"
    },
    {
        name: "Pace Time Sheet",
        image:`<img loading="eager" src= './../../assets/img/project/pace-timesheet.png' alt="Pace timesheet" />`,
        description: "An online based employee time-sheet built with React, Redux and Node JS",
        created_at: "07/25/2020",
        homepage: "https://pacetimesheet.netlify.app/",
        html_url: "https://github.com/unclebay143/Pace-Employee-TimeSheet"
    },
    {
        name: "9iJa Kids Games Internship Task",
        image:`<img loading="lazy" src= './../../assets/img/project/9ijakids.png' alt="9ija kids internship task built by unclebay" />`,
        description: `Create a one-page catalog of 9ijakids games in React and Redux. The API for the data source is: <a href="http://bit.ly/TeaserTask">http://bit.ly/TeaserTask</a>`,
        created_at: "04/23/2020",
        homepage: "https://9ijakidsgamelist-by-unclebigbay.netlify.app/",
        html_url: "https://github.com/unclebay143/9ijaKids-internship-task#readme"
    },
    {
        name: "Unclebigbay's 2021 Portfolio",
        image:`<img loading="lazy" src= './../../assets/img/project/unclebigbay-portfolio.png' alt="unclebigbay personal website built by unclebay" />`,
        description: "My 2021 Birthday Present",
        created_at: "04/25/2020",
        homepage: "https://unclebay-forbes.netlify.app/",
        html_url: "https://github.com/unclebay143/Forbes#readme"
    },
    {
        name: "Tv24Africa(NewsPaper website)",
        image:`<img loading="lazy" src= './../../assets/img/project/tv24Africa.png' alt="tv24africa newspaper website built by unclebay" />`,
        description: "Online newspaper website built with React Js and CMS",
        created_at: "03/15/2020",
    },
    {
        name: "Save the next Jambites",
        image:`<img loading="lazy" src= './../../assets/img/project/savethejambites.png' alt="Save the next jambites website built by unclebay and team" />`,
        description: "Online platform for jambites to study novel question for 2021 JAMB exams in Nigeria",
        created_at: "04/30/2020",
        homepage:"https://savethenextjambites.netlify.app/index.html",
        html_url: "https://github.com/unclebay143/study-made-easy"
    },
]

const projectCard = (repos) =>{
    var images = [],
    index = 0;
    images[0] = `<img loading="lazy" src= 'https://wp.technologyreview.com/wp-content/uploads/2020/06/Why-tech-didnt-save-us-from-covid-19.png?resize=1200,600' alt="" />`;
    images[1] = `<img loading="lazy" src= './../../assets/img/project-image.jpg' alt="" />`;
    images[2] = `<img loading="lazy" src= './../../assets/img/javascript-vs-html-vs-css.jpg' alt="" />`;
    images[2] = `<img loading="lazy" src= './../../assets/img/react-js.png' alt="" />`;
    index = Math.floor(Math.random() * images.length);
    
    // get all starred repository
    const starredRepositoryByME = repos.filter((re)=>re.stargazers_count > 0);
    const totalProjects =  [ ...projects, ...starredRepositoryByME]


    let tempHolder = ""
    for(let i = 0; i < totalProjects.length; i++){
        const { name, created_at, description, html_url, homepage, image}  = totalProjects[i]
        tempHolder +=  `
        <div class="project-card reveal ${i === 0 && "active"} ${i ===1 && "active"}">
                   ${image ? image : (images[i] ? images[i] : images[0])}
                    <div class="project__description">
                        <p class="project__title">${name}</p>
                        <em class="project__creation__date">Created ${formatDate(created_at)}</em> <br />
                        <span class="project__about">${description ? description : ""}</span>
                        <div class="project__links">
                            <a href="${html_url}" target="_blank"  rel="noreferrer" ><i class="fab fa-github"></i></a>
                            ${
                                homepage ? 
                                ( 
                                    `<a href="${homepage}" target="_blank"  rel="noreferrer" ><i class="fas fa-eye" ></i></a>`
                                ):(
                                    ""
                                )
                            }
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector(".projects").innerHTML = tempHolder
}

fetchProject(1)
