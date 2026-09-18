import { projectData } from '../model/project-data.js';

const app = document.getElementById('app');
const tabs = document.querySelectorAll('.tab');

function renderResumen(data) {
    return `
        <section class="view">
            <div class="hero">
                <div class="hero-copy">
                    <p class="eyebrow">${data.eyebrow}</p>
                    <h1>${data.title}</h1>
                    <p class="lead">${data.description}</p>
                </div>
                <img class="hero-art" src="${data.image}" alt="Equipo colaborando en el proyecto">
            </div>
            <div class="kpi-grid">
                ${data.kpis.map((kpi) => `<div class="kpi"><div class="kpi-label">${kpi.label}</div><div class="kpi-value">${kpi.value}</div></div>`).join('')}
            </div>
            <div class="section-heading"><h2>Ritmo del proyecto</h2><span>actualizado hoy</span></div>
            <div class="content-grid">
                <article class="card">
                    <h3>Progreso general</h3>
                    <p>El equipo ya completó la definición del reto y trabaja sobre un prototipo que puede probarse con usuarios.</p>
                    <div class="meter"><div class="meter-fill"></div></div>
                    <div class="meter-caption"><span>Inicio</span><span>68%</span><span>Entrega</span></div>
                </article>
                <article class="card">
                    <blockquote class="quote"><p>“La claridad no es tener todas las respuestas; es saber cuál es la siguiente pregunta.”</p></blockquote>
                </article>
            </div>
        </section>`;
}

function renderEquipo(data) {
    return `
        <section class="view">
            <p class="eyebrow">${data.eyebrow}</p><h1>${data.title}</h1><p class="lead">${data.description}</p>
            <div class="section-heading"><h2>Quién hace qué</h2><span>3 integrantes</span></div>
            <div class="people-grid">${data.people.map((person) => `
                <article class="person"><div class="person-color"></div><div class="person-body"><div class="avatar">${person.initials}</div><span class="role">${person.role}</span><h3>${person.name}</h3><p>${person.text}</p></div></article>`).join('')}
            </div>
            <div class="section-heading"><h2>Hitos próximos</h2><span>ruta de trabajo</span></div>
            <div class="card timeline">${data.milestones.map((milestone) => `<div class="timeline-item"><strong>${milestone.title}</strong><span>${milestone.date}</span></div>`).join('')}</div>
        </section>`;
}

function renderDiagnostico(data) {
    return `
        <section class="view">
            <p class="eyebrow">${data.eyebrow}</p><h1>${data.title}</h1><p class="lead">${data.description}</p>
            <div class="content-grid" style="margin-top: 38px">
                <article class="card"><h2>Hallazgos principales</h2><ul class="problem-list">${data.problems.map((problem) => `<li>${problem}</li>`).join('')}</ul></article>
                <aside class="callout"><h3>Idea central</h3><p>${data.insight}</p></aside>
            </div>
        </section>`;
}

function renderPropuesta(data) {
    return `
        <section class="view">
            <p class="eyebrow">${data.eyebrow}</p><h1>${data.title}</h1><p class="lead">${data.description}</p>
            <div class="solution-grid">${data.solutions.map((solution) => `<article class="solution"><span class="solution-number">${solution.number}</span><h3>${solution.title}</h3><p>${solution.text}</p></article>`).join('')}</div>
        </section>`;
}

function renderEvidencias(data) {
    return `
        <section class="view">
            <p class="eyebrow">${data.eyebrow}</p><h1>${data.title}</h1><p class="lead">${data.description}</p>
            <div class="evidence-grid" style="margin-top: 38px">${data.items.map((item) => `<figure class="evidence"><img src="${item.image}" alt="${item.title}"><figcaption><strong>${item.title}</strong><span>${item.type}</span></figcaption></figure>`).join('')}</div>
        </section>`;
}

const renderers = { resumen: renderResumen, equipo: renderEquipo, diagnostico: renderDiagnostico, propuesta: renderPropuesta, evidencias: renderEvidencias };

function showTab(tabName) {
    app.innerHTML = renderers[tabName](projectData[tabName]);
    tabs.forEach((tab) => {
        const active = tab.dataset.tab === tabName;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
    });
    history.replaceState(null, '', `#${tabName}`);
}

tabs.forEach((tab) => tab.addEventListener('click', () => showTab(tab.dataset.tab)));

const initialTab = window.location.hash.slice(1);
showTab(renderers[initialTab] ? initialTab : 'resumen');
