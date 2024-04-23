define(['managerAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager) {

    let API = new Manager();

	init_data_pipe(API, 'mpdLPzrqLyQB',  {file_type:'csv'});	

    API.setName('mgr');
    API.addSettings('skip',true);
	
    let homoLabels = ['Homosexuell'];
    let heteroLabels = ['Heterosexuell'];
	
	API.addGlobal({
        sexiat:{},
        baseURL: './sex.images/',
        homoLabels:homoLabels,
        heteroLabels:heteroLabels,
        posWords : API.shuffle([
            'Glücklich', 'Frieden', 'Vergnügen', 'Prachtvoll',
            'Liebe', 'Lachen', 'Freude', 'Wundervoll'
        ]), 
        negWords : API.shuffle([
            'Qual', 'Verletzt', 'Misserfolg', 'Böse',
            'Übel', 'Schrecklich', 'Grausam', 'Scheusslich'
        ])
    });

    API.addTasksSet({
        questionnaire: [{
            type: 'quest',
            name: 'questionnaire',
            scriptUrl: 'questionnaire.js',  // This file should contain the questions for the questionnaire
            onLoad: function() {
                console.log('Questionnaire loaded with button text:', this.buttonText);
            }
        }],
		instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],
		intro: [{
            inherit: 'instructions',
            name: 'intro',
            templateUrl: 'intro.jst',
            title: 'Intro',
            header: 'Welcome'
        }],
		sexiat_instructions: [{
            inherit: 'instructions',
            name: 'sexiat_instructions',
            templateUrl: 'sexiat_instructions.jst',
            title: 'IAT Instructions',
            header: 'Implicit Association Test'
        }],
        sexuality: [{
            type: 'time',
            name: 'sexuality',
            scriptUrl: 'sexuality.js'
        }],
		lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            //Uncomment the following if you want to end the study here.
            //last:true, 
            header: 'You have completed the study'
        }], 
        
        //Use if you want to redirect the participants elsewhere at the end of the study
        redirect:
        [{ 
			//Replace with any URL you need to put at the end of your study, or just remove this task from the sequence below
            type:'redirect', name:'redirecting', url: 'https://www.google.com/search' 
        }],
		
		//This task waits until the data are sent to the server.
        uploading: uploading_task({header: 'just a moment', body:'Please wait, sending data... '})
    });

    API.addSequence([
	    { type: 'isTouch' },
        {inherit: 'questionnaire'},
		{inherit: 'sexiat_instructions'},
		{inherit: 'sexuality'},
		{inherit: 'uploading'},
		{inherit: 'lastpage'},
		{inherit: 'redirect'}
    ]);

    return API.script;
});
