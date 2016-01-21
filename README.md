# Trolol web - Web interface for trolling
Web interface for the fun project [trolol](https://github.com/ukupat/trolol).

## Installation
```
npm install -g trolol-web
```

## Starting the server
To start trolol-web on default port (`6969`), do:

```
trolol-web
```

To start trolol-web on a custom port, define the `PORT` environment variable:

```
PORT=3000 trolol-web
```

## Usage
Choose your favorite command below. To use it, just access `http://<server>:<port>/<command>`.

The params of each command are to be passed in the query string,
so to beep twice, access `http://<server>:<port>/beep?times=2`.  

### `website`
Params:
- `from`
- `to`

### `command-not-found`
Params:
- `command`

### `rebecca`
- `saturday`: Pass this to play Saturday instead of Friday
- `wait`: How many seconds to wait before executing

### `steve`
- `wait`: How many seconds to wait before executing

### `screensaver`
Params:
- `times`
- `wait`: How many seconds to wait before executing

### `brightness`
Params:
- `length`
- `wait`: How many seconds to wait before executing

### `volume-level`
Params:
- `length`
- `wait`: How many seconds to wait before executing

### `disable-mouse`
Params:
- `length`
- `wait`: How many seconds to wait before executing

### `move-mouse`
Params:
- `length`
- `wait`: How many seconds to wait before executing

### `beep`
Params:
- `times`: How many times to beep
- `wait`: How many seconds to wait before executing

### `eject`
Params:
- `times`: How many times to eject the media drive
- `wait`: How many seconds to wait before executing

### `dickbutt`
*No params*

### `shutdown`
Params
- `program`
- `times`: How many times the app "crashes"
- `range`: Variety in minutes between crashes
- `wait`: Minimum minutes between crashes