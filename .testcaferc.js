module.exports = {
screenshots: {
takeOnFails: true,
fullpage: true,
pathPattern:
'${FIXTURE}_${USERAGENT}/${TEST}/${DATE}_${TIME}__${QUARANTINE_ATTEMPT}/${FILE_INDEX}.png',
path: './screenshots',
},
clientScripts: [{ module: '@testing-library/dom/dist/@testing-library/dom.umd.js' }],
quarantineMode: false,
skipJsErrors: true,
skipUncaughtErrors: true,
speed: 1,
cache: true,
stopOnFirstFail: false
};
