define(['pipAPI'], function(APIconstructor) {

    var API = new APIconstructor();

    API.addSequence([
        {
            type: 'quest',
            header: 'Um die Entwicklung über den Verlauf Ihres Studiums feststellen zu können, sind wir darauf angewiesen, Ihre Antworten einander zuordnen zu können. Damit dies anonym geschehen kann, bitten wir Sie, einen Code nach dem folgenden Schema zu erfassen. Bei späteren Befragungen kann dieser dann ausschliesslich von Ihnen wieder hergestellt werden.',
            submitText: 'Weiter',
            questions: [
                {
                    type: 'text',
                    stem: 'Erster Buchstabe des Vornamens Ihres Vaters (wenn nicht bekannt, dann X)',
                    name: 'Vater',
                    required: true
                },
                {
                    type: 'text',
                    stem: 'Erster Buchstabe des Vornamens Ihres Mutter (wenn nicht bekannt, dann X)',
                    name: 'Mutter',
                    required: true
                },
                {
                    type: 'text',
                    stem: 'Erster Buchstabe Ihres Geburtsorts (wenn nicht bekannt, dann X)',
                    name: 'Geburtsort',
                    required: true
                },
                {
                    type: 'text',
                    stem: 'Tag an dem Sie geboren wurden (z.B. 09 für 9.)',
                    name: 'Tag',
                    required: true
                }
                
            ]
        }
    ]);

    return API.script;
});