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
export async function heartbeat(heartbeatUrl : string, options : HeartbeatOptions) : Promise<void>
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

	options ??= {};

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
				method: options?.method ?? "HEAD",
			});

		setTimeout(doHeartbeat, options?.interval ?? 60000);
	}

	doHeartbeat();
}