// Inicialización de iconos SVG Lucide
lucide.createIcons();

document.getElementById("brand-name").innerHTML = "IAA <span>.ANALYTICS</span>";
document.getElementById("profile-avatar").src = "img/foto.jpg";
document.getElementById("badge-role").innerHTML = "Industrial Solutions Specialist";
document.getElementById("profile-name").innerHTML = "Fernando Solano";
document.getElementById("profile-bio").innerHTML = "Especialista en integración de sistemas de analítica industrial, automatización de datos IoT y arquitectura de software para la industria 4.0.";
document.getElementById("meta-badge-city").innerHTML = "📍 León, Gto. México";
document.getElementById("meta-badge-company").innerHTML = "💼 iaa.analytics Inc.";
document.getElementById("action-btn-tel").href = "tel:+524778487537";
document.getElementById("action-btn-mailto").href = "mailto:desarrollocpaq2@gmail.com";
document.getElementById("action-btn-ws").href = "https://wa.me/524778487537";
document.getElementById("action-btn-cv").href = "download/CV_Jesus Fernando Solano Ramirez_ATS.pdf";
document.getElementById("action-btn-cv").download = "CV_Jesus Fernando Solano Ramirez_ATS.pdf";
document.getElementById("social-linkedin").href = "https://linkedin.com";
document.getElementById("in-handle").innerHTML = "/in/fernando-solano-029738354";
document.getElementById("social-github").href = "https://github.com";
document.getElementById("gh-handle").innerHTML = "@FernandoSolanoRJ45";
document.getElementById("web-handle").innerHTML = "www.iaa-analytics.mx";
document.getElementById("perfil-cv").href = "download/CV_Jesus Fernando Solano Ramirez_ATS.pdf";
document.getElementById("perfil-cv").download = "CV_Jesus Fernando Solano Ramirez_ATS.pdf";
document.getElementById("perfil-resume").innerHTML = "Arquitecto de Soluciones e Integrador de Software Senior con más de 20 años de trayectoria liderando el diseño, desarrollo y conectividad de sistemas críticos de negocio. Especialista en optimizar y unificar procesos operativos dependientes pero fragmentados: diseño puentes de datos, APIs y arquitecturas de software que consolidan aplicaciones aisladas en flujos automatizados para la toma de decisiones directivas. Con una sólida especialización en los últimos 2.5 años en Inteligencia Artificial (LLMs, RAG, Fine-tuning y automatización visual), fusiono la experiencia de procesos administrativos, logística y manufactura tradicional (sector calzado, seguridad y agro) con tecnología de vanguardia para transformar la operación empresarial de extremo a extremo.";

// Cambio de Pestañas
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');

    document.querySelectorAll('.nav-desktop button').forEach(el => el.classList.remove('active'));
    const desktopNav = document.getElementById(`nav-${tabId}`);
    if (desktopNav) desktopNav.classList.add('active');

    document.querySelectorAll('.mob-nav button').forEach(el => el.classList.remove('active'));
    const mobNav = document.getElementById(`mob-nav-${tabId}`);
    if (mobNav) mobNav.classList.add('active');
            
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal QR
function toggleQRModal() {
    const modal = document.getElementById('qr-modal');
    modal.classList.toggle('hidden');
}

