var http = require( "http" );
var url = require( "url" );
var trolol = require( "trolol/src/trolol" );

var port = process.env.PORT || 6969;

var numberHandler = function ( command, arg ) {
    arg = "length" || arg;
    return function ( query ) {
        trolol[ command ]( +query[ arg ] || 1, query );
    };
};

var handlers = {
    website: function ( query ) {
        trolol.website( query.from, query.to );
    },
    commandNotFound: function ( query ) {
        trolol.commandNotFound( query.command );
    },
    rebecca: function ( query ) {
        trolol.rebecca( query );
    },
    steve: function ( query ) {
        trolol.steve( query );
    },
    volumeLevel: numberHandler( "volumeLevel" ),
    brightness: numberHandler( "brightness" ),
    screensaver: numberHandler( "screensaver", "times" ),
    moveMouse: numberHandler( "moveMouse" ),
    disableMouse: numberHandler( "disableMouse" ),
    beep: numberHandler( "beep", "times" ),
    eject: numberHandler( "eject", "times" ),
    dickbutt: function () {
        trolol.dickbutt();
    },
    shutdown: function ( query ) {
        trolol.shutdown( query.program, query );
    }
};

var server = http.createServer(function ( req, res ) {
    var parsed = url.parse( req.url, true );
    var path = parsed.pathname.replace( /^\//, "" ).split( "/" );
    
    try {
        handlers[ path[ 0 ] ]( parsed.query );
    } catch ( e ) {}
    
    res.end();
});

server.on( "error", function ( e ) {
    console.error( e );
});
server.listen( port );