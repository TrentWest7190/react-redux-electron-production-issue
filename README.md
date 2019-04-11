Demonstrating some issue with react-redux in a built production app using electron-webpack and webpack-builder.

# Recreation steps

1. clone repository
2. `yarn`
3. `yarn dev` to start the development version of the app. Note that the functionality is working as intended.
4. `yarn dist` to build production app
5. navigate to `dist/win-unpacked/react-redux-electron-production-issue.exe` and run it. Note that the counter no longer increases.

Installing and using the redux devtools shows that even in production, the redux action is getting fired. Similarly, using the react devtools shows that the `Provider` component is recieving these changes and the state is reflected correctly. However, the mapStateToProps function in `App.js` is only ever run once, when the component is mounted, and never again despite the redux state updating.

Devtools are included in the `devtools` folder for convienience.