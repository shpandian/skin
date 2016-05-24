"use strict";

var require = patchRequire(require),
    fs = require( "fs" ),
    basePath = fs.absolute( fs.workingDirectory ),
    testPath = basePath + "/test/html/",
    screenshotsPath = basePath + "/screenshots",
    phantomcss = require( basePath + "/node_modules/phantomcss/phantomcss" ); // casper magix
// if anyone knows how to fix this for casperjs, feel free to remove the hard coded lib path

var ignored = {
    // Don't remove "." and ".." as this will lead into an endless loop.
    // Add other directories or files inside the html folder that you wish to get ignored
        "." : true,
        ".." : true,
        "failed" : true
    },
    changedFiles = [];

function screenshotAndCompare( relativePath ) {
    if ( relativePath.substring( relativePath.length - 5 )  !== ".html" ) {
        return;
    }

    casper.test.begin("Testing" + relativePath, function() {

        console.log("Processing with path:", relativePath);

        phantomcss.update({
            rebase: casper.cli.get( "rebase" ),
            casper: casper,

            libraryRoot: basePath + "/node_modules/phantomcss",
            screenshotRoot: basePath + "/test/html" ,
            failedComparisonsRoot: basePath + "/screenshots/failed",

            addLabelToFailedImage: false,

            /*
                Mismatch tolerance defaults to 0.05%. Increasing this value
                will decrease test coverage. Reducing this value may produce
                false positives.
            */
            mismatchTolerance : 4.27
        });

        var classNames = [];

        casper.start( testPath + relativePath ); // points to the html file
        casper.viewport( 1024, 768 );

        casper.then( function() {
            classNames = casper.evaluate(prepareNodesForCapture);
        });

        casper.then( function() {
            classNames.map( screenShotElement );
        });


        casper.then( compareScreenShots );

        casper.run( function() {
            console.log("Finished running tests for", relativePath);
            casper.test.done();
        });


        function prepareNodesForCapture() {
            var classNames = [];
            var testNodes = Array.prototype.filter.call(document.getElementsByClassName('test'), function(e) { return e } );
            testNodes.forEach( function( element, index ) {
                element.setAttribute("class", "test" + index);
                classNames.push( "test" + index)
            });

            console.log("names generated as", classNames);
            return classNames;
        }

        function compareScreenShots() {
            phantomcss.compareSession();
        }

        function screenShotElement( className ) {
            var screenshotDestinationPath = relativePath.split('/'),
                screenshotFilename = screenshotDestinationPath.pop();

            console.log("attempting to screenshot", className);

            screenshotDestinationPath.push('screenshots');
            screenshotDestinationPath.push(screenshotFilename)
            screenshotDestinationPath = screenshotDestinationPath.join('/');

            phantomcss.screenshot("." + className, screenshotDestinationPath+"."+ className); // name of screenshot
        }
    });
}


function testRecursive( path ) {
    var fileList = fs.list( testPath + path ),
        targetFile,
        targetPath,
        i;

    for( i =0; i < fileList.length; i++ ) {
        targetFile = fileList[i];

        if ( !ignored[targetFile] ) {
            targetPath = path + targetFile;

            if ( fs.isDirectory( testPath + targetPath ) ) {
                testRecursive( targetPath + "/" );
            } else {
                console.log( "Queued:", targetPath);
                screenshotAndCompare( targetPath );
            }
        }
    }
}

function addToChangedFilesList( fileName ) {
    if ( fileName.length > 2 ) {
        changedFiles.push(fileName.substring(1, fileName.length - 1));
    }

}

function deleteIfMatch(directory, filename) {
    return function(targetFile) {
        if( targetFile.indexOf(filename) === 0 ) {
            console.log("Deleting", directory + targetFile);
            require("fs").remove(directory + targetFile)
        }
    }
}

function deleteScreenShot( filename ) {
    var target = screenshotsPath + "/" + filename,
        directory = target.substring(0, target.lastIndexOf('/')+1 ),
        filename = target.substring(target.lastIndexOf('/') + 1 );

    if ( fs.isDirectory(directory) ) {
        fs.list(directory).map( deleteIfMatch(directory, filename) );
    }
}

// Empty test that exists so that the build doesn't fail if no files are compared
function runEmptyCasperTestHack() {
    casper.test.begin("empty test", function() {
        casper.start().then( function() {
            casper.test.assert(true,true);
        }).run( function() {
            casper.test.done();
        });
    });
}



var spawn = require("child_process").spawn,
    execFile = require("child_process").execFile,
    child = spawn("git", ["log", "-1"]);

child.stdout.on("data", function( data ) {

    (data.match( /\*[^\*]*\*/g ) || []).map( addToChangedFilesList );
    changedFiles.map( deleteScreenShot );


    testRecursive("");
    runEmptyCasperTestHack();
});
