/**
 * VoiceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */







const prompt = require('prompt-async');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const desktop_path = '/home/jc60';
async function createFolderInVoice(){
    prompt.start()
    const firstQues = "Enter your folder name do you want to create";
    let promptResult = await prompt.get(firstQues);
    const createFolder = promptResult[firstQues];
    const folderPaths = desktop_path + '/' + createFolder
    fs.mkdirSync(folderPaths);
    console.log("Folder created successfully");
    const secondQues = "Please enter a folder name to search";  
    let result = await prompt.get(secondQues);
    const folderToSearch = result[secondQues];
    const thirdQues = "Please enter a path name "; 
    promptResult = await prompt.get(thirdQues);
    let folderPath = promptResult[thirdQues];
    const fourQuestion = "Please enter the text you want to convert to voice recording:";
    promptResult = await prompt.get(fourQuestion);
    const textToConvert = promptResult[fourQuestion];
    const voiceQues = "Enter the voice you want to use (e.g., 'Alex', 'Cellos'):";
    promptResult = await prompt.get(voiceQues);
    const voiceType = promptResult[voiceQues] || 'Alex'; // Default to 'Alex' if no input
    const speedQues = "Enter the speed for the voice (e.g., 1.0 for normal, 0.75 for slower):";
    promptResult = await prompt.get(speedQues);
    const speed = parseFloat(promptResult[speedQues]) || 1.0; // Default to 1.0 if no input or invalid
    const recordingFileName = "voice_recording.mp4";
    const recordingFilePath = path.join(folderPaths, recordingFileName);
    await generateVoiceRecording(textToConvert, voiceType, speed, recordingFilePath);
    console.log("Voice recording file created successfully:", recordingFilePath);
}
function generateVoiceRecording(text, voice, speed, filePath) {
    return new Promise((resolve, reject) => {
        exec(`espeak "${text}" -w ${filePath}`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}
createFolderInVoice()






















            







   







































module.exports = {};

