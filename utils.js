import chalk from 'chalk';
 

export function firstElement (arr) {
    return arr[0]
}

export function halfListElement (arr) {
    return arr[Math.ceil(arr.length - 1 /2)]
}

export function lastElement (arr) {
    return arr[arr.length-1]
}

export function executeConfig(configs) {
    Object.entries(configs).forEach(([key, config]) => {
        const {method, datasets, useCases, description, gif} = config;
        console.log(`${key.replace('-', ' ').toUpperCase()}: \n`);
        gif && console.log(chalk.blue(`${gif} \n`))
        console.log(chalk.gray(`${description} \n`));
        console.log(`Use cases: \n`);
        Object.entries(datasets).forEach(([datasetName, dataset]) => {
            Object.entries(useCases).forEach(([useCaseName, useCase]) => {
                const target = useCase(dataset);
    
                const consoleTimeToken = `${datasetName} - ${useCaseName} - elements (${dataset.length})`
                console.time(consoleTimeToken)
                const returnedValue = method(dataset, target)
                console.timeEnd(consoleTimeToken)
                console.log(`Returned Value: ${returnedValue}`)
            })
            console.log('\n')
        })    
    });    
}