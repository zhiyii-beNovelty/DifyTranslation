---
metatitle: Tuteur de Code IA | Modèles d'Agents | Guide de l'Utilisateur FabriXAI
description: Ceci est un guide utilisateur pour configurer et utiliser le Tuteur de Code IA, un agent spécialisé dans les explications de programmation.
lang: fr-FR
permalink: /agent-templates/ai-code-tutor
---

# Tuteur de Code IA

Le **Tuteur de Code IA** est un assistant intelligent conçu pour aider les utilisateurs à comprendre le code de programmation. En analysant les extraits de code fournis par l'utilisateur, l'agent offre un aperçu complet de ce que fait le code, suivi d'une explication détaillée, étape par étape, de chaque partie. De plus, il suggère des sujets de programmation liés pour approfondir l'apprentissage, permettant aux utilisateurs de renforcer leur compréhension des concepts de codage. Que vous soyez débutant ou que vous cherchiez à améliorer vos compétences, le Tuteur de Code IA vous guidera à travers les complexités des langages de programmation et des concepts.

## Démarrage

Pour commencer, assurez-vous d'avoir cloné le **Tuteur de Code IA**. Suivez [Créer à partir de modèles](/fr-us/create-from-templates/) pour cloner et configurer votre agent IA.

## Instructions de configuration

### Entrées Utilisateur

Aucun champ de saisie n'est nécessaire pour ces agents d'IA.

### Connaissances

Vous pouvez téléverser des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé qui répond à vos exigences spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos requêtes pour des sorties plus adaptées.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent d'IA, veuillez consulter [Configurer un agent d'IA](/fr-us/configure-ai-agent/)
:::

## Exemples d'entrées et de sorties

### Exemples d'entrées

```
Bloc de code :

import time
t = time.localtime()
current_time = time.strftime("%H:%M:%S", t)
print(current_time)
```

### Exemple de Résultat

```
Aperçu

Ce bloc de code récupère l'heure actuelle et l'affiche au format "HH:MM:SS". Il utilise le module time en Python pour cela.

Explication Étape par Étape

import time : Cette ligne importe le module time, qui offre diverses fonctions liées au temps. En important ce module, nous pouvons utiliser ses fonctionnalités dans notre code. Remarque : La barre oblique inverse (\) à la fin de la ligne est un caractère de continuation de ligne en Python, ce qui nous permet de diviser une ligne longue en plusieurs lignes pour une meilleure lisibilité.
t = time.localtime() : Cette ligne obtient l'heure actuelle sous forme d'un objet struct_time, qui est un tuple contenant l'heure locale dans un format spécifique. La fonction localtime() renvoie l'heure locale, correspondant au fuseau horaire du système.
current_time = time.strftime("%H:%M:%S", t) : Cette ligne formate l'heure actuelle en une chaîne de caractères au format "HH:MM:SS". La fonction strftime() prend deux arguments : une chaîne de format et un objet time. La chaîne de format "%H:%M:%S" définit le format de la chaîne de sortie :
%H : Heure (format 24 heures) en tant que nombre décimal avec des zéros initiaux.
%M : Minute en tant que nombre décimal avec des zéros initiaux.
%S : Seconde en tant que nombre décimal avec des zéros initiaux.
print(current_time) : Cette ligne affiche l'heure actuelle formatée dans la console.
Sujets Connexes

Pour approfondir votre compréhension de ce code, vous pourriez explorer les sujets suivants :

Fuseaux horaires : La fonction localtime() renvoie l'heure locale, mais que faire si vous souhaitez travailler avec d'autres fuseaux horaires ? Vous pouvez utiliser le module timezone pour gérer les fuseaux horaires.
Formatage de la date et de l'heure : La fonction strftime() est l'une des méthodes pour formater les dates et les heures. Vous pouvez aussi utiliser le module datetime pour travailler avec les dates et les heures de manière orientée objet.
Gestion des erreurs : Que faire si le module time n'est pas disponible ou si la fonction localtime() échoue ? Vous pouvez utiliser des blocs try-except pour gérer les erreurs et les exceptions.
Formatage de chaînes : La fonction strftime() utilise une chaîne de format pour formater la sortie. Vous pouvez également utiliser la méthode format() ou les f-strings pour formater les chaînes en Python.
Quelques ressources recommandées pour en savoir plus sur ces sujets incluent :

La documentation officielle de Python pour le module time : https://docs.python.org/3/library/time.html
La documentation officielle de Python pour le module datetime : https://docs.python.org/3/library/datetime.html
Le tutoriel Python de W3Schools sur le temps et la date : https://www.w3schools.com/python/python_datetime.asp
Le tutoriel de Real Python sur la gestion des erreurs : https://realpython.com/python-exceptions/
```

## Conseils pour une Configuration Efficace

- **Comprenez le But de l'Agent** : Familiarisez-vous avec la façon dont le Tuteur de Code IA analyse et explique le code afin de tirer le meilleur parti de ses capacités.
- **Fournissez des Exemples de Code Clairs** : Assurez-vous que le code que vous entrez est clair et complet pour recevoir les explications les plus précises.
- **Exploitez les Sujets Connexes** : Faites attention aux sujets connexes suggérés pour approfondir votre compréhension des concepts de programmation et améliorer vos compétences en codage.
- **Expérimentez avec Différents Exemples de Code** : Testez divers langages de programmation et structures pour explorer la polyvalence et la profondeur de connaissances de l'agent.
- **Affinez vos Requêtes** : Si les explications ne sont pas assez détaillées, essayez de fournir plus de contexte ou de poser des questions spécifiques sur le code.

## Articles connexes
Continuez à explorer notre collection de [Modèles d'Agents](/fr-us/agent-templates/) pour découvrir plus d'idées d'agents IA en action !