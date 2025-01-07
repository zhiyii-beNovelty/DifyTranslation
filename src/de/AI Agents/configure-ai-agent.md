---
metatitle: KI-Agent konfigurieren | FabriXAI Benutzerhandbuch
description: Erfahren Sie, wie Sie KI-Agenten auf FabriXAI mit dieser Schritt-für-Schritt-Anleitung konfigurieren.
lang: de-DE
permalink: /configure-ai-agent
---

# KI-Agent konfigurieren

## Erstellen Sie Ihre maßgeschneiderten KI-Agenten in FabriXAI

KI-Agenten in FabriXAI sind darauf ausgelegt, Arbeitsabläufe zu automatisieren und spezifische Anwendungsfälle zu verbessern. Mit FabriXAI können Sie Ihren KI-Agenten in zwei Formaten bereitstellen, abhängig von den Anforderungen Ihrer Aufgabe:

- **Web App**: Ideal für Aufgaben, die eine eigenständige Anwendung erfordern, die über einen Browser zugänglich ist, wie zum Beispiel Formularübermittlungen oder Dokumentenerstellung.
- **Chatbot**: Perfekt für Echtzeit-Konversationen, wie zum Beispiel Kundenservice oder virtuelle Assistenten.

Dieser Leitfaden führt Sie durch die Schritte und Komponenten, die erforderlich sind, um Ihren maßgeschneiderten KI-Agenten zu erstellen und zu konfigurieren.

## Erste Schritte

Der KI-Agenten-Ersteller ist in vier wesentliche Blöcke unterteilt:

