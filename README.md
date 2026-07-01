# Imaginaires Sans Frontières 🎲✨

Bienvenue dans le dépôt officiel d'**Imaginaires Sans Frontières**, une association dédiée à apporter des moments de joie et d'évasion aux patient.e.s hospitalisés grâce à des parenthèses ludiques (jeux de rôle, aventures contées).

Ce projet a été conçu pour être le plus simple, léger et portable possible afin de permettre à n'importe qui, n'importe où dans le monde, de répliquer ce site et de lancer sa propre antenne locale d'Imaginaires Sans Frontières.

---

## Comment Répliquer ce Projet 

Il n'y a **aucun outil complexe** à installer (pas de base de données, pas de compilateur CSS, pas de framework). C'est du HTML/CSS pur.

### Option A : Déploiement en 1 clic sur GitHub Pages

1. **Forkez ou dupliquez** ce dépôt sur votre compte GitHub.
2. Allez dans les **Settings** (Paramètres) de votre dépôt GitHub.
3. Dans le menu de gauche, cliquez sur **Pages**.
4. Sous **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez la branche `main` (ou `gh-pages` si vous utilisez le workflow automatique d'intégration continue inclus dans `.github/workflows/ci.yml`) et le dossier racine `/`.
6. Cliquez sur **Save**. Votre site sera en ligne en quelques secondes !

### Option B : Déploiement sur Netlify, Vercel ou n'importe quel hébergeur statique

Glissez-déposez simplement le dossier de ce projet sur la plateforme de votre choix (par exemple sur [Netlify Drop](https://app.netlify.com/drop)).

---

## 🛠️ Personnalisation du Site

Pour adapter le site à votre propre association ou antenne, ouvrez le fichier `index.html` dans un éditeur de texte (comme VS Code) et modifiez les sections suivantes :

### 1. Mettre à jour les textes & liens
- **Titre & Métadonnées** : Modifiez les balises `<title>` et `<meta name="description">` dans le `<head>`.
- **Adresse e-mail de contact** : Cherchez les liens `mailto:contact@imaginairessansfrontieres.fr` et remplacez-les par votre propre adresse e-mail.
- **Réseaux sociaux** : Remplacez l'URL Instagram dans le footer par le lien de votre page.
- **L'Équipe** : Modifiez les noms, les descriptions (ex: *Alchimiste des Rêves*, *Artisan des Quêtes*) et remplacez les avatars par des liens vers vos propres photos ou illustrations.

### 2. Remplacer les logos et images
Tous les visuels sont stockés dans le dossier `img/`. Il vous suffit de remplacer les fichiers suivants en gardant les mêmes noms :
- `img/logo-isf.svg` : Le logo simplifié utilisé dans la barre de navigation.
- `img/logo-isf-fullart.svg` : Le logo artistique principal affiché sur la page d'accueil.
- `img/favicon.ico` : L'icône de l'onglet du navigateur.


---

## 🤝 Rejoindre et Contribuer

Ce projet est né de l'initiative de deux passionnés de jeux désireux de partager des moments d'évasion. Nous sommes entièrement bénévoles, l'accès est totalement gratuit et sans frais. Tout reste à construire !
Nous n'avons pas de formule magique ni de solution préconçue pour tout améliorer : c'est pourquoi vos idées, vos retours et vos contributions sont les bienvenus.

### Comment vous impliquer ?
- **Répliquer le concept** : Lancez des sessions de jeux ou créez une antenne locale dans votre propre ville ou hôpital.
- **Proposer des améliorations** : Que ce soit pour le design du site, de nouvelles idées d'activités ou des corrections de texte, toutes les contributions sont bienvenues.
- **Ajouter votre antenne locale sur ce site** :
  - *Si vous n'êtes pas développeur* : [Ouvrez simplement une issue sur GitHub](https://github.com/imaginaires/imaginaires.github.io/issues/new) pour nous transmettre les coordonnées et informations de votre antenne afin que nous l'ajoutions.
  - *Si vous savez coder* : Proposez une Pull Request (PR) pour intégrer votre antenne directement au code du site.


---

## 📄 Licence

Ce projet est distribué sous la licence **Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International (CC BY-NC-SA 4.0)**. 

Vous êtes libre de partager et d'adapter ce projet tant que vous donnez le crédit à l'œuvre originale, n'en faites pas d'usage commercial, et redistribuez vos contributions sous la même licence. Voir le fichier [LICENSE](file:///home/mt/Documents/projects/asso-isf/imaginaires/LICENSE) pour plus de détails.
