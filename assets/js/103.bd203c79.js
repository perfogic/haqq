(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{661:function(e,t,r){"use strict";r.r(t);var o=r(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"validator-security-checklist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validator-security-checklist"}},[e._v("#")]),e._v(" Validator Security Checklist")]),e._v(" "),r("p",{attrs:{synopsis:""}},[e._v("Conduct a security checklist survey to go through the security measures of a validator")]),e._v(" "),r("h2",{attrs:{id:"pre-requisite-readings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),r("ul",[r("li",{attrs:{prereq:""}},[r("RouterLink",{attrs:{to:"/guides/validators/security.html"}},[e._v("Validator Security")])],1)]),e._v(" "),r("h2",{attrs:{id:"conduct-survey-on-general-controls-of-hosting-data-centre"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conduct-survey-on-general-controls-of-hosting-data-centre"}},[e._v("#")]),e._v(" Conduct Survey on General Controls of Hosting Data Centre")]),e._v(" "),r("p",[e._v("Perform a survey on the hosting data centre, and compare your result with the best practice suggested below")]),e._v(" "),r("p",[e._v("For example, your hosting data centre should have following features")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Controls Category")]),e._v(" "),r("th",[e._v("Description of Best Practice")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Data Center")]),e._v(" "),r("td",[e._v("Redundant Power")])]),e._v(" "),r("tr",[r("td",[e._v("Data Center")]),e._v(" "),r("td",[e._v("Redundant Cooling")])]),e._v(" "),r("tr",[r("td",[e._v("Data Center")]),e._v(" "),r("td",[e._v("Redundant Networking")])]),e._v(" "),r("tr",[r("td",[e._v("Data Center")]),e._v(" "),r("td",[e._v("Physical Cage/Gated Access")])]),e._v(" "),r("tr",[r("td",[e._v("Data Center")]),e._v(" "),r("td",[e._v("Remote Alerting Security Camera")])])])]),e._v(" "),r("h2",{attrs:{id:"current-status-of-node-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#current-status-of-node-setup"}},[e._v("#")]),e._v(" Current Status of Node Setup")]),e._v(" "),r("p",[e._v("Perform a survey on your current status of node setup, and compare your result with the best practice suggested below")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Controls Category")]),e._v(" "),r("th",[e._v("Description of Best Practice")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("General System Security")]),e._v(" "),r("td",[e._v("Operating system appropriately patched. Kernel is updated to latest stable version. The node should be operated in x86_64 environment")])]),e._v(" "),r("tr",[r("td",[e._v("General System Security")]),e._v(" "),r("td",[e._v("Auto-updates for operation system is configured. Toolkit for automatic upgrades exists (e.g. auter, yum-cron, dnf-automatic, unattended-upgrades)")])]),e._v(" "),r("tr",[r("td",[e._v("General System Security")]),e._v(" "),r("td",[e._v("Security framework enabled and enforcing. SELinux / AppArmor / Tomoyo / Grsecurity Enabled")])]),e._v(" "),r("tr",[r("td",[e._v("General System Security")]),e._v(" "),r("td",[e._v("No insecure and unnecessary services Installed. (e.g. telnet, rsh, inetd, etc ...)")])]),e._v(" "),r("tr",[r("td",[e._v("General System Security")]),e._v(" "),r("td",[e._v("GRUB boot loader password is configured. Grub2 configured with password")])]),e._v(" "),r("tr",[r("td",[e._v("General System Security")]),e._v(" "),r("td",[e._v("Only root permissions on core system files")])]),e._v(" "),r("tr",[r("td",[e._v("File Directory Security")]),e._v(" "),r("td",[e._v("Secure the directory "),r("code",[e._v("~/.haqqd")]),e._v(" to be accessible by owner only")])]),e._v(" "),r("tr",[r("td",[e._v("Binary Configuration")]),e._v(" "),r("td",[e._v("Recommend the following settings in config.toml for both performance and security - For "),r("strong",[e._v("sentry nodes")]),e._v(": "),r("code",[e._v('max_num_inbound_peers = 500, max_num_outbound_peers = 50, flush_throttle_timeout = "300ms"')]),e._v(" - For "),r("strong",[e._v("validator node")]),e._v(": "),r("code",[e._v('max_num_inbound_peers = 100, max_num_outbound_peers = 10, flush_throttle_timeout = "100ms"')])])]),e._v(" "),r("tr",[r("td",[e._v("Account Security & Remote Access")]),e._v(" "),r("td",[e._v("Following Password policies are enforced: No Blank Passwords; Weak Passwords Not Allowed")])]),e._v(" "),r("tr",[r("td",[e._v("Account Security & Remote Access")]),e._v(" "),r("td",[e._v("Following SSH configurations are enabled: PermitRootLogin: "),r("code",[e._v("no")]),e._v("; PasswordAuthentication "),r("code",[e._v("no")]),e._v("; ChallengeResponseAuthentication "),r("code",[e._v("no")]),e._v("; UsePAM "),r("code",[e._v("yes")]),e._v("; AllowUsers "),r("code",[e._v("Necessary user only")]),e._v("; AllowGroups "),r("code",[e._v("Necessary group only")]),e._v(".")])]),e._v(" "),r("tr",[r("td",[e._v("Networking")]),e._v(" "),r("td",[e._v("Network throughput test using speedtest. Recommend to have at least 5 Mbps upload, 5 Mbps download)")])]),e._v(" "),r("tr",[r("td",[e._v("Networking")]),e._v(" "),r("td",[e._v("Host-based (e.g. iptables) or cloud-based (e.g. AWS Security Group) firewall is enabled to protect all the involved nodes. Remote management ports (e.g. SSH - TCP 22) should only be exposed to selected IP instead of the internet. No overly permissive rules (e.g. wide range of allowed ports 1-65535) should be set. For internal communication channels between nodes, they should be set with specific source and destination addresses. For internet reachable nodes, set TCP 26656 to be the only incoming port, if possible.")])]),e._v(" "),r("tr",[r("td",[e._v("Networking")]),e._v(" "),r("td",[e._v("Intrusion Detection / Prevention System (e.g. Fail2Ban, Snort, OSSEC) is installed and enforcing")])]),e._v(" "),r("tr",[r("td",[e._v("Networking")]),e._v(" "),r("td",[e._v("Setup sentry node architecture to protect validator node, and set firewall rules to restrict direct internet access to it.")])]),e._v(" "),r("tr",[r("td",[e._v("Networking")]),e._v(" "),r("td",[e._v("The Remote Procedure Call (RPC) provides sensitive operations and information that is not supposed to be exposed to the Internet. By default, RPC is on and allow connection from 127.0.0.1 only. "),r("strong",[e._v("Please be extremely careful")]),e._v(" if you need to allow RPC from other IP addresses.")])]),e._v(" "),r("tr",[r("td",[e._v("Redundancy")]),e._v(" "),r("td",[e._v("Hot standby node is setup with the same configuration as main node")])]),e._v(" "),r("tr",[r("td",[e._v("Redundancy")]),e._v(" "),r("td",[e._v("System monitoring and alerting is setup to alert owners on anomalies")])]),e._v(" "),r("tr",[r("td",[e._v("Key Management")]),e._v(" "),r("td",[e._v("Setup "),r("RouterLink",{attrs:{to:"/guides/kms/kms.html"}},[e._v("Tendermint KMS")]),e._v(" with HSM or equivalent online service, which should replace the static key file.")],1)]),e._v(" "),r("tr",[r("td",[e._v("DDOS")]),e._v(" "),r("td",[e._v("Setup validator in accordance with sentry architecture. Kindly refer to the setup "),r("a",{attrs:{href:"https://docs.tendermint.com/master/nodes/validators.html#setting-up-a-validator",target:"_blank",rel:"noopener noreferrer"}},[e._v("instruction"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("detailed description"),r("OutboundLink")],1),e._v(".")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);