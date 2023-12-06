(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{759:function(t,e,a){"use strict";a.r(e);var o=a(1),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"haqqd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#haqqd"}},[t._v("#")]),t._v(" "),a("code",[t._v("haqqd")])]),t._v(" "),a("p",{attrs:{synopsis:""}},[a("code",[t._v("haqqd")]),t._v(" is the all-in-one command-line interface. It supports wallet management, queries and transaction operations")]),t._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[t._v("#")]),t._v(" Pre-requisite Readings")]),t._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/quickstart/installation.html"}},[t._v("Installation")])],1)]),t._v(" "),a("h2",{attrs:{id:"build-and-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-configuration"}},[t._v("#")]),t._v(" Build and Configuration")]),t._v(" "),a("h3",{attrs:{id:"using-haqqd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-haqqd"}},[t._v("#")]),t._v(" Using "),a("code",[t._v("haqqd")])]),t._v(" "),a("p",[t._v("After you have obtained the latest "),a("code",[t._v("haqqd")]),t._v(" binary, run:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgW2NvbW1hbmRdCg=="}}),t._v(" "),a("p",[t._v("to execute cli commands.")]),t._v(" "),a("p",[t._v("Check the version you are running using")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgdmVyc2lvbgo="}}),t._v(" "),a("p",[t._v("There is also a "),a("code",[t._v("-h")]),t._v(", "),a("code",[t._v("--help")]),t._v(" command available")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgLWgK"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("You can also enable auto-completion with the "),a("code",[t._v("haqqd completion")]),t._v(" command. For example, at the start of a bash session, run "),a("code",[t._v(". <(haqqd completion)")]),t._v(", and all "),a("code",[t._v("haqqd")]),t._v(" subcommands will be auto-completed.")])]),t._v(" "),a("h3",{attrs:{id:"config-and-data-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-and-data-directory"}},[t._v("#")]),t._v(" Config and data directory")]),t._v(" "),a("p",[t._v("By default, your config and data are stored in the folder located at the "),a("code",[t._v("~/.haqqd")]),t._v(" directory.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"LiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyB+Ly5oYXFxZAogIOKUnOKUgOKUgCBkYXRhLyAgICAgICAgICAgICAgICAgICAgICAgICAgICMgQ29udGFpbnMgdGhlIGRhdGFiYXNlcyB1c2VkIGJ5IHRoZSBub2RlLgogIOKUlOKUgOKUgCBjb25maWcvCiAgICAgIOKUnOKUgOKUgCBhcHAudG9tbCAgICAgICAgICAgICAgICAgICAjIEFwcGxpY2F0aW9uLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBmaWxlLgogICAgICDilJzilIDilIAgY29uZmlnLnRvbWwgICAgICAgICAgICAgICAgIyBUZW5kZXJtaW50LXJlbGF0ZWQgY29uZmlndXJhdGlvbiBmaWxlLgogICAgICDilJzilIDilIAgZ2VuZXNpcy5qc29uICAgICAgICAgICAgICAgIyBUaGUgZ2VuZXNpcyBmaWxlLgogICAgICDilJzilIDilIAgbm9kZV9rZXkuanNvbiAgICAgICAgICAgICAgIyBQcml2YXRlIGtleSB0byB1c2UgZm9yIG5vZGUgYXV0aGVudGljYXRpb24gaW4gdGhlIHAycCBwcm90b2NvbC4KICAgICAg4pSU4pSA4pSAIHByaXZfdmFsaWRhdG9yX2tleS5qc29uICAgICMgUHJpdmF0ZSBrZXkgdG8gdXNlIGFzIGEgdmFsaWRhdG9yIGluIHRoZSBjb25zZW5zdXMgcHJvdG9jb2wuCg=="}}),t._v(" "),a("p",[t._v("To specify the "),a("code",[t._v("haqqd")]),t._v(" config and data storage directory; you can update it using the global flag "),a("code",[t._v("--home <directory>")])]),t._v(" "),a("h3",{attrs:{id:"configuring-the-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-node"}},[t._v("#")]),t._v(" Configuring the Node")]),t._v(" "),a("p",[t._v("The Cosmos SDK automatically generates two configuration files inside "),a("code",[t._v("~/.haqqd/config")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("config.toml")]),t._v(": used to configure the Tendermint, learn more on "),a("a",{attrs:{href:"https://docs.tendermint.com/master/nodes/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint's documentation"),a("OutboundLink")],1),t._v(",")]),t._v(" "),a("li",[a("code",[t._v("app.toml")]),t._v(": generated by the Cosmos SDK, and used to configure your app, such as state pruning strategies, telemetry, gRPC and REST servers configuration, state sync, JSON-RPC, etc.")])]),t._v(" "),a("p",[t._v("Both files are heavily commented, please refer to them directly to tweak your node.")]),t._v(" "),a("p",[t._v("One example config to tweak is the "),a("code",[t._v("minimum-gas-prices")]),t._v(" field inside "),a("code",[t._v("app.toml")]),t._v(", which defines the minimum amount the validator node is willing to accept for processing a transaction. It is an anti spam mechanism and it will reject incoming transactions with less than the minimum gas prices.")]),t._v(" "),a("p",[t._v("If it's empty, make sure to edit the field with some value, for example "),a("code",[t._v("10token")]),t._v(", or else the node will halt on startup.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"ICMgVGhlIG1pbmltdW0gZ2FzIHByaWNlcyBhIHZhbGlkYXRvciBpcyB3aWxsaW5nIHRvIGFjY2VwdCBmb3IgcHJvY2Vzc2luZyBhCiAjIHRyYW5zYWN0aW9uLiBBIHRyYW5zYWN0aW9uJ3MgZmVlcyBtdXN0IG1lZXQgdGhlIG1pbmltdW0gb2YgYW55IGRlbm9taW5hdGlvbgogIyBzcGVjaWZpZWQgaW4gdGhpcyBjb25maWcgKGUuZy4gMC4yNXRva2VuMTswLjAwMDF0b2tlbjIpLgogbWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7MGFJU0xNJnF1b3Q7Cg=="}}),t._v(" "),a("h3",{attrs:{id:"pruning-of-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pruning-of-state"}},[t._v("#")]),t._v(" Pruning of State")]),t._v(" "),a("p",[t._v("There are four strategies for pruning state. These strategies apply only to state and do not apply to block storage.\nTo set pruning, adjust the "),a("code",[t._v("pruning")]),t._v(" parameter in the "),a("code",[t._v("~/.haqqd/config/app.toml")]),t._v(" file.\nThe following pruning state settings are available:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("everything")]),t._v(": Prune all saved states other than the current state.")]),t._v(" "),a("li",[a("code",[t._v("nothing")]),t._v(": Save all states and delete nothing.")]),t._v(" "),a("li",[a("code",[t._v("default")]),t._v(": Save the last 100 states and the state of every 10,000th block.")]),t._v(" "),a("li",[a("code",[t._v("custom")]),t._v(": Specify pruning settings with the "),a("code",[t._v("pruning-keep-recent")]),t._v(", "),a("code",[t._v("pruning-keep-every")]),t._v(", and "),a("code",[t._v("pruning-interval")]),t._v(" parameters.")])]),t._v(" "),a("p",[t._v("By default, every node is in "),a("code",[t._v("default")]),t._v(" mode which is the recommended setting for most environments.\nIf you would like to change your nodes pruning strategy then you must do so when the node is initialized. Passing a flag when starting "),a("code",[t._v("haqq")]),t._v(" will always override settings in the "),a("code",[t._v("app.toml")]),t._v(" file, if you would like to change your node to the "),a("code",[t._v("everything")]),t._v(" mode then you can pass the "),a("code",[t._v("---pruning everything")]),t._v(" flag when you call "),a("code",[t._v("haqqd start")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[t._v("IMPORTANT")]),t._v(":\nWhen you are pruning state you will not be able to query the heights that are not in your store.")])]),t._v(" "),a("h3",{attrs:{id:"client-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-configuration"}},[t._v("#")]),t._v(" Client configuration")]),t._v(" "),a("p",[t._v("We can view the default client config setting by using "),a("code",[t._v("haqqd config")]),t._v(" command:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgY29uZmlnCnsKICZxdW90O2NoYWluLWlkJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAmcXVvdDtrZXlyaW5nLWJhY2tlbmQmcXVvdDs6ICZxdW90O29zJnF1b3Q7LAogJnF1b3Q7b3V0cHV0JnF1b3Q7OiAmcXVvdDt0ZXh0JnF1b3Q7LAogJnF1b3Q7bm9kZSZxdW90OzogJnF1b3Q7dGNwOi8vbG9jYWxob3N0OjI2NjU3JnF1b3Q7LAogJnF1b3Q7YnJvYWRjYXN0LW1vZGUmcXVvdDs6ICZxdW90O3N5bmMmcXVvdDsKfQo="}}),t._v(" "),a("p",[t._v("We can make changes to the default settings upon our choices, so it allows users to set the configuration beforehand all at once, so it would be ready with the same config afterward.")]),t._v(" "),a("p",[t._v("For example, the chain identifier can be changed to "),a("code",[t._v("haqq_11235-1")]),t._v(" from a blank name by using:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgY29uZmlnICZxdW90O2NoYWluLWlkJnF1b3Q7IGhhcXFfMTEyMzUtMQpoYXFxZCBjb25maWcKewogJnF1b3Q7Y2hhaW4taWQmcXVvdDs6ICZxdW90O2hhcXFfMTEyMzUtMSZxdW90OywKICZxdW90O2tleXJpbmctYmFja2VuZCZxdW90OzogJnF1b3Q7b3MmcXVvdDssCiAmcXVvdDtvdXRwdXQmcXVvdDs6ICZxdW90O3RleHQmcXVvdDssCiAmcXVvdDtub2RlJnF1b3Q7OiAmcXVvdDt0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTcmcXVvdDssCiAmcXVvdDticm9hZGNhc3QtbW9kZSZxdW90OzogJnF1b3Q7c3luYyZxdW90Owp9Cg=="}}),t._v(" "),a("p",[t._v("Other values can be changed in the same way.")]),t._v(" "),a("p",[t._v("Alternatively, we can directly make the changes to the config values in one place at client.toml. It is under the path of "),a("code",[t._v(".haqq/config/client.toml")]),t._v(" in the folder where we installed haqq:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgQ2xpZW50IENvbmZpZ3VyYXRpb24gIyMjCgojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCgojIFRoZSBuZXR3b3JrIGNoYWluIElECgpjaGFpbi1pZCA9ICZxdW90O2hhcXFfMTEyMzUtMSZxdW90OwoKIyBUaGUga2V5cmluZydzIGJhY2tlbmQsIHdoZXJlIHRoZSBrZXlzIGFyZSBzdG9yZWQgKG9zfGZpbGV8a3dhbGxldHxwYXNzfHRlc3R8bWVtb3J5KQoKa2V5cmluZy1iYWNrZW5kID0gJnF1b3Q7b3MmcXVvdDsKCiMgQ0xJIG91dHB1dCBmb3JtYXQgKHRleHR8anNvbikKCm91dHB1dCA9ICZxdW90O3RleHQmcXVvdDsKCiMgJmx0O2hvc3QmZ3Q7OiZsdDtwb3J0Jmd0OyB0byBUZW5kZXJtaW50IFJQQyBpbnRlcmZhY2UgZm9yIHRoaXMgY2hhaW4KCm5vZGUgPSAmcXVvdDt0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTcmcXVvdDsKCiMgVHJhbnNhY3Rpb24gYnJvYWRjYXN0aW5nIG1vZGUgKHN5bmN8YXN5bmN8YmxvY2spCgpicm9hZGNhc3QtbW9kZSA9ICZxdW90O3N5bmMmcXVvdDsK"}}),t._v(" "),a("p",[t._v("After the necessary changes are made in the "),a("code",[t._v("client.toml")]),t._v(", then save. For example, if we directly change the chain-id from "),a("code",[t._v("haqq_"+t._s(t.$themeConfig.project.testnet_chain_id)+"-2")]),t._v(" to "),a("code",[t._v("haqq_11235-1")]),t._v(", and output to number, it would change instantly as shown below.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgY29uZmlnCnsKICZxdW90O2NoYWluLWlkJnF1b3Q7OiAmcXVvdDtoYXFxXzExMjM1LTEmcXVvdDssCiAmcXVvdDtrZXlyaW5nLWJhY2tlbmQmcXVvdDs6ICZxdW90O29zJnF1b3Q7LAogJnF1b3Q7b3V0cHV0JnF1b3Q7OiAmcXVvdDt0ZXh0JnF1b3Q7LAogJnF1b3Q7bm9kZSZxdW90OzogJnF1b3Q7dGNwOi8vbG9jYWxob3N0OjI2NjU3JnF1b3Q7LAogJnF1b3Q7YnJvYWRjYXN0LW1vZGUmcXVvdDs6ICZxdW90O3N5bmMmcXVvdDsKfQo="}}),t._v(" "),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("p",[t._v("A list of commonly used flags of "),a("code",[t._v("haqqd")]),t._v(" is listed below:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("--chain-id")])]),t._v(" "),a("td",[t._v("Full Chain ID")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("---")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--home")])]),t._v(" "),a("td",[t._v("Directory for config and data")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("~/.haqqd")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--keyring-backend")])]),t._v(" "),a("td",[t._v("Select keyring's backend")]),t._v(" "),a("td",[t._v("os/file/test")]),t._v(" "),a("td",[t._v("os")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("--output")])]),t._v(" "),a("td",[t._v("Output format")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"text"')])])])]),t._v(" "),a("h2",{attrs:{id:"command-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-list"}},[t._v("#")]),t._v(" Command list")]),t._v(" "),a("p",[t._v("A list of commonly used "),a("code",[t._v("haqqd")]),t._v(" commands. You can obtain the full list by using the "),a("code",[t._v("haqqd -h")]),t._v(" command.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Command")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Subcommands (example)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("keys")])]),t._v(" "),a("td",[t._v("Keys management")]),t._v(" "),a("td",[a("code",[t._v("list")]),t._v(", "),a("code",[t._v("show")]),t._v(", "),a("code",[t._v("add")]),t._v(", "),a("code",[t._v("add --recover")]),t._v(", "),a("code",[t._v("delete")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("tx")])]),t._v(" "),a("td",[t._v("Transactions subcommands")]),t._v(" "),a("td",[a("code",[t._v("bank send")]),t._v(", "),a("code",[t._v("ibc-transfer transfer")]),t._v(", "),a("code",[t._v("distribution withdraw-all-rewards")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("query")])]),t._v(" "),a("td",[t._v("Query subcommands")]),t._v(" "),a("td",[a("code",[t._v("bank balance")]),t._v(", "),a("code",[t._v("staking validators")]),t._v(", "),a("code",[t._v("gov proposals")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("tendermint")])]),t._v(" "),a("td",[t._v("Tendermint subcommands")]),t._v(" "),a("td",[a("code",[t._v("show-address")]),t._v(", "),a("code",[t._v("show-node-id")]),t._v(", "),a("code",[t._v("version")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("config")])]),t._v(" "),a("td",[t._v("Client configuration")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("init")])]),t._v(" "),a("td",[t._v("Initialize full node")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("start")])]),t._v(" "),a("td",[t._v("Run full node")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("version")])]),t._v(" "),a("td",[t._v("Haqq version")]),t._v(" "),a("td")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);