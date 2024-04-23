define(['pipAPI'], function(APIconstructor) {

    var API = new APIconstructor();

    API.addSequence([
        {
            type: 'quest',
            header: 'Bitte geben Sie untenstehend nochmals denselben Code ein wie zuvor, damit wir Ihre Antworten einander zuordnen können.',
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
