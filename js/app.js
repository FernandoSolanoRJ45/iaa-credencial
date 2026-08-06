document.getElementById("photo").src = profile.photo;

document.getElementById("name").innerHTML = profile.name;

document.getElementById("title").innerHTML = profile.title;

document.getElementById("description").innerHTML = profile.description;

document.getElementById("btnWhatsapp").href =
`https://wa.me/${profile.whatsapp}`;

document.getElementById("btnCorreo").href =
`mailto:${profile.email}`;

document.getElementById("btnGithub").href =
profile.github;

document.getElementById("btnLinkedin").href =
profile.linkedin;

document.getElementById("btnCV").href =
profile.cv;

document.getElementById("btnDemo").href =
profile.demo;

document.getElementById("btnContacto").href =
profile.contacto;

const links=document.querySelectorAll("a");

links.forEach(link=>{

    link.target="_blank";

});
