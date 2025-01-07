---
metatitle: Configurer un Agent IA | Guide de l'Utilisateur FabriXAI
description: Apprenez à configurer des agents IA sur FabriXAI avec ce guide étape par étape.
lang: fr-FR
permalink: /configure-ai-agent
---

# Configurer l'Agent IA

## Créez vos agents IA personnalisés dans Guide de l'utilisateur FabriXAI
description: Apprenez à configurer des agents IA sur FabriXAI avec ce guide étape par étape.
lang: fr
permalink: /configure-ai-agent
---

# Configurer l'Agent IA

## Créez vos agents IA personnalisés dans FabriXAI

Les agents IA dans FabriXAI sont conçus pour automatiser les flux de travail et améliorer des cas d'utilisation spécifiques. Avec FabriXAI, vous pouvez déployer votre agent IA sous deux formats, en fonction des besoins de votre tâche :

- **Application Web** : Idéale pour les tâches nécessitant une application autonome accessible via un navigateur, telles que la soumission de formulaires ou la génération de documents.
- **Chatbot** : Parfait pour les interactions conversationnelles en temps réel, telles que le support client ou les assistants virtuels.

Ce guide vous guidera à travers les étapes et les composants nécessaires pour créer et configurer votre agent IA personnalisé.

## Premiers Pas

Le constructeur d'agents IA est organisé en quatre blocs essentiels :

