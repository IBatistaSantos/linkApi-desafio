class IntegrationFailed extends Error {
  constructor() {
    super("Integration failed");
    this.name = "Integration failed";
  }
}

export { IntegrationFailed };