1. **[Benutzereingaben](/de-de/configure-ai-agent/#user-inputs)**: Geben Sie die Daten an, die Sie von den Benutzern sammeln möchten.
2. **[Wissen](/de-de/configure-ai-agent/#knowledge)**: Definieren Sie die Informationen, die Ihr KI-Agent verwenden wird.
3. **[KI-Modell](/de-de/configure-ai-agent/#ai-model)**: Wählen Sie das Modell aus, das die Antworten Ihres KI-Agenten steuern wird.
4. **[Ausgabe](/de-de/configure-ai-agent/#output)**: Konfigurieren Sie, wie Ihr KI-Agent seine Ergebnisse präsentieren wird.

Tauchen Sie ein und beginnen Sie mit dem Aufbau Ihres KI-Agenten!

## Benutzereingaben

### A. Sammeln und Anpassen von Benutzereingaben für Ihren KI-Agenten

Um effektiv mit KI-Agenten zu interagieren, müssen Sie spezifische Eingaben definieren, die Benutzer bereitstellen, um die Antworten des KI-Agenten auszulösen. Verschiedene Arten von Eingaben dienen unterschiedlichen Zwecken, wie zum Beispiel:

- Anweisungen für die Blog-Erstellung eingeben.
- Den Zweck der Datenanalyse eingeben.
- Verschiedene Kundensegmente auswählen.

### B. Schritte zur Konfiguration von Benutzereingaben:

1. Navigieren Sie zum **Benutzereingabe**-Block im KI-Agenten-Builder.
2. Klicken Sie auf **"Eingabe hinzufügen."**
3. Wählen und füllen Sie den gewünschten **Eingabetyp**, **Beschriftungsname**, **Variablenname** und **Maximale Zeichenlänge** aus und geben Sie an, ob es sich um ein **Pflichtfeld** handelt.
   > Hinweis: Bitte beziehen Sie sich auf [Wichtige Eingabefelder zur Anpassung](/de-de/configure-ai-agent/#c-key-input-fields-to-customize) für detaillierte Erklärungen zu jedem Eingabefeld.
4. Klicken Sie auf **"Speichern"**, um die Benutzereingabe abzuschließen.
5. Um weitere Benutzereingaben hinzuzufügen, wiederholen Sie Schritt 2.

### C. Wichtige Eingabefelder zur Anpassung:

1. **Eingabetyp**: Geben Sie den Typ der Eingabe an (z.B. Text, Absatz, Dropdown-Auswahl).
2. **Beschriftungsname**: Fügen Sie eine klare Beschriftung hinzu, um Benutzer anzuleiten (z.B. "Geben Sie Blog-Anweisungen ein").
3. **Variablenname**: Definieren Sie einen kurzen, identifizierbaren Namen für die Programmierung (z.B. `blog_instruction`).
4. **Maximale Zeichenlänge**: Legen Sie die maximal erlaubte Länge für die Eingabe fest (z.B. 250 Zeichen).
5. **Pflichtfeld**: Geben Sie an, ob die Eingabe obligatorisch oder optional ist.

## Wissen

### A. Verbesserung von LLMs mit Ihrem eigenen Kontext und Ihren Daten

Die Wissensfunktion in FabriXAI ermöglicht es Ihnen, die Wissensdatenbank Ihres KI-Agenten mit Ihrem eigenen Kontext und Ihren Daten zu erweitern. Dadurch kann der Agent Fragen zu spezifischen Themen oder Bereichen verstehen und beantworten, die von seinen allgemeinen Trainingsdaten nicht abgedeckt werden.

### B. Schritte zur Integration von Wissen

1. Navigieren Sie zum **Wissen**-Block im KI-Agenten-Builder.
2. Klicken Sie auf **"Wissen hinzufügen."**
3. Wählen Sie das Hinzufügen von hochgeladenem Wissen aus.
   > Hinweis: Sie müssen zuerst einen Wissenssatz hochladen, um ihn hier abzurufen. Für detaillierte Anweisungen zur Erstellung von Wissenssätzen beziehen Sie sich auf den [Wissensleitfaden](/de-de/knowledge).
4. Klicken Sie auf **"Speichern"**, um das ausgewählte Wissen zu Ihrem KI-Agenten hinzuzufügen.
5. *(Optional)* Wenn Ihr KI-Agent als **Web App** konfiguriert ist, klicken Sie auf **"Abfragevariable auswählen"** und weisen Sie eine Benutzereingabe-Variable (aus dem **Benutzereingaben**-Block) zu, die als Abfrage für die Wissensabfrage dient.

## KI-Modell

### A. Ihre KI-Agenten mit großen Sprachmodellen ausstatten

Große Sprachmodelle (LLMs) bilden die Grundlage der KI-Agenten von FabriXAI und ermöglichen es ihnen, über natürliche Sprachinteraktionen zu kommunizieren. Diese Modelle verarbeiten Benutzereingaben und generieren Antworten basierend auf einem "Prompt", den Sie bereitstellen.

### B. Schritte zur Konfiguration des KI-Modells:

1. Navigieren Sie zum **KI-Modell**-Block im KI-Agenten-Builder.
2. Klicken Sie auf **"Bearbeiten."**
3. Schreiben Sie einen **Prompt**, der Anweisungen für Ihren KI-Agenten enthält.
   > Hinweis: Bitte beziehen Sie sich auf [Hinweise zum Schreiben effektiver Prompts](/de-de/configure-ai-agent/#c-notes-on-writing-effective-prompts) für weitere Erklärungen.
4. *(Optional)* Wenn Ihr KI-Agent als **Chatbot** konfiguriert ist, können Sie eine Begrüßungsnachricht hinzufügen. Diese Nachricht wird dem Benutzer zu Beginn jedes Gesprächs gesendet.
5. Wählen Sie das gewünschte **KI-Modell** aus, das am besten zu Ihrer Aufgabe passt.
   > Hinweis: Für die Liste der unterstützten KI-Modelle beziehen Sie sich bitte auf [Welche KI-Modelle werden unterstützt?](/de-de/what-ai-models-are-supported).
6. *(Optional)* Öffnen Sie den **"Erweiterten"** Bereich, um die Parameter des Modells weiter anzupassen.
   > Hinweis: Bitte beziehen Sie sich auf [Richtlinien zur Einstellung von Parametern für LLM](/de-de/configure-ai-agent/#d-guidance-on-setting-parameters-for-llm) für weitere Erklärungen.
7. Klicken Sie auf **"Speichern"**, um die Konfiguration des KI-Modells abzuschließen.

### C. Hinweise zum Schreiben effektiver Prompts

- Seien Sie spezifisch bezüglich der Aufgabe, die der KI-Agent ausführen soll.
- Fügen Sie Beispiele hinzu, um das Verhalten des Modells zu leiten.
- Verwenden Sie strukturierte Formate, wenn dies angemessen ist (z.B. Aufzählungspunkte oder nummerierte Listen).

Für weitere Tipps zur Erstellung effektiver Prompts besuchen Sie den [FabriXAI's Prompt Engineering Blog](https://www.fabrixai.com/blog/category/prompt-engineering).

### D. Anleitung zur Einstellung von Parametern für LLM

Die Einstellung von Parametern bestimmt den Stil und den Ton der Antworten Ihres KI-Agenten. Wir bieten voreingestellte Werte für verschiedene Antwortstile an, und Sie können die Einstellungen auch mit den folgenden Optionen anpassen:

1. **Temperatur**: Kontrolliert die Zufälligkeit der Ausgabe. Ein niedriger Wert (z.B. 0,2) führt zu fokussierteren und deterministischeren Antworten, während ein höherer Wert (z.B. 0,8) Kreativität und Vielfalt in den Antworten fördert.
2. **Top P**: Dieser Parameter (auch als Kern-Sampling bekannt) gibt die kumulative Wahrscheinlichkeit der Token-Auswahl an. Wenn er auf einen Wert wie 0,9 gesetzt wird, berücksichtigt das Modell nur die obersten 90 % der Wahrscheinlichkeitsmasse für die Generierung des nächsten Tokens, was eine kontrolliertere Zufälligkeit ermöglicht.
3. **Präsenzstrafe**: Passt die Wahrscheinlichkeit an, dass das Modell neue Themen einführt. Ein positiver Wert (z.B. 0,5) verringert Wiederholungen und fördert die Einführung neuer Konzepte, während ein Wert nahe 0 mehr Wiederholungen zulässt.
4. **Frequenzstrafe**: Verringert die Wahrscheinlichkeit, dass das Modell dasselbe Token basierend auf seiner Häufigkeit im Text wiederholt. Ein Wert von 0,5 bestraft häufige Tokens leicht und fördert die Vielfalt in der Ausgabe.
5. **Maximale Anzahl der Tokens**: Gibt die maximale Länge der generierten Antwort an. Die entsprechende Einstellung dieses Wertes stellt sicher, dass die Antworten prägnant und relevant für Ihre Bedürfnisse sind. Zum Beispiel könnte ein Wert von 150 oder 300 Tokens je nach Kontext gut funktionieren.

## Ausgabe

### A. Konfigurieren der Ausgabevorlagen des KI-Agenten

Der **Ausgabebereich** bestimmt, wie der KI-Agent seine Ergebnisse den Endbenutzern präsentiert und sich in Ihre Arbeitsabläufe integriert. Die Ausgaben sollten klar, benutzerfreundlich und auf Ihre Ziele abgestimmt sein. Standardmäßig wird die Ausgabevorlage des KI-Agenten basierend auf den Ergebnissen des KI-Modells festgelegt, und für diesen Teil ist keine weitere Konfiguration erforderlich.

## Finalisieren Sie Ihren KI-Agenten

Nachdem Sie alle Einstellungen konfiguriert haben, klicken Sie einfach auf **"Speichern"** in der oberen rechten Ecke, um Ihren KI-Agenten zu veröffentlichen. Sie können auf die App-Seite des KI-Agenten zugreifen, indem Sie auf das **"Öffnen-Symbol ↗"** in der oberen rechten Ecke klicken, oder ihn über die Optionen in der linken Seitenleiste mit anderen teilen.

## Verwandte Artikel
- [KI-Agent verwenden](/de-de/use-ai-agent)
- [KI-Agent teilen](/de-de/share-ai-agent)
