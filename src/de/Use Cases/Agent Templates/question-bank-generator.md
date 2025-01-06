---
metatitle: Fragenbank-Generator | Agent-Vorlagen | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch zur Konfiguration und Verwendung des Fragenbank-Generators zur Erstellung maßgeschneiderter Multiple-Choice-Fragen.
lang: de
permalink: /agent-templates/question-bank-generator
---

# Fragenbank-Generator

Der **Fragenbank-Generator** ist ein intelligenter Agent, der entwickelt wurde, um Multiple-Choice-Fragen basierend auf spezifischen Themen zu erstellen, die aus bereitgestellten Webinhalten abgeleitet werden. Der Agent bewertet das Verständnis des Nutzers, indem er Fragen stellt, die verschiedene Schwierigkeitsgrade von einfach bis schwierig abdecken, und so eine umfassende Bewertung der Schlüsselkonzepte gewährleisten. Mit der Fähigkeit, sowohl Single-Correct- als auch Multiple-Correct-Antwortoptionen zu generieren, passt dieses Werkzeug Bewertungen effektiv für Bildungszwecke an. Es ist ideal für Pädagogen, Studenten und jeden, der Wissen umfassend festigen möchte.

## Erste Schritte

Um zu beginnen, stellen Sie sicher, dass Sie den **Fragenbank-Generator** geklont haben. Folgen Sie [Erstellen aus Vorlagen](/en-us/create-from-templates/), um Ihren KI-Agenten zu klonen und zu konfigurieren.

## Konfigurationsanleitung

### Benutzereingaben

| Beschriftung            | Beschreibung                                               | Anleitung                           |
| ---------------------- | --------------------------------------------------------- | ------------------------------------- |
| Thema                  | Das spezifische Thema zur Erstellung der Fragen          | Geben Sie das Thema klar an; stellen Sie sicher, dass es für die Zielgruppe relevant ist. |
| Webseiten-URL (Quelle) | Der Link zur Webseite, die Informationen oder Referenzen zur Erstellung der Fragen enthält | Geben Sie eine gültige URL an, die umfassende Inhalte zum gewählten Thema enthält.          |
| Anzahl der Fragen      | Die Gesamtzahl der zu erstellenden Fragen                  | Geben Sie eine Zahl ein, die angibt, wie viele Fragen Sie erstellen möchten (z.B. zwischen 1 und 10). |

### Wissensdatenbank

Sie können `.pdf`- oder `.txt`-Dateien hochladen, um dem Agenten maßgeschneiderte Kontexte bereitzustellen, die Ihren spezifischen Anforderungen entsprechen.

### KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle erkunden. Bei Bedarf können Sie Ihre Eingabeaufforderungen verfeinern, um individuellere Ergebnisse zu erzielen.

::: tipp
Für detailliertere Anweisungen zur Konfiguration eines KI-Agenten, besuchen Sie bitte [Configure AI Agent](/en-us/configure-ai-agent/)
:::

## Beispiel Eingaben und Ausgaben

### Beispieleingaben

- **Thema**: Python
- **Webseiten-URL (Quelle)**: "https://www.guru99.com/python-tutorials.html"
- **Anzahl der Fragen**: 3

### Beispielausgabe

```
Frage 1:
Was ist der Hauptfokus von ISO 27001?
A) Verwaltung von Finanzunterlagen
B) Verwaltung der Informationssicherheit
C) Verwaltung von Kundenbeziehungen
D) Verwaltung der Personalabteilung
Korrekte Antwort: B

Frage 2:
Welches der folgenden ist ein greifbares Vermögenswert?
A) Ruf
B) Gesetzeskonformität
C) Laptop
D) Geistiges Eigentum
Korrekte Antwort: C

Frage 3:
Welche der folgenden Maßnahmen wird beim Telearbeiten NICHT empfohlen?
A) Verwendung autorisierter Geräte
B) Verwendung öffentlicher gemeinsam genutzter Geräte
C) Vorsicht vor unbefugtem Zugriff
D) Arbeiten von zu Hause aus
Korrekte Antwort: B
```

## Tipps zur effektiven Konfiguration

- **Klären Sie Ihr Thema**: Stellen Sie sicher, dass das Thema spezifisch und gut definiert ist, um relevante Fragen zu erzeugen.
- **Verwenden Sie zuverlässige Quellen**: Geben Sie URLs an, die zu seriösen und umfassenden Informationen führen, um die Qualität der Fragen zu verbessern.
- **Geben Sie die Anzahl der Fragen an**: Geben Sie eine angemessene Anzahl von Fragen an, um Fokus und Detail in den Bewertungen zu behalten.
- **Überprüfen Sie die Ergebnisse**: Überprüfen Sie die generierten Fragen auf Klarheit und Relevanz, um Ihre Lehrmittel weiter zu verfeinern.
- **Experimentieren Sie mit den Eingaben**: Passen Sie das Thema und die Anzahl der Fragen basierend auf Feedback und Ergebnissen für die besten Ergebnisse an.

## Verwandte Artikel
Entdecken Sie unsere Sammlung von [Agent-Vorlagen](/en-us/agent-templates/), um weitere inspirierende Ideen für den Einsatz von KI-Agenten zu entdecken!