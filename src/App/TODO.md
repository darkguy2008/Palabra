* Convert menu layout to scrollable div layout like main chat window to stop using position: fixed on footer
* room-selector component with channel/message name + unread badge (and maybe icon/avatar?)
  * Custom style, looks so plain...
* New chat dialog
  * Also add Ctrl+T shortcut
* Figure out best way to show message timestamps
* Add server selector/UI in standalone app
  * Try to somehow sandbox it, to avoid the JS world snooping around
* Add markdown message display, by default all messages are edited in plain-text, but if using markdown, it should work
* Send messages
  * Also edit sent messages
* Quote messages
* Someday make a compatible Android/iOS app
  * Maybe do it in Ionic a little bit so can use the same codebase for desktop/web/mobile apps?!
* Handle status (available, busy, away, custom...)
* Allow login/logout
  * Add Angular enableLocalAccounts flag
* Add some kind of admin panel
* Prepare database and API
* Add SSO with OIDC
