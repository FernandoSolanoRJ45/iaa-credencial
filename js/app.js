// Inicialización de iconos SVG Lucide
lucide.createIcons();

document.getElementById("brand-name").innerHTML = profile.name;
document.getElementById("profile-avatar").src = profile.avatar;
document.getElementById("badge-role").innerHTML = profile.badgerole;
document.getElementById("profile-avatar").alt = profile.user;
document.getElementById("profile-name").innerHTML = profile.user;
document.getElementById("profile-bio").innerHTML = profile.bio;
document.getElementById("meta-badge-city").innerHTML = profile.city;
document.getElementById("meta-badge-company").innerHTML = profile.company;
document.getElementById("action-btn-tel").href = profile.tel;
document.getElementById("action-btn-mailto").href = profile.mailto;
document.getElementById("action-btn-ws").href = profile.ws;
document.getElementById("action-btn-cv").href = profile.cv;
document.getElementById("action-btn-cv").download = profile.download;
document.getElementById("social-linkedin").href = profile.linkedin;
document.getElementById("in-handle").innerHTML = profile.in_user;
document.getElementById("social-github").href = profile.github;
document.getElementById("gh-handle").innerHTML = profile.gh_user;
document.getElementById("web-handle").innerHTML = profile.web;

document.getElementById("mini-proj-c1-cat").innerHTML = profile.proyectos[0].catbadge;
document.getElementById("mini-proj-c1-titulo").innerHTML = profile.proyectos[0].titulo;
document.getElementById("mini-proj-c1-descripcion").innerHTML = profile.proyectos[0].descripcion;
document.getElementById("perfil-cv").href = profile.cv;
document.getElementById("perfil-cv").download = profile.download;
document.getElementById("perfil-resume").innerHTML = profile.perfil_resume;
document.getElementById("proyecto-1-img").src = profile.proyectos[0].imagen;
document.getElementById("proyecto-1-cat-badge").innerHTML = profile.proyectos[0].catbadge;
document.getElementById("proyecto-1-titulo").innerHTML = profile.proyectos[0].titulo;
document.getElementById("proyecto-1-descripcion").innerHTML = profile.proyectos[0].descripcion;
document.getElementById("proyecto-1-taglist").innerHTML = profile.proyectos[0].taglist;
document.getElementById("skill-header-1").innerHTML = profile.proyectos[0].titulo + " " + profile.proyectos[0].list;
document.getElementById("skill-header-1-porc").innerHTML = profile.proyectos[0].competencia_tec;
document.getElementById("skill-header-1-style").style = profile.proyectos[0].skillbar;

document.getElementById("mini-proj-c2-cat").innerHTML = profile.proyectos[1].catbadge;
document.getElementById("mini-proj-c2-titulo").innerHTML = profile.proyectos[1].titulo;
document.getElementById("mini-proj-c2-descripcion").innerHTML = profile.proyectos[1].descripcion;
document.getElementById("proyecto-2-img").src = profile.proyectos[1].imagen;
document.getElementById("proyecto-2-cat-badge").innerHTML = profile.proyectos[1].catbadge;
document.getElementById("proyecto-2-titulo").innerHTML = profile.proyectos[1].titulo;
document.getElementById("proyecto-2-descripcion").innerHTML = profile.proyectos[1].descripcion;
document.getElementById("proyecto-2-taglist").innerHTML = profile.proyectos[1].taglist;
document.getElementById("skill-header-2").innerHTML = profile.proyectos[1].titulo + " " + profile.proyectos[1].list;
document.getElementById("skill-header-2-porc").innerHTML = profile.proyectos[1].competencia_tec;
document.getElementById("skill-header-2-style").style = profile.proyectos[1].skillbar;

document.getElementById("proyecto-3-img").src = profile.proyectos[2].imagen;
document.getElementById("proyecto-3-cat-badge").innerHTML = profile.proyectos[2].catbadge;
document.getElementById("proyecto-3-titulo").innerHTML = profile.proyectos[2].titulo;
document.getElementById("proyecto-3-descripcion").innerHTML = profile.proyectos[2].descripcion;
document.getElementById("proyecto-3-taglist").innerHTML = profile.proyectos[2].taglist;
document.getElementById("skill-header-3").innerHTML = profile.proyectos[2].titulo + " " + profile.proyectos[2].list;
document.getElementById("skill-header-3-porc").innerHTML = profile.proyectos[2].competencia_tec;
document.getElementById("skill-header-3-style").style = profile.proyectos[2].skillbar;

