let data = JSON.parse(localStorage.getItem('firegospel')) || {
  accueilTitre: "Bienvenue dans la famille FIRE GOSPEL 🔥",
  accueilTexte: "Objectif: \n1. Nous soutenir à travers le monde\n2. Suivre les nouvelles du groupe\n3. Soutenir l'œuvre du Seigneur",
  numero: "+243 992 469 438",
  texteSoutien: "Votre soutien nous permet de propager l’Évangile et de toucher des âmes partout.",
  actualites: [{date:"07/08/2026", titre:"Lancement du Site", texte:"Bienvenue sur le site officiel FIRE GOSPEL by Aaron Elisha"}]
}

function show(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'))
  document.getElementById(id).classList.add('active')
  window.scrollTo(0,0)
  chargerContenu()
}

function chargerContenu(){
  document.getElementById('accueilTitre').innerText = data.accueilTitre
  document.getElementById('accueilTexte').innerText = data.accueilTexte
  document.getElementById('numero').innerText = data.numero
  document.getElementById('texteSoutien').innerText = data.texteSoutien

  let html = ''
  data.actualites.forEach(a=>{
    html += `<div class="card"><b>${a.date}</b><h4>${a.titre}</h4><p>${a.texte}</p></div>`
  })
  document.getElementById('listeActus').innerHTML = html
}

// ADMIN + FORM même code que avant
function login(){/* ... */}
function ajouterActu(){/* ... */}
function sauvegarder(){/* ... */}
function voirInscrits(){/* ... */}

document.getElementById('formInscription')?.addEventListener('submit', e=>{
  e.preventDefault()
  let inscrits = JSON.parse(localStorage.getItem('inscrits')) || []
  inscrits.push(Object.fromEntries(new FormData(e.target)))
  localStorage.setItem('inscrits', JSON.stringify(inscrits))
  document.getElementById('msg').innerText = "Merci ! Nous vous contacterons 🙏"
  e.target.reset()
})
chargerContenu()