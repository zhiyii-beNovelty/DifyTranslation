---
metatitle: Schreibkorrektor | Agent-Vorlagen | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch zur Konfiguration und Verwendung des Schreibkorrektor-KI-Agenten, um einen gegebenen Text zu überarbeiten.
lang: de-DE
permalink: /agent-templates/writing-proofreader
---

# Schreibkorrektor

Der **Schreibkorrektor** KI-Agent ist darauf ausgelegt, professionelles Feedback zu Ihren schriftlichen Inhalten zu geben. Durch die Bewertung von Grammatik, Struktur und Inhalt hilft er Ihnen, Ihren Text zu verfeinern, um Klarheit und Engagement zu erhöhen. Ob Sie eine Buchrezension, einen Artikel oder eine andere Form des schriftlichen Ausdrucks verfassen, dieser Agent bietet detaillierte Verbesserungsvorschläge und ist somit ein unverzichtbares Werkzeug für Autoren auf jedem Niveau.

## Erste Schritte

Um loszulegen, stellen Sie sicher, dass Sie den **Schreibkorrektor** geklont haben. Folgen Sie [Aus Vorlagen erstellen](/en-us/create-from-templates/), um Ihren KI-Agenten zu klonen und zu konfigurieren.

## Konfigurationsanweisungen

### Benutzereingaben

| Bezeichnung                 | Beschreibung                                    | Anleitung                                                                 |
| --------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------- |
| Ziel des Schreibens         | Geben Sie den Fokus oder das Ziel des Textes an | Fügen Sie eine kurze Aussage zum Zweck Ihres Schreibens hinzu (z.B. „Eine Buchrezension“, „Ein Artikel“) |
| Text zum Korrekturlesen      | Geben Sie den zu korrigierenden Text ein         | Stellen Sie einen ausführlichen Text zur Bewertung bereit, idealerweise zwischen 300-1000 Wörtern für umfassendes Feedback |

### Wissen

Sie können `.pdf`- oder `.txt`-Dateien hochladen, um dem Agenten einen maßgeschneiderten Kontext bereitzustellen, der Ihren spezifischen Anforderungen entspricht.

### KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle erkunden. Falls erforderlich, passen Sie Ihre Eingabeaufforderungen an, um maßgeschneiderte Ergebnisse zu erhalten.

::: tip
Für detailliertere Anweisungen zur Konfiguration eines KI-Agenten, siehe bitte [KI-Agent konfigurieren](/en-us/configuer-ai-agent/)
:::

## Beispiel-Eingaben und -Ausgabe

### Beispiel-Eingaben

- **Ziel des Schreibens**: Eine Buchrezension des Buches *Harry Potter und der Stein der Weisen*
- **Text zum Korrekturlesen**: J.K. Rowlings *Harry Potter und der Stein der Weisen* ist ein fesselndes Debüt, das die Leser in die Zauberwelt und den Jungen einführt, der zu einem der ikonischsten Helden der Literatur werden würde. Die Geschichte folgt dem jungen Harry Potter, einem gewöhnlichen Jungen, der an seinem elften Geburtstag entdeckt, dass er tatsächlich ein Zauberer ist. Harry wird in die Hogwarts-Schule für Hexerei und Zauberei gebracht und begibt sich auf eine außergewöhnliche Reise, schließt neue Freundschaften, lernt Magie und deckt die Wahrheit über seine Vergangenheit auf. Rowlings Weltenbau ist einfach magisch. Von der geschäftigen Winkelgasse bis zur bezaubernden Großen Halle wird jede Umgebung mit akribischen Details und einem Gefühl des Staunens zum Leben erweckt. Die Autorin verbindet nahtlos das Alltägliche mit dem Übernatürlichen und schafft damit ein fantastisches Reich, das sowohl fremd als auch vertraut erscheint.

### Beispielausgabe