document.getElementById("experiencias-1-titulo").innerHTML = profile.experiencias[0].titulo;
document.getElementById("empleo-1-com-1").innerHTML = profile.experiencias[0].empleos[0].empleo;
document.getElementById("empleo-1-time-1").innerHTML = profile.experiencias[0].empleos[0].tiempo;
document.getElementById("experiencias-1-act").innerHTML = "<li>"+profile.experiencias[0].act[0]+"</li><li>"+profile.experiencias[0].act[1]+"</li><li>"+profile.experiencias[0].act[2]+"</li><li>"+profile.experiencias[0].act[3]+"</li><li>"+profile.experiencias[0].act[4]+"</li>";

document.getElementById("experiencias-2-titulo").innerHTML = profile.experiencias[1].titulo;
document.getElementById("empleo-2-com-1").innerHTML = profile.experiencias[1].empleos[0].empleo;
document.getElementById("empleo-2-time-1").innerHTML = profile.experiencias[1].empleos[0].tiempo;
document.getElementById("experiencias-2-act").innerHTML = "<li>"+profile.experiencias[1].act[0]+"</li><li>"+profile.experiencias[1].act[1]+"</li><li>"+profile.experiencias[1].act[2]+"</li>";

document.getElementById("experiencias-3-titulo").innerHTML = profile.experiencias[2].titulo;
document.getElementById("empleo-3-com-1").innerHTML = profile.experiencias[2].empleos[0].empleo;
document.getElementById("empleo-3-time-1").innerHTML = profile.experiencias[2].empleos[0].tiempo;
document.getElementById("empleo-3-com-2").innerHTML = profile.experiencias[2].empleos[1].empleo;
document.getElementById("empleo-3-time-2").innerHTML = profile.experiencias[2].empleos[1].tiempo;
document.getElementById("empleo-3-com-3").innerHTML = profile.experiencias[2].empleos[2].empleo;
document.getElementById("empleo-3-time-3").innerHTML = profile.experiencias[2].empleos[2].tiempo;
document.getElementById("empleo-3-com-4").innerHTML = profile.experiencias[2].empleos[3].empleo;
document.getElementById("empleo-3-time-4").innerHTML = profile.experiencias[2].empleos[3].tiempo;
document.getElementById("empleo-3-com-5").innerHTML = profile.experiencias[2].empleos[4].empleo;
document.getElementById("empleo-3-time-5").innerHTML = profile.experiencias[2].empleos[4].tiempo;
document.getElementById("empleo-3-com-6").innerHTML = profile.experiencias[2].empleos[5].empleo;
document.getElementById("empleo-3-time-6").innerHTML = profile.experiencias[2].empleos[5].tiempo;
document.getElementById("empleo-3-com-7").innerHTML = profile.experiencias[2].empleos[6].empleo;
document.getElementById("empleo-3-time-7").innerHTML = profile.experiencias[2].empleos[6].tiempo;
document.getElementById("experiencias-3-act").innerHTML = "<li>"+profile.experiencias[2].act[0]+"</li><li>"+profile.experiencias[2].act[1]+"</li><li>"+profile.experiencias[2].act[2]+"</li><li>"+profile.experiencias[2].act[3]+"</li><li>"+profile.experiencias[2].act[4]+"</li>";

document.getElementById("experiencias-4-titulo").innerHTML = profile.experiencias[3].titulo;
document.getElementById("empleo-4-com-1").innerHTML = profile.experiencias[3].empleos[0].empleo;
document.getElementById("empleo-4-time-1").innerHTML = profile.experiencias[3].empleos[0].tiempo;
document.getElementById("empleo-4-com-2").innerHTML = profile.experiencias[3].empleos[1].empleo;
document.getElementById("empleo-4-time-2").innerHTML = profile.experiencias[3].empleos[1].tiempo;
document.getElementById("empleo-4-com-3").innerHTML = profile.experiencias[3].empleos[2].empleo;
document.getElementById("empleo-4-time-3").innerHTML = profile.experiencias[3].empleos[2].tiempo;
document.getElementById("experiencias-4-act").innerHTML = "<li>"+profile.experiencias[3].act[0]+"</li><li>"+profile.experiencias[3].act[1]+"</li><li>"+profile.experiencias[3].act[2]+"</li><li>"+profile.experiencias[3].act[3]+"</li>";

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
        title: profile.proyectos[0].titulo,
        cat: profile.proyectos[0].catbadge,
        img: profile.proyectos[0].imagen,
        desc: profile.proyectos[0].detalles,
        tags: profile.proyectos[0].tags
    },
    2: {
        title: profile.proyectos[1].titulo,
        cat: profile.proyectos[1].catbadge,
        img: profile.proyectos[1].imagen,
        desc: profile.proyectos[1].detalles,
        tags: profile.proyectos[1].tags
    },
    3: {
        title: profile.proyectos[2].titulo,
        cat: profile.proyectos[2].catbadge,
        img: profile.proyectos[2].imagen,
        desc: profile.proyectos[2].detalles,
        tags: profile.proyectos[2].tags
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