1. **[Entrées Utilisateur](/fr/configure-ai-agent/#user-inputs)** : Spécifiez les données que vous souhaitez collecter auprès des utilisateurs.
2. **[Connaissance](/fr/configure-ai-agent/#knowledge)** : Définissez les informations que votre agent IA utilisera.
3. **[Modèle IA](/fr/configure-ai-agent/#ai-model)** : Choisissez le modèle qui alimentera les réponses de votre agent IA.
4. **[Sortie](/fr/configure-ai-agent/#output)** : Configurez la manière dont votre agent IA présentera ses résultats.

Commençons à construire votre agent IA !

## Entrées Utilisateur

### A. Collecter et personnaliser les entrées utilisateur pour votre agent IA

Pour interagir efficacement avec les agents IA, vous devez définir des entrées spécifiques que les utilisateurs fourniront pour déclencher les réponses de l'agent IA. Différents types d'entrées servent à divers objectifs, tels que :

- Saisir des instructions pour la création de blogs.
- Entrer le but de l'analyse de données.
- Sélectionner différents segments de clients.

### B. Étapes pour configurer les entrées utilisateur :

1. Accédez au bloc **Entrées Utilisateur** dans le constructeur d'agents IA.
2. Cliquez sur **"Ajouter une entrée"**.
3. Sélectionnez et remplissez le **Type d'Entrée**, le **Nom du Libellé**, le **Nom de la Variable**, la **Longueur Maximale de Caractères**, et spécifiez si c'est un champ **Obligatoire**.
   > Note : Veuillez vous référer à [Champs d'Entrée Clés à Personnaliser](/fr/configure-ai-agent/#c-key-input-fields-to-customize) pour des explications détaillées de chaque champ d'entrée.
4. Cliquez sur **"Enregistrer"** pour finaliser l'entrée utilisateur.
5. Pour ajouter d'autres entrées utilisateur, répétez à partir de l'étape 2.

### C. Champs Clés d'Entrée à Personnaliser :

1. **Type d'Entrée** : Spécifiez le type d'entrée (par ex., Texte, Paragraphe, Sélection dans un menu déroulant).
2. **Nom du Libellé** : Ajoutez un libellé clair pour guider les utilisateurs (par ex., "Entrez les instructions du blog").
3. **Nom de la Variable** : Définissez un nom court et identifiable pour la programmation (par ex., `blog_instruction`).
4. **Longueur Maximale de Caractères** : Définissez la longueur maximale autorisée pour l'entrée (par ex., 250 caractères).
5. **Obligatoire** : Indiquez si l'entrée est obligatoire ou facultative.

## Connaissance

### A. Améliorer les LLMs avec votre propre contexte et vos données

La fonctionnalité Connaissance dans FabriXAI vous permet d'améliorer la base de connaissances de votre Agent IA avec votre propre contexte et vos données. Cela permet à l'agent de comprendre et de répondre à des questions liées à des sujets ou domaines spécifiques non couverts par ses données d'entraînement générales.

### B. Étapes pour Intégrer la Connaissance

1. Accédez au bloc **Connaissance** dans le constructeur d'agents IA.
2. Cliquez sur **"Ajouter une connaissance"**.
3. Sélectionnez pour ajouter des connaissances téléchargées.
   > Note : Vous devez d'abord télécharger un ensemble de connaissances pour le récupérer ici. Pour des instructions détaillées sur la création d'ensembles de connaissances, consultez le [Guide de Connaissance](/fr/knowledge).
4. Cliquez sur **"Enregistrer"** pour finaliser l'ajout de la connaissance sélectionnée à votre agent IA.
5. *(Optionnel)* Si votre agent IA est configuré en tant qu'**Application Web**, cliquez sur **"Sélectionner la Variable de Requête"** et attribuez une variable d'entrée utilisateur (depuis le bloc **Entrées Utilisateur**) pour servir de requête pour la récupération de connaissances.

## Modèle IA

### A. Propulsez vos Agents IA avec des LLMs

Les Grands Modèles de Langage (LLMs) sont la fondation des agents IA de FabriXAI, leur permettant de communiquer par des interactions en langage naturel. Ces modèles traitent les entrées utilisateur et génèrent des réponses basées sur un "Prompt" que vous fournissez.

### B. Étapes pour Configurer le Modèle IA :

1. Accédez au bloc **Modèle IA** dans le constructeur d'agents IA.
2. Cliquez sur **"Modifier"**.
3. Rédigez un **Prompt** qui fournit des instructions à votre agent IA.
   > Note : Veuillez vous référer à [Notes sur la Rédaction de Prompts Efficaces](/fr/configure-ai-agent/#c-notes-on-writing-effective-prompts) pour plus d'explications.
4. *(Optionnel)* Si votre agent IA est configuré en tant que **Chatbot**, vous pouvez ajouter un Message d'Accueil. Ce message sera envoyé à l'utilisateur au début de chaque conversation.
5. Sélectionnez le **Modèle IA** souhaité qui correspond le mieux à votre tâche.
   > Note : Pour la liste des Modèles IA supportés, veuillez vous référer à [Quels Modèles IA sont Supportés ?](/fr/what-ai-models-are-supported).
6. *(Optionnel)* Ouvrez l'accordéon **"Avancé"** pour ajuster davantage les paramètres du modèle.
   > Note : Veuillez vous référer à [Guide sur la Configuration des Paramètres pour les LLMs](/fr/configure-ai-agent/#d-guide-sur-la-configuration-des-paramètres-pour-les-llm) pour plus d'explications.
7. Cliquez sur **"Enregistrer"** pour finaliser la configuration du Modèle IA.

### C. Notes sur la Rédaction de Prompts Efficaces

- Soyez précis sur la tâche que vous souhaitez que l'agent IA accomplisse.
- Incluez des exemples pour guider le comportement du modèle.
- Utilisez des formats structurés lorsque c'est approprié (par ex., puces ou listes numérotées).

Pour plus de conseils sur la création de prompts efficaces, visitez le [Blog sur l'Ingénierie des Prompts de FabriXAI](https://www.fabrixai.com/blog/category/prompt-engineering).

### D. Guide sur la Configuration des Paramètres pour les LLMs

La configuration des paramètres détermine le style et le ton des réponses de votre agent IA. Nous offrons des valeurs prédéfinies pour divers styles de réponses, et vous pouvez également personnaliser les paramètres en utilisant les options suivantes :

1. **Température** : Contrôle l'aléatoire de la sortie. Une valeur plus basse (par ex., 0,2) résulte en des réponses plus ciblées et déterministes, tandis qu'une valeur plus élevée (par ex., 0,8) encourage la créativité et la diversité dans les réponses.
2. **Top P** : Ce paramètre (également connu sous le nom d'échantillonnage de noyau) spécifie la probabilité cumulative de sélection des tokens. Le définir à une valeur comme 0,9 signifie que le modèle considérera seulement les 90 % supérieurs de la masse de probabilité pour générer le token suivant, permettant une aléatoire plus contrôlée.
3. **Pénalité de Présence** : Ajuste la probabilité que le modèle introduise de nouveaux sujets. Une valeur positive décourage la répétition (par ex., 0,5), rendant plus probable l'introduction de nouveaux concepts, tandis qu'une valeur proche de 0 permet plus de répétition.
4. **Pénalité de Fréquence** : Réduit la probabilité que le modèle répète le même token en fonction de sa fréquence dans le texte. Une valeur de 0,5 pénalisera légèrement les tokens communs, favorisant la variété dans la sortie.
5. **Nombre Maximale de Tokens** : Spécifie la longueur maximale de la réponse générée. Définir cette valeur de manière appropriée garantit que les réponses sont concises et pertinentes par rapport à vos besoins. Par exemple, une valeur de 150 ou 300 tokens pourrait bien fonctionner selon le contexte.

## Sortie

### A. Configurer les Modèles de Sortie de l'Agent IA

Le bloc **Sortie** détermine la manière dont l'Agent IA présente ses résultats aux utilisateurs finaux et s'intègre dans vos flux de travail. Les sorties doivent être claires, conviviales et alignées avec vos objectifs. Par défaut, le modèle de sortie de l'agent IA est configuré en fonction des résultats du modèle IA, et aucune configuration supplémentaire n'est requise pour cette partie.

## Finalisez Votre Agent IA

Après avoir configuré tous les paramètres, il vous suffit de cliquer sur **"Enregistrer"** dans le coin supérieur droit pour publier votre agent IA. Vous pouvez accéder à la page de l'application de l'agent IA en cliquant sur l'**"Icône Ouvrir ↗"** dans le coin supérieur droit, ou vous pouvez le partager avec d'autres via les options dans la barre latérale gauche.

## Articles Connexes
- [Utiliser un Agent IA](/fr/use-ai-agent)
- [Partager un Agent IA](/fr/share-ai-agent/)
