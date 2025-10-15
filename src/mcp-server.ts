import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Create server instance
const server = new McpServer({
  name: "nodemp", //name of the server
  version: "1.0.0", //version of the server
  //optionnal
  capabilities: {
    resources: {},
    tools: {},
  },
});

const transport = new StdioServerTransport(); //Manages input, data to the server and writes output stdin -> server -> stdout
await server.connect(transport);
console.error("MCP server is running on stdio");
