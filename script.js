document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Movie Recommendation System",
            images: ["images/movie_reco_home.png", "images/movie_reco_1.png", "images/movie_reco_2.png"],
            tech: "Python, Pandas, NLTK, Scikit-Learn",
            link: "https://movie-recommendation-system-8d40.onrender.com",
            desc: "This project implements a content based movie recommendation system that leverages NLP and TFIDF to suggest films based on plot descriptions, director, cast and genre. The pipeline includes data cleaning, feature engineering and consine similarity to identify and recommend similar titles. You can view the project using the link below (give it some time to start the service)"
        },
        {
            title: "Flight Delay Exploration",
            images: ["images/flight_delay_1.png", "images/flight_delay_2.png", "images/flight_delay_3.png"],
            tech: "Python, Pandas, Matplotlib, Seaborn, Scikit-learn",
            link: "https://nbviewer.org/github/bingbonked/PDS_assignment/blob/main/PDS_assignment.ipynb",
            desc: "An end-to-end data science project focusing on the exploration and prediction of US domestic flight delays. Utilizing flight delay datasets from the US Department of Transportation, this study identifies critical delay triggers such as airport congestion, route and aircraft turnaround. The pipeline integrates data cleaning, feature engineering and machine learning models to forecast flight disruptions."
        }
    ];

    let currentProjectIdx = 0;
    let currentImageIdx = 0;

    //window logic
    const projWindow = document.getElementById('proj-window');
    const docsWindow = document.getElementById('docs-window');
    const welcomeWindow = document.getElementById('welcome-window');

    document.getElementById('my-projects').onclick = () => { projWindow.style.display = 'flex'; updateProject(0); };
    document.getElementById('my-documents').onclick = () => docsWindow.style.display = 'block';
    document.getElementById('close-projects').onclick = () => projWindow.style.display = 'none';
    document.getElementById('close-about').onclick = () => docsWindow.style.display = 'none';
    document.getElementById('close-welcome').onclick = () => welcomeWindow.style.display = 'none';
    document.getElementById('begin-button').onclick = () => welcomeWindow.style.display = 'none';

    // project switching logic
    function updateProject(index) {
        currentProjectIdx = index;
        currentImageIdx = 0;
        const p = projects[index];

        document.querySelectorAll('.project-item').forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
        });

        document.getElementById('project-info').innerHTML = `
            <p><b>${p.title}</b></p>
            <p>${p.desc}</p>
            <p>Tech stack: ${p.tech}</p>
            <p><a href="${p.link}" target="_blank">View Project</a></p>
        `;

        const viewport = document.getElementById('viewport');
        viewport.innerHTML = p.images.map((src, i) => 
            `<img class="carousel-img ${i === 0 ? 'active' : ''}" src="${src}">`
        ).join('');
    }

    // Attach click events to list items
    document.querySelectorAll('.project-item').forEach((item, idx) => {
        item.onclick = () => updateProject(idx);
    });

    // carousel
    function changeImage(step) {
        const imgs = document.querySelectorAll('.carousel-img');
        if (imgs.length === 0) return;
        
        imgs[currentImageIdx].classList.remove('active');
        currentImageIdx = (currentImageIdx + step + imgs.length) % imgs.length;
        imgs[currentImageIdx].classList.add('active');
    }

    document.querySelector('.prev-btn').onclick = () => changeImage(-1);
    document.querySelector('.next-btn').onclick = () => changeImage(1);

    // clock
    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.getElementById('clock').textContent = timeStr;
    }
    setInterval(updateClock, 1000);
    updateClock();
});