//
// Type Definitions
//

/**
 * @typedef {Object} HeartbeatOptions
 * @property {Number} interval How often the heartbeat should be pinged in milliseconds. Optional, defaults to 60000 (60 seconds).
 * @property {"GET"|"POST"|"HEAD"} method The HTTP method to use when pinging the heatbeat. Optional, defaults to "HEAD".
 */

//
// Exports
//

/**
 * Pings the given URL periodically.
 * 
 * @param {String|null} heartbeatUrl The URL to ping. You can pass null to have no heartbeat take place.
 * @param {HeartbeatOptions} options Additional options for the heartbeat.
 * @author Loren Goodwin
 */
export async function heartbeat(heartbeatUrl, options)
{
	if (heartbeatUrl == null)
	{
		console.log("[Heartbeat] No heartbeat URL, there will be no heartbeat.");

		return;
	}

	console.log("[Heartbeat] Pinging heartbeat URL...");

	fetch(heartbeatUrl,
		{
			method: options?.method ?? "HEAD",
		});

	await new Promise((resolve) => setTimeout(resolve, options?.interval ?? 60000));

	heartbeat(heartbeatUrl);
}