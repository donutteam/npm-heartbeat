# Heartbeat
A simple function for periodically pinging a heartbeat URL.

## Installation
Install the package with NPM:

```
npm install @donutteam/heartbeat
```

## Usage
Call the `heartbeat` function with a URL, it's that simple!

```js
// Somewhere in your application!
heartbeat("https://betteruptime.com/api/v1/heartbeat/my_cool_heartbeat_url_ye");
```

## Options
You can also customise the interval and HTTP request type of the heartbeat using the second argument:

```js
heartbeat("https://betteruptime.com/api/v1/heartbeat/my_cool_heartbeat_url_ye",
	{
		// How often the heartbeat should be pinged in milliseconds. Optional, defaults to 60000 (60 seconds).
		interval: 60000,

		// The HTTP method to use when pinging the heatbeat. Optional, defaults to "HEAD".
		method: "HEAD",
	});
```

## License
[MIT](https://github.com/donutteam/npm-heartbeat/blob/main/LICENSE.md)