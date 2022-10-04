const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let createHash=data=> crypto.createHash("sha3-512").update(data).digest("hex")
  // Stringify the entire event only when partition key is not available in the event
  let processedEvent=event && (event?.partitionKey ? event.partitionKey: JSON.stringify(event))

  let candidate= processedEvent && (processedEvent?.partitionKey ? processedEvent.partitionKey : createHash(processedEvent))
  
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  candidate=(candidate.length > MAX_PARTITION_KEY_LENGTH) ? createHash(candidate) : candidate

  return candidate;
};