import http from 'k6/http';
import { check } from 'k6';

const Logger = require('../services/logger.service');
const logger = new Logger('beta.horizon-lenses');

export default function () {
    const response = http.get(`https://beta.horizon-lenses.com/`);
    check(response, {
        "is status 200": (r) => r.status === 200
    })
}

export let options = {
    vus: 1,
    duration: '1s',
    // thresholds: {
    //     'failed requests': ['rate<0.02'],
    //     http_req_duration: ['p(95)<500'],
    //     http_reqs: ['count>6000']
    // },
};

export function handleSummary(data) {
    console.log('Preparing the end-of-test summary...');

    // Send the results to the LOGS
    logger.info(`load-test-summary::${Date.now()}`, data);


    return {
        'stdout': textSummary(data, { indent: ' ', enableColors: true }), // Show the text summary to stdout...
        '../path/to/junit.xml': jUnit(data), // but also transform it and save it as a JUnit XML...
        'other/path/to/summary.json': JSON.stringify(data), // and a JSON with all the details...
        // And any other JS transformation of the data you can think of,
        // you can write your own JS helpers to transform the summary data however you like!
    };
}


















