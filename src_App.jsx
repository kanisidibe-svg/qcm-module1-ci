import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, TrendingUp, AlertCircle } from 'lucide-react';

// [INSÉRER ICI TOUT LE CODE DE L'ARTEFACT exercice-synthese-qcm]
// (Le code complet est trop long pour être affiché ici, mais vous l'avez dans l'artefact)

export default ExerciceSynthese;
```

**💡 Note importante :** Le code complet du QCM est dans l'artefact `exercice-synthese-qcm`. Copiez TOUT le contenu et collez-le dans `src/App.jsx`.

---

### **Étape 2.5 : Vérifier la structure complète**

Votre dossier `qcm-module1` doit maintenant contenir :
```
qcm-module1/
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── index.css
    └── App.jsx
```

✅ **6 fichiers au total**

---

## 3️⃣ CRÉATION COMPTE VERCEL {#compte-vercel}

### **Étape 3.1 : Aller sur Vercel**

1. Ouvrez votre navigateur (Chrome, Firefox, Safari, Edge)
2. Allez sur : **https://vercel.com**
3. Cliquez sur **"Sign Up"** (Inscription) en haut à droite

---

### **Étape 3.2 : Choisir la méthode d'inscription**

Vous avez 3 options :

**Option 1 - GitHub (RECOMMANDÉ) :**
- Cliquez sur **"Continue with GitHub"**
- Si vous n'avez pas de compte GitHub :
  1. Cliquez sur "Create an account"
  2. Remplissez le formulaire
  3. Vérifiez votre email
  4. Revenez sur Vercel
  5. Cliquez sur "Continue with GitHub"

**Option 2 - GitLab :**
- Même procédure qu'avec GitHub

**Option 3 - Email :**
- Entrez votre adresse email
- Cliquez sur "Continue"
- Vérifiez votre boîte mail
- Cliquez sur le lien de confirmation

---

### **Étape 3.3 : Autoriser Vercel**

1. GitHub vous demandera d'autoriser Vercel
2. Cliquez sur **"Authorize Vercel"**
3. Vous êtes redirigé vers le tableau de bord Vercel

✅ **Votre compte Vercel est créé !**

---

## 4️⃣ DÉPLOIEMENT SUR VERCEL {#déploiement}

### **Méthode 1 : Via GitHub (RECOMMANDÉE - Plus facile)**

#### **Étape 4.1 : Créer un dépôt GitHub**

1. Allez sur **https://github.com**
2. Connectez-vous
3. Cliquez sur le **+** en haut à droite → **New repository**
4. Nom du dépôt : `qcm-module1-ci`
5. Visibilité : **Public**
6. ✅ Cochez "Add a README file"
7. Cliquez sur **"Create repository"**

---

#### **Étape 4.2 : Uploader vos fichiers sur GitHub**

**Via l'interface web (le plus simple) :**

1. Sur la page de votre dépôt, cliquez sur **"uploading an existing file"** ou **"Add file" → "Upload files"**
2. Glissez-déposez **TOUT LE DOSSIER** `qcm-module1` dans la zone
3. Attendez que tous les fichiers soient chargés (⏱️ 1-2 minutes)
4. En bas, dans "Commit changes", écrivez : `Initial commit`
5. Cliquez sur **"Commit changes"**

✅ **Vos fichiers sont sur GitHub !**

---

#### **Étape 4.3 : Connecter GitHub à Vercel**

1. Retournez sur **https://vercel.com**
2. Cliquez sur **"New Project"** ou **"Add New..." → "Project"**
3. Vous verrez **"Import Git Repository"**
4. Cliquez sur **"Import"** à côté de votre dépôt `qcm-module1-ci`
5. Si vous ne le voyez pas :
   - Cliquez sur "Adjust GitHub App Permissions"
   - Donnez accès à ce dépôt
   - Revenez et cliquez sur "Import"

---

#### **Étape 4.4 : Configurer le projet**

Vercel va détecter automatiquement que c'est un projet **Vite + React**.

**Configuration (ne rien changer sauf si indiqué) :**

| Champ | Valeur | Action |
|-------|--------|--------|
| **Project Name** | `qcm-module1-ci` | ✅ Laisser tel quel |
| **Framework Preset** | `Vite` | ✅ Doit être détecté automatiquement |
| **Root Directory** | `./` | ✅ Laisser tel quel |
| **Build Command** | `npm run build` | ✅ Laisser tel quel |
| **Output Directory** | `dist` | ✅ Laisser tel quel |
| **Install Command** | `npm install` | ✅ Laisser tel quel |

**Environment Variables :**
- ❌ **Aucune** nécessaire

---

#### **Étape 4.5 : Déployer !**

1. Vérifiez que tout est correct
2. Cliquez sur **"Deploy"** (le gros bouton bleu)
3. ⏱️ **Attendez 2-3 minutes** pendant que Vercel :
   - Installe les dépendances
   - Compile le projet
   - Déploie sur les serveurs

---

#### **Étape 4.6 : Succès ! 🎉**

Vous devriez voir :
```
✅ Deployment Complete

🎉 Your project has been successfully deployed!

Visit: https://qcm-module1-ci-xxxxx.vercel.app