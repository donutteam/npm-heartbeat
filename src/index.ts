//
// Exports
//

export interface HeartbeatOptions
{
	interval? : number;

	method? : "GET" | "POST" | "HEAD";
}

/**
 * Pings the given URL periodically.
 * 
 * @author Loren Goodwin
 */
export function heartbeat(heartbeatUrl : string, options : HeartbeatOptions = {}) : void
{
	//
	// Check for Heartbeat URL
	//

	if (heartbeatUrl == null)
	{
		console.log("[Heartbeat] No heartbeat URL, there will be no heartbeat.");

		return;
	}

	//
	// Default Options
	//

	options.interval ??= 60000;

	options.method ??= "HEAD";

	//
	// Do Heartbeat
	//

	function doHeartbeat()
	{
		console.log("[Heartbeat] Pinging heartbeat URL...");

		fetch(heartbeatUrl,
			{
				method: options.method,
			});

		setTimeout(doHeartbeat, options.interval);
	}

	doHeartbeat();
}