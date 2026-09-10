// app.js

// Inicialización de iconos SVG Lucide
lucide.createIcons();

// Cambio de Pestañas
function switchTab(tabId) {
    // Ocultar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            
    // Activar pestaña seleccionada
    document.getElementById(`tab-${tabId}`).classList.add('active');

    // Actualizar estado activo en Desktop Navbar
    document.querySelectorAll('.nav-desktop button').forEach(el => el.classList.remove('active'));
    const desktopNav = document.getElementById(`nav-${tabId}`);
    if (desktopNav) desktopNav.classList.add('active');

    // Actualizar estado activo en Móvil Navbar
    document.querySelectorAll('.mob-nav button').forEach(el => el.classList.remove('active'));
    const mobNav = document.getElementById(`mob-nav-${tabId}`);
    if (mobNav) mobNav.classList.add('active');
            
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filtro de proyectos en Portafolio
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Modal QR
function toggleQRModal() {
    const modal = document.getElementById('qr-modal');
    modal.classList.toggle('hidden');
}

// Datos del Modal de Proyectos
const projectData = {
    1: {
        title: "Plataforma SCADA Telemetry Cloud",
        cat: "IoT Industrial",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        desc: "Arquitectura integral de comunicación en tiempo real para la recolección de datos de +500 sensores PLC Siemens S7-1200 distribuidos en plantas siderúrgicas. Permite supervisión remota y alertas preventivas.",
        tags: ["Python", "MQTT", "React", "Docker", "TimescaleDB"]
    },
    2: {
        title: "Predictive Maintenance AI Engine",
        cat: "Data Analytics",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        desc: "Desarrollo de modelos predictivos mediante redes neuronales convolucionales analizando datos de vibración y temperatura en turbinas pesadas, reduciendo paros no programados en un 35%.",
        tags: ["TensorFlow", "FastAPI", "Python", "Grafana", "Kubernetes"]
    },
    3: {
        title: "Dashboard de Métricas OEE",
        cat: "Software Empresarial",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        desc: "Interfaz moderna para monitorear la Eficiencia General de los Equipos (Disponibilidad, Rendimiento y Calidad) en tiempo real con reportes exportables a ejecutivos.",
        tags: ["Vue.js", "Node.js", "PostgreSQL", "Vanilla CSS"]
    }
};

function openProjectModal(id) {
    const project = projectData[id];
    if(!project) return;

    document.getElementById('modal-project-title').innerText = project.title;
    document.getElementById('modal-project-cat').innerText = project.cat;
    document.getElementById('modal-project-img').src = project.img;
    document.getElementById('modal-project-desc').innerText = project.desc;
            
    const tagsContainer = document.getElementById('modal-project-tags');
    tagsContainer.innerHTML = project.tags.map(tag => 
        `<span class="tag-item">${tag}</span>`
    ).join('');

    document.getElementById('project-modal').classList.remove('hidden');
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.add('hidden');
}

// Descarga de tarjeta VCard (.vcf)
function downloadVCard() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Fernando Solano
TITLE:Industrial Solutions Specialist
ORG:iaa.analytics Inc.
TEL;TYPE=CELL:+524778487537
EMAIL:desarrollocpaq2@gmail.com
URL:https://iaa-analytics.mx
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Fernando_Solano_Contacto.vcf');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Enviar Formulario
function handleFormSubmit(e) {
    e.preventDefault();
    document.getElementById('contact-form').reset();
    const msg = document.getElementById('form-success');
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.display = 'none';
    }, 4000);
}
