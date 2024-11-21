const skills = [
    { name: "PHP", percentage: 70 },
    { name: "Flutter", percentage: 67 },
    { name: "HTML, CSS, JS", percentage: 100 },
    { name: "Tailwind CSS", percentage: 46 },
];

const renderSkills = () => {
    const skillsChart = document.getElementById("skills-chart");

    skills.forEach(skill => {
        const skillBar = document.createElement("div");
        skillBar.classList.add("skill-bar");

        const label = document.createElement("div");
        label.classList.add("label");
        label.textContent = skill.name;

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = "0";
        bar.textContent = `${skill.percentage}%`;

        skillBar.appendChild(label);
        skillBar.appendChild(bar);
        skillsChart.appendChild(skillBar);

        setTimeout(() => {
            bar.style.width = `${skill.percentage}%`;
        }, 100);
    });
};

document.addEventListener("DOMContentLoaded", renderSkills);
