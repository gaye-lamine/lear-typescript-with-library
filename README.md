
```markdown
# 📚 Learn TypeScript with Library

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

Un projet de gestion de bibliothèque en TypeScript, conçu pour apprendre et pratiquer les concepts de TypeScript et Node.js. Ce projet permet de gérer une collection de livres, d'ajouter, de rechercher, de supprimer, d'emprunter et de retourner des livres.

---

## 🚀 Fonctionnalités

- **Ajouter un livre** : Ajoutez un nouveau livre à la bibliothèque.
- **Rechercher un livre** : Recherchez un livre par titre ou par auteur.
- **Supprimer un livre** : Supprimez un livre de la bibliothèque par son titre.
- **Lister tous les livres** : Affichez la liste complète des livres disponibles.
- **Emprunter un livre** : Marquez un livre comme emprunté.
- **Retourner un livre** : Marquez un livre comme retourné.

---

## 📦 Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/gaye-lamine/lear-typescript-with-library.git
   cd lear-typescript-with-library
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Compiler le projet TypeScript** :
   ```bash
   npm run build
   ```

4. **Lancer le projet** :
   ```bash
   npm start
   ```

---

## 🛠 Utilisation

### Ajouter un livre
```bash
> Entrez le titre du livre : Le Petit Prince
> Entrez l'auteur du livre : Antoine de Saint-Exupéry
> Entrez l'année de publication : 1943
> Est-il disponible (oui/non) ? oui
Livre "Le Petit Prince" ajouté avec succès !
```

### Rechercher un livre par titre
```bash
> Entrez le titre à rechercher : Petit
Résultats trouvés :
- Le Petit Prince par Antoine de Saint-Exupéry, publié en 1943 - Disponible
```

### Emprunter un livre
```bash
> Entrez le titre du livre à emprunter : Le Petit Prince
Le livre "Le Petit Prince" est emprunté avec succès.
```

### Retourner un livre
```bash
> Entrez le titre du livre à retourner : Le Petit Prince
Le livre "Le Petit Prince" est retourné avec succès.
```

---

## 🧩 Structure du projet

```
.
├── src/
│   ├── Livre.ts                # Classe Livre
│   ├── Bibliotheque.ts         # Classe Bibliotheque
│   └── main.ts                 # Point d'entrée du programme
├── dist/                       # Fichiers compilés (JavaScript)
├── package.json                # Configuration du projet
├── tsconfig.json               # Configuration TypeScript
└── README.md                   # Documentation du projet
```

---

## 🛠 Dépendances

- **TypeScript** : Pour le typage statique et la compilation.
- **prompt-sync** : Pour interagir avec l'utilisateur en console.

---

## 🚀 Développement

1. **Compiler le projet en mode watch** :
   ```bash
   npm run build:watch
   ```

2. **Lancer le projet en mode développement** :
   ```bash
   npm run dev
   ```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, suivez ces étapes :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Committez vos changements (`git commit -m 'Ajouter une fonctionnalité incroyable'`).
4. Pushez la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- Merci à la communauté TypeScript pour les ressources et le support.
- Merci à [prompt-sync](https://www.npmjs.com/package/prompt-sync) pour la gestion des entrées utilisateur en console.

---

✨ **Profitez de votre bibliothèque numérique !** ✨

---

🔗 **Lien du projet** : [https://github.com/gaye-lamine/lear-typescript-with-library](https://github.com/gaye-lamine/lear-typescript-with-library)
```

---

### **Badges ajoutés :**
- **TypeScript** : Pour indiquer que le projet utilise TypeScript.
- **Node.js** : Pour montrer que le projet est exécuté avec Node.js.
- **License** : Pour indiquer que le projet est sous licence MIT.

---

### **Comment ajouter ce README à ton projet :**
1. Copie le contenu du README ci-dessus.
2. Colle-le dans un fichier `README.md` à la racine de ton projet.
3. Commit et push les changements :
   ```bash
   git add README.md
   git commit -m "Ajout d'un README détaillé avec badges"
   git push origin main
   ```

