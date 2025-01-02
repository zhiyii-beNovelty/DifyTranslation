---
metatitle: Configurer un Agent IA | Guide de l'utilisateur FabriXAI
description: Apprenez à configurer des agents IA sur FabriXAI avec ce guide étape par étape.
lang: fr-FR
permalink: /configure-ai-agent
---

# Configurez un agent d'IA

# Créez vos Agents IA personnalisés dans FabriXAI

Ceci est purément à des fins de test. Veuillez le supprimer plus tard. Les agents IA sont géniaux !

Les agents IA dans FabriXAI sont conçus pour automatiser les flux de travail et optimiser des scénarios d'utilisation spécifiques. Avec FabriXAI, vous pouvez déployer votre agent IA sous deux formats, en fonction des besoins de votre tâche :

- **Application Web** : Idéal pour les tâches nécessitant une application autonome accessible via un navigateur, telles que les soumissions de formulaires ou la génération de documents.
- **Assistant virtuel** : Parfait pour les interactions conversationnelles en temps réel, telles que le support client ou les assistants virtuels.

Ce guide vous expliquera les étapes et les composants nécessaires pour créer et configurer votre agent IA personnalisé.

# Premiers pas

Le Créateur d'agent d'IA est organisé en quatre blocs essentiels :

1. **[Entrées utilisateur](/fr-fr/configure-ai-agent/#user-inputs)** : Indiquez les données que vous souhaitez collecter auprès des utilisateurs.
2. **[Connaissances](/fr-fr/configure-ai-agent/#knowledge)** : Définissez les informations que votre agent d'IA utilisera.
3. **[Modèle d'IA](/fr-fr/configure-ai-agent/#ai-model)** : Sélectionnez le modèle qui générera les réponses de votre agent d'IA.
4. **[Sortie](/fr-fr/configure-ai-agent/#output)** : Déterminez comment votre agent d'IA présentera ses résultats.

Commençons dès maintenant à créer votre agent d'IA !

# Entrées utilisateur

## A. Recueillir et personnaliser les entrées utilisateur pour votre agent IA

Pour interagir efficacement avec l'agent IA, vous devez définir des entrées spécifiques que les utilisateurs fournissent pour déclencher les réponses de l'agent IA. Différents types d'entrées servent à diverses fins, telles que :

- Saisir des instructions pour la création d’un blog.
- Entrer l'objectif de l'analyse de données.
- Sélectionner différents segments de clients.

## B. Étapes pour configurer les entrées utilisateur :

1. Naviguez vers le bloc **entrée utilisateur** dans le Constructeur d'agent IA.
2. Cliquez sur **"Ajouter une entrée"**
3. Sélectionnez et remplissez le **type d'entrée**, le **nom du libellé**, le **nom de la variable**, la **longueur maximale de caractères**, et spécifiez si c'est un champ **obligatoire**.
   > Remarque : Veuillez vous référer à [Champs d'entrée clés à personnaliser](/en-us/configure-ai-agent/#c-key-input-fields-to-customize) pour des explications détaillées de chaque champ d'entrée.
4. Cliquez sur **"Enregistrer"** pour finaliser l'entrée utilisateur.
5. Pour ajouter plus d'entrées utilisateur, répétez à partir de l'étape 2.

## C. Champs de saisie clés à personnaliser :

1. **Type d'entrée** : Précisez le type d'entrée (par exemple, Texte, Paragraphe, menu déroulant).
2. **Nom de l'étiquette** : Ajoutez une étiquette claire pour guider les utilisateurs (par exemple, "Entrez les instructions du blog").
3. **Nom de variable** : Définissez un nom court et identifiable pour la programmation (par exemple, `blog_instruction`).
4. **Longueur maximale en caractères** : Définissez la longueur maximale autorisée pour l'entrée (par exemple, 250 caractères).
5. **Obligatoire** : Indiquez si l'entrée est obligatoire ou optionnelle.

# Savoir

## A. Améliorer les Modèles de Langage de Grande Taille avec Votre Propre Contexte et Vos Données

La fonctionnalité de connaissances dans FabriXAI vous permet d'améliorer la base de connaissances de votre agent d'IA avec votre propre contexte et vos données. Cela permet à l'agent de comprendre et de répondre à des questions liées à des sujets ou domaines spécifiques non couverts par ses données d'entraînement générales.

## B. Étapes pour Intégrer la Connaissance

1. Naviguez jusqu'au bloc **Connaissance** dans le Constructeur d'agent IA.
2. Cliquez sur **« Ajouter la connaissance »**.
3. Sélectionnez l'option pour ajouter une connaissance téléchargée.
   > Note : Vous devez d'abord télécharger un ensemble de connaissances pour pouvoir le récupérer ici. Pour des instructions détaillées sur la création d'ensembles de connaissances, consultez le [Guide des connaissances](/en-us/knowledge).
4. Cliquez sur **« Enregistrer »** pour finaliser l'ajout de la connaissance sélectionnée à votre Agent IA.
5. *(Optionnel)* Si votre Agent IA est configuré en tant qu'**Application Web**, cliquez sur **« Sélectionner la variable de requête »** et attribuez une variable d'entrée utilisateur (depuis le bloc **Entrées utilisateur**) pour servir de requête pour la récupération de la connaissance.

# Modèle d'IA

## A. Alimentez vos agents d'intelligence artificielle avec les grands modèles de langage (GML)

Les grands modèles de langage (GML) sont la base des agents d'intelligence artificielle de FabriXAI, leur permettant de communiquer à travers des interactions en langage naturel. Ces modèles traitent les entrées des utilisateurs et génèrent des réponses basées sur une requête que vous fournissez.

## B. Étapes pour configurer le Modèle d'IA:

1. Naviguez jusqu'au bloc **Modèle d'IA** dans le Constructeur d'agent IA.
2. Cliquez sur **"Modifier"**.
3. Rédigez une **Consigne** qui fournit des instructions à votre agent IA pour qu'il les suive.
   > Note : Veuillez vous référer à [Notes sur la rédaction de consignes efficaces](/en-us/configure-ai-agent/#c-notes-on-writing-effective-prompts) pour plus d'explications.
4. *(Optionnel)* Si votre agent IA est configuré en tant que **Chatbot**, vous pouvez ajouter un Message de bienvenue. Ce message sera envoyé à l'utilisateur au début de chaque conversation.
5. Sélectionnez le **Modèle d'IA** désiré qui correspond le mieux à votre tâche.
   > Note : Pour la liste des Modèles d'IA pris en charge, veuillez vous référer à [Quels Modèles d'IA sont pris en charge ?](/en-us/what-ai-models-are-supported).
6. *(Optionnel)* Ouvrez la section **"Avancé"** pour ajuster davantage les paramètres du modèle.
   > Note : Veuillez vous référer à [Conseils pour la définition des paramètres pour les grands modèles de langage](/en-us/configure-ai-agent/#d-guidance-on-setting-parameters-for-llm) pour plus d'explications.
7. Cliquez sur **"Enregistrer"** pour finaliser la configuration du Modèle d'IA.

## C. Notes sur la rédaction de prompts efficaces

- Soyez précis sur la tâche que vous souhaitez que l'agent d'IA réalise.
- Incluez des exemples pour guider le comportement du modèle.
- Utilisez des formats structurés lorsque c'est approprié (par exemple, des puces ou des listes numérotées).

Pour plus de conseils sur la création de prompts efficaces, visitez le [blog sur l'ingénierie des prompts de FabriXAI](https://www.fabrixai.com/blog/category/prompt-engineering).

## D. Guide pour la configuration des paramètres pour les LLM

La configuration des paramètres détermine le style et le ton des réponses de votre agent IA. Nous proposons des valeurs préétablies pour divers styles de réponse, et vous pouvez également personnaliser les paramètres en utilisant les options suivantes :

1. **Température** : Contrôle le degré de variation de la sortie. Une valeur plus basse (par exemple, 0,2) donne lieu à des réponses plus ciblées et déterministes, tandis qu'une valeur plus élevée (par exemple, 0,8) encourage la créativité et la diversité des réponses.
2. **Top P** : Ce paramètre (également connu sous le nom d'échantillonnage nucleus) spécifie la probabilité cumulative de sélection des jetons. Définir cette valeur à 0,9 signifie que le modèle ne considérera que les 90 % supérieurs de la masse de probabilité pour générer le jeton suivant, permettant ainsi une randomisation plus contrôlée.
3. **Pénalité de présence** : Ajuste la probabilité que le modèle introduise de nouveaux sujets. Une valeur positive décourage la répétition (par exemple, 0,5), rendant plus probable l'introduction de nouveaux concepts, tandis qu'une valeur proche de 0 permet plus de répétition.
4. **Pénalité de fréquence** : Réduit la probabilité que le modèle répète le même jeton en fonction de sa fréquence dans le texte. Une valeur de 0,5 pénalisera légèrement les jetons courants, favorisant la variété dans la sortie.
5. **Nombre maximal de jetons** : Spécifie la longueur maximale de la réponse générée. Définir cette valeur de manière appropriée garantit que les réponses sont concises et pertinentes par rapport à vos besoins. Par exemple, une valeur de 150 ou 300 jetons pourrait bien fonctionner selon le contexte.

# Résultats

## A. Configurer les modèles de sortie de l'Agent IA

Le **Bloc de sortie** détermine comment l'Agent IA présente ses résultats aux utilisateurs finaux et s'intègre à vos flux de travail. Les sorties doivent être claires, faciles à utiliser et alignées avec vos objectifs. Par défaut, le modèle de sortie de l'Agent IA est défini en fonction des résultats du modèle IA, et aucune configuration supplémentaire n'est nécessaire pour cette partie.

# Finalisez votre agent IA

Après avoir configuré tous les paramètres, cliquez simplement sur **"Enregistrer"** en haut à droite pour publier votre agent IA. Vous pouvez accéder à la page de l'application de l'agent IA en cliquant sur l'**"Icône d'ouverture ↗"** située en haut à droite, ou le partager avec d'autres par les options dans la barre latérale gauche.

# Articles associés
- [Utiliser un Agent IA](/en-us/use-ai-agent)
- [Partager un Agent IA](/en-us/share-ai-agent/)