// =========================================================================
// BANCO DE DATOS DE PROYECTOS
// Para agregar un nuevo proyecto, simplemente copia y pega uno de estos objetos
// =========================================================================
const projectsData = [
    {
        id: 1,
        title: "Servicios de Menús Digitales con QR",
        category: "web",
        categoryLabel: "Saas / Cloud",
        img: "./img/iaa-pizzas.png",
        shortDesc: "Sistema web distribuido para mostrar el menú de manera digital.",
        fullDesc: "Sistema web distribuido para mostrar el menú de manera digital.",
        tags: ["HTML", "CSS", "Javascript"],
        featured: true,                  // true = aparece también en la página de inicio
        demoUrl: "https://iaapizzas.vercel.app/?_vercel_share=sKMDfASZQdSR3tEhyMksneSXaay4EmyA" // Enlace opcional al Demo
    },
    {
        id: 2,
        title: "Plataforma SCADA Telemetry Cloud",
        category: "iot",                // Para filtrado: 'iot', 'analytics', 'web'
        categoryLabel: "IoT / Telemetría",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        shortDesc: "Sistema web distribuido para monitorear +500 sensores industriales PLC en plantas siderúrgicas.",
        fullDesc: "Arquitectura integral de comunicación en tiempo real para la recolección de datos de +500 sensores PLC Siemens S7-1200 distribuidos en plantas siderúrgicas. Permite supervisión remota y alertas preventivas.",
        tags: ["Python", "MQTT", "React", "Docker", "TimescaleDB"],
        featured: true,                  // true = aparece también en la página de inicio
        demoUrl: null // Sin demo en vivo disponible
        
    },
    {
        id: 3,
        title: "Predictive Maintenance AI",
        category: "analytics",
        categoryLabel: "Data Analytics",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        shortDesc: "Algoritmos de aprendizaje automático para predecir fallas en turbinas.",
        fullDesc: "Desarrollo de modelos predictivos mediante redes neuronales convolucionales analizando datos de vibración y temperatura en turbinas pesadas, reduciendo paros no programados en un 35%.",
        tags: ["TensorFlow", "FastAPI", "Python", "Grafana", "Kubernetes"],
        featured: true,
        demoUrl: null // Sin demo en vivo disponible
    },
    {
        id: 4,
        title: "Dashboard de Métricas OEE",
        category: "web",
        categoryLabel: "Software Empresarial",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        shortDesc: "Panel de control de Eficiencia General de Equipos (OEE) para supervisores de producción.",
        fullDesc: "Interfaz moderna para monitorear la Eficiencia General de los Equipos (Disponibilidad, Rendimiento y Calidad) en tiempo real con reportes exportables a ejecutivos.",
        tags: ["Vue.js", "Node.js", "PostgreSQL", "Vanilla CSS"],
        featured: false,
        demoUrl: null // Sin demo en vivo disponible
    },
    {
        id: 5,
        title: "Sistema de Visión Artificial para Control de Calidad",
        category: "analytics",
        categoryLabel: "Computer Vision",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
        shortDesc: "Detección automatizada de defectos superficiales en líneas de ensamble a alta velocidad.",
        fullDesc: "Inspección óptica automatizada con algoritmos OpenCV y PyTorch procesando 60 cuadros por segundo para identificar microfisuras en piezas metálicas antes del embalaje.",
        tags: ["OpenCV", "PyTorch", "Python", "C++"],
        featured: false,
        demoUrl: null
    }
];

// =========================================================================
// BANCO DE DATOS LABORALES
// Para agregar un nuevo empleo, simplemente copia y pega uno de estos objetos
// =========================================================================
const laboralData = [
    {
        id: 1,
        title: "Desarrollo de Modelos Predictivos / Especialista en IA Aplicada",
        labor: [
            { empleo: "Consultoría Independiente / Investigación | Estado de Gto.", tiempo: "2024 - Actualmente"}
        ], 
        act: [
            "Despliegue y optimización de sistemas RAG corporativos y codificación con asistencia IA.",
            "Diseño y entrenamiento de LoRAs, modelos especializados de imágenes y datos estructurados usando Fooocus y Stable Diffusion.",
            "Ingeniería de Prompts para plataformas e IA Local y desarrollo de interfaz para IA local.",
            "Generación automatizada y masiva de assets visuales de alta velocidad reduciendo tiempos de entrega en un 60% y alto volumen en diseño de imagenes.",
            "Estadística, Minería de datos."
        ]
    },
    {
        id: 2,
        title: "Análisis de Datos / Seguridad",
        labor: [
            { empleo: "Serviseg S.A. de C.V. Outsourcing Para AAM de México. | Silao, Gto. México.", tiempo: "2018 - 2019"}
        ], 
        act: [
            "Análisis y Estadísticas en las métricas de seguridad.",
            "Monitoreo en accesos, seguridad y control de alarmas.",
            "Captura, limpieza y proyección estadistica de los datos."
        ]
    },
    {
        id: 3,
        title: "Programador Analista / Soporte técnico",
        labor: [
            { empleo: "Cueromex Wet blue S.A. de C.V. | León, Gto. México.", tiempo: "2012 - 2013"},
            { empleo: "RV Tecnologías de Información. | León, Gto. México.", tiempo: "2011 - 2012"},
            { empleo: "Química Stoever. | León, Gto. México.", tiempo: "2008 - 2011"},
            { empleo: "Calzado Trossos. | León, Gto. México.", tiempo: "2018 - 2019"},
            { empleo: "Zapatería Chihuahua Centro. | León, Gto. México.", tiempo: "2000 - 2003"},
            { empleo: "Zapaterías Destroyer e Impuls. | León, Gto. México.", tiempo: "1997 - 1999"},
            { empleo: "Alcaldía del Municipio de León | León, Gto. México.", tiempo: "1996 - 1997"}    
        ], 
        act: [
            "Desarrollo de aplicaciones y reportes para el sistema Compaq i.",
            "Soporte técnico especializado a bases de datos.",
            "Estadística y minería de datos.",
            "Administración de Sistemas y Auditoría de Sistemas.",
            "Desarrollo de aplicaciones utilizando el lenguaje <strong>PHP</strong>."
        ]
    },
    {
        id: 4,
        title: "Programador Jr. / Outsourcing / Freelancer",
        labor: [
            { empleo: "Almaximo Consultoria TI | León, Gto. México.", tiempo: "2023 - 2024"},
            { empleo: "Young Guns S.A. de C.V. | León, Gto. México.", tiempo: "2023 - 2023"},
            { empleo: "KSP Technology. | León, Gto. México.", tiempo: "2022 - 2022"}
        ], 
        act: [
            "Actualización y Mantenimiento de Apps con .NET Core/.NET 6./ VB.Net/ASP.NET y PHP.",
            "Soporte a microservicios Web con .Net Core, Java y Apache Camel.",
            "Desarrollo Web y contenido para redes sociales.",
            "Desarrollo de reportes en Excel Avanzado y aplicaciones administrativas en ASP NET."
        ]
    }
];

