const { execFile, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");

const fileSortedToExec = ['about_asserts',
    'about_equality',
    'about_truthyness',
    'about_control_structures',
    'about_numbers',
    'about_objects',
    'about_arrays',
    'about_reflection',
    'about_assignment',
    'about_scope',
    'about_prototype_chain',
    'about_prototypal_inheritance',
    'about_functions_and_closure',
    'about_this',
    'about_operators',
    'about_regular_expressions',
    'about_strings'];

const testKoansPath = path.join(__dirname, 'topics');

const sortFiles = (files) => {
    return files.sort( (fileA, fileB) => {
        let indexFileA = fileSortedToExec.findIndex(file => fileA.includes(file));
        let indexFileB = fileSortedToExec.findIndex(file => fileB.includes(file));
        
        //Se pone al final de la lista en caso que no se haya encontrado el indice
        indexFileA = indexFileA != -1 ? indexFileA : 99999; 
        indexFileB = indexFileB != -1 ? indexFileB : 99999;

        return indexFileA - indexFileB
    })
}

const execNodeAndShowOutput = (fileToExecNode) => {
    execSync(`node ${fileToExecNode}`, {stdio: 'inherit'})
}

const execKoans = () => {
    console.info('Iniciando ejecución de test')
    console.info(`Directorio de test: ${testKoansPath}`);
    
    let testKoansFiles = sortFiles(fs.readdirSync(testKoansPath));
    
    testKoansFiles.forEach((testFile) => {
        console.info(testFile);
        execNodeAndShowOutput(`${testKoansPath}/${testFile}`);
    });
};

module.exports = execKoans();