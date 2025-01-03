metatitle: Configurer un Agent IA | Guide de l'utilisateur FabriXAI
description: Apprenez à configurer des agents IA sur FabriXAI avec ce guide étape par étape.
lang: fr-FR
permalink: /fr-fr/configure-ai-agent
# Configurer un Agent IA

#/n# Créez vos agents IA personnalisés dans FabriXAI

Ceci est uniquement à des fins de test. Veuillez le supprimer plus tard. Les agents IA sont très utiles !

Les agents IA dans FabriXAI sont conçus pour automatiser les flux de travail et améliorer des cas d'utilisation spécifiques. Avec FabriXAI, vous pouvez déployer votre agent IA sous deux formats, en fonction des besoins de votre tâche :

- **Application Web** : Idéal pour les tâches nécessitant une application autonome accessible via un navigateur, telles que les soumissions de formulaires ou la génération de documents.
- **Chatbot** : Parfait pour les interactions conversationnelles en temps réel, telles que le support client ou les assistants virtuels.

Ce guide vous accompagnera tout au long des étapes et des composants nécessaires pour créer et configurer votre agent IA personnalisé.

#/n# Commencer

Le créateur d'agents IA est organisé en quatre blocs essentiels :

1. **[Entrées Utilisateur](/fr-fr/configure-ai-agent/#user-inputs)** : Indiquez les données que vous souhaitez collecter auprès des utilisateurs.
2. **[Connaissances](/fr-fr/configure-ai-agent/#knowledge)** : Définissez les informations que votre agent IA utilisera.
3. **[Modèle IA](/fr-fr/configure-ai-agent/#ai-model)** : Sélectionnez le modèle qui générera les réponses de votre agent IA.
4. **[Sortie](/fr-fr/configure-ai-agent/#output)** : Déterminez comment votre agent IA présentera ses résultats.

Commençons dès maintenant à créer votre agent IA !

#/n# Entrées Utilisateur

##/n# A. Recueillir et Personnaliser les Entrées Utilisateur pour Votre Agent IA

Pour interagir efficacement avec les agents IA, vous devez définir des entrées spécifiques que les utilisateurs fourniront pour déclencher les réponses de l'agent IA. Différents types d'entrées servent à diverses fins, telles que :

- Saisir des instructions pour la création d’un blog.
- Entrer l'objectif de l'analyse de données.
- Sélectionner différents segments de clients.

##/n# B. Étapes pour Configurer les Entrées Utilisateur

1. Naviguez vers le bloc **Entrées Utilisateur** dans le créateur d'agents IA.
2. Cliquez sur **"Ajouter une Entrée"**.
3. Sélectionnez et remplissez le **Type d'Entrée**, le **Nom du Libellé**, le **Nom de la Variable**, la **Longueur Maximale des Caractères**, et spécifiez si c'est un champ **Obligatoire**.
   > Remarque : Veuillez vous référer à [Champs d'Entrée Clés à Personnaliser](/fr-fr/configure-ai-agent/#c-key-input-fields-to-customize) pour des explications détaillées de chaque champ d'entrée.
4. Cliquez sur **"Enregistrer"** pour finaliser l'entrée utilisateur.
5. Pour ajouter plus d'entrées utilisateur, répétez à partir de l'étape 2.

##/n# C. Champs de Saisie Clés à Personnaliser

1. **Type d'Entrée** : Précisez le type d'entrée (par exemple, Texte, Paragraphe, Sélection Déroulante).
2. **Nom du Libellé** : Ajoutez un libellé clair pour guider les utilisateurs (par exemple, "Entrez les Instructions du Blog").
3. **Nom de la Variable** : Définissez un nom court et identifiable pour la programmation (par exemple, `instruction_blog`).
4. **Longueur Maximale des Caractères** : Définissez la longueur maximale autorisée pour l'entrée (par exemple, 250 caractères).
5. **Obligatoire** : Indiquez si l'entrée est obligatoire ou optionnelle.

#/n# Connaissances

##/n# A. Améliorer les Modèles de Langage de Grande Taille avec Votre Propre Contexte et Vos Données

La fonctionnalité de **Connaissances** dans FabriXAI vous permet d'enrichir la base de connaissances de votre agent IA avec votre propre contexte et vos données. Cela permet à l'agent de comprendre et de répondre à des questions liées à des sujets ou domaines spécifiques non couverts par ses données d'entraînement générales.

##/n# B. Étapes pour Intégrer les Connaissances

1. Naviguez jusqu'au bloc **Connaissances** dans le créateur d'agents IA.
2. Cliquez sur **"Ajouter une Connaissance"**.
3. Sélectionnez l'option pour ajouter une connaissance téléchargée.
   > Remarque : Vous devez d'abord télécharger un ensemble de connaissances pour pouvoir le récupérer ici. Pour des instructions détaillées sur la création d'ensembles de connaissances, consultez le [Guide des Connaissances](/fr-fr/knowledge).
4. Cliquez sur **"Enregistrer"** pour finaliser l'ajout de la connaissance sélectionnée à votre agent IA.
5. *(Optionnel)* Si votre agent IA est configuré en tant qu'**Application Web**, cliquez sur **"Sélectionner la Variable de Requête"** et attribuez une variable d'entrée utilisateur (depuis le bloc **Entrées Utilisateur**) pour servir de requête pour la récupération des connaissances.

#/n# Modèle IA

##/n# A. Alimentez Vos Agents IA avec les Grands Modèles de Langage (GML)

Les Grands Modèles de Langage (GML) sont la base des agents IA de FabriXAI, leur permettant de communiquer à travers des interactions en langage naturel. Ces modèles traitent les entrées des utilisateurs et génèrent des réponses basées sur une **Consigne** que vous fournissez.

##/n# B. Étapes pour Configurer le Modèle IA

1. Naviguez jusqu'au bloc **Modèle IA** dans le créateur d'agents IA.
2. Cliquez sur **"Modifier"**.
3. Rédigez une **Consigne** qui fournit des instructions à votre agent IA pour qu'il les suive.
   > Remarque : Veuillez vous référer à [Notes sur la Rédaction de Consignes Efficaces](/fr-fr/configure-ai-agent/#c-notes-on-writing-effective-prompts) pour plus d'explications.
4. *(Optionnel)* Si votre agent IA est configuré en tant qu'**Chatbot**, vous pouvez ajouter un Message de Bienvenue. Ce message sera envoyé à l'utilisateur au début de chaque conversation.
5. Sélectionnez le **Modèle IA** désiré qui correspond le mieux à votre tâche.
   > Remarque : Pour la liste des Modèles IA pris en charge, veuillez vous référer à [Quels Modèles IA sont Pris en Charge ?](/fr-fr/what-ai-models-are-supported).
6. *(Optionnel)* Ouvrez la section **"Avancé"** pour ajuster davantage les paramètres du modèle.
   > Remarque : Veuillez vous référer à [Conseils pour la Configuration des Paramètres pour les GML](/fr-fr/configure-ai-agent/#d-guidance-on-setting-parameters-for-llm) pour plus d'explications.
7. Cliquez sur **"Enregistrer"** pour finaliser la configuration du Modèle IA.

##/n# C. Notes sur la Rédaction de Consignes Efficaces

- Soyez précis sur la tâche que vous souhaitez que l'agent IA réalise.
- Incluez des exemples pour guider le comportement du modèle.
- Utilisez des formats structurés lorsque c'est approprié (par exemple, des puces ou des listes numérotées).

Pour plus de conseils sur la création de consignes efficaces, visitez le [blog sur l'ingénierie des consignes de FabriXAI](https://www.fabrixai.com/blog/category/prompt-engineering).

##/n# D. Guide pour la Configuration des Paramètres pour les GML

La configuration des paramètres détermine le style et le ton des réponses de votre agent IA. Nous proposons des valeurs préétablies pour divers styles de réponse, et vous pouvez également personnaliser les paramètres en utilisant les options suivantes :

1. **Température** : Contrôle le degré de variation de la sortie. Une valeur plus basse (par exemple, 0,2) produit des réponses plus ciblées et déterministes, tandis qu'une valeur plus élevée (par exemple, 0,8) encourage la créativité et la diversité des réponses.
2. **Top P** : Ce paramètre (également connu sous le nom d'échantillonnage nucleus) spécifie la probabilité cumulative de sélection des jetons. Définir cette valeur à 0,9 signifie que le modèle ne considérera que les 90 % supérieurs de la masse de probabilité pour générer le jeton suivant, permettant ainsi une randomisation plus contrôlée.
3. **Pénalité de Présence** : Ajuste la probabilité que le modèle introduise de nouveaux sujets. Une valeur positive décourage la répétition (par exemple, 0,5), rendant plus probable l'introduction de nouveaux concepts, tandis qu'une valeur proche de 0 permet plus de répétition.
4. **Pénalité de Fréquence** : Réduit la probabilité que le modèle répète le même jeton en fonction de sa fréquence dans le texte. Une valeur de 0,5 pénalisera légèrement les jetons courants, favorisant la variété dans la sortie.
5. **Nombre Maximal de Jetons** : Spécifie la longueur maximale de la réponse générée. Définir cette valeur de manière appropriée garantit que les réponses sont concises et pertinentes par rapport à vos besoins. Par exemple, une valeur de 150 ou 300 jetons pourrait bien fonctionner selon le contexte.

#/n# Sortie

##/n# A. Configurez les Modèles de Sortie de l'Agent IA

Le bloc **Sortie** détermine comment l'agent IA présente ses résultats aux utilisateurs finaux et s'intègre à vos flux de travail. Les sorties doivent être claires, faciles à utiliser et alignées avec vos objectifs. Par défaut, le modèle de sortie de l'agent IA est défini en fonction des résultats du Modèle IA, et aucune configuration supplémentaire n'est nécessaire pour cette partie.

#/n# Finaliser Votre Agent IA

Après avoir configuré tous les paramètres, cliquez simplement sur **"Enregistrer"** en haut à droite pour publier votre agent IA. Vous pouvez accéder à la page de l'application de l'agent IA en cliquant sur l'**"Icône d'ouverture ↗"** située en haut à droite, ou le partager avec d'autres via les options dans la barre latérale gauche.

#/n# Articles Associés
- [Utiliser un Agent IA](/fr-fr/use-ai-agent)
- [Partager un Agent IA](/fr-fr/share-ai-agent/)