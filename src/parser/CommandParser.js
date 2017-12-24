let commandPattern = /^[#@$].*/g,
    aCommandTags = [
    'main'
];

export let parseCommand = (sCommand) => {
    let aWords = sCommand.split(' ');
    let oData = {
        commands: [],
        categories: [],
        words: []
    };
    let aMetadata = aWords.reduce((data, sWord) => { 
        if(sWord.startsWith('#')) {
            data.categories.push(sWord);
        } else if(sWord.startsWith('$')) {
            data.commands.push(sWord);
        } else {
            data.words.push(sWord);
        }
        return data;
    }, oData);

    oData.text = sCommand;
    return aMetadata;
};