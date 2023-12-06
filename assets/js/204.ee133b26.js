(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{760:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"interacting-with-the-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-the-node"}},[e._v("#")]),e._v(" Interacting with the Node")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("There are multiple ways to interact with a node: using the CLI, using gRPC or using the REST endpoints.")]),e._v(" "),o("h2",{attrs:{id:"using-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli"}},[e._v("#")]),e._v(" Using the CLI")]),e._v(" "),o("p",[e._v("Now that your very own node is running, it is time to try sending tokens from the first account you created to a second account. In a new terminal window, start by running the following query command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgcXVlcnkgYmFuayBiYWxhbmNlcyAkTVlfVkFMSURBVE9SX0FERFJFU1MgLS1jaGFpbi1pZD1oYXFxXzExMjM1LTEK"}}),e._v(" "),o("p",[e._v("You should see the current balance of the account you created, equal to the original balance of tokens you granted it minus the amount you delegated via the "),o("code",[e._v("gentx")]),e._v(". Now, create a second account:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQga2V5cyBhZGQgcmVjaXBpZW50IC0ta2V5cmluZy1iYWNrZW5kPWZpbGUKCiMgUHV0IHRoZSBnZW5lcmF0ZWQgYWRkcmVzcyBpbiBhIHZhcmlhYmxlIGZvciBsYXRlciB1c2UuClJFQ0lQSUVOVD0kKGhhcXFkIGtleXMgc2hvdyByZWNpcGllbnQgLWEgLS1rZXlyaW5nLWJhY2tlbmQ9ZmlsZSkK"}}),e._v(" "),o("p",[e._v("The command above creates a local key-pair that is not yet registered on the chain. An account is created the first time it receives tokens from another account. Now, run the following command to send tokens to the "),o("code",[e._v("recipient")]),e._v(" account:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgdHggYmFuayBzZW5kICRNWV9WQUxJREFUT1JfQUREUkVTUyAkUkVDSVBJRU5UIDEwMDAwMDBhSVNMTSAtLWNoYWluLWlkPWhhcXFfMTEyMzUtMSAtLWtleXJpbmctYmFja2VuZD1maWxlCgojIENoZWNrIHRoYXQgdGhlIHJlY2lwaWVudCBhY2NvdW50IGRpZCByZWNlaXZlIHRoZSB0b2tlbnMuCmhhcXFkIHF1ZXJ5IGJhbmsgYmFsYW5jZXMgJFJFQ0lQSUVOVCAtLWNoYWluLWlkPWhhcXFfMTEyMzUtMQo="}}),e._v(" "),o("p",[e._v("Finally, delegate some of the stake tokens sent to the "),o("code",[e._v("recipient")]),e._v(" account to the validator:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgdHggc3Rha2luZyBkZWxlZ2F0ZSAkKGhhcXFkIGtleXMgc2hvdyBteV92YWxpZGF0b3IgLS1iZWNoIHZhbCAtYSAtLWtleXJpbmctYmFja2VuZD1maWxlKSA1MDBhSVNMTSAtLWZyb209cmVjaXBpZW50IC0tY2hhaW4taWQ9aGFxcV8xMTIzNS0xIC0ta2V5cmluZy1iYWNrZW5kPWZpbGUKCiMgUXVlcnkgdGhlIHRvdGFsIGRlbGVnYXRpb25zIHRvIGB2YWxpZGF0b3JgLgpoYXFxZCBxdWVyeSBzdGFraW5nIGRlbGVnYXRpb25zLXRvICQoaGFxcWQga2V5cyBzaG93IG15X3ZhbGlkYXRvciAtLWJlY2ggdmFsIC1hIC0ta2V5cmluZy1iYWNrZW5kPWZpbGUpIC0tY2hhaW4taWQ9aGFxcV8xMTIzNS0xCg=="}}),e._v(" "),o("p",[e._v("You should see two delegations, the first one made from the "),o("code",[e._v("gentx")]),e._v(", and the second one you just performed from the "),o("code",[e._v("recipient")]),e._v(" account.")]),e._v(" "),o("h2",{attrs:{id:"using-grpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-grpc"}},[e._v("#")]),e._v(" Using gRPC")]),e._v(" "),o("p",[e._v("The Protobuf ecosystem developed tools for different use cases, including code-generation from "),o("code",[e._v("*.proto")]),e._v(" files into various languages. These tools allow the building of clients easily. Often, the client connection (i.e. the transport) can be plugged and replaced very easily. Let's explore one of the most popular transport: gRPC.")]),e._v(" "),o("p",[e._v("Since the code generation library largely depends on your own tech stack, we will only present three alternatives:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("grpcurl")]),e._v(" for generic debugging and testing")]),e._v(" "),o("li",[e._v("programmatically via Go")]),e._v(" "),o("li",[e._v("CosmJS for JavaScript/TypeScript developers")])]),e._v(" "),o("h3",{attrs:{id:"grpcurl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpcurl"}},[e._v("#")]),e._v(" grpcurl")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/fullstorydev/grpcurl",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpcurl"),o("OutboundLink")],1),e._v(" is like "),o("code",[e._v("curl")]),e._v(" but for gRPC. It is also available as a Go library, but we will use it only as a CLI command for debugging and testing purposes. Follow the instructions in the previous link to install it.")]),e._v(" "),o("p",[e._v("Assuming you have a local node running (either a localnet, or connected a live network), you should be able to run the following command to list the Protobuf services available (you can replace "),o("code",[e._v("localhost:9000")]),e._v(" by the gRPC server endpoint of another node, which is configured under the "),o("code",[e._v("grpc.address")]),e._v(" field inside "),o("code",[e._v("app.toml")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IGxvY2FsaG9zdDo5MDkwIGxpc3QK"}}),e._v(" "),o("p",[e._v("You should see a list of gRPC services, like "),o("code",[e._v("cosmos.bank.v1beta1.Query")]),e._v(". This is called reflection, which is a Protobuf endpoint returning a description of all available endpoints. Each of these represents a different Protobuf service, and each service exposes multiple RPC methods you can query against.")]),e._v(" "),o("p",[e._v("In order to get a description of the service you can run the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBTZXJ2aWNlIHdlIHdhbnQgdG8gaW5zcGVjdApncnBjdXJsIFwKICAgIGxvY2FsaG9zdDo5MDkwIFwKICAgIGRlc2NyaWJlIGNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnkgICAgICAgICAgICAgICAgICAK"}}),e._v(" "),o("p",[e._v("It's also possible to execute an RPC call to query the node for information:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICAtcGxhaW50ZXh0CiAgICAtZCAneyZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7JE1ZX1ZBTElEQVRPUiZxdW90O30nIFwKICAgIGxvY2FsaG9zdDo5MDkwIFwKICAgIGNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnkvQWxsQmFsYW5jZXMK"}}),e._v(" "),o("h4",{attrs:{id:"query-for-historical-state-using-grpcurl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-grpcurl"}},[e._v("#")]),e._v(" Query for historical state using grpcurl")]),e._v(" "),o("p",[e._v("You may also query for historical data by passing some "),o("a",{attrs:{href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC metadata"),o("OutboundLink")],1),e._v(" to the query: the "),o("code",[e._v("x-cosmos-block-height")]),e._v(" metadata should contain the block to query. Using grpcurl as above, the command looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICAtcGxhaW50ZXh0IFwKICAgIC1IICZxdW90O3gtY29zbW9zLWJsb2NrLWhlaWdodDogMjc5MjU2JnF1b3Q7IFwKICAgIC1kICd7JnF1b3Q7YWRkcmVzcyZxdW90OzomcXVvdDskTVlfVkFMSURBVE9SJnF1b3Q7fScgXAogICAgbG9jYWxob3N0OjkwOTAgXAogICAgY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeS9BbGxCYWxhbmNlcwo="}}),e._v(" "),o("p",[e._v("Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response.")]),e._v(" "),o("h3",{attrs:{id:"programmatically-via-go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#programmatically-via-go"}},[e._v("#")]),e._v(" Programmatically via Go")]),e._v(" "),o("p",[e._v("The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection, and use the Protobuf-generated client code to query the gRPC server.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2NvbnRleHQmcXVvdDsKICAgICZxdW90O2ZtdCZxdW90OwoKICAmcXVvdDtnb29nbGUuZ29sYW5nLm9yZy9ncnBjJnF1b3Q7CgogICAgc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKICAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CikKCmZ1bmMgcXVlcnlTdGF0ZSgpIGVycm9yIHsKICAgIG15QWRkcmVzcywgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMigmcXVvdDtldGguLi4mcXVvdDspCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgLy8gQ3JlYXRlIGEgY29ubmVjdGlvbiB0byB0aGUgZ1JQQyBzZXJ2ZXIuCiAgICBncnBjQ29ubiA6PSBncnBjLkRpYWwoCiAgICAgICAgJnF1b3Q7MTI3LjAuMC4xOjkwOTAmcXVvdDssIC8vIHlvdXIgZ1JQQyBzZXJ2ZXIgYWRkcmVzcy4KICAgICAgICBncnBjLldpdGhJbnNlY3VyZSgpLCAvLyBUaGUgU0RLIGRvZXNuJ3Qgc3VwcG9ydCBhbnkgdHJhbnNwb3J0IHNlY3VyaXR5IG1lY2hhbmlzbS4KICAgICkKICAgIGRlZmVyIGdycGNDb25uLkNsb3NlKCkKCiAgICAvLyBUaGlzIGNyZWF0ZXMgYSBnUlBDIGNsaWVudCB0byBxdWVyeSB0aGUgeC9iYW5rIHNlcnZpY2UuCiAgICBiYW5rQ2xpZW50IDo9IGJhbmt0eXBlcy5OZXdRdWVyeUNsaWVudChncnBjQ29ubikKICAgIGJhbmtSZXMsIGVyciA6PSBiYW5rQ2xpZW50LkJhbGFuY2UoCiAgICAgICAgY29udGV4dC5CYWNrZ3JvdW5kKCksCiAgICAgICAgJmFtcDtiYW5rdHlwZXMuUXVlcnlCYWxhbmNlUmVxdWVzdHtBZGRyZXNzOiBteUFkZHJlc3MsIERlbm9tOiAmcXVvdDtldGgmcXVvdDt9LAogICAgKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIGZtdC5QcmludGxuKGJhbmtSZXMuR2V0QmFsYW5jZSgpKSAvLyBQcmludHMgdGhlIGFjY291bnQgYmFsYW5jZQoKICAgIHJldHVybiBuaWwKfQo="}}),e._v(" "),o("h4",{attrs:{id:"query-for-historical-state-using-go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-go"}},[e._v("#")]),e._v(" Query for historical state using Go")]),e._v(" "),o("p",[e._v("Querying for historical blocks is done by adding the block height metadata in the gRPC request.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAmcXVvdDtjb250ZXh0JnF1b3Q7CiAgJnF1b3Q7Zm10JnF1b3Q7CgogICZxdW90O2dvb2dsZS5nb2xhbmcub3JnL2dycGMmcXVvdDsKICAmcXVvdDtnb29nbGUuZ29sYW5nLm9yZy9ncnBjL21ldGFkYXRhJnF1b3Q7CgogIGdycGN0eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2dycGMmcXVvdDsKICAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CikKCmZ1bmMgcXVlcnlTdGF0ZSgpIGVycm9yIHsKICAgIC8vIC0tc25pcC0tCgogICAgdmFyIGhlYWRlciBtZXRhZGF0YS5NRAogICAgYmFua1JlcywgZXJyID0gYmFua0NsaWVudC5CYWxhbmNlKAogICAgICAgIG1ldGFkYXRhLkFwcGVuZFRvT3V0Z29pbmdDb250ZXh0KGNvbnRleHQuQmFja2dyb3VuZCgpLCBncnBjdHlwZXMuR1JQQ0Jsb2NrSGVpZ2h0SGVhZGVyLCAmcXVvdDsxMiZxdW90OyksIC8vIEFkZCBtZXRhZGF0YSB0byByZXF1ZXN0CiAgICAgICAgJmFtcDtiYW5rdHlwZXMuUXVlcnlCYWxhbmNlUmVxdWVzdHtBZGRyZXNzOiBteUFkZHJlc3MsIERlbm9tOiBkZW5vbX0sCiAgICAgICAgZ3JwYy5IZWFkZXIoJmFtcDtoZWFkZXIpLCAvLyBSZXRyaWV2ZSBoZWFkZXIgZnJvbSByZXNwb25zZQogICAgKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQogICAgYmxvY2tIZWlnaHQgPSBoZWFkZXIuR2V0KGdycGN0eXBlcy5HUlBDQmxvY2tIZWlnaHRIZWFkZXIpCgogICAgZm10LlByaW50bG4oYmxvY2tIZWlnaHQpIC8vIFByaW50cyB0aGUgYmxvY2sgaGVpZ2h0ICgxMikKCiAgICByZXR1cm4gbmlsCn0K"}}),e._v(" "),o("h3",{attrs:{id:"cosmjs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmjs"}},[e._v("#")]),e._v(" CosmJS")]),e._v(" "),o("p",[e._v("CosmJS documentation can be found at "),o("a",{attrs:{href:"https://cosmos.github.io/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cosmos.github.io/cosmjs"),o("OutboundLink")],1),e._v(". As of January 2021, CosmJS documentation is still work in progress.")]),e._v(" "),o("h2",{attrs:{id:"using-the-rest-endpoints"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-rest-endpoints"}},[e._v("#")]),e._v(" Using the REST Endpoints")]),e._v(" "),o("p",[e._v("All gRPC services on the Cosmos SDK are made available for more convenient REST-based queries through gRPC-gateway. The format of the URL path is based on the Protobuf service method's full-qualified name, but may contain small customizations so that final URLs look more idiomatic. For example, the REST endpoint for the "),o("code",[e._v("cosmos.bank.v1beta1.Query/AllBalances")]),e._v(" method is "),o("code",[e._v("GET /cosmos/bank/v1beta1/balances/{address}")]),e._v(". Request arguments are passed as query parameters.")]),e._v(" "),o("p",[e._v("As a concrete example, the "),o("code",[e._v("curl")]),e._v(" command to make balances request is:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBcCiAgICAtWCBHRVQgXAogICAgLUggJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IFwKICAgIGh0dHA6Ly9sb2NhbGhvc3Q6MTMxNy9jb3Ntb3MvYmFuay92MWJldGExL2JhbGFuY2VzLyRNWV9WQUxJREFUT1IK"}}),e._v(" "),o("p",[e._v("Make sure to replace "),o("code",[e._v("localhost:1317")]),e._v(" with the REST endpoint of your node, configured under the "),o("code",[e._v("api.address")]),e._v(" field.")]),e._v(" "),o("p",[e._v("The list of all available REST endpoints is available as a Swagger specification file, it can be viewed at "),o("code",[e._v("localhost:1317/swagger")]),e._v(". Make sure that the "),o("code",[e._v("api.swagger")]),e._v(" field is set to true in your "),o("RouterLink",{attrs:{to:"/run-node.html#configuring-the-node-using-apptoml"}},[o("code",[e._v("app.toml")])]),e._v(" file.")],1),e._v(" "),o("h3",{attrs:{id:"query-for-historical-state-using-rest"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-rest"}},[e._v("#")]),e._v(" Query for historical state using REST")]),e._v(" "),o("p",[e._v("Querying for historical state is done using the HTTP header "),o("code",[e._v("x-cosmos-block-height")]),e._v(". For example, a curl command would look like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBcCiAgICAtWCBHRVQgXAogICAgLUggJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IFwKICAgIC1IICZxdW90O3gtY29zbW9zLWJsb2NrLWhlaWdodDogMjc5MjU2JnF1b3Q7CiAgICBodHRwOi8vbG9jYWxob3N0OjEzMTcvY29zbW9zL2JhbmsvdjFiZXRhMS9iYWxhbmNlcy8kTVlfVkFMSURBVE9SCg=="}}),e._v(" "),o("p",[e._v("Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response.")]),e._v(" "),o("h3",{attrs:{id:"cross-origin-resource-sharing-cors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cross-origin-resource-sharing-cors"}},[e._v("#")]),e._v(" Cross-Origin Resource Sharing (CORS)")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS policies"),o("OutboundLink")],1),e._v(" are not enabled by default to help with security. If you would like to use the rest-server in a public environment we recommend you provide a reverse proxy, this can be done with "),o("a",{attrs:{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx"),o("OutboundLink")],1),e._v(". For testing and development purposes there is an "),o("code",[e._v("enabled-unsafe-cors")]),e._v(" field inside "),o("RouterLink",{attrs:{to:"/run-node.html#configuring-the-node-using-apptoml"}},[o("code",[e._v("app.toml")])]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);