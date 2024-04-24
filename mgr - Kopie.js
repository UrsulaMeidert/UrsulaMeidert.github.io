define(['managerAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager) {

    let API = new Manager();

	init_data_pipe(API, 'mpdLPzrqLyQB',  {file_type:'csv'});	

    API.setName('mgr');
    API.addSettings('skip',true);
	
	let blackLabels = ['Homosexuell'];
    let whiteLabels = ['Heterosexuell'];
	
	/*
	API.addGlobal({
        sexiat:{},
        //YBYB: change when copying back to the correct folder
        baseURL: './images/',
        raceSet:raceSet,
        blackLabels:blackLabels,
        whiteLabels:whiteLabels,
        //Select randomly what attribute words to see. 
        //Based on Axt, Feng, & Bar-Anan (2021).
        posWords : API.shuffle([
            'Love', 'Cheer', 'Friend', 'Pleasure',
            'Adore', 'Cheerful', 'Friendship', 'Joyful', 
            'Smiling','Cherish', 'Excellent', 'Glad', 
            'Joyous', 'Spectacular', 'Appealing', 'Delight', 
            'Excitement', 'Laughing', 'Attractive','Delightful', 
            'Fabulous', 'Glorious', 'Pleasing', 'Beautiful', 
            'Fantastic', 'Happy', 'Lovely', 'Terrific', 
            'Celebrate', 'Enjoy', 'Magnificent', 'Triumph'
        ]), 
        negWords : API.shuffle([
            'Abuse', 'Grief', 'Poison', 'Sadness', 
            'Pain', 'Despise', 'Failure', 'Nasty', 
            'Angry', 'Detest', 'Horrible', 'Negative', 
            'Ugly', 'Dirty', 'Gross', 'Evil', 
            'Rotten','Annoy', 'Disaster', 'Horrific',  
            'Scorn', 'Awful', 'Disgust', 'Hate', 
            'Humiliate', 'Selfish', 'Tragic', 'Bothersome', 
            'Hatred', 'Hurtful', 'Sickening', 'Yucky'
        ])
    });
	*/

    API.addTasksSet({
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
        uploading: uploading_task({header: 'einen Moment bitte', body:'Einen Moment Geuld bitte, die Daten werden gespeichert ... '})
    });

    API.addSequence([
	{ type: 'isTouch' },
		{inherit: 'intro'},
		{inherit: 'sexiat_instructions'},
		{inherit: 'sexuality'},
		{inherit: 'uploading'},
		{inherit: 'lastpage'},
		{inherit: 'redirect'}
    ]);

    return API.script;
});