// Renderiza las experiencias laborales en la sección de Laboral
function renderLaboral() {
    const grid = document.getElementById('timeline-grid');
    if (!grid) return;

    grid.innerHTML = laboralData.map(l => `
        <div class="timeline-item">
            <h4>${l.title}</h4>
            <span class="timeline-dot muted"></span>
            ${l.labor.map(t => `
                <div class="timeline-meta muted">
                    <span>${t.empleo}</span>
                    <span>${t.tiempo}</span>
                </div>
            `).join('')}
            <div>
                <section class="timeline-meta muted sec-op">
                    <ul>
                        ${l.act.map(t => `
                            <li>${t}</li>
                        `).join('')}
                    </ul>
                </section>
            </div>
        </div>
    `).join('');
}

// Renderiza los proyectos en la sección de Portafolio
function renderPortfolio(filterCategory = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    const filteredProjects = filterCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filterCategory);

    grid.innerHTML = filteredProjects.map(project => `
        <div class="project-card portfolio-item ${project.category}">
            <div>
                <div class="project-img-box">
                    <img src="${project.img}" alt="${project.title}">
                    <div class="gradient-overlay"></div>
                    <span class="cat-badge">${project.categoryLabel}</span>
                </div>
                <div class="project-body">
                    <h3>${project.title}</h3>
                    <p>${project.shortDesc}</p>
                    <div class="tag-list">
                        ${project.tags.map(t => `<span class="tag-item">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            <!--div class="project-footer">
                <button onclick="openProjectModal(${project.id})" class="btn-details">
                    Ver detalles <i data-lucide="eye" style="width: 14px; height: 14px; color: var(--cyan-glow);"></i>
                </button>
            </div-->
            <div class="project-footer" style="display: flex; gap: 8px;">
                <button onclick="openProjectModal(${project.id})" class="btn-details" style="flex: 1;">
                    Ver detalles <i data-lucide="eye" style="width: 14px; height: 14px; color: var(--cyan-glow);"></i>
                </button>
                ${project.demoUrl ? `
                    <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-demo">
                        Demo <i data-lucide="external-link" style="width: 14px; height: 14px;"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');

    // Renderiza nuevamente los iconos de Lucide cargados dinámicamente
    lucide.createIcons();
}

// Renderiza proyectos destacados en la tarjeta principal (Inicio)
function renderMiniProjects() {
    const container = document.getElementById('mini-projects-grid');
    if (!container) return;

    const featured = projectsData.filter(p => p.featured).slice(0, 2);

    container.innerHTML = featured.map(p => `
        <div class="mini-project-card" onclick="openProjectModal(${p.id})">
            <span class="cat">${p.categoryLabel}</span>
            <h4>${p.title}</h4>
            <p>${p.shortDesc}</p>
        </div>
    `).join('');
}

// Evento para cambiar de filtro
function filterPortfolio(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    renderPortfolio(category);
}

// Apertura de modal con datos dinámicos
function openProjectModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    document.getElementById('modal-project-title').innerText = project.title;
    document.getElementById('modal-project-cat').innerText = project.categoryLabel;
    document.getElementById('modal-project-img').src = project.img;
    document.getElementById('modal-project-desc').innerText = project.fullDesc;
            
    const tagsContainer = document.getElementById('modal-project-tags');
        tagsContainer.innerHTML = project.tags.map(tag => 
        `<span class="tag-item">${tag}</span>`
    ).join('');

    document.getElementById('project-modal').classList.remove('hidden');
    
    // Link de Detalles del Proyecto.
    document.getElementById("demo-link").innerHTML = `
        ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-demo">
                Demo <i data-lucide="external-link" style="width: 14px; height: 14px;"></i>
            </a>
        ` : ''}
    `;
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.add('hidden');
}

// Inicializar renderizado automático al cargar la ventana
window.addEventListener('DOMContentLoaded', () => {
    renderLaboral();
    renderMiniProjects();
    renderPortfolio('all');
});

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