```
Feedback:
Grammatik:
Die Grammatik im Text ist im Allgemeinen korrekt, ohne grobe Fehler. Allerdings gibt es einige Bereiche, in denen die Zeichensetzung zur besseren Lesbarkeit verbessert werden könnte. Zum Beispiel könnte der Satz „Die Geschichte folgt dem jungen Harry Potter, einem gewöhnlichen Jungen, der an seinem elften Geburtstag entdeckt, dass er tatsächlich ein Zauberer ist“ von einem Komma nach „tatsächlich“ profitieren.

Struktur:
Die Struktur des Textes ist klar und logisch. Sie beginnt mit einer Einführung in das Buch und dessen Bedeutung, gefolgt von einer kurzen Zusammenfassung der Handlung und endet mit einer Analyse der Weltenbau-Fähigkeiten der Autorin. Allerdings könnten die Übergänge zwischen Sätzen und Absätzen flüssiger sein, um den Fluss der Rezension zu verbessern.

Inhalt:
Der Inhalt erfüllt effektiv das Ziel einer Buchrezension. Es bietet einen Überblick über die Handlung und hebt wichtige Elemente wie den Weltenbau hervor. Allerdings könnte es von einer kritischeren Analyse der Stärken und Schwächen des Buches profitieren. Beispielsweise würde die Erwähnung der Charakterentwicklung, des Erzähltempos oder thematischer Elemente eine umfassendere Rezension bieten.

Überarbeiteter Text:
J.K. Rowlings *Harry Potter und der Stein der Weisen* ist ein fesselndes Debüt, das die Leser in die Zauberwelt und den Jungen einführt, der zu einem der ikonischsten Helden der Literatur werden würde. Die Geschichte folgt dem jungen Harry Potter, einem gewöhnlichen Jungen, der an seinem elften Geburtstag entdeckt, dass er tatsächlich ein Zauberer ist. Harry wird in die Hogwarts-Schule für Hexerei und Zauberei gebracht und begibt sich auf eine außergewöhnliche Reise, schließt neue Freundschaften, lernt Magie und deckt die Wahrheit über seine Vergangenheit auf.

Rowlings Weltenbau ist einfach magisch. Von der geschäftigen Winkelgasse bis zur bezaubernden Großen Halle wird jede Umgebung mit akribischen Details und einem Gefühl des Staunens zum Leben erweckt. Die Autorin verbindet nahtlos das Alltägliche mit dem Übernatürlichen und schafft damit ein fantastisches Reich, das sowohl fremd als auch vertraut erscheint.

Während das Buch darin herausragt, eine immersive Welt zu erschaffen, glänzt es auch in der Charakterentwicklung. Harry, zusammen mit seinen Freunden Hermine Granger und Ron Weasley, entwickelt sich im Laufe der Geschichte weiter und stellt sich Herausforderungen, die ihren Mut und ihre Freundschaft auf die Probe stellen. Das Erzähltempo ist gut ausbalanciert und hält die Leser von Anfang bis Ende gefesselt. Darüber hinaus sind die Themen von Mut, Freundschaft und dem Kampf zwischen Gut und Böse nahtlos in die Erzählung eingebunden, was es nicht nur zu einem Kinderbuch, sondern zu einer Geschichte mit universeller Anziehungskraft macht.

Zusammenfassend ist *Harry Potter und der Stein der Weisen* eine meisterhafte Einführung in eine Serie, die Millionen begeistert hat. Rowlings Fähigkeit, eine reiche, fesselnde Welt und nachvollziehbare Charaktere zu schaffen, macht dieses Buch zu einer Pflichtlektüre für sowohl junge als auch erwachsene Leser.
```

## Tipps für eine effektive Konfiguration

- **Sei klar in deinem Ziel**: Definiere deutlich das Ziel deines Schreibens, um das Feedback gezielt zu steuern.
- **Stelle ausführlichen Text bereit**: Je mehr Inhalt du bereitstellst, desto detaillierter wird das Feedback sein; strebe eine Länge zwischen 300 und 1000 Wörtern an.
- **Verwende die richtige Formatierung**: Stelle sicher, dass dein Text klare Absätze und eine gut strukturierte Gliederung hat, um eine bessere Analyse zu ermöglichen.
- **Iteriere basierend auf dem Feedback**: Überprüfe die vom Agenten bereitgestellten Vorschläge und verfeinere deinen Text, dann gib ihn erneut ein, um weitere Verbesserungen zu erhalten.
- **Experimentiere mit verschiedenen Modellen**: Wenn du mit dem Ergebnis nicht zufrieden bist, probiere verschiedene KI-Modelle aus, um zu sehen, welches am besten zu deinem Schreibstil passt.

## Verwandte Artikel
Entdecken Sie unsere Sammlung von [Agent-Vorlagen](/en-us/agent-templates/), um mehr über die Anwendungsmöglichkeiten von KI-Agenten zu erfahren!