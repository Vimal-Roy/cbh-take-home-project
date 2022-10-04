const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the hash literal when given input of 10", () => {
    const trivialKey = deterministicPartitionKey(10);
    expect(trivialKey).toBe("0af1abec626b095704a5b03c13e47c3c18bcedb78566b6cadc4d5201cdb27691ce62fe60835587d41c8290616ad4ff1018b14dac6f83ff005922b25925fa4e6a");
  });
  it("Returns the hash literal when given input of 257", () => {
    const trivialKey = deterministicPartitionKey(257);
    expect(trivialKey).toBe("d8cd84bb2152d5d6c6fb27093048148d3b33123e5b7105bcfaf8bbe1ed97836143541a86843b45a132ab2096a787cec9139091e8f3e737afda8b1d272c31fb5a");
  });
});
